import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight, Shield, Heart, Users, Flame, Swords } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect } from 'react';

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50 pt-16">
      {/* Animated Background with Warrior Theme */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1675875467901-1a8c06411761?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB3YXJyaW9yJTIwdHJhZGl0aW9uYWwlMjBjdWx0dXJlfGVufDF8fHx8MTc2MDU1MTQ0M3ww&ixlib=rb-4.1.0&q=80&w=1080")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 via-transparent to-red-50/50"></div>
      </div>

      {/* Animated Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #f97316 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <Badge className="mb-4 text-sm py-2 px-4 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 border-orange-200">
                <Swords className="w-4 h-4 inline mr-2" />
                District Administration of North Tripura Initiative
              </Badge>
            </motion.div>

            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="mb-4"
            >
              <div className="text-6xl md:text-7xl inline-block">⚔️</div>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                YODDHA
              </span>
              <br />
              <span className="text-3xl md:text-4xl text-muted-foreground flex items-center gap-3">
                <Flame className="w-8 h-8 text-orange-600 inline" />
                The Warrior Within
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Fighting drug abuse, protecting our children, and empowering youth in North Tripura. 
              <strong> Every citizen is a warrior.</strong> Awaken the YODDHA in you and join the movement today!
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                onClick={() => scrollToSection('help')}
                size="lg" 
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              >
                <Shield className="mr-2 w-5 h-5" />
                Become a Yoddha
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                onClick={() => scrollToSection('awareness')}
                size="lg" 
                variant="outline"
                className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 text-lg px-8 py-6"
              >
                Learn More
              </Button>
            </motion.div>

            {/* Interactive Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { icon: Shield, number: '500+', label: 'Lives Saved', color: 'from-green-500 to-emerald-600' },
                { icon: Users, number: '5,000+', label: 'Warriors', color: 'from-blue-500 to-indigo-600' },
                { icon: Heart, number: '1,000+', label: 'Blood Units', color: 'from-red-500 to-pink-600' }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <motion.div 
                      className={`w-12 h-12 mx-auto mb-2 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center shadow-lg`}
                      animate={{
                        boxShadow: [
                          '0 0 0 0 rgba(249, 115, 22, 0.4)',
                          '0 0 0 10px rgba(249, 115, 22, 0)',
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Content - Image with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1722932581421-97fc3cc05188?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB5b3V0aCUyMHByb3Rlc3QlMjBhY3RpdmlzbXxlbnwxfHx8fDE3NjA1NTE0NDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Youth Empowerment Movement"
                  className="w-full h-[500px] object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              {/* Floating badges with animations */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 1, type: 'spring' }}
                whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                className="absolute top-4 right-4 bg-white p-4 rounded-2xl shadow-xl cursor-pointer"
              >
                <div className="text-3xl mb-1">🛡️</div>
                <div className="text-sm font-bold">Protected</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0, x: -50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2, type: 'spring' }}
                whileHover={{ scale: 1.05 }}
                className="absolute bottom-4 left-4 bg-gradient-to-r from-orange-600 to-red-600 text-white p-4 rounded-2xl shadow-xl cursor-pointer"
              >
                <div className="text-sm font-bold mb-1">24/7 Emergency</div>
                <div className="text-xl font-bold">1800-XXX-XXXX</div>
              </motion.div>

              {/* Warrior Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4, type: 'spring' }}
                whileHover={{ scale: 1.1, rotate: 360, transition: { type: 'spring', stiffness: 200 }}}
                className="absolute top-1/2 left-4 bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-3 rounded-full shadow-xl cursor-pointer"
              >
                <div className="text-2xl">⚔️</div>
              </motion.div>
            </motion.div>

            {/* Decorative animated elements */}
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-orange-200 to-red-200 rounded-full blur-3xl opacity-50"
            />
            <motion.div
              animate={{
                rotate: -360,
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-pink-200 to-orange-200 rounded-full blur-3xl opacity-50"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-orange-600"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-orange-600 rounded-full flex justify-center p-1">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="w-1.5 h-1.5 bg-orange-600 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
