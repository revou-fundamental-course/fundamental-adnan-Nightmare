const menuIcon = document.getElementById("icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});

const isiNama = prompt('Name: ')
const isi = document.getElementById('isi')

if(isiNama == "" || isiNama == null || isiNama == undefined){
    const isiNama = prompt('Name: ')
}else{
    isi.innerHTML = isiNama
}

const waktu = document.getElementById("waktu");
let date = new Date();

function hari(hariIndex) {
  const day = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  return day[hariIndex];
}

function bulan(bulanIndex) {
  const month = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  return month[bulanIndex];
}

const hariIndex = date.getDay();
const namaHari = hari(hariIndex);

const tanggal = date.getDate();

const bulanIndex = date.getMonth();
const namaBulan = bulan(bulanIndex);

const tahun = date.getFullYear();

waktu.innerHTML = `${namaHari}, ${tanggal} ${namaBulan} ${tahun}`;

function tombol() {
    const form = document.getElementById('form')
    const info = document.getElementById('info')

  const nama = document.getElementById("Name").value;
  const email = document.getElementById("Email").value;
  const lahir = document.getElementById("Lahir").value;
  const pesan = document.getElementById("pesan").value;

  const formName = document.getElementById("name");
  const formEmail = document.getElementById("email");
  const formLahir = document.getElementById("lahir");
  const formPesan = document.getElementById("Pesan");
  const formKelamin = document.getElementById('kelamin')
  

  if (nama == "" || email == "" || lahir == '' || pesan == '') {
    info.style.display = 'block'
  } else {
    info.style.display = 'none'
      form.classList.toggle('off')
      formName.innerHTML = nama;
      formEmail.innerHTML = email;
      formLahir.innerHTML = lahir;
      formPesan.innerHTML = pesan;
      let kelamin;
      if (document.getElementById("cwok").checked) {
        formKelamin.innerHTML = 'laki-laki'
      } else if (document.getElementById("cwek").checked) {
        formKelamin.innerHTML = 'perempuan'
      }
  }
}
