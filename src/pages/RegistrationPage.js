import React, { useState } from 'react';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', course: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div>
        <h1>Thank you for registering!</h1>
        <p>
          Name: {formData.name} <br />
          Email: {formData.email} <br />
          Course: {formData.course}
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1>Register for a Course</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Course:</label>
          <input type="text" name="course" value={formData.course} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
