import { Icons } from '@base-framework/ui/icons';

/**
 * This will get the nav links.
 *
 * @return {Array<object>}
 */
export const Links = () => [
	{ label: 'Home', href: './', icon: Icons.home, mobileOrder: 1, exact: true },
	{ label: 'Depart...', href: 'department', icon: Icons.user.group, mobileOrder: 2 },
	{ label: 'Music', href: 'music', icon: Icons.music, mobileOrder: 3 },
	{ label: 'Inbox', href: 'inbox', icon: Icons.envelope.default, mobileOrder: 4 },
	{ label: 'Messages', href: 'messages', icon: Icons.chat.text, mobileOrder: 5 },
	{ label: 'Dashboard', href: 'dashboard', icon: Icons.barChart, mobileOrder: 6 },
	{ label: 'Blog', href: 'blog', icon: Icons.newspaper, mobileOrder: 7 },
	{ label: 'Orders', href: 'orders/orders-dashboard', icon: Icons.shoppingCart, mobileOrder: 8 }
];