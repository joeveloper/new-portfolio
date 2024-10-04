import React from "react";
import { LuLaptop } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import tadImg from "@/public/tad.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "SKIYWATER - Frontend Team Lead / Snr FE",
    location: "Remote",
    description:
      "I lead a team of 3 developers in the development of a new product for the company. I also contribute to the development of the product using React, Next.js, and TailwindCSS. \n I also mentor junior developers and conduct code reviews.",
    icon: React.createElement(LuLaptop),
    date: "July 2024 - present",
  },
  {
    title: "AITM Program - Self Employed",
    location: "Remote",
    description:
      "I tutor newbies in web development. I also consult privately for Entrepreneurs and SME who wish to go digital and have an online presence.",
    icon: React.createElement(LuLaptop),
    date: "Feb 2022 - present",
  },
  {
    title: "Tenable",
    location: "Paris, France",
    description:
      "Worked as a fullstack developer for 6 months on the Tenable Active Directory Cybersecurity SAAS product",
    icon: React.createElement(LuLaptop),
    date: "Apr 2023 - Sept 2023",
  },
  {
    title: "FlapCoop - Assetrise",
    location: "Remote",
    description:
      "At FlapCoop - Assetrise, I was tasked with fullstack development utilizing JavaScript (React) and NodeJS to execute projects plans and designs.",
    icon: React.createElement(LuLaptop),
    date: "Oct 2022 - Feb 2023",
  },
  {
    title: "Federal Airports Authority of Nigeria - FAAN",
    location: "Lagos, Nigeria (Hybrid)",
    description:
      "At FAAN I contributed to a team project involving the migration of the Toll Monitoring App dashboard from React to Angular components, also updating routes and services.",
    icon: React.createElement(LuLaptop),
    date: "Dec 2019 - Sep 2022",
  },
] as const;

export const projectsData = [
  {
    title: "TenableAD (Active Directory)",
    description:
      "I worked as a full-stack developer on this startup project for 6 Months. Cybesecurity product that help Fortune-500 companies ensure secure data flow on their systems.",
    tags: ["React", "Typescript", "Next.js", "SQL", "Tailwind", "Redux", "MobX", "Docker"],
    imageUrl: tadImg,
  },
  {
    title: "SlumDiary",
    description:
      "Using the Google OAUTH2.0 API and ExpressHandleBars view , I configured a Puplic-Private diary that allows a user document their events and view other user stories",
    tags: ["Javascript", "ExpressHandleBars",  "NodeJS"],
    imageUrl: tadImg,
  },
  {
    title: "Gidigba",
    description:
      "A self-initiated Telemedicine startup project that allows remote consultaions and prescription dispensation between doctors, and patients",
    tags: ["React", "Next.js", "Strapi", "Tailwind", "ShadUI"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Food Cart",
    description:
      "A web app that help you select some food items from a menu, add to cart and checkout payment. Built with Angular and Typescript",
    tags: ["Angular", "Typescript", "Tailwind"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Angular",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "GraphQL",
  "Apollo",
  "MongoDB",
  "Express",
  "SQL",
  "Grafana",
  "Figma",
  "Docker",
  "JIRA",
  "GraphQL",
  "Grafana",
  "Jest",
  "Cypress",
  "Postman",
  "Strapi",
  "RESTApi",
  "Canva",
] as const;
