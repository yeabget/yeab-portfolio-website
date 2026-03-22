export default function Journey() {
  const timeline = [
    {
      year: "2023",
      title: "Started Coding",
      desc: "Began learning HTML, CSS.I was Really exited to know more about website development.",
    },
    {
      year: "2024",
      title: "Frontend Developer",
      desc: "Built responsive websites using javascript, React and Bootstrap.",
    },
    {
      year: "2025",
      title: "Advanced Projects",
      desc: "Done many projects to solidify my skills, over 30 projects by cloning already existing projects.",
    },
    {
      year: "2026",
      title: "Full Stack Journey",
      desc: "Started working with Node.js and focusing and still learning backend development.",
    },
  ];

  return (
    <section id="journey">
      <h2 className="gradient-text">My Journey </h2>

      <div className="timeline">
        {timeline.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            <div className="content">
              <h3>{item.year}</h3>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
