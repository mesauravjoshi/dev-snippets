import { Link, useNavigate } from 'react-router-dom';
import { ReactIcon } from '@/assets/icons/Icons';
import { Outlet } from 'react-router-dom';
import { useState } from 'react'
import ViewCodeModal from '@/component/Modal/ViewCodeModal';
// FOR RAW DATA 
import InfiniteScrolling from '@/pages/react/InfiniteScrolling.jsx?raw';
import Redux from '@/pages/react/Redux.jsx?raw';
import Tanstack from '@/pages/Tanstack.jsx?raw';
import Pagination from '@/pages/react/Pagination.jsx?raw';
import LazyLoading from '@/pages/react/LazyLoading.jsx?raw';

const snippetsData = [
  { id: 'infiniteScrolling', name: 'InfiniteScrolling', route: 'infiniteScrolling' },
  { id: 'redux', name: 'Redux', route: 'redux' },
  { id: 'tanstack', name: 'Tanstack', route: 'tanstack' },
  { id: 'Pagination', name: 'Pagination', route: 'pagination' },
  { id: 'laxyloading', name: 'Laxy loading', route: 'laxyloading' },
];

const codeMap = {
  infiniteScrolling: InfiniteScrolling,
  redux: Redux,
  tanstack: Tanstack,
  Pagination: Pagination,
  laxyloading: LazyLoading,
};


const ReactSnippets = () => {
  return (
    <Outlet />
  );
};

export default ReactSnippets;

export const ReactList = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [selctedCode, setSelctedCode] = useState('');
  const [codeBLockTitle, setCodeBLockTitle] = useState('');

  const handleVewCode = (snippetId, snippetName) => {
    const code = codeMap[snippetId];
    setSelctedCode(code);
    setCodeBLockTitle(snippetName)
    setOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-6 py-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span className="font-mono text-sm">Back to Home</span>
          </button>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center bg-[#1c2c35] justify-center">
              <span className="text-[#22d3ee] ">
                <ReactIcon />
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">React Snippets</h1>
              <p className="text-muted-foreground text-sm">Essential React snippets for modern development</p>
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="container mx-auto px-6 py-8">
        <div className="rounded-xl border border-border overflow-hidden bg-card">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-secondary/50">
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">#</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Name</th>
                {/* <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Description</th> */}
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">View</th>
              </tr>
            </thead>
            <tbody>
              {snippetsData.map((snippet, index) => (
                <tr
                  key={snippet.id}
                  className="border-b border-border last:border-b-0 hover:bg-secondary/30 transition-colors"
                >
                  <td className="px-6 py-4 text-sm text-muted-foreground font-mono">{index + 1}</td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-[#22d3ee]">{snippet.name}</span>
                  </td>
                  {/* <td className="px-6 py-4 text-sm text-muted-foreground max-w-md">
                    {snippet.description}
                  </td> */}
                  <td className="px-6 py-4 flex gap-2">
                    <Link className="px-4 py-2 rounded-lg text-sm font-medium bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
                      to={snippet.route}>
                      View
                    </Link>
                    <p className="px-4 py-2 rounded-lg text-sm font-medium bg-secondary hover:bg-secondary/80 text-foreground transition-colors cursor-pointer"
                      onClick={() => handleVewCode(snippet.id, snippet.name)}
                    >
                      Code
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ViewCodeModal
          open={open}
          setOpen={setOpen}
          code={selctedCode}
          title={codeBLockTitle}
        />

        {/* Stats */}
        <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground">
          <span className="font-mono">Showing {snippetsData.length} snippets</span>
          <span className="font-mono">Total: 150+ snippets available</span>
        </div>
      </div>
    </div>
  )
}
