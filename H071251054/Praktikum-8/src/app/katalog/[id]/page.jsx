import Link from "next/link";
import dataBuku from "@/data/dataBuku";

export default async function DetailBukuPage({ params }) {
  const { id } = await params;
  const buku = dataBuku.find((item) => item.id === id);

  if (!buku) {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Buku dengan ID &quot;{id}&quot; tidak ditemukan!
        </h1>
        <Link href="/katalog" className="text-blue-600 hover:underline">
          &larr; Kembali ke Katalog
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-medium">
          {buku.kategori}
        </span>
        <span
          className={
            buku.tersedia
              ? "text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full"
              : "text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full"
          }
        >
          {buku.tersedia ? "Tersedia" : "Sedang Dipinjam"}
        </span>
      </div>

      <h1 className="text-3xl font-bold mb-1">{buku.judul}</h1>
      <p className="text-gray-500 mb-1">Penulis: {buku.penulis}</p>
      <p className="text-gray-400 mb-6">Tahun terbit: {buku.tahun}</p>

      <h2 className="font-semibold mb-2">Sinopsis</h2>
      <p className="text-gray-600 leading-relaxed mb-8">{buku.sinopsis}</p>

      <Link
        href="/katalog"
        className="inline-block bg-gray-100 hover:bg-gray-200 text-sm px-4 py-2 rounded-lg transition"
      >
        &larr; Kembali ke Katalog
      </Link>
    </article>
  );
}
