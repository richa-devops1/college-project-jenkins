import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <header style={{background:"#2c3e50", color:"white", padding:"15px", display:"flex", justifyContent:"space-between"}}>
        <h1>ABC College</h1>
        <nav>
          <a href="/" style={{color:"white", margin:"10px"}}>Home</a>
          <a href="/" style={{color:"white", margin:"10px"}}>Courses</a>
          <a href="/" style={{color:"white", margin:"10px"}}>Students</a>
          <a href="/" style={{color:"white", margin:"10px"}}>Contact</a>
        </nav>
      </header>

      <section style={{textAlign:"center", padding:"50px", background:"#3498db", color:"white"}}>
        <h2>Welcome to ABC College Portal</h2>
        <p>Manage students, courses, and results easily</p>
      </section>

      <section style={{display:"flex", justifyContent:"space-around", padding:"20px"}}>
        <div style={{border:"1px solid #ccc", padding:"20px", width:"25%", textAlign:"center"}}>
          <h3>Students</h3>
          <p>View and manage student data</p>
        </div>

        <div style={{border:"1px solid #ccc", padding:"20px", width:"25%", textAlign:"center"}}>
          <h3>Courses</h3>
          <p>Explore available courses</p>
        </div>

        <div style={{border:"1px solid #ccc", padding:"20px", width:"25%", textAlign:"center"}}>
          <h3>Results</h3>
          <p>Check exam results</p>
        </div>
      </section>

      <footer style={{textAlign:"center", padding:"20px"}}>
        <p>© 2026 ABC College</p>
      </footer>
    </div>
  );
}

export default App;
