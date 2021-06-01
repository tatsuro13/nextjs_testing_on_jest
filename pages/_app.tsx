import { AppProps } from 'next/app';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import 'setimmediate';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
