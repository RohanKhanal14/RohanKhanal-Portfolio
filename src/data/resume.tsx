import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Rohan Khanal",
  initials: "DV",
  url: "https://dillion.io",
  location: "Dharan - 14, Sunsari, Nepal",
  // locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Developer diving into the world of DevOps. Passionate about building applications.",
  summary:
    "As a software developer, I’ve built dynamic web applications with the MERN stack and Next.js. Now, I’m diving into DevOps, exploring tools like Docker, Kubernetes, and CI/CD pipelines. Along the way, I’ve organized workshops and competed in hackathons, focusing on real-world impact. My goal is to bridge development and operations, creating scalable systems while growing as a developer and DevOps engineer.",
  avatarUrl: "/me.webp",
  skills: ["React", "Next.js", "Typescript", "Node.js", "Python", "Docker"],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "rohankhanal14r@gmail.com",
    tel: "9842704555",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/RohanKhanal14",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rohan-khanal-ba6823274/n",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/RohanKhana76032",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  // work: [
  //   {
  //     company: "Atomic Finance",
  //     href: "https://atomic.finance",
  //     badges: [],
  //     location: "Remote",
  //     title: "Bitcoin Protocol Engineer",
  //     logoUrl: "/atomic.png",
  //     start: "May 2021",
  //     end: "Oct 2022",
  //     description:
  //       "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
  //   },
  //   {
  //     company: "Shopify",
  //     badges: [],
  //     href: "https://shopify.com",
  //     location: "Remote",
  //     title: "Software Engineer",
  //     logoUrl: "/shopify.svg",
  //     start: "January 2021",
  //     end: "April 2021",
  //     description:
  //       "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
  //   },
  //   {
  //     company: "Nvidia",
  //     href: "https://nvidia.com/",
  //     badges: [],
  //     location: "Santa Clara, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/nvidia.png",
  //     start: "January 2020",
  //     end: "April 2020",
  //     description:
  //       "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
  //   },
  //   {
  //     company: "Splunk",
  //     href: "https://splunk.com",
  //     badges: [],
  //     location: "San Jose, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/splunk.svg",
  //     start: "January 2019",
  //     end: "April 2019",
  //     description:
  //       "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
  //   },
  //   {
  //     company: "Lime",
  //     href: "https://li.me/",
  //     badges: [],
  //     location: "San Francisco, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/lime.svg",
  //     start: "January 2018",
  //     end: "April 2018",
  //     description:
  //       "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
  //   },
  //   {
  //     company: "Mitre Media",
  //     href: "https://mitremedia.com/",
  //     badges: [],
  //     location: "Toronto, ON",
  //     title: "Software Engineer",
  //     logoUrl: "/mitremedia.png",
  //     start: "May 2017",
  //     end: "August 2017",
  //     description:
  //       "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
  //   },
  // ],

  education: [
    {
      school: "Tribhuvan University",
      href: "https://tu.edu.np/",
      degree:
        "Bachelor's Degree of Computer Science and Information Technology (BSc.CSIT)",
      logoUrl: "/TULogo.webp",
      start: "2022",
      end: "Present",
    },
  ],

  projects: [
    {
      title: "UCS - Union of CSIT Students",
      href: "https://ucs-xi.vercel.app/",
      dates: "January 2025 ",
      active: true,
      description:
        "Created a website for the Union of CSIT Students, a student organization at the Central Campus of Technology, affiliated with Tribhuvan University. The website includes a event updates, and a photo gallery",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Aceternity UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/RohanKhanal14/ucs-official-website",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project1.png",
      video: "",
    },
    {
      title: "Travel Blog",
      href: "https://github.com/RohanKhanal14/mernapp_CICD",
      dates: "october 2024",
      active: true,
      description:
        "Built a MERN-based travel blog website with CI/CD automation via Jenkins. Features include user authentication, dynamic content, a photo gallery, and seamless deployment for a reliable and engaging user experience.",

      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "TailwindCSS",
        "Jenkins",
        "Docker",
        "Kubernetes",
        "Terraform",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/RohanKhanal14/mernapp_CICD",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project2.png",
      video: "",
    },
  ],

  hackathons: [
    {
      title: "ACES TECHFEST 7.0 ( Winner )",
      dates: "December 11th - 14th, 2024",
      location: "Dharan -14, Nepal",
      description:
        "Developed Sahara, a web application enabling live ambulance tracking and seamless coordination among ambulances, hospitals, and patients. The app ensures efficient communication and faster response times, earning us first place in the hackathon",
      image: "/aces.webp",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/aces-erc/aces_techfest_hackathon_v7_mind_forge",
        },
      ],
    },
    {
      title: "IIC QUEST 2024",
      dates: "June 14th - 12th, 2024",
      location: "Ithari, Nepal",
      description:
        "Developed a mental health-focused web app during IIC QUEST Fest. Built with Next.js, the app offers resources, self-assessment tools, and anonymous support for students.",
      image: "https://iic.edu.np/image/news-and-events-inner/iic-logo-sm.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/RohanKhanal14/teamcct_iicquest",
        },
      ],
    },
    {
      title: "Dristi 3.0",
      dates: "January 9th - 11th, 2025",
      location: "Kalimati, Kathmandu",
      description:
        "Developed Emergenix, a comprehensive emergency services web app that allows users to contact ambulances, fire brigades, and police as needed. Key features include real-time location sharing, triage tools, personalized hospital recommendations, and an SOS button for instant multi-agency notifications and coordination.",
      icon: "public",
      image: "/dristi.webp",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/kecitclub/mindForge",
        },
      ],
    },
  ],
} as const;
