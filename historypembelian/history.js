// script.js
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchOrder');
    const table = document.getElementById('purchaseTable');

    // Check if search input exists
    if (!searchInput) {
        console.warn('Search input not found');
        return;
    }

    // Check if table exists
    if (!table) {
        console.warn('Purchase table not found');
        return;
    }

    searchInput.addEventListener('input', function() {
        const keyword = this.value.toLowerCase().trim();
        // Mengambil baris terbaru setiap kali user mengetik
        const tableRows = table.querySelectorAll('tbody tr');

        if (tableRows.length === 0) {
            console.warn('No table rows found');
            return;
        }

        tableRows.forEach(row => {
            // Menggunakan textContent lebih cepat daripada innerText
            const rowText = row.textContent.toLowerCase();
            
            if (keyword === '' || rowText.includes(keyword)) {
                row.style.display = ''; // Tampilkan
            } else {
                row.style.display = 'none'; // Sembunyikan
            }
        });
    });
});