import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionBox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
          harum voluptatum modi, distinctio magni, explicabo numquam nemo sit
          dignissimos doloribus non culpa, incidunt necessitatibus? Molestias
          accusantium officia quae harum commodi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          reprehenderit numquam labore sunt id, pariatur in molestiae unde nemo
          fuga error aliquam perferendis possimus eos provident, suscipit cumque
          quisquam? Repellat?
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
