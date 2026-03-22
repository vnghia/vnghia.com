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
    'A software engineer with a passion in selfhosting and science. I\'ve been working on writing software with high performance language such as C++ (at work) or Rust (my personal "Rewrite It In Rust" project). I am also building my own digital sovereignty with my homelab using an Infra-as-Code (IaC) approach that covers most of my digital needs. And finally, I am finding my way to the wonderful world of science!',
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
        "Full-featured monitoring solutions with OpenObserve and Grafana.",
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
    {
      name: "Dot",
      description:
        "Utility for managing dotfiles (config/shell/environment variable) written in Rust.",
      link: "https://github.com/vnghia/dot?ref=vnghia.com",
      bullets: [
        "Git-based approach enables easy backups and rollbacks any configuration.",
        "Ensuring consistency and ease of deployment across different systems or setups",
      ],
      skills: ["Rust", "Shell", "Linux", "Dotfile", "Configuration"],
    },
    {
      name: "GRPC support for google-cloud-cpp",
      description:
        "GRPC support for interacting with Google Cloud Storage (GCS) in google-cloud-cpp.",
      link: "https://github.com/googleapis/google-cloud-cpp/milestone/22",
      bullets: [
        "Built a GCS emulator with support for both REST and GRPC endpoints using Flask.",
        "Added client functions for GCS gRPC endpoints.",
      ],
      skills: [
        "GCP",
        "GCS",
        "REST",
        "GRPC",
        "Protobuf",
        "C++",
        "Python",
        "Flash",
      ],
    },
    {
      name: "Real-time video game character replacement",
      description:
        "Real-time video game character replacement without modding the game source code.",
      link: "https://static.vnghia.com/rtcr-report-vnghia.pdf",
      bullets: [
        "Tuned pose-detection algorithm with NVIDIA TensorRT.",
        "Developed a pipeline intergrating pose-detection and apperance replacement with OpenCV and PyTorch.",
      ],
      skills: ["C++", "NVIDIA TensorRT", "PyTorch", "OpenCV", "HPC"],
    },
    {
      name: "Risk process: the Cramér-Lundberg model",
      description: "Ruin probability of an insurance company.",
      link: "https://static.vnghia.com/poisson-report-vnghia.pdf",
      bullets: [
        "Studied include the Lundberg coefficient, the net profit condition, and the majoration of the ruin probability based on the Cramér-Lundberg model.",
        "Done extensive numerical experiments to verify the majoration of the ruin probability.",
      ],
      skills: [
        "Risk process",
        "Cramér-Lundberg model",
        "Ruin probability",
        "Assurance",
        "Finance",
      ],
    },
    {
      name: "Deep Image Prior",
      description:
        "Image restoration with randomly-initialized convolutional neural network.",
      link: "https://github.com/vnghia/deep-image-prior?ref=vnghia.com",
      bullets: [
        'Explored the idea behinds the paper "Deep Image Prior".',
        "Studied the effect of network architecture for multilple image restoration tasks.",
      ],
      skills: ["Image Processing", "PyTorch", "CNN"],
    },
    {
      name: "Analysis of Spotify database",
      description: "Descriptive analysis of Spotify database using R.",
      link: "https://github.com/vnghia/stat-3MIC?ref=vnghia.com",
      bullets: [
        "Performed comprehensive data analysis including univariate, bivariate, and Principal Component Analysis (PCA).",
        "Utilized R tidyverse for data engineering and manipulation.",
        "Designed and generated detailed visualizations using the ggplot2 package.",
      ],
      skills: ["Music", "R", "PCA", "ggplot2", "tidyverse"],
    },
  ],
  experience: [
    {
      company: "Amadeus",
      title: "C++ Backend Developer ",
      dateRange: "Aug 2024 - Present",
      bullets: [
        "Maintained and worked on high-performance hotel availability management system with C++, OracleDB, Couchbase and Kafka",
        "Monitored and supported live production environment with Splunk, Grafana and Promethus",
        "Modernized and cleaned up 15-years-old legacy codebases as well as internal Jenkins pipeline to speed up the pipeline by 60%",
      ],
      skills: ["C++", "Oracle SQL", "Kafka", "Couchbase"],
    },
    {
      company: "BioMérieux France ",
      title: "Machine Learning Devops",
      dateRange: "Apr 2023 - Oct 2023",
      bullets: [
        "Adopted terraform to manage and deploy infrastructure instead of manual effort.",
        "Deployed high-speed parallelized hyper-parameters tuning pipeline using AWS Step Function, Batch Job and ECS and ARM machine. Reduced training time and cost by 80%.",
        "Built a model to predict task memory consumption for better task scheduling and resources allocations.",
        "Implemented data visualization dashboard and reporting tools of training result for end-users.",
      ],
      skills: ["Terraform", "DevOps", "Machine Learning", "AWS", "R", "Python"],
    },
    {
      company: "Institut de Recherche en Informatique de Toulouse",
      title: "Research Assistant",
      dateRange: "Jun 2022 - Oct 2022",
      bullets: [
        "Studied about partially observable Markov decision process (POMDP) Reinforcement Learning in queuing theory.",
        "Implemented a high-speed queuing simulation in C++ and its Python binding using Eigen and Pybind11.",
        "Explored various reinforcement learning methods to solve the POMDP problem mathematically and numerically, including: Q-Learning, Deep Q Learning (DQN), Value Iteration.",
      ],
      skills: [
        "Reinforcement Learning",
        "Python",
        "C++",
        "Eigen",
        "HPC",
        "POMDP",
      ],
    },
    {
      company: "PacketAI",
      title: "DevOps Engineer",
      dateRange: "Jun 2021 - Dec 2021",
      bullets: [
        "Adopted terraform to manage and deploy infrastructure instead of manual effort.",
        "Implemented pipeline to test and deploy PacketAI agent to various cloud environment.",
        "Collected and built internal dashboard metrics with Influx DB and Grafana.",
      ],
      skills: ["AWS", "GCP", "Terraform", "Monitoring"],
    },
  ],
  education: [
    {
      school: "INSA Toulouse - National Institute of Applied Sciences Toulouse",
      degree: "Engineer Degree (Bac+5) in Applied Mathematics",
      dateRange: "2018 - 2023",
      achievements: [
        "Specialized in Applied Mathematics for Statistic and Artificial Intelligence.",
      ],
    },
    {
      school: "Le Quy Don High School for the Gifted",
      degree: "Baccalaureat",
      dateRange: "2015 - 2018",
      achievements: [
        "Specialized in Mathematics.",
        "Second Prize of Vietnam National Mathematical Olympiad (VMO) in 2018.",
        "Gold Medal of Hanoi University of Science Mathematical Olympiad in 2017.",
      ],
    },
  ],
};
