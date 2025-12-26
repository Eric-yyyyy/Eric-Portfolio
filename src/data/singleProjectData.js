// Import images
import Image1 from '../images/ui-project-1.jpg';
import Image2 from '../images/web-project-2.jpg';
import Image3 from '../images/mobile-project-2.jpg';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/web-project-1.jpg';
import Image6 from '../images/ui-project-2.jpg';

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
		{ id: 2, title: 'Kabul Project Management UI', img: Image2 },
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
			{ id: 1, title: 'XR Piano Tutor screenshot 1', img: Image2 },
			{ id: 2, title: 'XR Piano Tutor screenshot 2', img: Image1 },
			{ id: 3, title: 'XR Piano Tutor screenshot 3', img: Image3 },
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


	// Project id = 2：示例（你把内容换成你自己的）
	2: {
		...template,
		ProjectHeader: {
			...template.ProjectHeader,
			title: 'EmboDyverse: Virtual Hands & Object Feedback',
			publishDate: '2025',
			tags: 'VR / HCI',
		},
		// 下面这些你可以慢慢替换
		ProjectImages: [
			{ id: 1, title: 'EmboDyverse screenshot 1', img: Image2 },
			{ id: 2, title: 'EmboDyverse screenshot 2', img: Image1 },
			{ id: 3, title: 'EmboDyverse screenshot 3', img: Image3 },
		],
	},

	// Project id = 3：示例
	3: {
		...template,
		ProjectHeader: {
			...template.ProjectHeader,
			title: 'Capability at a Glance',
			publishDate: '2025',
			tags: 'VR / UX Guidelines',
		},
		ProjectImages: [
			{ id: 1, title: 'Capability screenshot 1', img: Image6 },
			{ id: 2, title: 'Capability screenshot 2', img: Image5 },
			{ id: 3, title: 'Capability screenshot 3', img: Image4 },
		],
	},

	// Project id = 4：示例
	4: {
		...template,
		ProjectHeader: {
			...template.ProjectHeader,
			title: 'Tuning the Face: Modulating Facial Expressions',
			publishDate: '2025',
			tags: 'VR / Avatars',
		},
		ProjectImages: [
			{ id: 1, title: 'Tuning screenshot 1', img: Image3 },
			{ id: 2, title: 'Tuning screenshot 2', img: Image2 },
			{ id: 3, title: 'Tuning screenshot 3', img: Image1 },
		],
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
