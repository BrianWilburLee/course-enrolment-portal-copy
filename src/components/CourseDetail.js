import React from 'react';
import { useParams } from 'react-router-dom';

const courseDetails = {
  'sql-basics': 'Learn the basics of SQL, including queries and database structure.',
  'advanced-sql': 'Master advanced SQL concepts, including complex joins and optimization.',
  'database-administration': 'Become skilled in managing and maintaining databases.',
  'html-css': 'Learn how to structure and style websites using HTML and CSS.',
  'javascript': 'Explore the core concepts of JavaScript programming.',
  'react': 'Build dynamic user interfaces with React.js.',
  'nodejs': 'Develop server-side applications using Node.js.',
  'python-data-science': 'Use Python for data analysis and visualization.',
  'machine-learning': 'Understand machine learning algorithms and their applications.',
  'deep-learning': 'Dive into neural networks and deep learning models.',
  'ethical-hacking': 'Learn the principles of ethical hacking and penetration testing.',
  'network-security': 'Explore strategies for securing networks against threats.',
  'cyber-threats': 'Understand and mitigate common cyber threats.',
};

const CourseDetail = () => {
  const { moduleId } = useParams();
  const detail = courseDetails[moduleId] || 'No details available for this course.';

  return (
    <div>
      <h1>Course Detail</h1>
      <p>{detail}</p>
    </div>
  );
};

export default CourseDetail;
