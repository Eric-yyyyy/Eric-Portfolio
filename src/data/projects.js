// Import images
import CiteCheckCover from '../images/CiteCheck/Frame 14 (1).png';
import XRImageCover from '../images/XRPiano/test1.png';
import EASECover from '../images/EASE/Frame 13 (1).png';
import MobileImage2 from '../images/mobile-project-2.jpg';
import UIImage1 from '../images/ui-project-1.jpg';
import UIImage2 from '../images/ui-project-2.jpg';

export const projectsData = [
	{
		id: 1,
		title: 'XR Piano Tutor',
		category: 'An Extended Reality Piano Learning Experience',
		img: XRImageCover,
		ProjectHeader: {
			title: 'Project Management UI - From Context',
			publishDate: 'Jul 26, 2021',
			tags: 'UI / Frontend',
		},
	},
	{
		id: 2,
		title: 'EmboDyverse',
		category: 'Virtual Hand Interaction & Sense of Embodiment',
		img: MobileImage2,
	},
	{
		id: 3,
		title: 'Capability at a Glance',
		category: 'Designing Intuitive Avatars for Augmented Actions in VR',
		img: UIImage1,
	},
	{
		id: 4,
		title: 'Tuning the Face',
		category: 'Facial Expression Control for Realistic Avatars',
		img: UIImage2,
	},
	{
		id: 5,
		title: 'EASE',
		category: 'A Collaborative Platform for Classroom Engagement',
		img: EASECover,
	},
	{
		id: 6,
		title: 'CiteCheck',
		category: 'An AI-Assisted Tool for Academic Citation Support',
		img: CiteCheckCover,
	},
];
