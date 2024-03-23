import{d as P,h as n,k as f,o as E,c as S,J as i,w as H,a5 as w,a6 as U,m as o,p as a,a2 as $,q as R,s as Y,_ as j,a4 as G}from"./chunks/framework.Cv-kO_wL.js";import{E as _,c as O}from"./chunks/compressImage.BdxaA-9H.js";import{m as M,S as z,b as B}from"./chunks/createFormData.SrQyNOWu.js";import{_ as J}from"./chunks/PicoStyle.vue_vue_type_script_setup_true_lang.B8n7E8GF.js";import{u as W}from"./chunks/useTheme.BquD1xs2.js";import"./chunks/commonjsHelpers.C4iS2aBk.js";const X=`---
prev:
  text: Community
  link: .
next: false
---

<script setup lang="ts">
import MedalDisplay from '/components/MedalDisplay.vue';

const name = 'PLAYERNAME_PLACEHOLDER';
<\/script>
`,Z=`<MedalDisplay :name />
`,l=r=>(R("data-v-0e815606"),r=r(),Y(),r),K=l(()=>o("label",{class:"required",for:"name-input"},"Your name:",-1)),Q=["maxlength"],ee=l(()=>o("label",{class:"required",for:"desc-input"},"Short description of yourself (1 sentence):",-1)),te=["maxlength"],ae=l(()=>o("label",{class:"required",for:"pic-input"},"Profile picture:",-1)),oe=l(()=>o("hr",null,null,-1)),ne=l(()=>o("h3",null,"About Me",-1)),le=l(()=>o("h3",null,"Gameplay Interests",-1)),se=l(()=>o("h3",null,"Departments",-1)),ie=l(()=>o("h3",null,"Contact",-1)),re=P({__name:"PlayerPageForm",setup(r){const{theme:u}=W(),x=atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTIyMDM3OTA5OTI2MTA0NjgwNC9qbE9VV0ozS3hta2FhSkUyZThUakZJU3VMUjRGYVdqYjlLX3A0T2tFamUzNFlLLXNjMElTZ3VSVVk5cUlVczhTTWFlUAo="),s=n(""),d=n(""),m=n(null),p=n(""),c=n(""),h=n(""),g=n(""),b=n(!1),y={about:"Introduce yourself",interests:"What you usually do in-game when playing",departments:"What departments you are part of and what you do there",contact:"How to contact you (Discord, Reddit, etc.)"},k=n(null),C=f(()=>!s.value||!m.value||!d.value),D=f(()=>!!(p.value||c.value||h.value||g.value)),F=f(T),I=f(()=>D.value?`${X.replace("PLAYERNAME_PLACEHOLDER",s.value)}

# ${s.value}

## About Me

${p.value}

## Gameplay Interests

${c.value}

## Departments

${h.value}

## Medals

${Z.trim()}

## Contact

${g.value}`:"");function T(){return m.value?B(s.value,d.value,I.value,m.value):new FormData}async function q(v){var V;const{target:e}=v;if(!(e instanceof HTMLInputElement))return;const t=(V=e.files)==null?void 0:V[0];if(!t)return;b.value=!0;const N=await O(t);b.value=!1,m.value=N}const A=f(()=>b.value?"Compressing files...":void 0);function L(){var v;(v=k.value)==null||v.reset(),s.value="",d.value="",m.value=null,p.value="",c.value="",h.value="",g.value=""}return(v,e)=>(E(),S("form",{onSubmit:e[6]||(e[6]=$(()=>{},["prevent"])),ref_key:"form",ref:k},[i(J,null,{default:H(()=>[K,w(o("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>s.value=t),maxlength:a(M),id:"name-input",type:"text"},null,8,Q),[[U,s.value]]),ee,w(o("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>d.value=t),maxlength:a(M),id:"desc-input",type:"text"},null,8,te),[[U,d.value]]),ae,o("input",{id:"pic-input",type:"file",accept:"image/*",onChange:q},null,32)]),_:1}),oe,ne,i(a(_),{modelValue:p.value,"onUpdate:modelValue":e[2]||(e[2]=t=>p.value=t),placeholder:y.about,theme:a(u),class:"editor","editor-id":"about",id:"about",language:"en-US","preview-theme":"github","no-highlight":"","no-upload-img":"","no-mermaid":"","no-katex":""},null,8,["modelValue","placeholder","theme"]),le,i(a(_),{modelValue:c.value,"onUpdate:modelValue":e[3]||(e[3]=t=>c.value=t),placeholder:y.interests,theme:a(u),class:"editor","editor-id":"interests",id:"interests",language:"en-US","preview-theme":"github","no-highlight":"","no-upload-img":"","no-mermaid":"","no-katex":""},null,8,["modelValue","placeholder","theme"]),se,i(a(_),{modelValue:h.value,"onUpdate:modelValue":e[4]||(e[4]=t=>h.value=t),placeholder:y.departments,theme:a(u),class:"editor","editor-id":"departments",id:"departments",language:"en-US","preview-theme":"github","no-highlight":"","no-upload-img":"","no-mermaid":"","no-katex":""},null,8,["modelValue","placeholder","theme"]),ie,i(a(_),{modelValue:g.value,"onUpdate:modelValue":e[5]||(e[5]=t=>g.value=t),placeholder:y.contact,theme:a(u),class:"editor","editor-id":"contact",id:"contact",language:"en-US","preview-theme":"github","no-highlight":"","no-upload-img":"","no-mermaid":"","no-katex":""},null,8,["modelValue","placeholder","theme"]),i(z,{"form-data-array":[F.value],"is-busy":b.value,"is-incomplete":C.value,text:A.value,webhook:a(x),onSuccess:L},null,8,["form-data-array","is-busy","is-incomplete","text","webhook"])],544))}}),ue=j(re,[["__scopeId","data-v-0e815606"]]),de=G('<h1 id="create-user-page" tabindex="-1">Create User Page <a class="header-anchor" href="#create-user-page" aria-label="Permalink to &quot;Create User Page&quot;">​</a></h1><p>You can create your own user page here to be listed on the <a href="./">community page</a>.</p><p>If you only fill out the three required inputs, you will only get the card on the community page. For a full page, the textboxes should be filled out as well.</p><p>The textboxes support Markdown.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>You must be a citizen of Eisvana in order to be listed.</p><p><a href="./../joining">How to become a citizen</a></p></div><h2 id="editing-an-existing-page" tabindex="-1">Editing an Existing Page <a class="header-anchor" href="#editing-an-existing-page" aria-label="Permalink to &quot;Editing an Existing Page&quot;">​</a></h2><p>Unfortunately, you cannot easily edit an existing page from here. However, all posts are stored on GitHub and can be edited there.</p><p>A direct link to the file is at the bottom of each page.</p><h2 id="form" tabindex="-1">Form <a class="header-anchor" href="#form" aria-label="Permalink to &quot;Form&quot;">​</a></h2>',9),be=JSON.parse('{"title":"Create User Page","description":"","frontmatter":{"next":false,"prev":{"text":"Community","link":"./"},"aside":false},"headers":[],"relativePath":"about/community/create.md","filePath":"about/community/create.md","lastUpdated":1711221789000}'),me={name:"about/community/create.md"},ye=P({...me,setup(r){return(u,x)=>(E(),S("div",null,[de,i(ue)]))}});export{be as __pageData,ye as default};
