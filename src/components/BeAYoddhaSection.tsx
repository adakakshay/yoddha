import { motion, useAnimation } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Shield, Sword, Award, Users, Flame, CheckCircle2, Lock } from 'lucide-react';
import { useState, useEffect } from 'react';
import { toast } from 'sonner@2.0.3';

export function BeAYoddhaSection() {
  const [selectedPledge, setSelectedPledge] = useState<string[]>([]);
  const [warriorLevel, setWarriorLevel] = useState(0);
  const [showBadge, setShowBadge] = useState(false);

  const pledges = [
    { id: 'drugs', icon: '🚫', text: 'I will stay away from drugs and help others do the same', points: 10 },
    { id: 'aware', icon: '📢', text: 'I will spread awareness about drug abuse in my community', points: 10 },
    { id: 'report', icon: '📱', text: 'I will report any suspicious activities anonymously', points: 10 },
    { id: 'support', icon: '🤝', text: 'I will support those recovering from addiction', points: 10 },
    { id: 'child', icon: '👶', text: 'I will fight against child marriage and exploitation', points: 10 },
    { id: 'blood', icon: '💉', text: 'I will donate blood to save lives', points: 10 },
  ];

  const warriorRanks = [
    { level: 0, name: 'Aspiring Yoddha', color: 'from-gray-400 to-gray-600', icon: '🌱' },
    { level: 2, name: 'Junior Warrior', color: 'from-blue-400 to-blue-600', icon: '⚔️' },
    { level: 4, name: 'Senior Warrior', color: 'from-purple-400 to-purple-600', icon: '🛡️' },
    { level: 6, name: 'Guardian Yoddha', color: 'from-orange-400 to-red-600', icon: '🔥' },
  ];

  const getCurrentRank = () => {
    return [...warriorRanks].reverse().find(rank => selectedPledge.length >= rank.level) || warriorRanks[0];
  };

  const handlePledgeToggle = (pledgeId: string) => {
    if (selectedPledge.includes(pledgeId)) {
      setSelectedPledge(selectedPledge.filter(id => id !== pledgeId));
    } else {
      setSelectedPledge([...selectedPledge, pledgeId]);
      // Celebration animation
      if (selectedPledge.length + 1 === pledges.length) {
        setShowBadge(true);
        toast.success('🎉 Congratulations! You are now a Guardian Yoddha!', {
          description: 'You have taken all the pledges. Share your achievement!',
        });
      }
    }
  };

  const handleTakePledge = () => {
    if (selectedPledge.length === 0) {
      toast.error('Please select at least one pledge to take');
      return;
    }
    
    toast.success(`🔥 Welcome, ${getCurrentRank().name}!`, {
      description: `You've taken ${selectedPledge.length} pledge(s). Be the change!`,
    });
  };

  const achievements = [
    { icon: '👥', count: '5,000+', label: 'Active Yoddhas' },
    { icon: '🏆', count: '500+', label: 'Cases Solved' },
    { icon: '💪', count: '10,000+', label: 'Lives Impacted' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-red-50 relative overflow-hidden">
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
            Be a YODDHA
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl mb-4">
            Every Indian is a warrior. Unleash the <span className="font-bold text-red-600">YODDHA</span> within you!
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Take the pledge and join thousands of young warriors fighting against drugs and social evils in Tripura
          </p>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
            >
              <Card className="p-6 text-center bg-white/80 backdrop-blur hover:shadow-2xl transition-all border-2 hover:border-orange-400">
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <motion.div
                  initial={{ scale: 1 }}
                  whileInView={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2"
                >
                  {achievement.count}
                </motion.div>
                <p className="text-muted-foreground">{achievement.label}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Warrior Rank Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="p-8 bg-gradient-to-br from-orange-600 to-red-600 text-white shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Your Warrior Rank</h3>
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{getCurrentRank().icon}</span>
                  <span className="text-2xl font-bold">{getCurrentRank().name}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold">{selectedPledge.length}/{pledges.length}</div>
                <p className="text-sm opacity-90">Pledges Taken</p>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="relative h-4 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(selectedPledge.length / pledges.length) * 100}%` }}
                transition={{ duration: 0.5 }}
                className="h-full bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full"
              />
            </div>

            {/* Rank Milestones */}
            <div className="grid grid-cols-4 gap-2 mt-4">
              {warriorRanks.map((rank, index) => (
                <div
                  key={index}
                  className={`text-center p-2 rounded-lg ${
                    selectedPledge.length >= rank.level
                      ? 'bg-white/20'
                      : 'bg-white/5'
                  }`}
                >
                  <div className="text-2xl">{rank.icon}</div>
                  <div className="text-xs mt-1 opacity-90">{rank.name}</div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Interactive Pledge Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 bg-white/90 backdrop-blur shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 mb-4 px-6 py-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-full">
                <Flame className="w-5 h-5 text-red-600" />
                <span className="text-red-600 font-semibold">Take the Warrior's Pledge</span>
              </div>
              <h3 className="text-3xl font-bold mb-3">Choose Your Commitments</h3>
              <p className="text-muted-foreground">Select the pledges you want to take as a YODDHA</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
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
                    <Card
                      onClick={() => handlePledgeToggle(pledge.id)}
                      className={`p-6 cursor-pointer transition-all border-2 ${
                        isSelected
                          ? 'bg-gradient-to-br from-orange-50 to-red-50 border-orange-500 shadow-lg'
                          : 'hover:border-orange-200 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">{pledge.icon}</div>
                        <div className="flex-1">
                          <p className={`${isSelected ? 'font-semibold' : ''}`}>
                            {pledge.text}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge variant={isSelected ? 'default' : 'secondary'} className="text-xs">
                              +{pledge.points} points
                            </Badge>
                            {isSelected && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                              >
                                <CheckCircle2 className="w-5 h-5 text-green-600" />
                              </motion.div>
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
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

            {/* Badge Display */}
            {showBadge && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="mt-8 p-8 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl border-4 border-orange-400 text-center"
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="inline-block text-6xl mb-4"
                >
                  🏆
                </motion.div>
                <h4 className="text-2xl font-bold mb-2">Guardian Yoddha Badge Earned!</h4>
                <p className="text-muted-foreground">You've completed all pledges. You are a true warrior!</p>
              </motion.div>
            )}
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
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow">
              <Users className="w-4 h-4 text-blue-600" />
              <span className="text-sm">Join 5000+ Warriors</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
