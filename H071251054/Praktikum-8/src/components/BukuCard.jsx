"use client";

import { useState } from "react";
import Link from "next/link";

function BukuCard({ id, judul, penulis, kategori, tahun, tersedia }) {
  const [favorit, setFavorit] = useState(false);

  return (
    <article className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-blue-600 font-medium">{kategori}</span>
          <span
            className={
              tersedia
                ? "text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full"
                : "text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full"
            }
          >
            {tersedia ? "Tersedia" : "Sedang Dipinjam"}
          </span>
        </div>
        <h3 className="text-lg font-semibold">{judul}</h3>
        <p className="text-sm text-gray-500 mt-1">{penulis}</p>
        <p className="text-sm text-gray-400">Terbit {tahun}</p>
      </div>

      <div className="flex items-center justify-between border-t border-gray-100 pt-3 mt-4">
        <button
          onClick={() => setFavorit(!favorit)}
          className={
            favorit
              ? "bg-red-100 text-red-600 text-sm px-3 py-1.5 rounded-lg transition"
              : "bg-gray-100 hover:bg-gray-200 text-sm px-3 py-1.5 rounded-lg transition"
          }
        >
          {favorit ? "❤️ Favorit" : "🤍 Simpan"}
        </button>
        <Link
          href={`/katalog/${id}`}
          className="text-sm text-blue-600 hover:underline"
        >
          Lihat Detail &rarr;
        </Link>
      </div>
    </article>
  );
}

export default BukuCard;
