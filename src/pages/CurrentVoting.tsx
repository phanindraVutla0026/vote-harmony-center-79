
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RegionSelector from '@/components/RegionSelector';
import CandidateCard from '@/components/CandidateCard';
import PageTransition from '@/components/PageTransition';
import { getCurrentElections, getCandidatesByRegion, Candidate } from '@/data/candidates';
import { getStateNameById, getDistrictNameById, getMandalNameById } from '@/data/regions';
import { Vote, AlertCircle, CheckCircle } from 'lucide-react';

const CurrentVoting: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');
  const [selectedMandal, setSelectedMandal] = useState<string>('');
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [votedCandidateId, setVotedCandidateId] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState<boolean>(false);
  
  const elections = getCurrentElections();
  
  useEffect(() => {
    if (selectedState && selectedDistrict && selectedMandal && elections.length > 0) {
      const electionCandidates = getCandidatesByRegion(
        elections[0].id,
        selectedState,
        selectedDistrict,
        selectedMandal
      );
      setCandidates(electionCandidates);
    } else {
      setCandidates([]);
    }
  }, [selectedState, selectedDistrict, selectedMandal, elections]);
  
  const handleRegionSelect = (state: string, district: string, mandal: string) => {
    setSelectedState(state);
    setSelectedDistrict(district);
    setSelectedMandal(mandal);
  };
  
  const handleVote = (candidateId: string) => {
    if (hasVoted) {
      toast({
        title: "Already Voted",
        description: "You have already cast your vote in this election.",
        variant: "destructive"
      });
      return;
    }
    
    setVotedCandidateId(candidateId);
    setHasVoted(true);
    
    toast({
      title: "Vote Cast Successfully",
      description: "Your vote has been recorded. Thank you for participating!",
    });
  };
  
  const getRegionTitle = () => {
    if (!selectedState || !selectedDistrict || !selectedMandal) return null;
    
    const stateName = getStateNameById(selectedState);
    const districtName = getDistrictNameById(selectedState, selectedDistrict);
    const mandalName = getMandalNameById(selectedState, selectedDistrict, selectedMandal);
    
    return `${stateName} > ${districtName} > ${mandalName}`;
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
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Current Elections</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Cast your vote in the ongoing elections. Select your region to view eligible candidates.
              </p>
            </motion.div>
            
            {elections.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <RegionSelector onRegionSelect={handleRegionSelect} />
                    
                    {elections.map((election) => (
                      <div key={election.id} className="mt-6 bg-white p-6 rounded-lg shadow-sm border">
                        <h3 className="font-semibold text-lg mb-3">{election.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{election.description}</p>
                        
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Start Date:</span>
                            <span className="font-medium">
                              {new Date(election.startDate).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">End Date:</span>
                            <span className="font-medium">
                              {new Date(election.endDate).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Status:</span>
                            <span className="text-rkv-green font-medium">Active</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
                
                <div className="lg:col-span-2">
                  {!selectedState || !selectedDistrict || !selectedMandal ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="bg-rkv-light-blue bg-opacity-50 p-8 rounded-lg flex flex-col items-center justify-center text-center h-full"
                    >
                      <Vote size={48} className="text-rkv-blue mb-4" />
                      <h3 className="text-xl font-medium mb-2">Select Your Region</h3>
                      <p className="text-gray-600">
                        Please select your state, district, and mandal from the selector to view eligible candidates.
                      </p>
                    </motion.div>
                  ) : candidates.length > 0 ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <div className="mb-6 flex items-center justify-between">
                        <div>
                          <div className="text-xs font-medium text-rkv-blue mb-1">Selected Region</div>
                          <h3 className="text-lg font-medium">{getRegionTitle()}</h3>
                        </div>
                        
                        {hasVoted && (
                          <div className="flex items-center text-rkv-green">
                            <CheckCircle size={16} className="mr-2" />
                            <span className="text-sm font-medium">Vote Submitted</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {candidates.map((candidate) => (
                          <CandidateCard
                            key={candidate.id}
                            candidate={candidate}
                            votingEnabled={true}
                            onVote={handleVote}
                            isSelected={votedCandidateId === candidate.id}
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
                        There are no candidates available for the selected region in the current election.
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
                <AlertCircle size={48} className="text-gray-400 mb-4" />
                <h3 className="text-xl font-medium mb-2">No Active Elections</h3>
                <p className="text-gray-600">
                  There are no active elections at this time. Please check back later or view past or upcoming elections.
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

export default CurrentVoting;
