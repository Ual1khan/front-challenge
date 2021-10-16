import React from 'react';
import './App.css';
import { JobProvider } from './contexts/job.context';
import Main from './pages/Main/Main';

function App() {
  return (
    <JobProvider>
      <Main />
    </JobProvider>
  );
}

export default App;
