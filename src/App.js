import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Triangles from './components/Triangles/Triangles';
import Footer from './components/Footer/Footer.jsx';
import Card from './components/Card/Card.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('https://tap-web-1.herokuapp.com/topics/list');
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);
  return (
    <div className="App">
          <Header/>
          <Triangles/>
          <div className="container">
                  <SearchBar/>
                  
                  <div className="topics-found"><p>"39" Web Topics Found</p></div>
                  <div className="cards">
                      {courses.map(course => (
                      <Card key={course.id} course={course} />))}
                  </div>
              
          </div>

          <Footer/>
    </div>
  );
}

export default App;
