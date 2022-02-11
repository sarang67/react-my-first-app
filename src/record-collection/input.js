import { Fragment, useRef, useState } from "react";
import uniqid from "uniqid";

// props using rest object
const Input = ({ type, labelText, ...restProps }) => {
  const id2 = useRef(uniqid()); // id2 --> {current: uniqid()}
  // const [id2, setId2] = useState(uniqid());

  return (
    <Fragment>
      <label htmlFor={id2.current}>{labelText}</label>
      {type === "textarea" ? (
        <textarea rows={10} {...restProps} id={id2.current} />
      ) : (
        <input {...restProps} id={id2.current} />
      )}
    </Fragment>
  );
};

export default Input;

/*

// props using individually props

const Input = ({ type, labelText, name, value, onChange }) => {
  // const id2 = uniqid();
  // console.log(id2);
  // const id2 = { current: uniqid() };

  const id2 = useRef(uniqid()); // id2 --> {current: uniqid()}
  // const [id2, setId2] = useState(uniqid());

  return (
    <Fragment>
      <label htmlFor={id2.current}>{labelText}</label>
      {type === "textarea" ? (
        <textarea
          //   id={id}
          id={id2.current}
          name={name}
          value={value}
          onChange={onChange}
          rows={10}
        />
      ) : (
        <input id={id2.current} name={name} value={value} onChange={onChange} />
      )}
    </Fragment>
  );
};

export default Input;
*/



/*
const noInputProps = {
  type: "number",
  value: 10,
  id: "test",
  name: "test",
};

 <input
        type={noInputProps.type}
        value={noInputProps.value}
        id={noInputProps.id}
        name={noInputProps.name}
      /> 

 <input {...noInputProps} /> 
*/
