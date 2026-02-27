import Link from 'next/link'
import { formatDate, getBlogPosts } from '@/app/blog/utils'

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

const services = [
  {
    title: 'Frontend Development',
    description:
      'Building modern, responsive web applications with React, Next.js, and Tailwind CSS. Pixel-perfect implementations that perform beautifully across all devices.',
  },
  {
    title: 'Backend Development',
    description:
      'Designing robust server architectures with Node.js, Express, and databases like MySQL and MongoDB. APIs that scale, systems that last.',
  },
  {
    title: 'AI & Agent Frameworks',
    description:
      'Exploring the frontier of AI-powered applications with Google ADK and LangChain. Building intelligent agents that solve real problems, not just demos.',
  },
  {
    title: 'Design & Prototyping',
    description:
      'Crafting interfaces in Figma and Framer with a focus on clarity and delight. Design that serves the user, not the designer\'s ego.',
  },
]

const projects = [
  {
    title: 'Node.js Web Service',
    location: 'Backend · API',
    description:
      'A production-grade web service built with Node.js and Express, featuring RESTful APIs, authentication, and database integration.',
    bullets: [
      'RESTful API design with Express.js',
      'MySQL & MongoDB data layer',
      'JWT authentication & middleware',
    ],
  },
  {
    title: 'React Web Application',
    location: 'Frontend · SPA',
    description:
      'A modern single-page application built with React, featuring component-driven architecture and state management.',
    bullets: [
      'Component-driven UI architecture',
      'State management & routing',
      'Responsive design with Tailwind CSS',
    ],
  },
  {
    title: 'Next.js Web Application',
    location: 'Full Stack · SSR',
    description:
      'A full-stack Next.js application with server-side rendering, API routes, and optimized performance.',
    bullets: [
      'Server-side rendering & static generation',
      'API routes & server actions',
      'Deployed on Vercel with CI/CD',
    ],
  },
]

const principles = [
  {
    title: 'Pursue perfection',
    description:
      'In design, in code, in everything. Every pixel, every function, every interaction should feel intentional and inevitable.',
  },
  {
    title: 'Build to last',
    description:
      'Write code that your future self will thank you for. Systems that scale, patterns that hold, architecture that breathes.',
  },
  {
    title: 'Stay curious',
    description:
      'The best builders never stop learning. AI, design systems, new frameworks — the frontier is where the interesting work lives.',
  },
  {
    title: 'Think in systems',
    description:
      'Components, tokens, APIs, workflows. Everything is a system. Understanding the connections matters more than the parts.',
  },
  {
    title: 'Ship, then iterate',
    description:
      'Perfect is the enemy of done. Get it out there, learn from real usage, and make it better. Velocity with taste.',
  },
  {
    title: 'Communicate clearly',
    description:
      'Great code means nothing if you can\'t explain the why. Clarity in conversation is just as important as clarity on screen.',
  },
]

