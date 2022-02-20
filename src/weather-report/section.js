import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";

const Section = ({ headingText, headingLevel = 1, children }) => {
  console.log(`------------------------------------`);
  const headineElem = useRef(null); // headineElem--> {current:null}

  useEffect(() => {
    console.log("--->", headineElem);
    headineElem.current.focus();
  }, []);

  const H = `h${headingLevel}`;
  console.log(<p>jsut for test</p>);
  return (
    <section>
      <Helmet>
        <title>{headingText}</title>
      </Helmet>

      <H tabIndex="0" ref={headineElem}>
        {headingText}
      </H>
      {children}
    </section>
  );
};

export default Section;
