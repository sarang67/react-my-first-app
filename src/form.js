import React, { useState } from "react";
import "./form.css";

const initialState = {
  firstName: "",
  lastName: "",
  biography: "",
  transport: "",
  agree: false,
};

const Form = () => {
  console.log("------------------------");
  const [formState, setFormState] = useState(initialState);

  const onChangehandler = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    const key = event.target.name;

    const updateFormStat = {
      ...formState,
      [key]: value,
    };

    setFormState(updateFormStat);
    console.log(updateFormStat);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    //console.log(event);
    console.log("submitform --->", formState);
  };

  const onCLickHandler = () => {
    setFormState(initialState);
  };

  return (
    <form name="userName" onSubmit={onSubmitHandler}>
      <p>{`Your firt name is ${formState.firstName} lastname ${formState.lastName}`}</p>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formState.firstName}
        onChange={onChangehandler}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formState.lastName}
        onChange={onChangehandler}
      ></input>

      <label htmlFor="biography">Biography</label>
      <textarea
        rows={10}
        id="biography"
        name="biography"
        value={formState.biography}
        onChange={onChangehandler}
      />

      <label htmlFor="transport">Transport</label>
      <select
        id="transport"
        name="transport"
        value={formState.transport}
        onChange={onChangehandler}
      >
        <option>None selected</option>
        <option value="plane">Plane</option>
        <option value="train">Train</option>
        <option value="car">Car</option>
        <option value="boat">Boat</option>
      </select>

      <label htmlFor="agree">I agree to terms and condition*</label>
      <input
        type="checkbox"
        id="agree"
        name="agree"
        onChange={onChangehandler}
        checked={formState.agree}
      />

      <button type="submit">Save Data</button>
      <button type="button" onClick={onCLickHandler}>
        Clear Data
      </button>
    </form>
  );
};

export default Form;

/*

1) using React.useref() hooks
********React form ****************
1) creating a controlleed forms / controlled component
2) multiple controls
3) submitting the form
4) updating formstate using code or clear data functinality
5) using textarea
6) using select box
7) using checkbox

*/

/*
contolled component
because we want to set value after our validation
1) default value of input will be attached with react state
2) only react  will change state or update the input value you haeve to attach onchange handler with all the controlled input

*/

/*
1) creating a controlleed forms / controlled component



import React, { useState } from "react";
import "./form.css";

const Form = () => {
  console.log("------------------------");
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastname] = useState("jain");

  const onFirstNameChangeHandler = (event) => {
    // console.log(event);  // syntheticevent
    console.log(event.target.value);
    const value = event.target.value.toUpperCase();
    setFirstName(value);
  };

  const onLastnameChangeHandler = (event) => {
    setLastname(event.target.value);
  };

  return (
    <form name="userName">
      <p>{`Your firt name is ${firstName} lastname ${lastname}`}</p>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        value={firstName}
        onChange={onFirstNameChangeHandler}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        value={lastname}
        onChange={onLastnameChangeHandler}
      ></input>
    </form>
  );
};

export default Form;

*/

// ==================================================================

/*
// 2) multiple controls
// 3) submitting the form

import React, { useState } from "react";
import "./form.css";

const Form = () => {
  console.log("------------------------");

 

//   const [firstName, setFirstName] = useState("");
//   const [lastname, setLastname] = useState("jain");

//   const onFirstNameChangeHandler = (event) => {
//     // console.log(event);  // syntheticevent
//     console.log(event.target.value);
//     const value = event.target.value.toUpperCase();
//     setFirstName(value);
//   };

//   const onLastnameChangeHandler = (event) => {
//     setLastname(event.target.value);
//   };



  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
  });

  const onChangehandler = (event) => {
    //  console.log(event);
    // console.log(formState);
    // console.log("===>", event.target.name, event.target.value);

    const value = event.target.value;
    const key = event.target.name;

    const updateFormStat = {
      ...formState,
      [key]: value,
    };

    setFormState(updateFormStat);
    console.log(updateFormStat);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <form name="userName" onSubmit={onSubmitHandler}>
      <p>{`Your firt name is ${formState.firstName} lastname ${formState.lastName}`}</p>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        value={formState.firstName}
        onChange={onChangehandler}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formState.lastName}
        onChange={onChangehandler}
      ></input>
      <button type="submit">Save Data</button>
    </form>
  );
};

export default Form;


*/
//=============================

