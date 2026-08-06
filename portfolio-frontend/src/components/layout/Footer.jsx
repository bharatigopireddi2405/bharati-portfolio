function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row">
        <p className="text-sm text-slate-400">
          © {year} Bharati Gopireddi. All rights reserved.
        </p>

        <p className="text-sm text-slate-500">
          Built with React, Tailwind CSS & ❤️
        </p>
      </div>
    </footer>
  );
}

export default Footer;