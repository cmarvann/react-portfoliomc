import React, { useState } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Project from "./components/Project";
import Footer from './components/Footer';


import './App.css';

function App() {
  const [categories] = useState([
    {
      name: 'projects',
      description: 'moduleprojects, group projects',
    },
    { name: 'challenges', description: 'Class Challenges' },
   
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  
  const [contactSelected, setContactSelected] = useState(false);

  
  return (
    <div>

    <Nav 
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
    ></Nav>
     <main>
      {!contactSelected ? (
          <>
      <Project currentCategory={currentCategory}></Project>
        <Header></Header>
        </>
        ) : (
            <Footer></Footer>
          )}
      </main>

    </div>

  );
}

export default App;
