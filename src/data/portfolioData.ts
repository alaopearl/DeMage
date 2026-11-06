import {
  Award,
  Camera,
  Clapperboard,
  Compass,
  Film,
  Home,
  Instagram,
  Layers,
  Lightbulb,
  MessageCircle,
  Mic,
  MoveRight,
  Music,
  Palette,
  Phone,
  Scissors,
  Sliders,
  Sparkles,
  Youtube,
  Zap,
} from "lucide-react";
import type {
  Collaboration,
  ContactDetails,
  Differentiator,
  ProcessStep,
  Project,
  ProjectCategory,
  Service,
  SocialLink,
} from "@/types";
import VIDEO_ONE from "@/assets/vid1.mp4";
import VIDEO_TWO from "@/assets/vid2.mp4";
import VIDEO_THREE from "@/assets/vid3.mp4";

export const CONTACT: ContactDetails = {
  name: "Mutairu Oladimeji",
  role: "Videographer / Video Editor / Director",
  email: "mutairu.oladimeji.films@gmail.com",
  whatsapp: "2348105527189",
  location: "Lagos, Nigeria - available worldwide",
};

export const HERO_IMAGE =
  "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/2d97e972-6b6f-4a3e-a3c4-90aeca741c94/hero-cinema-008af738-1793910759003.webp";

export const PORTRAIT_IMAGE =
  "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/2d97e972-6b6f-4a3e-a3c4-90aeca741c94/director-portrait-ddfd3c81-1793910762403.webp";

const IMG = {
  gold: "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/2d97e972-6b6f-4a3e-a3c4-90aeca741c94/commercial-gold-08d07ee3-1793910758367.webp",
  villa:
    "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/2d97e972-6b6f-4a3e-a3c4-90aeca741c94/real-estate-villa-9962fb53-1793910757862.webp",
  travel:
    "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/2d97e972-6b6f-4a3e-a3c4-90aeca741c94/travel-hospitality-54a93daf-1793910758157.webp",
  night:
    "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/2d97e972-6b6f-4a3e-a3c4-90aeca741c94/night-event-3cf49ba3-1793910758654.webp",
  story:
    "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/2d97e972-6b6f-4a3e-a3c4-90aeca741c94/brand-story-48060b00-1793910762501.webp",
  hero: HERO_IMAGE,
};

export const CATEGORIES: ProjectCategory[] = [
  "Commercial",
  "Real Estate",
  "Brand",
  "Cinematic",
  "Social",
  "Creative",
];

export const PROJECTS: Project[] = [
  {
    id: "film-one",
    title: "Film One",
    client: "Mutairu Oladimeji Films",
    year: 2025,
    category: "Commercial",
    runtime: "00:00",
    thumbnail: IMG.gold,
    video: VIDEO_ONE,
    description: "A cinematic production showcase captured and directed by Mutairu Oladimeji.",
    directorNote: "Built around strong composition, purposeful movement and cinematic pacing.",
    specs: ["Cinema camera", "Professional lighting", "Final colour grade"],
    tags: ["Commercial", "Cinematic", "Film"],
  },
  {
    id: "film-two",
    title: "Film Two",
    client: "Mutairu Oladimeji Films",
    year: 2025,
    category: "Brand",
    runtime: "00:00",
    thumbnail: IMG.travel,
    video: VIDEO_TWO,
    description: "A brand-focused visual story with engaging movement, polished editing and sound.",
    directorNote: "Every cut was chosen to reinforce the brand message and keep attention high.",
    specs: ["Brand cinematography", "Professional edit", "Sound design"],
    tags: ["Brand", "Campaign", "Social"],
  },
  {
    id: "film-three",
    title: "Film Three",
    client: "Mutairu Oladimeji Films",
    year: 2025,
    category: "Cinematic",
    runtime: "00:00",
    thumbnail: IMG.night,
    video: VIDEO_THREE,
    description: "A cinematic short presented with deliberate framing, atmosphere and visual storytelling.",
    directorNote: "The pacing, light and transitions work together to tell a complete visual story.",
    specs: ["Cinematic capture", "Narrative editing", "Final grade"],
    tags: ["Cinematic", "Narrative", "Short film"],
  },
];

export const SERVICES: Service[] = [
  {
    title: "Professional Videography",
    description:
      "Cinema-grade capture for campaigns, events and brand moments - composed, lit and stabilised on set.",
    icon: Camera,
    featured: true,
  },
  {
    title: "Cinematic Video Production",
    description:
      "Full production design: shot lists, lighting plans, crew, and a look that holds up on a big screen.",
    icon: Clapperboard,
    featured: true,
  },
  {
    title: "Video Editing & Post-Production",
    description:
      "Rhythm cutting, montage pacing and narrative alignment that keeps a viewer inside the frame.",
    icon: Scissors,
  },
  {
    title: "Film Direction",
    description:
      "Concept-to-screen leadership - performance, blocking and camera language decided before the shoot day.",
    icon: Film,
  },
  {
    title: "Commercial & Brand Videos",
    description:
      "Product films, manifesto pieces and launch suites built to sell without screaming.",
    icon: Sparkles,
  },
  {
    title: "Real Estate Videography & Aerials",
    description:
      "Architectural walkthroughs and drone coverage that make a property feel like a destination.",
    icon: Home,
  },
  {
    title: "Creative Storytelling & Documentaries",
    description:
      "Observational and interview-led films where real people carry the weight of the story.",
    icon: Lightbulb,
  },
  {
    title: "Colour Grading & Finishing",
    description:
      "DaVinci Resolve grades, LUT development and delivery masters for cinema, broadcast and web.",
    icon: Palette,
  },
  {
    title: "Social Media & Viral Content",
    description:
      "Vertical-native edits, hook-first pacing and same-day turnarounds for fast platforms.",
    icon: Zap,
  },
];

