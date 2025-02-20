import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.1/api.js";
import { renderHTML } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.1/element.js";
import { getHash, onHashChange } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.1/url.js"

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

function responseFunction(masukkan) {
  console.log(masukkan);

  const dataContainer = document.getElementById("data");
    dataContainer.innerHTML = ""; // Hapus isi lama sebelum menambahkan data baru

    const avatar = document.createElement("img");
    avatar.src = isi.data.Foto;
    avatar.alt = "Avatar";
    avatar.id = "avatar";

    const name = document.createElement("h3");
    name.id = "konten";
    name.textContent = isi.data.Name;

    const ug = document.createElement("p");
    alt.id = "alt";
    ug.textContent = isi.data.Ug;

    const skill = document.createElement("p");
    origin.id = "origin";
    skill.textContent = isi.data.Skill;

    const rate = document.createElement("p");
    skill.id = "skill";
    rate.textContent = isi.data.Rate;

    const socialContainer = document.createElement("div");
    socialContainer.classList.add("about");
    socialContainer.id = "so";

    isi.data.socialIcons.icons.forEach((icon) => {
        const linkElement = document.createElement("a");
        linkElement.href = icon.url;
        linkElement.target = "_blank";
        linkElement.rel = "noopener noreferrer";

        const iconElement = document.createElement("i");
        iconElement.id = icon.id;
        iconElement.className = icon.class;
        iconElement.title = icon.type;

        linkElement.appendChild(iconElement);
        socialContainer.appendChild(linkElement);
    });

    

    // Tambahkan elemen ke dalam card-item
    dataContainer.appendChild(avatar);
    dataContainer.appendChild(name);
    dataContainer.appendChild(alt);
    dataContainer.appendChild(origin);
    dataContainer.appendChild(skill);
    dataContainer.appendChild(about);
}
const colors = ['#000'];
      let currentColorIndex = 0;

      // Ubah warna latar belakang setiap 2 detik
      setInterval(function() {
          document.body.style.backgroundColor = colors[currentColorIndex];
          currentColorIndex = (currentColorIndex + 1) % colors.length;
      }, 2000);