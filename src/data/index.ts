export const skills = {
  languages: ['Python', 'JavaScript', 'TypeScript', 'C++', 'C'],
  frameworks: ['Django', 'React', 'FastAPI', 'Flask'],
  databases: ['PostgreSQL ORM', 'MongoDB','Supabase'],
  devops: ['AWS','CI/CD', 'Git', 'Linux'],
  ai_ml: ['TensorFlow (Learning)', 'PyTorch', 'Scikit-learn', 'Pandas'],
  cloud: ['AWS EC2', 'S3', 'Netlify','Vercel'],
  security: ['OWASP Top 10', 'Burp Suite', 'Metasploit', 'Nmap'],
};

export const projects = [
  
  {
    id: 'kitto-ai',
    title: 'Kitto AI – Write Better',
    description: 'A Django-powered AI writing assistant that generates high-quality content with real-time word count and a modern, responsive UI.',
    technologies: ['Django', 'AWS EC2', 'RDS', 'S3', 'Cloudflare CDN'],
    githubUrl: 'https://github.com/sa001gar/ai_project_aws_deployment',
    image: 'https://img.freepik.com/free-photo/3d-render-robot-using-laptop_34663-47.jpg',
    date: 'March 2024',
    liveUrl: 'https://kittoai.sagarkundu.live',
    duration: '6 months',
    team: 2,
    readme: `
      # Kitto AI – Write Better
      
      Kitto AI is an AI writing assistant built with Django that generates high-quality content with real-time word count and a responsive UI.
      
      ## Key Features
      - AI-driven content generation
      - Real-time word count
      - Responsive design for multiple devices
      
      ## Technical Implementation
      - Backend: Django
      - Deployment: AWS EC2, RDS, S3, Cloudflare CDN
    `,
    contributors: [
      {
        name: 'Sagar Kundu',
        role: 'Lead Developer',
        avatar: 'https://github.com/sa001gar/portfolio-vite/blob/main/images/sagarkundu.png?raw=true'
      }
    ]
  },
  {
    id: 'electricity-theft-detection',
    title: 'Smart Electricity Theft Detection System',
    description: 'A system using Flask and Next.js to detect unauthorized electricity usage with real-time monitoring via Arduino-based sensors.',
    technologies: ['Flask', 'Next.js', 'Arduino', 'Python'],
    githubUrl: 'https://github.com/sa001gar/Smart-Electricity-Theft-Detection',
    image: 'https://github.com/sa001gar/portfolio-vite/blob/main/images/smart-electricity-theft-dashboard.png?raw=true',
    date: 'December 2024',
    duration: '3 months',
    team: 4,
    readme: `
      # Smart Electricity Theft Detection System\n
      
      This system detects unauthorized electricity usage using real-time monitoring with Arduino sensors and provides alerts for any anomalies.
      
      ## Key Features
      - Real-time monitoring of electricity consumption
      - Anomaly detection for theft prevention
      - User-friendly dashboard for monitoring
      
      ## Technical Implementation
      - Backend: Flask
      - Frontend: Next.js
      - Hardware: Arduino sensors
    `,
    contributors: [
      {
        name: 'Sagar Kundu',
        role: 'Backend Developer',
        avatar: 'https://github.com/sa001gar/portfolio-vite/blob/main/images/sagarkundu.png?raw=true'
      }
    ]
  },
  {
    id: 'applied-physio-website',
    title: 'Applied Physio – Brand Website',
    description: 'A professional, SEO-optimized website designed for a physiotherapy brand using HTML, Tailwind CSS, and JavaScript.',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
    githubUrl: 'https://github.com/sa001gar/applied-physio-website',
    image: 'https://github.com/sa001gar/portfolio-vite/blob/main/images/appliedphysio%20ui.png?raw=true',
    date: 'November 2024',
    duration: '2 months',
    liveUrl: 'https://appliedphysio.in',
    team: 1,
    readme: `
      # Applied Physio – Brand Website
      
      Developed a professional website for the physiotherapy brand "Applied Physio" featuring SEO optimization and a modern design.
      
      ## Key Features
      - Responsive design for all devices
      - SEO-optimized structure
      - Informative content and easy navigation
      
      ## Technical Implementation
      - Frontend: HTML, Tailwind CSS, JavaScript
    `,
    contributors: [
      {
        name: 'Sagar Kundu',
        role: 'Full-Stack Developer',
        avatar: 'https://github.com/sa001gar/portfolio-vite/blob/main/images/sagarkundu.png?raw=true'
      }
    ]
  },
  {
    id: 'college-website-redesign',
    title: 'College Website Redesign',
    description: 'A modern redesign of a college website featuring enhanced accessibility, performance, and a sleek UI.',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
    githubUrl: 'https://github.com/sa001gar/college-website-redesign',
    image: 'https://img.freepik.com/free-photo/education-concept-with-books-laptop_23-2148535203.jpg',
    date: 'January 2025',
    duration: '3 months',
    liveUrl: 'https://redesign-mccs.sagarkundu.live',
    team: 2,
    readme: `
      # College Website Redesign
      
      Revamped a college website to improve accessibility, performance, and user experience with a modern design.
      
      ## Key Features
      - Modern UI/UX design
      - Improved accessibility and performance
      - Mobile responsiveness
      
      ## Technical Implementation
      - Frontend: HTML, Tailwind CSS, JavaScript
    `,
    contributors: [
      {
        name: 'Sagar Kundu',
        role: 'Frontend Developer',
        avatar: 'https://github.com/sa001gar/portfolio-vite/blob/main/images/sagarkundu.png?raw=true'
      }
    ]
  },
  {
    id: 'stress-detection',
    title: 'Stress Detection Using Smartwatch',
    description: 'An ML-based system that analyzes smartwatch data to provide real-time stress level insights and personalized recommendations.',
    technologies: ['Python', 'Flask', 'Machine Learning'],
    githubUrl: 'https://github.com/sa001gar/Stress-Detection-using-Smart-Watch',
    image: 'https://raw.githubusercontent.com/sa001gar/portfolio-vite/refs/heads/main/images/stress.webp',
    date: 'February 2025',
    duration: '4 months',
    team: 3,
    readme: `
      # Stress Detection Using Smartwatch
      
      An innovative system leveraging machine learning to analyze smartwatch data, providing real-time stress insights and personalized recommendations.
      
      ## Key Features
      - Real-time stress monitoring and analysis
      - ML-driven stress prediction
      - Personalized recommendations
      
      ## Technical Implementation
      - Backend: Flask
      - Machine Learning: Python ML libraries
    `,
    contributors: [
      {
        name: 'Sagar Kundu',
        role: 'ML Developer',
        avatar: 'https://github.com/sa001gar/portfolio-vite/blob/main/images/sagarkundu.png?raw=true'
      }
    ]
  },
  {
    id: 'api-testing-extension',
    title: 'API Testing Chrome Extension',
    description: 'A lightweight Chrome extension for efficient API testing, featuring an intuitive interface and real-time response previews.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/sa001gar/api-testing-extension',
    // liveurl:'https://devapi.sagarkundu.live',
    image: 'https://raw.githubusercontent.com/sa001gar/portfolio-vite/refs/heads/main/images/api-testing.webp',
    date: 'April 2025',
    duration: '2 months',
    team: 1,
    readme: `
      # API Testing Chrome Extension
      
      A streamlined Chrome extension designed for testing APIs efficiently with real-time response previews and an intuitive user interface.
      
      ## Key Features
      - Intuitive API testing interface
      - Real-time response previews
      - Lightweight and efficient
      
      ## Technical Implementation
      - Frontend: JavaScript, HTML, CSS
      - Packaged as a Chrome extension
    `,
    contributors: [
      {
        name: 'Sagar Kundu',
        role: 'Developer',
        avatar: 'https://github.com/sa001gar/portfolio-vite/blob/main/images/sagarkundu.png?raw=true'
      }
    ]
  },
  {
    id: 'ai-code-editor',
    title: 'AI Code Editor & Code Guru',
    description: 'An AI-powered code editor that offers real-time suggestions, debugging assistance, and syntax highlighting to enhance coding efficiency.',
    technologies: ['React', 'Flask', 'JavaScript'],
    githubUrl: 'https://github.com/sa001gar/gurukul',
    image: 'https://raw.githubusercontent.com/sa001gar/portfolio-vite/refs/heads/main/images/gurukul.webp',
    liveUrl: 'https://gurukul.sagarkundu.live',
    date: 'May 2025',
    duration: '3 months',
    team: 2,
    readme: `
      # AI Code Editor & Code Guru
      
      An innovative code editor leveraging AI to provide real-time code suggestions, debugging assistance, and syntax highlighting for an enhanced coding experience.
      
      ## Key Features
      - Real-time code suggestions
      - Integrated debugging assistance
      - Syntax highlighting
      
      ## Technical Implementation
      - Frontend: React
      - Backend: Flask
    `,
    contributors: [
      {
        name: 'Sagar Kundu',
        role: 'Full-Stack Developer',
        avatar: 'https://github.com/sa001gar/portfolio-vite/blob/main/images/sagarkundu.png?raw=true'
      }
    ]
  },
  {
    id: 'retro-diary-app',
    title: 'Retro-Themed Diary Web App',
    description: 'A minimalistic, retro-themed diary application designed for users to effortlessly jot down their thoughts and notes.',
    technologies: ['Supabase', 'React', 'Tailwind Css', 'Django'],
    githubUrl: 'https://github.com/sa001gar/Retro-Diary-Website',
    image: 'https://img.freepik.com/free-photo/vintage-diary-with-pen_23-2148535206.jpg',
    date: 'September 2024',
    duration: '2 months',
    liveUrl: 'https://diary.sagarkundu.live',
    team: 1,
    readme: `
      # Retro-Themed Diary Web App\n
      
      A simple and elegant diary application featuring a retro aesthetic, allowing users to record and review their personal thoughts and notes.
      
      ## Key Features
      - Minimalistic design with retro UI
      - Easy note-taking interface
      - Mobile-friendly layout
      
      ## Technical Implementation
      - Backend: Flask
      - Frontend: React, CSS
    `,
    contributors: [
      {
        name: 'Sagar Kundu',
        role: 'Developer',
        avatar: 'https://github.com/sa001gar/portfolio-vite/blob/main/images/sagarkundu.png?raw=true'
      }
    ]
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
    image: "https://github.com/sa001gar/portfolio-vite/blob/main/images/kkm.png?raw=true",
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
    image: "https://scontent.fdbd3-1.fna.fbcdn.net/v/t39.30808-1/406603225_350245387697302_1989587278324643144_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=106&ccb=1-7&_nc_sid=e99d92&_nc_ohc=hLhFqVtGmEEQ7kNvgGomCyb&_nc_oc=Adh8UsOUFEq_xemfuw7TYKZteNmYNaY0GtN-a5ZMNNLGgdoXbAtM6eI92ms6zPoUsWw&_nc_zt=24&_nc_ht=scontent.fdbd3-1.fna&_nc_gid=A6iQg1ofP7PoytuAeknoAot&oh=00_AYDOLyguVUpSJ5ZLP3bLNKW7yDh-3YtAZf95lWEQXB6M8A&oe=67BE767F",
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
  linkedin: 'https://linkedin.com/in/sagarkundu',
  // twitter: 'https://twitter.com/sa001gar',
  instagram: 'https://instagram.com/sagarkundu._',
  email: 'hello@sagarkundu.live'
};