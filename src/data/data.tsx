import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  FlagIcon,
  InboxIcon,
  MapIcon,
  PhoneIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.webp';
import porfolioImage5 from '../images/portfolio/portfolio-5.webp';
import profilepic from '../images/profilepic.png';
import testimonialImage from '../images/testimonial.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Gabriel Alao - Full Stack Software Engineer',
  description: "Portfolio site built with react by Gabriel Alao",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Gabriel Alao.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Georgetown, TX based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Gabby</strong> <br/> building innovative web and blockchain applications.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      Over the 12+ years, I've honed my expertise in backend development and full stack solutions, contributing to several high-impact projects across various industries, including <strong className="text-stone-100">Web3, DeFi, Fintech, CMS, Marketplace, and Gaming</strong> platforms.<br/>
      My experience spans from developing scalable APIs to crafting responsive front-end interfaces, using cutting-edge technologies to deliver powerful, user-friendly experiences. I'm always eager to tackle new challenges and contribute to dynamic, forward-thinking teams.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/Gabriel_Alao.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Proficient in JavaScript/TypeScript, React.js, Next.js, Vue.js, Angular, Node.js, Nest.js, C#, .Net, Python, Flask, FastAPI, Django, Golang, 
  Solidity, Rust, Truffle, Hardhat, Ethers.js, Web3.js, MySQL, MS SQL, PostgreSQL, MongoDB, Redis, Kafka, RabbitMQ, AWS, Docker and Git.`,
  aboutItems: [
    {label: 'Location', text: 'Georgetown, TX', Icon: MapIcon},
    {label: 'Cell Phone', text: '+1 (347) 441-0997', Icon: PhoneIcon},
    {label: 'Country', text: 'United States', Icon: FlagIcon},
    {label: 'Email', text: 'gabriel@gabbysoftware.com', Icon: InboxIcon},
    {label: 'Interests', text: 'Gaming, Soccer, Bodybuilding', Icon: SparklesIcon},
    {label: 'Study', text: 'University of California, Berkeley', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React.js',
        level: 10,
      },
      {
        name: 'Next.js',
        level: 10,
      },
      {
        name: 'Vue.js',
        level: 9,
      },
      {
        name: 'Angular',
        level: 9,
      },
      {
        name: 'TypeScript',
        level: 9,
      },
      {
        name: 'CMS',
        level: 9,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 10,
      },
      {
        name: 'Express.js',
        level: 10,
      },
      {
        name: 'C#, .Net',
        level: 9,
      },
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'Golang',
        level: 6,
      },
      {
        name: 'Rust',
        level: 6,
      },
    ],
  },
  {
    name: 'Blockchain development',
    skills: [
      {
        name: 'Web3.js',
        level: 9,
      },
      {
        name: 'Ethers.js',
        level: 9,
      },
      {
        name: 'Solidity',
        level: 8,
      },
      {
        name: 'Hardhat',
        level: 7,
      },
      {
        name: 'Truffle',
        level: 6,
      },
    ],
  },
  {
    name: 'Database management',
    skills: [
      {
        name: 'MySQL',
        level: 9,
      },
      {
        name: 'MS SQL',
        level: 9,
      },
      {
        name: 'PostgreSQL',
        level: 9,
      },
      {
        name: 'MongoDB',
        level: 9,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'NFT.com',
    description: 'The Social NFT Marketplace',
    url: 'https://nft.com',
    image: porfolioImage1,
  },
  {
    title: 'Mack & Pouya Photography',
    description: 'Mack & Pouya’s eCommerce website',
    url: 'https://mackpouya.webflow.io',
    image: porfolioImage4,
  },
  {
    title: 'The Scott Resort & Spa',
    description: 'Scottsdale Resort & Event Venue',
    url: 'https://www.thescottresort.com',
    image: porfolioImage5,
  },
  {
    title: 'HouseLens',
    description: 'Visual Marketing for Real Estate',
    url: 'https://houselens.com',
    image: porfolioImage2,
  },
  {
    title: 'Fiola DC',
    description: 'Michelin-starred Restaurant for Italian Food',
    url: 'https://www.fioladc.com',
    image: porfolioImage3,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2013',
    location: 'Berkeley, CA',
    title: 'Bachelor of Computer Science',
    content: <p>During my university days as a Computer Science student, I developed a strong foundation in software engineering, algorithms, and problem-solving.
    I immersed myself in coding, experimenting with various programming languages and exploring different areas of technology, from web development to database management. This is where my passion for building solutions that can impact real-world applications first took shape.
    </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'April 2022 - Present',
    location: 'Gabby',
    title: 'Full Stack Engineer',
    content: (
      <p>
        As a Full Stack Software Engineer at Gabby, I was deeply involved in the development of scalable and high-performance web applications. 
        I collaborated closely with cross-functional teams to build and enhance features that improved user experience and met business objectives.
        My role encompassed both front-end and back-end development, ensuring seamless integration between client-side interfaces and server-side logic.
      </p>
    ),
  },
  {
    date: 'January 2019 - December 2021',
    location: 'Li.Fi',
    title: 'Senior Software Engineer',
    content: (
      <p>
        As a Senior Software Engineer at Li.Fi, I played a pivotal role in building and optimizing complex blockchain integration systems that powered cross-chain liquidity protocols. 
        I was responsible for architecting and maintaining back-end services that interfaced with various blockchain networks, ensuring seamless asset transfers and swaps across multiple chains.
      </p>
    ),
  },
  {
    date: 'June 2016 - December 2018',
    location: 'Hypar',
    title: 'Software Engineer',
    content: (
      <p>
        As a Software Engineer at Hypar, I contributed to building innovative solutions for automating architectural design workflows. 
        My role involved developing both the back-end systems and front-end interfaces that powered the platform, enabling architects and engineers to create parametric building designs efficiently. 
        I focused on improving the platform’s performance, usability, and integration with third-party services.
      </p>
    ),
  },
  {
    date: 'January 2019 - December 2021',
    location: 'XCEL Corp',
    title: 'Software Engineer',
    content: (
      <p>
        As a Software Engineer at XCEL Corp, I was responsible for developing and maintaining enterprise-level web applications, collaborating with product teams to deliver tailored solutions that enhanced business processes. 
        My role involved working across the entire tech stack to ensure seamless integration between the front-end and back-end systems while ensuring scalability and performance for large user bases.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'James Todd, Founder at TMJ Software',
      text: 'Working with Gabriel has been an absolute pleasure. Their expertise in full stack development and ability to tackle complex challenges with innovative solutions has significantly improved our project outcomes. From backend architecture to front-end design, Gabriel consistently delivers high-quality work on time. I highly recommend them for any development role.',
    },
    {
      name: 'Gavin Mai, CTO at NFT.com',
      text: 'Working with Gabriel on blockchain integration was a game-changer for our project. Their deep understanding of decentralized technologies, smart contracts, and cross-chain protocols helped us build a secure and scalable system. Gabriel consistently delivered high-quality code and was instrumental in optimizing our blockchain infrastructure. I highly recommend their expertise in blockchain development.',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/gabbysolutions'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/gabriel-alao-5b1734330/'},
];
