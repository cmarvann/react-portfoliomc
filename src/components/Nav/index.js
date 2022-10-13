import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
const {
  categories = [],
   setCurrentCategory,
   currentCategory,
  //  contactSelected,
   setContactSelected,
   projectSelected,
   setProjectSelected,

 } = props;
 
 useEffect(() => {
  document.title = capitalizeFirstLetter(currentCategory.name);
}, [currentCategory]);

    return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="rome"> 📸</span> Codish Here!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
          <a data-testid="header" href="#header" onClick={() => setProjectSelected(false)}>
              Boot Camp Work
            </a>
          </li>

          {/* <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category)
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))} */}

           <li className={`mx-2 ${projectSelected && 'navActive'}`}>
              <span onClick={() => setContactSelected(true)}>Project</span>
            </li>
             {categories.map((category) => (
               <li
                 className={`mx-1 ${
                   currentCategory.name === category.name && !projectSelected && 'navActive'
                   }`}
                 key={category.name}
               >
                 <span
                   onClick={() => {
                     setCurrentCategory(category)
                     setProjectSelected(false);
                   }}
                 >
                   {capitalizeFirstLetter(category.name)}
                 </span>
               </li>   
          ))}
        </ul>
      </nav>
    </header>
  );
}


export default Nav;