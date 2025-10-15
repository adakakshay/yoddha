import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-orange-600 via-red-600 to-pink-600"
        >
          <div className="text-center">
            {/* Animated Logo */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="text-8xl mb-6"
            >
              ⚔️
            </motion.div>

            {/* YODDHA Text */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl font-bold text-white mb-4"
            >
              YODDHA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/90 mb-8"
            >
              The Warrior Within
            </motion.p>

            {/* Loading Bar */}
            <div className="w-64 mx-auto">
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.8, ease: 'easeInOut' }}
                  className="h-full bg-white rounded-full"
                />
              </div>
            </div>

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-white mt-4"
            >
              Awakening the warrior...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
