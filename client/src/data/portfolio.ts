export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  codeUrl: string;
}

export interface Event {
  id: string;
  title: string;
  role: string;
  description: string;
  image: string;
  stats: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const projects: Project[] = [
  {
    id: "mystic-realms",
    title: "Mystic Realms",
    description: "An immersive fantasy RPG with procedural world generation and dynamic storytelling systems.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    technologies: ["Unity", "C#", "Procedural Gen"],
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: "medai",
    title: "MedAI",
    description: "High-speed cyberpunk racing game featuring adaptive AI opponents and customizable vehicles.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    technologies: ["Unreal Engine", "Blueprint", "AI"],
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: "quantum-shift",
    title: "Quantum Shift",
    description: "Mind-bending puzzle game exploring quantum mechanics through interactive spatial challenges.",
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    technologies: ["React", "Three.js", "WebGL"],
    demoUrl: "#",
    codeUrl: "#"
  }
];

export const events: Event[] = [
  {
    id: "techsoar-2023",
    title: "Evogen 2025",
    role: "Event Head-Cybersecurity",
    description: "Led a 500+ attendee technology conference featuring industry leaders and emerging tech trends. Coordinated 12 speakers, managed logistics, and achieved 95% satisfaction rating.",
    image: "/images/evogen2.jpg",
    stats: ["50+ Participants", "2 Judges", "90% Satisfaction"]
  },
  {
    id: "game-dev-championship",
    title: "Game Dev Championship",
    role: "Tournament Host",
    description: "Organized and hosted a 48-hour game development competition with 80 participants across 20 teams. Managed judging panels, live streaming, and prize distribution.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
    stats: ["80 Developers", "20 Teams", "48 Hours"]
  },
  {
    id: "code-flight-workshop",
    title: "Team Bounters Belgavi",
    role: "Workshop Speaker and an Organizer",
    description: "Created and delivered monthly programming workshops for beginners, covering game development fundamentals and industry best practices. Maintained 90% completion rate.",
    image: "/images/teambounters.jpg",
    stats: ["2 Sessions", "30+ Students", "90% Completion"]
  }
];

export const achievements: Achievement[] = [
  {
    id: "game-dev-excellence",
    title: "Game Dev Excellence",
    description: "First Place at Regional Game Development Competition 2023",
    icon: "fas fa-trophy"
  },
  {
    id: "community-leader",
    title: "Community Leader",
    description: "Outstanding Leadership Award for Event Management",
    icon: "fas fa-users"
  },
  {
    id: "technical-innovation",
    title: "Technical Innovation",
    description: "Best Technical Implementation - Indie Game Showcase",
    icon: "fas fa-code"
  },
  {
    id: "rising-star",
    title: "Rising Star",
    description: "Emerging Developer Recognition - Tech Conference 2023",
    icon: "fas fa-star"
  }
];

export const skills: string[] = [
  "C++",
  "Unreal Engine",
  "C#",
  "Cyber Security",
  "Blender",
];
