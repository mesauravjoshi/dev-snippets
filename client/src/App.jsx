import { lazy } from 'react';
import './App.css'
import GenerateURL from '@/pages/GenerateURL';
import { Link, Route, Routes } from 'react-router-dom';
import Javascript, { JavaScriptList } from '@/pages/JavaScriptSnippets';
import React, { ReactList } from '@/pages/ReactSnippets';
import NodeJSSnippet, { NodeJSList } from '@/pages/NodeJSSnippet';
import Hero from '@/component/Hero';
// JS nested pages 
import { Debounce, Throt, EventDelegation } from '@/pages/javascript';
// react nested pages 
import {
  Redux,
  LazyLoading,
  InfiniteScrolling,
  Pagination,
} from '@/pages/react';
import Login from '@/pages/Login';
import Tanstack from '@/pages/Tanstack';
import SmartUserList from '@/pages/SmartUserList';
import MiniPostman from '@/pages/MiniPostman';
import ShoppingCart from '@/pages/ShoppingCart';
import Kanban from '@/pages/Kanban';

const LazyLoadingComponent = lazy(() => import('@/pages/react/LazyLoadingComponent'))
function App() {

  return (
    <>
      <Routes>
        <Route path='auth'>
          <Route path='login' element={<Login />} />
        </Route>
        <Route path='/' element={<Hero />} />
        <Route path='/home' element={<Home />} />

        {/* Javascript */}
        <Route path="javascript" element={<Javascript />}>
          <Route index element={<JavaScriptList />} />
          <Route path="debounce" element={<Debounce />} />
          <Route path="throt" element={<Throt />} />
          <Route path="eventdelegation" element={<EventDelegation />} />
        </Route>

        {/* React  */}
        <Route path='react' element={<React />} >
          <Route index element={<ReactList />} />
          <Route path='redux' element={<Redux />} />
          <Route path='laxyloading' element={<LazyLoading />} />
          <Route path='lazyLoadingComponent' element={<LazyLoadingComponent />} />
          <Route path='infiniteScrolling' element={<InfiniteScrolling />} />
          <Route path='pagination' element={<Pagination />} />
          <Route path='tanstack' element={<Tanstack />} />
        </Route>

        {/* Node  */}
        <Route path='node' element={<NodeJSSnippet />} >
          <Route index element={<NodeJSList />} />
          {/* <Route path='redux' element={<Redux />} />
          <Route path='laxyloading' element={<LazyLoading />} />
          <Route path='lazyLoadingComponent' element={<LazyLoadingComponent />} />
          <Route path='infiniteScrolling' element={<InfiniteScrolling />} />
          <Route path='pagination' element={<Pagination />} />
          <Route path='tanstack' element={<Tanstack />} /> */}
        </Route>

        <Route path='/generateURL' element={<GenerateURL />} />
        <Route path='/smartUserList' element={<SmartUserList />} />
        <Route path='/miniPostman' element={<MiniPostman />} />
        <Route path='/shopping-cart' element={<ShoppingCart />} />
        <Route path='/kanban' element={<Kanban />} />
        {/* <Route path='/kanban' element={<Kanban />} /> */}
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
