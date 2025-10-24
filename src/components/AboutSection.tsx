import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Target, Eye, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  const visionPoints = [
    "A district free from drug abuse and child marriage",
    "Equal opportunities for children through free education",
    "A strong blood donation network to save lives"
  ];

  return (
    <section id="about" className="py-8 md:py-12 bg-gradient-to-b from-white to-orange-50">
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
              src="https://images.unsplash.com/photo-1630032373740-c731f30e3ea9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9wJTIwZHJ1ZyUyMGFidXNlJTIwY2FtcGFpZ24lMjBJbmRpYXxlbnwxfHx8fDE3NjEzMjc0MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
              <strong>YODDHA</strong> is a powerful initiative by the <strong>District Administration of North Tripura</strong>, dedicated to protecting our youth from the rising threat of drugs, child marriage, and social evils.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              We believe every citizen is a warrior (YODDHA) who can fight against addiction, child exploitation, and social injustice.
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
      </div>
    </section>
  );
}