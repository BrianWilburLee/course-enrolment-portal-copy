import React from 'react';
import { Link } from 'react-router-dom';

const CourseList = ({ courses, diplomaId }) => {
  return (
    <div className="course-list">
      <h2>Courses Available</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <Link to={`/diplomas/${diplomaId}/${course.id}`}>{course.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
