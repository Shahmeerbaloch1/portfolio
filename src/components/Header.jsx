import ThemeToggle from './ThemeToggle';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-accent dark:text-purple-400">
          DevPortfolio
        </a>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-accent dark:hover:text-purple-400 transition">About</a>
          <a href="#skills" className="hover:text-accent dark:hover:text-purple-400 transition">Skills</a>
          <a href="#projects" className="hover:text-accent dark:hover:text-purple-400 transition">Projects</a>
          <a href="#contact" className="hover:text-accent dark:hover:text-purple-400 transition">Contact</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <div className="flex space-x-3">
            <a href="https://github.com/Shahmeerbaloch1" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-xl hover:text-accent dark:hover:text-purple-400 transition" />
            </a>
            <a href="https://www.linkedin.com/in/shahmeer-baloch-88356b279/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl hover:text-accent dark:hover:text-purple-400 transition" />
            </a>
          </div>
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </div>
    </header>
  );
};

export default Header;