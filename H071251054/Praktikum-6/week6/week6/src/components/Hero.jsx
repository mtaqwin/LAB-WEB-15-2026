
function Hero() {
  return (
    <section className="bg-blue-950 text-white p-8 flex flex-col md:flex-row items-center gap-6">
      <img
        src="/foto1.jpeg"
        alt="Foto profil Taqwin"
        className="w-48 rounded"
      />

      <div>
        <h1 className="text-3xl font-bold">
          Halo, Saya Taqwin
        </h1>

        <p className="mt-3">
          Mahasiswa Sistem Informasi & Video Editor
        </p>

        <button
          onClick={() => console.log("Tombol Diklik")}
          className="bg-yellow-400 text-black p-2 mt-4 rounded"
        >
          Hubungi Saya
        </button>
      </div>
    </section>
  );
}

export default Hero;




