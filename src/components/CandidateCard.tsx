
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { CheckCircle, Award, User, BarChart } from 'lucide-react';
import { Candidate } from '@/data/candidates';
import { getStateNameById, getDistrictNameById, getMandalNameById } from '@/data/regions';

interface CandidateCardProps {
  candidate: Candidate;
  votingEnabled?: boolean;
  onVote?: (candidateId: string) => void;
  showResults?: boolean;
  isSelected?: boolean;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ 
  candidate, 
  votingEnabled = false,
  onVote,
  showResults = false,
  isSelected = false
}) => {
  const handleVote = () => {
    if (votingEnabled && onVote) {
      onVote(candidate.id);
    }
  };

  const stateName = getStateNameById(candidate.stateId);
  const districtName = getDistrictNameById(candidate.stateId, candidate.districtId);
  const mandalName = getMandalNameById(candidate.stateId, candidate.districtId, candidate.mandalId);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="h-full"
    >
      <Card className={`h-full overflow-hidden transition-all duration-300 ${
        isSelected ? 'ring-2 ring-rkv-green shadow-md' : 'hover:shadow-md'
      }`}>
        <div className="relative">
          <div className="h-48 bg-gray-100 overflow-hidden">
            <img 
              src={candidate.imageUrl} 
              alt={candidate.name}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          
          <div className="absolute top-3 right-3">
            <div className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm shadow-sm">
              {candidate.position}
            </div>
          </div>
          
          {isSelected && (
            <div className="absolute -bottom-4 right-4">
              <div className="w-8 h-8 rounded-full bg-rkv-green text-white flex items-center justify-center shadow-md">
                <CheckCircle size={16} />
              </div>
            </div>
          )}
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-semibold text-lg">{candidate.name}</h3>
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
              candidate.party === 'Progressive Students Alliance' 
                ? 'bg-rkv-light-blue text-rkv-blue'
                : 'bg-rkv-light-green text-rkv-green'
            }`}>
              {candidate.party}
            </span>
          </div>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-600">
              <User size={14} className="mr-2 text-gray-400" />
              <span>{candidate.age} years, {candidate.qualification}</span>
            </div>
            <div className="flex items-start text-sm text-gray-600">
              <Award size={14} className="mr-2 mt-1 text-gray-400 flex-shrink-0" />
              <span>{stateName}, {districtName}, {mandalName}</span>
            </div>
            
            {showResults && (
              <div className="flex items-center text-sm text-gray-600 mt-2">
                <BarChart size={14} className="mr-2 text-gray-400" />
                <span><b>{candidate.votes}</b> votes</span>
              </div>
            )}
          </div>
          
          {votingEnabled && (
            <button
              onClick={handleVote}
              disabled={isSelected}
              className={`w-full py-2 px-4 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isSelected 
                  ? 'bg-rkv-green text-white cursor-default' 
                  : 'bg-rkv-blue text-white hover:bg-rkv-blue/90 focus:ring-rkv-blue'
              }`}
            >
              {isSelected ? 'Vote Submitted' : 'Vote for Candidate'}
            </button>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

export default CandidateCard;
