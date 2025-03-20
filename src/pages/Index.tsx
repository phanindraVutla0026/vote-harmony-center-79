
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getCurrentElections, getPastElections, getFutureElections } from '@/data/candidates';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import PageTransition from '@/components/PageTransition';
import OfficialCarousel from '@/components/OfficialCarousel';
import { Vote, Clock, ClipboardList, CalendarDays, ChevronRight, Users, Award, Phone, Shield, Globe } from 'lucide-react';

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
    { icon: <Users size={24} />, value: "940 Million+", label: "Registered Voters" },
    { icon: <Award size={24} />, value: "543", label: "Lok Sabha Seats" },
    { icon: <Clock size={24} />, value: "5", label: "Active Elections" },
    { icon: <Shield size={24} />, value: "100%", label: "Digital Security" },
  ];
  
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="pt-28 pb-16 px-4 bg-gradient-to-b from-blue-100 via-indigo-50 to-white">
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
                  className="relative w-20 h-20 mx-auto mb-5"
                >
                  <img 
                    src="/lovable-uploads/7e9862c1-b964-4d23-ba20-b8a41967eeb5.png" 
                    alt="Election Commission of India" 
                    className="w-full h-full"
                  />
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
                >
                  Digital <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Voting Platform</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-xl text-gray-600 max-w-3xl mx-auto"
                >
                  Welcome to the official electronic voting platform by the Election Commission of India. Cast your vote securely, transparently, and efficiently.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="mt-8 flex flex-wrap justify-center gap-4"
                >
                  <Link to="/current-voting">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
                    >
                      Vote Now
                    </motion.button>
                  </Link>
                  <Link to="/complaints">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-md hover:shadow-lg transition-all border border-blue-200"
                    >
                      File Complaint
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
              
              {/* Stats */}
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16"
              >
                {statItems.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="glass-card rounded-xl p-6 flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-3 text-white">
                      {stat.icon}
                    </div>
                    <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">{stat.value}</span>
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
                      <Clock size={20} className="text-blue-600 mr-2" />
                      <h2 className="text-2xl font-semibold">Current Elections</h2>
                    </div>
                    <Link 
                      to="/current-voting" 
                      className="text-blue-600 font-medium text-sm flex items-center hover:underline"
                    >
                      View All <ChevronRight size={16} />
                    </Link>
                  </div>
                  
                  {currentElections.length > 0 ? (
                    <motion.div 
                      variants={container}
                      initial="hidden"
                      animate="show"
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                      {currentElections.map((election) => (
                        <motion.div key={election.id} variants={item}>
                          <Link to="/current-voting">
                            <Card className="h-full overflow-hidden hover:shadow-md transition-shadow border-0 shadow">
                              <CardContent className="p-0">
                                <div className="p-6">
                                  <div className="flex justify-between items-start mb-3">
                                    <h3 className="font-semibold text-lg">{election.title}</h3>
                                    <span className="inline-block px-2 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">
                                      Active
                                    </span>
                                  </div>
                                  <p className="text-gray-600 text-sm mb-4">{election.description}</p>
                                  <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-500">
                                      Ends: {formatDate(election.endDate)}
                                    </span>
                                    <span className="text-blue-600 font-medium">
                                      {election.candidates.length} Candidates
                                    </span>
                                  </div>
                                </div>
                                <div className="h-2 bg-gradient-to-r from-green-400 to-blue-500"></div>
                              </CardContent>
                            </Card>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    <Card className="bg-gray-50 border-dashed">
                      <CardContent className="p-6 text-center text-gray-500">
                        No current elections available.
                      </CardContent>
                    </Card>
                  )}
                </div>
                
                {/* Officials Carousel */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="py-8 px-4 my-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl"
                >
                  <OfficialCarousel />
                </motion.div>
                
                {/* Past Elections */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <ClipboardList size={20} className="text-blue-600 mr-2" />
                      <h2 className="text-2xl font-semibold">Past Elections</h2>
                    </div>
                    <Link 
                      to="/past-voting" 
                      className="text-blue-600 font-medium text-sm flex items-center hover:underline"
                    >
                      View All <ChevronRight size={16} />
                    </Link>
                  </div>
                  
                  {pastElections.length > 0 ? (
                    <motion.div 
                      variants={container}
                      initial="hidden"
                      animate="show"
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                      {pastElections.map((election) => (
                        <motion.div key={election.id} variants={item}>
                          <Link to="/past-voting">
                            <Card className="h-full overflow-hidden hover:shadow-md transition-shadow border-0 shadow">
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
                                    <span className="text-blue-600 font-medium">
                                      View Results
                                    </span>
                                  </div>
                                </div>
                                <div className="h-2 bg-gradient-to-r from-gray-300 to-gray-400"></div>
                              </CardContent>
                            </Card>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    <Card className="bg-gray-50 border-dashed">
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
                      <CalendarDays size={20} className="text-blue-600 mr-2" />
                      <h2 className="text-2xl font-semibold">Upcoming Elections</h2>
                    </div>
                    <Link 
                      to="/future-voting" 
                      className="text-blue-600 font-medium text-sm flex items-center hover:underline"
                    >
                      View All <ChevronRight size={16} />
                    </Link>
                  </div>
                  
                  {futureElections.length > 0 ? (
                    <motion.div 
                      variants={container}
                      initial="hidden"
                      animate="show"
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                      {futureElections.map((election) => (
                        <motion.div key={election.id} variants={item}>
                          <Link to="/future-voting">
                            <Card className="h-full overflow-hidden hover:shadow-md transition-shadow border-0 shadow">
                              <CardContent className="p-0">
                                <div className="p-6">
                                  <div className="flex justify-between items-start mb-3">
                                    <h3 className="font-semibold text-lg">{election.title}</h3>
                                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                                      Upcoming
                                    </span>
                                  </div>
                                  <p className="text-gray-600 text-sm mb-4">{election.description}</p>
                                  <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-500">
                                      Starts: {formatDate(election.startDate)}
                                    </span>
                                    <span className="text-blue-600 font-medium">
                                      {election.candidates.length} Candidates
                                    </span>
                                  </div>
                                </div>
                                <div className="h-2 bg-gradient-to-r from-blue-300 to-blue-400"></div>
                              </CardContent>
                            </Card>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    <Card className="bg-gray-50 border-dashed">
                      <CardContent className="p-6 text-center text-gray-500">
                        No upcoming elections scheduled.
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
              
              {/* Contact Section */}
              <div className="mt-16 py-8 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Need Assistance?</h2>
                    <p className="mb-6">
                      Our dedicated support team is available 24/7 to help you with any questions or issues.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Phone className="mr-3" size={20} />
                        <div>
                          <p className="font-medium">Toll-Free Number</p>
                          <p className="text-blue-100">1800-111-950</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Globe className="mr-3" size={20} />
                        <div>
                          <p className="font-medium">Website</p>
                          <p className="text-blue-100">www.digitalvoting.gov.in</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <img 
                      src="/lovable-uploads/7e9862c1-b964-4d23-ba20-b8a41967eeb5.png" 
                      alt="Election Commission of India" 
                      className="h-24 mx-auto bg-white p-2 rounded-lg shadow-lg"
                    />
                    <p className="mt-4 italic text-sm text-blue-100">
                      "No voter to be left behind"
                    </p>
                  </div>
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
