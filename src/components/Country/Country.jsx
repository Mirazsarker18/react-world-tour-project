import { useState } from "react";
import './Country.css';
import CountryDetail from "../CountryDetail/CountryDetail";

// visited countries show flags function steup step 3
const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {

    const {name, flags, population, area, cca3} = country;

// Conditional buton handler step 1, (visited state declarations)
    const [visited, setVisited] = useState(false);
// Conditional buton handler step 2
    const handleVisited = () => {
        setVisited(!visited);
    }



    return (
        <div className="border-2 border-solid border-cyan-500 m-4 p-4 rounded-xl">
            {/*conditional css  style*/}
            <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
                {/* Conditional css style */}
            <h3 style={{color: visited ? 'aquamarine' : 'black'}}>Name: {name?.common}</h3>
            <img className=" w-24 mt-3" src={flags.png} alt="" />
            <p>Popolation: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>

            {/* Visited country components button */}
            <button onClick={() => handleVisitedCountry(country)} className="btn">Mark visited</button>
            <br />
                {/* flags  button step 4  */}
            <button className="btn" onClick={() => handleVisitedFlags(country.flags.png)}>Add flag</button>
            <br />

            {/* Conditional buton handler step 3 and 5 */}
            <button onClick={handleVisited} className="btn">{visited ? 'Visited' : 'Going'}</button>
            {/* Conditional buton handler step 4 tarnary oparetor */}
            {visited ? 'I have visited this country' : 'I want to visited this country' }

            <hr />

            <CountryDetail 
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
            ></CountryDetail>
            </div>
        </div>
    );
};

export default Country;