"use client";

import { useState } from "react";

export default function UsulanPage() {
  const [nama, setNama] = useState("");
  const [judul, setJudul] = useState("");
  const [kategori, setKategori] = useState("");
  const [alasan, setAlasan] = useState("");
  const [peringatan, setPeringatan] = useState("");
  const [terkirim, setTerkirim] = useState(false);
  const [daftarUsulan, setDaftarUsulan] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    //validasi semua kolom harus terisi setelah ditrim
    if (
      nama.trim() === "" ||
      judul.trim() === "" ||
      kategori === "" ||
      alasan.trim() === ""
    ) {
      setPeringatan("Mohon lengkapi semua kolom sebelum mengirim usulan.");
      setTerkirim(false);
      return;
    }

    const usulanBaru = {
      id: Date.now(),
      nama: nama.trim(),
      judul: judul.trim(),
      kategori: kategori,
      alasan: alasan.trim(),
    };

    setDaftarUsulan([usulanBaru, ...daftarUsulan]);
    setPeringatan("");
    setTerkirim(true);
    setNama("");
    setJudul("");
    setKategori("");
    setAlasan("");
  }

  return (
    <section className="max-w-xl mx-auto">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
        <h1 className="text-2xl font-bold mb-2">Usulan Buku</h1>
        <p className="text-gray-500 text-sm mb-6">
          Ingin ada buku baru di Pustaka Senja? Isi formulir berikut.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Nama Pengusul
            </label>
            <input
              type="text"
              placeholder="Masukkan nama Anda"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Judul Buku yang Diusulkan
            </label>
            <input
              type="text"
              placeholder="Masukkan judul buku"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Kategori</label>
            <select
              value={kategori}
              onChange={(e) => setKategori(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            >
              <option value="">Pilih kategori</option>
              <option value="Teknologi">Teknologi</option>
              <option value="Fiksi">Fiksi</option>
              <option value="Pengembangan Diri">Pengembangan Diri</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Alasan Usulan
            </label>
            <textarea
              rows={4}
              placeholder="Kenapa buku ini perlu ada?"
              value={alasan}
              onChange={(e) => setAlasan(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2.5 rounded-lg transition"
          >
            Kirim Usulan
          </button>
        </form>

        {peringatan !== "" && (
          <p className="mt-4 p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg text-center">
            {peringatan}
          </p>
        )}

        {terkirim && (
          <p className="mt-4 p-3 bg-green-50 border border-green-200 text-green-700 text-sm rounded-lg text-center">
            Terima kasih, usulan Anda berhasil dikirim!
          </p>
        )}
      </div>

      {daftarUsulan.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Usulan yang Baru Dikirim</h2>
          <ul className="space-y-3">
            {daftarUsulan.map((usulan) => (
              <li
                key={usulan.id}
                className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
              >
                <p className="font-semibold">{usulan.judul}</p>
                <p className="text-xs text-blue-600 mb-1">{usulan.kategori}</p>
                <p className="text-sm text-gray-600">{usulan.alasan}</p>
                <p className="text-xs text-gray-400 mt-2">
                  Diusulkan oleh {usulan.nama}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
