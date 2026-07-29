import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <main className="pt-[73px]">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default Layout;