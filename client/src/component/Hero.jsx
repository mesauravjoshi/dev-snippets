import SnippetCard from './SnippetCard';

const JavaScriptIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
    <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.61-.473-.545-1.104-.834-2.124-.815l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.492.069-1.124zm-9.745-5.707v5.627c0 .596.032 1.143-.064 1.312-.158.378-.618.329-.82.258-.204-.09-.346-.261-.481-.529-.037-.067-.067-.135-.135-.27l-1.361.834c.229.472.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.168 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l-2.194-.471z" />
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
    <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-.003-6.857c2.142 0 4.154.398 5.675 1.08 1.797.807 2.892 1.997 2.892 3.277s-1.095 2.47-2.892 3.277c-1.521.682-3.533 1.08-5.675 1.08-2.142 0-4.154-.398-5.675-1.08C4.525 13.47 3.43 12.28 3.43 11s1.095-2.47 2.892-3.277c1.521-.682 3.533-1.08 5.675-1.08zm0-1.143c-2.308 0-4.497.437-6.173 1.19C3.672 7.643 2.287 9.168 2.287 11s1.385 3.357 3.537 4.31c1.676.753 3.865 1.19 6.173 1.19s4.497-.437 6.173-1.19c2.152-.953 3.537-2.478 3.537-4.31s-1.385-3.357-3.537-4.31c-1.676-.753-3.865-1.19-6.173-1.19zM8.46 16.57c1.07 1.855 2.408 3.38 3.74 4.287 1.573 1.072 3.076 1.355 4.18.718 1.103-.637 1.578-2.097 1.398-3.962-.152-1.583-.692-3.394-1.565-5.24-.873-1.845-1.927-3.453-3.048-4.653-1.337-1.43-2.706-2.267-3.811-2.267-.552 0-1.04.197-1.442.574-.805.756-1.018 2.107-.62 3.847.337 1.473.996 3.12 1.896 4.746l.99-1.715c-.67-1.217-1.162-2.454-1.415-3.562-.297-1.295-.18-2.163.274-2.59.227-.213.52-.3.875-.3.75 0 1.744.613 2.8 1.74.95 1.013 1.87 2.404 2.64 4.032.77 1.628 1.253 3.216 1.38 4.542.14 1.466-.173 2.5-.87 2.902-.697.403-1.76.197-2.956-.618-1.076-.732-2.2-1.958-3.14-3.585l-.99 1.715zm7.077-10.14c-1.07-1.855-2.408-3.38-3.74-4.287-1.573-1.072-3.076-1.355-4.18-.718-1.103.637-1.578 2.097-1.398 3.962.152 1.583.692 3.394 1.565 5.24.873 1.845 1.927 3.453 3.048 4.653 1.337 1.43 2.706 2.267 3.811 2.267.552 0 1.04-.197 1.442-.574.805-.756 1.018-2.107.62-3.847-.337-1.473-.996-3.12-1.896-4.746l-.99 1.715c.67 1.217 1.162 2.454 1.415 3.562.297 1.295.18 2.163-.274 2.59-.227.213-.52.3-.875.3-.75 0-1.744-.613-2.8-1.74-.95-1.013-1.87-2.404-2.64-4.032-.77-1.628-1.253-3.216-1.38-4.542-.14-1.466.173-2.5.87-2.902.697-.403 1.76-.197 2.956.618 1.076.732 2.2 1.958 3.14 3.585l.99-1.715z" />
  </svg>
);

const ProjectIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    <line x1="12" y1="11" x2="12" y2="17" />
    <line x1="9" y1="14" x2="15" y2="14" />
  </svg>
);

const Hero = () => {
  const snippetCategories = [
    {
      title: 'JavaScript',
      description: 'Essential vanilla JS snippets for DOM manipulation, async patterns, and utility functions.',
      icon: <JavaScriptIcon />,
      snippetCount: 150,
      variant: 'javascript',
    },
    {
      title: 'React',
      description: 'Hooks, components, and patterns for building modern React applications.',
      icon: <ReactIcon />,
      snippetCount: 200,
      variant: 'react',
    },
    {
      title: 'Projects',
      description: 'Full project templates and boilerplates to kickstart your React Vite application.',
      icon: <ProjectIcon />,
      snippetCount: 50,
      variant: 'project',
    },
  ];

  return (
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
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
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
            <button className="px-8 py-3 rounded-lg bg-foreground text-background font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105">
              Browse Snippets
            </button>
            <button className="px-8 py-3 rounded-lg border border-border bg-secondary/50 text-foreground font-semibold hover:bg-secondary transition-all duration-300 hover:scale-105 font-mono">
              {"</"} View Docs
            </button>
          </div>
        </div>

        {/* Snippet Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {snippetCategories.map((category, index) => (
            <SnippetCard
              key={category.title}
              {...category}
              delay={600 + index * 150}
            />
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
  );
};

export default Hero;
