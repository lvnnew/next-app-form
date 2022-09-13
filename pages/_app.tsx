import "../styles/globals.css";
import type { AppProps } from "next/app";
import { YMInitializer } from "react-yandex-metrika";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <YMInitializer accounts={[90280986]} options={{ webvisor: true }} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
