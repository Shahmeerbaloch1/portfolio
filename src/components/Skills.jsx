const skills = [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 75 },
    { name: 'React', level: 80 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Git', level: 80 },
  ];
  
  const Skills = () => {
    return (
      <section id="skills" className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            My <span className="text-accent dark:text-purple-400">Skills</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                I've worked with a variety of technologies in the web development world. Here are the technologies I'm most proficient in:
              </p>
              
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-accent dark:bg-purple-600 h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Professional Skills</h3>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                Beyond technical expertise, I bring these professional skills to every project:
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Problem Solving',
                  'Team Collaboration',
                  'Communication',
                  'Time Management',
                  'Attention to Detail',
                  'Continuous Learning'
                ].map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-accent dark:bg-purple-400"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;