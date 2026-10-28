import foto2 from "../assets/gallery/foto2.jpeg";
import foto3 from "../assets/gallery/foto3.jpeg";
import foto4 from "../assets/gallery/foto4.jpeg";
import foto5 from "../assets/gallery/foto5.jpeg";

function Gallery() {
  const foto = [
    { id: 1, gambar: foto2 },
    { id: 2, gambar: foto3 },
    { id: 3, gambar: foto4 },
    { id: 4, gambar: foto5 },
  ];

  return (
    <section className="bg-white text-blue-950 p-8">
      <h2 className="text-2xl font-bold mb-4">
        My Gallery
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {foto.map((item) => (
          <img
            key={item.id}
            src={item.gambar}
            alt={`Galeri ${item.id}`}
            className="w-full rounded"
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;




