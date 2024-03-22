import{d as E,h as n,k as _,E as L,o as P,c as S,J as a,w as p,a5 as M,a6 as C,m as o,p as l,a2 as H,q as $,s as O,_ as R,a4 as Y}from"./chunks/framework.CTjf6bD_.js";import{E as x,c as j}from"./chunks/compressImage.BXs08Cqn.js";import{S as G,b as z}from"./chunks/createFormData.BPDqX-xN.js";import{_ as B}from"./chunks/PicoStyle.vue_vue_type_script_setup_true_lang.DKhuZFY3.js";import{u as J}from"./chunks/useTheme.BLCKu_Mm.js";import"./chunks/commonjsHelpers.C4iS2aBk.js";const W=`---
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
`,s=u=>($("data-v-a47772ef"),u=u(),O(),u),Z=s(()=>o("label",{class:"required",for:"name-input"},"Your name:",-1)),K=s(()=>o("label",{class:"required",for:"desc-input"},"Short description of yourself (1 sentence):",-1)),Q=s(()=>o("label",{class:"required",for:"pic-input"},"Profile picture:",-1)),ee=s(()=>o("hr",null,null,-1)),te=s(()=>o("h3",null,"About Me",-1)),ae=s(()=>o("h3",null,"Gameplay Interests",-1)),oe=s(()=>o("h3",null,"Departments",-1)),ne=s(()=>o("h3",null,"Contact",-1)),le=E({__name:"PlayerPageForm",setup(u){const{theme:d}=J(),V=atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTIyMDM3OTA5OTI2MTA0NjgwNC9qbE9VV0ozS3hta2FhSkUyZThUakZJU3VMUjRGYVdqYjlLX3A0T2tFamUzNFlLLXNjMElTZ3VSVVk5cUlVczhTTWFlUAo="),r=n(""),c=n(""),h=n(""),f=n(""),g=n(""),v=n(),b=n(!1),k=n(""),y={about:"Introduce yourself",interests:"What you usually do in-game when playing",departments:"What departments you are part of and what you do there",contact:"How to contact you (Discord, Reddit, etc.)"},w=n(null),D=_(()=>!r.value||!v.value||!k.value),F=_(T),I=_(()=>`${W.replace("PLAYERNAME_PLACEHOLDER",r.value)}

# ${r.value}

## About Me

${c.value}

## Gameplay Interests

${h.value}

## Departments

${f.value}

## Medals

${X.trim()}

## Contact

${g.value}
`);function T(){return v.value?z(r.value,I.value,v.value):new FormData}async function q(m){var U;const{target:e}=m;if(!(e instanceof HTMLInputElement))return;const i=(U=e.files)==null?void 0:U[0];if(!i)return;b.value=!0;const t=await j(i);b.value=!1,v.value=t}const A=_(()=>b.value?"Compressing files...":void 0);function N(){var m;(m=w.value)==null||m.reset(),c.value="",h.value="",f.value="",g.value=""}return(m,e)=>{const i=L("ClientOnly");return P(),S("form",{onSubmit:e[6]||(e[6]=H(()=>{},["prevent"])),ref_key:"form",ref:w},[a(B,null,{default:p(()=>[Z,M(o("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>r.value=t),id:"name-input",type:"text"},null,512),[[C,r.value]]),K,M(o("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>k.value=t),id:"desc-input",type:"text"},null,512),[[C,k.value]]),Q,o("input",{id:"pic-input",type:"file",accept:"image/*",onChange:q},null,32)]),_:1}),ee,te,a(i,null,{default:p(()=>[a(l(x),{modelValue:c.value,"onUpdate:modelValue":e[2]||(e[2]=t=>c.value=t),placeholder:y.about,theme:l(d),class:"editor","editor-id":"about",id:"about",language:"en-US","preview-theme":"github","no-highlight":"","no-upload-img":"","no-mermaid":"","no-katex":""},null,8,["modelValue","placeholder","theme"])]),_:1}),ae,a(i,null,{default:p(()=>[a(l(x),{modelValue:h.value,"onUpdate:modelValue":e[3]||(e[3]=t=>h.value=t),placeholder:y.interests,theme:l(d),class:"editor","editor-id":"interests",id:"interests",language:"en-US","preview-theme":"github","no-highlight":"","no-upload-img":"","no-mermaid":"","no-katex":""},null,8,["modelValue","placeholder","theme"])]),_:1}),oe,a(i,null,{default:p(()=>[a(l(x),{modelValue:f.value,"onUpdate:modelValue":e[4]||(e[4]=t=>f.value=t),placeholder:y.departments,theme:l(d),class:"editor","editor-id":"departments",id:"departments",language:"en-US","preview-theme":"github","no-highlight":"","no-upload-img":"","no-mermaid":"","no-katex":""},null,8,["modelValue","placeholder","theme"])]),_:1}),ne,a(i,null,{default:p(()=>[a(l(x),{modelValue:g.value,"onUpdate:modelValue":e[5]||(e[5]=t=>g.value=t),placeholder:y.contact,theme:l(d),class:"editor","editor-id":"contact",id:"contact",language:"en-US","preview-theme":"github","no-highlight":"","no-upload-img":"","no-mermaid":"","no-katex":""},null,8,["modelValue","placeholder","theme"])]),_:1}),a(G,{"form-data-array":[F.value],"is-busy":b.value,"is-incomplete":D.value,text:A.value,webhook:l(V),onSuccess:N},null,8,["form-data-array","is-busy","is-incomplete","text","webhook"])],544)}}}),se=R(le,[["__scopeId","data-v-a47772ef"]]),ie=Y('<h1 id="create-user-page" tabindex="-1">Create User Page <a class="header-anchor" href="#create-user-page" aria-label="Permalink to &quot;Create User Page&quot;">​</a></h1><p>You can create your own user page here to be listed on the <a href="./">community page</a>.</p><p>If you only fill out the three required inputs, you will only get the card on the community page. For a full page, the textboxes should be filled out as well.</p><p>The textboxes support Markdown.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>You must be a citizen of Eisvana in order to be listed.</p><p><a href="./../joining">How to become a citizen</a></p></div><h2 id="editing-an-existing-page" tabindex="-1">Editing an Existing Page <a class="header-anchor" href="#editing-an-existing-page" aria-label="Permalink to &quot;Editing an Existing Page&quot;">​</a></h2><p>Unfortunately, you cannot easily edit an existing page from here. However, all posts are stored on GitHub and can be edited there.</p><p>A direct link to the file is at the bottom of each page.</p><h2 id="form" tabindex="-1">Form <a class="header-anchor" href="#form" aria-label="Permalink to &quot;Form&quot;">​</a></h2>',9),fe=JSON.parse('{"title":"Create User Page","description":"","frontmatter":{"next":false,"prev":{"text":"Community","link":"./"},"aside":false},"headers":[],"relativePath":"about/community/create.md","filePath":"about/community/create.md","lastUpdated":1711127293000}'),re={name:"about/community/create.md"},ge=E({...re,setup(u){return(d,V)=>(P(),S("div",null,[ie,a(se)]))}});export{fe as __pageData,ge as default};
