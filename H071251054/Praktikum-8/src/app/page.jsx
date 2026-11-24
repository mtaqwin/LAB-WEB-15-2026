import Hero from "@/components/Hero";
import dataBuku from "@/data/dataBuku";

export default function BerandaPage() {
  //statistik dihitung otomatis dari data buku
  const totalBuku = dataBuku.length;
  const bukuTersedia = dataBuku.filter((buku) => buku.tersedia).length;
  const bukuDipinjam = dataBuku.filter((buku) => !buku.tersedia).length;

  const daftarStatistik = [
    { label: "Total Koleksi Buku", nilai: totalBuku },
    { label: "Buku Tersedia", nilai: bukuTersedia },
    { label: "Buku Dipinjam", nilai: bukuDipinjam },
  ];

  return (
    <div>
      <Hero
        nama="Pustaka Senja"
        slogan="Ruang baca nyaman di dekat kampus untuk belajar, berdiskusi, dan menemukan buku favoritmu."
        lokasi="Dekat Kampus"
        jamBuka="Buka setiap hari 09.00 - 20.00"
      />

      <section className="grid grid-cols-3 gap-6 mt-8">
        {daftarStatistik.map((item) => (
          <div
            key={item.label}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 text-center"
          >
            <p className="text-4xl font-bold text-blue-600">{item.nilai}</p>
            <p className="text-gray-500 mt-1">{item.label}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
