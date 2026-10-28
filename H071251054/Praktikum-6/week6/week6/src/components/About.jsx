function About() {
  const dataDiri = [
    {
      id: 1,
      label: "Nama",
      value: "M. Taqwin Yunus",
    },
    {
      id: 2,
      label: "Kampus",
      value: "Universitas Hasanuddin",
    },
    {
      id: 3,
      label: "Minat",
      value: "Sinematografi & UI Designer",
    },
  ];

  return (
    <section className="bg-white text-blue-950 p-8">
      <h2 className="text-2xl font-bold mb-4">
        About Me
      </h2>

      <p className="mb-4">
        Saya adalah mahasiswa yang tertarik pada dunia
        kreatif, video editing, dan pengembangan tampilan web.
      </p>

      {dataDiri.map((item) => (
        <p key={item.id} className="mb-2">
          <span className="font-bold">{item.label}:</span>{" "}
          {item.value}
        </p>
      ))}
    </section>
  );
}

export default About;



