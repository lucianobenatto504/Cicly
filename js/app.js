
function go(n){ location.href=`tela-${String(n).padStart(2,'0')}.html`; }
function save(key,value){ localStorage.setItem(key,JSON.stringify(value)); }
