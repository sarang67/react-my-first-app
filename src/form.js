import React, { Fragment, useEffect, useState } from "react";
import "./form.css";

/*
1) Grouping checkboxes together
2) Using radio buttons
3) 48 Loading data into a form / smart/master component and dumb/servent component concept / one way data flow concept
*/

/*
master component
----------------
1) keep refrence of servent component
2) and it intractt with real data 
3) it  pass the data using one way flow

servent component
------------------
1) it take data from master
2) does their works
3) send back data to master

*/

const initialState = {
  firstName: "",
  lastName: "",
  biography: "",
  transport: "",
  agree: false,
  dinner: false,
  lunch: false,
  breakFast: false,
  shirtSize: "",
};

// this data could come from server
const loadedState = {
  firstName: "Sarang",
  lastName: "Jain",
  biography:
    "I love Javascript , its a amazing scripting language and this is bases language for React angular and Vue",
  transport: "train",
  agree: true,
  breakfast: true,
  lunch: true,
  dinner: false,
  shirtSize: "l",
};

// master component
const FormContainer = () => {
  const [data, setData] = useState(initialState);

  // clear form
  const onCLickHandler = () => {
    setData(initialState);
  };

  // load data in form
  const onCLickLoadDataHandler = () => {
    setData(loadedState);
  };

  // get data on submit form
  const onFormSubmithandler = (formstate) => {
    console.log("submitform --->", formstate);
  };

  return (
    <Fragment>
      <Form data={data} onFormSubmit={onFormSubmithandler} />

      <button type="button" onClick={onCLickLoadDataHandler}>
        Load Data
      </button>

      <br />
      <button type="button" onClick={onCLickHandler}>
        Clear Data
      </button>
    </Fragment>
  );
};

// servent component or dumb component
const Form = ({ data, onFormSubmit }) => {
  console.log("------------------------");
  // always remember below line ,  useState will not work at the time of re render ,it always work at the time of rendering or mounting.
  // and from next time means re rendering it is being ignored , but you will get the lastet state.
  
  const [formState, setFormState] = useState(initialState);

  // because on every data deps change our component will rernder . and it will set the the setFormState
  useEffect(() => {
    setFormState(data);
  }, [data]);

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
    // sending data to master
    onFormSubmit(formState);
  };

  return (
    <form name="userName" onSubmit={onSubmitHandler}>
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

      <fieldset>
        <legend>Select Your Meal</legend>
        <input
          type="checkbox"
          id="breakFast"
          name="breakFast"
          onChange={onChangehandler}
          checked={formState.breakFast}
        />
        <label htmlFor="breakFast">Breakfast</label>

        <input
          type="checkbox"
          id="lunch"
          name="lunch"
          onChange={onChangehandler}
          checked={formState.lunch}
        />

        <label htmlFor="lunch">Lunch</label>

        <input
          type="checkbox"
          id="dinner"
          name="dinner"
          onChange={onChangehandler}
          checked={formState.dinner}
        />
        <label htmlFor="dinner">Dinner</label>
      </fieldset>

      <fieldset>
        <legend>Choose T-shirt sizes</legend>
        <input
          type="radio"
          name="shirtSize"
          id="sizeS"
          value="s"
          onChange={onChangehandler}
          checked={formState.shirtSize === "s"}
        />
        <label htmlFor="sizeS">Small</label>

        <input
          type="radio"
          name="shirtSize"
          id="sizeM"
          value="m"
          onChange={onChangehandler}
          checked={formState.shirtSize === "m"}
        />
        <label htmlFor="sizeM">Medium</label>

        <input
          type="radio"
          name="shirtSize"
          value="l"
          id="sizeL"
          onChange={onChangehandler}
          checked={formState.shirtSize === "l"}
        />
        <label htmlFor="sizeL">Large</label>
      </fieldset>

      <label htmlFor="agree">I agree to terms and condition*</label>
      <input
        type="checkbox"
        id="agree"
        name="agree"
        onChange={onChangehandler}
        checked={formState.agree}
      />

      <button type="submit">Save Data</button>
    </form>
  );
};

export default FormContainer;
