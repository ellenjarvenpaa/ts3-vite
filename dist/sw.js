if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const d=e=>n(e,r),f={module:{uri:r},exports:c,require:d};i[r]=Promise.all(s.map((e=>f[e]||d(e)))).then((e=>(o(...e),c)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"app-icon.png",revision:"794b6a9fcb24bf213dcf1946b81799a1"},{url:"app-icon.svg",revision:"104f23f56679710119f4aa3ed33c1da2"},{url:"assets/index-1aea90c4.js",revision:null},{url:"assets/index-f53161b4.css",revision:null},{url:"icons/icon-192x192.png",revision:"b6c036e5eff396ee211876bf9696e839"},{url:"icons/icon-256x256.png",revision:"84edf4d141d421b5685da78855abce82"},{url:"icons/icon-384x384.png",revision:"3cd99731f0f0638cec568a41adb9ec4d"},{url:"icons/icon-512x512.png",revision:"56641f8b7d7ceb855757b07afe3483a4"},{url:"index.html",revision:"7138747e793b0efede35f75bed80d5ed"},{url:"registerSW.js",revision:"3a9586eed67bd5a49e413ce1d4139685"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"./icons/icon-192x192.png",revision:"b6c036e5eff396ee211876bf9696e839"},{url:"./icons/icon-256x256.png",revision:"84edf4d141d421b5685da78855abce82"},{url:"./icons/icon-384x384.png",revision:"3cd99731f0f0638cec568a41adb9ec4d"},{url:"./icons/icon-512x512.png",revision:"56641f8b7d7ceb855757b07afe3483a4"},{url:"manifest.webmanifest",revision:"0aeb97a4a0eacda1db09e32269522d83"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));