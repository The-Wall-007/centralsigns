import React, { useReducer } from "react";

import HomeSevicesReducer from "../reducers/HomeSevicesReducer";
import HomeSevicesContext from "../HomeSevicesContext";
import { services } from "../../data/services";

const HomeServiceProvider = ({ children }) => {
  const [servicesData, dispatch] = useReducer(HomeSevicesReducer, {
    services,
  });

  return (
    <HomeSevicesContext.Provider value={{ servicesData, dispatch }}>
      {children}
    </HomeSevicesContext.Provider>
  );
};

export default HomeServiceProvider;
