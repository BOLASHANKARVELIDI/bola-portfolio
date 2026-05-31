const profile = {
  name: "Bola Shankar Velidi",
  initials: "BSV",
  title: "Junior Embedded Systems Engineer",
  bio: "Embedded systems engineer with 18 months of experience at KAZAM EV Tech — focused on ESP32/ESP-IDF firmware testing, OCPP 1.6 compliance, embedded security, and building internal automation tools for EV charging systems.",
  email: "velidibolashankar@gmail.com",
  linkedin: "https://www.linkedin.com/in/velidibolashankar",
  github: "https://github.com/BOLASHANKARVELIDI",
  location: "Bangalore, India",
  phone: "+91-7780190077",

  stats: [
    { value: "18", label: "Months Experience" },
    { value: "15+", label: "Projects Built" },
    { value: "10+", label: "Certifications" },
    { value: "8.52", label: "B.Tech CGPA" },
  ],

  experience: [
    {
      id: 1,
      role: "Jr Embedded Systems Engineer",
      company: "KAZAM EV Tech Pvt. Ltd.",
      type: "Full-time",
      period: "Jun 2025 – Present",
      location: "Bangalore, India",
      current: true,
      description: [
        // Removed: "Promoted from Firmware Test Engineer; leading embedded systems development for ESP32/ESP-IDF EV charging firmware across 10+ OEM clients" — code developed by the team, not solely by me
        "Implemented ESP32 Secure Boot V2 (ECDSA RSA-2048) + AES-XTS Flash Encryption + NVS Encryption + BLE AES Encryption for TVS LEVDC EV charger production using esptool, espsecure, and espefuse for eFuse programming",
        "Building FAT (Firmware Automation Tool) — Electron + TypeScript desktop app with OCPP/KCPP test case management, USB-CAN-B CAN driver integration, Supabase backend, and SerialPort for live firmware interaction",
        "Designed FATT (Firmware Application Testing Tool) — 13-relay Auxiliary Board hardware rig simulating Control Pilot states (Phase, Neutral, Earth, RCD, UV/OV, Emergency, Door Lock) with ESP32 UART/BLE command firmware",
        "Developed V2G / ISO 15119 (Vehicle-to-Grid) implementation using RISE-V2G Java stack (EVCC + SECC modules), built PKI certificate chain, and integrated ESP32 Control Pilot PWM signal with Raspberry Pi 5 + ADS1115 ADC",
        // Removed: "Developed and validated 15+ CAN DBC files for Indian EV OEMs" — CAN DBC files were analyzed/studied, not created/validated by me
        "Designed STM32G030 test jig firmware for 7.4KW charger production board testing (OLED, ADC, I2C, UART, JSMN JSON, device state machine); performed PCB schematic review for New Controller Card",
        "On-site field testing at Delta facility, TVS Hosur Plant, TUV SUD IP lab, and ARAI-specified regulatory test environments",
      ],
      skills: [
        "C", "C++", "ESP-IDF v5.4", "ESP32", "STM32", "CMake", "FreeRTOS",
        "OCPP 1.6/2.0.1", "KCPP (MQTT)", "CAN Bus", "BLE (NimBLE)",
        "Secure Boot V2", "Flash Encryption", "V2G / ISO 15119",
        "TypeScript", "Electron", "Python", "BUSMASTER", "esptool",
      ],
    },
    {
      id: 2,
      role: "Firmware Test Engineer",
      company: "KAZAM EV Tech Pvt. Ltd.",
      type: "Full-time",
      period: "Nov 2024 – May 2025",
      location: "Bangalore, India",
      current: false,
      description: [
        "Firmware testing for ESP32/ESP-IDF OCPP 1.6 EV chargers (LEVAC 3.3KW, 7.4KW; LEVDC DC) — wrote OCPP compliance checklists, test case documents, and bug reports in Jira",
        "Tested OCPP features: RFID authentication, FOTA OTA updates, energy metering (M90E26), smart charging duty cycle, RCD/earth fault/UV/OV fault injection, offline transaction handling, LittleFS storage verification",
        "Built Production Test (PT) Tool for factory-line firmware flashing and FCT/EOL testing; automated charge-cycle testing via Python scripts and HTTP commands",
        "Analyzed serial logs, OCPP message flows, and crash logs across 15+ firmware versions (LEVAC 34.x, 44.x; LEVDC 35.x) for SIM800 (2G GSM) and L510 (4G LTE) variants",
        "Studied TDD for Embedded C, implemented Unity framework unit tests with ESP-IDF hardware-in-loop; explored Ceedling and Google Test frameworks",
        "Debugged CAN bus wiring issues (CAN-H/CAN-L swaps, transceiver mis-connections) for multiple charger integrations",
      ],
      skills: [
        "C", "C++", "ESP-IDF", "ESP32", "OCPP 1.6", "CMake",
        "Unity Framework", "TDD", "Python", "CAN Bus", "BUSMASTER",
        "Jira", "esptool", "Serial Debugging",
      ],
    },
    {
      id: 3,
      role: "Data Science Intern",
      company: "BrainOvision Solutions Pvt. Ltd.",
      type: "Internship",
      period: "May 2023 – Jun 2023",
      location: "India (Remote)",
      current: false,
      description: [
        "Completed data science projects and assignments over a 1-month internship program",
        "Applied Python libraries (Pandas, NumPy, Matplotlib) for basic data analysis and visualization tasks",
        "Recognized as punctual, hardworking, and a quick learner by the Founder & CEO",
      ],
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Data Analysis"],
    },
  ],

  skills: {
    Languages: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript", "SQL"],

    Frontend: ["React", "Next.js", "Electron", "HTML5", "CSS3", "Tailwind CSS"],

    "Backend & DB": [
      "Node.js",
      // "Spring Boot",  // learned basics, not production-level yet
      "MySQL",
      // "Firebase",     // not used significantly
      // "Supabase",     // used via FAT tool, not independently mastered
      // "REST APIs",    // aware of concepts, not independently built
      "JDBC",
      "MQTT",
    ],

    "Firmware & Embedded": [
      "ESP32", "ESP-IDF v5.4", "STM32 (G0/L1)", "Arduino IDE", "PlatformIO",
      "LittleFS", "FAT Filesystem", "NVS", "FOTA", "FreeRTOS", "Embedded C",
      // "ESP-Matter",  // briefly explored, not fully implemented
    ],

    Security: [
      "Secure Boot V2", "Flash Encryption (AES-XTS)", "NVS Encryption",
      "BLE AES Encryption", "esptool", "espsecure", "espefuse",
      // "X.509 PKI",  // used in V2G project context, not independently mastered
    ],

    Protocols: [
      "OCPP 1.6 / 2.0.1", "KCPP (MQTT)", "BLE (NimBLE)", "CAN Bus (TWAI)",
      "GSM (SIM800)", "LTE (L510)", "NFC (PN532/PN7160)",
      "WebSocket", "I2C", "UART", "SPI", "RS485", "HTTP/HTTPS",
    ],

    "EV Standards": [
      "IS 17017", "ISO 15119 (V2G)", "REBUS Protocol", "DBC Format",
    ],

    Testing: [
      "Unity Framework", "Ceedling", "PlatformIO Testing",
      "TDD (Embedded)", "OCPP Compliance Testing", "HIL Testing", "ARAI / TUV Testing",
      // "CANTATA",  // studied, not actively used
    ],

    "Tools & DevOps": [
      "Git", "GitHub", "Jira", "VS Code", "STM32CubeIDE", "BUSMASTER v3.2.2",
      "Bruno", "Postman", "Docklight", "CMake", "USB-CAN-B Analyzer",
      // "Code Sonar",  // not yet used
    ],

    // "Data Science": ["Pandas", "NumPy", "Matplotlib", "Data Analysis", "ML Basics", "LabVIEW"],
    // Commented: Done a 1-month online internship only; basics covered, not actively used since.
  },

  projects: [
    {
      id: 1,
      title: "FAT – Firmware Automation Tool",
      description:
        "Electron + TypeScript desktop application for automated EV charger firmware testing. Features OCPP/KCPP test case management, USB-CAN-B CAN bus driver integration, Supabase backend for test results, and SerialPort for real-time firmware interaction.",
      tech: ["Electron", "TypeScript", "Vite", "Tailwind CSS", "SerialPort", "CAN Bus", "OCPP", "KCPP"],
      category: "Firmware",
      status: "Ongoing",
      github: null,
      demo: null,
      featured: true,
    },
    {
      id: 2,
      title: "FATT – Firmware Application Testing Tool",
      description:
        "Hardware + software EV charger test automation system. Hardware: 13-relay Auxiliary Board simulating Control Pilot states (Phase, Neutral, Earth, RCD, UV/OV, Emergency, Door Lock). Firmware: ESP32 UART/BLE command interface. Software: OCPP/KCPP test case runner with live log terminals.",
      tech: ["C", "C++", "ESP-IDF", "ESP32", "MQTT", "OCPP", "BLE (NimBLE)", "Relay Control", "UART"],
      category: "Firmware",
      status: "Ongoing",
      github: null,
      demo: null,
      featured: true,
    },
    {
      id: 3,
      title: "ESP32 Secure Boot + Flash & NVS Encryption",
      description:
        "Production security implementation for TVS LEVDC EV chargers. Configured ESP-IDF Secure Boot V2, AES-XTS Flash Encryption, NVS Encryption, and BLE AES Encryption. Performed eFuse programming with espefuse and signed firmware binaries with espsecure.",
      tech: ["ESP-IDF", "ESP32", "Secure Boot V2", "Flash Encryption", "NVS Encryption", "BLE AES", "espsecure", "espefuse"],
      category: "Firmware",
      status: "Completed",
      github: null,
      demo: null,
      year: "2025",
      featured: true,
    },
    {
      id: 4,
      title: "V2G – ISO 15119 Implementation",
      description:
        "Vehicle-to-Grid communication system using RISE-V2G Java open-source stack (EVCC + SECC modules). Built PKI certificate chain and integrated ESP32 Control Pilot 5% PWM signal with Raspberry Pi 5 + ADS1115 ADC for pilot signal measurement.",
      tech: ["Java", "Maven", "ISO 15119", "RISE-V2G", "ESP32", "Raspberry Pi 5", "ADS1115", "Python"],
      category: "Firmware",
      status: "Ongoing",
      github: null,
      demo: null,
      year: "2025",
      featured: true,
    },
    {
      id: 5,
      title: "KAZAM OCPP 1.6 Firmware Testing Suite",
      description:
        "Firmware testing across multiple EV charger product lines. Coverage: RFID authentication, FOTA OTA updates, energy metering, smart charging duty cycle, RCD/UV/OV fault injection, offline transaction handling, and OCPP 1.6 compliance verification.",
      tech: ["C", "C++", "ESP-IDF", "ESP32", "OCPP 1.6", "CMake", "Unity Framework", "CAN Bus", "LittleFS"],
      category: "Firmware",
      status: "Ongoing",
      github: null,
      demo: null,
      featured: true,
    },
    {
      id: 6,
      title: "STM32 Test Jig Firmware",
      description:
        "STM32G030F6P-based production test jig firmware for 7.4KW EV charger board testing. Features OLED display, multi-channel ADC for voltage/current measurement, I2C peripherals, UART debug logging, JSMN JSON parser, and a device state machine.",
      tech: ["STM32G030", "STM32CubeIDE", "C", "HAL Library", "OLED", "I2C", "ADC", "UART"],
      category: "Firmware",
      status: "Completed",
      github: null,
      demo: null,
      year: "2025",
    },
    {
      id: 7,
      title: "Production Test (PT) Tool",
      description:
        "Factory-line production testing utility for ESP32-based EV chargers. Automates firmware flashing (bootloader, partitions, app binaries), functional circuit testing (FCT), and end-of-line (EOL) verification for production batches.",
      tech: ["ESP32", "esptool", "Serial Protocol", "C", "Electron"],
      category: "Firmware",
      status: "Completed",
      github: null,
      demo: null,
      year: "2025",
    },
    {
      id: 8,
      title: "EV Charger Cycle Test Automation",
      description:
        "Full-stack automation tool for EV charger burn-in and cycle testing. Python backend triggers Start/Stop OCPP transactions; Next.js + TypeScript frontend provides a real-time test execution dashboard.",
      tech: ["Python", "Next.js", "TypeScript", "Tailwind CSS", "OCPP", "HTTP REST"],
      category: "Full Stack",
      status: "Completed",
      github: null,
      demo: null,
      year: "2025",
    },
    {
      id: 9,
      title: "Employee Management System",
      description:
        "Full-stack CRUD application with React frontend and Java backend. Features employee records management, role-based access, and MySQL database integration.",
      tech: ["React", "Java", "MySQL", "JDBC", "HTML", "CSS"],
      category: "Full Stack",
      status: "Completed",
      github: "https://github.com/BOLASHANKARVELIDI",
      demo: null,
      year: "2024",
    },
    {
      id: 10,
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
      id: 11,
      title: "Hand Gesture Recognition System",
      description:
        "ML-based system providing audible and visual feedback for hearing-impaired individuals using hand gesture recognition. Research paper published at ICACIT 2023 international conference.",
      tech: ["Python", "Machine Learning", "Computer Vision", "OpenCV"],
      category: "ML",
      status: "Completed",
      year: "2023",
      publication: "ICACIT 2023",
    },
    {
      id: 12,
      title: "Fish Weighing & Counting System",
      description:
        "IoT system using load cell (HX711), IR sensors (LM393), and Arduino Atmega8 to automate fish weighing and counting. Research paper published at an international conference.",
      tech: ["Arduino", "C", "HX711", "IR Sensors", "LabVIEW", "Servo Motor"],
      category: "IoT",
      status: "Completed",
      year: "2023",
      publication: "International Conference",
    },
    {
      id: 13,
      title: "Smart Agriculture System",
      description:
        "IoT-based precision farming solution with soil moisture sensors and automated irrigation control.",
      tech: ["Arduino", "Raspberry Pi", "Sensors", "Python"],
      category: "IoT",
      status: "Completed",
      year: "2023",
    },
    {
      id: 14,
      title: "Smart Home Automation",
      description:
        "Arduino/NodeMCU-based smart home system with Bluetooth connectivity for wireless device control and an HTML/CSS control panel.",
      tech: ["Arduino", "NodeMCU", "Bluetooth", "HTML", "CSS", "Embedded C"],
      category: "IoT",
      status: "Completed",
      year: "2023",
    },
    {
      id: 15,
      title: "FLAT FARM App",
      description:
        "Mobile application for farmers to manage farming operations digitally. Registered copyright (L-118430/2022) with the Government of India Copyright Office.",
      tech: ["Mobile App", "UI/UX"],
      category: "Other",
      status: "Completed",
      year: "2022",
      achievement: "Copyright L-118430/2022",
    },
  ],

  publications: [
    {
      id: 1,
      title: "Weight Based Fish Counts in the Reservoir Dumping Process",
      conference: "International Conference",
      year: "2023",
      role: "Team Lead & Co-author",
      description: "Automated fish weighing and counting system using Arduino Atmega8, HX711 load cell, LM393 IR sensors, and LabVIEW-based real-time monitoring.",
    },
    {
      id: 2,
      title: "Hand Gesture Recognition with Audible Feedback for Deaf and Dumb Using ML",
      conference: "ICACIT 2023 – 3rd International Conference on Advanced Computing and Intelligent Technologies",
      year: "Dec 2023",
      role: "Co-author",
      description: "Machine learning model providing audible and visual feedback for hearing-impaired individuals using real-time hand gesture recognition.",
      certificateNo: "ICACIT/2023/20",
    },
  ],

  education: [
    {
      id: 1,
      degree: "B.Tech – Electronics & Communication Engineering",
      institution: "QIS College of Engineering and Technology",
      university: "JNTU Kakinada",
      period: "2020 – 2024",
      score: "CGPA: 8.52 – First Class with Distinction",
      highlights: [
        "Team Leader – Automatic Computation of Electronic Formulas project",
        "Published 2 international conference research papers",
        "IEEE YESIST12 Finalist — Maker Fair Track, Egypt (2023)",
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
    { id: 1,  title: "Java Foundation",                            issuer: "Infosys Springboard",  year: "2024", type: "certification" },
    { id: 2,  title: "Java Programming",                           issuer: "HackerRank",           year: "2024", type: "certification" },
    { id: 3,  title: "CSS, JavaScript & PHP",                      issuer: "Udemy",                year: "2024", type: "certification" },
    { id: 4,  title: "Programming with Python – Score: 83%",       issuer: "Internshala",          year: "2022", type: "certification" },
    { id: 5,  title: "Data Analytics with Python",                 issuer: "YBI Foundation",       year: "2022", type: "certification" },
    { id: 6,  title: "Cloud Computing",                            issuer: "The Digital Adda",     year: "2022", type: "certification" },
    { id: 7,  title: "Internship & Job Prep – 100% Top Performer", issuer: "Internshala",          year: "2022", type: "certification" },
    { id: 8,  title: "YESIST12 Finalist",                          issuer: "IEEE (Egypt)",         year: "2023", type: "achievement" },
    { id: 9,  title: "ICACIT 2023 Paper Published",                issuer: "International Conf.",  year: "2023", type: "achievement" },
    { id: 10, title: "FlatFarm App Copyright",                     issuer: "Government of India",  year: "2022", type: "achievement" },
  ],
};

export default profile;
