import React, { Fragment, useEffect, useRef, useState } from "react";
import "./record.css";

import Header from "./header";
import Section from "./section";
import List from "./list";
import Form from "./form";

import axios from "axios";

const API = `http://localhost:3000/recordData`;

const Container = ({ setShowApp }) => {
  const [records, setRecords] = useState([]);
  const isMount = useRef(true);

  const onFormSubmitHandler = async (entry) => {
    axios.post(API, entry).then((succdata) => {
      if (isMount.current) {
        const entry = succdata.data;
        setRecords([...records, entry]);
      }
    });
    setShowApp(false);
  };

  useEffect(() => {
    axios
      .get(API, {
        headers: {
          "Cache-Control": "private",
          "x-custom-header": "this is cutom header",
          "x-authentication-key": "jahskdjhaklshlkd122jk",
        },
      })
      .then((res) => {
        if (isMount.current) {
          const data = res.data;
          setRecords(data);
        }

        return () => {
          isMount.current = false;
        };
      });
  }, []);

  return (
    <Fragment>
      <Header />
      <main>
        <Section headingText="Add a favuoirate records" headingLevel={2}>
          <Form onFormSubmit={onFormSubmitHandler} />
        </Section>
        <Section headingText="Records" headingLevel={2}>
          <List records={records} />
        </Section>
      </main>
    </Fragment>
  );
};

const Wrapper = () => {
  const [showApp, setShow] = useState(true);
  return showApp && <Container setShowApp={setShow} />;
};

export default Wrapper;
