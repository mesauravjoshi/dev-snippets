const LazyLoadingComponent = () => {

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground">This componenet is render after laxy load</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default LazyLoadingComponent;