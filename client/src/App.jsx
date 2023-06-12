import { useEffect, useState, createContext } from 'react';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './page/HomePage/Home';
import { About } from './page/About/About';
import { Footer } from './components/footer/Footer';
import { Career } from './page/Career_Advice/Career';
import { Routes, Route } from 'react-router-dom';
import Job from './page/JobPage/Job';
import { fetchData } from './utilities/fetchData';

export const JobContext = createContext({});

function App() {
  const [jobPosting, setJobPosting] = useState([]);

  const [url, setUrl] = useState(
    `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${
      import.meta.env.VITE_APP_ID
    }&app_key=${import.meta.env.VITE_APP_KEY}&what=Junior Developer&what_and=junior%20internship%20apprenticeship&where=london`
  );

  useEffect(() => {
    const getJobPosting = async () => {
      const initialPosting = await fetchData(url);
      setJobPosting(initialPosting);
    };
    getJobPosting();
  }, []);


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
