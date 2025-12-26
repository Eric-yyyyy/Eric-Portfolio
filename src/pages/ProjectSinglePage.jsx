import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectInfo from '../components/projects/ProjectInfo';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects';

import SingleProjectContext, { SingleProjectProvider } from '../context/SingleProjectContext';
import { singleProjectData } from '../data/singleProjectData';

const ProjectSingleInner = () => {
  const { id } = useParams(); // /projects/:id
  const { setSingleProjectData } = useContext(SingleProjectContext);

  useEffect(() => {
    const data = singleProjectData[Number(id)];
    if (data) setSingleProjectData(data);
  }, [id, setSingleProjectData]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.6,
        delay: 0.15,
      }}
      className="container mx-auto mt-5 sm:mt-10"
    >
      <ProjectHeader />
      <ProjectGallery />
      <ProjectInfo />
      <ProjectRelatedProjects />
    </motion.div>
  );
};

const ProjectSingle = () => {
  return (
    <SingleProjectProvider>
      <ProjectSingleInner />
    </SingleProjectProvider>
  );
};

export default ProjectSingle;
