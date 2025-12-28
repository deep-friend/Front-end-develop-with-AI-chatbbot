// Data awal (State)
let items = ['Susu', 'Roti', 'Kopi'];

// Fungsi untuk menampilkan item ke HTML
function renderItems() {
    const listElement = document.getElementById('itemList');
    
    // Bersihkan daftar sebelum render ulang
    listElement.innerHTML = '';

    // Loop melalui array items
    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item} 
            <button class="delete-btn" onclick="removeItem(${index})">Hapus</button>
        `;
        listElement.appendChild(li);
    });
}

// Fungsi untuk menambah item
function addItem() {
    const input = document.getElementById('itemInput');
    const newItem = input.value.trim();

    if (newItem !== "") {
        items.push(newItem); // Tambah ke array
        input.value = "";    // Kosongkan input
        renderItems();       // Refresh tampilan
    }
}

// Fungsi untuk menghapus item
function removeItem(index) {
    items.splice(index, 1); // Hapus 1 data berdasarkan index
    renderItems();          // Refresh tampilan
}

// Panggil fungsi render pertama kali saat halaman dimuat
renderItems();