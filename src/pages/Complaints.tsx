
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';
import { AlertCircle, CheckCircle, Phone, Mail, FileText, HelpCircle } from 'lucide-react';

const Complaints: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    complaintType: '',
    electionId: '',
    details: '',
    attachmentFile: null as File | null
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData(prev => ({
        ...prev,
        attachmentFile: e.target.files![0]
      }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.complaintType || !formData.details) {
      toast({
        title: "Validation Error",
        description: "Please fill all required fields",
        variant: "destructive"
      });
      return;
    }
    
    // Phone validation
    if (!/^\d{10}$/.test(formData.phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit phone number",
        variant: "destructive"
      });
      return;
    }
    
    // Email validation (if provided)
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast({
        title: "Complaint Submitted",
        description: "Your complaint has been successfully registered",
      });
    }, 1500);
  };
  
  const complaintTypes = [
    "Voter Registration Issue",
    "EVM Malfunction",
    "Electoral Malpractice",
    "Voter Intimidation",
    "Candidate Misconduct",
    "Polling Station Issue",
    "Voting Process",
    "Other"
  ];
  
  const electionTypes = [
    { id: "election-1", name: "Lok Sabha Elections 2024" },
    { id: "election-2", name: "Assembly Elections 2023" },
    { id: "election-3", name: "Panchayat Elections 2024" },
    { id: "election-4", name: "Municipal Corporation Elections 2023" },
    { id: "election-5", name: "Zilla Parishad Elections 2024" }
  ];
  
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-24 pb-12 px-4 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">File a Complaint</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Report issues related to the electoral process. Your complaints will be handled with confidentiality and addressed promptly.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="space-y-6"
                >
                  <Card className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white">
                    <CardContent className="p-6">
                      <h2 className="text-xl font-semibold mb-4 flex items-center">
                        <HelpCircle size={20} className="mr-2" />
                        How to File a Complaint
                      </h2>
                      
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start">
                          <span className="bg-white text-blue-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2 mt-0.5">1</span>
                          <span>Fill out the complaint form with accurate details</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-white text-blue-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2 mt-0.5">2</span>
                          <span>Select the type of complaint from the dropdown</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-white text-blue-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2 mt-0.5">3</span>
                          <span>Provide a detailed description of the issue</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-white text-blue-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2 mt-0.5">4</span>
                          <span>Attach any supporting evidence if available</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-white text-blue-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2 mt-0.5">5</span>
                          <span>Submit the form and note down your complaint ID</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-4">Contact Support</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <Phone size={18} className="mr-3 text-green-600 mt-0.5" />
                          <div>
                            <p className="font-medium">Toll-Free Helpline</p>
                            <p className="text-gray-600">1800-111-950</p>
                            <p className="text-xs text-gray-500 mt-1">Available 24/7</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <Mail size={18} className="mr-3 text-blue-600 mt-0.5" />
                          <div>
                            <p className="font-medium">Email Support</p>
                            <p className="text-gray-600">complaints@digitalvoting.gov.in</p>
                            <p className="text-xs text-gray-500 mt-1">Response within 48 hours</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <FileText size={18} className="mr-3 text-purple-600 mt-0.5" />
                          <div>
                            <p className="font-medium">Written Complaints</p>
                            <p className="text-gray-600">Election Commission of India, Nirvachan Sadan, Ashoka Road, New Delhi - 110001</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
              
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {!submitted ? (
                    <Card>
                      <CardContent className="p-6">
                        <h2 className="text-xl font-semibold mb-6">Complaint Form</h2>
                        
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
                              <Input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                required
                              />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
                              <Input
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your 10-digit phone number"
                                maxLength={10}
                                required
                              />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address (Optional)</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Enter your email address"
                            />
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="complaintType">Complaint Type <span className="text-red-500">*</span></Label>
                              <Select onValueChange={(value) => handleSelectChange('complaintType', value)} required>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select complaint type" />
                                </SelectTrigger>
                                <SelectContent>
                                  {complaintTypes.map((type) => (
                                    <SelectItem key={type} value={type}>{type}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="electionId">Related Election (Optional)</Label>
                              <Select onValueChange={(value) => handleSelectChange('electionId', value)}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select election" />
                                </SelectTrigger>
                                <SelectContent>
                                  {electionTypes.map((election) => (
                                    <SelectItem key={election.id} value={election.id}>{election.name}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="details">Complaint Details <span className="text-red-500">*</span></Label>
                            <Textarea
                              id="details"
                              name="details"
                              value={formData.details}
                              onChange={handleChange}
                              placeholder="Provide detailed information about your complaint"
                              rows={5}
                              required
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="attachment">Attachment (Optional)</Label>
                            <Input 
                              id="attachment" 
                              type="file"
                              onChange={handleFileChange}
                              className="cursor-pointer"
                            />
                            <p className="text-xs text-gray-500">
                              Supported formats: JPG, PNG, PDF (Max size: 5MB)
                            </p>
                          </div>
                          
                          <div className="pt-2">
                            <Button 
                              type="submit" 
                              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? (
                                <div className="flex items-center">
                                  <span className="h-5 w-5 block rounded-full border-4 border-t-white border-white/30 animate-spin mr-2"></span>
                                  <span>Submitting...</span>
                                </div>
                              ) : 'Submit Complaint'}
                            </Button>
                          </div>
                        </form>
                      </CardContent>
                    </Card>
                  ) : (
                    <Card className="border-green-200">
                      <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 mx-auto flex items-center justify-center bg-green-100 rounded-full mb-4">
                          <CheckCircle size={32} className="text-green-600" />
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Complaint Submitted Successfully!</h2>
                        <p className="text-gray-600 mb-6">
                          Your complaint has been registered. Our team will review it and take appropriate action.
                        </p>
                        <div className="bg-gray-50 p-4 rounded-lg inline-block">
                          <p className="text-sm text-gray-500 mb-1">Complaint Reference ID</p>
                          <p className="text-lg font-mono font-semibold text-blue-800">ECI-{Date.now().toString().substring(5, 13)}</p>
                        </div>
                        <p className="mt-6 text-sm text-gray-600">
                          Please save this reference ID for future communication. You will receive updates on your registered phone number.
                        </p>
                        <div className="mt-6">
                          <Button 
                            onClick={() => setSubmitted(false)} 
                            variant="outline"
                            className="mx-2"
                          >
                            File Another Complaint
                          </Button>
                          <Button 
                            onClick={() => window.print()} 
                            className="mx-2 bg-blue-600 hover:bg-blue-700"
                          >
                            Print Receipt
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Complaints;
