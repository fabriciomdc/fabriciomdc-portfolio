import typescriptIcon from "@/presentation/assets/languages/typescript-icon.svg";
import javascriptIcon from "@/presentation/assets/languages/javascript-icon.svg";
import html5Icon from "@/presentation/assets/languages/html5-icon.svg";
import cssIcon from "@/presentation/assets/languages/css-icon.svg";
import reactIcon from "@/presentation/assets/frameworks/react-icon.svg";
import nextjsIcon from "@/presentation/assets/frameworks/Next.js.svg";
import nodejsIcon from "@/presentation/assets/frameworks/Node.js.svg";
import tailwindIcon from "@/presentation/assets/frameworks/Tailwind CSS.svg";
import viteIcon from "@/presentation/assets/frameworks/Vite.js.svg";
import graphqlIcon from "@/presentation/assets/frameworks/GraphQL.svg";
import postgresIcon from "@/presentation/assets/db-&-tools/postgress-icon.svg";
import mongodbIcon from "@/presentation/assets/db-&-tools/mongodb-icon.svg";
import firebaseIcon from "@/presentation/assets/db-&-tools/firebase-icon.svg";
import gitIcon from "@/presentation/assets/db-&-tools/Git.svg";
import githubIcon from "@/presentation/assets/db-&-tools/github-icon.svg";
import gitlabIcon from "@/presentation/assets/db-&-tools/gitlab-icon.svg";
import bitbucketIcon from "@/presentation/assets/db-&-tools/bitbucket-icon.svg";
import vscodeIcon from "@/presentation/assets/db-&-tools/vscode-icon.svg";
import androidStudioIcon from "@/presentation/assets/db-&-tools/android-studio-icon.svg";
import cypressIcon from "@/presentation/assets/db-&-tools/cypress-icon.svg";
import jestIcon from "@/presentation/assets/db-&-tools/jest-icon.svg";
import vercelIcon from "@/presentation/assets/db-&-tools/vercel-icon.svg";
import userupImg from "@/presentation/assets/projects/userup-icon.png";
import enelceImg from "@/presentation/assets/projects/enelce-icon.png";
import conexaoImg from "@/presentation/assets/projects/conexão-icon.png";
import abiMastersImg from "@/presentation/assets/projects/abi-masters-logo.svg";

export const projects = [
  {
    number: "01",
    title: "USER UP",
    description:
      "Plataforma de educação com agendamento, aulas, livros e gestão de alunos.",
    stack: ["React", "TypeScript", "NextJS"],
    image: userupImg,
  },
  {
    number: "02",
    title: "ENEL-CE",
    description:
      "Manutenção em alguns aplicativos da enel como enel ceará, enel rio e enel goiás.",
    stack: ["Android Nativo", "Kotlin", "Android Studio"],
    image: enelceImg,
  },
  {
    number: "03",
    title: "CONEXÃO EMPREENDEDORA",
    description:
      "Aplicação para conexão entre mentores e mentorados para um projeto de jovens do banco Sicredi",
    stack: ["React Native", "TypeScript"],
    image: conexaoImg,
  },
  {
    number: "04",
    title: "ABI MASTERS",
    description:
      "Sistema de gestão e acompanhamento de competições com tabelas interativas para o jogo Arena Breakout Infinite gerenciando campeonatos da comunidade.",
    stack: ["React", "TypeScript", "Node.js"],
    image: abiMastersImg,
  },
];

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
};

export const experience = [
  {
    period: "JUL 2023 — FEV 2025",
    role: "DESENVOLVEDOR DE FRONT-END",
    company: "Prime School",
    location: "Fortaleza, Ceará · Remoto",
    type: "Tempo integral · 1 ano 8 meses",
    description: "Desenvolver e gerenciar o projeto principal da escola de inglês Prime School.",
    highlights: [
      "Desenvolver o novo projeto web da Prime usando Next.js e TypeScript",
      "Gerenciar e participar do desenvolvimento do projeto web",
    ],
  },
  {
    period: "SET 2022 — MAI 2023",
    role: "DESENVOLVEDOR DE FRONT-END",
    company: "Multiplica Agência Digital",
    location: "Fortaleza, Ceará · Remoto",
    type: "Tempo integral · 9 meses",
    description: "Desenvolvimento de aplicações mobile e web.",
    highlights: [],
  },
  {
    period: "MAI 2021 — AGO 2022",
    role: "DESENVOLVEDOR",
    company: "Deway",
    location: "Fortaleza, Ceará",
    type: "Tempo integral · 1 ano 4 meses",
    description: "Desenvolvimento com Java e React Native.",
    highlights: [],
  },
];
