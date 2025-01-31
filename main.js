import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js"
import { renderHTML, setInner } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js"

renderHTML('content', 'home.html');

getJSON("https://t.if.co.id/json/bai.json","null","null",responseFunction);
function responseFunction(response) {
  console.log('HTTP Status:', response.status);
  console.log('Response Data:', response.data);

  if (response.status ===200) {
    const data = response.data;

    const konten = `
    <p>uy: ${data.uy}</p>
    `;

    setInner("uy", konten);
} else {
    setInner("uy", '<p>Error: Unable to fetch data</p>');
}
}