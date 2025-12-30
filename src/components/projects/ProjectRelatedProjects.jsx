import { useContext, useMemo, useState } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import Lightbox from '../shared/Lightbox'; // 路径按你实际目录改

const ProjectRelatedProjects = () => {
  const { singleProjectData } = useContext(SingleProjectContext);

  const related = singleProjectData?.RelatedProject;
  const projects = related?.Projects || [];

  const images = useMemo(
    () =>
      projects.map((p) => ({
        src: p.img,
        alt: p.title,
      })),
    [projects]
  );

  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const openAt = (i) => {
    setIdx(i);
    setOpen(true);
  };

  // 没有 RelatedProject 或没有图就不渲染（避免报错/空标题）
  if (!related || projects.length === 0) return null;

  // ✅ 1张=>1列, 2张=>2列, 3张=>3列, 4+=>4列
  const smCols =
    projects.length === 1
      ? 'sm:grid-cols-1'
      : projects.length === 2
      ? 'sm:grid-cols-2'
      : projects.length === 3
      ? 'sm:grid-cols-3'
      : 'sm:grid-cols-4';

  return (
    <>
      <div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
        <p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
          {related.title}
        </p>

        {/* ✅ 关键：justify-items-center 让不足一行时整体不贴左 */}
        <div className={`grid grid-cols-1 ${smCols} gap-10 justify-items-center`}>
          {projects.map((project, i) => (
            <img
              key={project.id}
              src={project.img}
              className="rounded-xl cursor-zoom-in w-full max-w-[320px]"
              alt={project.title}
              onClick={() => openAt(i)}
            />
          ))}
        </div>
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

export default ProjectRelatedProjects;
