import { wrapper } from '../redux/store';

import { GlobalStyles } from '../styled/Globalstyles';
import MainLayout from '../components/MainLayout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default wrapper.withRedux(MyApp);
