import React, { useState } from "react";

const DiplomasPage = () => {
  const [selectedSchool, setSelectedSchool] = useState("");
  const [selectedDiploma, setSelectedDiploma] = useState("");
  const [selectedModule, setSelectedModule] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [showFAQ, setShowFAQ] = useState(false);
  const [showFavourites, setShowFavourites] = useState(false);

  const schools = {
    "Information Technology": [
      {
        diplomaName: "Information Technology Diploma",
        modules: [
          {
            code: "C218",
            title: "UI/UX Design for Apps",
            lecturer: "Azhar Kamar",
            description:
              "Students will be equipped with knowledge in User Experience (UX) design in areas such as requirement gathering, creating, and analysis of User Interfaces (UI).",
          },
          {
            code: "C346",
            title: "Mobile App Development",
            lecturer: "Azhar Kamar",
            description:
              "This module covers the development of mobile applications, focusing on platform-specific features and best practices.",
          },
        ],
      },
    ],
    "Financial Technology": [
      {
        diplomaName: "Financial Technology Diploma",
        modules: [
          {
            code: "C237",
            title: "Software Application Development",
            lecturer: "Hannah Lim",
            description:
              "Learn the principles of software development, including methodologies, best practices, and tools to build reliable applications.",
          },
          {
            code: "C372",
            title: "Payment Technologies",
            lecturer: "Hannah Lim",
            description:
              "Understand modern payment systems, including digital wallets, blockchain technologies, and security in financial transactions.",
          },
        ],
      },
    ],
  };

  const faqs = [
    {
      question: "What is a diploma program?",
      answer:
        "A diploma program is a structured educational course designed to provide in-depth knowledge and practical skills in a specific field.",
    },
    {
      question: "How can I enroll in a diploma course?",
      answer:
        "You can enroll by visiting our course enrollment portal, selecting your desired diploma, and completing the application process.",
    },
    {
      question: "Are there prerequisites for these courses?",
      answer:
        "Some courses may have prerequisites, which are detailed in the course description. Please review them before enrolling.",
    },
    {
      question: "Can I favorite courses I am interested in?",
      answer:
        "Yes, you can use the 'Add to Favourites' button next to a course to save it. You can then view all your favourited courses using the 'View Favourites' button.",
    },
  ];

  const handleSchoolClick = (school) => {
    setSelectedSchool(school);
    setSelectedDiploma("");
    setSelectedModule("");
    setShowFavourites(false);
  };

  const handleDiplomaClick = (diploma) => {
    setSelectedDiploma(diploma);
    setSelectedModule("");
  };

  const handleModuleClick = (module) => {
    setSelectedModule(module);
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (!query) {
      setSelectedSchool("");
      setSelectedDiploma("");
      setSelectedModule("");
      return;
    }

    for (const [schoolName, diplomas] of Object.entries(schools)) {
      for (const diploma of diplomas) {
        if (diploma.diplomaName.toLowerCase().includes(query)) {
          setSelectedSchool(schoolName);
          setSelectedDiploma(diploma);
          setSelectedModule("");
          return;
        }

        for (const module of diploma.modules) {
          if (module.title.toLowerCase().includes(query)) {
            setSelectedSchool(schoolName);
            setSelectedDiploma(diploma);
            setSelectedModule(module);
            return;
          }
        }
      }
    }

    // If no matches found, clear selections
    setSelectedSchool("");
    setSelectedDiploma("");
    setSelectedModule("");
  };

  const toggleFavourite = (module) => {
    if (favourites.some((fav) => fav.code === module.code)) {
      setFavourites(favourites.filter((fav) => fav.code !== module.code));
    } else {
      setFavourites([...favourites, module]);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Diplomas & Courses</h1>
      <input
        type="text"
        placeholder="Search diplomas or courses..."
        value={searchQuery}
        onChange={handleSearch}
        style={styles.searchBar}
      />
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={() => setShowFAQ(!showFAQ)}>
          {showFAQ ? "Back to Courses" : "View FAQs"}
        </button>
        <button
          style={{ ...styles.button, marginLeft: "10px" }}
          onClick={() => setShowFavourites(!showFavourites)}
        >
          {showFavourites ? "Back to All Courses" : "View Favourites"}
        </button>
      </div>
      {showFAQ ? (
        <div style={styles.faqs}>
          <h3>Frequently Asked Questions</h3>
          {faqs.map((faq, index) => (
            <div key={index} style={styles.faq}>
              <h4
                style={styles.faqQuestion}
                onClick={() => (faq.open = !faq.open)}
              >
                {faq.question}
              </h4>
              {faq.open && <p style={styles.faqAnswer}>{faq.answer}</p>}
            </div>
          ))}
        </div>
      ) : showFavourites ? (
        <div style={styles.favourites}>
          <h3>Favourited Courses</h3>
          {favourites.length > 0 ? (
            favourites.map((fav, index) => (
              <div key={index} style={styles.module}>
                <h4>{fav.code} | {fav.title}</h4>
                <p>{fav.description}</p>
              </div>
            ))
          ) : (
            <p style={styles.noFavourites}>No favourited courses yet.</p>
          )}
        </div>
      ) : (
        <div>
          <div style={styles.schoolButtons}>
            {Object.keys(schools).map((school) => (
              <button
                key={school}
                style={
                  selectedSchool === school
                    ? { ...styles.schoolButton, ...styles.activeButton }
                    : styles.schoolButton
                }
                onClick={() => handleSchoolClick(school)}
              >
                {school}
              </button>
            ))}
          </div>
          {selectedSchool && (
            <div>
              <h3 style={styles.subHeader}>{selectedSchool}</h3>
              <div style={styles.diplomaButtons}>
                {schools[selectedSchool]
                  .filter(
                    (diploma) =>
                      diploma.diplomaName.toLowerCase().includes(searchQuery) ||
                      diploma.modules.some((module) =>
                        module.title.toLowerCase().includes(searchQuery)
                      )
                  )
                  .map((diploma, index) => (
                    <button
                      key={index}
                      style={
                        selectedDiploma.diplomaName === diploma.diplomaName
                          ? { ...styles.diplomaButton, ...styles.activeButton }
                          : styles.diplomaButton
                      }
                      onClick={() => handleDiplomaClick(diploma)}
                    >
                      {diploma.diplomaName}
                    </button>
                  ))}
              </div>
            </div>
          )}
          {selectedDiploma && (
            <div>
              <h3 style={styles.subHeader}>{selectedDiploma.diplomaName}</h3>
              <div style={styles.modules}>
                {selectedDiploma.modules.map((module, index) => (
                  <div key={index} style={styles.module}>
                    <h4
                      style={styles.moduleTitle}
                      onClick={() => handleModuleClick(module)}
                    >
                      {module.code} | {module.title}
                    </h4>
                    <button
                      style={styles.favouriteButton}
                      onClick={() => toggleFavourite(module)}
                    >
                      {favourites.some((fav) => fav.code === module.code)
                        ? "Remove from Favourites"
                        : "Add to Favourites"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          {selectedModule && (
            <div style={styles.moduleDetails}>
              <h3>Module Details</h3>
              <h4>
                {selectedModule.code} | {selectedModule.title}
              </h4>
              <p>
                <strong>Lecturer:</strong> {selectedModule.lecturer}
              </p>
              <p>
                <strong>Description:</strong> {selectedModule.description}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: { maxWidth: "800px", margin: "0 auto", fontFamily: "Arial, sans-serif" },
  header: { textAlign: "center", marginBottom: "20px", color: "#333" },
  searchBar: { padding: "10px", width: "100%", marginBottom: "20px", border: "1px solid #ccc", borderRadius: "5px" },
  buttonContainer: { display: "flex", justifyContent: "center", marginBottom: "20px" },
  button: { padding: "10px 15px", border: "none", borderRadius: "5px", backgroundColor: "#333", color: "#fff", cursor: "pointer" },
  schoolButtons: { display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px", marginBottom: "20px" },
  schoolButton: { padding: "10px", border: "1px solid #ccc", borderRadius: "5px", cursor: "pointer", backgroundColor: "#f9f9f9" },
  activeButton: { backgroundColor: "#ddd" },
  diplomaButtons: { display: "flex", flexDirection: "column", gap: "10px" },
  subHeader: { textAlign: "center", marginBottom: "20px" },
  modules: { display: "flex", flexDirection: "column", gap: "10px" },
  module: { border: "1px solid #ccc", padding: "15px", borderRadius: "5px" },
  moduleTitle: { cursor: "pointer", fontSize: "18px" },
  favouriteButton: { padding: "5px 10px", backgroundColor: "#333", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" },
  faq: { marginBottom: "10px" },
  faqQuestion: { fontWeight: "bold", cursor: "pointer" },
  faqAnswer: { marginTop: "5px" },
  favourites: { textAlign: "center" },
  noFavourites: { fontStyle: "italic" },
};

export default DiplomasPage;
