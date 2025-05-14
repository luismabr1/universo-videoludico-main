import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/Footer";
import siteMetadata from "./utils/siteMetaData";
import Head from "next/head"; // Importa el componente Head
import ThemeScript from "../components/ThemeScript";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title, // a default is required when creating a template
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="google-adsense-account"
          content="ca-pub-7915919873828180"
        />
      </Head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7915919873828180"
     crossOrigin="anonymous"></script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-mr bg-light dark:bg-black`}
      >
          <ThemeScript />

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
