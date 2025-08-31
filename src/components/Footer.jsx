import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-700 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-300">
              © {new Date().getFullYear()} Shahmeer Baloch. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/Shahmeerbaloch1" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-purple-400 transition">
              <FaGithub className="text-xl" />
            </a>
            <a href="https://www.linkedin.com/in/shahmeer-baloch-88356b279/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-purple-400 transition">
              <FaLinkedin className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;