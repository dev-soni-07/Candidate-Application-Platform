import React from 'react';
import Filters from './components/Filters';
import JobList from './components/JobList';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <Filters />
        <JobList />
      </main>
    </div>
  );
}

export default App;