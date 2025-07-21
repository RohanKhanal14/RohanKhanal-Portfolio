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
  skills: ["React", "Next.js", "Typescript", "Node.js", "Python", "TailwindCSS", "Shadcn UI", "Firebase", "MongoDB", "Express.js", "Git", "Jenkins", "AWS", "Linux","Docker","Kubernetes", "CI/CD", "Grafana", "Prometheus"],
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

  work: [
    {
      company: "Gloosy",
      href: "https://gloosy.com/",
      badges: [],
      location: "Freelance",
      title: "Full Stack Developer",
      logoUrl: "/gloosy.webp",
      start: "July 2025",
      end: "August 2025",
      description:
        "Worked on various projects as a Full Stack Developer, utilizing technologies like Next.js, Firebase, Node.js, and Docker to deliver high-quality web applications.",
    },
    {
      company: "Jessy Clio",
      href: "https://jessyclio.com/",
      badges: [],
      location: "Freelance",
      title: "Full Stack Developer",
      logoUrl: "/jessyclio.webp",
      start: "January 2025",
      end: "February 2025",
      description:
        "Developed a full-stack application using Next.js and Node.js, including a custom-built admin portal, and successfully deployed the solution on an AWS EC2 instance.",
    },
    {
      company: "CODEIT",
      href: "https://codeit.com.np",
      badges: [],
      location: "Remote",
      title: "DevOps Instructor",
      logoUrl: "/codeit.png",
      start: "July 2025",
      end: "August 2025",
      description:
        "Conducted a comprehensive DevOps course at CODEIT, covering Docker, Kubernetes, CI/CD, and Terraform. Guided students through hands-on projects, enhancing their skills in modern software development practices.",
    },
  ],

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
          href: "https://ucs-xi.vercel.app/",
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
    {
      title: "Brain Tumor Classification",
      href: "https://brain-tumor-classification-deeplear-black.vercel.app/",
      dates: "May 2025",
      active: true,
      description:
        "Developed a deep learning model for brain tumor classification using MRI images. The project involved data preprocessing, model training, and evaluation to achieve high accuracy in tumor detection.",

      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "TailwindCSS",
        "Python",
        "TensorFlow",
        "Keras",
      ],
      links: [
        {
          type: "Website",
          href: "https://ucs-xi.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/RohanKhanal14/Brain-tumor-classification-deeplearning.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project3.png",
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
