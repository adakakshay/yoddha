import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for reaching out! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      value: "North Tripura District Administration Office, Tripura"
    },
    {
      icon: Phone,
      title: "24/7 Helpline",
      value: "+91 XXXX-XXXXXX"
    },
    {
      icon: Mail,
      title: "Email",
      value: "yoddha@ngo.org"
    },
    {
      icon: Globe,
      title: "Website",
      value: "www.yoddha.org"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground">Reach out to join the movement or seek help</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block mb-2">Name</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    required
                    className="bg-input-background"
                  />
                </div>
                <div>
                  <label className="block mb-2">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                    className="bg-input-background"
                  />
                </div>
                <div>
                  <label className="block mb-2">Phone</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                    required
                    className="bg-input-background"
                  />
                </div>
                <div>
                  <label className="block mb-2">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help you?"
                    rows={5}
                    required
                    className="bg-input-background resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                >
                  Submit
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 hover:shadow-lg transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{info.title}</h4>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}

            {/* Emergency Helpline */}
            <Card className="p-8 bg-gradient-to-br from-red-600 to-orange-600 text-white shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Emergency Helpline</h3>
              </div>
              <p className="text-3xl font-bold mb-2">1800-XXX-XXXX</p>
              <p className="opacity-90">Available 24/7 for immediate assistance</p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
