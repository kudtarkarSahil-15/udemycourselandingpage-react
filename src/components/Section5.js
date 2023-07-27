import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";

const Section5 = () => {
  const [expanded, setExpanded] = useState(false);

  const showMoreFn = () => {
    setExpanded(true);
  };

  const showLessFn = () => {
    setExpanded(false);
  };

  return (
    <>
      <div className="mt-4">
        <h3 className="mb-3 fw-bolder">Requirements</h3>
        <ul>
          <li>
            <span className="ms-2">
              No Angular 1 or Angular 2+ knowledge is required!
            </span>
          </li>
          <li>
            <span className="ms-2">
              Basic HTML and CSS knowledge helps, but isn't a must-have
            </span>
          </li>
          <li>
            <span className="ms-2">
              Prior TypeScript knowledge also helps but isn't necessary to
              benefit from this course
            </span>
          </li>
          <li>
            <span className="ms-2">Basic JavaScript knowledge is required</span>
          </li>
        </ul>
      </div>

      <div style={{ 
        height: expanded ? "auto" : "300px", // Change to the initial height you want
        overflow: "hidden",
      }}>
        <div className="mt-4">
          <h3 className="mb-3 fw-bolder">Description</h3>
          <p style={{ fontSize: "14px" }}>
            <strong>
              Join the most comprehensive and bestselling Angular course on
              Udemy and learn all about this amazing framework from the ground
              up, in great depth!
            </strong>
          </p>
          <p style={{ fontSize: "14px" }}>
            <strong>
              This course starts from scratch, you neither need to know Angular
              1 nor Angular 2!
            </strong>
          </p>
          <p style={{ fontSize: "14px" }}>
            From <strong>Setup</strong> to <strong>Deployment</strong>, this
            course covers it all! You'll learn all about{" "}
            <strong>Components</strong>,<strong> Directives</strong>,
            <strong> Services</strong>, <storng>Forms</storng>,{" "}
            <strong>Http</strong> Access,{" "}
            <strong>
              Authentication, Optimizing an Angular App with Modules and Offline
              Compilation
            </strong>{" "}
            and <strong>much more</strong> - and in the end: You'will learn how
            to <strong>deploy an apllication!</strong>
          </p>
          <p style={{ fontSize: "14px" }}>
            <strong>But that's not all!</strong> This course will also show you
            how to use the <strong>Angular CLI</strong> and feature a{" "}
            <strong>complete project</strong>, which allows you to practice the
            things learned throughout the course!
          </p>
          <p style={{ fontSize: "14px" }}>
            And if you do get stuck, you{" "}
            <strong>benefit from an extremely fast and friendly support</strong>{" "}
            - both via direct messaging or discussion. You have my word!
          </p>
          <p style={{ fontSize: "14px" }}>
            Angular is one of the most modern, performance-efficient and
            powerful frontend frameworks you can learn as of today. It allows
            you to build great web apps which offer awesome user experiences!{" "}
            <strong>
              Learn all the fundamentals you need to know to get started
              developing Angular applications right away.
            </strong>
          </p>
          <h6 className="fw-bold">Hear what my students have to say</h6>
          <p style={{ fontSize: "14px" }}>
            <i>
              Absolutely fantastic tutorial series. I cannot thank you enough.
              The quality is first class and your presentational skills are
              second to none. Keep up this excellent work. You really rock! -
              Paul Whitehouse
            </i>
          </p>
          <p style={{ fontSize: "14px" }}>
            <i>
              The instructor, Max, is very enthusiastic and engaging. He does a
              great job of explaining what he's doing and why rather than having
              students just mimic his coding. Max was also very responsive to
              questions. I would recommend this course and any others that he
              offers. Thanks, Max!
            </i>
          </p>
          <p style={{ fontSize: "14px" }}>
            <i>
              As a person new to both JavaScript and Angular 2 I found this
              course extremely helpful because Max does a great job of
              explaining all the important concepts behind the code. Max has a
              great teaching ability to focus on what his audience needs to
              understand.
            </i>
          </p>
          <h6 className="fw-bold">The Course uses TypeScript</h6>
          <p style={{ fontSize: "14px" }}>
            TypeScript is the main language used by the official Angular team
            and the language you'll mostly see in Angular tutorials. It's a
            superset to JavaScript and makes writing Angular apps really easy.
            Using it ensures, that you will have the best possible preparation
            for creating Angular apps. Check out the free videos for more
            information.
          </p>
          <p style={{ fontSize: "14px" }}>
            TypeScript knowledge is, however, not required - basic JavaScript
            knowledge is enough.
          </p>
          <h6 className="fw-bold">Why Angular</h6>
          <p style={{ fontSize: "14px" }}>
            Angular is the next big deal. Being the successor of the
            overwhelmingly successful Angular.js framework it’s bound to shape
            the future of frontend development in a similar way. The powerful
            features and capabilities of Angular allow you to create complex,
            customizable, modern, responsive and user friendly web applications.
          </p>
          <p style={{ fontSize: "14px" }}>
            Angular is faster than Angular 1 and offers a much more flexible and
            modular development approach. After taking this course you’ll be
            able to fully take advantage of all those features and start
            developing awesome applications immediately.
          </p>
          <p style={{ fontSize: "14px" }}>
            Due to the drastic differences between Angular 1 and Angular (=
            Angular 2+) you don’t need to know anything about Angular.js to be
            able to benefit from this course and build your futures projects
            with Angular.
          </p>
          <h6 className="fw-bold">
            Get a very deep understanding of how to create Angular applications
          </h6>
          <p style={{ fontSize: "14px" }}>
            This course will teach you all the fundamentals about modules,
            directives, components, databinding, routing, HTTP access and much
            more! We will take a lot of deep dives and each section is backed up
            with a real project. All examples showcase the features Angular
            offers and how to apply them correctly.
          </p>
          <h6 className="fw-bold">Pay once, benefit a lifetime!</h6>
          <p style={{ fontSize: "14px" }}>
            Don’t lose any time, gain an edge and start developing now!
          </p>
        </div>

        <div className="mt-4">
          <h3 className="mb-3 fw-bolder">Who this course is for</h3>
          <ul>
            <li>
              <span className="ms-2" style={{ fontSize: "14px" }}>
                Newcomer as well as experienced frontend developers interested
                in learning a modern JavaScript framework
              </span>
            </li>
            <li>
              <span className="ms-2" style={{ fontSize: "14px" }}>
                This course is for everyone interested in learning a
                state-of-the-art frontend JavaScript framework
              </span>
            </li>
            <li>
              <span className="ms-2" style={{ fontSize: "14px" }}>
                Taking this course will enable you to be amongst the first to
                gain a very solid understanding of Angular
              </span>
            </li>
          </ul>
        </div>
      </div>
      {expanded ? (
        <button className="btn border-0 p-0 fw-bolder" onClick={showLessFn} style={{color: "blueviolet"}}>
          show less <MdOutlineKeyboardArrowUp fontSize={18} className="mb-1" />
        </button>
      ) : (
        <button className="btn border-0 p-0 fw-bolder" onClick={showMoreFn} style={{color: "blueviolet"}}>
          show more <MdOutlineKeyboardArrowDown fontSize={18} className="mb-1" />
        </button>
      )}
    </>
  );
};

export default Section5;
