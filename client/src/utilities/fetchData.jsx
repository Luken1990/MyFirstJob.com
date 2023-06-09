// export const options = {
//   method: 'GET',
//   headers: {
//     // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_JSEARCH_KEY,
//     'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
//   },
// };

// export const fetchData = async (url, options) => {
//   const response = await fetch(url, options);
//   const data = response.json();
//   return data;
// };

import axios from 'axios';

// export const options = {
//   method: 'GET',
//   url: 'https://jsearch.p.rapidapi.com/search',
//   params: {
//     query: 'Web Developer in London, UK',
//     date_posted: 'today',
//     job_requirements: 'no_experience',
//   },
//   headers: {
//     'content-type': 'application/octet-stream',
//     'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_JSEARCH_KEY,
//     'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
//   },
// };

export const fetchData = async (options) => {
  try {
    const response = await axios.request(options);
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};
