import { useState } from "react";

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
    setEntry(initialEntryState);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="recordName">Record Name</label>
      <input
        id="recordName"
        name="recordName"
        value={entry.recordName}
        onChange={onChangehandler}
      />

      <label htmlFor="artistName">Artist Name</label>
      <input
        id="artistName"
        name="artistName"
        value={entry.artistName}
        onChange={onChangehandler}
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        rows={10}
        value={entry.description}
        onChange={onChangehandler}
      />

      <button type="submit">Add Records</button>
    </form>
  );
};

export default Form;
