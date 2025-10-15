import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { Megaphone, Clock } from 'lucide-react';

export function NewsTickerSection() {
  const news = [
    "🎉 500+ lives saved from addiction in 2024",
    "🏆 YODDHA recognized by State Government for excellence",
    "📚 New free coaching batch starting next month",
    "💉 Blood donation camp scheduled for 25th January",
    "🛡️ Anonymous reporting led to 50+ interventions this year",
    "⚡ 24/7 helpline now available in 3 languages",
    "🎯 Youth empowerment workshop on 15th February",
  ];

  return (
    <div className="bg-gradient-to-r from-red-600 via-orange-600 to-red-600 py-3 relative overflow-hidden mt-16">
      {/* Animated Stripe Background */}
      <motion.div
        animate={{
          x: [0, -1920],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, white 0px, white 10px, transparent 10px, transparent 20px)',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center gap-4">
          {/* Fixed Label */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              <Megaphone className="w-5 h-5 text-white" />
            </motion.div>
            <Badge className="bg-white text-red-600 hover:bg-white font-bold px-3">
              LATEST
            </Badge>
          </div>

          {/* Scrolling News */}
          <div className="flex-1 overflow-hidden">
            <motion.div
              animate={{
                x: ['0%', '-100%'],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="flex gap-8 whitespace-nowrap"
            >
              {[...news, ...news].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-white font-medium">{item}</span>
                  <Clock className="w-4 h-4 text-white opacity-50" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
