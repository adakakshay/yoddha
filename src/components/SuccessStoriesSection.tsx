import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Quote, ChevronLeft, ChevronRight, Heart, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

export function SuccessStoriesSection() {
  const [currentStory, setCurrentStory] = useState(0);

  const stories = [
    {
      name: "Rahul K.",
      age: 23,
      location: "Dharmanagar, Tripura",
      image: "https://images.unsplash.com/photo-1585617205054-606beca301aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjZXNzJTIwc3RvcnklMjBpbnNwaXJhdGlvbnxlbnwxfHx8fDE3NjA1NTY0MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      story: "I was addicted to drugs for 3 years. YODDHA helped me find a rehabilitation center and gave me hope. Today, I'm 2 years clean and working as a counselor, helping others fight addiction.",
      achievement: "2 Years Clean",
      icon: "🏆"
    },
    {
      name: "Priya S.",
      age: 19,
      location: "Kanchanpur, Tripura",
      image: "https://images.unsplash.com/photo-1758518731027-78a22c8852ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWN0b3J5JTIwY2VsZWJyYXRpb24lMjBhY2hpZXZlbWVudHxlbnwxfHx8fDE3NjA1NTY0MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      story: "YODDHA's education program changed my life. They provided free coaching that helped me clear my exams. Now I'm studying engineering and want to give back to society.",
      achievement: "Engineering Student",
      icon: "📚"
    },
    {
      name: "Anonymous Warrior",
      age: 17,
      location: "North Tripura",
      image: "https://images.unsplash.com/flagged/photo-1576485436509-a7d286952b65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMEluZGlhfGVufDF8fHx8MTc2MDU1NjQwMnww&ixlib=rb-4.1.0&q=80&w=1080",
      story: "I reported a child marriage happening in my village through YODDHA's anonymous tip system. The authorities acted quickly, and the marriage was stopped. That girl is now continuing her education.",
      achievement: "Life Saved",
      icon: "🛡️"
    }
  ];

  const handleNext = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const handlePrev = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const currentData = stories[currentStory];

  return (
    <section className="py-8 md:py-16 bg-gradient-to-b from-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #f97316 0px, #f97316 1px, transparent 1px, transparent 20px)',
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="inline-block text-5xl mb-4"
          >
            ⭐
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Warriors Who Won
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories of courage, transformation, and victory
          </p>
        </motion.div>

        {/* Main Story Card */}
        <motion.div
          key={currentStory}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto mb-8"
        >
          <Card className="overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-96 md:h-auto">
                <ImageWithFallback
                  src={currentData.image}
                  alt={`Success Story ${currentStory + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Achievement Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: 'spring' }}
                  className="absolute top-4 right-4 bg-white rounded-full p-4 shadow-xl"
                >
                  <div className="text-4xl">{currentData.icon}</div>
                </motion.div>

                {/* Stats Badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Achievement</p>
                        <p className="font-bold text-lg">{currentData.achievement}</p>
                      </div>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-10 flex flex-col justify-center bg-gradient-to-br from-white to-purple-50">
                <Quote className="w-12 h-12 text-purple-600 mb-4 opacity-30" />
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg mb-6 leading-relaxed italic"
                >
                  "{currentData.story}"
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
                      {currentData.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-lg">{currentData.name}</p>
                      <p className="text-sm text-muted-foreground">{currentData.age} years • {currentData.location}</p>
                    </div>
                  </div>
                </motion.div>

                <div className="mt-6 flex gap-2">
                  <Badge variant="secondary" className="px-3 py-1">
                    <Heart className="w-3 h-3 mr-1" />
                    Inspiring
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1">
                    Story #{currentStory + 1}
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4">
          <Button
            onClick={handlePrev}
            variant="outline"
            size="lg"
            className="rounded-full w-12 h-12 p-0"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStory(index)}
                className={`transition-all ${
                  index === currentStory
                    ? 'w-8 h-3 bg-gradient-to-r from-purple-600 to-pink-600'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                } rounded-full`}
              />
            ))}
          </div>

          <Button
            onClick={handleNext}
            variant="outline"
            size="lg"
            className="rounded-full w-12 h-12 p-0"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-xl mb-6">
            Want to share your story of transformation?
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            <Heart className="w-5 h-5 mr-2" />
            Share Your Journey
          </Button>
        </motion.div>
      </div>
    </section>
  );
}