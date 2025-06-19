

export default function Skills() {
  const skillGroups = [
    {
      title: 'Front-End Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js','Next.js','TailwindCss', 'Responsive Design']
    },
    {
      title: 'Business Analysis',
      skills: ['Requirements Gathering', 'Use Cases', 'User Stories', 'BPMN (Camunda)']
    },
    {
      title: 'Tools & Methodologies',
      skills: ['Git', 'Trello', 'Agile (Scrum)', 'SDLC', 'Usability Testing', 'QA']
    },
    {
      title: 'Programming Languages',
      skills: ['Python', 'PHP', 'Java (OOP)']
    },
    {
      title: 'Soft Skills',
      skills: ['Critical Thinking', 'Problem-Solving', 'Collaboration']
    },
  ];

  return (
    <>
      
      <main className="pb-14 bg-[#030b16] text-white pt-24 px-6 border-b-2 border-blue-500"id="skills">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skillGroups.map((group, index) => (
              <div key={index} className="bg-[#101827] p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{group.title}</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {group.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
