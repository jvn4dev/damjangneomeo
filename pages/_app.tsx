import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import AppLayout from '@/components/Layout/AppLayout';
import '@/public/static/fonts/style.css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<AppLayout>
				<Component {...pageProps} />
			</AppLayout>
		</>
	);
}
