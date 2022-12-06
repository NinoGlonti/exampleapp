import NavBar from "./nav-bar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <NavBar />

        {children}
      </body>
    </html>
  );
}
