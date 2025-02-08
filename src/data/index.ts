export const skills = {
  languages: ['Python', 'JavaScript', 'TypeScript', 'C++', 'C', 'Rust'],
  frameworks: ['Django', 'Next.js', 'React', 'FastAPI', 'Express.js', 'Flask'],
  databases: ['PostgreSQL', 'MongoDB', 'Elasticsearch', 'Supabase'],
  devops: ['AWS', 'Azure', 'CI/CD', 'Git', 'Linux'],
  ai_ml: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'Pandas'],
  cloud: ['AWS EC2', 'S3', 'Lambda', 'Google Cloud', 'Azure', 'Heroku'],
  security: ['Metasploit', 'OWASP-10', 'Burpsuite', 'Encryption', 'Penetration Testing', 'Security Auditing'],
};

export const projects = [
  {
    id: 'stress-detection',
    title: 'SmartWatch Stress Detection',
    description: 'AI-powered stress detection system using smartwatch sensors. Utilizes machine learning to analyze biometric data for real-time stress monitoring.',
    technologies: ['Python', 'TensorFlow', 'scikit-learn', 'Flutter'],
    githubUrl: 'https://github.com/sa001gar/Stress-Detection-using-Smart-Watch',
    image: 'https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?auto=format&fit=crop&w=800&q=80',
    date: 'January 2024',
    duration: '3 months',
    team: 4,
    readme: `
      <h1>SmartWatch Stress Detection using ML</h1>
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
        name: 'Mainak Majumder',
        role: 'Software Developer',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80'
      },
      {
        name: 'Sagar Kundu',
        role: 'Software Developer',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80'
      }
    ]
  },
  {
    id: 'queue-management',
    title: 'Queue Management App',
    description: 'Smart queue management system for businesses to handle customer flow efficiently. Features real-time updates and analytics.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    githubUrl: 'https://github.com/sa001gar/queue-management',
    image: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=800&q=80',
    date: 'February 2024',
    duration: '3 months',
    team: 2
  },
  {
    id: 'just-found',
    title: 'Just Found App',
    description: 'Platform to help people find and recover lost items easily. Integrates location tracking and community notifications.',
    technologies: ['Django', 'Next.Js', 'Google Maps API', 'Websocket'],
    githubUrl: 'https://github.com/sa001gar/just-found',
    image: 'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?auto=format&fit=crop&w=800&q=80',
    date: 'December 2023',
    duration: '4 months',
    team: 3
  },
  {
    id: 'retro-diary',
    title: 'Retro Diary',
    description: 'Digital diary with a retro theme for storing beautiful memories. Features multimedia support and mood tracking.',
    technologies: ['Vue.js', 'Express', 'PostgreSQL'],
    githubUrl: 'https://github.com/sa001gar/retro-diary',
    image: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&w=800&q=80',
    date: 'January 2024',
    duration: '2 months',
    team: 1
  },
  {
    id: 'lahari-event',
    title: 'Lahari College Event',
    description: 'Official website for Mankar College social event. Features event schedule, registration, and live updates.',
    technologies: ['Next.js', 'Tailwind CSS', 'Supabase'],
    githubUrl: 'https://github.com/sa001gar/lahari-2024',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
    date: 'March 2024',
    duration: '1 month',
    team: 4
  },
  {
    id: 'c-programming-guide',
    title: 'C Programming Guide',
    description: 'Comprehensive collection of C programming questions and solutions for semester 2 students.',
    technologies: ['C', 'Markdown', 'GitHub Pages'],
    githubUrl: 'https://github.com/sa001gar/C-Questions-For-Sem-02',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80',
    date: 'Ongoing',
    duration: 'Continuous',
    team: 1
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
  linkedin: 'https://www.linkedin.com/in/sagarkundu',
  instagram: 'https://instagram.com/sagarkundu._',
  email: 'hello@sagarkundu.live'
};