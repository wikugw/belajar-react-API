import React, { Component } from "react";
// import YoutubeComponent from "../../components/YoutubeComponent/YoutubeComponent";
// import Product from "../Product/Product";
// import LifeCycleComponent from "../../components/LifeCycleComponent/LifeCycleComponent";
import BlogPost from "../BlogPost/BlogPost";

class Home extends Component {
  render() {
    return (
      <div>
        {/* <p>Youtube Components</p>
        <hr />
        <YoutubeComponent
          time="7.12"
          title="Tutorial unboxing nasi kotak part 1"
          desc="500x ditonton. 2 hari lalu"
        />
        <YoutubeComponent
          time="8.3"
          title="Tutorial unboxing nasi kotak part 2"
          desc="5x ditonton. 1 hari lalu"
        />
        <YoutubeComponent
          time="10.5"
          title="Tutorial unboxing nasi kotak part 3"
          desc="500789x ditonton. 2 bulan lalu"
        />
        <YoutubeComponent
          time="2.00"
          title="Tutorial unboxing nasi kotak part 4"
          desc="0x ditonton. 1 hari lalu"
        />
        <YoutubeComponent /> */}
        {/* <p>Couinter</p> */}
        {/* <hr />
        <Product /> */}
        {/* <p>LifeCycle</p>
        <hr />
        <LifeCycleComponent /> */}
        <p>Blog</p>
        <hr />
        <BlogPost />
      </div>
    );
  }
}

export default Home;
