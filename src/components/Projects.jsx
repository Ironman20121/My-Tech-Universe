import React, { useEffect, useState } from 'react';
import { Typography, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch GitHub repositories dynamically
    fetch('https://api.github.com/users/Ironman20121/repos')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <section className='projects'>
      <Typography variant="h2" component="h2" gutterBottom>
        🚀 Projects 🚀 
      </Typography>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div whileHover={{ scale: 1.1 }} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description || 'No description available'}
                </Typography>
                <a href={project.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
