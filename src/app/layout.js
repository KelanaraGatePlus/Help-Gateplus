/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
"use client";

import store from "@/hooks/store/store.js";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Provider } from "react-redux";
import "./globals.css";
import Navbar from "@/components/Navbar/page";
import Footer from "@/components/Footer/MainFooter";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <head>
          {/* Google Analytics */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-JRSR883RSP"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JRSR883RSP');
          `}
          </Script>
        </head>
        <body className={`antialiased overflow-x-hidden`}>
          <Navbar />
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
          <Footer />
        </body>
      </html>
    </Provider >
  );
}
