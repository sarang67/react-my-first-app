import React, { Fragment, useState } from "react";
import "./record.css";

import Header from "./header";
import Section from "./section";
import List from "./list";
import Form from "./form";

const recordData = [
  {
    recordName: "3 Idiots",
    artistName: "Amir khan",
    description:
      "3 Idiots is a 2009 Indian Tamil-language coming-of-age comedy-drama film written, edited and directed by Rajkumar Hirani and co-written by Abhijat Joshi",
  },

  {
    recordName: "Chak De! India",
    artistName: "Sharukh khan",
    description:
      "Chak De! India ( transl. Let's Go! India) is a 2007 Indian Hindi-language sports film directed by Shimit Amin and produced by Aditya Chopra,",
  },
];

const Container = () => {
  const [records, setRecords] = useState(recordData);

  const onFormSubmitHandler = (entry) => {
    setRecords([...records, entry]);
  };

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
