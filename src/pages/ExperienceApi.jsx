import { useEffect } from 'react';
import { experience, sortExperiences } from '../data/experience.js';

export default function ExperienceApi() {
  useEffect(() => {
    // Set content type to JSON and display formatted data
    document.documentElement.innerHTML = '<pre style="padding: 20px; font-family: monospace; overflow-x: auto;">' + 
      JSON.stringify(sortExperiences(experience), null, 2) + 
      '</pre>';
  }, []);

  return null;
}
