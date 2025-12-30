import { useContext, useMemo, useState } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
// import Lightbox from '../shared/Lightbox';

const ProjectGallery = () => {
  const { singleProjectData } = useContext(SingleProjectContext);

  const projectImages = singleProjectData?.ProjectImages || [];

  const images = useMemo(
    () =>
      projectImages.map((p) => ({
        src: p.img,
        alt: p.title,
      })),
    [projectImages]
  );

  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const openAt = (i) => {
    setIdx(i);
    setOpen(true);
  };

  // ✅ 1 image => 1 col, 2 images => 2 cols, 3+ => 3 cols
  const smCols =
    projectImages.length === 1
      ? 'sm:grid-cols-1'
      : projectImages.length === 2
      ? 'sm:grid-cols-2'
      : 'sm:grid-cols-3';

  return (
    <>
      <div className={`grid grid-cols-1 ${smCols} sm:gap-10 mt-12`}>
        {projectImages.map((project, i) => (
          <div className="mb-10 sm:mb-0" key={project.id}>
            <img
              src={project.img}
              className="rounded-xl cursor-zoom-in shadow-lg sm:shadow-none"
              alt={project.title}
              onClick={() => openAt(i)}
            />
          </div>
        ))}
      </div>

      {/* <Lightbox
        isOpen={open}
        images={images}
        index={idx}
        onClose={() => setOpen(false)}
        onPrev={() => setIdx((p) => (p - 1 + images.length) % images.length)}
        onNext={() => setIdx((p) => (p + 1) % images.length)}
      /> */}
    </>
  );
};

export default ProjectGallery;
