import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-toggle";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "High Paid Jobs",
  description: "High Paid Jobs offers high ticket careers within 90-120 days!",
  openGraph: {
    title: "High Paid Jobs",
    description:
      "High Paid Jobs offers high ticket careers within 90-120 days!",
    url: "https://www.highpaidjobs.us/",
    siteName: "High Paid Jobs",
    images: [
      {
        url: "https://ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com/userdocument/1742757582431-high-paid-jobs.png",
        width: 1200,
        height: 630,
        alt: "High Paid Jobs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "High Paid Jobs",
    description:
      "High Paid Jobs offers high ticket careers within 90-120 days!",
    images: ["https://ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com/userdocument/1742757582431-high-paid-jobs.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        {/* Meta Pixel Script */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '9461457470586577');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Noscript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=9461457470586577&ev=PageView&noscript=1"
          />
        </noscript>
      </body>
    </html>
  );
}
