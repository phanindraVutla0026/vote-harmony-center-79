
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getCurrentElections, getPastElections, getFutureElections } from '@/data/candidates';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import PageTransition from '@/components/PageTransition';
import { Vote, Clock, ClipboardList, CalendarDays, ChevronRight, Users, Award } from 'lucide-react';

const Index: React.FC = () => {
  const currentElections = getCurrentElections();
  const pastElections = getPastElections();
  const futureElections = getFutureElections();
  
  // Formatting date for display
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  const statItems = [
    { icon: <Users size={24} />, value: "10,000+", label: "Eligible Voters" },
    { icon: <Award size={24} />, value: "12", label: "Candidates" },
    { icon: <Clock size={24} />, value: "3", label: "Active Elections" },
  ];
  
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="pt-28 pb-16 px-4 bg-gradient-to-b from-rkv-light-blue to-white">
            <div className="container mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-rkv-blue mb-5"
                >
                  <Vote className="text-white" size={36} />
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
                >
                  RGUKT RK Valley <span className="text-rkv-blue">Voting Portal</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-xl text-gray-600 max-w-3xl mx-auto"
                >
                  Welcome to the official electronic voting platform for RGUKT RK Valley. Cast your vote securely and efficiently.
                </motion.p>
              </motion.div>
              
              {/* Stats */}
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
              >
                {statItems.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="glass-card rounded-xl p-6 flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-rkv-light-blue flex items-center justify-center mb-3 text-rkv-blue">
                      {stat.icon}
                    </div>
                    <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
                    <span className="text-gray-600">{stat.label}</span>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Elections */}
              <div className="space-y-12">
                {/* Current Elections */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <Clock size={20} className="text-rkv-blue mr-2" />
                      <h2 className="text-2xl font-semibold">Current Elections</h2>
                    </div>
                    <Link 
                      to="/current-voting" 
                      className="text-rkv-blue font-medium text-sm flex items-center hover:underline"
                    >
                      View All <ChevronRight size={16} />
                    </Link>
                  </div>
                  
                  {currentElections.length > 0 ? (
                    <motion.div 
                      variants={container}
                      initial="hidden"
                      animate="show"
                      className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                      {currentElections.map((election) => (
                        <motion.div key={election.id} variants={item}>
                          <Link to="/current-voting">
                            <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                              <CardContent className="p-0">
                                <div className="p-6">
                                  <div className="flex justify-between items-start mb-3">
                                    <h3 className="font-semibold text-lg">{election.title}</h3>
                                    <span className="inline-block px-2 py-1 bg-rkv-light-green text-rkv-green text-xs font-medium rounded-full">
                                      Active
                                    </span>
                                  </div>
                                  <p className="text-gray-600 text-sm mb-4">{election.description}</p>
                                  <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-500">
                                      Ends: {formatDate(election.endDate)}
                                    </span>
                                    <span className="text-rkv-blue font-medium">
                                      {election.candidates.length} Candidates
                                    </span>
                                  </div>
                                </div>
                                <div className="h-2 bg-rkv-blue"></div>
                              </CardContent>
                            </Card>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    <Card className="bg-rkv-off-white border-dashed">
                      <CardContent className="p-6 text-center text-gray-500">
                        No current elections available.
                      </CardContent>
                    </Card>
                  )}
                </div>
                
                {/* Past Elections */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <ClipboardList size={20} className="text-rkv-blue mr-2" />
                      <h2 className="text-2xl font-semibold">Past Elections</h2>
                    </div>
                    <Link 
                      to="/past-voting" 
                      className="text-rkv-blue font-medium text-sm flex items-center hover:underline"
                    >
                      View All <ChevronRight size={16} />
                    </Link>
                  </div>
                  
                  {pastElections.length > 0 ? (
                    <motion.div 
                      variants={container}
                      initial="hidden"
                      animate="show"
                      className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                      {pastElections.map((election) => (
                        <motion.div key={election.id} variants={item}>
                          <Link to="/past-voting">
                            <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                              <CardContent className="p-0">
                                <div className="p-6">
                                  <div className="flex justify-between items-start mb-3">
                                    <h3 className="font-semibold text-lg">{election.title}</h3>
                                    <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                                      Completed
                                    </span>
                                  </div>
                                  <p className="text-gray-600 text-sm mb-4">{election.description}</p>
                                  <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-500">
                                      Ended: {formatDate(election.endDate)}
                                    </span>
                                    <span className="text-rkv-blue font-medium">
                                      View Results
                                    </span>
                                  </div>
                                </div>
                                <div className="h-2 bg-gray-300"></div>
                              </CardContent>
                            </Card>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    <Card className="bg-rkv-off-white border-dashed">
                      <CardContent className="p-6 text-center text-gray-500">
                        No past elections available.
                      </CardContent>
                    </Card>
                  )}
                </div>
                
                {/* Future Elections */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <CalendarDays size={20} className="text-rkv-blue mr-2" />
                      <h2 className="text-2xl font-semibold">Upcoming Elections</h2>
                    </div>
                    <Link 
                      to="/future-voting" 
                      className="text-rkv-blue font-medium text-sm flex items-center hover:underline"
                    >
                      View All <ChevronRight size={16} />
                    </Link>
                  </div>
                  
                  {futureElections.length > 0 ? (
                    <motion.div 
                      variants={container}
                      initial="hidden"
                      animate="show"
                      className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                      {futureElections.map((election) => (
                        <motion.div key={election.id} variants={item}>
                          <Link to="/future-voting">
                            <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                              <CardContent className="p-0">
                                <div className="p-6">
                                  <div className="flex justify-between items-start mb-3">
                                    <h3 className="font-semibold text-lg">{election.title}</h3>
                                    <span className="inline-block px-2 py-1 bg-rkv-light-blue text-rkv-blue text-xs font-medium rounded-full">
                                      Upcoming
                                    </span>
                                  </div>
                                  <p className="text-gray-600 text-sm mb-4">{election.description}</p>
                                  <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-500">
                                      Starts: {formatDate(election.startDate)}
                                    </span>
                                    <span className="text-rkv-blue font-medium">
                                      {election.candidates.length} Candidates
                                    </span>
                                  </div>
                                </div>
                                <div className="h-2 bg-rkv-light-blue"></div>
                              </CardContent>
                            </Card>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    <Card className="bg-rkv-off-white border-dashed">
                      <CardContent className="p-6 text-center text-gray-500">
                        No upcoming elections scheduled.
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
