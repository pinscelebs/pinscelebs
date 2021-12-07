var pages = [ 

"https://agen.indonesiya.com/",
"https://travel.indonesiya.com/",
"https://theme.indonesiya.com/",
"https://join.indonesiya.com/",
"https://share.indonesiya.com/",
"https://terus.indonesiya.com/",
"https://pulsa.indonesiya.com/",
"https://trends.indonesiya.com/",
"https://tunggu.indonesiya.com/",
"https://lancar.aridjaya.com/",
"https://lapak.aridjaya.com/",
"https://adsterra.aridjaya.com/",
"https://ak.aridjaya.com/",
"https://click.aridjaya.com/",
"https://lanjut.aridjaya.com/",
"https://lewatin.aridjaya.com/",
"https://loading.aridjaya.com/",
"https://mgid.aridjaya.com/",
"https://play.aridjaya.com/",
"https://terus.aridjaya.com/",

]; 
function randomPage() { 
return pages[Math.round(Math.random() * (pages.length - 1))]; 
} 
location.href= randomPage(); 
