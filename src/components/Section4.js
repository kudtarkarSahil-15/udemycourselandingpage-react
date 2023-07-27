import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import CustomAccordion from "./CustomAccordion";

const Section4 = () => {
  // const [open, setOpen] = useState("1")
  // const toggle = (id) => {
  //     if(open === id) {
  //         setOpen()
  //     }
  //     else {
  //         setOpen(id)
  //     }
  // }

  const [expanded, setExpanded] = useState(false);

  const loadSectionsFn = () => {
    setExpanded(true);
  };

  // Array of accordion data
  const accordionData = [
    {
      title: "Getting Started",
      content: [
        {
          content1: "Course Introduction",
          preview: "Preview",
          duration: "00:57",
          desc: "Welcome to this course! Let me introduce myself and explain what the course is about!",
        },
        {
          content2: "What is Angular?",
          preview: "Preview",
          duration: "01:59",
          desc: "First things first! What is Angular? Why would you want to learn it? This lecture helps answering this question.",
        },
        {
          content2: "Join our Online Learning Community",
          preview: "",
          duration: "00:25",
          desc: "Learning alone is absolutely fine but finding learning partners might be a nice thing, too. Our learning community is a great place to learn and grow together - of course it's 100% free and optional!",
        },
        {
          content2: "Angular vs Angular 2 vs Lastest Angular Version",
          preview: "Preview",
          duration: "02:55",
          desc: "So many Angular versions! What's up with them and which version does this course cover?",
        },
        {
          content2: "CLI Deep Dive and Troubleshooting",
          preview: "",
          duration: "01:13",
          desc: "Got issues using the CLI, setting up a project or simply want to learn more about it? Check out this lecture.",
        },
        {
          content2: "Project Setup and FirstApp",
          preview: "Preview",
          duration: "08:48",
          desc: "Enough of the talking, let's create our first Angular project and view our first app in the browser.",
        },
        {
          content2: "Editing the First App",
          preview: "Preview",
          duration: "10:05",
          desc: "Let's edit our first app!",
        },
        {
          content2: "The Course Structure",
          preview: "Preview",
          duration: "4:00",
          desc: "How is this course structured? This lecture answers the question and explains what you're going to learn!",
        },
        {
          content2: "How to get the Most out of the Course",
          preview: "Preview",
          duration: "02:25",
          desc: "Of course you can simply go through all the lectures, but to get the most out of the course, you should consider the advises given in this lecture.",
        },
        {
          content2: "What is Typescript?",
          preview: "Preview",
          duration: "02:09",
          desc: "Angular uses Typescript. What does that mean for you?",
        },
        {
          content2: "A basic Project Setup using Bootstrap for Styling",
          preview: "Preview",
          duration: "04:27",
          desc: "A lot of sections of this course will start with a basic setup - this lecture explains how that basic setup is created with the CLI.",
        },
        {
          content2: "About the Course Code / code Snapshots",
          preview: "",
          duration: "01:06",
          desc: "Do you get some strange error? Are you stuck? Have a look at the source code of this course.",
        },
      ],
      timeline: "13 lectures •41min",
    },
    {
      title: "The Basics",
      content: [
        {
          content1: "Course Introduction",
          preview: "Preview",
          duration: "00:57",
          desc: "Welcome to this course! Let me introduce myself and explain what the course is about!",
        },
        {
          content2: "What is Angular?",
          preview: "Preview",
          duration: "01:59",
          desc: "First things first! What is Angular? Why would you want to learn it? This lecture helps answering this question.",
        },
        {
          content2: "Join our Online Learning Community",
          preview: "",
          duration: "00:25",
          desc: "Learning alone is absolutely fine but finding learning partners might be a nice thing, too. Our learning community is a great place to learn and grow together - of course it's 100% free and optional!",
        },
        {
          content2: "Angular vs Angular 2 vs Lastest Angular Version",
          preview: "Preview",
          duration: "02:55",
          desc: "So many Angular versions! What's up with them and which version does this course cover?",
        },
        {
          content2: "CLI Deep Dive and Troubleshooting",
          preview: "",
          duration: "01:13",
          desc: "Got issues using the CLI, setting up a project or simply want to learn more about it? Check out this lecture.",
        },
        {
          content2: "Project Setup and FirstApp",
          preview: "Preview",
          duration: "08:48",
          desc: "Enough of the talking, let's create our first Angular project and view our first app in the browser.",
        },
        {
          content2: "Editing the First App",
          preview: "Preview",
          duration: "10:05",
          desc: "Let's edit our first app!",
        },
        {
          content2: "The Course Structure",
          preview: "Preview",
          duration: "4:00",
          desc: "How is this course structured? This lecture answers the question and explains what you're going to learn!",
        },
        {
          content2: "How to get the Most out of the Course",
          preview: "Preview",
          duration: "02:25",
          desc: "Of course you can simply go through all the lectures, but to get the most out of the course, you should consider the advises given in this lecture.",
        },
        {
          content2: "What is Typescript?",
          preview: "Preview",
          duration: "02:09",
          desc: "Angular uses Typescript. What does that mean for you?",
        },
        {
          content2: "A basic Project Setup using Bootstrap for Styling",
          preview: "Preview",
          duration: "04:27",
          desc: "A lot of sections of this course will start with a basic setup - this lecture explains how that basic setup is created with the CLI.",
        },
        {
          content2: "About the Course Code / code Snapshots",
          preview: "",
          duration: "01:06",
          desc: "Do you get some strange error? Are you stuck? Have a look at the source code of this course.",
        },
      ],
      timeline: "30 lectures •1hr 4min",
    },
    {
      title: "Course Project - The Basics",
      content: [
        {
          content1: "Course Introduction",
          preview: "Preview",
          duration: "00:57",
          desc: "Welcome to this course! Let me introduce myself and explain what the course is about!",
        },
        {
          content2: "What is Angular?",
          preview: "Preview",
          duration: "01:59",
          desc: "First things first! What is Angular? Why would you want to learn it? This lecture helps answering this question.",
        },
        {
          content2: "Join our Online Learning Community",
          preview: "",
          duration: "00:25",
          desc: "Learning alone is absolutely fine but finding learning partners might be a nice thing, too. Our learning community is a great place to learn and grow together - of course it's 100% free and optional!",
        },
        {
          content2: "Angular vs Angular 2 vs Lastest Angular Version",
          preview: "Preview",
          duration: "02:55",
          desc: "So many Angular versions! What's up with them and which version does this course cover?",
        },
        {
          content2: "CLI Deep Dive and Troubleshooting",
          preview: "",
          duration: "01:13",
          desc: "Got issues using the CLI, setting up a project or simply want to learn more about it? Check out this lecture.",
        },
        {
          content2: "Project Setup and FirstApp",
          preview: "Preview",
          duration: "08:48",
          desc: "Enough of the talking, let's create our first Angular project and view our first app in the browser.",
        },
        {
          content2: "Editing the First App",
          preview: "Preview",
          duration: "10:05",
          desc: "Let's edit our first app!",
        },
        {
          content2: "The Course Structure",
          preview: "Preview",
          duration: "4:00",
          desc: "How is this course structured? This lecture answers the question and explains what you're going to learn!",
        },
        {
          content2: "How to get the Most out of the Course",
          preview: "Preview",
          duration: "02:25",
          desc: "Of course you can simply go through all the lectures, but to get the most out of the course, you should consider the advises given in this lecture.",
        },
        {
          content2: "What is Typescript?",
          preview: "Preview",
          duration: "02:09",
          desc: "Angular uses Typescript. What does that mean for you?",
        },
        {
          content2: "A basic Project Setup using Bootstrap for Styling",
          preview: "Preview",
          duration: "04:27",
          desc: "A lot of sections of this course will start with a basic setup - this lecture explains how that basic setup is created with the CLI.",
        },
        {
          content2: "About the Course Code / code Snapshots",
          preview: "",
          duration: "01:06",
          desc: "Do you get some strange error? Are you stuck? Have a look at the source code of this course.",
        },
      ],
      timeline: "17 lectures •1hr 4min",
    },
    {
      title: "Debugging",
      content: [
        {
          content1: "Course Introduction",
          preview: "Preview",
          duration: "00:57",
          desc: "Welcome to this course! Let me introduce myself and explain what the course is about!",
        },
        {
          content2: "What is Angular?",
          preview: "Preview",
          duration: "01:59",
          desc: "First things first! What is Angular? Why would you want to learn it? This lecture helps answering this question.",
        },
        {
          content2: "Join our Online Learning Community",
          preview: "",
          duration: "00:25",
          desc: "Learning alone is absolutely fine but finding learning partners might be a nice thing, too. Our learning community is a great place to learn and grow together - of course it's 100% free and optional!",
        },
        {
          content2: "Angular vs Angular 2 vs Lastest Angular Version",
          preview: "Preview",
          duration: "02:55",
          desc: "So many Angular versions! What's up with them and which version does this course cover?",
        },
        {
          content2: "CLI Deep Dive and Troubleshooting",
          preview: "",
          duration: "01:13",
          desc: "Got issues using the CLI, setting up a project or simply want to learn more about it? Check out this lecture.",
        },
        {
          content2: "Project Setup and FirstApp",
          preview: "Preview",
          duration: "08:48",
          desc: "Enough of the talking, let's create our first Angular project and view our first app in the browser.",
        },
        {
          content2: "Editing the First App",
          preview: "Preview",
          duration: "10:05",
          desc: "Let's edit our first app!",
        },
        {
          content2: "The Course Structure",
          preview: "Preview",
          duration: "4:00",
          desc: "How is this course structured? This lecture answers the question and explains what you're going to learn!",
        },
        {
          content2: "How to get the Most out of the Course",
          preview: "Preview",
          duration: "02:25",
          desc: "Of course you can simply go through all the lectures, but to get the most out of the course, you should consider the advises given in this lecture.",
        },
        {
          content2: "What is Typescript?",
          preview: "Preview",
          duration: "02:09",
          desc: "Angular uses Typescript. What does that mean for you?",
        },
        {
          content2: "A basic Project Setup using Bootstrap for Styling",
          preview: "Preview",
          duration: "04:27",
          desc: "A lot of sections of this course will start with a basic setup - this lecture explains how that basic setup is created with the CLI.",
        },
        {
          content2: "About the Course Code / code Snapshots",
          preview: "",
          duration: "01:06",
          desc: "Do you get some strange error? Are you stuck? Have a look at the source code of this course.",
        },
      ],
      timeline: "2 lectures •10min",
    },
    {
      title: "Components and Databinding Deep Dive",
      content: [
        {
          content1: "Course Introduction",
          preview: "Preview",
          duration: "00:57",
          desc: "Welcome to this course! Let me introduce myself and explain what the course is about!",
        },
        {
          content2: "What is Angular?",
          preview: "Preview",
          duration: "01:59",
          desc: "First things first! What is Angular? Why would you want to learn it? This lecture helps answering this question.",
        },
        {
          content2: "Join our Online Learning Community",
          preview: "",
          duration: "00:25",
          desc: "Learning alone is absolutely fine but finding learning partners might be a nice thing, too. Our learning community is a great place to learn and grow together - of course it's 100% free and optional!",
        },
        {
          content2: "Angular vs Angular 2 vs Lastest Angular Version",
          preview: "Preview",
          duration: "02:55",
          desc: "So many Angular versions! What's up with them and which version does this course cover?",
        },
        {
          content2: "CLI Deep Dive and Troubleshooting",
          preview: "",
          duration: "01:13",
          desc: "Got issues using the CLI, setting up a project or simply want to learn more about it? Check out this lecture.",
        },
        {
          content2: "Project Setup and FirstApp",
          preview: "Preview",
          duration: "08:48",
          desc: "Enough of the talking, let's create our first Angular project and view our first app in the browser.",
        },
        {
          content2: "Editing the First App",
          preview: "Preview",
          duration: "10:05",
          desc: "Let's edit our first app!",
        },
        {
          content2: "The Course Structure",
          preview: "Preview",
          duration: "4:00",
          desc: "How is this course structured? This lecture answers the question and explains what you're going to learn!",
        },
        {
          content2: "How to get the Most out of the Course",
          preview: "Preview",
          duration: "02:25",
          desc: "Of course you can simply go through all the lectures, but to get the most out of the course, you should consider the advises given in this lecture.",
        },
        {
          content2: "What is Typescript?",
          preview: "Preview",
          duration: "02:09",
          desc: "Angular uses Typescript. What does that mean for you?",
        },
        {
          content2: "A basic Project Setup using Bootstrap for Styling",
          preview: "Preview",
          duration: "04:27",
          desc: "A lot of sections of this course will start with a basic setup - this lecture explains how that basic setup is created with the CLI.",
        },
        {
          content2: "About the Course Code / code Snapshots",
          preview: "",
          duration: "01:06",
          desc: "Do you get some strange error? Are you stuck? Have a look at the source code of this course.",
        },
      ],
      timeline: "21 lectures •1hr 25min",
    },
    {
      title: "Course Project - components & Databinding",
      content: [
        {
          content1: "Course Introduction",
          preview: "Preview",
          duration: "00:57",
          desc: "Welcome to this course! Let me introduce myself and explain what the course is about!"
        },
        {
          content2: "What is Angular?",
          preview: "Preview",
          duration: "01:59",
          desc: "First things first! What is Angular? Why would you want to learn it? This lecture helps answering this question."
        },
        {
          content2: "Join our Online Learning Community",
          preview: "",
          duration: "00:25",
          desc: "Learning alone is absolutely fine but finding learning partners might be a nice thing, too. Our learning community is a great place to learn and grow together - of course it's 100% free and optional!"
        },
        {
          content2: "Angular vs Angular 2 vs Lastest Angular Version",
          preview: "Preview",
          duration: "02:55",
          desc: "So many Angular versions! What's up with them and which version does this course cover?"
        },
        {
          content2: "CLI Deep Dive and Troubleshooting",
          preview: "",
          duration: "01:13",
          desc: "Got issues using the CLI, setting up a project or simply want to learn more about it? Check out this lecture."
        },
        {
          content2: "Project Setup and FirstApp",
          preview: "Preview",
          duration: "08:48",
          desc: "Enough of the talking, let's create our first Angular project and view our first app in the browser."
        },
        {
          content2: "Editing the First App",
          preview: "Preview",
          duration: "10:05",
          desc: "Let's edit our first app!"
        },
        {
          content2: "The Course Structure",
          preview: "Preview",
          duration: "4:00",
          desc: "How is this course structured? This lecture answers the question and explains what you're going to learn!"
        },
        {
          content2: "How to get the Most out of the Course",
          preview: "Preview",
          duration: "02:25",
          desc: "Of course you can simply go through all the lectures, but to get the most out of the course, you should consider the advises given in this lecture."
        },
        {
          content2: "What is Typescript?",
          preview: "Preview",
          duration: "02:09",
          desc: "Angular uses Typescript. What does that mean for you?"
        },
        {
          content2: "A basic Project Setup using Bootstrap for Styling",
          preview: "Preview",
          duration: "04:27",
          desc: "A lot of sections of this course will start with a basic setup - this lecture explains how that basic setup is created with the CLI."
        },
        {
          content2: "About the Course Code / code Snapshots",
          preview: "",
          duration: "01:06",
          desc: "Do you get some strange error? Are you stuck? Have a look at the source code of this course."
        },
        
      ],
      timeline: "6 lectures •31min",
    },
    {
      title: "Directives Deep Dive",
      content: [
        {
          content1: "Course Introduction",
          preview: "Preview",
          duration: "00:57",
          desc: "Welcome to this course! Let me introduce myself and explain what the course is about!",
        },
        {
          content2: "What is Angular?",
          preview: "Preview",
          duration: "01:59",
          desc: "First things first! What is Angular? Why would you want to learn it? This lecture helps answering this question.",
        },
        {
          content2: "Join our Online Learning Community",
          preview: "",
          duration: "00:25",
          desc: "Learning alone is absolutely fine but finding learning partners might be a nice thing, too. Our learning community is a great place to learn and grow together - of course it's 100% free and optional!",
        },
        {
          content2: "Angular vs Angular 2 vs Lastest Angular Version",
          preview: "Preview",
          duration: "02:55",
          desc: "So many Angular versions! What's up with them and which version does this course cover?",
        },
        {
          content2: "CLI Deep Dive and Troubleshooting",
          preview: "",
          duration: "01:13",
          desc: "Got issues using the CLI, setting up a project or simply want to learn more about it? Check out this lecture.",
        },
        {
          content2: "Project Setup and FirstApp",
          preview: "Preview",
          duration: "08:48",
          desc: "Enough of the talking, let's create our first Angular project and view our first app in the browser.",
        },
        {
          content2: "Editing the First App",
          preview: "Preview",
          duration: "10:05",
          desc: "Let's edit our first app!",
        },
        {
          content2: "The Course Structure",
          preview: "Preview",
          duration: "4:00",
          desc: "How is this course structured? This lecture answers the question and explains what you're going to learn!",
        },
        {
          content2: "How to get the Most out of the Course",
          preview: "Preview",
          duration: "02:25",
          desc: "Of course you can simply go through all the lectures, but to get the most out of the course, you should consider the advises given in this lecture.",
        },
        {
          content2: "What is Typescript?",
          preview: "Preview",
          duration: "02:09",
          desc: "Angular uses Typescript. What does that mean for you?",
        },
        {
          content2: "A basic Project Setup using Bootstrap for Styling",
          preview: "Preview",
          duration: "04:27",
          desc: "A lot of sections of this course will start with a basic setup - this lecture explains how that basic setup is created with the CLI.",
        },
        {
          content2: "About the Course Code / code Snapshots",
          preview: "",
          duration: "01:06",
          desc: "Do you get some strange error? Are you stuck? Have a look at the source code of this course.",
        },
      ],
      timeline: "12 lectures •47min",
    },
    {
      title: "Course Project - Directives",
      content: [
        {
          content1: "Course Introduction",
          preview: "Preview",
          duration: "00:57",
          desc: "Welcome to this course! Let me introduce myself and explain what the course is about!"
        },
        {
          content2: "What is Angular?",
          preview: "Preview",
          duration: "01:59",
          desc: "First things first! What is Angular? Why would you want to learn it? This lecture helps answering this question."
        },
        {
          content2: "Join our Online Learning Community",
          preview: "",
          duration: "00:25",
          desc: "Learning alone is absolutely fine but finding learning partners might be a nice thing, too. Our learning community is a great place to learn and grow together - of course it's 100% free and optional!"
        },
        {
          content2: "Angular vs Angular 2 vs Lastest Angular Version",
          preview: "Preview",
          duration: "02:55",
          desc: "So many Angular versions! What's up with them and which version does this course cover?"
        },
        {
          content2: "CLI Deep Dive and Troubleshooting",
          preview: "",
          duration: "01:13",
          desc: "Got issues using the CLI, setting up a project or simply want to learn more about it? Check out this lecture."
        },
        {
          content2: "Project Setup and FirstApp",
          preview: "Preview",
          duration: "08:48",
          desc: "Enough of the talking, let's create our first Angular project and view our first app in the browser."
        },
        {
          content2: "Editing the First App",
          preview: "Preview",
          duration: "10:05",
          desc: "Let's edit our first app!"
        },
        {
          content2: "The Course Structure",
          preview: "Preview",
          duration: "4:00",
          desc: "How is this course structured? This lecture answers the question and explains what you're going to learn!"
        },
        {
          content2: "How to get the Most out of the Course",
          preview: "Preview",
          duration: "02:25",
          desc: "Of course you can simply go through all the lectures, but to get the most out of the course, you should consider the advises given in this lecture."
        },
        {
          content2: "What is Typescript?",
          preview: "Preview",
          duration: "02:09",
          desc: "Angular uses Typescript. What does that mean for you?"
        },
        {
          content2: "A basic Project Setup using Bootstrap for Styling",
          preview: "Preview",
          duration: "04:27",
          desc: "A lot of sections of this course will start with a basic setup - this lecture explains how that basic setup is created with the CLI."
        },
        {
          content2: "About the Course Code / code Snapshots",
          preview: "",
          duration: "01:06",
          desc: "Do you get some strange error? Are you stuck? Have a look at the source code of this course."
        },
        
      ],
      timeline: "2 lectures •7min",
    },
    {
      title: "Using Service and Dependency Injection",
      content: [
        {
          content1: "Course Introduction",
          preview: "Preview",
          duration: "00:57",
          desc: "Welcome to this course! Let me introduce myself and explain what the course is about!",
        },
        {
          content2: "What is Angular?",
          preview: "Preview",
          duration: "01:59",
          desc: "First things first! What is Angular? Why would you want to learn it? This lecture helps answering this question.",
        },
        {
          content2: "Join our Online Learning Community",
          preview: "",
          duration: "00:25",
          desc: "Learning alone is absolutely fine but finding learning partners might be a nice thing, too. Our learning community is a great place to learn and grow together - of course it's 100% free and optional!",
        },
        {
          content2: "Angular vs Angular 2 vs Lastest Angular Version",
          preview: "Preview",
          duration: "02:55",
          desc: "So many Angular versions! What's up with them and which version does this course cover?",
        },
        {
          content2: "CLI Deep Dive and Troubleshooting",
          preview: "",
          duration: "01:13",
          desc: "Got issues using the CLI, setting up a project or simply want to learn more about it? Check out this lecture.",
        },
        {
          content2: "Project Setup and FirstApp",
          preview: "Preview",
          duration: "08:48",
          desc: "Enough of the talking, let's create our first Angular project and view our first app in the browser.",
        },
        {
          content2: "Editing the First App",
          preview: "Preview",
          duration: "10:05",
          desc: "Let's edit our first app!",
        },
        {
          content2: "The Course Structure",
          preview: "Preview",
          duration: "4:00",
          desc: "How is this course structured? This lecture answers the question and explains what you're going to learn!",
        },
        {
          content2: "How to get the Most out of the Course",
          preview: "Preview",
          duration: "02:25",
          desc: "Of course you can simply go through all the lectures, but to get the most out of the course, you should consider the advises given in this lecture.",
        },
        {
          content2: "What is Typescript?",
          preview: "Preview",
          duration: "02:09",
          desc: "Angular uses Typescript. What does that mean for you?",
        },
        {
          content2: "A basic Project Setup using Bootstrap for Styling",
          preview: "Preview",
          duration: "04:27",
          desc: "A lot of sections of this course will start with a basic setup - this lecture explains how that basic setup is created with the CLI.",
        },
        {
          content2: "About the Course Code / code Snapshots",
          preview: "",
          duration: "01:06",
          desc: "Do you get some strange error? Are you stuck? Have a look at the source code of this course.",
        },
      ],
      timeline: "12 lectures •45min",
    },
    {
      title: "Course Project - Service and Dependency Injection",
      content: [
        {
          content1: "Course Introduction",
          preview: "Preview",
          duration: "00:57",
          desc: "Welcome to this course! Let me introduce myself and explain what the course is about!",
        },
        {
          content2: "What is Angular?",
          preview: "Preview",
          duration: "01:59",
          desc: "First things first! What is Angular? Why would you want to learn it? This lecture helps answering this question.",
        },
        {
          content2: "Join our Online Learning Community",
          preview: "",
          duration: "00:25",
          desc: "Learning alone is absolutely fine but finding learning partners might be a nice thing, too. Our learning community is a great place to learn and grow together - of course it's 100% free and optional!",
        },
        {
          content2: "Angular vs Angular 2 vs Lastest Angular Version",
          preview: "Preview",
          duration: "02:55",
          desc: "So many Angular versions! What's up with them and which version does this course cover?",
        },
        {
          content2: "CLI Deep Dive and Troubleshooting",
          preview: "",
          duration: "01:13",
          desc: "Got issues using the CLI, setting up a project or simply want to learn more about it? Check out this lecture.",
        },
        {
          content2: "Project Setup and FirstApp",
          preview: "Preview",
          duration: "08:48",
          desc: "Enough of the talking, let's create our first Angular project and view our first app in the browser.",
        },
        {
          content2: "Editing the First App",
          preview: "Preview",
          duration: "10:05",
          desc: "Let's edit our first app!",
        },
        {
          content2: "The Course Structure",
          preview: "Preview",
          duration: "4:00",
          desc: "How is this course structured? This lecture answers the question and explains what you're going to learn!",
        },
        {
          content2: "How to get the Most out of the Course",
          preview: "Preview",
          duration: "02:25",
          desc: "Of course you can simply go through all the lectures, but to get the most out of the course, you should consider the advises given in this lecture.",
        },
        {
          content2: "What is Typescript?",
          preview: "Preview",
          duration: "02:09",
          desc: "Angular uses Typescript. What does that mean for you?",
        },
        {
          content2: "A basic Project Setup using Bootstrap for Styling",
          preview: "Preview",
          duration: "04:27",
          desc: "A lot of sections of this course will start with a basic setup - this lecture explains how that basic setup is created with the CLI.",
        },
        {
          content2: "About the Course Code / code Snapshots",
          preview: "",
          duration: "01:06",
          desc: "Do you get some strange error? Are you stuck? Have a look at the source code of this course.",
        },
      ],
      timeline: "8 lectures •31 min",
    },
    {
      title: "Changing Pages and Routing",
      content: [
        {
          content1: "Course Introduction",
          preview: "Preview",
          duration: "00:57",
          desc: "Welcome to this course! Let me introduce myself and explain what the course is about!",
        },
        {
          content2: "What is Angular?",
          preview: "Preview",
          duration: "01:59",
          desc: "First things first! What is Angular? Why would you want to learn it? This lecture helps answering this question.",
        },
        {
          content2: "Join our Online Learning Community",
          preview: "",
          duration: "00:25",
          desc: "Learning alone is absolutely fine but finding learning partners might be a nice thing, too. Our learning community is a great place to learn and grow together - of course it's 100% free and optional!",
        },
        {
          content2: "Angular vs Angular 2 vs Lastest Angular Version",
          preview: "Preview",
          duration: "02:55",
          desc: "So many Angular versions! What's up with them and which version does this course cover?",
        },
        {
          content2: "CLI Deep Dive and Troubleshooting",
          preview: "",
          duration: "01:13",
          desc: "Got issues using the CLI, setting up a project or simply want to learn more about it? Check out this lecture.",
        },
        {
          content2: "Project Setup and FirstApp",
          preview: "Preview",
          duration: "08:48",
          desc: "Enough of the talking, let's create our first Angular project and view our first app in the browser.",
        },
        {
          content2: "Editing the First App",
          preview: "Preview",
          duration: "10:05",
          desc: "Let's edit our first app!",
        },
        {
          content2: "The Course Structure",
          preview: "Preview",
          duration: "4:00",
          desc: "How is this course structured? This lecture answers the question and explains what you're going to learn!",
        },
        {
          content2: "How to get the Most out of the Course",
          preview: "Preview",
          duration: "02:25",
          desc: "Of course you can simply go through all the lectures, but to get the most out of the course, you should consider the advises given in this lecture.",
        },
        {
          content2: "What is Typescript?",
          preview: "Preview",
          duration: "02:09",
          desc: "Angular uses Typescript. What does that mean for you?",
        },
        {
          content2: "A basic Project Setup using Bootstrap for Styling",
          preview: "Preview",
          duration: "04:27",
          desc: "A lot of sections of this course will start with a basic setup - this lecture explains how that basic setup is created with the CLI.",
        },
        {
          content2: "About the Course Code / code Snapshots",
          preview: "",
          duration: "01:06",
          desc: "Do you get some strange error? Are you stuck? Have a look at the source code of this course.",
        },
      ],
      timeline: "31 lectures •2hr 18min",
    },
    {
      title: "Course Project - Routing",
      content: [
        {
          content1: "Course Introduction",
          preview: "Preview",
          duration: "00:57",
          desc: "Welcome to this course! Let me introduce myself and explain what the course is about!",
        },
        {
          content2: "What is Angular?",
          preview: "Preview",
          duration: "01:59",
          desc: "First things first! What is Angular? Why would you want to learn it? This lecture helps answering this question.",
        },
        {
          content2: "Join our Online Learning Community",
          preview: "",
          duration: "00:25",
          desc: "Learning alone is absolutely fine but finding learning partners might be a nice thing, too. Our learning community is a great place to learn and grow together - of course it's 100% free and optional!",
        },
        {
          content2: "Angular vs Angular 2 vs Lastest Angular Version",
          preview: "Preview",
          duration: "02:55",
          desc: "So many Angular versions! What's up with them and which version does this course cover?",
        },
        {
          content2: "CLI Deep Dive and Troubleshooting",
          preview: "",
          duration: "01:13",
          desc: "Got issues using the CLI, setting up a project or simply want to learn more about it? Check out this lecture.",
        },
        {
          content2: "Project Setup and FirstApp",
          preview: "Preview",
          duration: "08:48",
          desc: "Enough of the talking, let's create our first Angular project and view our first app in the browser.",
        },
        {
          content2: "Editing the First App",
          preview: "Preview",
          duration: "10:05",
          desc: "Let's edit our first app!",
        },
        {
          content2: "The Course Structure",
          preview: "Preview",
          duration: "4:00",
          desc: "How is this course structured? This lecture answers the question and explains what you're going to learn!",
        },
        {
          content2: "How to get the Most out of the Course",
          preview: "Preview",
          duration: "02:25",
          desc: "Of course you can simply go through all the lectures, but to get the most out of the course, you should consider the advises given in this lecture.",
        },
        {
          content2: "What is Typescript?",
          preview: "Preview",
          duration: "02:09",
          desc: "Angular uses Typescript. What does that mean for you?",
        },
        {
          content2: "A basic Project Setup using Bootstrap for Styling",
          preview: "Preview",
          duration: "04:27",
          desc: "A lot of sections of this course will start with a basic setup - this lecture explains how that basic setup is created with the CLI.",
        },
        {
          content2: "About the Course Code / code Snapshots",
          preview: "",
          duration: "01:06",
          desc: "Do you get some strange error? Are you stuck? Have a look at the source code of this course.",
        },
      ],
      timeline: "15 lectures •46 min",
    },
    {
      title: "Understaing Observables",
      content: [
        {
          content1: "Course Introduction",
          preview: "Preview",
          duration: "00:57",
          desc: "Welcome to this course! Let me introduce myself and explain what the course is about!",
        },
        {
          content2: "What is Angular?",
          preview: "Preview",
          duration: "01:59",
          desc: "First things first! What is Angular? Why would you want to learn it? This lecture helps answering this question.",
        },
        {
          content2: "Join our Online Learning Community",
          preview: "",
          duration: "00:25",
          desc: "Learning alone is absolutely fine but finding learning partners might be a nice thing, too. Our learning community is a great place to learn and grow together - of course it's 100% free and optional!",
        },
        {
          content2: "Angular vs Angular 2 vs Lastest Angular Version",
          preview: "Preview",
          duration: "02:55",
          desc: "So many Angular versions! What's up with them and which version does this course cover?",
        },
        {
          content2: "CLI Deep Dive and Troubleshooting",
          preview: "",
          duration: "01:13",
          desc: "Got issues using the CLI, setting up a project or simply want to learn more about it? Check out this lecture.",
        },
        {
          content2: "Project Setup and FirstApp",
          preview: "Preview",
          duration: "08:48",
          desc: "Enough of the talking, let's create our first Angular project and view our first app in the browser.",
        },
        {
          content2: "Editing the First App",
          preview: "Preview",
          duration: "10:05",
          desc: "Let's edit our first app!",
        },
        {
          content2: "The Course Structure",
          preview: "Preview",
          duration: "4:00",
          desc: "How is this course structured? This lecture answers the question and explains what you're going to learn!",
        },
        {
          content2: "How to get the Most out of the Course",
          preview: "Preview",
          duration: "02:25",
          desc: "Of course you can simply go through all the lectures, but to get the most out of the course, you should consider the advises given in this lecture.",
        },
        {
          content2: "What is Typescript?",
          preview: "Preview",
          duration: "02:09",
          desc: "Angular uses Typescript. What does that mean for you?",
        },
        {
          content2: "A basic Project Setup using Bootstrap for Styling",
          preview: "Preview",
          duration: "04:27",
          desc: "A lot of sections of this course will start with a basic setup - this lecture explains how that basic setup is created with the CLI.",
        },
        {
          content2: "About the Course Code / code Snapshots",
          preview: "",
          duration: "01:06",
          desc: "Do you get some strange error? Are you stuck? Have a look at the source code of this course.",
        },
      ],
      timeline: "11 lectures •45 min",
    },
    {
      title: "Course Project - Observables",
      content: [
        {
          content1: "Course Introduction",
          preview: "Preview",
          duration: "00:57",
          desc: "Welcome to this course! Let me introduce myself and explain what the course is about!",
        },
        {
          content2: "What is Angular?",
          preview: "Preview",
          duration: "01:59",
          desc: "First things first! What is Angular? Why would you want to learn it? This lecture helps answering this question.",
        },
        {
          content2: "Join our Online Learning Community",
          preview: "",
          duration: "00:25",
          desc: "Learning alone is absolutely fine but finding learning partners might be a nice thing, too. Our learning community is a great place to learn and grow together - of course it's 100% free and optional!",
        },
        {
          content2: "Angular vs Angular 2 vs Lastest Angular Version",
          preview: "Preview",
          duration: "02:55",
          desc: "So many Angular versions! What's up with them and which version does this course cover?",
        },
        {
          content2: "CLI Deep Dive and Troubleshooting",
          preview: "",
          duration: "01:13",
          desc: "Got issues using the CLI, setting up a project or simply want to learn more about it? Check out this lecture.",
        },
        {
          content2: "Project Setup and FirstApp",
          preview: "Preview",
          duration: "08:48",
          desc: "Enough of the talking, let's create our first Angular project and view our first app in the browser.",
        },
        {
          content2: "Editing the First App",
          preview: "Preview",
          duration: "10:05",
          desc: "Let's edit our first app!",
        },
        {
          content2: "The Course Structure",
          preview: "Preview",
          duration: "4:00",
          desc: "How is this course structured? This lecture answers the question and explains what you're going to learn!",
        },
        {
          content2: "How to get the Most out of the Course",
          preview: "Preview",
          duration: "02:25",
          desc: "Of course you can simply go through all the lectures, but to get the most out of the course, you should consider the advises given in this lecture.",
        },
        {
          content2: "What is Typescript?",
          preview: "Preview",
          duration: "02:09",
          desc: "Angular uses Typescript. What does that mean for you?",
        },
        {
          content2: "A basic Project Setup using Bootstrap for Styling",
          preview: "Preview",
          duration: "04:27",
          desc: "A lot of sections of this course will start with a basic setup - this lecture explains how that basic setup is created with the CLI.",
        },
        {
          content2: "About the Course Code / code Snapshots",
          preview: "",
          duration: "01:06",
          desc: "Do you get some strange error? Are you stuck? Have a look at the source code of this course.",
        },
      ],
      timeline: "2 lectures •6 min",
    },
    {
      title: "Handling Forms in Angular Apps",
      content: [
        {
          content1: "Course Introduction",
          preview: "Preview",
          duration: "00:57",
          desc: "Welcome to this course! Let me introduce myself and explain what the course is about!",
        },
        {
          content2: "What is Angular?",
          preview: "Preview",
          duration: "01:59",
          desc: "First things first! What is Angular? Why would you want to learn it? This lecture helps answering this question.",
        },
        {
          content2: "Join our Online Learning Community",
          preview: "",
          duration: "00:25",
          desc: "Learning alone is absolutely fine but finding learning partners might be a nice thing, too. Our learning community is a great place to learn and grow together - of course it's 100% free and optional!",
        },
        {
          content2: "Angular vs Angular 2 vs Lastest Angular Version",
          preview: "Preview",
          duration: "02:55",
          desc: "So many Angular versions! What's up with them and which version does this course cover?",
        },
        {
          content2: "CLI Deep Dive and Troubleshooting",
          preview: "",
          duration: "01:13",
          desc: "Got issues using the CLI, setting up a project or simply want to learn more about it? Check out this lecture.",
        },
        {
          content2: "Project Setup and FirstApp",
          preview: "Preview",
          duration: "08:48",
          desc: "Enough of the talking, let's create our first Angular project and view our first app in the browser.",
        },
        {
          content2: "Editing the First App",
          preview: "Preview",
          duration: "10:05",
          desc: "Let's edit our first app!",
        },
        {
          content2: "The Course Structure",
          preview: "Preview",
          duration: "4:00",
          desc: "How is this course structured? This lecture answers the question and explains what you're going to learn!",
        },
        {
          content2: "How to get the Most out of the Course",
          preview: "Preview",
          duration: "02:25",
          desc: "Of course you can simply go through all the lectures, but to get the most out of the course, you should consider the advises given in this lecture.",
        },
        {
          content2: "What is Typescript?",
          preview: "Preview",
          duration: "02:09",
          desc: "Angular uses Typescript. What does that mean for you?",
        },
        {
          content2: "A basic Project Setup using Bootstrap for Styling",
          preview: "Preview",
          duration: "04:27",
          desc: "A lot of sections of this course will start with a basic setup - this lecture explains how that basic setup is created with the CLI.",
        },
        {
          content2: "About the Course Code / code Snapshots",
          preview: "",
          duration: "01:06",
          desc: "Do you get some strange error? Are you stuck? Have a look at the source code of this course.",
        },
      ],
      timeline: "35 lectures •2hr 3min",
    },
    {
      title: "Course Project - Forms",
      content: [
        {
          content1: "Course Introduction",
          preview: "Preview",
          duration: "00:57",
          desc: "Welcome to this course! Let me introduce myself and explain what the course is about!",
        },
        {
          content2: "What is Angular?",
          preview: "Preview",
          duration: "01:59",
          desc: "First things first! What is Angular? Why would you want to learn it? This lecture helps answering this question.",
        },
        {
          content2: "Join our Online Learning Community",
          preview: "",
          duration: "00:25",
          desc: "Learning alone is absolutely fine but finding learning partners might be a nice thing, too. Our learning community is a great place to learn and grow together - of course it's 100% free and optional!",
        },
        {
          content2: "Angular vs Angular 2 vs Lastest Angular Version",
          preview: "Preview",
          duration: "02:55",
          desc: "So many Angular versions! What's up with them and which version does this course cover?",
        },
        {
          content2: "CLI Deep Dive and Troubleshooting",
          preview: "",
          duration: "01:13",
          desc: "Got issues using the CLI, setting up a project or simply want to learn more about it? Check out this lecture.",
        },
        {
          content2: "Project Setup and FirstApp",
          preview: "Preview",
          duration: "08:48",
          desc: "Enough of the talking, let's create our first Angular project and view our first app in the browser.",
        },
        {
          content2: "Editing the First App",
          preview: "Preview",
          duration: "10:05",
          desc: "Let's edit our first app!",
        },
        {
          content2: "The Course Structure",
          preview: "Preview",
          duration: "4:00",
          desc: "How is this course structured? This lecture answers the question and explains what you're going to learn!",
        },
        {
          content2: "How to get the Most out of the Course",
          preview: "Preview",
          duration: "02:25",
          desc: "Of course you can simply go through all the lectures, but to get the most out of the course, you should consider the advises given in this lecture.",
        },
        {
          content2: "What is Typescript?",
          preview: "Preview",
          duration: "02:09",
          desc: "Angular uses Typescript. What does that mean for you?",
        },
        {
          content2: "A basic Project Setup using Bootstrap for Styling",
          preview: "Preview",
          duration: "04:27",
          desc: "A lot of sections of this course will start with a basic setup - this lecture explains how that basic setup is created with the CLI.",
        },
        {
          content2: "About the Course Code / code Snapshots",
          preview: "",
          duration: "01:06",
          desc: "Do you get some strange error? Are you stuck? Have a look at the source code of this course.",
        },
      ],
      timeline: "23 lectures •1hr 15 min",
    },
    {
      title: "Using Pipes to Transform Output",
      content: [
        {
          content1: "Course Introduction",
          preview: "Preview",
          duration: "00:57",
          desc: "Welcome to this course! Let me introduce myself and explain what the course is about!",
        },
        {
          content2: "What is Angular?",
          preview: "Preview",
          duration: "01:59",
          desc: "First things first! What is Angular? Why would you want to learn it? This lecture helps answering this question.",
        },
        {
          content2: "Join our Online Learning Community",
          preview: "",
          duration: "00:25",
          desc: "Learning alone is absolutely fine but finding learning partners might be a nice thing, too. Our learning community is a great place to learn and grow together - of course it's 100% free and optional!",
        },
        {
          content2: "Angular vs Angular 2 vs Lastest Angular Version",
          preview: "Preview",
          duration: "02:55",
          desc: "So many Angular versions! What's up with them and which version does this course cover?",
        },
        {
          content2: "CLI Deep Dive and Troubleshooting",
          preview: "",
          duration: "01:13",
          desc: "Got issues using the CLI, setting up a project or simply want to learn more about it? Check out this lecture.",
        },
        {
          content2: "Project Setup and FirstApp",
          preview: "Preview",
          duration: "08:48",
          desc: "Enough of the talking, let's create our first Angular project and view our first app in the browser.",
        },
        {
          content2: "Editing the First App",
          preview: "Preview",
          duration: "10:05",
          desc: "Let's edit our first app!",
        },
        {
          content2: "The Course Structure",
          preview: "Preview",
          duration: "4:00",
          desc: "How is this course structured? This lecture answers the question and explains what you're going to learn!",
        },
        {
          content2: "How to get the Most out of the Course",
          preview: "Preview",
          duration: "02:25",
          desc: "Of course you can simply go through all the lectures, but to get the most out of the course, you should consider the advises given in this lecture.",
        },
        {
          content2: "What is Typescript?",
          preview: "Preview",
          duration: "02:09",
          desc: "Angular uses Typescript. What does that mean for you?",
        },
        {
          content2: "A basic Project Setup using Bootstrap for Styling",
          preview: "Preview",
          duration: "04:27",
          desc: "A lot of sections of this course will start with a basic setup - this lecture explains how that basic setup is created with the CLI.",
        },
        {
          content2: "About the Course Code / code Snapshots",
          preview: "",
          duration: "01:06",
          desc: "Do you get some strange error? Are you stuck? Have a look at the source code of this course.",
        },
      ],
      timeline: "10 lectures •37 min",
    },
    {
      title: "Making Http Requests",
      content: [
        {
          content1: "Course Introduction",
          preview: "Preview",
          duration: "00:57",
          desc: "Welcome to this course! Let me introduce myself and explain what the course is about!",
        },
        {
          content2: "What is Angular?",
          preview: "Preview",
          duration: "01:59",
          desc: "First things first! What is Angular? Why would you want to learn it? This lecture helps answering this question.",
        },
        {
          content2: "Join our Online Learning Community",
          preview: "",
          duration: "00:25",
          desc: "Learning alone is absolutely fine but finding learning partners might be a nice thing, too. Our learning community is a great place to learn and grow together - of course it's 100% free and optional!",
        },
        {
          content2: "Angular vs Angular 2 vs Lastest Angular Version",
          preview: "Preview",
          duration: "02:55",
          desc: "So many Angular versions! What's up with them and which version does this course cover?",
        },
        {
          content2: "CLI Deep Dive and Troubleshooting",
          preview: "",
          duration: "01:13",
          desc: "Got issues using the CLI, setting up a project or simply want to learn more about it? Check out this lecture.",
        },
        {
          content2: "Project Setup and FirstApp",
          preview: "Preview",
          duration: "08:48",
          desc: "Enough of the talking, let's create our first Angular project and view our first app in the browser.",
        },
        {
          content2: "Editing the First App",
          preview: "Preview",
          duration: "10:05",
          desc: "Let's edit our first app!",
        },
        {
          content2: "The Course Structure",
          preview: "Preview",
          duration: "4:00",
          desc: "How is this course structured? This lecture answers the question and explains what you're going to learn!",
        },
        {
          content2: "How to get the Most out of the Course",
          preview: "Preview",
          duration: "02:25",
          desc: "Of course you can simply go through all the lectures, but to get the most out of the course, you should consider the advises given in this lecture.",
        },
        {
          content2: "What is Typescript?",
          preview: "Preview",
          duration: "02:09",
          desc: "Angular uses Typescript. What does that mean for you?",
        },
        {
          content2: "A basic Project Setup using Bootstrap for Styling",
          preview: "Preview",
          duration: "04:27",
          desc: "A lot of sections of this course will start with a basic setup - this lecture explains how that basic setup is created with the CLI.",
        },
        {
          content2: "About the Course Code / code Snapshots",
          preview: "",
          duration: "01:06",
          desc: "Do you get some strange error? Are you stuck? Have a look at the source code of this course.",
        },
      ],
      timeline: "28 lectures •1hr 41min",
    },
    {
      title: "Course Project - Http",
      content: [
        {
          content1: "Course Introduction",
          preview: "Preview",
          duration: "00:57",
          desc: "Welcome to this course! Let me introduce myself and explain what the course is about!",
        },
        {
          content2: "What is Angular?",
          preview: "Preview",
          duration: "01:59",
          desc: "First things first! What is Angular? Why would you want to learn it? This lecture helps answering this question.",
        },
        {
          content2: "Join our Online Learning Community",
          preview: "",
          duration: "00:25",
          desc: "Learning alone is absolutely fine but finding learning partners might be a nice thing, too. Our learning community is a great place to learn and grow together - of course it's 100% free and optional!",
        },
        {
          content2: "Angular vs Angular 2 vs Lastest Angular Version",
          preview: "Preview",
          duration: "02:55",
          desc: "So many Angular versions! What's up with them and which version does this course cover?",
        },
        {
          content2: "CLI Deep Dive and Troubleshooting",
          preview: "",
          duration: "01:13",
          desc: "Got issues using the CLI, setting up a project or simply want to learn more about it? Check out this lecture.",
        },
        {
          content2: "Project Setup and FirstApp",
          preview: "Preview",
          duration: "08:48",
          desc: "Enough of the talking, let's create our first Angular project and view our first app in the browser.",
        },
        {
          content2: "Editing the First App",
          preview: "Preview",
          duration: "10:05",
          desc: "Let's edit our first app!",
        },
        {
          content2: "The Course Structure",
          preview: "Preview",
          duration: "4:00",
          desc: "How is this course structured? This lecture answers the question and explains what you're going to learn!",
        },
        {
          content2: "How to get the Most out of the Course",
          preview: "Preview",
          duration: "02:25",
          desc: "Of course you can simply go through all the lectures, but to get the most out of the course, you should consider the advises given in this lecture.",
        },
        {
          content2: "What is Typescript?",
          preview: "Preview",
          duration: "02:09",
          desc: "Angular uses Typescript. What does that mean for you?",
        },
        {
          content2: "A basic Project Setup using Bootstrap for Styling",
          preview: "Preview",
          duration: "04:27",
          desc: "A lot of sections of this course will start with a basic setup - this lecture explains how that basic setup is created with the CLI.",
        },
        {
          content2: "About the Course Code / code Snapshots",
          preview: "",
          duration: "01:06",
          desc: "Do you get some strange error? Are you stuck? Have a look at the source code of this course.",
        },
      ],
      timeline: "8 lectures •34 min",
    },
    {
      title: "Authentication and Route Protection in Angular",
      content: [
        {
          content1: "Course Introduction",
          preview: "Preview",
          duration: "00:57",
          desc: "Welcome to this course! Let me introduce myself and explain what the course is about!",
        },
        {
          content2: "What is Angular?",
          preview: "Preview",
          duration: "01:59",
          desc: "First things first! What is Angular? Why would you want to learn it? This lecture helps answering this question.",
        },
        {
          content2: "Join our Online Learning Community",
          preview: "",
          duration: "00:25",
          desc: "Learning alone is absolutely fine but finding learning partners might be a nice thing, too. Our learning community is a great place to learn and grow together - of course it's 100% free and optional!",
        },
        {
          content2: "Angular vs Angular 2 vs Lastest Angular Version",
          preview: "Preview",
          duration: "02:55",
          desc: "So many Angular versions! What's up with them and which version does this course cover?",
        },
        {
          content2: "CLI Deep Dive and Troubleshooting",
          preview: "",
          duration: "01:13",
          desc: "Got issues using the CLI, setting up a project or simply want to learn more about it? Check out this lecture.",
        },
        {
          content2: "Project Setup and FirstApp",
          preview: "Preview",
          duration: "08:48",
          desc: "Enough of the talking, let's create our first Angular project and view our first app in the browser.",
        },
        {
          content2: "Editing the First App",
          preview: "Preview",
          duration: "10:05",
          desc: "Let's edit our first app!",
        },
        {
          content2: "The Course Structure",
          preview: "Preview",
          duration: "4:00",
          desc: "How is this course structured? This lecture answers the question and explains what you're going to learn!",
        },
        {
          content2: "How to get the Most out of the Course",
          preview: "Preview",
          duration: "02:25",
          desc: "Of course you can simply go through all the lectures, but to get the most out of the course, you should consider the advises given in this lecture.",
        },
        {
          content2: "What is Typescript?",
          preview: "Preview",
          duration: "02:09",
          desc: "Angular uses Typescript. What does that mean for you?",
        },
        {
          content2: "A basic Project Setup using Bootstrap for Styling",
          preview: "Preview",
          duration: "04:27",
          desc: "A lot of sections of this course will start with a basic setup - this lecture explains how that basic setup is created with the CLI.",
        },
        {
          content2: "About the Course Code / code Snapshots",
          preview: "",
          duration: "01:06",
          desc: "Do you get some strange error? Are you stuck? Have a look at the source code of this course.",
        },
      ],
      timeline: "23 lectures •2hr 12min",
    },
    {
      title: "Dynamic Components",
      content: [
        {
          content1: "Course Introduction",
          preview: "Preview",
          duration: "00:57",
          desc: "Welcome to this course! Let me introduce myself and explain what the course is about!",
        },
        {
          content2: "What is Angular?",
          preview: "Preview",
          duration: "01:59",
          desc: "First things first! What is Angular? Why would you want to learn it? This lecture helps answering this question.",
        },
        {
          content2: "Join our Online Learning Community",
          preview: "",
          duration: "00:25",
          desc: "Learning alone is absolutely fine but finding learning partners might be a nice thing, too. Our learning community is a great place to learn and grow together - of course it's 100% free and optional!",
        },
        {
          content2: "Angular vs Angular 2 vs Lastest Angular Version",
          preview: "Preview",
          duration: "02:55",
          desc: "So many Angular versions! What's up with them and which version does this course cover?",
        },
        {
          content2: "CLI Deep Dive and Troubleshooting",
          preview: "",
          duration: "01:13",
          desc: "Got issues using the CLI, setting up a project or simply want to learn more about it? Check out this lecture.",
        },
        {
          content2: "Project Setup and FirstApp",
          preview: "Preview",
          duration: "08:48",
          desc: "Enough of the talking, let's create our first Angular project and view our first app in the browser.",
        },
        {
          content2: "Editing the First App",
          preview: "Preview",
          duration: "10:05",
          desc: "Let's edit our first app!",
        },
        {
          content2: "The Course Structure",
          preview: "Preview",
          duration: "4:00",
          desc: "How is this course structured? This lecture answers the question and explains what you're going to learn!",
        },
        {
          content2: "How to get the Most out of the Course",
          preview: "Preview",
          duration: "02:25",
          desc: "Of course you can simply go through all the lectures, but to get the most out of the course, you should consider the advises given in this lecture.",
        },
        {
          content2: "What is Typescript?",
          preview: "Preview",
          duration: "02:09",
          desc: "Angular uses Typescript. What does that mean for you?",
        },
        {
          content2: "A basic Project Setup using Bootstrap for Styling",
          preview: "Preview",
          duration: "04:27",
          desc: "A lot of sections of this course will start with a basic setup - this lecture explains how that basic setup is created with the CLI.",
        },
        {
          content2: "About the Course Code / code Snapshots",
          preview: "",
          duration: "01:06",
          desc: "Do you get some strange error? Are you stuck? Have a look at the source code of this course.",
        },
      ],
      timeline: "11 lectures •39 min",
    },
    {
      title: "Angular Modules and Optimizing Angular Apps",
      content: [
        {
          content1: "Course Introduction",
          preview: "Preview",
          duration: "00:57",
          desc: "Welcome to this course! Let me introduce myself and explain what the course is about!",
        },
        {
          content2: "What is Angular?",
          preview: "Preview",
          duration: "01:59",
          desc: "First things first! What is Angular? Why would you want to learn it? This lecture helps answering this question.",
        },
        {
          content2: "Join our Online Learning Community",
          preview: "",
          duration: "00:25",
          desc: "Learning alone is absolutely fine but finding learning partners might be a nice thing, too. Our learning community is a great place to learn and grow together - of course it's 100% free and optional!",
        },
        {
          content2: "Angular vs Angular 2 vs Lastest Angular Version",
          preview: "Preview",
          duration: "02:55",
          desc: "So many Angular versions! What's up with them and which version does this course cover?",
        },
        {
          content2: "CLI Deep Dive and Troubleshooting",
          preview: "",
          duration: "01:13",
          desc: "Got issues using the CLI, setting up a project or simply want to learn more about it? Check out this lecture.",
        },
        {
          content2: "Project Setup and FirstApp",
          preview: "Preview",
          duration: "08:48",
          desc: "Enough of the talking, let's create our first Angular project and view our first app in the browser.",
        },
        {
          content2: "Editing the First App",
          preview: "Preview",
          duration: "10:05",
          desc: "Let's edit our first app!",
        },
        {
          content2: "The Course Structure",
          preview: "Preview",
          duration: "4:00",
          desc: "How is this course structured? This lecture answers the question and explains what you're going to learn!",
        },
        {
          content2: "How to get the Most out of the Course",
          preview: "Preview",
          duration: "02:25",
          desc: "Of course you can simply go through all the lectures, but to get the most out of the course, you should consider the advises given in this lecture.",
        },
        {
          content2: "What is Typescript?",
          preview: "Preview",
          duration: "02:09",
          desc: "Angular uses Typescript. What does that mean for you?",
        },
        {
          content2: "A basic Project Setup using Bootstrap for Styling",
          preview: "Preview",
          duration: "04:27",
          desc: "A lot of sections of this course will start with a basic setup - this lecture explains how that basic setup is created with the CLI.",
        },
        {
          content2: "About the Course Code / code Snapshots",
          preview: "",
          duration: "01:06",
          desc: "Do you get some strange error? Are you stuck? Have a look at the source code of this course.",
        },
      ],
      timeline: "18 lectures •1hr 28min",
    },
    {
      title: "Deploying an Angular App",
      content: [
        {
          content1: "Course Introduction",
          preview: "Preview",
          duration: "00:57",
          desc: "Welcome to this course! Let me introduce myself and explain what the course is about!",
        },
        {
          content2: "What is Angular?",
          preview: "Preview",
          duration: "01:59",
          desc: "First things first! What is Angular? Why would you want to learn it? This lecture helps answering this question.",
        },
        {
          content2: "Join our Online Learning Community",
          preview: "",
          duration: "00:25",
          desc: "Learning alone is absolutely fine but finding learning partners might be a nice thing, too. Our learning community is a great place to learn and grow together - of course it's 100% free and optional!",
        },
        {
          content2: "Angular vs Angular 2 vs Lastest Angular Version",
          preview: "Preview",
          duration: "02:55",
          desc: "So many Angular versions! What's up with them and which version does this course cover?",
        },
        {
          content2: "CLI Deep Dive and Troubleshooting",
          preview: "",
          duration: "01:13",
          desc: "Got issues using the CLI, setting up a project or simply want to learn more about it? Check out this lecture.",
        },
        {
          content2: "Project Setup and FirstApp",
          preview: "Preview",
          duration: "08:48",
          desc: "Enough of the talking, let's create our first Angular project and view our first app in the browser.",
        },
        {
          content2: "Editing the First App",
          preview: "Preview",
          duration: "10:05",
          desc: "Let's edit our first app!",
        },
        {
          content2: "The Course Structure",
          preview: "Preview",
          duration: "4:00",
          desc: "How is this course structured? This lecture answers the question and explains what you're going to learn!",
        },
        {
          content2: "How to get the Most out of the Course",
          preview: "Preview",
          duration: "02:25",
          desc: "Of course you can simply go through all the lectures, but to get the most out of the course, you should consider the advises given in this lecture.",
        },
        {
          content2: "What is Typescript?",
          preview: "Preview",
          duration: "02:09",
          desc: "Angular uses Typescript. What does that mean for you?",
        },
        {
          content2: "A basic Project Setup using Bootstrap for Styling",
          preview: "Preview",
          duration: "04:27",
          desc: "A lot of sections of this course will start with a basic setup - this lecture explains how that basic setup is created with the CLI.",
        },
        {
          content2: "About the Course Code / code Snapshots",
          preview: "",
          duration: "01:06",
          desc: "Do you get some strange error? Are you stuck? Have a look at the source code of this course.",
        },
      ],
      timeline: "6 lectures •18 min",
    },
    {
      title: "Standalone Components",
      content: [
        {
          content1: "Course Introduction",
          preview: "Preview",
          duration: "00:57",
          desc: "Welcome to this course! Let me introduce myself and explain what the course is about!",
        },
        {
          content2: "What is Angular?",
          preview: "Preview",
          duration: "01:59",
          desc: "First things first! What is Angular? Why would you want to learn it? This lecture helps answering this question.",
        },
        {
          content2: "Join our Online Learning Community",
          preview: "",
          duration: "00:25",
          desc: "Learning alone is absolutely fine but finding learning partners might be a nice thing, too. Our learning community is a great place to learn and grow together - of course it's 100% free and optional!",
        },
        {
          content2: "Angular vs Angular 2 vs Lastest Angular Version",
          preview: "Preview",
          duration: "02:55",
          desc: "So many Angular versions! What's up with them and which version does this course cover?",
        },
        {
          content2: "CLI Deep Dive and Troubleshooting",
          preview: "",
          duration: "01:13",
          desc: "Got issues using the CLI, setting up a project or simply want to learn more about it? Check out this lecture.",
        },
        {
          content2: "Project Setup and FirstApp",
          preview: "Preview",
          duration: "08:48",
          desc: "Enough of the talking, let's create our first Angular project and view our first app in the browser.",
        },
        {
          content2: "Editing the First App",
          preview: "Preview",
          duration: "10:05",
          desc: "Let's edit our first app!",
        },
        {
          content2: "The Course Structure",
          preview: "Preview",
          duration: "4:00",
          desc: "How is this course structured? This lecture answers the question and explains what you're going to learn!",
        },
        {
          content2: "How to get the Most out of the Course",
          preview: "Preview",
          duration: "02:25",
          desc: "Of course you can simply go through all the lectures, but to get the most out of the course, you should consider the advises given in this lecture.",
        },
        {
          content2: "What is Typescript?",
          preview: "Preview",
          duration: "02:09",
          desc: "Angular uses Typescript. What does that mean for you?",
        },
        {
          content2: "A basic Project Setup using Bootstrap for Styling",
          preview: "Preview",
          duration: "04:27",
          desc: "A lot of sections of this course will start with a basic setup - this lecture explains how that basic setup is created with the CLI.",
        },
        {
          content2: "About the Course Code / code Snapshots",
          preview: "",
          duration: "01:06",
          desc: "Do you get some strange error? Are you stuck? Have a look at the source code of this course.",
        },
      ],
      timeline: "11 lectures •46min",
    },
    {
      title: "Angular Signals",
      content: [
        {
          content1: "Course Introduction",
          preview: "Preview",
          duration: "00:57",
          desc: "Welcome to this course! Let me introduce myself and explain what the course is about!",
        },
        {
          content2: "What is Angular?",
          preview: "Preview",
          duration: "01:59",
          desc: "First things first! What is Angular? Why would you want to learn it? This lecture helps answering this question.",
        },
        {
          content2: "Join our Online Learning Community",
          preview: "",
          duration: "00:25",
          desc: "Learning alone is absolutely fine but finding learning partners might be a nice thing, too. Our learning community is a great place to learn and grow together - of course it's 100% free and optional!",
        },
        {
          content2: "Angular vs Angular 2 vs Lastest Angular Version",
          preview: "Preview",
          duration: "02:55",
          desc: "So many Angular versions! What's up with them and which version does this course cover?",
        },
        {
          content2: "CLI Deep Dive and Troubleshooting",
          preview: "",
          duration: "01:13",
          desc: "Got issues using the CLI, setting up a project or simply want to learn more about it? Check out this lecture.",
        },
        {
          content2: "Project Setup and FirstApp",
          preview: "Preview",
          duration: "08:48",
          desc: "Enough of the talking, let's create our first Angular project and view our first app in the browser.",
        },
        {
          content2: "Editing the First App",
          preview: "Preview",
          duration: "10:05",
          desc: "Let's edit our first app!",
        },
        {
          content2: "The Course Structure",
          preview: "Preview",
          duration: "4:00",
          desc: "How is this course structured? This lecture answers the question and explains what you're going to learn!",
        },
        {
          content2: "How to get the Most out of the Course",
          preview: "Preview",
          duration: "02:25",
          desc: "Of course you can simply go through all the lectures, but to get the most out of the course, you should consider the advises given in this lecture.",
        },
        {
          content2: "What is Typescript?",
          preview: "Preview",
          duration: "02:09",
          desc: "Angular uses Typescript. What does that mean for you?",
        },
        {
          content2: "A basic Project Setup using Bootstrap for Styling",
          preview: "Preview",
          duration: "04:27",
          desc: "A lot of sections of this course will start with a basic setup - this lecture explains how that basic setup is created with the CLI.",
        },
        {
          content2: "About the Course Code / code Snapshots",
          preview: "",
          duration: "01:06",
          desc: "Do you get some strange error? Are you stuck? Have a look at the source code of this course.",
        },
      ],
      timeline: "10 lectures •28 min",
    },
    {
      title: "Bonus: Using NgRx For State Management",
      content: [
        {
          content1: "Course Introduction",
          preview: "Preview",
          duration: "00:57",
          desc: "Welcome to this course! Let me introduce myself and explain what the course is about!",
        },
        {
          content2: "What is Angular?",
          preview: "Preview",
          duration: "01:59",
          desc: "First things first! What is Angular? Why would you want to learn it? This lecture helps answering this question.",
        },
        {
          content2: "Join our Online Learning Community",
          preview: "",
          duration: "00:25",
          desc: "Learning alone is absolutely fine but finding learning partners might be a nice thing, too. Our learning community is a great place to learn and grow together - of course it's 100% free and optional!",
        },
        {
          content2: "Angular vs Angular 2 vs Lastest Angular Version",
          preview: "Preview",
          duration: "02:55",
          desc: "So many Angular versions! What's up with them and which version does this course cover?",
        },
        {
          content2: "CLI Deep Dive and Troubleshooting",
          preview: "",
          duration: "01:13",
          desc: "Got issues using the CLI, setting up a project or simply want to learn more about it? Check out this lecture.",
        },
        {
          content2: "Project Setup and FirstApp",
          preview: "Preview",
          duration: "08:48",
          desc: "Enough of the talking, let's create our first Angular project and view our first app in the browser.",
        },
        {
          content2: "Editing the First App",
          preview: "Preview",
          duration: "10:05",
          desc: "Let's edit our first app!",
        },
        {
          content2: "The Course Structure",
          preview: "Preview",
          duration: "4:00",
          desc: "How is this course structured? This lecture answers the question and explains what you're going to learn!",
        },
        {
          content2: "How to get the Most out of the Course",
          preview: "Preview",
          duration: "02:25",
          desc: "Of course you can simply go through all the lectures, but to get the most out of the course, you should consider the advises given in this lecture.",
        },
        {
          content2: "What is Typescript?",
          preview: "Preview",
          duration: "02:09",
          desc: "Angular uses Typescript. What does that mean for you?",
        },
        {
          content2: "A basic Project Setup using Bootstrap for Styling",
          preview: "Preview",
          duration: "04:27",
          desc: "A lot of sections of this course will start with a basic setup - this lecture explains how that basic setup is created with the CLI.",
        },
        {
          content2: "About the Course Code / code Snapshots",
          preview: "",
          duration: "01:06",
          desc: "Do you get some strange error? Are you stuck? Have a look at the source code of this course.",
        },
      ],
      timeline: "66 lectures •6hr 30min",
    },
    {
      title: "Bonus: Angular Universal",
      content: [
        {
          content1: "Course Introduction",
          preview: "Preview",
          duration: "00:57",
          desc: "Welcome to this course! Let me introduce myself and explain what the course is about!",
        },
        {
          content2: "What is Angular?",
          preview: "Preview",
          duration: "01:59",
          desc: "First things first! What is Angular? Why would you want to learn it? This lecture helps answering this question.",
        },
        {
          content2: "Join our Online Learning Community",
          preview: "",
          duration: "00:25",
          desc: "Learning alone is absolutely fine but finding learning partners might be a nice thing, too. Our learning community is a great place to learn and grow together - of course it's 100% free and optional!",
        },
        {
          content2: "Angular vs Angular 2 vs Lastest Angular Version",
          preview: "Preview",
          duration: "02:55",
          desc: "So many Angular versions! What's up with them and which version does this course cover?",
        },
        {
          content2: "CLI Deep Dive and Troubleshooting",
          preview: "",
          duration: "01:13",
          desc: "Got issues using the CLI, setting up a project or simply want to learn more about it? Check out this lecture.",
        },
        {
          content2: "Project Setup and FirstApp",
          preview: "Preview",
          duration: "08:48",
          desc: "Enough of the talking, let's create our first Angular project and view our first app in the browser.",
        },
        {
          content2: "Editing the First App",
          preview: "Preview",
          duration: "10:05",
          desc: "Let's edit our first app!",
        },
        {
          content2: "The Course Structure",
          preview: "Preview",
          duration: "4:00",
          desc: "How is this course structured? This lecture answers the question and explains what you're going to learn!",
        },
        {
          content2: "How to get the Most out of the Course",
          preview: "Preview",
          duration: "02:25",
          desc: "Of course you can simply go through all the lectures, but to get the most out of the course, you should consider the advises given in this lecture.",
        },
        {
          content2: "What is Typescript?",
          preview: "Preview",
          duration: "02:09",
          desc: "Angular uses Typescript. What does that mean for you?",
        },
        {
          content2: "A basic Project Setup using Bootstrap for Styling",
          preview: "Preview",
          duration: "04:27",
          desc: "A lot of sections of this course will start with a basic setup - this lecture explains how that basic setup is created with the CLI.",
        },
        {
          content2: "About the Course Code / code Snapshots",
          preview: "",
          duration: "01:06",
          desc: "Do you get some strange error? Are you stuck? Have a look at the source code of this course.",
        },
      ],
      timeline: "8 lectures •29 min",
    },
    {
      title: "Angular Animations",
      content: [
        {
          content1: "Course Introduction",
          preview: "Preview",
          duration: "00:57",
          desc: "Welcome to this course! Let me introduce myself and explain what the course is about!",
        },
        {
          content2: "What is Angular?",
          preview: "Preview",
          duration: "01:59",
          desc: "First things first! What is Angular? Why would you want to learn it? This lecture helps answering this question.",
        },
        {
          content2: "Join our Online Learning Community",
          preview: "",
          duration: "00:25",
          desc: "Learning alone is absolutely fine but finding learning partners might be a nice thing, too. Our learning community is a great place to learn and grow together - of course it's 100% free and optional!",
        },
        {
          content2: "Angular vs Angular 2 vs Lastest Angular Version",
          preview: "Preview",
          duration: "02:55",
          desc: "So many Angular versions! What's up with them and which version does this course cover?",
        },
        {
          content2: "CLI Deep Dive and Troubleshooting",
          preview: "",
          duration: "01:13",
          desc: "Got issues using the CLI, setting up a project or simply want to learn more about it? Check out this lecture.",
        },
        {
          content2: "Project Setup and FirstApp",
          preview: "Preview",
          duration: "08:48",
          desc: "Enough of the talking, let's create our first Angular project and view our first app in the browser.",
        },
        {
          content2: "Editing the First App",
          preview: "Preview",
          duration: "10:05",
          desc: "Let's edit our first app!",
        },
        {
          content2: "The Course Structure",
          preview: "Preview",
          duration: "4:00",
          desc: "How is this course structured? This lecture answers the question and explains what you're going to learn!",
        },
        {
          content2: "How to get the Most out of the Course",
          preview: "Preview",
          duration: "02:25",
          desc: "Of course you can simply go through all the lectures, but to get the most out of the course, you should consider the advises given in this lecture.",
        },
        {
          content2: "What is Typescript?",
          preview: "Preview",
          duration: "02:09",
          desc: "Angular uses Typescript. What does that mean for you?",
        },
        {
          content2: "A basic Project Setup using Bootstrap for Styling",
          preview: "Preview",
          duration: "04:27",
          desc: "A lot of sections of this course will start with a basic setup - this lecture explains how that basic setup is created with the CLI.",
        },
        {
          content2: "About the Course Code / code Snapshots",
          preview: "",
          duration: "01:06",
          desc: "Do you get some strange error? Are you stuck? Have a look at the source code of this course.",
        },
      ],
      timeline: "12 lectures •39 min",
    },
    {
      title: "Adding Offline Capabilities with Service Workers",
      content: [
        {
          content1: "Course Introduction",
          preview: "Preview",
          duration: "00:57",
          desc: "Welcome to this course! Let me introduce myself and explain what the course is about!",
        },
        {
          content2: "What is Angular?",
          preview: "Preview",
          duration: "01:59",
          desc: "First things first! What is Angular? Why would you want to learn it? This lecture helps answering this question.",
        },
        {
          content2: "Join our Online Learning Community",
          preview: "",
          duration: "00:25",
          desc: "Learning alone is absolutely fine but finding learning partners might be a nice thing, too. Our learning community is a great place to learn and grow together - of course it's 100% free and optional!",
        },
        {
          content2: "Angular vs Angular 2 vs Lastest Angular Version",
          preview: "Preview",
          duration: "02:55",
          desc: "So many Angular versions! What's up with them and which version does this course cover?",
        },
        {
          content2: "CLI Deep Dive and Troubleshooting",
          preview: "",
          duration: "01:13",
          desc: "Got issues using the CLI, setting up a project or simply want to learn more about it? Check out this lecture.",
        },
        {
          content2: "Project Setup and FirstApp",
          preview: "Preview",
          duration: "08:48",
          desc: "Enough of the talking, let's create our first Angular project and view our first app in the browser.",
        },
        {
          content2: "Editing the First App",
          preview: "Preview",
          duration: "10:05",
          desc: "Let's edit our first app!",
        },
        {
          content2: "The Course Structure",
          preview: "Preview",
          duration: "4:00",
          desc: "How is this course structured? This lecture answers the question and explains what you're going to learn!",
        },
        {
          content2: "How to get the Most out of the Course",
          preview: "Preview",
          duration: "02:25",
          desc: "Of course you can simply go through all the lectures, but to get the most out of the course, you should consider the advises given in this lecture.",
        },
        {
          content2: "What is Typescript?",
          preview: "Preview",
          duration: "02:09",
          desc: "Angular uses Typescript. What does that mean for you?",
        },
        {
          content2: "A basic Project Setup using Bootstrap for Styling",
          preview: "Preview",
          duration: "04:27",
          desc: "A lot of sections of this course will start with a basic setup - this lecture explains how that basic setup is created with the CLI.",
        },
        {
          content2: "About the Course Code / code Snapshots",
          preview: "",
          duration: "01:06",
          desc: "Do you get some strange error? Are you stuck? Have a look at the source code of this course.",
        },
      ],
      timeline: "5 lectures •27 min",
    },
    {
      title: "A Basic Introduction to Unit Testing in Angular Apps",
      content: [
        {
          content1: "Course Introduction",
          preview: "Preview",
          duration: "00:57",
          desc: "Welcome to this course! Let me introduce myself and explain what the course is about!",
        },
        {
          content2: "What is Angular?",
          preview: "Preview",
          duration: "01:59",
          desc: "First things first! What is Angular? Why would you want to learn it? This lecture helps answering this question.",
        },
        {
          content2: "Join our Online Learning Community",
          preview: "",
          duration: "00:25",
          desc: "Learning alone is absolutely fine but finding learning partners might be a nice thing, too. Our learning community is a great place to learn and grow together - of course it's 100% free and optional!",
        },
        {
          content2: "Angular vs Angular 2 vs Lastest Angular Version",
          preview: "Preview",
          duration: "02:55",
          desc: "So many Angular versions! What's up with them and which version does this course cover?",
        },
        {
          content2: "CLI Deep Dive and Troubleshooting",
          preview: "",
          duration: "01:13",
          desc: "Got issues using the CLI, setting up a project or simply want to learn more about it? Check out this lecture.",
        },
        {
          content2: "Project Setup and FirstApp",
          preview: "Preview",
          duration: "08:48",
          desc: "Enough of the talking, let's create our first Angular project and view our first app in the browser.",
        },
        {
          content2: "Editing the First App",
          preview: "Preview",
          duration: "10:05",
          desc: "Let's edit our first app!",
        },
        {
          content2: "The Course Structure",
          preview: "Preview",
          duration: "4:00",
          desc: "How is this course structured? This lecture answers the question and explains what you're going to learn!",
        },
        {
          content2: "How to get the Most out of the Course",
          preview: "Preview",
          duration: "02:25",
          desc: "Of course you can simply go through all the lectures, but to get the most out of the course, you should consider the advises given in this lecture.",
        },
        {
          content2: "What is Typescript?",
          preview: "Preview",
          duration: "02:09",
          desc: "Angular uses Typescript. What does that mean for you?",
        },
        {
          content2: "A basic Project Setup using Bootstrap for Styling",
          preview: "Preview",
          duration: "04:27",
          desc: "A lot of sections of this course will start with a basic setup - this lecture explains how that basic setup is created with the CLI.",
        },
        {
          content2: "About the Course Code / code Snapshots",
          preview: "",
          duration: "01:06",
          desc: "Do you get some strange error? Are you stuck? Have a look at the source code of this course.",
        },
      ],
      timeline: "11 lectures •45 min",
    },
    {
      title: "Angular as a Platform & Closer Look at the CLI",
      content: [
        {
          content1: "Course Introduction",
          preview: "Preview",
          duration: "00:57",
          desc: "Welcome to this course! Let me introduce myself and explain what the course is about!",
        },
        {
          content2: "What is Angular?",
          preview: "Preview",
          duration: "01:59",
          desc: "First things first! What is Angular? Why would you want to learn it? This lecture helps answering this question.",
        },
        {
          content2: "Join our Online Learning Community",
          preview: "",
          duration: "00:25",
          desc: "Learning alone is absolutely fine but finding learning partners might be a nice thing, too. Our learning community is a great place to learn and grow together - of course it's 100% free and optional!",
        },
        {
          content2: "Angular vs Angular 2 vs Lastest Angular Version",
          preview: "Preview",
          duration: "02:55",
          desc: "So many Angular versions! What's up with them and which version does this course cover?",
        },
        {
          content2: "CLI Deep Dive and Troubleshooting",
          preview: "",
          duration: "01:13",
          desc: "Got issues using the CLI, setting up a project or simply want to learn more about it? Check out this lecture.",
        },
        {
          content2: "Project Setup and FirstApp",
          preview: "Preview",
          duration: "08:48",
          desc: "Enough of the talking, let's create our first Angular project and view our first app in the browser.",
        },
        {
          content2: "Editing the First App",
          preview: "Preview",
          duration: "10:05",
          desc: "Let's edit our first app!",
        },
        {
          content2: "The Course Structure",
          preview: "Preview",
          duration: "4:00",
          desc: "How is this course structured? This lecture answers the question and explains what you're going to learn!",
        },
        {
          content2: "How to get the Most out of the Course",
          preview: "Preview",
          duration: "02:25",
          desc: "Of course you can simply go through all the lectures, but to get the most out of the course, you should consider the advises given in this lecture.",
        },
        {
          content2: "What is Typescript?",
          preview: "Preview",
          duration: "02:09",
          desc: "Angular uses Typescript. What does that mean for you?",
        },
        {
          content2: "A basic Project Setup using Bootstrap for Styling",
          preview: "Preview",
          duration: "04:27",
          desc: "A lot of sections of this course will start with a basic setup - this lecture explains how that basic setup is created with the CLI.",
        },
        {
          content2: "About the Course Code / code Snapshots",
          preview: "",
          duration: "01:06",
          desc: "Do you get some strange error? Are you stuck? Have a look at the source code of this course.",
        },
      ],
      timeline: "15 lectures •1hr 17min",
    },
    {
      title: "Angular Changes & New Features",
      content: [
        {
          content1: "Course Introduction",
          preview: "Preview",
          duration: "00:57",
          desc: "Welcome to this course! Let me introduce myself and explain what the course is about!",
        },
        {
          content2: "What is Angular?",
          preview: "Preview",
          duration: "01:59",
          desc: "First things first! What is Angular? Why would you want to learn it? This lecture helps answering this question.",
        },
        {
          content2: "Join our Online Learning Community",
          preview: "",
          duration: "00:25",
          desc: "Learning alone is absolutely fine but finding learning partners might be a nice thing, too. Our learning community is a great place to learn and grow together - of course it's 100% free and optional!",
        },
        {
          content2: "Angular vs Angular 2 vs Lastest Angular Version",
          preview: "Preview",
          duration: "02:55",
          desc: "So many Angular versions! What's up with them and which version does this course cover?",
        },
        {
          content2: "CLI Deep Dive and Troubleshooting",
          preview: "",
          duration: "01:13",
          desc: "Got issues using the CLI, setting up a project or simply want to learn more about it? Check out this lecture.",
        },
        {
          content2: "Project Setup and FirstApp",
          preview: "Preview",
          duration: "08:48",
          desc: "Enough of the talking, let's create our first Angular project and view our first app in the browser.",
        },
        {
          content2: "Editing the First App",
          preview: "Preview",
          duration: "10:05",
          desc: "Let's edit our first app!",
        },
        {
          content2: "The Course Structure",
          preview: "Preview",
          duration: "4:00",
          desc: "How is this course structured? This lecture answers the question and explains what you're going to learn!",
        },
        {
          content2: "How to get the Most out of the Course",
          preview: "Preview",
          duration: "02:25",
          desc: "Of course you can simply go through all the lectures, but to get the most out of the course, you should consider the advises given in this lecture.",
        },
        {
          content2: "What is Typescript?",
          preview: "Preview",
          duration: "02:09",
          desc: "Angular uses Typescript. What does that mean for you?",
        },
        {
          content2: "A basic Project Setup using Bootstrap for Styling",
          preview: "Preview",
          duration: "04:27",
          desc: "A lot of sections of this course will start with a basic setup - this lecture explains how that basic setup is created with the CLI.",
        },
        {
          content2: "About the Course Code / code Snapshots",
          preview: "",
          duration: "01:06",
          desc: "Do you get some strange error? Are you stuck? Have a look at the source code of this course.",
        },
      ],
      timeline: "1 lectures •16 min",
    },
    {
      title: "Course Roundup",
      content: [
        {
          content1: "Course Introduction",
          preview: "Preview",
          duration: "00:57",
          desc: "Welcome to this course! Let me introduce myself and explain what the course is about!",
        },
        {
          content2: "What is Angular?",
          preview: "Preview",
          duration: "01:59",
          desc: "First things first! What is Angular? Why would you want to learn it? This lecture helps answering this question.",
        },
        {
          content2: "Join our Online Learning Community",
          preview: "",
          duration: "00:25",
          desc: "Learning alone is absolutely fine but finding learning partners might be a nice thing, too. Our learning community is a great place to learn and grow together - of course it's 100% free and optional!",
        },
        {
          content2: "Angular vs Angular 2 vs Lastest Angular Version",
          preview: "Preview",
          duration: "02:55",
          desc: "So many Angular versions! What's up with them and which version does this course cover?",
        },
        {
          content2: "CLI Deep Dive and Troubleshooting",
          preview: "",
          duration: "01:13",
          desc: "Got issues using the CLI, setting up a project or simply want to learn more about it? Check out this lecture.",
        },
        {
          content2: "Project Setup and FirstApp",
          preview: "Preview",
          duration: "08:48",
          desc: "Enough of the talking, let's create our first Angular project and view our first app in the browser.",
        },
        {
          content2: "Editing the First App",
          preview: "Preview",
          duration: "10:05",
          desc: "Let's edit our first app!",
        },
        {
          content2: "The Course Structure",
          preview: "Preview",
          duration: "4:00",
          desc: "How is this course structured? This lecture answers the question and explains what you're going to learn!",
        },
        {
          content2: "How to get the Most out of the Course",
          preview: "Preview",
          duration: "02:25",
          desc: "Of course you can simply go through all the lectures, but to get the most out of the course, you should consider the advises given in this lecture.",
        },
        {
          content2: "What is Typescript?",
          preview: "Preview",
          duration: "02:09",
          desc: "Angular uses Typescript. What does that mean for you?",
        },
        {
          content2: "A basic Project Setup using Bootstrap for Styling",
          preview: "Preview",
          duration: "04:27",
          desc: "A lot of sections of this course will start with a basic setup - this lecture explains how that basic setup is created with the CLI.",
        },
        {
          content2: "About the Course Code / code Snapshots",
          preview: "",
          duration: "01:06",
          desc: "Do you get some strange error? Are you stuck? Have a look at the source code of this course.",
        },
      ],
      timeline: "2 lectures •1 min",
    },
    {
      title: "Bonus: Typescript Introduction (for Angular 2 Usage)",
      content: [
        {
          content1: "Course Introduction",
          preview: "Preview",
          duration: "00:57",
          desc: "Welcome to this course! Let me introduce myself and explain what the course is about!",
        },
        {
          content2: "What is Angular?",
          preview: "Preview",
          duration: "01:59",
          desc: "First things first! What is Angular? Why would you want to learn it? This lecture helps answering this question.",
        },
        {
          content2: "Join our Online Learning Community",
          preview: "",
          duration: "00:25",
          desc: "Learning alone is absolutely fine but finding learning partners might be a nice thing, too. Our learning community is a great place to learn and grow together - of course it's 100% free and optional!",
        },
        {
          content2: "Angular vs Angular 2 vs Lastest Angular Version",
          preview: "Preview",
          duration: "02:55",
          desc: "So many Angular versions! What's up with them and which version does this course cover?",
        },
        {
          content2: "CLI Deep Dive and Troubleshooting",
          preview: "",
          duration: "01:13",
          desc: "Got issues using the CLI, setting up a project or simply want to learn more about it? Check out this lecture.",
        },
        {
          content2: "Project Setup and FirstApp",
          preview: "Preview",
          duration: "08:48",
          desc: "Enough of the talking, let's create our first Angular project and view our first app in the browser.",
        },
        {
          content2: "Editing the First App",
          preview: "Preview",
          duration: "10:05",
          desc: "Let's edit our first app!",
        },
        {
          content2: "The Course Structure",
          preview: "Preview",
          duration: "4:00",
          desc: "How is this course structured? This lecture answers the question and explains what you're going to learn!",
        },
        {
          content2: "How to get the Most out of the Course",
          preview: "Preview",
          duration: "02:25",
          desc: "Of course you can simply go through all the lectures, but to get the most out of the course, you should consider the advises given in this lecture.",
        },
        {
          content2: "What is Typescript?",
          preview: "Preview",
          duration: "02:09",
          desc: "Angular uses Typescript. What does that mean for you?",
        },
        {
          content2: "A basic Project Setup using Bootstrap for Styling",
          preview: "Preview",
          duration: "04:27",
          desc: "A lot of sections of this course will start with a basic setup - this lecture explains how that basic setup is created with the CLI.",
        },
        {
          content2: "About the Course Code / code Snapshots",
          preview: "",
          duration: "01:06",
          desc: "Do you get some strange error? Are you stuck? Have a look at the source code of this course.",
        },
      ],
      timeline: "14 lectures •1hr 1min",
    },
  ];

  return (
    <>
      <Row
        style={{
          height: expanded ? "auto" : "673px",
          overflow: "hidden",
        }}
      >
        <Col>
          <p className="my-3 fs-3 fw-bolder">Course Content</p>
          <Row>
            <Col md={9}>
              <p className="me-5" style={{ fontSize: "14px" }}>
                34 sections • 499 lectures • 36h 30m total length
              </p>
            </Col>
            <Col md={3}>
              <p
                className="text-end fw-bolder"
                style={{ fontSize: "15px", color: "#401B9C" }}
              >
                Expand all sections
              </p>
            </Col>
          </Row>

          {accordionData.map((item, index) => (
            <CustomAccordion
              key={index}
              title={item.title}
              timeline1={item.timeline}
              contentItems={item.content}
            />
          ))}
        </Col>
      </Row>
      {!expanded ? (
        <button
          onClick={loadSectionsFn}
          className="mt-4 bg-white border-1 rounded-0 text-dark fw-bolder"
          style={{ padding: "10px 309px", fontSize: "14px" }}
        >
          24 more sections
        </button>
      ) : (
        <></>
      )}
    </>
  );
};

export default Section4;
