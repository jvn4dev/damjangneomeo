import { HeaderDataType } from '@/types/const/headerDataTypes';
import S from './HeaderMenu.module.scss';
import SubHeader from '@/components/Header/SubHeader';

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
				<SubHeader subHeaderList={headerData.menus} />
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
