// 1) interpolation array in jsx

import React, { useState } from "react";

const sourceCity = {
  name1: "Pune",
  name2: "Mumbai",
  name4: "Kolkata",
  name3: "Chennai",
};

const UltimateHoldays = () => {
  return (
    <section>
      <h1>Ultimate Holidays Destination</h1>
      <ul>
        {Object.keys(sourceCity).map((objKey) => (
          <li key={objKey}>{sourceCity[objKey]}</li>
        ))}
      </ul>
    </section>
  );
};

export default UltimateHoldays;

/*
2) array map fucntion
const list5 = ["Pune", "Mumbai", "Delhi", "Chennai", "Kolkata"];

const brandNewMappedArray = list5.map((city, index) => {
  return `city name is ${city} and index of city is ${index}`;
});

console.log(brandNewMappedArray);


*/

/*

//3) using array map function to rendring array
// 4) understanding key props


import React from "react";

// array can be interpolated in JSX
//const list = ["Pune", "Mumbai", "Delhi", "Chennai", "Kolkata", ];

//const test = [<li>Pune</li>, <li>Mumbai</li>, <li>Delhi</li>];

const list = [
  { id: 1, name: "pune" },
  { id: 2, name: "Mumbai" },
  { id: 3, name: "Delhi" },
  { id: 4, name: "Chennai" },
  { id: 5, name: "Kolkata" },
];

console.log(
  <ul>
    {list.map((city, index) => (
      <li key={city.id}>{city.name}</li>
    ))}
  </ul>
);

const UltimateHoldays = () => {
  return (
    <section>
      <ul>
        {list.map((city, index) => (
          <li key={city.id}>{city.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default UltimateHoldays;
*/

/*

//5) javascript array filter method
import React from "react";

// array can be interpolated in JSX
//const list = ["Pune", "Mumbai", "Delhi", "Chennai", "Kolkata", ];

//const test = [<li>Pune</li>, <li>Mumbai</li>, <li>Delhi</li>];

const list = [
  { id: 1, name: "pune" },
  { id: 2, name: "Mumbai" },
  { id: 3, name: "Delhi" },
  { id: 4, name: "Chennai" },
  { id: 5, name: "Kolkata" },
];

console.log(
  <ul>
    {list.map((city, index) => (
      <li key={city.id}>{city.name}</li>
    ))}
  </ul>
);

const UltimateHoldays = () => {
  return (
    <section>
      <ul>
        {list.map((city, index) => (
          <li key={city.id}>{city.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default UltimateHoldays;
*/

/*
  // 6 Array filter function
  
  
  const arr = [
  { name: "sarang", online: true },
  { name: "sandeep", online: false },
  { name: "amit", online: true },
  { name: "sanket", online: false },
];

const ar2 = [
  { name: "", online: true },
  { name: "sandeep", online: false },
  { name: "amit", online: true },
  { name: "sanket", online: false },
];

const arrfil1 = arr.filter((item) => item.online);
console.log(arrfil1);

const arrfil2 = ar2.filter((item) => item.name);
console.log(arrfil2);

const arrfil3 = ar2.filter((item) => item.name && item.online);
console.log(arrfil3);

*/

/*
// 6)  filtering collection  with array while  rendering array in view

import React, { useState } from "react";

const list = [
  { id: 1, name: "pune", topDestination: true },
  { id: 2, name: "Mumbai", topDestination: false },
  { id: 3, name: "Delhi", topDestination: true },
  { id: 4, name: "Chennai", topDestination: false },
  { id: 5, name: "Kolkata", topDestination: false },
];

const UltimateHoldays = () => {
  const [showAll, setShowAll] = useState(true);

  const giveDestination = () => {
    return list
      .filter((city) => {
        return showAll ? true : city.topDestination;
      })
      .map((city) => {
        return <li key={city.id}>{city.name}</li>;
      });
  };

  return (
    <section>
      <h1>Ultimate Holidays Destination</h1>
      <ul>{giveDestination()}</ul>

      <button
        onClick={() => {
          setShowAll(true);
        }}
      >
        Show All
      </button>
      <button
        onClick={() => {
          setShowAll(false);
        }}
      >
        Show top destination
      </button>
    </section>
  );
};

export default UltimateHoldays;

*/

/*
//7)  Mapping an Object to view
import React, { useState } from "react";

const sourceCity = {
  name1: "Pune",
  name2: "Mumbai",
  name4: "Kolkata",
  name3: "Chennai",
};

const UltimateHoldays = () => {
  return (
    <section>
      <h1>Ultimate Holidays Destination</h1>
      <ul>
        {Object.keys(sourceCity).map((objKey) => (
          <li key={objKey}>{sourceCity[objKey]}</li>
        ))}
      </ul>
    </section>
  );
};

export default UltimateHoldays;
*/