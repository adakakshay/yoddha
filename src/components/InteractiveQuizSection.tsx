import { motion, AnimatePresence } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Brain, Trophy, Zap, RefreshCw, Share2, CheckCircle, XCircle } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

export function InteractiveQuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const questions = [
    {
      question: "What is the most commonly abused drug among teenagers in India?",
      options: [
        "Cannabis/Marijuana",
        "Heroin",
        "Cocaine",
        "LSD"
      ],
      correct: 0,
      explanation: "Cannabis is the most commonly used drug among youth in India, often seen as 'harmless' but can lead to serious addiction.",
      fact: "💡 Over 3% of Indian youth have experimented with cannabis."
    },
    {
      question: "At what age is child marriage illegal in India?",
      options: [
        "Below 16 for girls",
        "Below 18 for girls, 21 for boys",
        "Below 21 for both",
        "Below 18 for both"
      ],
      correct: 1,
      explanation: "In India, the legal age for marriage is 21 for men and 18 for women (as per recent amendments).",
      fact: "⚖️ Child marriage violates fundamental rights and affects millions of children."
    },
    {
      question: "What should you do if you suspect someone is dealing drugs in your area?",
      options: [
        "Ignore it",
        "Confront them directly",
        "Report anonymously to authorities",
        "Share on social media"
      ],
      correct: 2,
      explanation: "Anonymous reporting protects your identity while helping authorities take action against drug dealers.",
      fact: "📱 Anonymous tips help solve 40% of drug-related cases."
    },
    {
      question: "Which of these is an early warning sign of drug abuse?",
      options: [
        "All of the above",
        "Sudden change in behavior",
        "Secretive activities",
        "Neglecting responsibilities"
      ],
      correct: 0,
      explanation: "All these signs can indicate drug abuse. Early detection can help save lives through timely intervention.",
      fact: "👀 Family members are often the first to notice behavioral changes."
    },
    {
      question: "How long does it take for someone to become addicted to drugs?",
      options: [
        "After first use",
        "Several months",
        "Varies by person and drug",
        "Only after years"
      ],
      correct: 2,
      explanation: "Addiction timeline varies based on the drug type, frequency of use, and individual factors. Some drugs can cause dependency very quickly.",
      fact: "⚠️ Some drugs can cause addiction after just a few uses."
    }
  ];

  const handleAnswerClick = (answerIndex: number) => {
    if (selectedAnswer !== null) return; // Prevent multiple selections
    
    setSelectedAnswer(answerIndex);
    const isCorrect = answerIndex === questions[currentQuestion].correct;
    setAnswers([...answers, isCorrect]);
    
    if (isCorrect) {
      setScore(score + 20);
      toast.success('🎉 Correct!', {
        description: questions[currentQuestion].fact,
      });
    } else {
      toast.error('Not quite right', {
        description: 'Learn from this and keep going!',
      });
    }
    
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setQuizCompleted(false);
    setAnswers([]);
  };

  const getScoreMessage = () => {
    if (score >= 80) return { emoji: '🏆', text: 'Outstanding! You\'re a Drug Awareness Expert!', color: 'from-yellow-400 to-orange-500' };
    if (score >= 60) return { emoji: '⭐', text: 'Great job! You have good awareness!', color: 'from-green-400 to-blue-500' };
    if (score >= 40) return { emoji: '💪', text: 'Good effort! Keep learning!', color: 'from-blue-400 to-purple-500' };
    return { emoji: '📚', text: 'Keep learning! Knowledge is power!', color: 'from-purple-400 to-pink-500' };
  };

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  if (quizCompleted) {
    const scoreMsg = getScoreMessage();
    return (
      <section className="py-8 md:py-16 bg-gradient-to-b from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 md:p-12 text-center shadow-2xl">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="text-8xl mb-6"
              >
                {scoreMsg.emoji}
              </motion.div>
              
              <h2 className="text-4xl font-bold mb-4">Quiz Completed!</h2>
              <p className="text-2xl mb-6">{scoreMsg.text}</p>
              
              <div className={`inline-block p-8 rounded-2xl bg-gradient-to-br ${scoreMsg.color} text-white mb-8`}>
                <div className="text-6xl font-bold mb-2">{score}/100</div>
                <p className="text-xl">Your Score</p>
              </div>

              <div className="grid md:grid-cols-5 gap-2 mb-8">
                {answers.map((isCorrect, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 rounded-lg ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}
                  >
                    {isCorrect ? (
                      <CheckCircle className="w-8 h-8 text-green-600 mx-auto" />
                    ) : (
                      <XCircle className="w-8 h-8 text-red-600 mx-auto" />
                    )}
                    <p className="text-xs mt-2">Q{index + 1}</p>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-bold">What's Next?</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4 hover:shadow-lg transition-all">
                    <div className="text-3xl mb-2">🛡️</div>
                    <p className="text-sm font-medium">Take the YODDHA Pledge</p>
                  </Card>
                  <Card className="p-4 hover:shadow-lg transition-all">
                    <div className="text-3xl mb-2">📢</div>
                    <p className="text-sm font-medium">Share Awareness</p>
                  </Card>
                  <Card className="p-4 hover:shadow-lg transition-all">
                    <div className="text-3xl mb-2">📱</div>
                    <p className="text-sm font-medium">Report Issues</p>
                  </Card>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button
                  onClick={handleRestart}
                  size="lg"
                  variant="outline"
                  className="border-2"
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Try Again
                </Button>
                <Button
                  onClick={() => {
                    toast.success('Share feature coming soon!');
                  }}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Share2 className="w-5 h-5 mr-2" />
                  Share Results
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="inline-block text-6xl mb-4"
          >
            🧠
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Test Your Knowledge
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground">
            How much do you know about drug awareness and social issues?
          </p>
        </motion.div>

        {/* Score and Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-600" />
              <span className="font-bold">Score: {score}/100</span>
            </div>
            <Badge variant="secondary">
              Question {currentQuestion + 1} of {questions.length}
            </Badge>
          </div>
          <Progress value={progressPercentage} className="h-3" />
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-8 md:p-10 shadow-2xl">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                    {currentQuestion + 1}
                  </div>
                  <Zap className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  {questions[currentQuestion].question}
                </h3>
              </div>

              <div className="space-y-3 mb-8">
                {questions[currentQuestion].options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrect = index === questions[currentQuestion].correct;
                  const showAnswer = showResult && isSelected;
                  
                  return (
                    <motion.div
                      key={index}
                      whileHover={selectedAnswer === null ? { scale: 1.02 } : {}}
                      whileTap={selectedAnswer === null ? { scale: 0.98 } : {}}
                    >
                      <Card
                        onClick={() => handleAnswerClick(index)}
                        className={`p-5 cursor-pointer transition-all border-2 ${
                          showAnswer && isCorrect
                            ? 'bg-green-100 border-green-500'
                            : showAnswer && !isCorrect
                            ? 'bg-red-100 border-red-500'
                            : isSelected
                            ? 'border-blue-500 bg-blue-50'
                            : 'hover:border-blue-300 hover:shadow-md'
                        } ${selectedAnswer !== null && !isSelected ? 'opacity-60' : ''}`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{option}</span>
                          {showAnswer && isCorrect && (
                            <CheckCircle className="w-6 h-6 text-green-600" />
                          )}
                          {showAnswer && !isCorrect && isSelected && (
                            <XCircle className="w-6 h-6 text-red-600" />
                          )}
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              {/* Explanation */}
              <AnimatePresence>
                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className={`p-6 mb-6 ${
                      selectedAnswer === questions[currentQuestion].correct
                        ? 'bg-green-50 border-green-200'
                        : 'bg-blue-50 border-blue-200'
                    } border-2`}>
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <Brain className="w-5 h-5" />
                        Explanation
                      </h4>
                      <p className="mb-3">{questions[currentQuestion].explanation}</p>
                      <div className="p-3 bg-white rounded-lg">
                        <p className="text-sm">{questions[currentQuestion].fact}</p>
                      </div>
                    </Card>

                    <Button
                      onClick={handleNext}
                      size="lg"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
                      <Zap className="w-5 h-5 ml-2" />
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Fun Fact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-muted-foreground">
            💡 Challenge your friends and spread awareness!
          </p>
        </motion.div>
      </div>
    </section>
  );
}