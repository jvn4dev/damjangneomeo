import { HeaderDataType } from '@/types/const/headerDataTypes';
import S from './HeaderMenu.module.scss';

const HeaderMenu = (props: HeaderMenuProps) => {
	const { headerData, onClickMenu, isDropdownActive } = props;

	return (
		<>
			<a
				className={isDropdownActive ? S.active : ''}
				onClick={() => onClickMenu(headerData.title)}
			>
				{headerData.title}
			</a>
			{isDropdownActive && headerData.menus && (
				<div className={S.dropdown}>
					{headerData.menus.map((menu) => (
						<a key={menu.name} className={S.dropdown_content} href={menu.url}>
							{menu.name}
						</a>
					))}
				</div>
			)}
		</>
	);
};

export default HeaderMenu;

type HeaderMenuProps = {
	headerData: HeaderDataType;
	onClickMenu: (menu: string) => void;
	isDropdownActive: boolean;
};
