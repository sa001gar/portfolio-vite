export const skills = {
  languages: ['Python', 'JavaScript', 'TypeScript', 'C++', 'Java', 'SQL'],
  frameworks: ['Django', 'Next.js', 'React', 'FastAPI', 'Express.js', 'Flask'],
  databases: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'MySQL', 'Supabase'],
  devops: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Git', 'Linux'],
  ai_ml: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'NLTK', 'Pandas'],
  cloud: ['AWS EC2', 'S3', 'Lambda', 'Google Cloud', 'Azure', 'Heroku'],
  web3: ['Solidity', 'Web3.js', 'Ethers.js', 'Hardhat', 'IPFS', 'Smart Contracts'],
  security: ['OAuth', 'JWT', 'SSL/TLS', 'Encryption', 'Penetration Testing', 'Security Auditing'],
};

export const projects = [
  {
    id: 'stress-detection',
    title: 'SmartWatch Stress Detection',
    description: 'AI-powered stress detection system using smartwatch sensors. Utilizes machine learning to analyze biometric data for real-time stress monitoring.',
    technologies: ['Python', 'TensorFlow', 'scikit-learn', 'Flutter'],
    githubUrl: 'https://github.com/yourusername/stress-detection',
    image: 'https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?auto=format&fit=crop&w=800&q=80',
    date: 'January 2024',
    duration: '6 months',
    team: 4,
    readme: `
      <h1>SmartWatch Stress Detection</h1>
      <p>An innovative system that uses machine learning to detect stress levels from smartwatch sensor data.</p>
      <h2>Features</h2>
      <ul>
        <li>Real-time stress monitoring</li>
        <li>Heart rate variability analysis</li>
        <li>Sleep quality assessment</li>
        <li>Personalized stress management recommendations</li>
      </ul>
    `,
    contributors: [
      {
        name: 'John Doe',
        role: 'ML Engineer',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80'
      },
      {
        name: 'Jane Smith',
        role: 'Mobile Developer',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80'
      }
    ]
  },
  {
    id: 'electricity-theft',
    title: 'Electricity Theft Detection',
    description: 'ML-based system for detecting electricity theft using smart meter data analysis and anomaly detection algorithms.',
    technologies: ['Python', 'PyTorch', 'pandas', 'MongoDB'],
    githubUrl: 'https://github.com/yourusername/electricity-theft',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
    date: 'October 2023',
    duration: '8 months',
    team: 3,
    readme: `
      <h1>Electricity Theft Detection System</h1>
      <p>An advanced system that uses machine learning to detect electricity theft by analyzing smart meter data.</p>
      <h2>Key Components</h2>
      <ul>
        <li>Anomaly detection algorithms</li>
        <li>Real-time monitoring dashboard</li>
        <li>Automated reporting system</li>
        <li>Alert management</li>
      </ul>
    `
  },
  {
    id: 'code-compiler',
    title: 'Online Code Compiler',
    description: 'Full-stack web application for online code compilation and execution. Supports multiple programming languages with real-time output.',
    technologies: ['Next.js', 'Django', 'Docker', 'PostgreSQL'],
    githubUrl: 'https://github.com/yourusername/code-compiler',
    liveUrl: 'https://code-compiler.example.com',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    date: 'December 2023',
    duration: '4 months',
    team: 2
  }
];

export const shoutouts = [
  {
    name: "Dr. Sarah Johnson",
    role: "Research Mentor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    contribution: "Guided me through my research in ML and helped shape my approach to problem-solving in AI.",
    github: "https://github.com/sarahjohnson",
    linkedin: "https://linkedin.com/in/sarahjohnson",
    portfolio: "https://sarahjohnson.dev"
  },
  {
    name: "Prof. Michael Chen",
    role: "Academic Advisor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    contribution: "Mentored me throughout my M.Tech journey and supported my entrepreneurial ventures.",
    linkedin: "https://linkedin.com/in/michaelchen",
    portfolio: "https://michaelchen.edu"
  },
  {
    name: "Raj Patel",
    role: "Senior Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    contribution: "A great friend who helped me master full-stack development and system architecture.",
    github: "https://github.com/rajpatel",
    linkedin: "https://linkedin.com/in/rajpatel"
  },
  {
    name: "Lisa Zhang",
    role: "ML Engineer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
    contribution: "Collaborated on multiple ML projects and shared invaluable insights in deep learning.",
    github: "https://github.com/lisazhang",
    linkedin: "https://linkedin.com/in/lisazhang",
    portfolio: "https://lisazhang.ai"
  }
];