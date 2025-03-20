
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Official {
  id: string;
  name: string;
  position: string;
  imageUrl: string;
  bio: string;
}

const officials: Official[] = [
  {
    id: "official-1",
    name: "Rajiv Kumar",
    position: "Chief Election Commissioner",
    imageUrl: "https://i.pravatar.cc/300?img=60",
    bio: "25+ years of experience in electoral administration. Former IAS officer dedicated to electoral reforms and process improvements."
  },
  {
    id: "official-2",
    name: "Anup Chandra Pandey",
    position: "Election Commissioner",
    imageUrl: "https://i.pravatar.cc/300?img=59",
    bio: "Former Chief Secretary with extensive experience in public administration. Specializes in election logistics and security arrangements."
  },
  {
    id: "official-3",
    name: "Arun Goel",
    position: "Election Commissioner",
    imageUrl: "https://i.pravatar.cc/300?img=58",
    bio: "IAS officer with expertise in technology integration in electoral processes. Leading digitization efforts for transparent elections."
  },
  {
    id: "official-4",
    name: "Sushil Chandra",
    position: "Former Chief Election Commissioner",
    imageUrl: "https://i.pravatar.cc/300?img=57",
    bio: "Distinguished career in electoral management. Known for implementing robust electoral safeguards and voter awareness campaigns."
  },
  {
    id: "official-5",
    name: "Dharmendra Sharma",
    position: "Senior Deputy Election Commissioner",
    imageUrl: "https://i.pravatar.cc/300?img=56",
    bio: "Specializes in electoral roll management and voter registration. Led numerous successful election monitoring missions."
  },
  {
    id: "official-6",
    name: "Umesh Sinha",
    position: "Secretary General",
    imageUrl: "https://i.pravatar.cc/300?img=55",
    bio: "Extensive experience in election management and policy formulation. Known for strengthening electoral democracy through innovative approaches."
  },
];

const OfficialCarousel: React.FC = () => {
  return (
    <div className="py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Election Commission Officials</h2>
        <p className="text-gray-600 mt-2">
          Meet the dedicated team responsible for conducting free and fair elections
        </p>
      </div>
      
      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent className="-ml-4">
          {officials.map((official) => (
            <CarouselItem key={official.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full overflow-hidden border-0 shadow-md bg-gradient-to-b from-white to-blue-50">
                  <CardContent className="p-0">
                    <div className="relative h-48 overflow-hidden bg-blue-100">
                      <img 
                        src={official.imageUrl} 
                        alt={official.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                        ECI Official
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg text-gray-900">{official.name}</h3>
                      <p className="text-blue-600 text-sm font-medium mb-2">{official.position}</p>
                      <p className="text-gray-600 text-sm line-clamp-3">{official.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4 gap-2">
          <CarouselPrevious className="relative inset-0 translate-y-0 bg-blue-600 text-white hover:bg-blue-700" />
          <CarouselNext className="relative inset-0 translate-y-0 bg-blue-600 text-white hover:bg-blue-700" />
        </div>
      </Carousel>
    </div>
  );
};

export default OfficialCarousel;
