(()=>{"use strict";const e=function(){const e=document.querySelector(".content-wrapper"),t=document.createElement("div");t.classList.add("home-content"),e.appendChild(t);const n=document.createElement("h1");n.textContent="Welcome to John's Sushi";const c=document.createElement("p");c.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad molestias dolores sed nemo. Suscipit ducimus soluta, itaque ut earum culpa! Quos aut, quidem aspernatur exercitationem veniam blanditiis quae rerum non inventore in dolores, ad assumenda ut debitis natus, deleniti explicabo architecto libero iusto. Repellendus, totam nesciunt? Impedit amet quisquam fuga.",t.appendChild(n),t.appendChild(c)};!function(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("wrapper");const n=document.createElement("div");n.classList.add("content-wrapper"),e.appendChild(t);const c=document.createElement("div");c.classList.add("header"),t.appendChild(c),t.appendChild(n);const d=document.createElement("p");d.textContent="John's Sushi";const i=document.createElement("div");i.innerHTML='<p class="home">HOME</p>\n    <p class="menu">MENU</p>\n    <p class="contact">CONTACT</p>',c.appendChild(d),c.appendChild(i)}(),e(),document.querySelector(".menu").addEventListener("click",(()=>{document.querySelector(".content-wrapper").innerHTML="",function(){const e=document.querySelector(".content-wrapper"),t=document.createElement("div");t.classList.add("menu-content"),e.appendChild(t);const n=document.createElement("h1");n.textContent="MENU",t.appendChild(n);const c=document.createElement("div");c.classList.add("menu-list");const d=document.createElement("div");d.classList.add("menu-list");const i=document.createElement("div");i.classList.add("menu-list");const a=document.createElement("div");a.classList.add("menu-list");const o=document.createElement("div");o.classList.add("menu-list");const s=document.createElement("div");s.classList.add("menu-list"),c.innerHTML='\n    <img src="../src/img/MENU9.png" alt="">\n    <p>Smashed Avo</p>',d.innerHTML='\n    <img src="../src/img/MENU10.png" alt="">\n    <p>Yin & Yang</p>',i.innerHTML='\n    <img src="../src/img/MENU11.png" alt="">\n    <p>Pancakes</p>',a.innerHTML='\n    <img src="../src/img/MENU12.png" alt="">\n    <p>Huevos Rancheros</p>',o.innerHTML='\n    <img src="../src/img/MENU13.png" alt="">\n    <p>Breakkie Roll</p>',s.innerHTML='\n    <img src="../src/img/MENU14.png" alt="">\n    <p>Burrito</p>',t.appendChild(c),t.appendChild(d),t.appendChild(i),t.appendChild(a),t.appendChild(o),t.appendChild(s)}()})),document.querySelector(".home").addEventListener("click",(()=>{document.querySelector(".content-wrapper").innerHTML="",e()})),document.querySelector(".contact").addEventListener("click",(()=>{document.querySelector(".content-wrapper").innerHTML="",function(){const e=document.querySelector(".content-wrapper"),t=document.createElement("div");t.classList.add("contact-content"),e.appendChild(t);const n=document.createElement("h1");n.textContent="CONTACTS";const c=document.createElement("p"),d=document.createElement("p"),i=document.createElement("p");c.textContent="Contact Number: 0987321412",d.textContent="Address: Lorem ipsum dolor sit amet consectetur adipisicing.",i.textContent="Look for Mary Gianna Viliran",t.appendChild(n),t.appendChild(c),t.appendChild(d),t.appendChild(i)}()}))})();