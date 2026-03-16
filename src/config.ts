export const siteConfig = {
  name: "Vo Van Nghia",
  title: "Software Engineer | Homelab Enthusiast | Wannabe Scientist",
  description: "Portfolio website of Vo Van Nghia",
  accentColor: "#1d4ed8",
  social: {
    email: null,
    linkedin: "https://linkedin.com/in/vnghia",
    twitter: null,
    github: "https://github.com/vnghia",
  },
  aboutMe:
    'A software engineer with a passion in selfhosting and science. I\'ve been working on writing software with high performance language such as C++ (at work) or Rust (my personal "Rewrite It In Rust" project). I am also building my own digital sovereignty with my homelab using an Infra-as-Code (IaC) approach that covers most of my digital needs. And finally, I am finding a way to contribute my effort to the wonderful world of science!',
  skills: [
    "HPC",
    "C++",
    "Rust",
    "Python",
    "DevOps",
    "Docker",
    "AWS",
    "Pulumi",
    "Terraform",
    "TensorFlow",
  ],
  projects: [
    {
      name: "Nghe",
      description:
        "A music management and streaming backend with in-memory transcoding written in Rust",
      link: "https://github.com/vnghia/nghe?ref=vnghia.com",
      bullets: [
        "Build with performance in mind while keeping memory safety thanks to Rust.",
        "Automated pipeline to build Docker image and binaries for MacOS, Linux, FreeBSD and Windows.",
        "Integrate directly ffmpeg C api for fast in-memory transcoding with no temporary file required.",
        "Maintain strict code quality with clippy pedantic profile and 80% code coverage.",
        "Integrate S3-compatible storages support streaming from cloud storage.",
      ],
      skills: ["Rust", "Music", "Streaming", "Axum", "Ffmpeg", "AWS"],
    },
    {
      name: "Homelab",
      description:
        "A docker compose/docker swarm reimplementation with IaC philosophy.",
      link: "https://github.com/vnghia/homelab?ref=vnghia.com",
      bullets: [
        "Build with Python and Pulumi to leverage the consistency and reproducibility of IaC with the flexibility of Python.",
        "Provide alternatives for popular cloud services: Google Meet, Google Drive/Icloud, Spotify, Netflix, Google Photo/Icloud Photo, Notion, Apple Home and much more.",
        "Integrate traefik as reverse proxy with DDOS and bot protection via Crowdsec.",
        "Remotely access for private routes via Wireguard-based VPN Tailscale.",
        "Integrate barman for point-in-time database backup and restic for file-based backup to offsite cloud storage.",
        "Multi-hosts support and custom config format for full-featured service declaration.",
      ],
      skills: ["DevOps", "IaC", "Pulumi", "AWS", "Python", "Docker"],
    },
    {
      name: "TensorFlow - Google Summer of Code 2020",
      description:
        'Cloud filesystem plugins for "Modular Filesystems C API" RFC.',
      link: "https://summerofcode.withgoogle.com/archive/2020/projects/5669113902399488",
      bullets: [
        "Extracted the current filesystem (S3, GCS, Apache Hadoop) implementations from TensorFlow Core to modular plugins.",
        "Added filesystem supports for Windows (previously only on MacOS and Linux).",
        "Gained experience on teamwork and the way of working in big open-source software project.",
      ],
      skills: [
        "S3",
        "GCS",
        "Hadoop",
        "TensorFlow",
        "C",
        "C++",
        "Bazel",
        "Python",
      ],
    },
  ],
  experience: [
    {
      company: "Tech Company",
      title: "Senior Software Engineer",
      dateRange: "Jan 2022 - Present",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "Startup Inc",
      title: "Full Stack Developer",
      dateRange: "Jun 2020 - Dec 2021",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      company: "Digital Agency",
      title: "Frontend Developer",
      dateRange: "Aug 2018 - May 2020",
      bullets: [
        "Developed responsive web applications for 20+ clients",
        "Improved site performance scores by 35% on average",
        "Introduced modern JavaScript frameworks to legacy codebases",
      ],
    },
  ],
  education: [
    {
      school: "University Name",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2014 - 2018",
      achievements: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "Dean's List all semesters",
        "President of Computer Science Club",
      ],
    },
    {
      school: "Online Platform",
      degree: "Full Stack Development Certificate",
      dateRange: "2019",
      achievements: [
        "Completed 500+ hours of coursework",
        "Built 10+ portfolio projects",
        "Specialized in React and Node.js",
      ],
    },
  ],
};
