// filepath: c:\xampp\htdocs\team\src\components\pages\home\components\pages\positions\cto.js
import { Div, H4, P, Section, Span } from '@base-framework/atoms';
import { DocPage } from '../../../../doc-page.js';

/**
 * CTOPage
 *
 * This page outlines the responsibilities and goals for the Chief Technology Officer (CTO).
 *
 * @returns {DocPage}
 */
export const CTOPage = () => (
	DocPage(
		{
			title: 'Chief Technology Officer (CTO)',
			description: `The Chief Technology Officer (CTO) is a key leadership role in the organization, responsible for overseeing the strategic direction, development, and execution of DentalQore's technology vision. This role requires strong technical expertise, business acumen, and the ability to lead, inspire, and collaborate effectively with cross-functional teams. This document outlines the expectations, responsibilities, and goals associated with the CTO position.`
		},
		[
			// Responsibilities Section
			Section({ class: 'space-y-4 mt-12' }, [
				H4({ class: 'text-2xl font-bold' }, 'Responsibilities'),
				Div({ class: 'flex flex-col space-y-4' }, [
					Div([
						Span({ class: 'text-lg font-semibold' }, 'Define and communicate the technology vision: '),
						P({ class: 'text-muted-foreground' }, "Align the technology strategy with the company's overall mission, goals, and objectives.")
					]),
					Div([
						Span({ class: 'text-lg font-semibold' }, 'Oversee software solutions: '),
						P({ class: 'text-muted-foreground' }, "Manage the development, implementation, and maintenance of software solutions to ensure quality, reliability, and performance.")
					]),
					Div([
						Span({ class: 'text-lg font-semibold' }, 'Lead the Technical Department: '),
						P({ class: 'text-muted-foreground' }, "Foster a culture of collaboration, innovation, and continuous improvement within the technical team.")
					]),
					Div([
						Span({ class: 'text-lg font-semibold' }, 'Collaborate with stakeholders: '),
						P({ class: 'text-muted-foreground' }, "Work with executive leadership and key stakeholders to prioritize technology initiatives that deliver value.")
					]),
					Div([
						Span({ class: 'text-lg font-semibold' }, 'Build external relationships: '),
						P({ class: 'text-muted-foreground' }, "Develop and maintain relationships with industry partners, vendors, and other external stakeholders to keep pace with emerging trends.")
					]),
					Div([
						Span({ class: 'text-lg font-semibold' }, 'Ensure scalable and secure infrastructure: '),
						P({ class: 'text-muted-foreground' }, "Oversee that technology infrastructure, systems, and processes are scalable, secure, and compliant with applicable laws.")
					]),
					Div([
						Span({ class: 'text-lg font-semibold' }, 'Technology evangelism: '),
						P({ class: 'text-muted-foreground' }, "Promote the adoption of new technologies, best practices, and methodologies within the organization.")
					])
				])
			]),
			// Goals Section
			Section({ class: 'space-y-4 mt-12' }, [
				H4({ class: 'text-2xl font-bold' }, 'Goals'),
				Div({ class: 'flex flex-col space-y-4' }, [
					Div([
						Span({ class: 'text-lg font-semibold' }, 'Execute the vision: '),
						P({ class: 'text-muted-foreground' }, "Drive the successful execution of the technology vision and strategy, ensuring alignment with the company's objectives.")
					]),
					Div([
						Span({ class: 'text-lg font-semibold' }, 'Enhance software quality: '),
						P({ class: 'text-muted-foreground' }, "Continuously improve the quality, reliability, and performance of DentalQore's software solutions to exceed customer expectations.")
					]),
					Div([
						Span({ class: 'text-lg font-semibold' }, 'Develop a high-performing team: '),
						P({ class: 'text-muted-foreground' }, "Foster an environment of collaboration, innovation, and continuous learning within the Technical Department.")
					]),
					Div([
						Span({ class: 'text-lg font-semibold' }, 'Deliver technology initiatives: '),
						P({ class: 'text-muted-foreground' }, "Ensure successful and timely delivery of technology projects while balancing innovation with business value.")
					]),
					Div([
						Span({ class: 'text-lg font-semibold' }, 'Promote security and compliance: '),
						P({ class: 'text-muted-foreground' }, "Maintain a strong culture of security to ensure that the technology infrastructure is resilient and compliant.")
					])
				])
			])
		]
	)
);

export default CTOPage;
