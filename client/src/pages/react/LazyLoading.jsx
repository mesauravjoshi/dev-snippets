import { Link } from "react-router-dom";

const LazyLoading = () => {

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="mx-auto px-6 py-6">

          <div className="flex items-center gap-4">
            <div>
              <Link to={'/react/lazyLoadingComponent'}>
                <h1 className="text-2xl font-bold text-foreground">Laxy Load component</h1>
              </Link>
              <p className="text-muted-foreground text-sm">Laxy load by clicing on above </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default LazyLoading;