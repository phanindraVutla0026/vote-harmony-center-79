
import React, { useState, useEffect } from 'react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { states, getDistricts, getMandals } from '@/data/regions';
import { Card } from '@/components/ui/card';
import { ChevronRight, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface RegionSelectorProps {
  onRegionSelect: (state: string, district: string, mandal: string) => void;
}

const RegionSelector: React.FC<RegionSelectorProps> = ({ onRegionSelect }) => {
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');
  const [selectedMandal, setSelectedMandal] = useState<string>('');
  const [districts, setDistricts] = useState<Array<{ id: string; name: string }>>([]);
  const [mandals, setMandals] = useState<Array<{ id: string; name: string }>>([]);
  
  useEffect(() => {
    if (selectedState) {
      const districtList = getDistricts(selectedState);
      setDistricts(districtList);
      setSelectedDistrict('');
      setSelectedMandal('');
      setMandals([]);
    }
  }, [selectedState]);
  
  useEffect(() => {
    if (selectedState && selectedDistrict) {
      const mandalList = getMandals(selectedState, selectedDistrict);
      setMandals(mandalList);
      setSelectedMandal('');
    }
  }, [selectedDistrict, selectedState]);
  
  useEffect(() => {
    if (selectedState && selectedDistrict && selectedMandal) {
      onRegionSelect(selectedState, selectedDistrict, selectedMandal);
    }
  }, [selectedState, selectedDistrict, selectedMandal, onRegionSelect]);
  
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

  return (
    <Card className="p-6 shadow-sm border bg-white/80 backdrop-blur-sm">
      <h3 className="text-lg font-medium mb-4 flex items-center">
        <MapPin size={18} className="mr-2 text-rkv-blue" />
        Select Your Region
      </h3>
      
      <motion.div 
        className="space-y-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            State
          </label>
          <Select
            value={selectedState}
            onValueChange={(value) => setSelectedState(value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a state" />
            </SelectTrigger>
            <SelectContent>
              {states.map((state) => (
                <SelectItem key={state.id} value={state.id}>
                  {state.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </motion.div>

        {selectedState && (
          <motion.div variants={item}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              District
            </label>
            <Select
              value={selectedDistrict}
              onValueChange={(value) => setSelectedDistrict(value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a district" />
              </SelectTrigger>
              <SelectContent>
                {districts.map((district) => (
                  <SelectItem key={district.id} value={district.id}>
                    {district.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </motion.div>
        )}

        {selectedState && selectedDistrict && (
          <motion.div variants={item}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mandal
            </label>
            <Select
              value={selectedMandal}
              onValueChange={(value) => setSelectedMandal(value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a mandal" />
              </SelectTrigger>
              <SelectContent>
                {mandals.map((mandal) => (
                  <SelectItem key={mandal.id} value={mandal.id}>
                    {mandal.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </motion.div>
        )}

        {selectedState && selectedDistrict && selectedMandal && (
          <motion.div 
            variants={item}
            className="pt-2 text-sm text-rkv-green font-medium flex items-center"
          >
            <ChevronRight size={16} className="mr-1" />
            Region selection complete
          </motion.div>
        )}
      </motion.div>
    </Card>
  );
};

export default RegionSelector;
