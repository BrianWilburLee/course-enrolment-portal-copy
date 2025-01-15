import React from 'react';
import { useParams, Link } from 'react-router-dom';

const courses = {
  'database-systems': [
    { id: 'sql-basics', name: 'SQL Basics' },
    { id: 'advanced-sql', name: 'Advanced SQL' },
    { id: 'database-administration', name: 'Database Administration' },
  ],
  'web-development': [
    { id: 'html-css', name: 'HTML & CSS' },
    { id: 'javascript', name: 'JavaScript' },
    { id: 'react', name: 'React.js' },
    { id: 'nodejs', name: 'Node.js' },
  ],
  'data-science': [
    { id: 'python-data-science', name: 'Python for Data Science' },
    { id: 'machine-learning', name: 'Machine Learning' },
    { id: 'deep-learning', name: 'Deep Learning' },
  ],
  'cyber-security': [
    { id: 'ethical-hacking', name: 'Ethical Hacking' },
    { id: 'network-security', name: 'Network Security' },
    { id: 'cyber-threats', name: 'Cyber Threats' },
  ],
};

const CoursePage = () => {
  const { diplomaId } = useParams();
  const courseList = courses[diplomaId] || [];

  return (
    <div>
      <h1>Courses in {diplomaId.replace('-', ' ')}</h1>
      <ul>
        {courseList.map((course) => (
          <li key={course.id}>
            <Link to={`/diplomas/${diplomaId}/${course.id}`}>{course.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursePage;
