function hitungDiskon() {
    // Mengambil nilai dari input
    const hargaAsli = document.getElementById('hargaAsli').value;
    const persenDiskon = document.getElementById('persenDiskon').value;

    // Validasi sederhana
    if (hargaAsli === "" || persenDiskon === "") {
        alert("Mohon masukkan harga dan diskon!");
        return;
    }

    // Rumus Matematika
    const jumlahPotongan = (persenDiskon / 100) * hargaAsli;
    const hargaAkhir = hargaAsli - jumlahPotongan;

    // Menampilkan hasil dengan format mata uang rupiah
    document.getElementById('hemat').innerText = "Rp " + jumlahPotongan.toLocaleString('id-ID');
    document.getElementById('hargaTotal').innerText = "Rp " + hargaAkhir.toLocaleString('id-ID');
}