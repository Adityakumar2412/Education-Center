import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { mockCourses, mockQuizQuestions } from '@/data/mockData';
import { QuizQuestion, Course } from '@/lib/types';

const CourseQuiz = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState<Course | null>(null);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [score, setScore] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      setIsLoggedIn(userData.isLoggedIn || false);
    } else {
      toast.error("Please login to take the quiz");
      navigate('/login');
      return;
    }
    
    // Find the course
    const foundCourse = mockCourses.find(c => c.id === courseId);
    if (foundCourse) {
      setCourse(foundCourse);
      
      // Get the questions for this course
      if (courseId && mockQuizQuestions[courseId]) {
        setQuestions(mockQuizQuestions[courseId]);
      } else {
        // Create default questions if none are found
        const defaultQuestions: QuizQuestion[] = [
          {
            id: `default-q1-${courseId}`,
            question: `What is the primary focus of ${foundCourse.title}?`,
            options: ["Learning fundamentals", "Advanced techniques", "Practical application", "Theoretical concepts"],
            correctAnswer: "Learning fundamentals"
          },
          {
            id: `default-q2-${courseId}`,
            question: "Which of these is most important for success in this field?",
            options: ["Practice", "Theory", "Certification", "Equipment"],
            correctAnswer: "Practice"
          },
          {
            id: `default-q3-${courseId}`,
            question: "What learning approach is most effective for this subject?",
            options: ["Self-study", "Guided instruction", "Group work", "All of the above"],
            correctAnswer: "All of the above"
          },
          {
            id: `default-q4-${courseId}`,
            question: "What is a key benefit of mastering this subject?",
            options: ["Career advancement", "Personal development", "Problem-solving skills", "All of the above"],
            correctAnswer: "All of the above"
          },
          {
            id: `default-q5-${courseId}`,
            question: "Which industry most values the skills taught in this course?",
            options: ["Technology", "Business", "Education", "Depends on specialization"],
            correctAnswer: "Depends on specialization"
          }
        ];
        setQuestions(defaultQuestions);
        console.log("Using default questions for course:", courseId);
      }
    } else {
      toast.error("Course not found");
      navigate('/courses');
    }
  }, [courseId, navigate]);
  
  const handleAnswer = (answer: string) => {
    if (currentQuestion < questions.length) {
      setAnswers(prev => ({
        ...prev,
        [questions[currentQuestion].id]: answer
      }));
    }
  };
  
  const goToNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };
  
  const goToPrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };
  
  const submitQuiz = () => {
    // Check if all questions are answered
    if (Object.keys(answers).length < questions.length) {
      toast.warning("Please answer all questions before submitting");
      return;
    }
    
    setIsSubmitting(true);
    
    // Calculate score
    let correctAnswers = 0;
    questions.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    
    const calculatedScore = Math.round((correctAnswers / questions.length) * 100);
    setScore(calculatedScore);
    
    // Simulate API call delay
    setTimeout(() => {
      setIsSubmitting(false);
      setQuizComplete(true);
      
      if (calculatedScore >= 90) {
        toast.success("Congratulations! You've earned a certificate!");
      } else {
        toast.info("You need to score at least 90% to earn a certificate. Try again!");
      }
    }, 1500);
  };
  
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setQuizComplete(false);
    setScore(0);
  };
  
  const viewCertificate = () => {
    navigate(`/profile/certificates/${courseId}`);
  };

  if (!course || questions.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar isLoggedIn={isLoggedIn} />
        <div className="flex-grow flex items-center justify-center">
          <p>Loading quiz...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isLoggedIn={isLoggedIn} />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          {!quizComplete ? (
            <>
              <div className="mb-8">
                <h1 className="text-2xl font-bold mb-2">{course.title} - Course Quiz</h1>
                <p className="text-gray-600 mb-4">
                  Complete the quiz with a score of at least 90% to earn your certificate.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <Progress value={(currentQuestion + 1) / questions.length * 100} className="h-2" />
                  </div>
                  <div className="text-sm">
                    Question {currentQuestion + 1} of {questions.length}
                  </div>
                </div>
              </div>
              
              <Card className="mb-8">
                <CardHeader className="pb-2">
                  <h2 className="text-xl font-semibold">
                    {questions[currentQuestion].question}
                  </h2>
                </CardHeader>
                <CardContent className="pt-2">
                  <RadioGroup 
                    value={answers[questions[currentQuestion].id] || ""}
                    onValueChange={handleAnswer}
                    className="space-y-4"
                  >
                    {questions[currentQuestion].options.map((option, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <RadioGroupItem 
                          value={option} 
                          id={`option-${index}`} 
                        />
                        <Label htmlFor={`option-${index}`} className="cursor-pointer w-full">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </CardContent>
                <CardFooter className="flex justify-between pt-4">
                  <Button 
                    variant="outline" 
                    onClick={goToPrevQuestion}
                    disabled={currentQuestion === 0}
                  >
                    Previous
                  </Button>
                  {currentQuestion < questions.length - 1 ? (
                    <Button 
                      onClick={goToNextQuestion}
                      disabled={!answers[questions[currentQuestion].id]}
                    >
                      Next
                    </Button>
                  ) : (
                    <Button 
                      onClick={submitQuiz}
                      disabled={isSubmitting || !answers[questions[currentQuestion].id]}
                      className="bg-brand-green hover:bg-green-700"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Quiz"}
                    </Button>
                  )}
                </CardFooter>
              </Card>
              
              <div className="flex flex-wrap gap-2">
                {questions.map((_, index) => (
                  <Button 
                    key={index}
                    variant={index === currentQuestion ? "default" : "outline"}
                    className={`w-10 h-10 p-0 ${answers[questions[index].id] ? "bg-gray-200 border-gray-400" : ""}`}
                    onClick={() => setCurrentQuestion(index)}
                  >
                    {index + 1}
                  </Button>
                ))}
              </div>
            </>
          ) : (
            <Card>
              <CardHeader className="text-center">
                <h1 className="text-2xl font-bold mb-2">Quiz Results</h1>
                <p className="text-gray-600">
                  {course.title}
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <div className="text-6xl font-bold mb-2 text-brand-blue">{score}%</div>
                  <p className="text-lg">
                    You answered {Math.round(score / 100 * questions.length)} out of {questions.length} questions correctly
                  </p>
                </div>
                
                {score >= 90 ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-semibold text-green-700 mb-2">
                      Congratulations!
                    </h3>
                    <p className="text-green-700">
                      You've successfully passed the quiz and earned a certificate.
                      You can view and download it from your profile.
                    </p>
                  </div>
                ) : (
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-semibold text-orange-700 mb-2">
                      Almost there!
                    </h3>
                    <p className="text-orange-700">
                      You need to score at least 90% to earn a certificate. 
                      Review the course material and try again.
                    </p>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  variant="outline" 
                  onClick={restartQuiz}
                >
                  Retry Quiz
                </Button>
                {score >= 90 && (
                  <Button 
                    onClick={viewCertificate}
                    className="bg-brand-blue hover:bg-blue-700"
                  >
                    View Certificate
                  </Button>
                )}
              </CardFooter>
            </Card>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CourseQuiz;
