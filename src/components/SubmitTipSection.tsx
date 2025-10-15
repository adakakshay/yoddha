import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { AlertTriangle, Shield, Phone, MapPin, Lock, Eye, Heart } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from 'sonner@2.0.3';

export function SubmitTipSection() {
  const [formData, setFormData] = useState({
    tipCategory: '',
    location: '',
    description: '',
    contactMethod: '',
    contactInfo: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show success toast
    toast.success('Your tip has been submitted successfully!', {
      description: 'Your identity will remain anonymous. We will investigate this matter.',
    });
    
    // Reset form
    setFormData({
      tipCategory: '',
      location: '',
      description: '',
      contactMethod: '',
      contactInfo: ''
    });
  };

  const stats = [
    {
      icon: Shield,
      number: "500+",
      label: "Cases Resolved",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Eye,
      number: "100%",
      label: "Anonymous",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Heart,
      number: "1000+",
      label: "Lives Saved",
      color: "from-red-500 to-pink-600"
    }
  ];

  const whyReport = [
    {
      icon: "🛡️",
      title: "Complete Anonymity",
      description: "Your identity is protected. Report without fear."
    },
    {
      icon: "⚡",
      title: "Quick Action",
      description: "We respond immediately to urgent cases."
    },
    {
      icon: "🤝",
      title: "Community Support",
      description: "Be a guardian for those who need help."
    }
  ];

  return (
    <section id="submit-tip" className="py-20 bg-gradient-to-b from-white to-orange-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #f97316 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 px-6 py-2 bg-gradient-to-r from-red-100 to-orange-100 rounded-full"
          >
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <span className="text-red-600 font-semibold">Be a Guardian of Your Community</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Submit an Anonymous Tip
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Witnessed drug abuse or child marriage in your area? Your voice matters. 
            Report anonymously and help us protect the vulnerable.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 shadow-2xl border-t-4 border-orange-600">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center">
                  <Lock className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Report Securely</h3>
                  <p className="text-sm text-muted-foreground">All information is encrypted and anonymous</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block mb-2 font-medium">What are you reporting? *</label>
                  <Select 
                    value={formData.tipCategory} 
                    onValueChange={(value) => setFormData({ ...formData, tipCategory: value })}
                    required
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="drug-abuse">
                        🚨 Drug Abuse / Drug Dealing
                      </SelectItem>
                      <SelectItem value="child-marriage">
                        👶 Child Marriage
                      </SelectItem>
                      <SelectItem value="substance-trafficking">
                        🚔 Substance Trafficking
                      </SelectItem>
                      <SelectItem value="child-exploitation">
                        ⚠️ Child Exploitation
                      </SelectItem>
                      <SelectItem value="other">
                        📋 Other Social Evil
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    Location (Area/Village/Landmark) *
                  </label>
                  <Input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g., Near Tripura School, Dharmanagar"
                    required
                    className="bg-input-background"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Details of the Incident *</label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe what you witnessed, when, and any other relevant details..."
                    rows={6}
                    required
                    className="bg-input-background resize-none"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Be as specific as possible without revealing your identity
                  </p>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-orange-600" />
                    Optional Contact (for follow-up only)
                  </h4>
                  
                  <div className="space-y-3">
                    <Select 
                      value={formData.contactMethod} 
                      onValueChange={(value) => setFormData({ ...formData, contactMethod: value })}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Preferred contact method (optional)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="phone">Phone Call</SelectItem>
                        <SelectItem value="whatsapp">WhatsApp</SelectItem>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="none">No Contact - Stay Anonymous</SelectItem>
                      </SelectContent>
                    </Select>

                    {formData.contactMethod && formData.contactMethod !== 'none' && (
                      <Input
                        type="text"
                        value={formData.contactInfo}
                        onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                        placeholder={
                          formData.contactMethod === 'email' 
                            ? 'your.email@example.com' 
                            : '+91 XXXXX XXXXX'
                        }
                        className="bg-input-background"
                      />
                    )}
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 py-6"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Submit Tip Anonymously
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  🔒 Your IP address is not stored. This form is completely secure.
                </p>
              </form>
            </Card>
          </motion.div>

          {/* Right Side - Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Hero Image */}
            <Card className="overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1688637257486-0b57580199c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB5b3VuZyUyMHdvbWFuJTIwc3BlYWtpbmclMjBtb2JpbGUlMjBwaG9uZXxlbnwxfHx8fDE3NjA1NTEwODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Report anonymously"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 bg-gradient-to-br from-orange-600 to-red-600 text-white">
                <h3 className="text-2xl font-bold mb-2">Your Voice Can Save Lives</h3>
                <p className="opacity-90">
                  Every report helps us take action. Together, we can protect our children and youth from harm.
                </p>
              </div>
            </Card>

            {/* Why Report Section */}
            <div className="space-y-4">
              {whyReport.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 hover:shadow-lg transition-all">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{item.icon}</div>
                      <div>
                        <h4 className="font-bold mb-1">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Emergency Helpline */}
            <Card className="p-8 bg-gradient-to-br from-red-600 to-orange-600 text-white shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Emergency Helpline</h3>
              </div>
              <p className="text-3xl font-bold mb-2">1800-XXX-XXXX</p>
              <p className="opacity-90 mb-4">Available 24/7 for immediate assistance</p>
              <Button variant="secondary" className="w-full bg-white text-red-600 hover:bg-gray-100">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </Card>

            {/* Additional Info */}
            <Card className="p-6 bg-blue-50 border-blue-200">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-2 text-blue-900">Important Information</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Tips are reviewed within 24 hours</li>
                    <li>• All information is kept confidential</li>
                    <li>• False reporting is a punishable offense</li>
                    <li>• Your cooperation helps save lives</li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
