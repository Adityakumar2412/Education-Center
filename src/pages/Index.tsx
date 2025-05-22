
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { mockCourses } from '@/data/mockData';
import CourseCard from '@/components/CourseCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookOpenIcon, UserIcon, FileCheckIcon, UsersIcon } from 'lucide-react';

const Index = () => {
  // Display only 4 featured courses on the homepage
  const featuredCourses = mockCourses.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isLoggedIn={false} />
      
      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Free Education <span className="text-brand-blue">For Everyone</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Access over 100+ high-quality courses completely free. Learn valuable skills in 
            Programming, Business, Design, Finance, and Marketing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/courses">
              <Button className="bg-brand-blue hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg">
                Explore Courses
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" className="px-6 py-3 rounded-md text-lg">
                Sign Up for Free
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <Card className="border-none shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-2">
                  <BookOpenIcon className="h-10 w-10 text-brand-blue" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">100+</h3>
                <p className="text-gray-600">Free Courses</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-2">
                  <UserIcon className="h-10 w-10 text-brand-blue" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">50+</h3>
                <p className="text-gray-600">Expert Instructors</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-2">
                  <FileCheckIcon className="h-10 w-10 text-brand-blue" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">10k+</h3>
                <p className="text-gray-600">Certificates Issued</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-2">
                  <UsersIcon className="h-10 w-10 text-brand-blue" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">50k+</h3>
                <p className="text-gray-600">Active Learners</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Featured Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Courses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most popular courses across different categories. All courses are completely free and include a certificate upon successful completion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/courses">
              <Button className="bg-brand-blue hover:bg-blue-700 text-white px-6 py-3 rounded-md">
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn and earn certificates in just three simple steps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-none shadow-sm">
              <CardContent className="p-6">
                <div className="bg-brand-blue/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-blue text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Enroll in a Course</h3>
                <p className="text-gray-600">
                  Browse our catalog and enroll in any course for free. No hidden fees or charges.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-none shadow-sm">
              <CardContent className="p-6">
                <div className="bg-brand-blue/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-blue text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Complete the Quiz</h3>
                <p className="text-gray-600">
                  After studying the course material, take a short 10-question assessment quiz.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-none shadow-sm">
              <CardContent className="p-6">
                <div className="bg-brand-blue/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-blue text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Get Your Certificate</h3>
                <p className="text-gray-600">
                  Score 90% or above to receive your official Education Centre certificate.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-blue-100">
            Join thousands of learners who have already enhanced their skills with our free courses.
          </p>
          <div className="flex justify-center">
            <Link to="/login">
              <Button className="bg-white text-brand-blue hover:bg-gray-100 px-6 py-3 rounded-md text-lg">
                Create Free Account
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
