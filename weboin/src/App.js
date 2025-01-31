import React, { useState } from "react";
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    phone: "",
    course: "",  // Default course selection
    status: "Unplaced",         // Default status selection
  });

  const [cards, setCards] = useState([]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission to create a card
  const handleSubmit = (e) => {
    e.preventDefault();
    setCards([...cards, formData]);
    // Clear the form after submitting
    setFormData({
      name: "",
      role: "",
      email: "",
      phone: "",
      course: "", // Reset to default after submit
      status: "Unplaced",         // Reset to default after submit
    });
  };

  // Handle card deletion
  const handleDelete = (index) => {
    const newCards = cards.filter((_, cardIndex) => cardIndex !== index);
    setCards(newCards);
  };

  return (
    <div className="min-vh-100 text-light d-flex flex-column align-items-center p-4" style={{ backgroundColor: "black" }}>
      {/* Navbar - Sticky */}
      <div className="w-100 d-flex justify-content-between align-items-center p-3" style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: 'black',
        borderRadius: '10px',
        border: '1px solid #6c757d',
      }}>
        <h1 id="green">LearnHub</h1>
        <button className="btn btn" style={{ color: 'white' }}>Admin</button>
      </div>
      <br></br>
      <h2 className="text- font-weight-bold" id="green">Fill This Form</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-100 container max-w-4xl d-grid gap-4">
        <div className="row">
          {/* Name */}
          <div className="col-md-6">
            <h2 className="text- font-weight-bold" id="green">Name:</h2>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="form-control form-control-lg mt-2" 
            />
          </div>

          {/* Role */}
          <div className="col-md-6">
            <h2 className="text- font-weight-bold" id="green">Role:</h2>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="Enter your role"
              className="form-control form-control-lg mt-2" 
            />
          </div>
        </div>

        <div className="row">
          {/* Email */}
          <div className="col-md-6">
            <h2 className="text- font-weight-bold" id="green">Email:</h2>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="form-control form-control-lg mt-2" 
            />
          </div>

          {/* Phone Number */}
          <div className="col-md-6">
            <h2 className="text- font-weight-bold" id="green">Phone Number:</h2>
            <input
              type="text"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="form-control form-control-lg mt-2" 
            />
          </div>
        </div>

        <div className="row">
          {/* Course */}
          <div className="col-md-6">
            <h2 className="text- font-weight-bold" id="green">Course:</h2>
            <select 
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="form-control form-control-lg mt-2" 
            >
              <option value ="">Select a course</option>
              <option value="React Basics">React Basics</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Javascript Fundamentals">Javascript Fundamentals</option>
              <option value="Advanced CSS">Advanced CSS</option>
              <option value="Backend Development">Backend Development</option>
            </select>
          </div>

          {/* Status */}
          <div className="col-md-6">
            <h2 className="text- font-weight-bold" id="green">Status:</h2>
            <select 
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="form-control form-control-lg mt-2" 
            >
              <option value="Unplaced">Unplaced</option>
              <option value="Placed">Placed</option>
            </select>
          </div>
        </div>
        <div className="d-flex justify-content-end">
    <button type="submit" className="btn btn mt-3"  style={{
    width: "8%",
    height: "40px",
    //padding: "10px",
    backgroundColor: "black",
     color: "white",
    border: "2px solid white",
    // borderRadius: "50%",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer"
  }}>Submit</button>
  </div></form>

      {/* Cards */}
      <div className="mt-4 w-100 container">
        <div className="row">
          {cards.map((card, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="card" style={{ backgroundColor: "#f8f9fa", color: "#343a40" }}>
                <div className="card-body">
                <button className="round-button"></button>
                <br></br>
                  {/* <p className="card-text"><strong>Name:</strong> {card.name}</p> */}
                  <p className="card-text"><strong>Role:</strong> {card.role}</p>
                  <p className="card-text"><strong>Email:</strong> {card.email}</p>
                  <p className="card-text"><strong>Phone:</strong> {card.phone}</p>
                  <p className="card-text"><strong>Course:</strong> {card.course}</p>
                  <p className="card-text"><strong>Status:</strong> {card.status}</p>
                  <button className="btn btn-danger" style={{width: '100%'}} onClick={() => handleDelete(index)}>
                  Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <center><h1 id="green">LearnHub</h1></center>
      <p className="copyright" style={{color:'grey'}}>2022 Tailwind Labs Inc. All rights reserved.</p>
      <br></br>
      
    </div>
  );
};

export default App;
