
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RegionSelector from '@/components/RegionSelector';
import CandidateCard from '@/components/CandidateCard';
import PageTransition from '@/components/PageTransition';
import { getFutureElections, getCandidatesByRegion, Candidate, Election } from '@/data/candidates';
import { getStateNameById, getDistrictNameById, getMandalNameById } from '@/data/regions';
import { CalendarDays, Info, AlertCircle, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FutureVoting: React.FC = () => {
  const [selectedElection, setSelectedElection] = useState<Election | null>(null);
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');
  const [selectedMandal, setSelectedMandal] = useState<string>('');
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  
  const futureElections = getFutureElections();
  
  const handleSelectElection = (election: Election) => {
    setSelectedElection(election);
    // Reset region and candidates when changing election
    setSelectedState('');
    setSelectedDistrict('');
    setSelectedMandal('');
    setCandidates([]);
  };
  
  const handleRegionSelect = (state: string, district: string, mandal: string) => {
    setSelectedState(state);
    setSelectedDistrict(district);
    setSelectedMandal(mandal);
    
    if (selectedElection) {
      const filteredCandidates = getCandidatesByRegion(
        selectedElection.id,
        state,
        district,
        mandal
      );
      setCandidates(filteredCandidates);
    }
  };
  
  const getRegionTitle = () => {
    if (!selectedState || !selectedDistrict || !selectedMandal) return null;
    
    const stateName = getStateNameById(selectedState);
    const districtName = getDistrictNameById(selectedState, selectedDistrict);
    const mandalName = getMandalNameById(selectedState, selectedDistrict, selectedMandal);
    
    return `${stateName} > ${districtName} > ${mandalName}`;
  };
  
  // Calculate days remaining until election
  const getDaysRemaining = (startDate: string) => {
    const start = new Date(startDate);
    const today = new Date();
    const diffTime = start.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };
  
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-24 pb-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Upcoming Elections</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Preview future elections and their candidates. These elections have not started yet.
              </p>
            </motion.div>
            
            {futureElections.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="space-y-6"
                  >
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                      <h3 className="font-semibold text-lg mb-4 flex items-center">
                        <CalendarDays size={18} className="mr-2 text-rkv-blue" />
                        Upcoming Elections
                      </h3>
                      
                      <div className="space-y-3">
                        {futureElections.map((election) => (
                          <button
                            key={election.id}
                            onClick={() => handleSelectElection(election)}
                            className={`w-full p-3 text-left rounded-md transition-colors ${
                              selectedElection?.id === election.id
                                ? 'bg-rkv-light-blue text-rkv-blue font-medium'
                                : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                            }`}
                          >
                            <div className="font-medium">{election.title}</div>
                            <div className="text-xs mt-1 flex items-center justify-between">
                              <span className="flex items-center">
                                <Clock size={12} className="mr-1" />
                                {new Date(election.startDate).toLocaleDateString()}
                              </span>
                              <span className="bg-rkv-light-blue px-2 py-0.5 rounded text-rkv-blue">
                                In {getDaysRemaining(election.startDate)} days
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {selectedElection && (
                      <RegionSelector onRegionSelect={handleRegionSelect} />
                    )}
                  </motion.div>
                </div>
                
                <div className="lg:col-span-2">
                  {!selectedElection ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="bg-rkv-light-blue bg-opacity-50 p-8 rounded-lg flex flex-col items-center justify-center text-center h-full"
                    >
                      <Info size={48} className="text-rkv-blue mb-4" />
                      <h3 className="text-xl font-medium mb-2">Select an Upcoming Election</h3>
                      <p className="text-gray-600">
                        Please select an upcoming election from the list to view its details and candidates.
                      </p>
                    </motion.div>
                  ) : !selectedState || !selectedDistrict || !selectedMandal ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <Card>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold mb-4">{selectedElection.title}</h3>
                          <p className="text-gray-600 mb-6">{selectedElection.description}</p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <div className="bg-gray-50 p-4 rounded-md">
                              <div className="text-sm text-gray-500 mb-1">Start Date</div>
                              <div className="font-medium">
                                {new Date(selectedElection.startDate).toLocaleDateString()}
                              </div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-md">
                              <div className="text-sm text-gray-500 mb-1">End Date</div>
                              <div className="font-medium">
                                {new Date(selectedElection.endDate).toLocaleDateString()}
                              </div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-md">
                              <div className="text-sm text-gray-500 mb-1">Days Remaining</div>
                              <div className="font-medium text-rkv-blue">
                                {getDaysRemaining(selectedElection.startDate)} days
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-rkv-light-blue bg-opacity-50 p-4 rounded-md mb-6">
                            <h4 className="font-medium mb-2">Eligible Voters</h4>
                            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                              {selectedElection.eligibleVoters.map((voter, index) => (
                                <li key={index}>{voter}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="text-center py-4">
                            <p className="text-gray-600">
                              Please select your region from the selector to view candidates for your area.
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ) : candidates.length > 0 ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <div className="mb-6">
                        <div className="text-xs font-medium text-rkv-blue mb-1">Candidates for</div>
                        <h3 className="text-lg font-medium mb-4">{getRegionTitle()}</h3>
                        
                        <div className="bg-rkv-light-blue bg-opacity-30 p-4 rounded-lg mb-6">
                          <div className="flex items-center">
                            <Info size={18} className="text-rkv-blue mr-2 flex-shrink-0" />
                            <p className="text-sm text-gray-700">
                              This election will begin in <span className="font-medium">{getDaysRemaining(selectedElection.startDate)} days</span>. 
                              You will be able to cast your vote once the election starts.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {candidates.map((candidate) => (
                          <CandidateCard
                            key={candidate.id}
                            candidate={candidate}
                          />
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="bg-rkv-off-white p-8 rounded-lg flex flex-col items-center justify-center text-center h-full"
                    >
                      <AlertCircle size={48} className="text-gray-400 mb-4" />
                      <h3 className="text-xl font-medium mb-2">No Candidates Found</h3>
                      <p className="text-gray-600">
                        There are no candidates registered for the selected region in this upcoming election.
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="bg-rkv-off-white p-8 rounded-lg flex flex-col items-center justify-center text-center"
              >
                <Info size={48} className="text-gray-400 mb-4" />
                <h3 className="text-xl font-medium mb-2">No Upcoming Elections</h3>
                <p className="text-gray-600">
                  There are no upcoming elections scheduled at this time. Please check back later.
                </p>
              </motion.div>
            )}
          </div>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default FutureVoting;
