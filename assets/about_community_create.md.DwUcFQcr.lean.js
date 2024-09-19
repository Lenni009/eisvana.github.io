import{d as w,s as o,h as d,v as H,o as C,c as E,I as r,w as $,k as _,a2 as j,a5 as M,a6 as P,j as a,p as O,l as Y,_ as z,a4 as G}from"./chunks/framework.NKmAya7Y.js";import{M as b,c as B}from"./chunks/compressImage.C7BXW4px.js";import{S as J,m as U,b as W}from"./chunks/createFormData.LOnqUeUS.js";import{_ as X}from"./chunks/PicoStyle.vue_vue_type_script_setup_true_lang.CZmXGG6L.js";import{C as Z}from"./chunks/CommunityMemberCard.Db3_1BjU.js";import"./chunks/useTheme.CTpWr9vy.js";import"./chunks/theme.BPjyW6SF.js";const K=`---
prev:
  text: Community
  link: .
next: false
---

<script setup lang="ts">
import MedalDisplay from '/components/MedalDisplay.vue';

const name = 'PLAYERNAME_PLACEHOLDER';
<\/script>
`,Q=`<MedalDisplay :name />
`,n=c=>(O("data-v-8a2d6e19"),c=c(),Y(),c),ee=n(()=>a("label",{class:"required",for:"name-input"},"Your name:",-1)),te=["maxlength"],ae=n(()=>a("label",{class:"required",for:"desc-input"},"Short description of yourself (1 sentence):",-1)),oe=["maxlength"],le=n(()=>a("label",{class:"required",for:"pic-input"},"Profile picture:",-1)),ne=n(()=>a("div",null,"Preview:",-1)),se=n(()=>a("hr",null,null,-1)),re=n(()=>a("h3",null,"About Me",-1)),ie=n(()=>a("h3",null,"Gameplay Interests",-1)),ue=n(()=>a("h3",null,"Departments",-1)),de=n(()=>a("h3",null,"Contact",-1)),ce=w({__name:"PlayerPageForm",setup(c){const x=atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTIyMDM3OTA5OTI2MTA0NjgwNC9qbE9VV0ozS3hta2FhSkUyZThUakZJU3VMUjRGYVdqYjlLX3A0T2tFamUzNFlLLXNjMElTZ3VSVVk5cUlVczhTTWFlUAo="),l=o(""),i=o(""),u=o(null),y=o(""),p=o(""),m=o(""),v=o(""),h=o(""),f=o(!1),g={about:"Introduce yourself",interests:"What you usually do in-game when playing",departments:"What departments you are part of and what you do there",contact:"How to contact you (Discord, Reddit, etc.)"},V=o(null),L=d(()=>!l.value||!u.value||!i.value),D=d(()=>!!(p.value||m.value||v.value||h.value));H(u,s=>{URL.revokeObjectURL(y.value),y.value=s?URL.createObjectURL(s):""});const F=d(S),I=d(()=>D.value?`${K.replace("PLAYERNAME_PLACEHOLDER",l.value)}

# ${l.value}

## About Me

${p.value}

## Gameplay Interests

${m.value}

## Departments

${v.value}

<!-- ## Medals

${Q.trim()} -->

## Contact

${h.value}`:"");function S(){return u.value?W(l.value,i.value,I.value,u.value):new FormData}async function T(s){var k;const{target:e}=s;if(!(e instanceof HTMLInputElement))return;const t=(k=e.files)==null?void 0:k[0];if(!t)return;f.value=!0;const R=await B(t);f.value=!1,u.value=R}const A=d(()=>f.value?"Compressing files...":void 0);function N(){var s;(s=V.value)==null||s.reset(),l.value="",i.value="",u.value=null,p.value="",m.value="",v.value="",h.value=""}const q=d(()=>({avatar:y.value,name:l.value,desc:i.value}));return(s,e)=>(C(),E("form",{onSubmit:e[6]||(e[6]=j(()=>{},["prevent"])),ref_key:"form",ref:V},[r(X,null,{default:$(()=>[ee,M(a("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>l.value=t),maxlength:_(U),id:"name-input",type:"text"},null,8,te),[[P,l.value]]),ae,M(a("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>i.value=t),maxlength:_(U),id:"desc-input",type:"text"},null,8,oe),[[P,i.value]]),le,a("input",{id:"pic-input",type:"file",accept:"image/*",onChange:T},null,32)]),_:1}),ne,r(Z,{"eisvana-members":[q.value],size:"small"},null,8,["eisvana-members"]),se,re,r(b,{modelValue:p.value,"onUpdate:modelValue":e[2]||(e[2]=t=>p.value=t),placeholder:g.about,"editor-id":"about","no-upload-img":""},null,8,["modelValue","placeholder"]),ie,r(b,{modelValue:m.value,"onUpdate:modelValue":e[3]||(e[3]=t=>m.value=t),placeholder:g.interests,"editor-id":"interests","no-upload-img":""},null,8,["modelValue","placeholder"]),ue,r(b,{modelValue:v.value,"onUpdate:modelValue":e[4]||(e[4]=t=>v.value=t),placeholder:g.departments,"editor-id":"departments","no-upload-img":""},null,8,["modelValue","placeholder"]),de,r(b,{modelValue:h.value,"onUpdate:modelValue":e[5]||(e[5]=t=>h.value=t),placeholder:g.contact,"editor-id":"contact","no-upload-img":""},null,8,["modelValue","placeholder"]),r(J,{"form-data-array":[F.value],"is-busy":f.value,"is-incomplete":L.value,text:A.value,webhook:_(x),onSuccess:N},null,8,["form-data-array","is-busy","is-incomplete","text","webhook"])],544))}}),pe=z(ce,[["__scopeId","data-v-8a2d6e19"]]),me=G('<h1 id="create-user-page" tabindex="-1">Create User Page <a class="header-anchor" href="#create-user-page" aria-label="Permalink to &quot;Create User Page&quot;">​</a></h1><p>You can create your own user page here to be listed on the <a href="./">community page</a>.</p><p>If you only fill out the three required inputs, you will only get the card on the community page. For a full page, the textboxes should be filled out as well.</p><p>The textboxes support Markdown.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>You must be a citizen of Eisvana in order to be listed.</p><p><a href="./../joining">How to become a citizen</a></p></div><h2 id="editing-an-existing-page" tabindex="-1">Editing an Existing Page <a class="header-anchor" href="#editing-an-existing-page" aria-label="Permalink to &quot;Editing an Existing Page&quot;">​</a></h2><p>Unfortunately, you cannot easily edit an existing page from here. However, all posts are stored on GitHub and can be edited there.</p><p>A direct link to the file is at the bottom of each page.</p><h2 id="form" tabindex="-1">Form <a class="header-anchor" href="#form" aria-label="Permalink to &quot;Form&quot;">​</a></h2>',9),Ve=JSON.parse('{"title":"Create User Page","description":"","frontmatter":{"next":false,"prev":{"text":"Community","link":"./"},"aside":false},"headers":[],"relativePath":"about/community/create.md","filePath":"about/community/create.md","lastUpdated":1726751030000}'),ve={name:"about/community/create.md"},ke=w({...ve,setup(c){return(x,l)=>(C(),E("div",null,[me,r(pe)]))}});export{Ve as __pageData,ke as default};
