import React, { useState } from "react";
import { Link } from "react-router-dom";

const DiplomaList = () => {
  const diplomas = [
    {
      id: "database-system",
      name: "Database System",
      courses: [
        { id: "db-design", name: "Database Design" },
        { id: "db-optimization", name: "Database Optimization" },
      ],
    },
    {
      id: "web-development",
      name: "Web Development",
      courses: [
        { id: "react-basics", name: "React Basics" },
        { id: "nodejs", name: "Node.js" },
      ],
    },
    {
      id: "cyber-security",
      name: "Cyber Security",
      courses: [
        { id: "network-security", name: "Network Security" },
        { id: "ethical-hacking", name: "Ethical Hacking" },
      ],
    },
  ];

  const [search, setSearch] = useState("");

  const filteredDiplomas = diplomas.filter((diploma) =>
    diploma.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="diploma-list">
      <h1>Diploma List</h1>

      <input
        type="text"
        placeholder="Search diplomas..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "20px", padding: "10px", width: "100%" }}
      />

      <ul>
        {filteredDiplomas.map((diploma) => (
          <li key={diploma.id}>
            <Link to={`/diplomas/${diploma.id}`}>{diploma.name}</Link>
            <ul>
              {diploma.courses.map((course) => (
                <li key={course.id}>
                  <Link to={`/diplomas/${diploma.id}/${course.id}`}>
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiplomaList;
