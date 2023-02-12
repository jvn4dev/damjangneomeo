export type HeaderDataType = {
	title: string;
	menus: HeaderMenus[] | null;
};

export type HeaderMenus = {
	name: string;
	url: string;
};
