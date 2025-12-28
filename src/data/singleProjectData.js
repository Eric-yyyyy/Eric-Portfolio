// Import images
import Image1 from '../images/ui-project-1.jpg';
import EmobdyImage1 from '../images/Embody/Frame 15 (1).png';
import EmobdyImage2 from '../images/Embody/Frame 16 (1).png';
import EmobdyImage3 from '../images/Embody/Frame 17 (2).png';
import Image3 from '../images/mobile-project-2.jpg';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/web-project-1.jpg';
import Image6 from '../images/ui-project-2.jpg';
import EmbodyExtraImage1 from '../images/Embody/ExtraImage1.png';
import EmbodyExtraImage2 from '../images/Embody/ExtraImage2.png';
import EmbodyExtraImage3 from '../images/Embody/ExtraImage3.png';
import EmbodyExtraImage4 from '../images/Embody/Frame 19.png';

import CapabilityExtraImage1 from '../images/Capabilities/CapabilityImage1.png';
import CapabilityExtraImage2 from '../images/Capabilities/CapabilityImage2.png';
import CapabilityExtraImage3 from '../images/Capabilities/CapabilityImage3.png';
import CapabilityExtraImage4 from '../images/Capabilities/CapabilityImage4.png';

import CapabilityImage1 from '../images/Capabilities/Capability1.png';
import CapabilityImage2 from '../images/Capabilities/Capability2.png';
import CapabilityImage3 from '../images/Capabilities/Capability3.png';

import FacialImage1 from '../images/Facial/FacialImage1.png';
import FacialImage2 from '../images/Facial/FacialImage2.png';
import FacialImage3 from '../images/Facial/FacialImage3.png';

import FacialExtraImage1 from '../images/Facial/FacialExtraImage1.png';
import FacialExtraImage2 from '../images/Facial/FacialExtraImage2.png';
import FacialExtraImage3 from '../images/Facial/FacialExtraImage3.png';
import FacialExtraImage4 from '../images/Facial/FacialExtraImage4.png';

import PianoImage1 from '../images/XRPiano/Menu.png';

import PianoImage2 from '../images/XRPiano/Fix_1024x893.png';
import PianoImage3 from '../images/XRPiano/PianoImage_1024x893.png'


// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

// ✅ 1) 先定义一个“模板”（你原来的内容）
//    以后你可以复制这个模板，改成每个项目自己的内容
const template = {
	ProjectHeader: {
		title: 'Project Management UI',
		publishDate: 'Jul 26, 2021',
		tags: 'UI / Frontend',
	},
	ProjectImages: [
		{ id: 1, title: 'Kabul Project Management UI', img: Image1 },
		{ id: 2, title: 'Kabul Project Management UI', img: EmobdyImage1 },
		{ id: 3, title: 'Kabul Project Management UI', img: Image3 },
	],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{ id: 1, title: 'Name', details: 'Company Ltd' },
			{ id: 2, title: 'Services', details: 'UI Design & Frontend Development' },
			{ id: 3, title: 'Website', details: 'https://company.com' },
			{ id: 4, title: 'Phone', details: '555 8888 888' },
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'TailwindCSS', 'AdobeXD'],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo...',
			},
			{
				id: 2,
				details:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos...',
			},
			{
				id: 3,
				details:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos...',
			},
			{
				id: 4,
				details:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam...',
			},
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{ id: 1, name: 'Twitter', icon: <FiTwitter />, url: 'https://twitter.com/realstoman' },
			{ id: 2, name: 'Instagram', icon: <FiInstagram />, url: 'https://instagram.com/realstoman' },
			{ id: 3, name: 'Facebook', icon: <FiFacebook />, url: 'https://facebook.com/' },
			{ id: 4, name: 'LinkedIn', icon: <FiLinkedin />, url: 'https://linkedin.com/' },
			{ id: 5, name: 'Youtube', icon: <FiYoutube />, url: 'https://www.youtube.com/c/StomanStudio' },
		],
	},
	RelatedProject: {
		title: 'Related Projects',
		Projects: [
			{ id: 1, title: 'Mobile UI', img: Image4 },
			{ id: 2, title: 'Web Application', img: Image5 },
			{ id: 3, title: 'UI Design', img: Image6 },
			{ id: 4, title: 'Kabul Mobile App UI', img: Image3 },
		],
	},
};

