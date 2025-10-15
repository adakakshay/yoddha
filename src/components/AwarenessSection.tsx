import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { AlertTriangle, Brain, Heart, Users, Pill } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function AwarenessSection() {
  const drugs = [
    { name: "Alcohol", effect: "Liver damage, accidents" },
    { name: "Cannabis (Ganja, Charas, Bhang)", effect: "Memory loss, low motivation" },
    { name: "Heroin / Brown Sugar", effect: "Extreme addiction, HIV risk" },
    { name: "Opium", effect: "Drowsiness, severe health decline" },
    { name: "Inhalants (Glue, Whitener)", effect: "Brain damage, youth misuse" },
    { name: "Prescription Drugs", effect: "Intoxication risk" },
    { name: "Synthetic Drugs (LSD, Ecstasy)", effect: "Hallucinations, psychosis" }
  ];

  const symptoms = [
    "Red or watery eyes",
    "Sudden weight loss or gain",
    "Fatigue and low energy",
    "Drop in school/work performance",
    "Secretive behavior, lying, stealing",
    "Mood swings – anger, depression, anxiety",
    "Loss of interest in hobbies",
    "Needle marks or nosebleeds",
    "Poor hygiene, self-neglect",
    "Borrowing money frequently"
  ];

  const physicalEffects = [
    "Liver and kidney failure",
    "Heart diseases, high blood pressure",
    "Weak immune system",
    "Malnutrition",
    "Overdose and death"
  ];

  const mentalEffects = [
    "Depression, anxiety, paranoia",
    "Hallucinations, delusions",
    "Concentration loss",
    "Risk of suicide"
  ];

  const socialEffects = [
    "Family breakdowns",
    "Violence and crime",
    "School dropouts",
    "Loss of career opportunities"
  ];

  return (
    <section id="awareness" className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            Drug Awareness – Know the Enemy
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto mb-8"></div>
        </motion.div>

        {/* What are Drugs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="p-8 bg-red-50 border-2 border-red-200">
            <div className="flex items-center gap-3 mb-4">
              <Pill className="w-8 h-8 text-red-600" />
              <h3 className="text-3xl font-bold">What are Drugs?</h3>
            </div>
            <p className="text-lg">
              Drugs are chemical substances that alter the brain, body, and behavior. Misuse leads to addiction, health problems, and social destruction.
            </p>
          </Card>
        </motion.div>

        {/* Common Drugs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold mb-6 text-center">Common Drugs Abused</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {drugs.map((drug, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 border-l-4 border-red-600">
                  <h4 className="font-bold mb-2 text-red-700">{drug.name}</h4>
                  <p className="text-sm text-muted-foreground">{drug.effect}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Symptoms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="p-8 bg-orange-50 border-2 border-orange-200">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-orange-600" />
              <h3 className="text-3xl font-bold">Early Warning Signs</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {symptoms.map((symptom, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-orange-600 rounded-full flex-shrink-0"></div>
                  <p>{symptom}</p>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Effects Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6 text-center">Devastating Effects of Drugs</h3>
          <Tabs defaultValue="physical" className="w-full">
            <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-3 mb-8">
              <TabsTrigger value="physical" className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Physical Health
              </TabsTrigger>
              <TabsTrigger value="mental" className="flex items-center gap-2">
                <Brain className="w-4 h-4" />
                Mental Health
              </TabsTrigger>
              <TabsTrigger value="social" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Social Life
              </TabsTrigger>
            </TabsList>

            <TabsContent value="physical">
              <Card className="p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {physicalEffects.map((effect, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-3 p-4 bg-red-50 rounded-lg"
                    >
                      <Badge variant="destructive">!</Badge>
                      <p>{effect}</p>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="mental">
              <Card className="p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {mentalEffects.map((effect, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg"
                    >
                      <Badge variant="destructive">!</Badge>
                      <p>{effect}</p>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="social">
              <Card className="p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {socialEffects.map((effect, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-3 p-4 bg-yellow-50 rounded-lg"
                    >
                      <Badge variant="destructive">!</Badge>
                      <p>{effect}</p>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
