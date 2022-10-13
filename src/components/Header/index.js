import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

function Header() {
  return (
    <section className="my-5">
  <h1 id="header">MC?</h1>
  <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />

  <div className="my-2">
        <p>
         React application of Boot Camp portfolio for projects and challenges 

        </p>
        </div>
     </section>
 
  );
}

export default Header;