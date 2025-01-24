import {renderHTML,onClick,setInner} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js";

renderHTML('content', 'home.html');

onClick("github",myGithub);
function myGithub() {
    window.open('https://github.com/MuhammadBaihaqi0', 'blank');
}
onClick("whatsapp",mywhatsapp);
function mywhatsapp() {
    window.open('https://whatsapp.com/6281366299487', 'blank');
}
onClick("instagram",myinstagram);
function myinstagram() {
    window.open('https://www.instagram.com/muhammadbaihaqiii__/', 'blank');
}

setInner("tex", "kontak saya:")