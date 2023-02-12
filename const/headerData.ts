import { HeaderDataType } from '@/types/const/headerDataTypes';

export const headerDataList: HeaderDataType[] = [
	{
		title: 'DAMJANGNEOMEO',
		menus: [
			{ name: 'ABOUT', url: '/about' },
			{ name: 'PEOPLE', url: '/people' },
			{ name: 'PRESS', url: '/press' },
		],
	},
	{
		title: 'SPACE',
		menus: [
			{ name: 'ULKIN Pop-up Store(2022)', url: '/space/1' },
			{ name: 'A to B Pop-up Store(2022)', url: '/space/2' },
			{ name: "Deblle Men's Hair", url: '/space/3' },
		],
	},
	{
		title: 'CONTENTS',
		menus: null,
	},
	{
		title: 'PLLI',
		menus: null,
	},
	{
		title: 'CONTACT',
		menus: null,
	},
];