export const COLLABORATIONS: Collaboration[] = [
  {
    name: "OPIK GOLD INTERNATIONAL LTD",
    focus: "Luxury corporate & investment visuals",
    scope:
      "Brand films, investor presentations and product visuals built around a gold-and-black visual identity.",
    projects: "6 productions",
  },
  {
    name: "JARUS HOMES",
    focus: "High-end real estate cinematography",
    scope:
      "Twilight estate films, interior glide-throughs and aerial coverage for premium listings.",
    projects: "11 productions",
  },
  {
    name: "JARUS TRAVELS",
    focus: "Travel, hospitality & lifestyle campaigns",
    scope:
      "Destination films and social cutdowns for hospitality launches and travel packages.",
    projects: "8 productions",
  },
  {
    name: "NIGHT LIGHT CONNECT",
    focus: "Event, brand & creative media",
    scope:
      "Same-night event recaps, stage films and media brand manifestos with live sound design.",
    projects: "14 productions",
  },
];

export const PROCESS: ProcessStep[] = [
  {
    number: "01",
    title: "Concept Development",
    description:
      "We define the story before the gear. Vision, moodboard, narrative arc and the one feeling the film must land.",
  },
  {
    number: "02",
    title: "Storyboarding & Planning",
    description:
      "Shot lists, location scouting, lighting diagrams and talent direction - so nothing is improvised on the day.",
  },
  {
    number: "03",
    title: "Filming & Production",
    description:
      "4K/6K cinema capture, controlled lighting, gimbal and slider movement, with coverage planned for the edit.",
  },
  {
    number: "04",
    title: "Video Editing",
    description:
      "Rhythm cutting, montage pacing and narrative structure shaped in the timeline, not on set.",
  },
  {
    number: "05",
    title: "Colour Grading & Sound",
    description:
      "DaVinci Resolve colour harmony, foley, score mastering and a mix that survives phone speakers.",
  },
  {
    number: "06",
    title: "Final Delivery",
    description:
      "Multi-format exports optimised for broadcast, cinema, web and social - plus archival masters.",
  },
];

export const DIFFERENTIATORS: Differentiator[] = [
  {
    title: "6 Years of Proven Mastery",
    description:
      "Six years of continuous shooting, cutting and directing across commercial and narrative work.",
    icon: Award,
  },
  {
    title: "Storytelling Mastery",
    description:
      "Emotive pacing and a clear narrative arc, even inside a thirty-second product cut.",
    icon: Compass,
  },
  {
    title: "Professional Cinema Setup",
    description:
      "Cinema bodies, prime lenses, lighting control and gimbal stabilisation on every production.",
    icon: Layers,
  },
  {
    title: "Creative Direction",
    description:
      "One person owns the vision from concept through to the final export. No translation loss.",
    icon: Sliders,
  },
  {
    title: "Precision Grade & Sound",
    description:
      "Industry-grade LUTs, film-grain finishing and immersive audio mixing that gives the cut weight.",
    icon: Mic,
  },
  {
    title: "Turnkey Execution",
    description:
      "Pre-production, production, post and delivery handled end to end with predictable timelines.",
    icon: MoveRight,
  },
];

export const SOCIALS: SocialLink[] = [
  {
    label: "Instagram",
    handle: "@i_m_demage",
    href: "https://www.instagram.com/i_m_demage?srtk=b3JhazR0N2cxOGwz",
    icon: Instagram,
  },
  {
    label: "YouTube",
    handle: "@MutairuOladimejiFilms",
    href: "https://youtube.com/@night_fact?si=shGseFIJmymWXMOg",
    icon: Youtube,
  },
  {
    label: "TikTok",
    handle: "@i_m_demage",
    href: "https://www.tiktok.com/@i_m_demage",
    icon: Music,
  },
  {
    label: "WhatsApp",
    handle: "+234 810 552 7189",
    href: "https://wa.me/2348105527189",
    icon: MessageCircle,
  },
  {
    label: "Call",
    handle: "+234 810 552 7189",
    href: "tel:+2348105527189",
    icon: Phone,
  },
];

export const PROJECT_TYPES = [
  "Commercial / Brand Film",
  "Real Estate Video",
  "Event Coverage",
  "Documentary",
  "Social Media Content",
  "Music / Creative Film",
];

export const BUDGET_RANGES = [
  "Under 250,000 NGN",
  "250,000 - 600,000 NGN",
  "600,000 - 1,500,000 NGN",
  "1,500,000 NGN and above",
  "Let's discuss",
];