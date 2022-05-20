import React, { useContext, useEffect, useState } from "react";
import Result from "./Result";
import useBreedList from "./useBreedList";
import ThemeContext from "./themeContext";

const ANIMALS = ["dog", "bird", "cat", "rabbit", "reptile"];
const SearchParams = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  
  let [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [BREEDS, status] = useBreedList(animal);

  console.log("theme", theme);
  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );

    const json = await res.json();

    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          location
          <input
            id="location"
            placeholder="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          ></input>
        </label>

        <label htmlFor="animal">
          animal
          <select value={animal} onChange={(e) => setAnimal(e.target.value)}>
            <option>Please Select animal</option>
            {ANIMALS.map((animal) => {
              return <option value={animal}>{animal}</option>;
            })}
          </select>
        </label>

        <label htmlFor="breed">
          breed
          <select value={breed} onChange={(e) => setBreed(e.target.value)}>
            <option>Please Select any breed</option>
            {BREEDS.map((breed) => {
              return <option value={breed}>{breed}</option>;
            })}
          </select>
        </label>

        <label htmlFor="theme">
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option />
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
            <option value="black">Black</option>
            <option value="purple">Purple</option>
          </select>
        </label>
        <button style={{ backgroundColor: theme }} type="submit">
          Submit
        </button>
      </form>

      <Result pets={pets} />
    </div>
  );
};

export default SearchParams;
