const requestName = async () => {
  // const nama = prompt('masukan nama kamu : ');
  // console.log(nama);
  return 'nama';
};

const cetakNama = async () => {
  const nama = await requestName();
  console.log('nama anda adalah : ' + nama);
}

console.log('mulai');

// console.log(requestName());
cetakNama();
console.log('selesai');