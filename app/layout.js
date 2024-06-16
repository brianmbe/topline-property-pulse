import "@/assets/styles/globals.css";

export const metadata = {
  title: "Topline | Property Management System",
  description: "Find your dream rental property with Topline.",
};

export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
