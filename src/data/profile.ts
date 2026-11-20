export interface Project {
  title: string;
  problem: string;
  role: string;
  outcome: string;
  stack: string[];
  links: {
    label: string;
    url: string;
  }[];
}

export interface ProfileData {
  name: string;
  profileImage: string;
  title: string;
  valueProposition: string;
  about: string;
  phone: string;
  coreSkills: {
    backend: string[];
    frontend: string[];
    data: string[];
    cloud: string[];
    architecture: string[];
    ai: string[];
  };
  experience: {
    role: string;
    company: string;
    dates: string;
    bullets: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    year: string;
    detail?: string;
    note?: string;
  }[];
  featuredProjects: Project[];
  achievements: {
    title: string;
    subtitle: string;
    url: string;
  }[];
  blogs: {
    title: string;
    description: string;
    url: string;
  }[];
  links: {
    github: string;
    linkedin: string;
    email: string;
    resume: string;
    devto: string;
    stackoverflow: string;
    codepen: string;
    pexels: string;
    medium: string;
    instagram: string;
    steam: string;
    credly: string;
    awsCommunity: string;
  };
}

export const profileData: ProfileData = {
  name: "Kaustubh Joshi",
  profileImage: "/profile-photo.jpg",
  title: "Full-Stack Software Engineer",
  valueProposition: "An experienced and resourceful full-stack software engineer, I use the tools and resources at my disposal to create systems that save time.",
  about: "I am a full-stack software engineer focused on end-to-end application development, upgrading traditional functionality, and integrating cloud and DevOps services for better security and faster results.",
  coreSkills: {
    backend: ["DotNet", "Java", "Python"],
    frontend: ["HTML5", "CSS3", "Sass", "JavaScript", "Angular"],
    data: ["SQL", "MongoDB"],
    cloud: ["AWS", "GCP", "DevOps"],
    architecture: ["Full-Stack Development", "Leadership", "Security"],
    ai: ["Problem Solving", "Innovation"]
  },
  phone: "+91-9284901709",
  experience: [
    {
      role: "SSE2",
      company: "First American India",
      dates: "September 2026 - Present",
      bullets: [
        "Working as a Senior Software Engineer in an enterprise software environment"
      ]
    },
    {
      role: "Lead Developer",
      company: "John Deere India Pvt Ltd",
      dates: "2023 - September 2026",
      bullets: [
        "Led the web portfolio for one of John Deere's worldwide engagements"
      ]
    },
    {
      role: "Senior Engineer",
      company: "John Deere India Pvt Ltd",
      dates: "2021 - 2023",
      bullets: [
        "Developed end-to-end intelligent solutions that save time"
      ]
    },
    {
      role: "Analyst - Full Stack Developer",
      company: "IKS Health",
      dates: "2020 - 2021",
      bullets: [
        "Handled healthcare products with large data sets and turned the data into operational insights",
        "Developed solutions across a range of challenging business requirements using current technologies",
        "Produced and maintained solutions for high availability and throughput"
      ]
    }
  ],
  education: [
    {
      degree: "PG-DAC: Diploma in Advanced Computing",
      institution: "C-DAC: Center For Development of Advanced Computing, India",
      year: "2019 - 2020",
      detail: "Completed the program with Grade A",
      note: "Ranked top 10 in the program"
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Pune University",
      year: "2013 - 2017",
      detail: "First Class With Distinction",
      note: "Interaction with Dr. Mashelkar and Dr. Kakodkar in 2018"
    }
  ],
  featuredProjects: [],
  achievements: [
    {
      title: "AWS Certified Solutions Architect – Associate",
      subtitle: "Amazon Web Services • SAA-C03",
      url: "https://www.credly.com/badges/1390df60-7586-46a9-a5f1-e1bd699774fa"
    },
    {
      title: "AWS Certified AI Practitioner",
      subtitle: "Amazon Web Services • AIF-C01",
      url: "https://www.credly.com/badges/41d5f061-1ac1-43f5-b811-c044de2cea93"
    },
    {
      title: "Smart India Hackathon 2017 Winner",
      subtitle: "Winner at Hubli, Karnataka under the Department of AYUSH, India",
      url: "https://drive.google.com/file/d/1G2Vxba57U6lfMzrlvIKdhb-VGJcHSUZB/view?usp=sharing"
    },
    {
      title: "Legacy JavaScript Algorithms and Data Structures",
      subtitle: "FreeCodeCamp Certificate",
      url: "https://www.freecodecamp.org/certification/elpidaguy/javascript-algorithms-and-data-structures"
    },
    {
      title: "Security Aware",
      subtitle: "Secure Code Warrior",
      url: "https://portal.securecodewarrior.com/#/stats/63edb997de03d50dc71f3b4a"
    }
  ],
  blogs: [
    {
      title: "Hello, I'm HTTP and these are my request methods",
      description: "Understand HTTP in a clearer and simpler way.",
      url: "https://dev.to/elpidaguy/hello-i-m-http-and-these-are-my-request-methods-co"
    },
    {
      title: "How to Bulk Upload CSV file data into MySQL Table",
      description: "Use LOAD DATA LOCAL to upload CSV data quickly and directly through a program.",
      url: "https://elpidaguy.medium.com/how-to-bulk-upload-csv-file-data-into-mysql-table-very-fast-way-using-load-data-statement-e3685890a568"
    },
    {
      title: "Creating a Dot Net Core 3.1 WebAPI with OpenAPI",
      description: "Document DotNet Core 3.1 Web APIs with Swagger UI.",
      url: "https://elpidaguy.medium.com/creating-a-dot-net-core-3-1-webapi-with-openapi-swagger-ui-using-cli-on-vs-code-76a142505b33"
    }
  ],
  links: {
    github: "https://github.com/elpidaguy",
    linkedin: "https://in.linkedin.com/in/kaustubh-joshi-5432b4111",
    email: "kaustubh.joshi136@gmail.com",
    resume: "/resume.pdf",
    devto: "https://dev.to/elpidaguy",
    stackoverflow: "https://stackoverflow.com/users/9144250/elpidaguy",
    codepen: "https://codepen.io/elpidaguy",
    pexels: "https://www.pexels.com/@kaustubh-joshi-2251623",
    medium: "https://elpidaguy.medium.com",
    instagram: "https://instagram.com/elpidaguy_",
    steam: "https://steamcommunity.com/id/elpidaguy/",
    credly: "https://www.credly.com/users/kaustubh-joshi.9329d907",
    awsCommunity: "https://builder.aws.com/community/@kaustubhjoshi"
  }
};