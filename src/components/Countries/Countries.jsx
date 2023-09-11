import { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    // visited countries show flags state declaration step 1
    const [visitedFlags, setVisitedFlags] = useState([]);



    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => setCountries(data));
    }, [])

    const handleVisitedCountry = country => {
        console.log('add this to your visited country');
        // add visited country spread operator use add visited country step 1
        const newVisitedCountries = [...visitedCountries, country];
        // add visited country spread operator use add visited country step 2 set visited country
        setVisitedCountries(newVisitedCountries);
    }


    // visited countries show flags state declaration step 2 : declaration events handlers
    const handleVisitedFlags = flag => {
        // visited countries show flags step 6 : new visited flag spread syntax operator use
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);

    }


    // remove item from an array in a state
    // use filter to select all the elements except the one you want to remove



    return (
        <div className=" max-w-screen-xl mx-auto">
            <h3> Countries: {countries.length} </h3>

            {/* Visited country components */}
            <div>
            <h5>Visited countries: {visitedCountries.length}</h5>
            <ul>
                {/* Show visited country spread operator use add visited country step 3 */}
            {
                visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
            }
            </ul>
            </div>


            {/* Visited flags show display step 7 */}
            <div>
                {
                    visitedFlags.map((flag, idx) => <img className="w-16" key={idx} src={flag} alt=""></img>)
                }
            </div>

            {/* Display visited countrires */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                countries.map(country => <Country 
                    key={country.cca3}
                    handleVisitedCountry={handleVisitedCountry}
                    handleVisitedFlags={handleVisitedFlags}
                    country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;