// filepath: c:\xampp\htdocs\team\src\components\pages\home\components\pages\positions\director-page.js
import { Div, H4, P, Section, Span } from '@base-framework/atoms';
import { DocPage } from '../../../../doc-page.js';

/**
 * Department Director Page
 *
 * Last Updated - January 8, 2022
 *
 * The director of Product Development oversees the development of our products and services. These areas include planning, research, design, development, testing, and maintenance.
 *
 * The director acts as lead architect on our platforms and develops many tools, frameworks, patterns, and infrastructure to reduce development time and decrease the friction to allow our team members to have optimal working environments.
 *
 * The director researches new technologies, platforms, tools, and programming languages to enable our projects to scale and pivot.
 *
 * The director also mentors and trains the design/developers to multiply the talent, and develop new features and services with the group. To keep our products competitive, this position performs market comparisons and searches for areas to reduce product friction and develop disruptive services.
 *
 * Responsibilities
 * - Research future platforms, tools, technologies, and programming languages.
 * - Develop new technologies to increase the speed and performance of the team members and projects.
 * - Work with our Project Manager to break down the current tasks and priorities to optimize the department bandwidth.
 * - Work with clients and team members on user feedback to iterate the products to decrease friction.
 * - Train and mentor team members and implement ongoing changes to keep pushing innovation.
 * - Build new features and services.
 * - Perform market comparisons to stay competitive.
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
			// Last Updated section
			Section({ class: 'mt-4' }, [
				P({ class: 'text-sm text-muted-foreground' }, 'Last Updated - January 8, 2022')
			]),
			// Responsibilities section
			Section({ class: 'space-y-4 mt-8' }, [
				H4({ class: 'text-2xl font-bold' }, 'Responsibilities'),
				<ul className="list-disc ml-6 space-y-2">
					<li>Research future platforms, tools, technologies, and programming languages.</li>
					<li>Develop new technologies to increase the speed and performance of the team members and projects.</li>
					<li>Work with our Project Manager to break down the current tasks and priorities to optimize the department bandwidth.</li>
					<li>Work with clients and team members on user feedback to iterate the products to decrease friction.</li>
					<li>Train and mentor team members and implement ongoing changes to keep pushing innovation.</li>
					<li>Build new features and services.</li>
					<li>Perform market comparisons to stay competitive.</li>
				</ul>
			])
		]
	)
);

export default DirectorPage;
