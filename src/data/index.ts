export const skills = {
  languages: ['Python', 'JavaScript', 'TypeScript', 'C++', 'C', 'Rust'],
  frameworks: ['Django', 'Next.js', 'React', 'FastAPI', 'Express.js', 'Flask'],
  databases: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'MySQL', 'Supabase', 'Cassandra', 'Neo4j'],
  devops: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Git', 'Linux', 'Terraform', 'Jenkins'],
  ai_ml: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'NLTK', 'Pandas', 'Keras', 'Hugging Face'],
  cloud: ['AWS EC2', 'S3', 'Lambda', 'Google Cloud', 'Azure', 'Heroku', 'DigitalOcean', 'Vercel'],
  web3: ['Solidity', 'Web3.js', 'Ethers.js', 'Hardhat', 'IPFS', 'Smart Contracts', 'DeFi', 'NFTs'],
  security: ['Penetration Testing', 'OWASP Top 10', 'Burp Suite', 'Metasploit', 'Wireshark', 'Nmap', 'Cryptography', 'Security Auditing'],
};

export const projects = [
  {
    id: 'stress-detection',
    title: 'AI Stress Detection System',
    description: 'Advanced ML-powered stress detection system using multimodal data from smartwatches. Features real-time monitoring, personalized insights, and preventive recommendations.',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'React Native', 'AWS'],
    githubUrl: 'https://github.com/sa001gar/stress-detection',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    date: 'March 2024',
    duration: '8 months',
    team: 4,
    readme: `
      # AI Stress Detection System
      
      An innovative system that leverages machine learning to detect and monitor stress levels using multimodal data from smartwatches.
      
      ## Key Features
      - Real-time stress monitoring and analysis
      - Multi-sensor data fusion (HRV, GSR, accelerometer)
      - Personalized stress threshold calibration
      - Preventive recommendations engine
      - Secure data handling and privacy protection
      
      ## Technical Implementation
      - Deep learning models for time-series analysis
      - Real-time data processing pipeline
      - Mobile app for data visualization
      - Cloud infrastructure for scalability
    `,
    contributors: [
      {
        name: 'Dr. Rajesh Kumar',
        role: 'ML Research Lead',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80'
      },
      {
        name: 'Priya Singh',
        role: 'Mobile Developer',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80'
      }
    ]
  },
  {
    id: 'electricity-theft',
    title: 'Smart Grid Theft Detection',
    description: 'AI-powered system for detecting electricity theft using smart meter data. Implements advanced anomaly detection and pattern recognition algorithms.',
    technologies: ['Python', 'PyTorch', 'Apache Spark', 'MongoDB', 'Docker'],
    githubUrl: 'https://github.com/sa001gar/electricity-theft',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
    date: 'February 2024',
    duration: '6 months',
    team: 3
  },
  {
    id: 'code-compiler',
    title: 'Cloud Code Compiler',
    description: 'Secure, scalable online code compilation and execution platform supporting 20+ programming languages. Features real-time collaboration and code sharing.',
    technologies: ['Go', 'Docker', 'Kubernetes', 'Redis', 'WebSocket'],
    githubUrl: 'https://github.com/sa001gar/code-compiler',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    date: 'January 2024',
    duration: '4 months',
    team: 2
  },
  {
    id: 'defi-platform',
    title: 'DeFi Lending Platform',
    description: 'Decentralized lending platform with automated market maker (AMM) functionality. Features yield farming, liquidity mining, and governance token.',
    technologies: ['Solidity', 'Web3.js', 'React', 'Hardhat', 'TheGraph'],
    githubUrl: 'https://github.com/sa001gar/defi-platform',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
    date: 'December 2023',
    duration: '5 months',
    team: 3
  },
  {
    id: 'ai-tutor',
    title: 'AI Programming Tutor',
    description: 'Personalized programming education platform powered by GPT-4. Features interactive coding exercises, real-time code analysis, and adaptive learning paths.',
    technologies: ['Python', 'OpenAI API', 'Next.js', 'PostgreSQL', 'Redis'],
    githubUrl: 'https://github.com/sa001gar/ai-tutor',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    date: 'November 2023',
    duration: '3 months',
    team: 2
  },
  {
    id: 'cyber-threat-detection',
    title: 'Cyber Threat Detection',
    description: 'ML-powered cybersecurity system for real-time threat detection and response. Implements advanced anomaly detection and network traffic analysis.',
    technologies: ['Python', 'TensorFlow', 'Elasticsearch', 'Kafka', 'Docker'],
    githubUrl: 'https://github.com/sa001gar/cyber-threat-detection',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    date: 'October 2023',
    duration: '7 months',
    team: 4
  }
];

export const shoutouts = [
  {
    name: "Mainak Majumder",
    role: "Software Developer",
    image: "https://avatars.githubusercontent.com/u/101183982?v=4",
    contribution: "Guided my ML research and shaped my AI problem-solving approach. We've collaborated on multiple web and ML projects.",
    github: "https://github.com/mainak1023",
    linkedin: "https://www.linkedin.com/in/mainak-majumder/",
    portfolio: "https://mainak1023.github.io/mainak-portfolio/",
    tags: [
      { label: "Mentor", color: "purple" },
      { label: "Co-founder", color: "blue" }
    ]
  },
  {
    name: "Kunal Kumar Mondal",
    role: "Academic Advisor",
    image: "https://media-ccu2-1.cdn.whatsapp.net/v/t61.24694-24/468795515_3914399012152134_6827407065814270934_n.jpg?ccb=11-4&oh=01_Q5AaIGlXMITxbAfC6WdNy0BppO6-wrscPS4WnLMx-ISbyVod&oe=67AB76F2&_nc_sid=5e03e0&_nc_cat=106",
    contribution: "Mentores me through my B.Sc. journey and continues to support my growth and entrepreneurial ventures.",
    linkedin: "https://linkedin.com/in",
    portfolio: "https://kunalkumarmondal.github.io",
    tags: [
      { label: "Mentor", color: "purple" },
      { label: "Academic", color: "indigo" }
    ]
  },
  {
    name: "Koyel Das",
    role: "Frontend Developer",
    image: "https://github.com/sa001gar/portfolio-vite/blob/main/images/koyel_das.jpeg?raw=false",
    contribution: "A great friend who challenges me with new problems, encourages my growth, and collaborates with me in coding",
    github: "https://github.com/koyel001",
    linkedin: "https://www.linkedin.com/in/koyel-das-80264a342/",
    tags: [
      { label: "Friend", color: "pink" },
      { label: "Partner", color: "orange" }
    ]
  },
  {
    name: "Sujoy Das",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
    contribution: "A childhood friend and talented UI/UX designer with whom I collaborate to create innovative and ambitious projects.",
    linkedin: "https://linkedin.com/in/sujoydas",
    portfolio: "#",
    tags: [
      { label: "Collaborator", color: "green" },
      { label: "Friend", color: "pink" }
    ]
  }
];

export const socialLinks = {
  github: 'https://github.com/sa001gar',
  linkedin: 'https://linkedin.com/in/sa001gar',
  twitter: 'https://twitter.com/sa001gar',
  instagram: 'https://instagram.com/sa001gar',
  email: 'hello@sagarkundu.live'
};