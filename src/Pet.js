import React, { useContext } from "react";
import {Link} from "react-router-dom"
import ThemeContext from "./themeContext";

const Pet = (props) => {
  const [theme] = useContext(ThemeContext)
  const {name, animal, breed, images, location, id} = props;
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if(images.length) {
    hero = images[0]
  }
  console.log(theme);
  
  return (
   <Link to={`/details/${id}`} className="pet">
     <div className="image-container">
       <img src={hero} alt={name} />
     </div>
     <div className="info">
       <h1>{name}</h1>
       <h2>{animal} - {breed} - {location}</h2>
     </div>
   </Link>
  );
};

export default Pet;
