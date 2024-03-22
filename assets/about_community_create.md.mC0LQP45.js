import{d as M,h as o,k as b,o as P,c as E,J as s,w as N,a5 as w,a6 as U,m as a,p as n,a2 as L,q as H,s as $,_ as R,a4 as Y}from"./chunks/framework.CTjf6bD_.js";import{E as y,c as j}from"./chunks/compressImage.BXs08Cqn.js";import{S as G,b as O}from"./chunks/createFormData.BPDqX-xN.js";import{_ as z}from"./chunks/PicoStyle.vue_vue_type_script_setup_true_lang.DKhuZFY3.js";import{u as B}from"./chunks/useTheme.BLCKu_Mm.js";import"./chunks/commonjsHelpers.C4iS2aBk.js";const J=`---
prev:
  text: Community
  link: .
next: false
---

<script setup lang="ts">
import MedalDisplay from '/components/MedalDisplay.vue';

const name = 'PLAYERNAME_PLACEHOLDER';
<\/script>
`,W=`<MedalDisplay :name />
`,l=r=>(H("data-v-380e1891"),r=r(),$(),r),X=l(()=>a("label",{class:"required",for:"name-input"},"Your name:",-1)),Z=l(()=>a("label",{class:"required",for:"desc-input"},"Short description of yourself (1 sentence):",-1)),K=l(()=>a("label",{class:"required",for:"pic-input"},"Profile picture:",-1)),Q=l(()=>a("hr",null,null,-1)),ee=l(()=>a("h3",null,"About Me",-1)),te=l(()=>a("h3",null,"Gameplay Interests",-1)),ae=l(()=>a("h3",null,"Departments",-1)),oe=l(()=>a("h3",null,"Contact",-1)),ne=M({__name:"PlayerPageForm",setup(r){const{theme:u}=B(),x=atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTIyMDM3OTA5OTI2MTA0NjgwNC9qbE9VV0ozS3hta2FhSkUyZThUakZJU3VMUjRGYVdqYjlLX3A0T2tFamUzNFlLLXNjMElTZ3VSVVk5cUlVczhTTWFlUAo="),i=o(""),m=o(""),p=o(""),c=o(""),h=o(""),f=o(),g=o(!1),_=o(""),v={about:"Introduce yourself",interests:"What you usually do in-game when playing",departments:"What departments you are part of and what you do there",contact:"How to contact you (Discord, Reddit, etc.)"},k=o(null),S=b(()=>!i.value||!f.value||!_.value),C=b(F),D=b(()=>`${J.replace("PLAYERNAME_PLACEHOLDER",i.value)}

# ${i.value}

## About Me

${m.value}

## Gameplay Interests

${p.value}

## Departments

${c.value}

## Medals

${W.trim()}

## Contact

${h.value}
`);function F(){return f.value?O(i.value,D.value,f.value):new FormData}async function I(d){var V;const{target:e}=d;if(!(e instanceof HTMLInputElement))return;const t=(V=e.files)==null?void 0:V[0];if(!t)return;g.value=!0;const A=await j(t);g.value=!1,f.value=A}const T=b(()=>g.value?"Compressing files...":void 0);function q(){var d;(d=k.value)==null||d.reset(),m.value="",p.value="",c.value="",h.value=""}return(d,e)=>(P(),E("form",{onSubmit:e[6]||(e[6]=L(()=>{},["prevent"])),ref_key:"form",ref:k},[s(z,null,{default:N(()=>[X,w(a("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>i.value=t),id:"name-input",type:"text"},null,512),[[U,i.value]]),Z,w(a("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>_.value=t),id:"desc-input",type:"text"},null,512),[[U,_.value]]),K,a("input",{id:"pic-input",type:"file",accept:"image/*",onChange:I},null,32)]),_:1}),Q,ee,s(n(y),{modelValue:m.value,"onUpdate:modelValue":e[2]||(e[2]=t=>m.value=t),placeholder:v.about,theme:n(u),class:"editor","editor-id":"about",id:"about",language:"en-US","preview-theme":"github","no-highlight":"","no-upload-img":"","no-mermaid":"","no-katex":""},null,8,["modelValue","placeholder","theme"]),te,s(n(y),{modelValue:p.value,"onUpdate:modelValue":e[3]||(e[3]=t=>p.value=t),placeholder:v.interests,theme:n(u),class:"editor","editor-id":"interests",id:"interests",language:"en-US","preview-theme":"github","no-highlight":"","no-upload-img":"","no-mermaid":"","no-katex":""},null,8,["modelValue","placeholder","theme"]),ae,s(n(y),{modelValue:c.value,"onUpdate:modelValue":e[4]||(e[4]=t=>c.value=t),placeholder:v.departments,theme:n(u),class:"editor","editor-id":"departments",id:"departments",language:"en-US","preview-theme":"github","no-highlight":"","no-upload-img":"","no-mermaid":"","no-katex":""},null,8,["modelValue","placeholder","theme"]),oe,s(n(y),{modelValue:h.value,"onUpdate:modelValue":e[5]||(e[5]=t=>h.value=t),placeholder:v.contact,theme:n(u),class:"editor","editor-id":"contact",id:"contact",language:"en-US","preview-theme":"github","no-highlight":"","no-upload-img":"","no-mermaid":"","no-katex":""},null,8,["modelValue","placeholder","theme"]),s(G,{"form-data-array":[C.value],"is-busy":g.value,"is-incomplete":S.value,text:T.value,webhook:n(x),onSuccess:q},null,8,["form-data-array","is-busy","is-incomplete","text","webhook"])],544))}}),le=R(ne,[["__scopeId","data-v-380e1891"]]),se=Y('<h1 id="create-user-page" tabindex="-1">Create User Page <a class="header-anchor" href="#create-user-page" aria-label="Permalink to &quot;Create User Page&quot;">​</a></h1><p>You can create your own user page here to be listed on the <a href="./">community page</a>.</p><p>If you only fill out the three required inputs, you will only get the card on the community page. For a full page, the textboxes should be filled out as well.</p><p>The textboxes support Markdown.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>You must be a citizen of Eisvana in order to be listed.</p><p><a href="./../joining">How to become a citizen</a></p></div><h2 id="editing-an-existing-page" tabindex="-1">Editing an Existing Page <a class="header-anchor" href="#editing-an-existing-page" aria-label="Permalink to &quot;Editing an Existing Page&quot;">​</a></h2><p>Unfortunately, you cannot easily edit an existing page from here. However, all posts are stored on GitHub and can be edited there.</p><p>A direct link to the file is at the bottom of each page.</p><h2 id="form" tabindex="-1">Form <a class="header-anchor" href="#form" aria-label="Permalink to &quot;Form&quot;">​</a></h2>',9),he=JSON.parse('{"title":"Create User Page","description":"","frontmatter":{"next":false,"prev":{"text":"Community","link":"./"},"aside":false},"headers":[],"relativePath":"about/community/create.md","filePath":"about/community/create.md","lastUpdated":1711130291000}'),ie={name:"about/community/create.md"},fe=M({...ie,setup(r){return(u,x)=>(P(),E("div",null,[se,s(le)]))}});export{he as __pageData,fe as default};
