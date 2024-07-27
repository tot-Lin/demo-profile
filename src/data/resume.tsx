import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Lin Feng",
  initials: "Feng",
  url: "https://jet-lab.site",
  location: "Beijing, China",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "A seeker of visual aesthetics🛰️I'm focusing on deep learning. ",
  summary:`I'm currently learning Remote sensing , Deep learning , Pytorch , and InSAR.`,
  avatarUrl: "https://avatars.githubusercontent.com/u/83146544?v=4",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Pytorch",
    "Tensorflow",
  ],
  contact: {
    email: "hello@example.com",
    tel: "",  // 不填就不显示
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/inannan423",
        icon: Icons.github,

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
  news: [
    {
      date: "2023-09-01",
      title: "I'm successfully accepted by the Beijing Forestry University.Beijing Forestry University.",
    },
    {
      date: "2024-01-01",
      title: "My first paper is published on arXiv.",
    },
  ],
  work: [
    // {
    //   company: "Atomic Finance",
    //   href: "https://atomic.finance",
    //   badges: [],
    //   location: "Remote",
    //   title: "Bitcoin Protocol Engineer",
    //   logoUrl: "/atomic.png",
    //   start: "May 2021",
    //   end: "Oct 2022",
    //   description:
    //     "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    // },
  ],
  education: [
    {
      school: "Peking University",
      href: "https://www.pku.edu.cn/",
      // 计算机科学硕士学位
      degree: "Phd's Degree in Geographic",
      logoUrl: "/pku.svg",
      start: "2024",
      end: "Now",
    },
    {
      school: "Beijing Forestry University",
      href: "https://www.bjfu.edu.cn/",
      degree: "BASc in Computer Science",
      logoUrl: "/bjfu.svg",
      start: "2020",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "A Fast Detection Method of Break Points in Effective Connectivity Networks",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      author: "Peiliang Bai, Abolfazl Safikhani, George Michailidis",
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Paper",
          href: "https://arxiv.org/abs/2109.14769",
          icon: <Icons.arxiv className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      author: "Peiliang Bai, Abolfazl Safikhani, George Michailidis",
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Paper",
          href: "https://arxiv.org/abs/2109.14769",
          icon: <Icons.arxiv className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      author: "Peiliang Bai, Abolfazl Safikhani, George Michailidis",
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Paper",
          href: "https://arxiv.org/abs/2109.14769",
          icon: <Icons.arxiv className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      author: "Peiliang Bai, Abolfazl Safikhani, George Michailidis",
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Paper",
          href: "https://arxiv.org/abs/2109.14769",
          icon: <Icons.arxiv className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    // {
    //   title: "Hack Western 5",
    //   dates: "November 23rd - 25th, 2018",
    //   location: "London, Ontario",
    //   description:
    //     "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    //   links: [],
    // },
  ],
} as const;
