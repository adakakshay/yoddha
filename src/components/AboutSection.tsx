import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Target, Eye, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  const visionPoints = [
    "A district free from drug abuse",
    "Equal opportunities for children through free education",
    "A strong blood donation network to save lives"
  ];

  const ideologies = [
    {
      icon: "🙏",
      name: "Swami Vivekananda",
      value: "Sacrifice for the greater good"
    },
    {
      icon: "🎖️",
      name: "Netaji Subhas Chandra Bose",
      value: "Strength to fight social evils"
    },
    {
      icon: "✊",
      name: "Bhagat Singh",
      value: "Unity for progress"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            About YODDHA
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1748077971754-e8e1a37bd55a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB5b3V0aCUyMGVtcG93ZXJtZW50fGVufDF8fHx8MTc2MDU0ODk1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Youth Empowerment"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg mb-6 leading-relaxed">
              <strong>YODDHA</strong> is a joint initiative of <strong>দায়বদ্ধ NGO</strong> and the <strong>District Administration of North Tripura</strong>, dedicated to protecting our youth from the rising threat of drugs.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              We believe every citizen is a warrior (YODDHA) who can fight against addiction, ignorance, and despair.
            </p>
          </motion.div>
        </div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="p-8 bg-white shadow-xl border-t-4 border-orange-600">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-8 h-8 text-orange-600" />
              <h3 className="text-3xl font-bold">Our Vision</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {visionPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <Target className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <p className="text-lg">{point}</p>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Guiding Ideologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Guiding Ideologies</h3>
            <p className="text-lg text-muted-foreground">Inspired by India's greatest leaders</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {ideologies.map((ideology, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-orange-400">
                  <div className="text-5xl mb-4">{ideology.icon}</div>
                  <h4 className="text-xl font-bold mb-3">{ideology.name}</h4>
                  <p className="text-orange-600 font-medium">{ideology.value}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
