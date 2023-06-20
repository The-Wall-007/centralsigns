import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Gi3DMeeple } from "react-icons/gi";

const servicesList = ({ service }) => {
  return (
    <div className="col-3 p-15">
      <div className="services__card">
        <div className="services__card__img">
          <LazyLoadImage src={service.image} alt={service.name} />
        </div>
        <div className="services__card__layer">
          <div className="services__card__layer__content">
            <Gi3DMeeple size={20} />
            <div className="services__card__layer__content__service">
              {service.name}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default servicesList;
