import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  mongoDB,
  photoshop,
  illustrator,
  profitcommerce,
  mgroup,
  upwork,
  natour,
  worldWise,
  nextjs,
  php,
  python,
  supabase,
  theWildOasisWebsite,
  theWildOasis,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: ux,
  },
  // {
  //   title: 'Software Prototyping',
  //   icon: prototyping,
  // },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },

  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "Rails",
  //   icon: rubyrails,
  // },
  // {
  //   name: "graphql",
  //   icon: graphql,
  // },
  {
    name: "supabase",
    icon: supabase,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "mangoDB",
    icon: mongoDB,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Illustrator",
    icon: illustrator,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Full Stuck Developer & Graphic Designer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#333333",
    date: "Feb 2023 - Present",
  },
  {
    title: "Graphic Designer & Marketing Expert",
    company_name: "mgroup",
    icon: mgroup,
    iconBg: "#333333",
    date: "Aug 2022 - Mar 2023",
  },
  {
    title: "Graphic Designer",
    company_name: "Proffit Commerce",
    icon: profitcommerce,
    iconBg: "#333333",
    date: "Apr 2021 - Jul 2022",
  },
  // {
  //   title: "Full Stack Developer",
  //   company_name: "Diversity Cyber Council",
  //   icon: dcc,
  //   iconBg: "#333333",
  //   date: "Sep 2022 - Present",
  // },
];

const projects = [
  {
    id: "project-1",
    name: "The Wild Oasis Website",
    description:
      "Public booking platform built with Next.js and Tailwind CSS. Users can explore cabins, check availability, and make reservations. Optimized for performance and SEO. Deployed on Vercel.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: theWildOasisWebsite,
    repo: "https://github.com/giorgidzebisashvili4/the-wild-oasis-website",
    demo: "https://the-wild-oasis-website-chi-pearl.vercel.app/",
  },
  {
    id: "project-2",
    name: "The Wild Oasis Admin",
    description:
      "Internal tool for managing hotel operations, including bookings, guests, and cabins. Built with React and styled-components, featuring authentication, filtering, and responsive design. Deployed on Netlify.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: theWildOasis,
    repo: "https://github.com/giorgidzebisashvili4/the-wild-oasis",
    demo: "https://the-wild-oasis-gdz.netlify.app/dashboard",
  },
  {
    id: "project-3",
    name: "worldWise",
    description:
      "A React-based app where users can log and map visited cities, categorized by location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: worldWise,
    repo: "https://github.com/giorgidzebisashvili4/worldwise",
    demo: "https://worldwise-gdz.netlify.app/",
  },
  {
    id: "project-4",
    name: "natour",
    description:
      "A tour application for user registration, allowing admins to manage tours and users to make reservations. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: natour,
    repo: "https://github.com/giorgidzebisashvili4/natours",
    demo: "https://",
  },
  // {
  //   id: "project-3",
  //   name: "Math Magicians",
  //   description: "This is a single-page calculator app built with React",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: math,
  //   repo: "https://github.com/shaqdeff/Math-Magicians",
  //   demo: "https://inspiring-medovik-37d3b3.netlify.app/",
  // },
  // {
  //   id: "project-4",
  //   name: "Movie Metro",
  //   description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: movie,
  //   repo: "https://github.com/shaqdeff/Movie-Metro",
  //   demo: "https://movie-metro.netlify.app/",
  // },
  // {
  //   id: "project-5",
  //   name: "Nyeusi Fest Site",
  //   description:
  //     "This is a demo concert website for a music festival called Nyeusi.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: "https://github.com/shaqdeff/Nyeusi-Fest-Site",
  //   demo: "https://shaqdeff.github.io/Nyeusi-Fest-Site/",
  // },
];

export { services, technologies, experiences, projects };
