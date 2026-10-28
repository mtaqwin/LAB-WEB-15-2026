
const daftarAnggota = document.getElementById("daftarAnggota");
const statusAnggota = document.getElementById("statusAnggota");
const panelTugas = document.getElementById("panelTugas");
const judulTugas = document.getElementById("judulTugas");
const ringkasanTugas = document.getElementById("ringkasanTugas");
const formTambah = document.getElementById("formTambah");
const inputTugas = document.getElementById("inputTugas");
const btnSimpan = document.getElementById("btnSimpan");
const pesanErrorForm = document.getElementById("pesanErrorForm");
const pesanSukses = document.getElementById("pesanSukses");
const inputCari = document.getElementById("inputCari");
const pesanKosongCari = document.getElementById("pesanKosongCari");
const statusTugas = document.getElementById("statusTugas");
const daftarTugas = document.getElementById("daftarTugas");

// fitur 1 tampilkan daftar anggota
async function muatAnggota() {
    try {
        statusAnggota.classList.remove("text-red-500");
        statusAnggota.classList.add("text-slate-500");
        statusAnggota.textContent = "Memuat anggota...";

        let respons = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!respons.ok) {
            throw new Error("Status " + respons.status);
        }

        let pengguna = await respons.json();
        statusAnggota.textContent = "";
        daftarAnggota.innerHTML = "";

        pengguna.slice(0, 10).forEach((orang) => {
            let tombol = document.createElement("button");
            tombol.textContent = orang.name;
            tombol.className = "w-full text-left p-3 rounded font-medium bg-slate-100 text-black";

            tombol.addEventListener("click", () => {
                bukaTugas(orang.id, orang.name, tombol);
            });

            daftarAnggota.appendChild(tombol);
        });
    } catch (error) {
        statusAnggota.textContent = "Gagal memuat anggota: Koneksi internet terputus.";
        statusAnggota.classList.remove("text-slate-500");
        statusAnggota.classList.add("text-red-500");
    }
}

// fitur 2 tampilan tugas anggota
async function bukaTugas(id, nama, tombolAktif) {
    let semuaTombol = daftarAnggota.querySelectorAll("button");

    semuaTombol.forEach((btn) => {
        btn.classList.remove("bg-blue-600", "text-white");
        btn.classList.add("bg-slate-100", "text-black");
    });

    tombolAktif.classList.remove("bg-slate-100", "text-black");
    tombolAktif.classList.add("bg-blue-600", "text-white");

    panelTugas.classList.remove("hidden");
    judulTugas.textContent = "Tugas " + nama;

    inputTugas.value = "";
    inputCari.value = "";
    pesanKosongCari.classList.add("hidden");
    pesanErrorForm.textContent = "";
    pesanSukses.textContent = "";

    daftarTugas.innerHTML = "";
    statusTugas.textContent = "Memuat tugas...";
    statusTugas.classList.remove("text-red-500");
    statusTugas.classList.add("text-slate-600");
    ringkasanTugas.textContent = "Menghitung...";

    try {
        let respons = await fetch(
            "https://jsonplaceholder.typicode.com/todos?userId=" + id
        );

        if (!respons.ok) {
            throw new Error("Status " + respons.status);
        }

        let tugas = await respons.json();

        statusTugas.textContent = "";

        tugas.slice(0, 20).forEach((item) => {
            buatElemenTugas(item.title, item.completed);
        });

        hitungProgres();
    } catch (error) {
        statusTugas.textContent = "Gagal memuat tugas: Koneksi internet terputus.";
        statusTugas.classList.remove("text-slate-600");
        statusTugas.classList.add("text-red-500");
        ringkasanTugas.textContent = "Data tugas tidak tersedia.";
    }
}

