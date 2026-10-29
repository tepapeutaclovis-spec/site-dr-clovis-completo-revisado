(function(){var K='cc-consent',ID='G-RYX1XFFBGC',b=document.getElementById('cookie'),v=null;
try{v=localStorage.getItem(K)}catch(e){}
function load(){if(window.__ga)return;window.__ga=1;var s=document.createElement('script');s.async=1;s.src='https://www.googletagmanager.com/gtag/js?id='+ID;document.head.appendChild(s);window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config',ID,{anonymize_ip:true})}
function set(x){try{localStorage.setItem(K,x)}catch(e){}if(b)b.hidden=true;if(x==='granted')load()}
if(v==='granted')load();else if(!v&&b)b.hidden=false;
var a=document.getElementById('cc-ok'),r=document.getElementById('cc-no'),m=document.getElementById('cc-manage');
if(a)a.onclick=function(){set('granted')};if(r)r.onclick=function(){set('denied')};
if(m)m.onclick=function(e){e.preventDefault();try{localStorage.removeItem(K)}catch(x){}if(b)b.hidden=false};
document.addEventListener('click',function(e){var l=e.target.closest&&e.target.closest('a[href^="https://wa.me"]');if(l&&window.gtag)gtag('event','generate_lead',{method:'whatsapp',page_path:location.pathname})})})();