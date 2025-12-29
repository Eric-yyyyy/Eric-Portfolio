import { useContext, useMemo, useState } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import Lightbox from '../shared/Lightbox'; // 路径按你实际目录改（常见是 ../../components/shared/Lightbox）

const ProjectGallery = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	const images = useMemo(
		() =>
			(singleProjectData?.ProjectImages || []).map((p) => ({
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
			<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
				{singleProjectData.ProjectImages.map((project, i) => (
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
