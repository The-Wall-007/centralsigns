import React, { useState } from "react";
import { Header } from "../../components";

const Home = (props) => {
  const [state] = useState({
    heading: ` WE CREATE COLORFUL`,
    paragraph: ` PRINTING SOLUTIONS WITH UNBEATABLE QUALITY`,
  });

  return (
    <div>
      <Header props={state}>
        <button className="btn-default"> Request a Quate</button>
      </Header>
    </div>
  );
};

export default Home;
