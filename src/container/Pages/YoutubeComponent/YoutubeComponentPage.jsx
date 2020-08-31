import React, { Component, Fragment } from "react";
import YoutubeComponent from "../../../components/YoutubeComponent/YoutubeComponent";

class YoutubeComponentPage extends Component {
  render() {
    return (
      <Fragment>
        <p>Youtube Component</p>
        <hr />
        <YoutubeComponent
          time="7.12"
          title="unboxing nasi kotak part 1"
          desc="2x ditonton. 2 hari lalu"
        ></YoutubeComponent>
        <YoutubeComponent
          time="7.12"
          title="unboxing nasi kotak part 2"
          desc="2x ditonton. 2 hari lalu"
        ></YoutubeComponent>
        <YoutubeComponent
          time="7.12"
          title="unboxing nasi kotak part 3"
          desc="2x ditonton. 2 hari lalu"
        ></YoutubeComponent>
        <YoutubeComponent
          time="7.12"
          title="unboxing nasi kotak part 4"
          desc="2x ditonton. 2 hari lalu"
        ></YoutubeComponent>
      </Fragment>
    );
  }
}

export default YoutubeComponentPage;
