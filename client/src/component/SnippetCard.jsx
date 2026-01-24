
const SnippetCard = ({ title, description, icon, snippetCount, variant, delay = 0 }) => {
  // const colorClasses = {
  //   javascript: 'text-javascript',
  //   react: 'text-react',
  //   project: 'text-project',
  // };

  // const bgClasses = {
  //   javascript: 'bg-javascript/10',
  //   react: 'bg-react/10',
  //   project: 'bg-project/10',
  // };

  return (
    <div
      className={`snippet-card snippet-card-${variant} group cursor-pointer animate-slide-up border border-[#2b303b] bg-[#14181f] p-6 rounded-2xl`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Icon container */}
      <div className={`w-14 h-14 rounded-xl ${bgClasses[variant]} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
        <span className={colorClasses[variant]}>{icon}</span>
      </div>

      {/* Title */}
      <h3 className={`text-xl font-semibold mb-2 ${colorClasses[variant]} transition-colors duration-300`}>
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
        {description}
      </p>

      {/* Snippet count */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <div className={`w-2 h-2 rounded-full ${bgClasses[variant].replace('/10', '')}`} />
        <span className="font-mono">{snippetCount}+ snippets</span>
      </div>

      {/* Code decoration */}
      <div className="absolute top-4 right-4 font-mono text-xs text-muted-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {"</>"}
      </div>
    </div>
  );
};

export default SnippetCard;
