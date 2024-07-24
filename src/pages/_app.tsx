import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from 'react'
import Head from 'next/head'


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
