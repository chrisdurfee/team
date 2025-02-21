import { SidebarMenuPage } from "@base-framework/ui/pages";
import { HomeSwitch } from "./home-switch.js";
import { Links } from "./links.js";

/**
 * This will create the base path.
 *
 * @constant
 * @type {string}
 */
const basePath = '/';

/**
 * HomePage
 *
 * This will create a home page.
 *
 * @returns {SidebarMenuPage}
 */
export const HomePage = () => (
	new SidebarMenuPage({
		/**
		 * @member {string}	title
		 */
		title: 'Department',

		/**
		 * @member {string}	basePath
		 */
		basePath,

		/**
		 * @member {Array<object>} switch
		 */
		switch: HomeSwitch(basePath),

		/**
		 * @member {Array<object>} links
		 */
		links: Links(basePath)
	})
);

export default HomePage;