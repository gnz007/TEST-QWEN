import { useState } from 'react'
import { ArrowUpRight, Award, Crown, X } from 'lucide-react'

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4'

const navLinks = ['Projects', 'Studio', 'Offerings', 'Inquire']

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-40 px-6 sm:px-10 lg:px-16 py-5 lg:py-7">
        <div className="flex items-center justify-between">
          {/* Brand Name */}
          <span className="font-podium text-white font-bold uppercase text-2xl sm:text-3xl tracking-wider">
            VANGUARD
          </span>

          {/* Center Nav Links (hidden below md) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-inter text-sm text-white/80 tracking-widest uppercase hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right Side - Desktop GET IN TOUCH button (hidden below md) */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 px-6 py-3 text-xs tracking-widest uppercase hover:bg-white/10 transition-colors"
            >
              Get in Touch
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Side - Mobile Hamburger (visible below md) */}
          <button
            className="md:hidden flex flex-col space-y-1.5"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <div className="w-6 h-0.5 bg-white" />
            <div className="w-6 h-0.5 bg-white" />
            <div className="w-4 h-0.5 bg-white" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-sm transition-all duration-500 ${
            menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          {/* Header Row */}
          <div className="flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5 lg:py-7">
            <span className="font-podium text-white font-bold uppercase text-2xl sm:text-3xl tracking-wider">
              VANGUARD
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Centered Nav Links with Staggered Animations */}
          <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)] gap-6">
            {navLinks.map((link, i) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="font-podium text-4xl sm:text-5xl text-white uppercase transition-all duration-500"
                style={{
                  transitionDelay: `${i * 80 + 100}ms`,
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                {link}
              </a>
            ))}

            {/* GET IN TOUCH Button with Staggered Animation */}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-8 inline-flex items-center gap-2 border border-white/30 hover:border-white/60 px-6 py-3 text-xs tracking-widest uppercase hover:bg-white/10 transition-all duration-500"
              style={{
                transitionDelay: `${navLinks.length * 80 + 100}ms`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              Get in Touch
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}

      {/* Hero Content - Vertically Centered, Left-Aligned */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-10 lg:px-16 pt-20">
        <div className="max-w-4xl">
          {/* Tagline */}
          <div className="animate-fade-up mb-6 lg:mb-8 flex items-center gap-2">
            <Crown className="w-4 h-4 text-white/70" />
            <span className="text-white/70 text-xs sm:text-sm font-inter tracking-[0.3em] uppercase">
              World-Class Digital Collective
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="animate-fade-up-delay-1 font-podium text-white uppercase leading-[0.92] tracking-tight">
            <div className="text-[clamp(2.8rem,8vw,7rem)]">Design.</div>
            <div className="text-[clamp(2.8rem,8vw,7rem)]">Disrupt.</div>
            <div className="text-[clamp(2.8rem,8vw,7rem)]">Conquer.</div>
          </h1>

          {/* Subtext */}
          <p className="animate-fade-up-delay-2 mt-6 lg:mt-8 text-white/70 text-sm sm:text-base font-inter leading-relaxed max-w-md">
            We build fierce brand identities<br />
            that don't just turn heads --{' '}
            <strong className="text-white">they lead.</strong>
          </p>

          {/* CTA Row */}
          <div className="animate-fade-up-delay-3 mt-8 lg:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 bg-black hover:bg-neutral-900 px-5 sm:px-7 py-3 sm:py-4 text-[11px] sm:text-xs tracking-widest uppercase"
            >
              See Our Work
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Award Badge (hidden on mobile) */}
            <div className="hidden sm:flex items-center gap-3">
              <Award className="w-8 h-8 text-white/50" />
              <div className="flex flex-col">
                <span className="text-white/60 text-xs tracking-wider uppercase">Top-Rated</span>
                <span className="text-white/60 text-xs tracking-wider uppercase">Brand Studio</span>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="animate-fade-up-delay-4 mt-8 sm:mt-10 lg:mt-14 flex flex-wrap gap-6 sm:gap-12 lg:gap-16">
            <div>
              <div className="font-inter text-white text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                250+
              </div>
              <div className="text-white/50 text-[9px] sm:text-xs tracking-widest uppercase mt-1">
                Brands Transformed
              </div>
            </div>
            <div>
              <div className="font-inter text-white text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                95%
              </div>
              <div className="text-white/50 text-[9px] sm:text-xs tracking-widest uppercase mt-1">
                Client Retention
              </div>
            </div>
            <div>
              <div className="font-inter text-white text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                10+
              </div>
              <div className="text-white/50 text-[9px] sm:text-xs tracking-widest uppercase mt-1">
                Years in the Game
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
