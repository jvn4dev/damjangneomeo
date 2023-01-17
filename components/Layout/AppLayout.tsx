import React from 'react';
import Link from 'next/link';

const AppLayout = ({ children }: AppLayoutProps) => {
	return (
		<>
			<Link href="/">홈으로</Link>
			<Link href="/damjangneomeo">DAMJANGNEOMEO</Link>
			<Link href="/space">SPACE</Link>
			<Link href="/contents">CONTENTS</Link>
			<Link href="/plli">PLLI</Link>
			<Link href="/contact">CONTACT</Link>
			{children}
		</>
	);
};

export default AppLayout;

type AppLayoutProps = {
	children: React.ReactNode;
};
