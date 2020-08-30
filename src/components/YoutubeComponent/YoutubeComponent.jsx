import React from "react";
import "./YoutubeComponent.css";

const YoutubeComponent = (props) => {
  return (
    <div className="youtube-wrapper">
      <div className="img-thumb">
        <img
          src="https://images.unsplash.com/photo-1517742815553-13ba553c4046?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
          alt=""
        />
        <p className="time">{props.time}</p>
      </div>
      <p className="title">{props.title}</p>
      <p className="desc">{props.desc}</p>
    </div>
  );
};

YoutubeComponent.defaultProps = {
  time: "0.00",
  title: "Judul will be placed hereeeeee",
  desc: "xx ditonton. x hari lalu",
};

export default YoutubeComponent;
