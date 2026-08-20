import { createFileRoute, Link } from '@tanstack/react-router'
import { 
  ArrowRight, 
  Target, 
  Sparkles, 
  Compass, 
  Users, 
  Search, 
  PenTool, 
  Rocket, 
  TrendingUp,
  Mail, 
  Phone, 
  Linkedin, 
  Instagram, 
  Twitter, 
  Facebook, 
  MessageSquare
} from 'lucide-react'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  const values = [
    {
      icon: Sparkles,
      title: 'Craft Over Quantity',
      description: 'Every pixel, line of code, and word is intentional. We obsess over the details others overlook.',
    },
    {
      icon: Target,
      title: 'Outcomes First',
      description: 'Beautiful work is the baseline. Measurable growth is the goal — and the only thing we ship for.',
    },
    {
      icon: Compass,
      title: 'Curious by Default',
      description: 'The digital landscape never stops evolving. Neither do we — we learn, test, and adapt constantly.',
    },
    {
      icon: Users,
      title: 'Built on Partnership',
      description: 'Your wins are our wins. We embed with your team, not above it, to build something lasting.',
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Discover',
      description: 'Deep-dive workshops to understand your business, customers, competitors, and growth ceiling.',
      icon: Search,
    },
    {
      step: '02',
      title: 'Design',
      description: 'Strategy translates into wireframes, brand systems, and conversion-focused experiences.',
      icon: PenTool,
    },
    {
      step: '03',
      title: 'Deliver',
      description: 'Pixel-perfect engineering, content production, and launch coordination across every channel.',
      icon: Rocket,
    },
    {
      step: '04',
      title: 'Optimize',
      description: 'Data informs the next sprint. We iterate monthly with full transparency and shared dashboards.',
      icon: TrendingUp,
    },
  ]

  const teamMembers = [
    {
      name: 'Sehar Aslam',
      role: 'Vector Artist & SMM',
      email: 'sehar@bfash.us',
      linkedin: 'https://www.linkedin.com/company/bfashsolution',
      image: '/team/sehar.jpg',
    },
    {
      name: 'Abraham Boutros',
      role: 'Ad Marketing & Sales Manager',
      email: 'abraham@bfash.us',
      linkedin: 'https://www.linkedin.com/in/abrahamboutros/',
      image: '/Boutros.jpg',
    },
    {
      name: 'Faisal Shafqat',
      role: 'Web Developer & Growth Lead',
      email: 'faisal@bfash.us',
      linkedin: 'https://www.linkedin.com/company/bfashsolution',
      image: '/team/faisal.jpg',
    },
    {
      name: 'Bilal Mukhtar',
      role: 'TikTok Shop & SEO Specialist',
      email: 'bilal@bfash.us',
      linkedin: 'https://www.linkedin.com/company/bfashsolution',
      image: '/team/bilal.jpg',
    },
    {
      name: 'Hafeez Ahmad',
      role: 'Video Editor & Illustration Designer',
      email: 'hafeez@bfash.us',
      linkedin: 'https://www.linkedin.com/company/bfashsolution',
      image: '/team/hafeez.jpg',
    },
    {
      name: 'Ahmad Mahfooz',
      role: 'Advertisement & CRM Manager',
      email: 'ahmad@bfash.us',
      linkedin: 'https://www.linkedin.com/company/bfashsolution',
      image: '/team/ahmad.jpg',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="BFash Solution" className="h-9 w-auto" />
            <span className="text-xl font-bold tracking-tight text-white">BFash Solution</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            <Link to="/about" className="text-cyan-400">About Us</Link>
            <a href="/#services" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="/#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</a>
            <a href="/#contact" className="hover:text-cyan-400 transition-colors">Contact Us</a>
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-6">
            About Us
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            We Turn Ambitious Brands Into Category Leaders
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            BFash Solutions is a full-service digital agency. We pair strategic thinking with sharp execution to help founders, marketers, and operators win online.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 border-t border-slate-800/60 bg-slate-900/40">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-xs font-bold tracking-widest text-cyan-400 uppercase mb-3">Our Mission</h2>
            <p className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              To make world-class digital craftsmanship — strategy, design, engineering, and growth — accessible to brands ready to scale, without the bloat of a traditional agency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => {
              const Icon = val.icon
              return (
                <div
                  key={val.title}
                  className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{val.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{val.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 border-t border-slate-800/60">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold tracking-widest text-cyan-400 uppercase mb-3">Our Process</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-white">A framework built for clarity and momentum</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.step} className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 relative flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase">Step {step.step}</span>
                      <Icon className="w-5 h-5 text-slate-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 border-t border-slate-800/60 bg-slate-900/40">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold tracking-widest text-cyan-400 uppercase mb-3">The Team</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-white">Meet the people building it with you</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-slate-900/80 rounded-2xl border border-slate-800 overflow-hidden flex flex-col p-6 hover:border-cyan-500/30 transition-all"
              >
                <div className="w-full aspect-square rounded-xl bg-slate-800/80 mb-6 overflow-hidden flex items-center justify-center border border-slate-700/50">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback placeholder icon if local image is not found
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center')
                    }}
                  />
                  <Users className="w-12 h-12 text-slate-600" />
                </div>
                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                <p className="text-xs font-medium text-cyan-400 mb-4">{member.role}</p>
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs mt-auto">
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{member.email}</span>
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-16 text-sm text-slate-400">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="BFash Solution" className="h-8 w-auto" />
                <span className="text-lg font-bold text-white">BFash Solution</span>
              </div>
              <p className="text-slate-400 max-w-sm">
                Elevating your digital potential. We build, brand, and scale modern businesses online.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-wider text-slate-200 uppercase mb-4">Quick Links</h4>
              <ul className="space-y-2.5">
                <li><Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
                <li><a href="/#services" className="hover:text-cyan-400 transition-colors">Services</a></li>
                <li><a href="/#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</a></li>
                <li><a href="/#contact" className="hover:text-cyan-400 transition-colors">Contact Us</a></li>
                <li><a href="/#contact" className="hover:text-cyan-400 transition-colors">Get a Free Quote</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-wider text-slate-200 uppercase mb-4">Get in Touch</h4>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:info@bfash.us" className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>info@bfash.us</span>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/923254258512" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>+92 (325) 425-8512</span>
                  </a>
                </li>
              </ul>
              <div className="flex items-center gap-3 mt-6">
                <a href="https://www.linkedin.com/company/bfashsolution" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-cyan-400 hover:border-cyan-500/40 transition-all">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/bfash.us" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-cyan-400 hover:border-cyan-500/40 transition-all">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://x.com/BFashSolution" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-cyan-400 hover:border-cyan-500/40 transition-all">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="https://facebook.com/BFashSolution" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-cyan-400 hover:border-cyan-500/40 transition-all">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://wa.me/923254258512" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-cyan-400 hover:border-cyan-500/40 transition-all">
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-900 text-center text-xs text-slate-500">
            © 2026 BFash Solution. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}