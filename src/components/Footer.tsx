
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-violet-900 to-cyan-900 dark:from-slate-950 dark:via-violet-950 dark:to-cyan-950 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-6">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Manasi Bharati
          </h3>
          <p className="text-slate-400 max-w-md mx-auto">
            Building digital experiences that make a difference. Let's create something amazing together!
          </p>
        </div>
        <div className="border-t border-slate-700 pt-6">
          <p className="text-slate-400">
            © 2024 Manasi Bharati. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
