import { FiGithub } from 'react-icons/fi';
import { FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'Weather App',
    description: 'A simple weather app that fetches real-time weather details using the WeatherAPI.',
    tags: ['HTML', 'CSS', 'Javascript'],
    github: 'https://github.com/Shahmeerbaloch1/waether-app.git',
    live: 'https://skychecker.netlify.app/',
    image: 'https://s3-alpha.figma.com/hub/file/4392731269/e185a990-4435-487f-80cd-8118974b1c3f-cover.png'
  },
  {
    id: 2,
    title: 'Spotify Clone',
    description: 'A sleek Spotify-inspired music streaming app to play, explore, and enjoy your favorite tracks online.',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/Shahmeerbaloch1/son-app.git',
    live: 'https://spotitfy.netlify.app/',
    image: 'https://tse1.mm.bing.net/th/id/OIP.qnuZV9BjIjSUxCpm8KTCVgHaEO?pid=Api&P=0&h=220'
  },
  {
    id: 3,
    title: 'TO_DO_LIST',
    description: 'A simple and interactive To-Do List app to add, edit, and manage daily tasks with ease.',
    tags: ['JavaScript', 'API', 'HTML', 'CSS'],
    github: 'https://github.com/Shahmeerbaloch1/TO-DO-LIST.git',
    live: 'https://liststore.netlify.app/',
    image: 'https://i.ibb.co/K56rGrK/to-do-list.png'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          My <span className="text-accent dark:text-purple-400">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-sm rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-purple-400 transition"
                  >
                    <FiGithub className="mr-1" /> Code
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-purple-400 transition"
                  >
                    <FiExternalLink className="mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;