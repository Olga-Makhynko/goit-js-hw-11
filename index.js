import{a as d,S as m,i as a}from"./assets/vendor-lDhL-8I6.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="49778514-c989ee5c1575b477a31bb7b72",g="https://pixabay.com/api/";async function h(i){const r={key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(g,{params:r})).data.hits}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),L=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(i){const r=i.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:n,comments:p,downloads:f})=>`<li class="gallery-item">
            <a href="${s}">
              <img src="${o}" alt="${e}" loading="lazy"/>
            </a>
            <div class="info">
              <p> ${t}</p>
              <p> ${n}</p>
              <p> ${p}</p>
              <p> ${f}</p>
            </div>
          </li>`).join("");c.insertAdjacentHTML("beforeend",r),L.refresh()}function v(){c.innerHTML=""}function S(){l.classList.add("visible")}function $(){l.classList.remove("visible")}const u=document.querySelector(".form"),q=u.querySelector('input[name="search-text"]');u.addEventListener("submit",async i=>{i.preventDefault();const r=q.value.trim();if(!r){a.warning({message:"Please enter a search term.",position:"topRight"});return}v(),S(),h(r).then(o=>{if(o.length===0){a.info({message:`Sorry, there are no images matching ${r}. Please try again!`,position:"topRight"});return}b(o)}).catch(o=>{a.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{$()})});
//# sourceMappingURL=index.js.map