export default function Page() {
  const allBlogs = getBlogPosts()
    .sort((a, b) =>
      new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? -1 : 1
    )

  return (
    <div className="h-screen overflow-hidden">
      <div className="h-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold tracking-tight">
            Jacoy Yue
          </Link>
          <div className="flex items-center gap-8">
            {[
              { href: '#services', label: 'Skills' },
              { href: '#work', label: 'Projects' },
              { href: '#blog', label: 'Blog' },
              { href: '#about', label: 'About' },
              { href: '#contact', label: 'Contact' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero — fullpage */}
      <section
        id="hero"
        className="min-h-screen snap-start flex flex-col justify-center pt-14 px-6 pb-20"
      >
        <div className="max-w-6xl mx-auto w-full">
          <p className="text-sm text-neutral-500 mb-6">Based in Xiamen, China</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] max-w-4xl">
            Jacoy Yue{' '}
            <span className="text-neutral-400 dark:text-neutral-500">·</span>{' '}
            <span className="text-neutral-400 dark:text-neutral-500">
              Developer, Designer & AI Explorer
            </span>
          </h1>
          <div className="mt-12 max-w-2xl space-y-4">
            <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed">
              Xiamen University — Anthropology & Statistics. I build things at the intersection of code, design, and artificial intelligence. I care about craft, clarity, and shipping work that matters.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed italic">
              Basically my excuse to nerd out about systems, pixels, and AI, while pretending it&apos;s all very serious professional work.
            </p>
          </div>
        </div>
      </section>

      {/* Services / Skills — fullpage */}
      <section
        id="services"
        className="min-h-screen snap-start flex flex-col justify-center py-20 px-6 border-t border-neutral-200 dark:border-neutral-800"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {services.map((service) => (
              <div key={service.title}>
                <h3 className="text-lg font-semibold tracking-tight mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          {/* Tech Stack Tags */}
          <div className="mt-16 flex flex-wrap gap-2">
            {[
              'HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS',
              'Node.js', 'Express.js', 'MySQL', 'MongoDB',
              'Git', 'GitHub', 'Vercel', 'Docker',
              'Figma', 'Framer',
              'Cursor', 'Relume',
              'Google ADK', 'LangChain',
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Work / Projects — fullpage */}
      <section
        id="work"
        className="min-h-screen snap-start flex flex-col justify-center py-20 px-6 border-t border-neutral-200 dark:border-neutral-800"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="space-y-0 divide-y divide-neutral-200 dark:divide-neutral-800">
            {projects.map((project) => (
              <div
                key={project.title}
                className="py-10 first:pt-0 last:pb-0 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8"
              >
                <div>
                  <p className="text-xs text-neutral-500 mb-2 uppercase tracking-wider">
                    {project.location}
                  </p>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                </div>
                <div>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <ul className="space-y-1.5">
                    {project.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="text-sm text-neutral-500 dark:text-neutral-400 flex items-start gap-2"
                      >
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-600 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog — fullpage */}
      <section
        id="blog"
        className="min-h-screen snap-start flex flex-col justify-center py-20 px-6 border-t border-neutral-200 dark:border-neutral-800"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
              Blog
            </h2>
            <Link
              href="/blog"
              className="text-sm text-neutral-500 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1"
            >
              See all posts <span>→</span>
            </Link>
          </div>
          <div className="space-y-0 divide-y divide-neutral-200 dark:divide-neutral-800">
            {allBlogs.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="py-5 first:pt-0 flex flex-col md:flex-row md:items-center gap-1 md:gap-4 group"
              >
                <p className="text-sm text-neutral-500 w-[120px] tabular-nums shrink-0">
                  {formatDate(post.metadata.publishedAt)}
                </p>
                <p className="text-base font-medium tracking-tight group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                  {post.metadata.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About — fullpage */}
      <section
        id="about"
        className="min-h-screen snap-start flex flex-col justify-center py-20 px-6 border-t border-neutral-200 dark:border-neutral-800"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-6">
                About me
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed">
                I&apos;m exploring three things with everything I have: <strong className="text-black dark:text-white font-semibold">Design</strong> — pursuing a level of craft that feels truly perfect. <strong className="text-black dark:text-white font-semibold">Programming</strong> — have you seen Zuckerberg in The Social Network? That&apos;s who I want to be. <strong className="text-black dark:text-white font-semibold">AI</strong> — a new wave is here, and I want to find the real direction within it.
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed">
                Outside of building, I play piano, listen to hip-hop, and lose myself in vibe coding and design. I believe the best work comes from the intersection of obsession and taste.
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed italic">
                What I carry in my mind is the ancient Greek idea of the gadfly, the metaphor of pushing a boulder uphill day after day. What I aim to do is bring something so perfect it feels like stealing fire from the gods.
              </p>
            </div>
          </div>

          {/* Principles */}
          <div className="mt-20">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-10">
              Principles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-10">
              {principles.map((principle) => (
                <div key={principle.title}>
                  <h3 className="text-base font-semibold tracking-tight mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact — fullpage */}
      <section
        id="contact"
        className="min-h-screen snap-start flex flex-col justify-center py-20 px-6 border-t border-neutral-200 dark:border-neutral-800"
      >
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            Let&apos;s connect
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed max-w-xl mb-4">
            Welcome to talk about anything about the future — you have no idea how crazy my imagination is. We&apos;re just one programmer away from changing the world. (Just Joking)
          </p>
          <div className="flex items-center gap-6 mt-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
            >
              <ArrowUpRight className="w-3 h-3" />
              GitHub
            </a>
            <a
              href="mailto:hello@example.com"
              className="flex items-center gap-2 text-sm text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
            >
              <ArrowUpRight className="w-3 h-3" />
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer — not fullpage, follows contact */}
      <footer className="py-8 px-6 border-t border-neutral-200 dark:border-neutral-800 snap-start">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} Jacoy Yue. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/rss"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
            >
              RSS
            </a>
          </div>
        </div>
      </footer>
      </div>
    </div>
  )
}
