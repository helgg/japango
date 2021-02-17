// identifica se o site for aberto pelo navegador do instagram e inseri um novo link de arquivo CSS para adaptações.

var isInstagram = navigator.userAgent.match(/instagram/i);
if (isInstagram) {
  var head = document.querySelector('head');
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'css/instagram-fixes.css';
  head.appendChild(link);
}
