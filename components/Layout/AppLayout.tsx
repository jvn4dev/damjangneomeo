import Link from 'next/link';
import Image from 'next/legacy/image';
import S from './AppLayout.module.scss';
import HeaderMenu from '@/components/Common/HeaderMenu';
import { HeaderDataType } from '@/types/const/headerDataTypes';
import { headerDataList } from '@/const/headerData';

const AppLayout = () => {
	return (
		<>
			<div className={S.navbar_wrapper}>
				<Link href="/" style={{ marginBottom: '13px' }}>
					<Image
						src="/images/main_logo_black.png"
						alt="Main Logo"
						width={37}
						height={29}
					/>
				</Link>
				{headerDataList?.map((headerData: HeaderDataType, index: number) => (
					<HeaderMenu key={index} headerData={headerData} />
				))}
				<Link
					href="https://instagram.com/damjangneomeo"
					style={{
						fontSize: '14px',
						fontWeight: '800',
						lineHeight: '17px',
						borderBottom: '2px solid black',
					}}
				>
					Instagram
				</Link>
			</div>
		</>
	);
};

export default AppLayout;
