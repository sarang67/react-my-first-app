import React from "react";
import { wetaherdata } from "./weatherData";
import Section from "./section";

const Reports = ({ match }) => {
  console.log(match);
  const { scale } = match.params;
  const data = wetaherdata(scale);

  console.log(data);
  return (
    <Section headingText={`Your weather report in ${scale.toUpperCase()}`}>
      {/* <h1>Your weather report in {scale.toUpperCase()}</h1> */}
      <dl>
        {data.map((item) => {
          return (
            <React.Fragment key={item.city}>
              <dt>{item.city}</dt>
              <dd>{item.temp.toString()}</dd>
            </React.Fragment>
          );
        })}
      </dl>
    </Section>
  );
};

export default Reports;
