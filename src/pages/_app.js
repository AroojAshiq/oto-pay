import React from "react";
import PropTypes from "prop-types";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
App.propTypes = {
  pageProps: PropTypes.element,
  Component: PropTypes.element,
};
