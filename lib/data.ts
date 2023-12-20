import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import PortfolioImg from "@/public/Portfolio.png";
import FrodDetectionImg from "@/public/FrodDetection.png";
import DoctorNowImg from "@/public/DoctorNow.png";
import BlackFaveImg from "@/public/BlackFave.png";

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
    title: "Graduated MCA",
    location: "Jaipur, India",
    description:
      "I graduated after 2 Years of studying. I immediately found an internship as a Back-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Back-End Developer",
    location: "Jaipur, India",
    description:
      "I worked as a Back-end developer for 1 year in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "Back-End Developer",
    location: "Jaipur, India",
    description:
      "I'm now a Back-End developer working as a Sr. Software Developer. My stack includes Go, Terraform, Helm, Docker, AWS, React, TypeScript, and DynamoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "PortFolio",
    description:
      "I worked as a Front-End developer on this project to build a portfolio website. This project is only to show my front-end development skills.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: PortfolioImg,
  },
  {
    title: "Froud Detection",
    description:
      "Froud Detection in online transactions. I was the Back-end developer. It has features like Blocking trasection checking Email validation and checking FICO credit scores. ",
    tags: ["Go", "Terraform", "helm", "AWS", "cypress", "YODA"],
    imageUrl: FrodDetectionImg,
  },
  {
    title: "BlackFave",
    description:
      "A public web app for quick analytics on black community restaurants, movies, and music. It shows trending topics in the black community.",
    tags: ["React", "Django-rest", "PostgreSQL", "bootstrap"],
    imageUrl: BlackFaveImg,
  },
  {
    title: "DoctorNow",
    description:
      "A mobile application for booking doctor's appointments. It shows the currently available doctor and the time slot in which the doctor is available.",
    tags: ["android", "Django-rest", "PostgreSQL", "bootstrap", "jasmin"],
    imageUrl: DoctorNowImg,
  },
] as const;

export const skillsData = [
  "Go",
  "Gin",
  "Docker",
  "Kubernetes",
  "AWS",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
