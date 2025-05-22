
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { toast } from "sonner";
import { mockCourses } from '@/data/mockData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileCheckIcon, BookOpenIcon, UserIcon } from 'lucide-react';

interface UserData {
  name: string;
  email: string;
  isLoggedIn: boolean;
}

const Profile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  // Mock enrolled courses - in a real app this would come from the backend
  const enrolledCourses = [
    {
      courseId: "1",
      enrollmentDate: "2023-05-15",
      quizCompleted: true,
      quizScore: 95,
      certificateIssued: true
    },
    {
      courseId: "3",
      enrollmentDate: "2023-06-10",
      quizCompleted: false,
      quizScore: 0,
      certificateIssued: false
    }
  ];
  
  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('user');
    if (!user) {
      toast.error("Please login to access your profile");
      navigate('/login');
      return;
    }
    
    const parsedUser = JSON.parse(user) as UserData;
    if (!parsedUser.isLoggedIn) {
      toast.error("Please login to access your profile");
      navigate('/login');
      return;
    }
    
    setUserData(parsedUser);
    setName(parsedUser.name);
    setEmail(parsedUser.email);
  }, [navigate]);
  
  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (userData) {
      const updatedUser = {
        ...userData,
        name,
        email
      };
      
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUserData(updatedUser);
      
      toast.success("Profile updated successfully");
    }
  };
  
  const handleLogout = () => {
    localStorage.removeItem('user');
    toast.success("Logged out successfully");
    navigate('/');
  };
  
  // Function to get course details by ID
  const getCourseDetails = (courseId: string) => {
    return mockCourses.find(course => course.id === courseId);
  };

  if (!userData) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar isLoggedIn={false} />
        <div className="flex-grow flex items-center justify-center">
          <p>Loading profile...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isLoggedIn={true} />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Profile Sidebar */}
            <div className="w-full md:w-1/4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center mb-6">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarFallback className="bg-brand-blue text-white text-xl">
                        {userData.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <h2 className="text-xl font-bold">{userData.name}</h2>
                    <p className="text-gray-500">{userData.email}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Profile Content */}
            <div className="w-full md:w-3/4">
              <Tabs defaultValue="courses">
                <TabsList className="mb-6">
                  <TabsTrigger value="courses">My Courses</TabsTrigger>
                  <TabsTrigger value="certificates">Certificates</TabsTrigger>
                  <TabsTrigger value="account">Account Settings</TabsTrigger>
                </TabsList>
                
                <TabsContent value="courses">
                  <Card>
                    <CardHeader>
                      <CardTitle>My Enrolled Courses</CardTitle>
                      <CardDescription>
                        Courses you are currently enrolled in
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {enrolledCourses.length > 0 ? (
                        <div className="space-y-4">
                          {enrolledCourses.map((enrollment, index) => {
                            const course = getCourseDetails(enrollment.courseId);
                            return course ? (
                              <Card key={index} className="overflow-hidden">
                                <div className="flex flex-col md:flex-row">
                                  <div className="md:w-1/3 h-48 md:h-auto">
                                    <img 
                                      src={course.image} 
                                      alt={course.title} 
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <div className="md:w-2/3 p-6">
                                    <div className="mb-2">
                                      <span className="inline-block bg-brand-blue/10 text-brand-blue text-xs font-semibold px-2 py-1 rounded-full">
                                        {course.category}
                                      </span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                                    <p className="text-sm text-gray-500 mb-4">
                                      Enrolled on: {new Date(enrollment.enrollmentDate).toLocaleDateString()}
                                    </p>
                                    
                                    <div className="flex flex-wrap items-center gap-3">
                                      <div className="flex items-center">
                                        <BookOpenIcon className="h-4 w-4 mr-1 text-gray-400" />
                                        <span className="text-sm">{course.level}</span>
                                      </div>
                                      <div className="flex items-center">
                                        <UserIcon className="h-4 w-4 mr-1 text-gray-400" />
                                        <span className="text-sm">{course.instructor}</span>
                                      </div>
                                      {enrollment.quizCompleted && (
                                        <div className="flex items-center">
                                          <FileCheckIcon className="h-4 w-4 mr-1 text-gray-400" />
                                          <span className="text-sm">Quiz: {enrollment.quizScore}%</span>
                                        </div>
                                      )}
                                    </div>
                                    
                                    <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-3">
                                      <Link to={`/courses/${course.id}`}>
                                        <Button variant="outline" size="sm">
                                          Continue Learning
                                        </Button>
                                      </Link>
                                      
                                      {enrollment.quizCompleted ? (
                                        enrollment.certificateIssued ? (
                                          <Link to={`/profile/certificates/${course.id}`}>
                                            <Button size="sm" className="bg-brand-green hover:bg-green-700">
                                              View Certificate
                                            </Button>
                                          </Link>
                                        ) : (
                                          <Button size="sm" disabled>
                                            No Certificate (Low Score)
                                          </Button>
                                        )
                                      ) : (
                                        <Link to={`/courses/${course.id}/quiz`}>
                                          <Button size="sm">
                                            Take Quiz
                                          </Button>
                                        </Link>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </Card>
                            ) : null;
                          })}
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <h3 className="text-lg font-semibold mb-2">You haven't enrolled in any courses yet</h3>
                          <p className="text-gray-500 mb-4">Browse our catalog and start learning for free</p>
                          <Link to="/courses">
                            <Button>Explore Courses</Button>
                          </Link>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="certificates">
                  <Card>
                    <CardHeader>
                      <CardTitle>My Certificates</CardTitle>
                      <CardDescription>
                        Certificates you've earned by completing courses
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {enrolledCourses.some(course => course.certificateIssued) ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {enrolledCourses
                            .filter(course => course.certificateIssued)
                            .map((enrollment, index) => {
                              const course = getCourseDetails(enrollment.courseId);
                              return course ? (
                                <Card key={index} className="overflow-hidden border-2 border-gray-100 hover:border-brand-blue/20 transition-colors">
                                  <Link to={`/profile/certificates/${course.id}`}>
                                    <div className="p-6">
                                      <div className="mb-4 flex justify-between">
                                        <span className="inline-block bg-brand-blue/10 text-brand-blue text-xs font-semibold px-2 py-1 rounded-full">
                                          {course.category}
                                        </span>
                                        <span className="inline-block bg-green-50 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                                          {enrollment.quizScore}%
                                        </span>
                                      </div>
                                      <h3 className="text-lg font-semibold mb-1">{course.title}</h3>
                                      <p className="text-sm text-gray-500 mb-6">
                                        Earned on: {new Date(enrollment.enrollmentDate).toLocaleDateString()}
                                      </p>
                                      
                                      <div className="text-center border-t border-gray-100 pt-4">
                                        <Button size="sm" className="bg-brand-blue hover:bg-blue-700">
                                          View Certificate
                                        </Button>
                                      </div>
                                    </div>
                                  </Link>
                                </Card>
                              ) : null;
                            })}
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <h3 className="text-lg font-semibold mb-2">No certificates earned yet</h3>
                          <p className="text-gray-500 mb-4">Complete a course with at least 90% quiz score to earn a certificate</p>
                          <Link to="/courses">
                            <Button>Explore Courses</Button>
                          </Link>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="account">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account Settings</CardTitle>
                      <CardDescription>
                        Update your account information
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleUpdateProfile} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input 
                              id="name" 
                              value={name} 
                              onChange={(e) => setName(e.target.value)}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input 
                              id="email" 
                              type="email" 
                              value={email} 
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="current-password">Current Password</Label>
                          <Input id="current-password" type="password" placeholder="••••••••" />
                          <p className="text-xs text-gray-500">
                            Enter your current password to change your password
                          </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="new-password">New Password</Label>
                            <Input id="new-password" type="password" placeholder="••••••••" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="confirm-password">Confirm New Password</Label>
                            <Input id="confirm-password" type="password" placeholder="••••••••" />
                          </div>
                        </div>
                        
                        <div className="flex justify-end">
                          <Button type="submit">Save Changes</Button>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
