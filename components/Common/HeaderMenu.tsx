import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { HeaderDataType } from '@/types/const/headerDataTypes';

const HeaderMenu = (props: HeaderMenuProps) => {
	const { headerData } = props;

	const [anchorElement, setAnchorElement] = React.useState<null | HTMLElement>(
		null
	);
	const isOpen = !!anchorElement;

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorElement(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorElement(null);
	};

	return (
		<div>
			<Button
				id="basic-button"
				aria-controls={isOpen ? 'basic-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={isOpen ? 'true' : undefined}
				onClick={handleClick}
			>
				{headerData.title}
			</Button>
			{headerData.menus && (
				<Menu
					id="basic-menu"
					anchorEl={anchorElement}
					open={isOpen}
					onClose={handleClose}
					MenuListProps={{
						'aria-labelledby': 'basic-button',
					}}
				>
					{headerData.menus.map((menu, index) => (
						<MenuItem key={index} onClick={handleClose}>
							{menu}
						</MenuItem>
					))}
				</Menu>
			)}
		</div>
	);
};

export default HeaderMenu;

type HeaderMenuProps = {
	headerData: HeaderDataType;
};
