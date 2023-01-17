import React from 'react';

const AppLayout = ({ children }: AppLayoutProps) => {
	return (
		<>
			<div>공통메뉴</div>
			{children}
		</>
	);
};

export default AppLayout;

type AppLayoutProps = {
	children: React.ReactNode;
};
