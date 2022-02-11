import { useState } from "react";
import Input from "./input";

const initialEntryState = {
  recordName: "",
  artistName: "",
  description: "",
};

const Form = ({ onFormSubmit }) => {
  const [entry, setEntry] = useState(initialEntryState);

  const onChangehandler = (event) => {
    setEntry({ ...entry, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // sending to container master component
    onFormSubmit({ ...entry });
    //console.log(entry);
    // for clean the filled data
    setEntry(initialEntryState);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Input
        type="text"
        labelText="Record Name"
        id="recordName"
        name="recordName"
        value={entry.recordName}
        onChange={onChangehandler}
      />

      <Input
        type="text"
        labelText="Artist Name"
        id="artistName"
        name="artistName"
        value={entry.artistName}
        onChange={onChangehandler}
      />

      <Input
        type="textarea"
        labelText="Description"
        id="description"
        name="description"
        value={entry.description}
        onChange={onChangehandler}
      />

      {/* <label htmlFor="recordName">Record Name</label>
      <input
        id="recordName"
        name="recordName"
        value={entry.recordName}
        onChange={onChangehandler}
      /> */}

      {/* <label htmlFor="artistName">Artist Name</label>
      <input
        id="artistName"
        name="artistName"
        value={entry.artistName}
        onChange={onChangehandler}
      /> */}

      {/* <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        rows={10}
        value={entry.description}
        onChange={onChangehandler}
      /> */}
      <button type="submit">Add Records</button>
    </form>
  );
};

export default Form;
