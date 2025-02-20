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