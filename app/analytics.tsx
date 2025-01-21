"use client";
import { Analytics as AnalyticsImpl } from "@vercel/analytics/react";
import { useEffect, useState } from "react";
import Script from 'next/script';
import { BGA_PROD_HOST_URL } from "@/constants";

export function VercelAnalytics() {
  const [showAnalytics, setShowAnalytics] = useState(false);

  useEffect(() => {
    setShowAnalytics(
      window?.location?.href?.includes(BGA_PROD_HOST_URL)
    );
  }, []);

  if (showAnalytics) {
    return <AnalyticsImpl />;
  }
  return null;
}


const GA_TRACKING_ID = 'G-5197XPR1BB';

export function GoogleAnalytics() {

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};