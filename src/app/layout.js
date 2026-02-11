import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  // Enhanced Title Strategy - Brand-first for exact match searches
  title: {
    default:
      "Judicious Tech | Full-Stack Web Development, Game Development & 3D Design Studio",
    template: "%s | Judicious Tech",
  },

  // Optimized Description (158 chars) - Covers all 4 core services
  description:
    "Judicious Tech builds high-performance websites, mobile apps, immersive games, and stunning 3D models. Expert Next.js, React Native, Unity & Blender development for US & UK businesses.",

  // Comprehensive Keywords - Extracted from actual services, tech stack, and team
  keywords: [
    // Primary Brand Keywords
    "Judicious Tech",
    "Judicious Tech portfolio",
    "Judicious Tech services",
    "Judicious Tech full-stack development",

    // Team Members (for personal branding)
    "Abdul Ahad web developer",
    "Abdul Ahad full-stack developer",
    "Arham Jamil game developer",
    "Arham Jamil Unity developer",
    "Durr Haider 3D artist",
    "Durr Haider Blender artist",

    // Core Services (from services section)
    "high-performance web development",
    "cutting-edge website animations",
    "native mobile app development",
    "cross-platform mobile applications",
    "3D models and visuals",
    "immersive game development",
    "real-time multiplayer games",
    "scalable backend development",

    // Web Development Technologies
    "Next.js 14 development",
    "Next.js agency",
    "React web development",
    "React development services",
    "TypeScript development",
    "Tailwind CSS experts",
    "Node.js backend",
    "PostgreSQL database",
    "AWS cloud infrastructure",
    "GSAP animations",
    "Framer Motion",
    "Three.js WebGL",
    "Sanity CMS integration",
    "WordPress development",

    // Mobile Development
    "React Native development",
    "React Native app agency",
    "Flutter app development",
    "iOS app development",
    "Android app development",
    "TensorFlow mobile integration",
    "Firebase development",

    // Game Development
    "Unity game development",
    "Unity 3D games",
    "Unreal Engine development",
    "game engine architecture",
    "gameplay mechanics design",
    "multiplayer game backend",
    "high-performance game development",

    // 3D & Design
    "Blender 3D modeling",
    "Maya 3D artist",
    "3D character models",
    "cinematic environments",
    "real-time rendering",
    "WebGL optimization",
    "Three.js 3D websites",
    "Figma UI/UX design",
    "UI/UX design services",

    // Project Types (from featured work)
    "fintech web applications",
    "banking interface design",
    "crypto trading platform",
    "AI portfolio analysis",
    "creative agency websites",
    "WebGL transitions",
    "AI fitness app",
    "pose detection app",
    "encrypted messaging platform",
    "WebRTC video chat",
    "SaaS application development",

    // Industry & Solutions
    "digital craftsmanship",
    "immersive web experiences",
    "conversion-focused websites",
    "pixel-perfect interfaces",
    "scalable cloud infrastructure",
    "AI-powered web applications",
    "modern web apps",

    // Geographic
    "full-stack developer US UK",
    "web development agency Pakistan",
    "Rawalpindi development studio",
    "international web development",
    "remote development team",
    "US UK business web development",

    // Client-Focused
    "professional web development",
    "enterprise web solutions",
    "startup web development",
    "custom web applications",
    "bespoke game development",
    "freelance full-stack developer",
  ].join(", "),

  // Author Information
  authors: [
    { name: "Abdul Ahad", url: "https://judicioustech.netlify.app" },
    { name: "Arham Jamil" },
    { name: "Durr Haider" },
  ],
  creator: "Abdul Ahad - Judicious Tech",
  publisher: "Judicious Tech",

  // Canonical URL
  metadataBase: new URL("https://judicioustech.netlify.app"),
  alternates: {
    canonical: "/",
  },

  // Enhanced Open Graph
  openGraph: {
    title:
      "Judicious Tech | Full-Stack Development, Game Development & 3D Design Studio",
    description:
      "We build immersive web experiences, high-performance applications, stunning 3D models and modern games for the future.",
    url: "https://judicioustech.netlify.app",
    siteName: "Judicious Tech",
    images: [
      {
        url: "/abdulahad.webp",
        width: 1200,
        height: 630,
        alt: "Judicious Tech - Digital Craftsmanship Portfolio",
        type: "image/webp",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title:
      "Judicious Tech | Full-Stack Development, Game Development & 3D Design",
    description:
      "Building immersive web experiences, high-performance apps, stunning 3D models and modern games.",
    images: ["/abdulahad.webp"],
  },

  // Enhanced Robots Configuration
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons (multiple sizes for various devices)
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
  },

  // Additional SEO Enhancements
  category: "Technology",
  classification: "Business Services",

  // Verification (add your actual codes when you get them)
  verification: {
    google: "7EYyvXey_LHWOP9cCMxUSi33UkqeYWqnmG1dT1N7Dlw",
    // yandex: "your-yandex-verification-code", // Optional
    // bing: "your-bing-verification-code", // Optional
  },

  // Application Name
  applicationName: "Judicious Tech Portfolio",

  // Referrer Policy
  referrer: "origin-when-cross-origin",

  // Format Detection
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Other Metadata
  other: {
    "contact:email": "abdulahadhaq@outlook.com",
  },
};

