/**
 * This will create a page dynamically.
 *
 * @param {string} url The URL or path this page should match
 * @param {string} title A descriptive title for the page
 * @param {function|Promise} importCallback A function returning the dynamic import
 * @returns {object}
 */
const Page = (url, title, importCallback) => ({
	uri: url,
	title,
	import: importCallback,
});

/**
 * This will create the home switch.
 *
 * @param {string} basePath
 * @returns {Array<object>}
 */
export const HomeSwitch = (basePath) => ([
	Page(`${basePath}`, 'Introduction', import('./introduction/intro-page.js')),
	Page(`${basePath}/mission`, 'Mission', import('./mission/mission-page.js')),
	Page(`${basePath}/personality`, 'Personality', import('./personality/personality-page.js')),
	Page(`${basePath}/goals`, 'Goals', import('./goals/goals-page.js')),
	Page(`${basePath}/positions/cto`, 'CTO', import('./positions/cto-page.js')),
	// Added new entry for Department Director
	Page(`${basePath}/positions/director`, 'Department Director', import('./positions/director-page.js'))
]);

export default HomeSwitch;