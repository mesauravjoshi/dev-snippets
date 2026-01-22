import { lazy } from 'react';
import './App.css'
import GenerateURL from './pages/GenerateURL';
import Debounce from '@/pages/javascript/Debounce';
import Throt from '@/pages/javascript/Throt';
import Login from './pages/Login';
import Redux from './pages/Redux';
import Tanstack from './pages/Tanstack';
import SmartUserList from './pages/SmartUserList';
import MiniPostman from './pages/MiniPostman';
import ShoppingCart from './pages/ShoppingCart';
import Kanban from './pages/Kanban';
import InfiniteScrolling from './pages/InfiniteScrolling';
import Pagination from '@/pages/Pagination';
import Index from './pages/index';
// import LazyLoading from './pages/LazyLoading';
import { Link, Route, Routes } from 'react-router-dom';

const LazyLoading = lazy(() => import('./pages/LazyLoading'))
function App() {

  return (
    <>
      <Routes>
        <Route path='auth'>
          <Route path='login' element={<Login />} />
        </Route>
        <Route path='/' element={<Home />} />
        <Route path='/Index' element={<Index />} />
        <Route path='/home' element={<Home />} />
        <Route path='/generateURL' element={<GenerateURL />} />
        <Route path='/debounce' element={<Debounce />} />
        <Route path='/redux' element={<Redux />} />
        <Route path='/throt' element={<Throt />} />
        <Route path='/tanstack' element={<Tanstack />} />
        <Route path='/laxyloading' element={<LazyLoading />} />
        <Route path='/smartUserList' element={<SmartUserList />} />
        <Route path='/miniPostman' element={<MiniPostman />} />
        <Route path='/shopping-cart' element={<ShoppingCart />} />
        <Route path='/kanban' element={<Kanban />} />
        <Route path='/infiniteScrolling' element={<InfiniteScrolling />} />
        <Route path='/pagination' element={<Pagination />} />
      </Routes>
    </>
  )
}

export default App

const Home = () => {
  const lists = [
    { id: 'infiniteScrolling', name: 'InfiniteScrolling', route: '/infiniteScrolling' },
    { id: 'kanban', name: 'Kanban', route: '/kanban' },
    { id: 1, name: 'Shopping Cart', route: '/shopping-cart' },
    { id: 2, name: 'Smart User List', route: '/smartUserList' },
    { id: 3, name: 'Mini Post man', route: '/miniPostman' },
    { id: 4, name: 'Debounce', route: '/debounce' },
    { id: 'throt', name: 'Throtling', route: '/throt' },
    { id: 'redux', name: 'Redux', route: '/redux' },
    { id: 'tanstack', name: 'Tanstack', route: '/tanstack' },
    { id: 'Pagination', name: 'Pagination', route: '/pagination' },
  ];

  return (
    <div>
      <h1 className='text-3xl'>
        <p className='text-2xl'>
          <Link to={'/laxyloading'}>
            Laxy load
          </Link>
        </p>
      </h1>

      <div className="min-h-screen p-8">
        <div className="max-w-6xl mx-auto">

          <div className="bg-[#2c2c2c] backdrop-blur-md rounded-2xl shadow-xl border border-zinc-200">

            {/* Header */}
            <div className="px-6 py-5 border-b border-zinc-200">
              <h2 className="text-2xl font-semibold text-center">
                List of routes
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">

                <thead>
                  <tr className="border-b border-zinc-200 text-sm uppercase tracking-wide">
                    <th className="px-6 py-4 text-left border-r border-zinc-300">S. No</th>
                    <th className="px-6 py-4 text-left border-r border-zinc-300">Topic</th>
                    <th className="px-6 py-4 text-left border-r border-zinc-300">Route</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-zinc-200">
                  {lists.map((fruit, index) => (
                    <tr
                      key={fruit.id}
                    >
                      <td className="px-6 py-4 text-sm border-r border-zinc-200">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium border-r border-zinc-200">
                        {fruit.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-sky-600 border-r border-zinc-200">
                        <span className='cursor-pointer'>
                          <Link to={fruit.route}>
                            {fruit.route}
                          </Link>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
