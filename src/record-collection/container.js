import React, { Fragment, useEffect, useState } from "react";
import "./record.css";

import Header from "./header";
import Section from "./section";
import List from "./list";
import Form from "./form";

import axios from "axios";

const API = `http://localhost:3000/recordData`;

const Container = () => {
  const [records, setRecords] = useState([]);

  const onFormSubmitHandler = async (entry) => {
    axios.post(API, entry).then((res) => {
      const data = res.data;
      setRecords([...records, data]);
    });
  };

  useEffect(() => {
    axios.get(API).then((res) => {
      const data = res.data;
      setRecords(data);
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

export default Container;
