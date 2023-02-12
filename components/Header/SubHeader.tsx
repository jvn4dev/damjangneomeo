import S from '@/components/Header/HeaderMenu.module.scss';
import { HeaderMenus } from '@/types/const/headerDataTypes';

const SubHeader = (props: SubHeaderProps) => {
	const { subHeaderList } = props;
	return (
		<div className={S.dropdown}>
			{subHeaderList.map((menu) => (
				<a key={menu.name} className={S.dropdown_content} href={menu.url}>
					{menu.name}
				</a>
			))}
		</div>
	);
};

export default SubHeader;

type SubHeaderProps = {
	subHeaderList: HeaderMenus[];
};
