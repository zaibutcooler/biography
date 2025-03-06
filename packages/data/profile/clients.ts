export interface Clients {
  title: string;
  techStack: string[];
  description: string;
  link: {
    label: string;
    href: string;
  };
  resume: boolean;
  pin: boolean;
  logo: string;
}

const clients: Clients[] = [
  {
    title: "Greenlight",
    techStack: ["full-stack", "erb", "pwa"],
    description:
      "Biggest private school in the region. Worked for a PWA for entire school management system including payments, grading, staffs, accounts and many more.",
    link: {
      label: "greenlightedu.vercel.app",
      href: "http://greenlightedu.vercel.app",
    },
    pin: false,
    resume: true,
    logo: "",
  },
  {
    title: "Aspora",
    techStack: ["next.js", "postgresql"],
    description:
      "Worked for a project named Aspora where we reverse the process of recruitment and job-seeking.",
    link: {
      label: "aspora.io",
      href: "https://app.aspora.io",
    },
    pin: false,
    resume: true,
    logo: "",
  },
  {
    title: "Atif",
    techStack: ["pytorch", "lightning-ai", "transformers", "gpt"],
    description:
      "Help developing an image encoder-decoder model for Piping and instrumentation diagram (P&ID) diagrams which is the heart of Chemical Engineering.",
    link: {
      label: "#",
      href: "#",
    },
    pin: false,
    resume: true,
    logo: "",
  },
  {
    title: "Resonant",
    techStack: ["react-native", "ruby on rails", "nextjs", "aws"],
    description:
      "Made a mobile app(react-native) and a server(ruby on rails) to revolutionize the way artists, venues and audiences connect.",
    link: {
      label: "resonant-app.com",
      href: "https://resonant-app.com",
    },
    pin: false,
    resume: true,
    logo: "",
  },
  {
    title: "Shwe Pyi Construction",
    techStack: ["tauri", "react"],
    description:
      "Made a basic desktop app to manage supply chain and employee(labour) data.",
    link: {
      label: "#",
      href: "#",
    },
    pin: false,
    resume: true,
    logo: "",
  },
];

export default clients;
