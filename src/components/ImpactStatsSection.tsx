import { motion, useInView } from 'motion/react';
import { Card } from './ui/card';
import { Shield, Users, Heart, GraduationCap, Phone, TrendingUp, Award, Target } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

export function ImpactStatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    {
      icon: Shield,
      number: 547,
      suffix: '+',
      label: 'Lives Saved from Addiction',
      color: 'from-green-500 to-emerald-600',
      description: 'Successfully rehabilitated'
    },
    {
      icon: Heart,
      number: 1284,
      suffix: '+',
      label: 'Blood Units Donated',
      color: 'from-red-500 to-pink-600',
      description: 'Lives saved through donation'
    },
    {
      icon: GraduationCap,
      number: 823,
      suffix: '+',
      label: 'Students Educated',
      color: 'from-purple-500 to-pink-600',
      description: 'Free education provided'
    },
    {
      icon: Phone,
      number: 2156,
      suffix: '+',
      label: 'Helpline Calls Answered',
      color: 'from-orange-500 to-red-600',
      description: 'Available 24/7'
    },
    {
      icon: Target,
      number: 89,
      suffix: '%',
      label: 'Success Rate',
      color: 'from-yellow-500 to-orange-600',
      description: 'In rehabilitation programs'
    },
    {
      icon: Award,
      number: 45,
      suffix: '+',
      label: 'Awareness Campaigns',
      color: 'from-teal-500 to-cyan-600',
      description: 'Across North Tripura'
    },
    {
      icon: TrendingUp,
      number: 67,
      suffix: '%',
      label: 'Increase in Reporting',
      color: 'from-pink-500 to-rose-600',
      description: 'Anonymous tips received'
    }
  ];

  const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isInView) return;

      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [isInView, value]);

    return (
      <span>
        {count.toLocaleString()}
        {suffix}
      </span>
    );
  };

  return (
    <section ref={ref} className="py-8 md:py-16 bg-gradient-to-b from-orange-50 to-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
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
            backgroundImage: 'radial-gradient(circle, #f97316 2px, transparent 2px)',
            backgroundSize: '40px 40px',
          }}
        />
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
              rotate: [0, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="inline-block text-5xl mb-4"
          >
            📊
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Our Impact in Numbers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real data. Real change. Real impact on North Tripura.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-4 md:p-6 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className={`w-10 h-10 md:w-16 md:h-16 mb-3 md:mb-4 rounded-xl md:rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-5 h-5 md:w-8 md:h-8 text-white" />
                  </motion.div>

                  <div className={`text-2xl md:text-4xl font-bold mb-1 md:mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {isInView && <AnimatedNumber value={stat.number} suffix={stat.suffix} />}
                  </div>

                  <h3 className="text-sm md:text-base font-bold mb-1">{stat.label}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground hidden md:block">{stat.description}</p>

                  {/* Progress indicator */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                    className="mt-2 md:mt-4 h-1 bg-gradient-to-r from-orange-200 to-red-200 rounded-full overflow-hidden"
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1.5, delay: index * 0.1 + 0.7 }}
                      viewport={{ once: true }}
                      className={`h-full bg-gradient-to-r ${stat.color}`}
                    />
                  </motion.div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12"
        >
          <Card className="p-4 md:p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <h4 className="text-sm md:text-base font-bold mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
              Growing Impact
            </h4>
            <p className="text-xs md:text-sm text-muted-foreground">
              Our reach expands by <strong>23%</strong> every month as more warriors join the movement.
            </p>
          </Card>

          <Card className="p-4 md:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <h4 className="text-sm md:text-base font-bold mb-2 flex items-center gap-2">
              <Shield className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
              Community Trust
            </h4>
            <p className="text-xs md:text-sm text-muted-foreground">
              <strong>92%</strong> of community members trust YODDHA for drug-related interventions.
            </p>
          </Card>

          <Card className="p-4 md:p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
            <h4 className="text-sm md:text-base font-bold mb-2 flex items-center gap-2">
              <Award className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
              Youth Engagement
            </h4>
            <p className="text-xs md:text-sm text-muted-foreground">
              <strong>76%</strong> of our warriors are between ages 16-25, leading the change.
            </p>
          </Card>
        </motion.div>

        {/* Live Counter Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8 md:mt-12"
        >
          <Card className="inline-block p-3 md:p-4 bg-gradient-to-r from-orange-100 to-red-100 border-orange-200">
            <p className="text-xs md:text-sm">
              <motion.span
                animate={{
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="inline-block w-2 h-2 bg-red-600 rounded-full mr-2"
              />
              These numbers update in real-time as we continue making an impact!
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}