// fitur 5 menandai selesai dan hapus tugas
function hitungProgres() {
    let semuaLi = daftarTugas.querySelectorAll("li");
    let total = semuaLi.length;
    let selesai = 0;

    semuaLi.forEach((li) => {
        let span = li.querySelector("span");

        if (span.classList.contains("line-through")) {
            selesai++;
        }
    });

    ringkasanTugas.textContent = selesai + " dari " + total + " tugas selesai";
}

function buatElemenTugas(judul, statusSelesai) {
    let li = document.createElement("li");
    li.className = "flex justify-between items-center bg-slate-50 p-4 border rounded";

    let span = document.createElement("span");
    span.textContent = judul;

    if (statusSelesai) {
        span.classList.add("line-through", "text-gray-400");
    }

    let divTombol = document.createElement("div");
    divTombol.className = "flex gap-2";

    if (!statusSelesai) {
        let btnSelesai = document.createElement("button");
        btnSelesai.textContent = "Tandai selesai";
        btnSelesai.className = "bg-green-500 text-white px-3 py-1 rounded text-sm";

        btnSelesai.addEventListener("click", () => {
            span.classList.add("line-through", "text-gray-400");
            btnSelesai.remove();
            hitungProgres();
        });

        divTombol.appendChild(btnSelesai);
    }

    let btnHapus = document.createElement("button");
    btnHapus.textContent = "Hapus";
    btnHapus.className = "bg-red-500 text-white px-3 py-1 rounded text-sm";

    btnHapus.addEventListener("click", () => {
        li.remove();
        hitungProgres();
    });

    divTombol.appendChild(btnHapus);

    li.appendChild(span);
    li.appendChild(divTombol);
    daftarTugas.appendChild(li);
}

// fitur 3 cari tugas
inputCari.addEventListener("input", (event) => {
    let kataKunci = event.target.value.toLowerCase();
    let semuaLi = daftarTugas.querySelectorAll("li");
    let adaTampil = false;

    semuaLi.forEach((li) => {
        let teksSpan = li.querySelector("span").textContent.toLowerCase();

        if (teksSpan.includes(kataKunci)) {
            li.classList.remove("hidden");
            adaTampil = true;
        } else {
            li.classList.add("hidden");
        }
    });

    if (!adaTampil && semuaLi.length > 0) {
        pesanKosongCari.classList.remove("hidden");
    } else {
        pesanKosongCari.classList.add("hidden");
    }
});

// fitur 4 tambah tugas
function simpanTugas(judul) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!navigator.onLine) {
                reject(new Error("Gagal menyimpan tugas: Koneksi internet terputus."));
                return;
            }

            let semuaLi = daftarTugas.querySelectorAll("li");
            let sudahAda = false;

            semuaLi.forEach((li) => {
                let teksSpan = li.querySelector("span").textContent.toLowerCase();

                if (teksSpan === judul.toLowerCase()) {
                    sudahAda = true;
                }
            });

            if (sudahAda) {
                reject(new Error("Tugas tersebut sudah ada!"));
            } else {
                resolve({ title: judul, completed: false });
            }
        }, 1000);
    });
}

formTambah.addEventListener("submit", async (event) => {
    event.preventDefault();
    pesanErrorForm.textContent = "";
    pesanSukses.textContent = "";

    let judulBaru = inputTugas.value.trim();

    if (judulBaru.length < 5) {
        pesanErrorForm.textContent = "Judul tugas minimal 5 karakter.";
        return;
    }

    btnSimpan.textContent = "Menyimpan...";

    try {
        let tugasBaru = await simpanTugas(judulBaru);
        buatElemenTugas(tugasBaru.title, tugasBaru.completed);
        hitungProgres();
        inputTugas.value = "";

        pesanSukses.textContent = "Tugas berhasil ditambahkan.";

        setTimeout(() => {
            pesanSukses.textContent = "";
        }, 3000);
    } catch (error) {
        pesanErrorForm.textContent = error.message;
    } finally {
        btnSimpan.textContent = "Simpan";
    }
});

muatAnggota();
