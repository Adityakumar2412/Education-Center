
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Course } from '@/lib/types';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge variant="outline" className="bg-brand-blue/10 text-brand-blue border-brand-blue/20">
            {course.category}
          </Badge>
          <Badge variant="outline" className="bg-gray-100">
            {course.level}
          </Badge>
        </div>
        <h3 className="font-semibold text-lg mt-2 line-clamp-2">{course.title}</h3>
      </CardHeader>
      <CardContent className="py-2 flex-grow">
        <p className="text-gray-600 text-sm line-clamp-3">{course.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-2 pb-4 text-sm">
        <div className="text-gray-500">
          <span>Instructor: {course.instructor}</span>
        </div>
        <div className="text-gray-500">
          <span>{course.duration}</span>
        </div>
      </CardFooter>
      <div className="px-4 pb-4">
        <Link to={`/courses/${course.id}`} className="block w-full">
          <button className="w-full bg-brand-blue text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
            View Course
          </button>
        </Link>
      </div>
    </Card>
  );
};

export default CourseCard;
