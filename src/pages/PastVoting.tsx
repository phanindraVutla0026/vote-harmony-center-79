
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RegionSelector from '@/components/RegionSelector';
import CandidateCard from '@/components/CandidateCard';
import PageTransition from '@/components/PageTransition';
import { getPastElections, getCandidatesByRegion, Candidate, Election } from '@/data/candidates';
import { getStateNameById, getDistrictNameById, getMandalNameById } from '@/data/regions';
import { ClipboardList, Info, Trophy, Award, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const PastVoting: React.FC = () => {
  const [selectedElection, setSelectedElection] = useState<Election | null>(null);
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');
  const [selectedMandal, setSelectedMandal] = useState<string>('');
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  
  const pastElections = getPastElections();
  
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
  
  // Find winner in candidates
  const getWinnerCandidate = () => {
    if (!candidates.length) return null;
    return candidates.reduce((prev, current) => (prev.votes > current.votes) ? prev : current);
  };
  
  const winner = getWinnerCandidate();
  
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
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Past Elections</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                View results from previous elections. Select an election and region to see detailed outcomes.
              </p>
            </motion.div>
            
            {pastElections.length > 0 ? (
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
                        <ClipboardList size={18} className="mr-2 text-rkv-blue" />
                        Past Elections
                      </h3>
                      
                      <div className="space-y-3">
                        {pastElections.map((election) => (
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
                            <div className="text-xs mt-1 flex items-center">
                              <Calendar size={12} className="mr-1" />
                              {new Date(election.endDate).toLocaleDateString()}
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
                      <h3 className="text-xl font-medium mb-2">Select an Election</h3>
                      <p className="text-gray-600">
                        Please select a past election from the list to view its results.
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
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div className="bg-gray-50 p-4 rounded-md">
                              <div className="text-sm text-gray-500 mb-1">Election Date</div>
                              <div className="font-medium">
                                {new Date(selectedElection.startDate).toLocaleDateString()}
                              </div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-md">
                              <div className="text-sm text-gray-500 mb-1">Election Type</div>
                              <div className="font-medium">{selectedElection.type}</div>
                            </div>
                          </div>
                          
                          <div className="text-center py-6">
                            <p className="text-gray-600">
                              Please select your region from the selector to view election results for your area.
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
                      <div className="mb-8">
                        <div className="text-xs font-medium text-rkv-blue mb-1">Results for</div>
                        <h3 className="text-lg font-medium mb-4">{getRegionTitle()}</h3>
                        
                        {winner && (
                          <div className="bg-rkv-light-green p-6 rounded-lg mb-6">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start">
                              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white p-1 shadow-sm mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                                <img 
                                  src={winner.imageUrl} 
                                  alt={winner.name}
                                  className="w-full h-full object-cover rounded-full"
                                />
                              </div>
                              <div className="text-center sm:text-left">
                                <div className="flex items-center justify-center sm:justify-start mb-2">
                                  <Trophy size={18} className="text-yellow-500 mr-2" />
                                  <span className="text-rkv-green font-semibold">Winner</span>
                                </div>
                                <h3 className="text-xl font-semibold">{winner.name}</h3>
                                <p className="text-gray-600">{winner.party}</p>
                                <div className="mt-2 text-sm">
                                  <span className="font-medium">{winner.votes} votes</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <h4 className="text-lg font-medium mb-4 flex items-center">
                        <Award size={18} className="mr-2 text-rkv-blue" />
                        All Candidates Results
                      </h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {candidates
                          .sort((a, b) => b.votes - a.votes)
                          .map((candidate) => (
                            <CandidateCard
                              key={candidate.id}
                              candidate={candidate}
                              showResults={true}
                              isSelected={winner ? candidate.id === winner.id : false}
                            />
                          ))
                        }
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="bg-rkv-off-white p-8 rounded-lg flex flex-col items-center justify-center text-center h-full"
                    >
                      <Info size={48} className="text-gray-400 mb-4" />
                      <h3 className="text-xl font-medium mb-2">No Results Found</h3>
                      <p className="text-gray-600">
                        There are no election results available for the selected region.
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
                <h3 className="text-xl font-medium mb-2">No Past Elections</h3>
                <p className="text-gray-600">
                  There are no past elections in the system. Check back after the current elections are completed.
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

export default PastVoting;
