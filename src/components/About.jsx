import about from "../assests/images/about.jpg"

const About = () => {
    return (
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            About <span className="text-accent dark:text-purple-400">Me</span>
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg">
                {/* Replace with your image */}
                <div className="w-full h-full  flex items-center justify-center">
                  <img src={about} alt="" />
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                I'm a passionate frontend developer with 1+ years of experience building responsive and user-friendly web applications. I specialize in React, JavaScript, and modern CSS frameworks like Tailwind.
              </p>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                My journey in web development started when I built my first website in institute. Since then, I've worked with startups and established companies to create digital products that users love.
              </p>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new web technologies.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <span className="font-semibold mr-2">Name:</span>
                  <span>Shahmeer Baloch</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">Email:</span>
                  <span>balochshahmeer725@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">From:</span>
                  <span>Baloch Calony,Shah-re-Faisal,Karachi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;