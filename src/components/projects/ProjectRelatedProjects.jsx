import { useContext, useMemo, useState } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import Lightbox from '../shared/Lightbox'; // 路径按你实际目录改

const ProjectRelatedProjects = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	const images = useMemo(
		() =>
			(singleProjectData?.RelatedProject?.Projects || []).map((p) => ({
				src: p.img,
				alt: p.title,
			})),
		[singleProjectData]
	);

	const [open, setOpen] = useState(false);
	const [idx, setIdx] = useState(0);

	const openAt = (i) => {
		setIdx(i);
		setOpen(true);
	};

	return (
		<>
			<div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
				<p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
					{singleProjectData.RelatedProject.title}
				</p>

				<div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
					{singleProjectData.RelatedProject.Projects.map((project, i) => (
						<img
							key={project.id}
							src={project.img}
							className="rounded-xl cursor-zoom-in"
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
