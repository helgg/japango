// identifica se o site for aberto pelo navegador do instagram e inseri um novo link de arquivo CSS para adaptações.

var isInstagram = navigator.userAgent.match(/instagram/i);
if (isInstagram) {
  var head = document.querySelector('head');
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'css/instagram-fixes.css';
  head.appendChild(link);
}

// Função para adicionar uma classe em determinada faixa horária.
// function TimeOfDaySiteChange() {
//   let d = new Date();
//   let h = d.getHours();
//   if (h > 19 && h < 23) {
//     $('#drive_thru').addClass('disabled');
//   } else if (h < 20 && h > 23) {
//     $('#drive_thru').removeClass('disabled');
//   }
// }








