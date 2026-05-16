import "./globals.css";

export const metadata = {
  title: "NextJsTest",
  description: "Simple login demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
