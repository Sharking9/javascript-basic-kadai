const event = new Date();
const options = {
//   weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

console.log(event.toLocaleDateString('ja-JP', options));
// Expected output (varies according to local timezone and default locale): Thursday, December 20, 2012