// ✅ 2) 导出“多项目版本”，但名字仍叫 singleProjectData（你的 import 不用改）
export const singleProjectData = {
	// Project id = 1：完全用模板
	1: {
		...template,

		ProjectHeader: {
			...template.ProjectHeader,
			title: 'XR Piano Tutor',
			publishDate: '2025',
			tags: 'XR / HCI',
		},

		ProjectImages: [
			{ id: 1, title: 'XR Piano Tutor screenshot 1', img: PianoImage1 },
			{ id: 2, title: 'XR Piano Tutor screenshot 2', img: PianoImage2 },
			{ id: 3, title: 'XR Piano Tutor screenshot 3', img: PianoImage3 },
		],

		// ✅ 关键：覆盖 ProjectInfo（你的页面就是读这个）
		ProjectInfo: {
			...template.ProjectInfo,

			ClientHeading: 'About Project',
			CompanyInfo: [
				{ id: 1, title: 'Project Type', details: 'XR System & HCI Research' },
				{ id: 2, title: 'Focus', details: 'Extended Reality, Music Learning' },
				{ id: 3, title: 'Platform', details: 'Meta Quest (AR / VR)' },
				{ id: 4, title: 'Role', details: 'Developer / Designer' },
			],

			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'XR Piano Tutor explores how spatially aligned, real-time visual feedback in XR can support piano learning. ' +
				'The goal is to reduce cognitive load caused by switching attention between sheet music and hands, enabling ' +
				'learners to maintain focus, timing, and flow during practice.',

			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Unity (C#)',
						'Meta Quest SDK',
						'Hand Tracking & Controller Input',
						'XR Interaction Toolkit',
						'MIDI & Audio Systems',
						'Human-Centered Design',
					],
				},
			],

			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Traditional piano practice requires frequent eye movement between sheet music, hands, and instructor feedback, which interrupts musical flow and increases cognitive load.',
				},
				{
					id: 2,
					details:
						'In XR, virtual note cues must be precisely aligned with physical piano keys to maintain spatial consistency and player trust.',
				},
				{
					id: 3,
					details:
						'Designing visual feedback that is informative yet non-distracting is difficult, as excessive cues can interfere with musical expressiveness.',
				},
				{
					id: 4,
					details:
						'The system must support both hand tracking and controller input while maintaining low latency and stable spatial registration.',
				},
				{
					id: 5,
					details:
						'Balancing immersion and usability across passthrough AR and fully virtual modes introduces additional design and technical constraints.',
				},
			],

		},
	},


	// Project id = 2：EmboDyverse
	2: {
		...template,

		ProjectHeader: {
			...template.ProjectHeader,
			title: 'EmboDyverse: Virtual Hands & Object Feedback',
			publishDate: '2025',
			tags: 'VR / HCI',
		},

		ProjectImages: [
			{ id: 1, title: 'EmboDyverse cover', img: EmobdyImage1 },
			{ id: 2, title: 'EmboDyverse interaction scenarios', img: EmobdyImage2 },
			{ id: 3, title: 'EmboDyverse system overview', img: EmobdyImage3 },
		],

		ProjectInfo: {
			...template.ProjectInfo,

			ClientHeading: 'About Project',
			CompanyInfo: [
				{ id: 1, title: 'Project Type', details: 'VR System & HCI Research Project' },
				{ id: 2, title: 'Focus', details: 'Virtual Hand Representation & Sense of Embodiment' },
				{ id: 3, title: 'Platform', details: 'Meta Quest (VR)' },
				{ id: 4, title: 'Role', details: 'VR Developer & Interaction Designer' },
			],

			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'EmboDyverse investigates how different virtual hand representations and object feedback influence users’ sense of embodiment and interaction experience in virtual reality. ' +
				'The goal is to explore design strategies for mapping non-human or stylized virtual hands to real-world interactions while maintaining intuitiveness, control, and immersion.',

			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Unity (C#)',
						'Meta Quest SDK',
						'Hand Tracking & Controller Input',
						'XR Interaction Toolkit',
						'Custom Interaction Logic',
						'Human-Centered Design',
					],
				},
			],

			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Designing virtual hand representations that differ significantly from human anatomy (e.g., monster or tentacle hands) while preserving intuitive control and usability.',
				},
				{
					id: 2,
					details:
						'Maintaining a strong sense of embodiment when mapping real hand movements to non-human virtual hands with different kinematics and proportions.',
				},
				{
					id: 3,
					details:
						'Balancing visual expressiveness and realism with interaction accuracy and user comfort in VR.',
				},
				{
					id: 4,
					details:
						'Supporting multiple interaction scenarios and environments while ensuring consistent feedback and low-latency response.',
				},
				{
					id: 5,
					details:
						'Integrating hand tracking and controller input into a unified interaction system without breaking immersion.',
				},
			],

			ProjectVideo: {
				heading: 'Demo Video',
				type: 'mp4',
				url: '/videos/Embody.mp4',
			},

		},
		RelatedProject: {
			title: 'More Images',
			Projects: [
				{ id: 1, title: 'Mobile UI', img: EmbodyExtraImage1 },
				{ id: 2, title: 'Web Application', img: EmbodyExtraImage2 },
				{ id: 3, title: 'UI Design', img: EmbodyExtraImage3 },
				{ id: 4, title: 'Kabul Mobile App UI', img: EmbodyExtraImage4 },
			],
		},
	},


	// Project id = 3：示例
	// Project id = 3：Capability at a Glance
	3: {
		...template,

		ProjectHeader: {
			...template.ProjectHeader,
			title: 'Capability at a Glance: Intuitive Avatars for Augmented Actions',
			publishDate: '2025',
			tags: 'VR / HCI / Avatar Design',
		},

		ProjectImages: [
			{ id: 1, title: 'Design guidelines overview', img: CapabilityImage1 },
			{ id: 2, title: 'Avatar capability visualization', img: CapabilityImage2 },
			{ id: 3, title: 'VR application scenarios', img: CapabilityImage3 },
		],

		ProjectInfo: {
			...template.ProjectInfo,

			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: 1,
					title: 'Project Type',
					details: 'VR & HCI Research Project',
				},
				{
					id: 2,
					title: 'Focus',
					details: 'Avatar Design for Augmented Actions',
				},
				{
					id: 3,
					title: 'Platform',
					details: 'Virtual Reality (Meta Quest)',
				},
				{
					id: 4,
					title: 'Role',
					details: 'HCI Researcher & VR Developer',
				},
			],

			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Capability at a Glance explores how avatar design can communicate augmented or non-human capabilities in virtual reality without increasing cognitive load. ' +
				'The project investigates design strategies that allow users to immediately understand what actions their avatars can perform, ' +
				'supporting intuitive interaction, embodiment, and trust when avatars extend beyond human physical abilities.',

			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Unity (C#)',
						'Meta Quest SDK',
						'XR Interaction Toolkit',
						'Avatar & Interaction Design',
						'User-Centered Design',
						'VR Prototyping',
					],
				},
			],

			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Users often struggle to understand the capabilities of avatars that perform augmented or non-human actions, leading to confusion and reduced usability.',
				},
				{
					id: 2,
					details:
						'Conveying avatar capabilities visually without relying on explicit instructions or tutorials requires careful design of form, motion, and feedback.',
				},
				{
					id: 3,
					details:
						'Balancing expressiveness and clarity is challenging, as overly realistic avatars may obscure augmented abilities, while abstract designs can reduce embodiment.',
				},
				{
					id: 4,
					details:
						'Ensuring that capability cues remain understandable across different tasks and VR contexts is critical for generalizability.',
				},
				{
					id: 5,
					details:
						'Integrating these design principles into interactive VR prototypes while maintaining immersion and performance adds additional technical constraints.',
				},
			],
			ProjectVideo: {
				heading: 'Demo Video',
				type: 'mov',
				url: '/videos/Capability.mov',
			},
		},

		RelatedProject: {
			title: 'More Images',
			Projects: [
				{ id: 1, title: 'Capability design sketches', img: CapabilityExtraImage1 },
				{ id: 2, title: 'Avatar interaction examples', img: CapabilityExtraImage2 },
				{ id: 3, title: 'VR scenario exploration', img: CapabilityExtraImage3 },
				{ id: 4, title: 'User testing sessions', img: CapabilityExtraImage4 },
			],
		},
	},


	// Project id = 4：Tuning the Face
	4: {
		...template,

		ProjectHeader: {
			...template.ProjectHeader,
			title: 'Tuning the Face: Modulating Facial Expressions',
			publishDate: '2025',
			tags: 'VR / Avatars / Facial Expression',
		},

		ProjectImages: [
			{ id: 1, title: 'Facial expression system overview', img: FacialImage1 },
			{ id: 2, title: 'Blendshape tuning interface', img: FacialImage2 },
			{ id: 3, title: 'Avatar facial expression examples', img: FacialImage3 },
		],

		ProjectInfo: {
			...template.ProjectInfo,

			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: 1,
					title: 'Project Type',
					details: 'VR Avatar System & HCI Research Project',
				},
				{
					id: 2,
					title: 'Focus',
					details: 'Facial Expression Control & Avatar Realism',
				},
				{
					id: 3,
					title: 'Platform',
					details: 'Meta Quest (VR)',
				},
				{
					id: 4,
					title: 'Role',
					details: 'VR Developer & Interaction Designer',
				},
			],

			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'This project explores how fine-grained modulation of facial expressions can improve avatar realism, emotional expressiveness, and user embodiment in virtual reality. ' +
				'By allowing users to tune expression intensity, timing, and constraints, the system investigates how controlled exaggeration or suppression of facial features affects social presence and comfort in VR interactions.',

			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Unity (C#)',
						'Meta Quest SDK',
						'Facial Tracking & Blendshapes',
						'Avatar Rigging & Animation',
						'Expression Parameter Mapping',
						'Human-Centered Design',
					],
				},
			],

			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Designing a facial expression system that balances realism and stylization without triggering uncanny or uncomfortable reactions.',
				},
				{
					id: 2,
					details:
						'Mapping raw facial tracking signals to avatar blendshapes in a way that preserves user intent while reducing noise and jitter.',
				},
				{
					id: 3,
					details:
						'Allowing expressive exaggeration for communication while maintaining believable facial anatomy and motion constraints.',
				},
				{
					id: 4,
					details:
						'Supporting diverse avatar styles and facial structures with a unified and tunable expression control framework.',
				},
			],

			ProjectVideo: {
				heading: 'Demo Video',
				type: 'mov',
				url: '/videos/FacialExpression.mov', // 没有就先留着
			},
		},

		RelatedProject: {
			title: 'Related Images',
			Projects: [
				{ id: 1, title: 'Expression intensity comparison', img: FacialExtraImage1 },
				{ id: 2, title: 'Blendshape control UI', img: FacialExtraImage2 },
				{ id: 3, title: 'Avatar emotion examples', img: FacialExtraImage3 },
				{ id: 4, title: 'User testing sessions', img: FacialExtraImage4 },
			],
		},
	},

	5: {
		...template,

		ProjectHeader: {
			...template.ProjectHeader,
			title: 'EASE',
			publishDate: '2025',
			tags: 'Full Stack / Web / HCI',
		},

		ProjectImages: [
			{ id: 1, title: 'EASE dashboard overview', img: Image5 },
			{ id: 2, title: 'EASE course navigation', img: Image4 },
			{ id: 3, title: 'EASE notifications and calendar', img: Image6 },
		],

		ProjectInfo: {
			...template.ProjectInfo,

			ClientHeading: 'About Project',
			CompanyInfo: [
				{ id: 1, title: 'Project Type', details: 'Full-Stack Web Application' },
				{ id: 2, title: 'Users', details: 'University Students & Instructors' },
				{ id: 3, title: 'Scope', details: 'End-to-End System Design & Implementation' },
				{ id: 4, title: 'Role', details: 'Full-Stack Developer (Design, Frontend, Backend)' },
			],

			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'EASE is a course collaboration platform designed to centralize academic communication, task tracking, and scheduling. ' +
				'The goal was to reduce fragmentation across learning tools by providing students and instructors with a single, intuitive ' +
				'dashboard for managing coursework, deadlines, and group collaboration.',

			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'React',
						'JavaScript',
						'HTML & CSS',
						'RESTful APIs',
						'Backend Services',
						'Database Design',
						'Authentication & Authorization',
						'UI/UX & Interaction Design',
					],
				},
			],

			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Designing the overall system architecture, including frontend structure, backend APIs, and data models, as a single developer.',
				},
				{
					id: 2,
					details:
						'Building a scalable dashboard that supports multiple courses while keeping navigation fast and cognitively lightweight.',
				},
				{
					id: 3,
					details:
						'Implementing real-time updates for notifications and deadlines while maintaining consistent application state.',
				},
				{
					id: 4,
					details:
						'Balancing feature richness (discussion, calendar, messaging) with interface clarity to avoid overwhelming users.',
				},
				{
					id: 5,
					details:
						'Managing authentication, user roles, and data persistence while ensuring reliability and maintainability.',
				},
			],
		},
	},
	6: {
		...template,

		ProjectHeader: {
			...template.ProjectHeader,
			title: 'CiteCheck',
			publishDate: '2025',
			tags: 'AI / NLP / Full Stack',
		},

		ProjectImages: [
			{ id: 1, title: 'EASE dashboard overview', img: Image5 },
			{ id: 2, title: 'EASE course navigation', img: Image4 },
			{ id: 3, title: 'EASE notifications and calendar', img: Image6 },
		],

		ProjectInfo: {
			...template.ProjectInfo,

			ClientHeading: 'About Project',
			CompanyInfo: [
				{ id: 1, title: 'Project Type', details: 'AI-Assisted Academic Tool' },
				{ id: 2, title: 'Focus', details: 'Citation Verification & Reference Quality' },
				{ id: 3, title: 'Scope', details: 'End-to-End Full-Stack System' },
				{ id: 4, title: 'Role', details: 'Full-Stack Developer & System Designer' },
			],

			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'CiteCheck is an AI-assisted tool designed to help writers verify the correctness and relevance of academic citations. ' +
				'The goal is to reduce citation errors, improve reference quality, and support academic writing by providing automated ' +
				'checks that integrate naturally into the writing workflow.',

			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'React',
						'TypeScript',
						'Node.js',
						'REST APIs',
						'LLM-based Analysis',
						'Prompt Engineering',
						'NLP Techniques',
						'System Design',
					],
				},
			],

			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Automatically determining whether a citation is appropriate requires semantic understanding rather than simple string matching.',
				},
				{
					id: 2,
					details:
						'Designing prompts and evaluation logic that balance accuracy, explainability, and consistency across different writing contexts.',
				},
				{
					id: 3,
					details:
						'Presenting AI feedback in a way that supports, rather than replaces, human judgment during academic writing.',
				},
				{
					id: 4,
					details:
						'Building a full-stack system that integrates AI inference with a responsive, low-friction user interface.',
				},
				{
					id: 5,
					details:
						'Managing latency, cost, and reliability when incorporating large language models into an interactive application.',
				},
			],
		},
	},


};
