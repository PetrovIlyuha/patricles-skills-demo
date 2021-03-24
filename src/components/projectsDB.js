import TeahouseDemo from "../images/teahouse_demo.gif";
import NightWatcher from "../images/movies.gif";
import Chatick from "../images/chat.gif";
import Freeily from "../images/player.gif";
import Algolia from "../images/happycow.gif";
import YouTube from "../images/youtube-clone.gif";
import GiftBox from "../images/giftbox-demo.gif";
import Node from "../images/icons/node.png";
import React from "../images/icons/react.png";
import Express from "../images/icons/express.png";
import Prisma from "../images/icons/prisma.png";
import Styled from "../images/icons/styled-components.png";
import Postgres from "../images/icons/postgres.png";
import Typescript from "../images/icons/typescript.png";
import EsBuild from "../images/icons/esbuild.png";
import Contentful from "../images/icons/contentful.png";
import AlgoliaLogo from "../images/icons/algolia.png";

export const projectsList = [
  {
    name: "GiftBox IDE",
    description:
      "Code-gen and comments to produce docs in the json format to easily share it with others",
    image: GiftBox,
    link: "cli",
    git: "https://github.com/PetrovIlyuha/Giftbox-ide",
    techIcons: [EsBuild, Typescript, React],
  },
  {
    name: "YouTube Clone",
    description:
      "YouTube Clone. React & Styled-Components on the Front-End. Node, Express, Prisma ORM on the Backend",
    image: YouTube,
    link: "https://casttube.herokuapp.com/",
    git: "https://github.com/PetrovIlyuha/Youtube-Clone-Prisma-Postgres",
    techIcons: [Styled, Prisma, Node, React, Postgres],
  },
  {
    name: 'Effective Search "Happy Cow"',
    description:
      "Simple yet efficient project with search and pagination powered by Algolia engine",
    image: Algolia,
    link: "https://cow-shopper.netlify.app",
    techIcons: [React, AlgoliaLogo],
  },
  {
    name: "Tea House",
    description:
      "E-commerce Single-Page Application powered by React, FormSpree and Contentful CMS",
    image: TeahouseDemo,
    link: "https://zenteahouse.netlify.app/",
    git: "https://github.com/PetrovIlyuha/react-tea-house",
    techIcons: [React, Contentful],
  },
  {
    name: "Social Network App",
    description:
      "Tech-Stack: React. React-css-transitions, Firebase Backend, Material UI - design framework",
    image: Chatick,
    link: "https://chattily.netlify.app",
    git:
      "https://github.com/PetrovIlyuha/chatty-messenger-react/tree/master/app",
    techIcons: [React, Node, Express],
  },
  {
    name: "NightWatcher (Movie Search Engine)",
    description:
      "Movie Selection and Quick Assessment Guide powered by React, Styled-Components and MovieDB",
    image: NightWatcher,
    link: "https://nightwatcher.netlify.app/",
    git: "https://github.com/PetrovIlyuha/react-movies",
    techIcons: [React, Styled]
  },
  {
    name: "Freeily (React Audio Player)",
    description:
      "React with Context Api state-management beautiful audio-player with dynamic color themes applied to specific tracks",
    image: Freeily,
    link: "https://freeily.netlify.app/",
    git: "https://github.com/PetrovIlyuha/freeily-player",
    techIcons: [React]
  },
];
