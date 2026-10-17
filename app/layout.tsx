import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kuldeep Yadav | Full-Stack Developer",
  description:
    "Kuldeep Yadav is a Full-Stack Developer building real-world web applications using React, Node.js, Express.js and MongoDB.",

  keywords: [
    "Kuldeep Yadav",
    "Full-Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "JavaScript Developer",
    "Software Developer",
  ],

  authors: [
    {
      name: "Kuldeep Yadav",
    },
  ],

  creator: "Kuldeep Yadav",

  openGraph: {
    title: "Kuldeep Yadav | Full-Stack Developer",
    description:
      "Portfolio of Kuldeep Yadav — Full-Stack Developer building real-world web applications with React, Node.js, Express.js and MongoDB.",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kuldeep Yadav | Full-Stack Developer",
    description:
      "Full-Stack Developer building real-world web applications with React, Node.js, Express.js and MongoDB.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const themeScript = `
  (function () {
    try {
      const theme = localStorage.getItem("portfolio-theme");
      document.documentElement.classList.toggle("dark", theme === "dark");
    } catch (error) {
      document.documentElement.classList.remove("dark");
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>

      <body>{children}</body>
    </html>
  );
}
