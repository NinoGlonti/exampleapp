"use client"

import NavBar from "./nav-bar";
import { SessionProvider } from "next-auth/react";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <SessionProvider> 
           <NavBar />
           {children}
        </SessionProvider>
      </body>
    </html>
  );
}
