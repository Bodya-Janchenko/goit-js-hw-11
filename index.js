import{a as p,S as m,i}from"./assets/vendor-1AYLTIiv.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const f=s=>p.get("https://pixabay.com/api/",{params:{key:"50285738-1ed6c89d653294dbf28cfa2b7",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data.hits),l=document.querySelector(".gallery");let y=new m(".gallery a");const h=s=>{const t=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:r,views:n,comments:u,downloads:g})=>`
    <div class="image-card">
      <a href="${a}" target="_blank">
        <img src="${o}" alt="${e}" />
      </a>
      <div class="card-info">
        <span><strong>Likes</strong><br>${r}</span>
        <span><strong>Views</strong><br>${n}</span>
        <span><strong>Comments</strong><br>${u}</span>
        <span><strong>Downloads</strong><br>${g}</span>
      </div>
    </div>
  `).join("");l.insertAdjacentHTML("beforeend",t),y.refresh()},b=()=>{l.innerHTML=""},d=document.querySelector(".loader"),L=()=>{d.style.display="flex"},c=()=>{d.style.display="none"},v=document.querySelector(".form");document.querySelector(".gallery");v.addEventListener("submit",s=>{s.preventDefault();const t=s.currentTarget.elements["search-text"].value.trim();if(!t){i.warning({message:"Please enter a search term!",position:"topRight"});return}b(),L(),f(t).then(o=>{if(c(),o.length===0){i.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(o)}).catch(o=>{c(),console.error(o),i.error({message:"Something went wrong. Please try again later!",position:"topRight"})})});
//# sourceMappingURL=index.js.map
