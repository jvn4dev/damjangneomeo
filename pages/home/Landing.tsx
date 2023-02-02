import Image from 'next/legacy/image';

const Landing = () => {
	return (
		<>
			<Image
				src="/images/main_gif.png"
				alt="main_gif"
				layout="fill"
				objectFit="cover"
			/>
		</>
	);
};

export default Landing;
