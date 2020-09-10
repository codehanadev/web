import '../styles/global.scss';
import Head from 'next/head'
// import Link from 'next/link'
import AppBar from '../components/AppBar';
import AppFooter from '../components/AppFooter';
import ThemeProvider from '../components/ThemeProvider';


export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <title>CodeHana</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Head>
    <ThemeProvider>
      <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}>
        <AppBar links={[
          // { label: 'About Us', href: '/about' },
        ]} />
        <Component {...pageProps} />
        <AppFooter />
      </div>
    </ThemeProvider>
  </>;
}
