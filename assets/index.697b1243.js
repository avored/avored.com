import{d as l,c as a,o as d,a as r,b as f}from"./vendor.c1952368.js";const u=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};u();var m="/avored.com/assets/logo.e8745ebe.svg";const p={class:"h-screen align-middle justify-center flex w-full"},h=r("div",{class:"m-auto text-center"},[r("div",{class:"flex justify-center"},[r("img",{alt:"AvoRed logo",class:"w-96",src:m})]),r("h1",{class:"text-red-500 text-4xl"},"AvoRed a headless e commerce for Laravel")],-1),_=[h],g=l({setup(i){return(o,n)=>(d(),a("div",p,_))}});f(g).mount("#app");
