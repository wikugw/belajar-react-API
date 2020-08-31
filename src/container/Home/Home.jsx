// import library
import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import pages
import Product from "../Pages/Product/Product";
import LifeCycleComponent from "../Pages/LifeCycleComponent/LifeCycleComponent";
import BlogPost from "../Pages/BlogPost/BlogPost";
import YoutubeComponentPage from "../Pages/YoutubeComponent/YoutubeComponentPage";
// import style
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <div className="navigation">
            <Link to="/">BlogPost</Link>
            <Link to="/product">Product</Link>
            <Link to="/lifecycle">lifecycle</Link>
            <Link to="/youtube">Youtube</Link>
          </div>
          <Route path="/" exact component={BlogPost}></Route>
          <Route path="/product" component={Product}></Route>
          <Route path="/lifecycle" component={LifeCycleComponent}></Route>
          <Route path="/youtube" component={YoutubeComponentPage}></Route>
        </Fragment>
      </Router>
    );
  }
}

export default Home;
