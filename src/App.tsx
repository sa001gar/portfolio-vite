import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Layout/Header';
import { LoadingScreen } from './components/Layout/LoadingScreen';

// Lazy load pages
const HomePage = React.lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
const ProjectPage = React.lazy(() => import('./pages/ProjectPage').then(module => ({ default: module.ProjectPage })));
const NotFound = React.lazy(() => import('./pages/NotFound').then(module => ({ default: module.NotFound })));

function App() {
  return (
    <div className="min-h-screen text-white backdrop-blur-sm bg-black/30 overflow-x-hidden">
      <Header />
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;