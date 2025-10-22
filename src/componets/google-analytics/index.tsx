import Script from "next/script";

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-H4P8ZZ2SJ6"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H4P8ZZ2SJ6');
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;