import React, { useContext, useReducer, useState } from "react";

import HomeSevicesContext from "../../context/HomeSevicesContext";
import ServicesList from "../ServicesList";

const HomeServices = () => {
  const {
    servicesData: { services },
  } = useContext(HomeSevicesContext);

  const [state] = useState({
    heading: "Our Services",
    paragraph:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae praesentium cupiditate culpa facere corporis qui provident ducimus, optio quisquam nobis tempora quos, nostrum alias labore fugit officia eveniet porro ab!",
  });

  return (
    <div className="services">
      <div className="container">
        <div className="row">
          <div className="col-6 p-15">
            <h3 className="services__heading">{state.heading}</h3>
          </div>
          <div className="col-6 p-15">
            <p className="services__paragraph">{state.paragraph}</p>
          </div>
        </div>
        <div className="services__block">
          <div className="row .ml-minus-15 .mr-minus-15">
            {services.map((service) => {
              return <ServicesList service={service} key={service.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
