// fungsi web baru dimulai input radio on
document.addEventListener("DOMContentLoaded", () => {
  const on = document.getElementById("cwok");

  if (on) {
    on.checked = true;
  }
});

// fungsi untuk memunculkan nav responsive
const menuIcon = document.getElementById("icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});

// buat ganti nama
const isiNama = prompt('Name: ')
const isi = document.getElementById('isi')

if(isiNama == "" || isiNama == null || isiNama == undefined){
    const isiNama = prompt('Name: ')
}else{
    isi.innerHTML = isiNama
}


// menset waktu realtime
const waktu = document.getElementById("waktu");
let date = new Date();

function hari(hariIndex) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[hariIndex];
}

function bulan(bulanIndex) {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return months[bulanIndex];
}

const hariIndex = date.getDay();
const namaHari = hari(hariIndex);

const tanggal = date.getDate();

const bulanIndex = date.getMonth();
const namaBulan = bulan(bulanIndex);

const tahun = date.getFullYear();

waktu.innerHTML = `${namaHari}, ${tanggal}  ${namaBulan} ${tahun}`;

// fungsi buat tombol contact
function tombol() {
  const form = document.getElementById("form");
  const info = document.getElementById("info");

  const nama = document.getElementById("Name").value;
  const lahir = document.getElementById("Lahir").value;
  const pesan = document.getElementById("pesan").value;

  const formName = document.getElementById("name");
  const formLahir = document.getElementById("lahir");
  const formPesan = document.getElementById("Pesan");
  const formKelamin = document.getElementById("kelamin");

  if (nama == "" || lahir == "" || pesan == "") {
    info.style.display = "block";
  } else {
    info.style.display = "none";
    form.classList.toggle("off");
    formName.innerHTML = nama;
    formLahir.innerHTML = lahir;
    formPesan.innerHTML = pesan;
    let kelamin;
    if (document.getElementById("cwok").checked) {
      formKelamin.innerHTML = "male";
    } else if (document.getElementById("cwek").checked) {
      formKelamin.innerHTML = "female";
    }
  }
}
