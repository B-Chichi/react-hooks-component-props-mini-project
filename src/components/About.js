import React from "react";

const defaultImage = "https://via.placeholder.com/215";

function About({ image, about }) {
  return (
    <>
      <aside>
        <img
          src={image ||defaultImage}
          alt="blog logo"
        ></img>
        <p>{about}</p>
      </aside>
    </>
  );
}

export default About