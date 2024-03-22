import{d as M,h as o,k as g,o as P,c as E,J as i,w as L,a5 as w,a6 as U,m as a,p as l,a2 as H,q as $,s as R,_ as Y,a4 as j}from"./chunks/framework.CTjf6bD_.js";import{E as _,c as G}from"./chunks/compressImage.B3hnqSoZ.js";import{S as O,b as z}from"./chunks/createFormData.zr5rVb3g.js";import{_ as B}from"./chunks/PicoStyle.vue_vue_type_script_setup_true_lang.DKhuZFY3.js";import{u as J}from"./chunks/useTheme.BLCKu_Mm.js";import"./chunks/commonjsHelpers.C4iS2aBk.js";const W=`---
prev:
  text: Community
  link: .
next: false
---

<script setup lang="ts">
import MedalDisplay from '/components/MedalDisplay.vue';

const name = 'PLAYERNAME_PLACEHOLDER';
<\/script>
`,X=`<MedalDisplay :name />
`,n=r=>($("data-v-f49ffc07"),r=r(),R(),r),Z=n(()=>a("label",{class:"required",for:"name-input"},"Your name:",-1)),K=n(()=>a("label",{class:"required",for:"desc-input"},"Short description of yourself (1 sentence):",-1)),Q=n(()=>a("label",{class:"required",for:"pic-input"},"Profile picture:",-1)),ee=n(()=>a("hr",null,null,-1)),te=n(()=>a("h3",null,"About Me",-1)),ae=n(()=>a("h3",null,"Gameplay Interests",-1)),oe=n(()=>a("h3",null,"Departments",-1)),le=n(()=>a("h3",null,"Contact",-1)),ne=M({__name:"PlayerPageForm",setup(r){const{theme:u}=J(),x=atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTIyMDM3OTA5OTI2MTA0NjgwNC9qbE9VV0ozS3hta2FhSkUyZThUakZJU3VMUjRGYVdqYjlLX3A0T2tFamUzNFlLLXNjMElTZ3VSVVk5cUlVczhTTWFlUAo="),s=o(""),d=o(""),m=o(null),p=o(""),c=o(""),h=o(""),f=o(""),b=o(!1),y={about:"Introduce yourself",interests:"What you usually do in-game when playing",departments:"What departments you are part of and what you do there",contact:"How to contact you (Discord, Reddit, etc.)"},k=o(null),S=g(()=>!s.value||!m.value||!d.value),C=g(()=>!!(p.value||c.value||h.value||f.value)),D=g(I),F=g(()=>C.value?`${W.replace("PLAYERNAME_PLACEHOLDER",s.value)}

# ${s.value}

## About Me

${p.value}

## Gameplay Interests

${c.value}

## Departments

${h.value}

## Medals

${X.trim()}

## Contact

${f.value}`:"");function I(){return m.value?z(s.value,d.value,F.value,m.value):new FormData}async function T(v){var V;const{target:e}=v;if(!(e instanceof HTMLInputElement))return;const t=(V=e.files)==null?void 0:V[0];if(!t)return;b.value=!0;const N=await G(t);b.value=!1,m.value=N}const q=g(()=>b.value?"Compressing files...":void 0);function A(){var v;(v=k.value)==null||v.reset(),s.value="",d.value="",m.value=null,p.value="",c.value="",h.value="",f.value=""}return(v,e)=>(P(),E("form",{onSubmit:e[6]||(e[6]=H(()=>{},["prevent"])),ref_key:"form",ref:k},[i(B,null,{default:L(()=>[Z,w(a("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>s.value=t),id:"name-input",type:"text"},null,512),[[U,s.value]]),K,w(a("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>d.value=t),id:"desc-input",type:"text"},null,512),[[U,d.value]]),Q,a("input",{id:"pic-input",type:"file",accept:"image/*",onChange:T},null,32)]),_:1}),ee,te,i(l(_),{modelValue:p.value,"onUpdate:modelValue":e[2]||(e[2]=t=>p.value=t),placeholder:y.about,theme:l(u),class:"editor","editor-id":"about",id:"about",language:"en-US","preview-theme":"github","no-highlight":"","no-upload-img":"","no-mermaid":"","no-katex":""},null,8,["modelValue","placeholder","theme"]),ae,i(l(_),{modelValue:c.value,"onUpdate:modelValue":e[3]||(e[3]=t=>c.value=t),placeholder:y.interests,theme:l(u),class:"editor","editor-id":"interests",id:"interests",language:"en-US","preview-theme":"github","no-highlight":"","no-upload-img":"","no-mermaid":"","no-katex":""},null,8,["modelValue","placeholder","theme"]),oe,i(l(_),{modelValue:h.value,"onUpdate:modelValue":e[4]||(e[4]=t=>h.value=t),placeholder:y.departments,theme:l(u),class:"editor","editor-id":"departments",id:"departments",language:"en-US","preview-theme":"github","no-highlight":"","no-upload-img":"","no-mermaid":"","no-katex":""},null,8,["modelValue","placeholder","theme"]),le,i(l(_),{modelValue:f.value,"onUpdate:modelValue":e[5]||(e[5]=t=>f.value=t),placeholder:y.contact,theme:l(u),class:"editor","editor-id":"contact",id:"contact",language:"en-US","preview-theme":"github","no-highlight":"","no-upload-img":"","no-mermaid":"","no-katex":""},null,8,["modelValue","placeholder","theme"]),i(O,{"form-data-array":[D.value],"is-busy":b.value,"is-incomplete":S.value,text:q.value,webhook:l(x),onSuccess:A},null,8,["form-data-array","is-busy","is-incomplete","text","webhook"])],544))}}),se=Y(ne,[["__scopeId","data-v-f49ffc07"]]),ie=j('<h1 id="create-user-page" tabindex="-1">Create User Page <a class="header-anchor" href="#create-user-page" aria-label="Permalink to &quot;Create User Page&quot;">​</a></h1><p>You can create your own user page here to be listed on the <a href="./">community page</a>.</p><p>If you only fill out the three required inputs, you will only get the card on the community page. For a full page, the textboxes should be filled out as well.</p><p>The textboxes support Markdown.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>You must be a citizen of Eisvana in order to be listed.</p><p><a href="./../joining">How to become a citizen</a></p></div><h2 id="editing-an-existing-page" tabindex="-1">Editing an Existing Page <a class="header-anchor" href="#editing-an-existing-page" aria-label="Permalink to &quot;Editing an Existing Page&quot;">​</a></h2><p>Unfortunately, you cannot easily edit an existing page from here. However, all posts are stored on GitHub and can be edited there.</p><p>A direct link to the file is at the bottom of each page.</p><h2 id="form" tabindex="-1">Form <a class="header-anchor" href="#form" aria-label="Permalink to &quot;Form&quot;">​</a></h2>',9),fe=JSON.parse('{"title":"Create User Page","description":"","frontmatter":{"next":false,"prev":{"text":"Community","link":"./"},"aside":false},"headers":[],"relativePath":"about/community/create.md","filePath":"about/community/create.md","lastUpdated":1711142208000}'),re={name:"about/community/create.md"},ve=M({...re,setup(r){return(u,x)=>(P(),E("div",null,[ie,i(se)]))}});export{fe as __pageData,ve as default};
