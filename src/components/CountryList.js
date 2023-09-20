import React, {useState} from 'react'


const CountryList = () => {
      // Initialize state for the list of countries
  const [countries, setCountries] = useState(['US']);

  // Initialize state for the input field
  const [newCountry, setNewCountry] = useState('');

  // Function to handle input field change
  const handleInputChange = (e) => {
    setNewCountry(e.target.value);
  };

  // Function to add a new country to the list
  const addCountry = () => {
    if (newCountry.trim() !== '') {
      // Use previous state to append the new country
      setCountries((prevCountries) => [...prevCountries, newCountry]);
      // Clear the input field
      setNewCountry('');
    }
  };

    return (
        <div className="App">
        <h1>Country List</h1>
        <input
            type="text"
            value={newCountry}
            onChange={ e=> setNewCountry(e.target.value)}
            placeholder="Enter a new country"
        />
        <button onClick={addCountry}>Add Country</button>
        <ul>
            {countries.map((country, index) => (
            <li key={index}>{country}</li>
            ))}
        </ul>
        </div>
    );
  }
  
export default CountryList;