import { Div, H4, P, Section, Span } from '@base-framework/atoms';
import { DocPage } from '../../../../doc-page.js';

/**
 * ProjectManagerPage
 *
 * This page outlines the expectations, responsibilities and goals for the Project Manager position.
 *
 * @returns {DocPage}
 */
export const ProjectManagerPage = () => (
	DocPage(
		{
			title: 'Project Manager',
			description: `Introduction\nThe Project Manager plays a crucial role in the Product Team, ensuring the effective execution of project deliverables, maintaining Agile Project Management practices, and serving as the primary communicator of project progress to stakeholders. This document outlines the expectations, responsibilities, and goals associated with the Project Manager position.`
		},
		[
			// Responsibilities Section
			Section({ class: 'space-y-4 mt-12' }, [
				H4({ class: 'text-2xl font-bold' }, 'Responsibilities'),
				Div({ class: 'flex flex-col space-y-4' }, [
					Div([
						Span({ class: 'text-lg' }, 'Establish and maintain Agile Project Management practices: '),
						P({ class: 'text-muted-foreground' }, 'For the Product Team to optimize efficiency and maintain focus on projects.')
					]),
					Div([
						Span({ class: 'text-lg' }, 'Run meetings for the Product team: '),
						P({ class: 'text-muted-foreground' }, 'Coordinate on project items and clear roadblocks to ensure progress.')
					]),
					Div([
						Span({ class: 'text-lg' }, 'Define project scope, goals, and deliverables: '),
						P({ class: 'text-muted-foreground' }, 'Ensure clarity and measurable objectives.')
					]),
					Div([
						Span({ class: 'text-lg' }, 'Establish project roadmaps: '),
						P({ class: 'text-muted-foreground' }, 'For DentalQore products.')
					]),
					Div([
						Span({ class: 'text-lg' }, 'Create and groom the product backlog: '),
						P({ class: 'text-muted-foreground' }, 'Ensure stories and tasks are clearly defined.')
					]),
					Div([
						Span({ class: 'text-lg' }, 'Act as the main communicator: '),
						P({ class: 'text-muted-foreground' }, 'Field and vet new product ideas, changes, updates, and bugs.')
					]),
					Div([
						Span({ class: 'text-lg' }, 'Communicate project progress: '),
						P({ class: 'text-muted-foreground' }, 'Regular updates to the Executive Team and stakeholders.')
					]),
					Div([
						Span({ class: 'text-lg' }, 'Mentor team members: '),
						P({ class: 'text-muted-foreground' }, 'On Agile methodologies and foundational values.')
					]),
					Div([
						Span({ class: 'text-lg' }, 'Document project details: '),
						P({ class: 'text-muted-foreground' }, 'Objectives, outcomes, status, scope changes, and final deliverables.')
					]),
					Div([
						Span({ class: 'text-lg' }, 'Participate in product release processes: '),
						P({ class: 'text-muted-foreground' }, 'Including strategies, standards, and processes.')
					]),
					Div([
						Span({ class: 'text-lg' }, 'Contribute to product vision: '),
						P({ class: 'text-muted-foreground' }, 'Provide insights for building the best products for clients.')
					]),
					Div([
						Span({ class: 'text-lg' }, 'Build strong team relationships: '),
						P({ class: 'text-muted-foreground' }, 'Within the team and across the organization to propel the DentalQore vision.')
					])
				])
			]),
			// Goals Section
			Section({ class: 'space-y-4 mt-12' }, [
				H4({ class: 'text-2xl font-bold' }, 'Goals'),
				Div({ class: 'flex flex-col space-y-4' }, [
					Div([
						Span({ class: 'text-lg' }, 'Align project goals with company vision: '),
						P({ class: 'text-muted-foreground' }, 'Ensure all project goals and objectives are aligned with the company vision.')
					]),
					Div([
						Span({ class: 'text-lg' }, 'Align projects with product goal and vision: '),
						P({ class: 'text-muted-foreground' }, 'Ensure project alignment with overall product strategy.')
					]),
					Div([
						Span({ class: 'text-lg' }, 'Act as Scrum Master: '),
						P({ class: 'text-muted-foreground' }, 'Coach and enforce adoption of Scrum principles, artifacts, and values.')
					]),
					Div([
						Span({ class: 'text-lg' }, 'Promote collaboration: '),
						P({ class: 'text-muted-foreground' }, 'Create an environment of excellent communication.')
					]),
					Div([
						Span({ class: 'text-lg' }, 'Accurately determine Sprint Scope: '),
						P({ class: 'text-muted-foreground' }, 'Based on Sprint artifacts.')
					]),
					Div([
						Span({ class: 'text-lg' }, 'Determine Roadmap Timelines: '),
						P({ class: 'text-muted-foreground' }, 'With accuracy.')
					]),
					Div([
						Span({ class: 'text-lg' }, 'Identify and implement improvements: '),
						P({ class: 'text-muted-foreground' }, 'Pinpoint inefficiencies and implement necessary changes.')
					])
				])
			])
		]
	)
);

export default ProjectManagerPage;
