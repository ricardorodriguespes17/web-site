import "../styles/globals.css";
import "../styles/colors.css";
import PageProvider from "../contexts/pageContext";

function MyApp({ Component, pageProps }) {
  return (
    <PageProvider>
      <Component {...pageProps} />
    </PageProvider>
  );
}

export default MyApp;
