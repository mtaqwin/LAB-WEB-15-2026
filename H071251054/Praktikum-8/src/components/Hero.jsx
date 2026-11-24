import Link from "next/link";

function Hero({ nama, slogan, lokasi, jamBuka }) {
  return (
    <section className="py-16 text-center bg-white rounded-2xl border border-gray-200 px-8 shadow-sm">
      <span className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
        Ruang Baca Komunitas
      </span>
      <h1 className="text-4xl font-bold mb-3">
        Selamat Datang di <span className="text-blue-600">{nama}</span>
      </h1>
      <p className="text-gray-500 max-w-xl mx-auto mb-2">{slogan}</p>
      <p className="text-sm text-gray-400 mb-8">
        {lokasi} • {jamBuka}
      </p>

      <div className="flex justify-center gap-4">
        <Link
          href="/katalog"
          className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-5 py-2.5 rounded-lg transition"
        >
          Lihat Katalog
        </Link>
        <Link
          href="/usulan"
          className="border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium px-5 py-2.5 rounded-lg transition"
        >
          Usulkan Buku
        </Link>
      </div>
    </section>
  );
}

export default Hero;
