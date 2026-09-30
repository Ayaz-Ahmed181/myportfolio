export const projects = [
  {
    id: "wanderlust",
    name: "Wanderlust",
    description: "A full-stack travel listing platform inspired by Airbnb where users can explore travel listings and interact with listing-related functionality.",
    technologies: [
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
    liveUrl: "https://mern-travel-listings.onrender.com/listings",
    githubUrl: "https://github.com/Ayaz-Ahmed181/mern-travel-listings",
    image: "/assets/projects/wanderlust.webp"
  },
  {
    id: "face-blockchain",
    name: "Face/Web Blockchain",
    description: "A Node.js/TypeScript CLI application that detects a face from an image, performs web/social-web matching, creates a canonical SHA-256 fingerprint, and registers/verifies evidence on the Polygon Amoy blockchain.",
    technologies: [
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
    liveUrl: null,
    githubUrl: null,
    image: "/assets/projects/face-blockchain.webp"
  },
  {
    id: "simon-says",
    name: "Simon Says",
    description: "A browser-based Simon Says memory game built to practice JavaScript, DOM interaction, game logic, and event handling.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Generates a sequence",
      "User repeats the sequence",
      "Sequence becomes longer as the game progresses",
      "Incorrect input ends the game"
    ],
    status: "COMPLETED / DEPLOYED",
    liveUrl: "https://simonsayagame.netlify.app/",
    githubUrl: null,
    image: "/assets/projects/simon-says.webp"
  }
];
