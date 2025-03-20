
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Vote, User, UserRound, ShieldCheck, Phone, Info } from 'lucide-react';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    aadhar: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.aadhar || !formData.phone) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    
    // Validate Aadhar (12 digits)
    if (!/^\d{12}$/.test(formData.aadhar)) {
      toast({
        title: "Invalid Aadhar Number",
        description: "Please enter a valid 12-digit Aadhar number",
        variant: "destructive"
      });
      return;
    }
    
    // Validate phone (10 digits)
    if (!/^\d{10}$/.test(formData.phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit phone number",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate login process
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Login Successful",
        description: "Welcome to the Digital Voting Platform",
      });
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-orange-50 to-green-50 p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <img 
            src="/lovable-uploads/7e9862c1-b964-4d23-ba20-b8a41967eeb5.png" 
            alt="Election Commission of India" 
            className="h-16 mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-900">Digital Voting Platform</h1>
          <p className="text-gray-600 mt-1">Election Commission of India</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Card className="p-6 shadow-md border-0 bg-white/80 backdrop-blur-sm">
            <h2 className="text-xl font-semibold mb-6 text-center">Login to Your Account</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center">
                  <UserRound size={16} className="mr-2 text-blue-600" />
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="transition-all focus-visible:ring-blue-500"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="aadhar" className="flex items-center">
                  <ShieldCheck size={16} className="mr-2 text-blue-600" />
                  Aadhar Number
                </Label>
                <Input
                  id="aadhar"
                  name="aadhar"
                  placeholder="Enter your 12-digit Aadhar number"
                  value={formData.aadhar}
                  onChange={handleChange}
                  className="transition-all focus-visible:ring-blue-500"
                  maxLength={12}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center">
                  <Phone size={16} className="mr-2 text-blue-600" />
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Enter your 10-digit phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="transition-all focus-visible:ring-blue-500"
                  maxLength={10}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-colors"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center">
                    <span className="h-5 w-5 block rounded-full border-4 border-t-white border-white/30 animate-spin mr-2"></span>
                    <span>Logging in...</span>
                  </div>
                ) : 'Login'}
              </Button>
            </form>
            
            <div className="mt-6 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-center mb-3 text-sm text-blue-600">
                <Info size={14} className="mr-1" />
                <span>Need help? Call our toll-free number: 1800-111-950</span>
              </div>
              <p className="text-xs text-center text-gray-500">
                By logging in, you agree to the Terms of Service and Privacy Policy of the Digital Voting Platform.
              </p>
            </div>
          </Card>
        </motion.div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Official Electronic Voting Platform
          </p>
          <p className="text-xs text-gray-500 mt-1">
            © {new Date().getFullYear()} Election Commission of India
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
