import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Shield, Users, Flame, CheckCircle2, Lock, Award } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

export function BeAYoddhaSection() {
  const [selectedPledge, setSelectedPledge] = useState<string[]>([]);

  const pledges = [
    { id: 'drugs', icon: '🚫', text: 'I will stay away from drugs and help others do the same' },
    { id: 'aware', icon: '📢', text: 'I will spread awareness about drug abuse in my community' },
    { id: 'report', icon: '📱', text: 'I will report any suspicious activities anonymously' },
    { id: 'support', icon: '🤝', text: 'I will support those recovering from addiction' },
    { id: 'child', icon: '👶', text: 'I will fight against child marriage and exploitation' },
    { id: 'blood', icon: '💉', text: 'I will donate blood to save lives' },
  ];

  const handlePledgeToggle = (pledgeId: string) => {
    if (selectedPledge.includes(pledgeId)) {
      setSelectedPledge(selectedPledge.filter(id => id !== pledgeId));
    } else {
      setSelectedPledge([...selectedPledge, pledgeId]);
    }
  };

  const handleTakePledge = () => {
    if (selectedPledge.length === 0) {
      toast.error('Please select at least one pledge to take');
      return;
    }
    
    toast.success(`🔥 Welcome, Warrior!`, {
      description: `You've taken ${selectedPledge.length} pledge(s). Be the change!`,
    });
  };

  return (
    <section id="pledge" className="py-8 md:py-16 bg-gradient-to-b from-orange-50 to-red-50 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="w-full h-full"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1675875467901-1a8c06411761?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB3YXJyaW9yJTIwdHJhZGl0aW9uYWwlMjBjdWx0dXJlfGVufDF8fHx8MTc2MDU1MTQ0M3ww&ixlib=rb-4.1.0&q=80&w=1080")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with Warrior Theme */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="inline-block mb-4"
          >
            <div className="text-6xl md:text-7xl">⚔️</div>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
            Take the Pledge
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl mb-4">
            Every Indian is a warrior. Unleash the <span className="font-bold text-red-600">YODDHA</span> within you!
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Take the pledge and join thousands of young warriors fighting against drugs and social evils in Tripura
          </p>
        </motion.div>

        {/* Interactive Pledge Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 bg-white/90 backdrop-blur shadow-2xl max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 mb-4 px-6 py-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-full">
                <Flame className="w-5 h-5 text-red-600" />
                <span className="text-red-600 font-semibold">Take the Warrior's Pledge</span>
              </div>
              <h3 className="text-3xl font-bold mb-3">Choose Your Commitments</h3>
              <p className="text-muted-foreground">Select the pledges you want to take as a YODDHA</p>
            </div>

            <div className="grid md:grid-cols-2 gap-3 mb-8">
              {pledges.map((pledge, index) => {
                const isSelected = selectedPledge.includes(pledge.id);
                return (
                  <motion.div
                    key={pledge.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div
                      onClick={() => handlePledgeToggle(pledge.id)}
                      className={`p-4 cursor-pointer transition-all border-2 rounded-lg ${
                        isSelected
                          ? 'bg-gradient-to-br from-orange-50 to-red-50 border-orange-500 shadow-lg'
                          : 'border-gray-200 hover:border-orange-200 hover:shadow-md bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-2xl flex-shrink-0">{pledge.icon}</div>
                        <p className={`text-sm flex-1 ${isSelected ? 'font-semibold' : ''}`}>
                          {pledge.text}
                        </p>
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                            className="flex-shrink-0"
                          >
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button
                onClick={handleTakePledge}
                disabled={selectedPledge.length === 0}
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-lg px-8 py-6"
              >
                <Shield className="w-5 h-5 mr-2" />
                Take Pledge as a Yoddha
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 text-lg px-8 py-6"
                onClick={() => {
                  toast.success('Share feature coming soon!', {
                    description: 'Invite your friends to become Yoddhas',
                  });
                }}
              >
                <Users className="w-5 h-5 mr-2" />
                Invite Friends
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-xl mb-6">
            Join the movement. Be the change. Become a <span className="font-bold text-red-600">YODDHA</span>!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow">
              <Lock className="w-4 h-4 text-green-600" />
              <span className="text-sm">100% Safe & Anonymous</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow">
              <Award className="w-4 h-4 text-orange-600" />
              <span className="text-sm">Earn Recognition</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}