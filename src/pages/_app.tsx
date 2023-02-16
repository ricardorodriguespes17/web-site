import "../styles/globals.css";
import "../styles/colors.css";
import PageProvider from "../contexts/pageContext";
import InfoProvider from "../contexts/infoContext";

function MyApp({ Component, pageProps }) {
  return (
    <InfoProvider>
      <PageProvider>
      <Component {...pageProps} />
    </PageProvider>
    </InfoProvider>
  );
}

export default MyApp;
