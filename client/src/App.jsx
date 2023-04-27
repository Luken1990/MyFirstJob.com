import { useEffect, useState, createContext } from 'react';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './page/HomePage/Home';
import { About } from './page/About/About';
import { Footer } from './components/footer/Footer';
import { Career } from './page/Career_Advice/Career';
import { Routes, Route } from 'react-router-dom';
import Job from './page/JobPage/Job';

export const JobContext = createContext({});

function App() {
  const [jobPosting, setJobPosting] = useState([]);

  return (
    <>
      <Navbar />
      <JobContext.Provider value={[jobPosting, setJobPosting]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career />} />
          <Route path="/about" element={<About />} />
          <Route path="/job/:id" element={<Job />} />
        </Routes>
      </JobContext.Provider>
      <Footer />
    </>
  );
}

export default App;
