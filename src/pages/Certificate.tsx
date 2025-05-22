
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { mockCourses } from '@/data/mockData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Course } from '@/lib/types';

const Certificate = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState<Course | null>(null);
  const [userName, setUserName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [issueDate, setIssueDate] = useState('');
  
  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('user');
    if (!user) {
      toast.error("Please login to view your certificate");
      navigate('/login');
      return;
    }
    
    const userData = JSON.parse(user);
    if (!userData.isLoggedIn) {
      toast.error("Please login to view your certificate");
      navigate('/login');
      return;
    }
    
    setIsLoggedIn(userData.isLoggedIn);
    setUserName(userData.name);
    
    // Find the course
    const foundCourse = mockCourses.find(c => c.id === courseId);
    if (foundCourse) {
      setCourse(foundCourse);
      // In a real app, we'd get the actual issue date from the backend
      setIssueDate(new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }));
    } else {
      toast.error("Course not found");
      navigate('/profile');
    }
  }, [courseId, navigate]);
  
  const handlePrintCertificate = () => {
    window.print();
  };

  if (!course) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar isLoggedIn={isLoggedIn} />
        <div className="flex-grow flex items-center justify-center">
          <p>Loading certificate...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="print:hidden">
        <Navbar isLoggedIn={isLoggedIn} />
      </div>
      
      <main className="flex-grow certificate-background py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 print:hidden">
              <Button onClick={() => navigate(-1)} variant="outline" className="bg-white">
                &larr; Back
              </Button>
            </div>
            
            <Card className="p-4 md:p-8 certificate bg-white shadow-lg border border-gray-200 print:border-0 print:shadow-none">
              <div className="certificate-inner border-4 border-blue-100 p-6 md:p-10">
                <div className="text-center">
                  <div className="mb-6">
                    <h1 className="text-2xl md:text-3xl font-bold mb-2 text-brand-blue">Education Centre</h1>
                    <p className="text-gray-600">Education for Everyone, Everywhere</p>
                  </div>
                  
                  <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider">Certificate of Completion</h2>
                  </div>
                  
                  <div className="mb-8">
                    <p className="text-lg">This is to certify that</p>
                    <h3 className="text-xl md:text-2xl font-bold mt-2 mb-4">{userName}</h3>
                    <p className="text-lg">has successfully completed the course</p>
                    <h3 className="text-xl md:text-2xl font-bold mt-2 mb-2">{course.title}</h3>
                    <p className="text-gray-600">{course.category}</p>
                  </div>
                  
                  <div className="mb-10">
                    <p className="text-gray-600">Issued on {issueDate}</p>
                  </div>
                  
                  <div className="flex justify-center gap-20 mt-10">
                    <div className="text-center">
                      <p className="border-t-2 border-gray-300 pt-2">Aditya Kumar</p>
                      <p className="text-sm text-gray-600">Director</p>
                    </div>
                    <div className="text-center">
                      <p className="border-t-2 border-gray-300 pt-2">Lekh Raj Soni</p>
                      <p className="text-sm text-gray-600">Co-Director</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            <div className="mt-8 text-center print:hidden">
              <Button 
                onClick={handlePrintCertificate} 
                className="bg-brand-blue hover:bg-blue-700"
              >
                Download Certificate
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default Certificate;
