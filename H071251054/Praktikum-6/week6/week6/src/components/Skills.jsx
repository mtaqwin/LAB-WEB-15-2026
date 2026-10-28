function Skills() {
  const skills = [
    "UI Design",
    "Content Creation",
    "Video Editing",
    "Scriptwriting",
  ];

  return (
    <section className="bg-blue-950 text-white p-8">
      <h2 className="text-2xl font-bold text-yellow-400 mb-4">
        My Skills
      </h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <p
            key={index}
            className="bg-white text-blue-950 p-3 rounded"
          >
            {skill}
          </p>
        ))}
      </div>
    </section>
  );
}

export default Skills;


