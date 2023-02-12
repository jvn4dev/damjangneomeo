import Link from 'next/link';
import Image from 'next/legacy/image';
import S from './AppLayout.module.scss';
import HeaderMenu from '@/components/Header/HeaderMenu';
import { HeaderDataType } from '@/types/const/headerDataTypes';
import { headerDataList } from '@/const/headerData';
import { useState } from 'react';

const AppLayout = () => {
	const [activeMenuTitle, setActiveMenuTitle] = useState('');

	const handleClickMenu = (menu: string) => {
		setActiveMenuTitle(menu);
	};

	return (
		<>
			<div className={S.navbar_wrapper}>
				<Link href="/" style={{ marginBottom: '13px' }}>
					<Image
						src="/images/main_logo.png"
						alt="Main Logo"
						width={37}
						height={29}
					/>
				</Link>
				<div className={S.menu_wrapper}>
					{headerDataList?.map((headerData: HeaderDataType, index: number) => (
						<HeaderMenu
							key={index}
							headerData={headerData}
							onClickMenu={handleClickMenu}
							isDropdownActive={activeMenuTitle === headerData.title}
						/>
					))}
				</div>
				<Link
					href="https://instagram.com/damjangneomeo"
					style={{
						fontSize: '14px',
						fontWeight: '800',
						lineHeight: '17px',
						borderBottom: '2px solid #616363',
					}}
				>
					Instagram
				</Link>
			</div>
		</>
	);
};

export default AppLayout;