/*
// 4) updating formstate using code or clear data functinality

import React, { useState } from "react";
import "./form.css";

const initialState = {
  firstName: "",
  lastName: "",
  biography: "",
};

const Form = () => {
  console.log("------------------------");
  const [formState, setFormState] = useState(initialState);

  const onChangehandler = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    const updateFormStat = {
      ...formState,
      [key]: value,
    };

    setFormState(updateFormStat);
    console.log(updateFormStat);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    //console.log(event);
    console.log("submitform --->", formState);
  };

  const onCLickHandler = () => {
    setFormState(initialState);
  };

  return (
    <form name="userName" onSubmit={onSubmitHandler}>
      <p>{`Your firt name is ${formState.firstName} lastname ${formState.lastName}`}</p>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        value={formState.firstName}
        onChange={onChangehandler}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formState.lastName}
        onChange={onChangehandler}
      ></input>

      <label htmlFor="biography">Biography</label>
      <textarea
        rows={10}
        id="biography"
        name="biography"
        value={formState.biography}
        onChange={onChangehandler}
      />

      <button type="submit">Save Data</button>
      <button type="button" onClick={onCLickHandler}>
        Clear Data
      </button>
    </form>
  );
};

export default Form;
*/

//=========================================
/*
//5) using textarea

import React, { useState } from "react";
import "./form.css";

const initialState = {
  firstName: "",
  lastName: "",
  biography: "",
  transport: "",
};

const Form = () => {
  console.log("------------------------");
  const [formState, setFormState] = useState(initialState);

  const onChangehandler = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    const updateFormStat = {
      ...formState,
      [key]: value,
    };

    setFormState(updateFormStat);
    console.log(updateFormStat);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    //console.log(event);
    console.log("submitform --->", formState);
  };

  const onCLickHandler = () => {
    setFormState(initialState);
  };

  return (
    <form name="userName" onSubmit={onSubmitHandler}>
      <p>{`Your firt name is ${formState.firstName} lastname ${formState.lastName}`}</p>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        value={formState.firstName}
        onChange={onChangehandler}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formState.lastName}
        onChange={onChangehandler}
      ></input>

      <label htmlFor="biography">Biography</label>
      <textarea
        rows={10}
        id="biography"
        name="biography"
        value={formState.biography}
        onChange={onChangehandler}
      />

      <label htmlFor="transport">Transport</label>
      <select
        id="transport"
        name="transport"
        value={formState.transport}
        onChange={onChangehandler}
      >
        <option>None selected</option>
        <option value="plane">Plane</option>
        <option value="train">Train</option>
        <option value="car">Car</option>
        <option value="boat">Boat</option>
      </select>

      <button type="submit">Save Data</button>
      <button type="button" onClick={onCLickHandler}>
        Clear Data
      </button>
    </form>
  );
};

export default Form;
*/

//==================================================

/*
// 6) using select box
// 7) using checkbox

import React, { useState } from "react";
import "./form.css";

const initialState = {
  firstName: "",
  lastName: "",
  biography: "",
  transport: "",
  agree: false,
};

const Form = () => {
  console.log("------------------------");
  const [formState, setFormState] = useState(initialState);

  const onChangehandler = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    const key = event.target.name;

    const updateFormStat = {
      ...formState,
      [key]: value,
    };

    setFormState(updateFormStat);
    console.log(updateFormStat);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    //console.log(event);
    console.log("submitform --->", formState);
  };

  const onCLickHandler = () => {
    setFormState(initialState);
  };

  return (
    <form name="userName" onSubmit={onSubmitHandler}>
      <p>{`Your firt name is ${formState.firstName} lastname ${formState.lastName}`}</p>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formState.firstName}
        onChange={onChangehandler}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formState.lastName}
        onChange={onChangehandler}
      ></input>

      <label htmlFor="biography">Biography</label>
      <textarea
        rows={10}
        id="biography"
        name="biography"
        value={formState.biography}
        onChange={onChangehandler}
      />

      <label htmlFor="transport">Transport</label>
      <select
        id="transport"
        name="transport"
        value={formState.transport}
        onChange={onChangehandler}
      >
        <option>None selected</option>
        <option value="plane">Plane</option>
        <option value="train">Train</option>
        <option value="car">Car</option>
        <option value="boat">Boat</option>
      </select>

      <label htmlFor="agree">I agree to terms and condition*</label>
      <input
        type="checkbox"
        id="agree"
        name="agree"
        onChange={onChangehandler}
        checked={formState.agree}
      />

      <button type="submit">Save Data</button>
      <button type="button" onClick={onCLickHandler}>
        Clear Data
      </button>
    </form>
  );
};

export default Form;

*/
