import React from "react";
import Languages from "../../../components/Languages";
import Video from "../../../components/Video";
import Questions from "../../../components/Questions";

const CSS = () => {
  return (
    <div className="container">
      <Languages />

      <div id="main">
        <h1 id="maintitle"> CSS</h1>
        <p id="description">
          <span id="firstword"> CSS</span> stands for "Cascading Style Sheet."
          Cascading style sheets are used to format the layout of Web pages.
          They can be used to define text styles, table sizes, and other aspects
          of Web pages that previously could only be defined in a page's HTML.
        </p>
      </div>

      <div className="maincontainer">
        <div className="row">
          <div className="card  ">
            <h2 className="title"> Educational</h2>
            <p>
              <a href="https://developer.mozilla.org/kab/docs/Web/CSS">
                Mozilla Developer Network
              </a>
            </p>
            <p>
              <a href="https://www.w3schools.com/css/">W3 Schools</a>
            </p>
            <p>
              <a href="https://www.tutorialspoint.com/css/">Tutorials Point</a>
            </p>
          </div>

          <div className="card">
            <h2 className="title"> Online Courses</h2>
            <p>
              <a href="https://www.codecademy.com/courses/learn-css-selectors-visual-rules/lessons/css-setup-selectors/exercises/intro-to-css?course_redirect=learn-css">
                Code Academy
              </a>
            </p>
            <p>
              <a href="https://www.udemy.com/topic/css/">Udemy</a>
            </p>
            <p>
              <a href="https://www.udacity.com/course/intro-to-html-and-css--ud001">
                Udacity
              </a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="h-100 col-lg-11 card " id="youtube">
            <h2 className="title"> YouTube Videos</h2>
            <Video query="css coding" />
          </div>
        </div>
        <div className="row">
          <div className="h-100 col-lg-11  card">
            <h2 className="title"> Stack Overflow Questions</h2>
            <Questions query="css" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSS;
