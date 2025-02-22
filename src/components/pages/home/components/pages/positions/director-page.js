import { Div, H4, P, Section, Span } from '@base-framework/atoms';
import { DocPage } from '../../../../doc-page.js';

/**
 * Department Director Page
 *
 * @returns {DocPage}
 */
export const DirectorPage = () => (
	DocPage(
		{
			title: 'Department Director',
			description: 'The director of Product Development oversees the development of our products and services. These areas include planning, research, design, development, testing, and maintenance.'
		},
		[
			// Responsibilities Section
			Section({ class: 'space-y-4 mt-12' }, [
				H4({ class: 'text-2xl font-bold' }, 'Responsibilities'),
				Div({ class: 'flex flex-col space-y-4' }, [
					Div([
						Span({ class: 'text-lg' }, 'Research future platforms, tools, technologies, and programming languages:'),
						P({ class: 'text-muted-foreground' }, 'Continuously evaluate emerging trends to identify potential improvements.')
					]),
					Div([
						Span({ class: 'text-lg' }, 'Develop new technologies to increase the speed and performance of the team members and projects:'),
						P({ class: 'text-muted-foreground' }, 'Innovate and implement solutions that streamline development processes.')
					]),
					Div([
						Span({ class: 'text-lg' }, 'Work with our Project Manager to break down the current tasks and priorities to optimize the department bandwidth:'),
						P({ class: 'text-muted-foreground' }, 'Collaborate on planning and prioritization to ensure efficient execution.')
					]),
					Div([
						Span({ class: 'text-lg' }, 'Work with clients and team members on user feedback to iterate the products to decrease friction:'),
						P({ class: 'text-muted-foreground' }, 'Integrate stakeholder insights for continuous product enhancement.')
					]),
					Div([
						Span({ class: 'text-lg' }, 'Train and mentor team members and implement ongoing changes to keep pushing innovation:'),
						P({ class: 'text-muted-foreground' }, 'Provide guidance and foster a culture of continuous improvement.')
					]),
					Div([
						Span({ class: 'text-lg' }, 'Build new features and services:'),
						P({ class: 'text-muted-foreground' }, 'Develop and deploy innovative functionalities to drive business growth.')
					]),
					Div([
						Span({ class: 'text-lg' }, 'Perform market comparisons to stay competitive:'),
						P({ class: 'text-muted-foreground' }, 'Analyze industry trends to maintain a cutting-edge portfolio.')
					])
				])
			]),
			// Goals Section
			Section({ class: 'space-y-4 mt-12' }, [
				H4({ class: 'text-2xl font-bold' }, 'Goals'),
				Div({ class: 'flex flex-col space-y-4' }, [
					Div([
						Span({ class: 'text-lg' }, 'Enhance product development cycles:'),
						P({ class: 'text-muted-foreground' }, 'Optimize workflows and reduce time-to-market.')
					]),
					Div([
						Span({ class: 'text-lg' }, 'Foster innovation:'),
						P({ class: 'text-muted-foreground' }, 'Promote creative solutions and continuous improvement within the team.')
					])
				])
			])
		]
	)
);

export default DirectorPage;
