const dataPraktikan = [
    { nama: "Budi", nilaiTugas: [80, 85, 90] },
    { nama: "Siti", nilaiTugas: [60, 60, 60] },
    { nama: "Andi", nilaiTugas: [90, 90, 90] },
    { nama: "Dewi", nilaiTugas: [75, 75, 75] },
    { nama: "Eko", nilaiTugas: [45, 45, 45] }
];

function hitungRataRata(tugas) {
    let total = 0;
    for (let nilai of tugas) {
        total += nilai;
    }
    return total / tugas.length;
}

function tentukanStatus(rataRata) {
    if (rataRata >= 75) {
        return "Lulus";
    } else {
        return "Tidak Lulus";
    }
}

let asisten = prompt("Masukkan nama Asisten Lab yang bertugas:");

if (asisten == "") {
    document.write('<div class="bg-slate-100 p-8">');
    document.write('<div class="bg-blue-600 rounded-2xl text-white p-8 mb-8">');
    document.write('<h1 class="text-3xl text-center font-bold mb-2">Akses Anda Di Tolak</h1>');
    document.write('</div>');
} else {

    let hasilAkhir = [];

    for (let mhs of dataPraktikan) {
        let rata = hitungRataRata(mhs.nilaiTugas);
        let status = tentukanStatus(rata);

        hasilAkhir.push({
            nama: mhs.nama,
            rataRata: rata,
            status: status
        });
    }

    console.log("=== DATA HASIL EVALUASI ===");
    console.log(hasilAkhir);

    document.write('<div class="bg-slate-100 p-8">');
    document.write('<div class="bg-blue-600 rounded-2xl text-white p-8 mb-8">');
    document.write('<h1 class="text-3xl font-bold mb-2">Laporan Evaluasi Praktikan</h1>');
    document.write('<p class="text-lg">Diperiksa oleh: <b class="text-blue-200">' + asisten + '</b></p>');
    document.write('</div>');

    document.write('<div class="flex flex-col gap-4">');

    for (let data of hasilAkhir) {
        let warnaStatus;

        if (data.status === "Lulus") {
            warnaStatus = "text-green-500";
        } else {
            warnaStatus = "text-red-500";
        }

        document.write('<div class="bg-white text-black p-6 border rounded-xl hover:scale-105 transition duration-1000">');
        document.write('<h2 class="text-2xl font-bold">' + data.nama + '</h2>');
        document.write('<p class="text-slate-600">Nilai Rata-rata: <b>' + data.rataRata.toFixed(1) + '</b></p>');
        document.write('<p class="font-bold ' + warnaStatus + '">Status: ' + data.status + '</p>');
        document.write('</div>');
    }

    document.write('</div>');
}