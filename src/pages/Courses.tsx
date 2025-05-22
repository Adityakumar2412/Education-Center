
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { mockCourses } from '@/data/mockData';
import CourseCard from '@/components/CourseCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Course } from '@/lib/types';
import { SearchIcon } from 'lucide-react';

const Courses = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || '';
  const levelParam = searchParams.get('level') || '';
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState(categoryParam);
  const [level, setLevel] = useState(levelParam);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(mockCourses);
  
  // Check if user is logged in
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      setIsLoggedIn(userData.isLoggedIn || false);
    }
  }, []);
  
  // Apply filters
  useEffect(() => {
    let result = mockCourses;
    
    // Apply search filter
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      result = result.filter(
        course => 
          course.title.toLowerCase().includes(search) || 
          course.description.toLowerCase().includes(search) ||
          course.instructor.toLowerCase().includes(search)
      );
    }
    
    // Apply category filter
    if (category && category.toLowerCase() !== 'all') {
      result = result.filter(
        course => course.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    // Apply level filter
    if (level && level.toLowerCase() !== 'all') {
      result = result.filter(
        course => course.level.toLowerCase() === level.toLowerCase()
      );
    }
    
    setFilteredCourses(result);
    
    // Update URL search params
    const params = new URLSearchParams();
    if (category && category.toLowerCase() !== 'all') params.append('category', category);
    if (level && level.toLowerCase() !== 'all') params.append('level', level);
    setSearchParams(params);
  }, [searchTerm, category, level, setSearchParams]);
  
  const handleCategoryChange = (value: string) => {
    setCategory(value);
  };
  
  const handleLevelChange = (value: string) => {
    setLevel(value);
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };
  
  const resetFilters = () => {
    setSearchTerm('');
    setCategory('');
    setLevel('');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isLoggedIn={isLoggedIn} />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-2">Explore Our Courses</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our library of 100+ free high-quality courses across various categories.
            </p>
          </div>
          
          {/* Filter and Search Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative md:col-span-2">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                  type="text" 
                  placeholder="Search courses, topics, or instructors" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div>
                <Select value={category} onValueChange={handleCategoryChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="programming">Programming</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Select value={level} onValueChange={handleLevelChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Levels" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {(searchTerm || category || level) && (
                <div className="md:col-span-4 flex justify-end">
                  <Button 
                    type="button" 
                    variant="ghost" 
                    onClick={resetFilters}
                    className="text-sm"
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </form>
          </div>
          
          {/* Courses Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCourses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No courses found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your filters or search term</p>
              <Button onClick={resetFilters}>View All Courses</Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Courses;
