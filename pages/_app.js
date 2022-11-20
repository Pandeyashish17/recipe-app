import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="p-2" data-theme="cyberpunk">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
