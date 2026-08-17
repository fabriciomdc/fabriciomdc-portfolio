import typescriptIcon from "@/presentation/assets/languages/typescript-icon.svg"
import javascriptIcon from "@/presentation/assets/languages/javascript-icon.svg"
import html5Icon from "@/presentation/assets/languages/html5-icon.svg"
import cssIcon from "@/presentation/assets/languages/css-icon.svg"
import reactIcon from "@/presentation/assets/frameworks/react-icon.svg"
import nextjsIcon from "@/presentation/assets/frameworks/Next.js.svg"
import nodejsIcon from "@/presentation/assets/frameworks/Node.js.svg"
import tailwindIcon from "@/presentation/assets/frameworks/Tailwind CSS.svg"
import viteIcon from "@/presentation/assets/frameworks/Vite.js.svg"
import graphqlIcon from "@/presentation/assets/frameworks/GraphQL.svg"
import postgresIcon from "@/presentation/assets/db-&-tools/postgress-icon.svg"
import mongodbIcon from "@/presentation/assets/db-&-tools/mongodb-icon.svg"
import firebaseIcon from "@/presentation/assets/db-&-tools/firebase-icon.svg"
import gitIcon from "@/presentation/assets/db-&-tools/Git.svg"
import githubIcon from "@/presentation/assets/db-&-tools/github-icon.svg"
import gitlabIcon from "@/presentation/assets/db-&-tools/gitlab-icon.svg"
import bitbucketIcon from "@/presentation/assets/db-&-tools/bitbucket-icon.svg"
import vscodeIcon from "@/presentation/assets/db-&-tools/vscode-icon.svg"
import androidStudioIcon from "@/presentation/assets/db-&-tools/android-studio-icon.svg"
import cypressIcon from "@/presentation/assets/db-&-tools/cypress-icon.svg"
import jestIcon from "@/presentation/assets/db-&-tools/jest-icon.svg"
import vercelIcon from "@/presentation/assets/db-&-tools/vercel-icon.svg"

export const projects = [
  {
    number: "01",
    title: "USER UP",
    description:
      "Education platform with scheduling, classes, books and student management.",
    stack: ["React", "TypeScript", "Node"],
  },
  {
    number: "02",
    title: "CHAMPIONSHIP TRACKER",
    description:
      "Real-time tracking system for gaming championships with data and analytics.",
    stack: ["Node.js", "Express", "PostgreSQL"],
  },
  {
    number: "03",
    title: "ABI INFINITE MAP",
    description:
      "Interactive map with extracts, spawns and points of interest.",
    stack: ["React", "Leaflet", "TypeScript"],
  },
]

export const skills = {
  languages: [
    { name: "TypeScript", icon: typescriptIcon },
    { name: "JavaScript", icon: javascriptIcon },
    { name: "HTML", icon: html5Icon },
    { name: "CSS", icon: cssIcon },
  ],
  frameworks: [
    { name: "React", icon: reactIcon },
    { name: "Next.js", icon: nextjsIcon },
    { name: "Node.js", icon: nodejsIcon },
    { name: "Tailwind CSS", icon: tailwindIcon },
    { name: "Vite", icon: viteIcon },
    { name: "GraphQL", icon: graphqlIcon },
  ],
  tools: [
    { name: "PostgreSQL", icon: postgresIcon },
    { name: "MongoDB", icon: mongodbIcon },
    { name: "Firebase", icon: firebaseIcon },
    { name: "Git", icon: gitIcon },
    { name: "GitHub", icon: githubIcon },
    { name: "GitLab", icon: gitlabIcon },
    { name: "Bitbucket", icon: bitbucketIcon },
    { name: "VS Code", icon: vscodeIcon },
    { name: "Android Studio", icon: androidStudioIcon },
    { name: "Cypress", icon: cypressIcon },
    { name: "Jest", icon: jestIcon },
    { name: "Vercel", icon: vercelIcon },
  ],
}

export const experience = [
  {
    period: "2026 — PRESENT",
    role: "FULL-STACK DEVELOPER",
    text: "Building scalable web applications and systems.",
  },
  {
    period: "2024 — 2026",
    role: "SOFTWARE DEVELOPER",
    text: "Developing products, APIs and reliable application architectures.",
  },
  {
    period: "EARLIER",
    role: "DEVELOPER",
    text: "Learning, experimenting and building software.",
  },
]
