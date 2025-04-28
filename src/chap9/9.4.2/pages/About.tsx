import React from "react";

type Props = { title: String };

const About = (props: Props) => {
  return (
    <div className="card card-body">
      <h2>About {props.title}</h2>
    </div>
  );
};

export default About;
