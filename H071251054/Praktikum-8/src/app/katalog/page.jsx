"use client";

import { useState } from "react";
import BukuCard from "@/components/BukuCard";
import dataBuku from "@/data/dataBuku";

const daftarKategori = ["Semua", "Teknologi", "Fiksi", "Pengembangan Diri"];

export default function KatalogPage() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");

  const bukuTampil =
    kategoriAktif === "Semua"
      ? dataBuku
      : dataBuku.filter((buku) => buku.kategori === kategoriAktif);

  return (
    <section>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Katalog Buku</h1>
        <p className="text-gray-500 mt-1">
          Temukan buku yang ingin kamu baca di Pustaka Senja.
        </p>
      </div>

      <div className="flex gap-3 mb-6">
        {daftarKategori.map((kategori) => (
          <button
            key={kategori}
            onClick={() => setKategoriAktif(kategori)}
            className={
              kategoriAktif === kategori
                ? "bg-blue-600 text-white text-sm px-4 py-2 rounded-lg"
                : "bg-white border border-gray-300 hover:bg-gray-100 text-sm px-4 py-2 rounded-lg"
            }
          >
            {kategori}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        {bukuTampil.map((buku) => (
          <BukuCard
            key={buku.id}
            id={buku.id}
            judul={buku.judul}
            penulis={buku.penulis}
            kategori={buku.kategori}
            tahun={buku.tahun}
            tersedia={buku.tersedia}
          />
        ))}
      </div>
    </section>
  );
}
