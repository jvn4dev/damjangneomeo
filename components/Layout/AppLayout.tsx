import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import S from './AppLayout.module.scss';

const AppLayout = () => {
	return (
		<div className={S.navbar_wrapper}>
			<Link href="/" style={{ marginBottom: '13px' }}>
				<Image
					src="/images/main_logo.png"
					alt="Main Logo"
					width={37}
					height={29}
				/>
			</Link>
			<Link href="/damjangneomeo">DAMJANGNEOMEO</Link>
			<Link href="/space">SPACE</Link>
			<Link href="/contents">CONTENTS</Link>
			<Link href="/plli">PLLI</Link>
			<Link href="/contact">CONTACT</Link>
			<Link
				href="https://instagram.com/damjangneomeo"
				style={{
					fontSize: '14px',
					fontWeight: '800',
					lineHeight: '17px',
					borderBottom: '2px solid white',
				}}
			>
				Instagram
			</Link>
		</div>
	);
};

export default AppLayout;
