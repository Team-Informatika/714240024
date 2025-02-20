import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.1/api.js";
import { renderHTML } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.1/element.js";
import { getHash, onHashChange } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.1/url.js";

onHashChange(wow);
function wow() {
    console.log(getHash());
    const hashpath = getHash();
    if (hashpath === "data") {
        console.log("datanya dah muncul bray");
        renderHTML("container", "home.html", renderDataDariJson);
    }
}

function renderDataDariJson() {
    getJSON("https://t.if.co.id/json/bai.json", responseFunction);
}

function responseFunction(isi) {
    console.log(isi);
    const data = isi; // Menggunakan langsung objek JSON yang diterima

    const dataContainer = document.getElementById("data");
    dataContainer.innerHTML = ""; // Hapus isi lama sebelum menambahkan data baru

    const avatar = document.createElement("img");
    avatar.src = data.src;
    avatar.alt = data.alt;
    avatar.id = "avatar";

    const name = document.createElement("h3");
    name.id = "konten";
    name.textContent = data.name;

    const origin = document.createElement("p");
    origin.id = "origin";
    origin.textContent = `Origin: ${data.origin}`;

    const skill = document.createElement("p");
    skill.id = "skill";
    skill.textContent = `Skill: ${data.skill}`;

    const aboutTitle = document.createElement("h4");
    aboutTitle.textContent = data.about.title;

    const socialContainer = document.createElement("div");
    socialContainer.classList.add("social-link");
    socialContainer.id = "so";

    data.about["social-media"].forEach((icon) => {
        if (icon.url) {
            const linkElement = document.createElement("a");
            linkElement.href = icon.url;
            linkElement.target = "_blank";
            linkElement.rel = "noopener noreferrer";
            linkElement.textContent = icon.type;
            socialContainer.appendChild(linkElement);
        }
    });

    // Tambahkan elemen ke dalam container
    dataContainer.appendChild(avatar);
    dataContainer.appendChild(name);
    dataContainer.appendChild(origin);
    dataContainer.appendChild(skill);
    dataContainer.appendChild(aboutTitle);
    dataContainer.appendChild(socialContainer);
}

const colors = ['#000'];
let currentColorIndex = 0;

// Ubah warna latar belakang setiap 2 detik
setInterval(function() {
    document.body.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}, 2000);
