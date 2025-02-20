import Link from "next/link";
import { GitHubIcon, LinkedInIcon, XIcon } from "~/components/icons";
import profile from "@repo/data/profile";
import clients from "@repo/data/profile/clients";
import skills from "@repo/data/profile/skills";

export const RESUME_DATA = {
  name: profile.fullName,
  initials: profile.nickName,
  location: profile.location,
  locationLink: profile.locationLink,
  about: profile.about,
  summary: profile.summary,
  avatarUrl: "https://avatars.githubusercontent.com/u/4852235?v=4",
  personalWebsiteUrl: profile.website,
  contact: {
    email: profile.email,
    social: [
      {
        name: "GitHub",
        url: profile.urls.github,
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: profile.urls.linkedIn,
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: profile.urls.x,
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Waterloo",
      degree: "B.Math. Computational Mathematics and Statistics",
      start: "2012",
      end: "2017",
    },
  ],
  work: [
    {
      company: "567",
      link: "https://jxnl.github.io/blog/",
      badges: ["Consulting"],
      title: "Owner / Consultant",
      logo: "", // Add logo if available
      start: "2023",
      end: "Present",
      description:
        "Working with seed stage companies, helping founders with tech strategy, research, and infrastructure.",
    },
    {
      company: "South Park Commons",
      link: "https://www.southparkcommons.com/",
      badges: ["Sabbatical"],
      title: "Member",
      logo: "", // Add logo if available
      start: "2023",
      end: "Present",
      description:
        "Exploring LLM tooling around structured extraction and self-hosting. Launched Youtube University and developing Journal, an AI-powered journaling application.",
    },
    {
      company: "Stitchfix",
      link: "https://www.stitchfix.com/",
      badges: ["System"],
      title: "Staff ML Engineer",
      logo: "", // Add logo if available
      start: "2018",
      end: "2023",
      description: (
        <>
          <li>
            Designed Flight framework, improving reliability, scalability,
            adopted by over 80% of organization, servicing 350 million daily
            requests.{" "}
            <a href="https://newsroom.stitchfix.com/blog/your-shop-is-getting-an-update-shop-by-category-will-make-it-easier-to-discover-things-youll-love/">
              [1]
            </a>
          </li>
          <li>
            Led vision research, managed data acquisition, fine-tuned models,
            developed 300,000+ outfit dataset to power new Stitch Fix outfit
            recommender.
          </li>
          <li>
            Developed product similarity search with multi-modal embeddings,
            boosting revenue by over $50 million annually.{" "}
            <a href="https://newsroom.stitchfix.com/blog/how-we-understand-your-personal-style/">
              [2]
            </a>
          </li>
        </>
      ),
    },
    {
      company: "Facebook",
      link: "https://about.meta.com/actions/promoting-safety-and-expression/",
      badges: ["Data Science"],
      title: "Data Scientist",
      logo: "",
      start: "2017",
      end: "2017",
      description:
        "Created algorithms for identifying harmful content and developed dashboards to detect malicious activities.",
    },
    {
      company: "New York University",
      link: "https://www.nyu.edu/",
      badges: ["Research"],
      title: "Research Assistant",
      start: "2015",
      end: "2017",
      description:
        "Under Rumi Chunara, centered around public health and social media.",
      logo: "", // Path to NYU logo image
    },
  ],
  skills,
  projects: [
    {
      title: "Instructor",
      techStack: ["python", "llms", "structured extraction"],
      description:
        "Structured extraction for LLMS using Pydantic, Over 30k monthly downloads on PyPI.",
      link: {
        label: "Instructor",
        href: "https://jxnl.github.io/instructor/",
      },
    },
    {
      title: "Multimodal Search",
      techStack: ["Stitchfix", "pytorch", "representation learning", "search"],
      description:
        "Lead computer vision research, and embedding search system using multi-modal embeddings powered by image, text, and impression data.",
      link: {
        label: "Stylist Shuffle",
        href: "https://www.stitchfix.com/women/blog/inside-stitchfix/how-style-shuffle-works/",
      },
    },
    {
      title: "RecSys Framework",
      techStack: ["devops", "python", "orchestration", "observability"],
      description:
        "Designed and implemented Flight, a recommendation framework that improved system reliability and scalability, handling over 350 million daily requests.",
      link: {
        label: "Learn more about Flight at Stitchfix",
        href: "https://jxnl.github.io/blog/writing/2022/08/01/stitchfix-framework/",
      },
    },
    {
      title: "Journal",
      techStack: ["typescript", "prompt engineering"],
      description:
        "AI-powered journaling application with long-term memory and semantic search.",
      link: {
        label: "Journal",
        href: "http://usejournal.xyz",
      },
    },
  ],
  clients,
} as const;
