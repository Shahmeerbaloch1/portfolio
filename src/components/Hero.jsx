import main from "../assests/images/main.jpg"

const Hero = () => {
    return (
      <section id="hero" className="min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hi, I'm <span className="text-accent dark:text-purple-400">Shahmeer Baloch</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                Frontend Developer
              </h2>
              <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
                I build exceptional digital experiences with React, JavaScript, and modern web technologies.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-accent dark:bg-purple-600 text-white rounded-lg hover:bg-purple-700 dark:hover:bg-purple-700 transition"
                >
                  Contact Me
                </a>
                <a
                  href="#projects"
                  className="px-6 py-3 border border-accent dark:border-purple-400 text-accent dark:text-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-gray-800 transition"
                >
                  View Work
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-accent dark:bg-purple-600 rounded-full overflow-hidden shadow-xl">
                {/* Replace with your image */}
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                 <img src={main} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;