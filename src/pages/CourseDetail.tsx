
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { mockCourses } from '@/data/mockData';
import { Course } from '@/lib/types';
import { BookOpenIcon, ClockIcon, UserIcon } from 'lucide-react';

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState<Course | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);
  
  useEffect(() => {
    // Find the course
    const foundCourse = mockCourses.find(c => c.id === courseId);
    if (foundCourse) {
      setCourse(foundCourse);
    } else {
      toast.error("Course not found");
      navigate('/courses');
    }
    
    // Check if user is logged in and enrollment status
    const user = localStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      setIsLoggedIn(userData.isLoggedIn || false);
      
      // Check if the user is enrolled in this course
      const enrolledCourses = localStorage.getItem('enrolledCourses');
      if (enrolledCourses) {
        const coursesArray = JSON.parse(enrolledCourses);
        setIsEnrolled(coursesArray.includes(courseId));
      }
    }
  }, [courseId, navigate]);
  
  const handleEnroll = () => {
    if (!isLoggedIn) {
      toast.info("Please login to enroll in this course");
      navigate('/login');
      return;
    }
    
    // Store enrollment in localStorage
    let enrolledCourses = [];
    const storedCourses = localStorage.getItem('enrolledCourses');
    
    if (storedCourses) {
      enrolledCourses = JSON.parse(storedCourses);
    }
    
    if (!enrolledCourses.includes(courseId)) {
      enrolledCourses.push(courseId);
      localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
    }
    
    toast.success("Successfully enrolled! Start learning now.");
    setIsEnrolled(true);
  };
  
  const startQuiz = () => {
    if (!courseId) {
      toast.error("Course ID is missing");
      return;
    }
    
    // Add logging to debug
    console.log("Navigating to quiz with courseId:", courseId);
    // Ensure we're using a string path that correctly includes the courseId
    navigate(`/courses/${courseId}/quiz`);
    
    // Show a toast to indicate transition
    toast.info("Loading quiz...");
  };
  
  if (!course) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar isLoggedIn={isLoggedIn} />
        <div className="flex-grow flex items-center justify-center">
          <p>Loading course...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isLoggedIn={isLoggedIn} />
      
      {/* Course Hero */}
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <Badge className="mb-2">{course.category}</Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center">
                  <UserIcon className="h-4 w-4 mr-2" />
                  <span>{course.instructor}</span>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-4 w-4 mr-2" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <BookOpenIcon className="h-4 w-4 mr-2" />
                  <span>{course.level}</span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">{course.description}</p>
              
              {isEnrolled ? (
                <div className="space-x-4">
                  <Button onClick={startQuiz} className="bg-brand-green hover:bg-green-700">
                    Take Quiz
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                    Continue Learning
                  </Button>
                </div>
              ) : (
                <Button onClick={handleEnroll} className="bg-brand-blue hover:bg-blue-700">
                  Enroll Now (Free)
                </Button>
              )}
            </div>
            
            <div className="md:w-1/3">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Course Content */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview">
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="certificate">Certificate</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-4">About This Course</h3>
                      <p className="mb-4">
                        {course.description} This comprehensive course is designed to give you a deep understanding 
                        of the subject matter through interactive lessons, practical examples, and hands-on exercises.
                      </p>
                      
                      <h4 className="font-semibold mt-6 mb-2">What you'll learn:</h4>
                      <ul className="list-disc pl-5 space-y-1 mb-6">
                        <li>Core concepts and principles of {course.category}</li>
                        <li>Practical, real-world application of skills</li>
                        <li>Best practices and industry standards</li>
                        <li>Problem-solving techniques specific to this field</li>
                      </ul>
                      
                      <h4 className="font-semibold mt-6 mb-2">Requirements:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>No prior knowledge required - suitable for complete beginners</li>
                        <li>Basic computer skills</li>
                        <li>Dedication to complete the course materials</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-4">Meet Your Instructor</h3>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                          <UserIcon className="h-8 w-8 text-gray-500" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{course.instructor}</h4>
                          <p className="text-gray-500">Expert in {course.category}</p>
                        </div>
                      </div>
                      <p>
                        Our instructor brings years of industry experience and teaching expertise to help you master 
                        the skills needed to excel in this field. Their practical approach ensures you learn 
                        applicable skills that can be immediately put to use.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">Course Details</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Category</h4>
                          <p>{course.category}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Level</h4>
                          <p>{course.level}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Duration</h4>
                          <p>{course.duration}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Certificate</h4>
                          <p>Yes, upon completion of quiz with 90% score</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Price</h4>
                          <p className="font-bold text-brand-green">Free</p>
                        </div>
                      </div>
                      
                      {!isEnrolled && (
                        <Button 
                          onClick={handleEnroll} 
                          className="w-full mt-6 bg-brand-blue hover:bg-blue-700"
                        >
                          Enroll Now
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="curriculum">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-6">Course Curriculum</h3>
                  
                  <div className="space-y-4">
                    {/* We'd generate this dynamically in a real app */}
                    {Array.from({ length: 5 }).map((_, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <h4 className="font-semibold">Module {index + 1}</h4>
                          <span className="text-sm text-gray-500">3 lessons</span>
                        </div>
                        <div className="mt-2 space-y-2 pl-4">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                            <p className="text-sm">Lesson {index + 1}.1</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                            <p className="text-sm">Lesson {index + 1}.2</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                            <p className="text-sm">Lesson {index + 1}.3</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {!isEnrolled && (
                    <div className="mt-6 text-center">
                      <p className="mb-4 text-gray-600">Enroll now to access all course materials</p>
                      <Button 
                        onClick={handleEnroll} 
                        className="bg-brand-blue hover:bg-blue-700"
                      >
                        Enroll Now (Free)
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="certificate">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-6">Course Certificate</h3>
                  
                  <div className="mb-6">
                    <p>
                      Upon successful completion of the course quiz with a score of 90% or above, 
                      you will receive an official Education Centre Certificate of Completion.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-6 mb-6">
                    <div className="text-center">
                      <h4 className="text-2xl font-bold mb-2">Certificate of Completion</h4>
                      <p className="text-lg mb-4">This is to certify that</p>
                      <p className="text-xl font-bold mb-4">[Your Name]</p>
                      <p className="mb-4">has successfully completed the course</p>
                      <p className="text-xl font-bold mb-4">{course.title}</p>
                      <p className="mb-6">offered by Education Centre</p>
                      
                      <div className="flex justify-center gap-20 mt-4">
                        <div className="text-center">
                          <p className="border-t border-gray-300 pt-2">Aditya Kumar</p>
                          <p className="text-sm">Director</p>
                        </div>
                        <div className="text-center">
                          <p className="border-t border-gray-300 pt-2">Lekh Raj Soni</p>
                          <p className="text-sm">Co-Director</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    {isEnrolled ? (
                      <Button onClick={startQuiz} className="bg-brand-green hover:bg-green-700">
                        Take Quiz to Earn Certificate
                      </Button>
                    ) : (
                      <div>
                        <p className="mb-4 text-gray-600">Enroll in the course to become eligible for the certificate</p>
                        <Button 
                          onClick={handleEnroll} 
                          className="bg-brand-blue hover:bg-blue-700"
                        >
                          Enroll Now (Free)
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CourseDetail;
