const profile = {
  name: "Bola Shankar Velidi",
  initials: "BSV",
  title: "Firmware Test Engineer & Full Stack Developer",
  bio: "B.Tech ECE graduate with hands-on experience in firmware testing, embedded systems, and full stack web development. Passionate about IoT, automation, and building impactful solutions from hardware to web.",
  email: "velidibolashankar@gmail.com",
  linkedin: "https://www.linkedin.com/in/velidibolashankar",
  github: "https://github.com/BOLASHANKARVELIDI",
  location: "Chinnaganjam, Bapatla, Andhra Pradesh, India",

  stats: [
    { value: "7+", label: "Months Experience" },
    { value: "6+", label: "Projects Built" },
    { value: "5+", label: "Certifications" },
    { value: "8.52", label: "B.Tech CGPA" },
  ],

  experience: [
    {
      id: 1,
      role: "Firmware Test Engineer",
      company: "KAZAM EV Tech",
      type: "Full-time",
      period: "2024 – Present",
      location: "Remote / Hybrid",
      current: true,
      description: [
        "Developing C/C++ unit tests for ESP32-based EV charging firmware",
        "Testing WiFi, GSM module communications and energy meter integrations",
        "Building a serial monitor web tool for real-time EV transaction tracking",
        "Writing test suites using CMake build system and Unity test framework",
        "Debugging hardware-software integration issues across EV charging modules",
      ],
      skills: ["C", "C++", "ESP32", "CMake", "Unit Testing", "WiFi", "GSM", "JavaScript"],
    },
  ],

  skills: {
    Languages: ["C", "C++", "Java", "Python", "JavaScript", "SQL"],
    Frontend: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
    "Backend & DB": ["Node.js", "Spring Boot", "MySQL", "Firebase", "REST APIs", "JDBC"],
    "IoT & Embedded": ["Arduino", "ESP32", "Raspberry Pi", "Proteus", "Embedded C", "Arduino IDE"],
    "Tools & DevOps": ["Git", "GitHub", "VS Code", "Eclipse IDE", "Postman", "CMake"],
  },

  projects: [
    {
      id: 1,
      title: "Serial Monitor for EV Transactions",
      description:
        "A web-based and Windows serial port monitor for real-time EV charging transaction tracking. Reads and displays live data from EV hardware over serial ports.",
      tech: ["JavaScript", "Node.js", "SerialPort API", "HTML", "CSS"],
      category: "Firmware",
      status: "Ongoing",
      github: null,
      demo: null,
      featured: true,
    },
    {
      id: 2,
      title: "KAZAM – C/C++ Unit Testing Suite",
      description:
        "Comprehensive unit testing framework for ESP32-based EV charging firmware. Tests cover WiFi, GSM, and energy meter modules using CMake and Unity test framework.",
      tech: ["C", "C++", "ESP32", "CMake", "Unity Framework", "GSM"],
      category: "Firmware",
      status: "Ongoing",
      github: null,
      demo: null,
      featured: true,
    },
    {
      id: 3,
      title: "Employee Management System",
      description:
        "Full-stack CRUD application with React frontend and Spring Boot backend. Features JWT authentication, role-based access control, and MySQL database integration.",
      tech: ["React", "Spring Boot", "MySQL", "REST APIs", "Java"],
      category: "Full Stack",
      status: "Completed",
      github: "https://github.com/BOLASHANKARVELIDI",
      demo: null,
      year: "2024",
      featured: true,
    },
    {
      id: 4,
      title: "Java Banking Application",
      description:
        "Console-based banking system supporting account creation, deposits, withdrawals, transfers, and full transaction history using JDBC and MySQL.",
      tech: ["Java", "JDBC", "MySQL", "OOP"],
      category: "Backend",
      status: "Completed",
      github: "https://github.com/BOLASHANKARVELIDI",
      demo: null,
      year: "July 2024",
    },
    {
      id: 5,
      title: "Fish Weighing & Counting System",
      description:
        "Automated IoT system using load cell sensors and IR counters to accurately weigh and count fish, reducing manual labor in fishing operations.",
      tech: ["Arduino", "C", "Load Cell", "IR Sensors", "LCD Display"],
      category: "IoT",
      status: "Completed",
      year: "2023",
    },
    {
      id: 6,
      title: "Smart Agriculture System",
      description:
        "IoT-based precision farming solution with soil moisture sensors, automated irrigation control, and crop health monitoring via a web dashboard.",
      tech: ["Arduino", "Raspberry Pi", "IoT", "Sensors", "Python"],
      category: "IoT",
      status: "Completed",
      year: "2023",
    },
  ],

  education: [
    {
      id: 1,
      degree: "B.Tech – Electronics & Communication Engineering",
      institution: "QIS College of Engineering and Technology",
      university: "JNTU Kakinada",
      period: "2020 – 2024",
      score: "CGPA: 8.52",
      highlights: [
        "Team Leader – Automatic Computation of Electronic Formulas project",
        "Focus on IoT, Embedded Systems & Signal Processing",
      ],
    },
    {
      id: 2,
      degree: "Intermediate (MPC)",
      institution: "Sri Chaitanya Junior College",
      period: "2018 – 2020",
      score: "96.1%",
      highlights: [],
    },
    {
      id: 3,
      degree: "SSC (10th Grade)",
      institution: "Nivedita EM High School",
      period: "2018",
      score: "CGPA: 9.7",
      highlights: [],
    },
  ],

  certifications: [
    { id: 1, title: "Java Foundation", issuer: "Infosys Springboard", year: "2024", type: "certification" },
    { id: 2, title: "Java Programming", issuer: "HackerRank", year: "2024", type: "certification" },
    { id: 3, title: "CSS & JavaScript", issuer: "Udemy", year: "2023", type: "certification" },
    { id: 4, title: "Embedded Systems", issuer: "Course Certification", year: "2023", type: "certification" },
    { id: 5, title: "YESIST12 Finalist", issuer: "IEEE", year: "2023", type: "achievement" },
    { id: 6, title: "FlatFarm App Copyright", issuer: "Government of India", year: "2023", type: "achievement" },
  ],
};

export default profile;
