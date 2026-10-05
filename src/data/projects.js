export const projects = [
  {
    id: "wanderlust",
    name: "Wanderlust",
    title: "Wanderlust",
    description: "A full-stack travel listing platform inspired by Airbnb where users can explore travel listings and interact with listing-related functionality.",
    technologies: [
      "Node.js", "Express.js", "MongoDB", "Mongoose", "EJS", "Bootstrap", 
      "Passport", "Express Session", "Cloudinary", "Mapbox", "Joi"
    ],
    stack: [
      "Node.js", "Express.js", "MongoDB", "Mongoose", "EJS", "Bootstrap", 
      "Passport", "Express Session", "Cloudinary", "Mapbox", "Joi"
    ],
    features: [
      "Travel/listing browsing",
      "User authentication",
      "Listing creation/editing functionality",
      "Reviews",
      "Image handling through Cloudinary",
      "Interactive map functionality through Mapbox",
      "Server-side web application using Express/EJS"
    ],
    status: "COMPLETED / DEPLOYED",
    category: "COMPLETED / DEPLOYED",
    liveUrl: "https://mern-travel-listings.onrender.com/listings",
    demoLink: "https://mern-travel-listings.onrender.com/listings",
    githubUrl: "https://github.com/Ayaz-Ahmed181/mern-travel-listings",
    githubLink: "https://github.com/Ayaz-Ahmed181/mern-travel-listings",
    image: "/assets/projects/wanderlust.webp"
  },
  {
    id: "evidence-vault",
    name: "Evidence Vault",
    title: "Evidence Vault",
    description: "A digital evidence repository and chain-of-custody platform. Detects faces from images, creates canonical SHA-256 fingerprints, and registers/verifies evidence on the Polygon Amoy blockchain.",
    technologies: [
      "Node.js", "TypeScript", "@vladmandic/face-api", "TensorFlow.js", 
      "SerpApi", "SHA-256", "ethers.js v6", "Polygon Amoy", "Blockchain smart contract"
    ],
    stack: [
      "Node.js", "TypeScript", "@vladmandic/face-api", "TensorFlow.js", 
      "SerpApi", "SHA-256", "ethers.js v6", "Polygon Amoy", "Blockchain smart contract"
    ],
    features: [
      "Face detection",
      "Web/social-web matching",
      "Canonical evidence fingerprint generation",
      "SHA-256 hashing",
      "Blockchain evidence registration",
      "Blockchain verification"
    ],
    status: "COMPLETED HACKATHON MVP",
    category: "COMPLETED HACKATHON MVP",
    liveUrl: "https://github.com/Ayaz-Ahmed181/EvidenceVault.git",
    demoLink: "https://github.com/Ayaz-Ahmed181/EvidenceVault.git",
    githubUrl: "https://github.com/Ayaz-Ahmed181/EvidenceVault.git",
    githubLink: "https://github.com/Ayaz-Ahmed181/EvidenceVault.git",
    image: "/assets/projects/face-blockchain.webp"
  },
  {
    id: "simon-says",
    code: "OP_03",
    name: "Simon Says",
    title: "Simon Says",
    category: "INTERACTIVE WEB APPLICATION",
    status: "COMPLETED / DEPLOYED",
    description:
      "A browser-based Simon Says memory game built to practice JavaScript, DOM interaction, game logic, and event handling with dynamic color/sound sequence generation.",
    metrics: [
      { label: "ENGINE", value: "VANILLA JS / DOM" },
      { label: "GAMEPLAY", value: "DYNAMIC PATTERNS" },
      { label: "STATE", value: "EVENT SEQUENCER" },
      { label: "DEPLOYMENT", value: "NETLIFY LIVE" },
    ],
    stack: ["JavaScript", "HTML5", "CSS3", "Git", "Netlify"],
    technologies: ["JavaScript", "HTML5", "CSS3", "Git", "Netlify"],
    features: [
      "Dynamic sequence generation",
      "Interactive DOM audio-visual feedback",
      "Level progression with score tracking",
      "Responsive lightweight layout"
    ],
    demoLink: "https://simonsayagame.netlify.app/",
    liveUrl: "https://simonsayagame.netlify.app/",
    githubLink: "https://github.com/Ayaz-Ahmed181",
    githubUrl: "https://github.com/Ayaz-Ahmed181",
    image: "/assets/projects/simon-says.webp"
  }
];