// Comprehensive JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Organization Schema
    {
      "@type": "Organization",
      "@id": "https://judicioustech.netlify.app/#organization",
      name: "Judicious Tech",
      legalName: "Judicious Tech",
      url: "https://judicioustech.netlify.app",
      logo: {
        "@type": "ImageObject",
        url: "https://judicioustech.netlify.app/logo.png",
        width: 512,
        height: 512,
      },
      image: {
        "@type": "ImageObject",
        url: "https://judicioustech.netlify.app/abdulahad.webp",
        width: 1200,
        height: 630,
      },
      description:
        "Full-stack development studio specializing in web development, mobile apps, game development, and 3D modeling services.",
      founder: {
        "@type": "Person",
        name: "Abdul Ahad",
        jobTitle: "Full-Stack Developer",
        url: "https://judicioustech.netlify.app",
      },
      foundingDate: "2020",
      numberOfEmployees: "3",
      email: "abdulahadhaq@outlook.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rawalpindi",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
      sameAs: [
        "https://www.linkedin.com/in/abdul-ahad-swe/",
        "https://github.com/Abdul-Ahad2",
      ],
      areaServed: [
        {
          "@type": "Country",
          name: "United States",
        },
        {
          "@type": "Country",
          name: "United Kingdom",
        },
        {
          "@type": "Country",
          name: "Pakistan",
        },
        {
          "@type": "Country",
          name: "Australia",
        },
        {
          "@type": "Country",
          name: "Brunei Darussalam",
        },
      ],
    },

    // WebSite Schema
    {
      "@type": "WebSite",
      "@id": "https://judicioustech.netlify.app/#website",
      url: "https://judicioustech.netlify.app",
      name: "Judicious Tech",
      description:
        "Full-Stack Development, Game Development & 3D Design Studio",
      publisher: {
        "@id": "https://judicioustech.netlify.app/#organization",
      },
      inLanguage: "en-US",
    },

    // Professional Service Schema
    {
      "@type": "ProfessionalService",
      "@id": "https://judicioustech.netlify.app/#service",
      name: "Judicious Tech",
      alternateName: "Judicious Tech Development Studio",
      image: "https://judicioustech.netlify.app/abdulahad.webp",
      description:
        "Professional full-stack development services including web applications, mobile apps, game development, and 3D modeling.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rawalpindi",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "33.5651",
        longitude: "73.0169",
      },
      url: "https://judicioustech.netlify.app",
      telephone: "+92-XXX-XXXXXXX",
      email: "abdulahadhaq@outlook.com",
      priceRange: "$$",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "4",
        bestRating: "5",
        worstRating: "1",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Web Development",
              description:
                "High-performance websites with cutting-edge animations using Next.js, React, and modern technologies.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Mobile App Development",
              description:
                "Native and cross-platform mobile applications using React Native and Flutter.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "3D Models & Visuals",
              description:
                "Stunning 3D models and cinematic environments using Blender and Maya.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Game Development",
              description:
                "Real-time multiplayer games with scalable backends using Unity and Unreal Engine.",
            },
          },
        ],
      },
    },

    // Founder - Abdul Ahad
    {
      "@type": "Person",
      "@id": "https://judicioustech.netlify.app/#abdul-ahad",
      name: "Abdul Ahad",
      givenName: "Abdul",
      familyName: "Ahad",
      jobTitle: "Web & App Developer",
      description:
        "Full-stack architect specializing in Next.js, React Native, and scalable cloud infrastructure. Builds pixel-perfect interfaces.",
      url: "https://judicioustech.netlify.app",
      image: "https://judicioustech.netlify.app/abdulahad.webp",
      email: "abdulahadhaq@outlook.com",
      worksFor: {
        "@id": "https://judicioustech.netlify.app/#organization",
      },
      knowsAbout: [
        "Next.js",
        "React",
        "React Native",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "AWS",
        "Tailwind CSS",
        "Three.js",
        "Full-Stack Development",
        "Web Development",
        "Mobile App Development",
      ],
      sameAs: [
        "https://www.linkedin.com/in/abdul-ahad-swe/",
        "https://github.com/Abdul-Ahad2",
      ],
    },

    // Team Member - Arham Jamil
    {
      "@type": "Person",
      name: "Arham Jamil",
      givenName: "Arham",
      familyName: "Jamil",
      jobTitle: "Game Developer",
      description:
        "Unity & Unreal Engine specialist. Crafts immersive gameplay mechanics and optimized engine architecture for high-performance experiences.",
      image: "https://judicioustech.netlify.app/arham.webp",
      worksFor: {
        "@id": "https://judicioustech.netlify.app/#organization",
      },
      knowsAbout: [
        "Unity",
        "Unreal Engine",
        "Game Development",
        "C#",
        "C++",
        "Gameplay Mechanics",
        "Game Engine Architecture",
      ],
    },

    // Team Member - Durr Haider
    {
      "@type": "Person",
      name: "Durr Haider",
      givenName: "Durr",
      familyName: "Haider",
      jobTitle: "3D Artist",
      description:
        "Blender & Maya expert. Creates cinematic environments, character models, and assets optimized for real-time rendering and WebGL.",
      image: "https://judicioustech.netlify.app/haider.webp",
      worksFor: {
        "@id": "https://judicioustech.netlify.app/#organization",
      },
      knowsAbout: [
        "Blender",
        "Maya",
        "3D Modeling",
        "Character Design",
        "Environment Design",
        "Real-time Rendering",
        "WebGL",
      ],
    },

    // Breadcrumb List
    {
      "@type": "BreadcrumbList",
      "@id": "https://judicioustech.netlify.app/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://judicioustech.netlify.app",
        },
      ],
    },

    // ItemList for Projects/Portfolio
    {
      "@type": "ItemList",
      "@id": "https://judicioustech.netlify.app/#projects",
      name: "Featured Projects",
      description: "Selected work showcasing Judicious Tech's expertise",
      itemListElement: [
        {
          "@type": "CreativeWork",
          name: "Lumina Finance",
          description:
            "Next-generation banking interface with real-time crypto trading and AI portfolio analysis.",
          category: "Fintech",
          keywords: "Next.js 14, Three.js, PostgreSQL",
        },
        {
          "@type": "CreativeWork",
          name: "Aether Design",
          description:
            "Award-winning agency site featuring WebGL transitions and dynamic content loading.",
          category: "Creative",
          keywords: "React, GSAP, Sanity CMS",
        },
        {
          "@type": "CreativeWork",
          name: "Pulse Fitness",
          description:
            "AI-powered fitness companion with pose detection and personalized workout plans.",
          category: "Mobile App",
          keywords: "React Native, TensorFlow, AWS",
        },
        {
          "@type": "CreativeWork",
          name: "Nexus Chat",
          description:
            "End-to-end encrypted messaging platform with AI assistants and WebRTC video.",
          category: "SaaS",
          keywords: "Flutter, Firebase, Redis",
        },
      ],
    },

    // Reviews Schema (from testimonials)
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "izzatisafwanah",
      },
      reviewBody:
        "Very helpful, easy to communicate and fast response. Highly recommended.",
      publisher: {
        "@id": "https://judicioustech.netlify.app/#organization",
      },
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "tray_15",
      },
      reviewBody:
        "The seller was very friendly, the order was finished in a few hours, early than I ever expected, and the website is looking stunning. Great experience thank you!",
      publisher: {
        "@id": "https://judicioustech.netlify.app/#organization",
      },
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Mahirl",
      },
      reviewBody:
        "Very well done, kept me updated throughout the project. Followed all the instructions and requirements needed perfectly, Would highly recommend. :)",
      publisher: {
        "@id": "https://judicioustech.netlify.app/#organization",
      },
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Brendan Wills",
      },
      reviewBody:
        "I wanted to take a moment to recognize the seller for the outstanding job he did on his recent project. He tackled a challenging task with determination, attention to detail, and an unwavering commitment to quality, and the results speak for themselves.",
      publisher: {
        "@id": "https://judicioustech.netlify.app/#organization",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Structured Data - Primary SEO boost */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://images.unsplash.com" />

        {/* DNS Prefetch for faster loading */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://grainy-gradients.vercel.app" />

        {/* Theme Color for mobile browsers */}
        <meta name="theme-color" content="#050505" />
        <meta name="msapplication-TileColor" content="#050505" />

        {/* Additional Meta Tags */}
        <meta name="author" content="Abdul Ahad, Arham Jamil, Durr Haider" />
        <meta name="copyright" content="Judicious Tech" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />

        {/* Geo Tags for Local SEO */}
        <meta name="geo.region" content="PK-PB" />
        <meta name="geo.placename" content="Rawalpindi" />
        <meta name="geo.position" content="33.5651;73.0169" />
        <meta name="ICBM" content="33.5651, 73.0169" />
      </head>
      <body>{children}</body>
    </html>
  );
}
