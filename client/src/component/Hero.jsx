// import SnippetCard from '@/component/SnippetCard';
import { JavaScriptIcon, ReactIcon, ProjectIcon } from '@/assets/icons/Icons';
import { Link } from 'react-router-dom';

const Hero = () => {
  const snippetCategories = [
    {
      title: 'JavaScript',
      description: 'Essential vanilla JS snippets for DOM manipulation, async patterns, and utility functions.',
      icon: <JavaScriptIcon />,
      snippetCount: 150,
      variant: 'javascript',
      href: '/javascript',
    },
    {
      title: 'React',
      description: 'Hooks, components, and patterns for building modern React applications.',
      icon: <ReactIcon />,
      snippetCount: 200,
      variant: 'react',
      href: '/react',
    },
    {
      title: 'Projects',
      description: 'Full project templates and boilerplates to kickstart your React Vite application.',
      icon: <ProjectIcon />,
      snippetCount: 50,
      variant: 'project',
      href: '/project',
    },
  ];

  const colorClasses = {
    javascript: '#facc15',
    react: '#22d3ee',
    projects: '#a855f7',
  };

  const bgClasses = {
    javascript: '#2c2b1c',
    react: '#1c2c35',
    projects: '#211e32',
  };

  return (
    <main className="min-h-screen bg-background">
      <section className="relative min-h-screen overflow-hidden">
        {/* Background glows */}
        <div className="hero-glow bg-project top-20 -left-40 animate-pulse-slow" />
        <div className="hero-glow bg-react top-40 right-0 animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="hero-glow bg-javascript bottom-20 left-1/3 animate-pulse-slow" style={{ animationDelay: '4s' }} />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] " />

        <div className="container relative z-10 mx-auto px-6 py-20 lg:py-32">
          {/* Header */}
          <div className="text-center mb-16 lg:mb-24">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse bg-[#7b71b4]" />
              <span className="text-sm font-medium text-muted-foreground font-mono">
                developer snippets
              </span>
            </div>

            {/* Main title */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 animate-slide-up tracking-tight">
              <span className="text-foreground">Code faster with</span>
              <br />
              <span className="text-gradient">Dev Snippet</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up leading-relaxed" style={{ animationDelay: '200ms' }}>
              A curated collection of production-ready code snippets for modern web development.
              Copy, paste, and ship faster.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-10 animate-slide-up" style={{ animationDelay: '400ms' }}>
              <button className="px-8 py-3 rounded-lg bg-purple-200 text-[#392748] font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105">
                Browse Snippets
              </button>
              <button className="px-8 py-3 rounded-lg border border-[#344648c0] bg-[#1c2627] text-foreground font-semibold hover:bg-secondary transition-all duration-300 hover:scale-105 font-mono ">
                {"</"} View Docs
              </button>
            </div>
          </div>

          {/* Snippet Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {snippetCategories.map((category, index) => (
              // <SnippetCard
              //   key={category.title}
              //   {...category}
              //   delay={600 + index * 150}
              // />
              <div
                key={category.title}
                className={`snippet-card snippet-card group cursor-pointer animate-slide-up border border-[#2b303b] bg-[#14181f] p-6 rounded-2xl`}
                style={{ animationDelay: `${category.delay}ms` }}
              >
                <Link to={category.href}>
                  {/* Icon container */}
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 bg-[${bgClasses[category.title.toLowerCase()]}]`}>
                    <span className={`text-[${colorClasses[category.title.toLowerCase()]}]`}>{category.icon}</span>
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 text-[${colorClasses[category.title.toLowerCase()]}]`}>
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Snippet count */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className={`w-2 h-2 rounded-full bg-[${colorClasses[category.title.toLowerCase()]}]`} />
                    <span className="font-mono">{category.snippetCount}+ snippets</span>
                  </div>

                  {/* Code decoration */}
                  <div className="absolute top-4 right-4 font-mono text-xs text-muted-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {"</>"}
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Stats section */}
          <div className="mt-20 flex flex-wrap items-center justify-center gap-12 lg:gap-20 animate-slide-up" style={{ animationDelay: '1200ms' }}>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-foreground font-mono">500+</div>
              <div className="text-sm text-muted-foreground mt-1">Snippets</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-foreground font-mono">3</div>
              <div className="text-sm text-muted-foreground mt-1">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-foreground font-mono">10k+</div>
              <div className="text-sm text-muted-foreground mt-1">Developers</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
