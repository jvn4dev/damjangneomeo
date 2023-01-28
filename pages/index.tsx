import Head from 'next/head';
import Landing from '@/pages/home/Landing';

export default function Home() {
	return (
		<>
			<Head>
				<title>DAMJANGNEOMEO</title>
				<meta name="description" content="우리는 담장너머입니다." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Landing />
		</>
	);
}
