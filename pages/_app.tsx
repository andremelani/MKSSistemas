import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../src/components/Layout/Layout";
import store from "../redux/store";
import { Provider } from 'react-redux'
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SkeletonTheme baseColor="#313131" highlightColor="#525252" >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SkeletonTheme>
    </Provider>
  );
}
