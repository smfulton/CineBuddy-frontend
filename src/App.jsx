import React from 'react';
import Navbar from './components/Navbar';
import RoutesComponent from './routes';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-900 font-sans">
      <Navbar />
      <main className="p-6 max-w-6xl mx-auto">
        <RoutesComponent />
      </main>
    </div>
  );
};

export default App;
