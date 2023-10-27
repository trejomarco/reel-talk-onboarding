import { AppProps } from 'next/app';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../styles/globals.css';
import '../components/transitions.css';

function MyApp({ Component, pageProps, router }: AppProps & { router: any }) {
  return (
    <TransitionGroup>
      <CSSTransition key={router.route} classNames="page" timeout={300}>
        <Component {...pageProps} />
      </CSSTransition>
    </TransitionGroup>
  );
}

export default MyApp;
















// import { AppProps } from 'next/app';
// import '../styles/globals.css';

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

// export default MyApp;





// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
