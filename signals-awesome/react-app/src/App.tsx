import React, { Suspense } from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { lazy } from 'react'
import Layout from "./components/Layout";

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Counter = lazy(() => import('./pages/Counter'));
const Mall = lazy(() => import('./pages/Mall'));;
const MallObserver = lazy(() => import('./pages/MallObserver'));;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense
          fallback={
            <div
              style={{
                textAlign: 'center',
                marginTop: 200
              }}
            >
              loading...
            </div>
          }
        >
          <Routes>
            <Route element={<Layout />} >
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/counter" element={<Counter />} />
              <Route path="/mall" element={<Mall />} />
              <Route path="/mall/observer" element={<MallObserver />} />

            </Route>

          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
