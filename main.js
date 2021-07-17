// Ambil semua yang dibutuhkan (tombol tambah, kolom input, dan container untuk menyimpan item)
const addButton = document.querySelector('.add-button'); // tombol tambah atau add
let input = document.querySelector('.input'); // kolom input
const container = document.querySelector('.container'); // container untuk menyimpan div
// Membuat class untuk dipanggil setiap button diklik atau form dienter
class Item {
	constructor(itemName) { // bagian ini akan selalu dipanggil pertama saat class dipanggil
		// membuat div untuk setiap item
		this.createDiv(itemName); // memanggil function untuk membuat div berisi item(nama kegiatan, tombol edit dan remove);
	}
	createDiv(itemName){
		let itemBox = document.createElement('div'); // membuat pembungkusnya (div) untuk menyimpan input, edit-button dan remove-button
		itemBox.classList.add('item'); // div diberi class item agar bisa disytling di css

		let input = document.createElement('input'); // membuat elemen input yang menampilkan kegiatan yang sudah di add
		input.value = itemName; // value pada input sesuai yang berikan pada parameter
		input.disabled = true; // input disabled agar tidak bisa dirubah
		input.classList.add('item-input'); // input diberi nama class agar bisa distyling di css
		input.type = "text"; // type inputnya adalah text


		let editButton = document.createElement('button'); // membuat elemen button
		editButton.innerHTML = "EDIT"; // text pada button ini adalah edit
		editButton.classList.add('edit-button'); // button diberi class agar bisa distyling di css

		let removeButton = document.createElement('button'); // membuat elemen button
		removeButton.innerHTML = "REMOVE"; // text pada button ini adalah remove
		removeButton.classList.add('remove-button'); // button diberi class agar bisa distyling di css

		container.appendChild(itemBox); // menambahkan elemen div pada container
		itemBox.appendChild(input); // menambahkan elemen input pada div dalam container
		itemBox.appendChild(editButton); // menambahkan elemen edit-button pada div dalam container
		itemBox.appendChild(removeButton); // menambahkan elemen remove-button pada div dalam container

		editButton.addEventListener('click', () => this.edit(input)); // saat edit-button diklik maka jalankan fungsi edit dengan argument input
		removeButton.addEventListener('click', () => this.remove(itemBox)); // saat remove-button diklik maka jalankan fungsi remove dengan argument itemBox agar menghapus div item
	}
	edit(input) {
		input.disabled = !input.disabled; // value disabled sebelumnya dibalik menjadi false tujuannya agar input.value-nya bisa diketik ulang
	}
	remove(item) {
		container.removeChild(item); // menghapus div item beserta isinya dari container
	}
}
function check(){
	if(input.value != ""){ // cek apakah value pada input tidak sama dengan string kosong
		new Item(input.value); // jika tidak sama maka jalankan class Item dengan argument berisi isi input dari user
		input.value = ""; // kemudian bersihkan input dari text yang sudah ditambahkan
	}
}
addButton.addEventListener('click', check); // saat button add diklik jalankan fungsi check
window.addEventListener('keydown', (e) => { // agar saat mngetik di input kemudian menekan tombol enter bisa sama seperti klik tombol add
	if(e.which == 13) { // cek apakah kode tombolnya benar (enter = 13)
		check(); // jika benar tombol enter maka jalankan fungsi check
	}
});