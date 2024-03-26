import{d as P,h as o,k as f,o as E,c as U,J as s,w as N,a5 as k,a6 as M,m as a,p as y,a2 as H,q as $,s as R,_ as Y,a4 as j}from"./chunks/framework.Db7SsRuA.js";import{M as b,c as G}from"./chunks/compressImage.CB65Wkjs.js";import{m as w,S as O,b as z}from"./chunks/createFormData.CRIjqVL0.js";import{_ as B}from"./chunks/PicoStyle.vue_vue_type_script_setup_true_lang.DLAqzo_y.js";import"./chunks/commonjsHelpers.C4iS2aBk.js";import"./chunks/useTheme.CcmQV7f1.js";const J=`---
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
`,n=r=>($("data-v-0ca24b12"),r=r(),R(),r),X=n(()=>a("label",{class:"required",for:"name-input"},"Your name:",-1)),Z=["maxlength"],K=n(()=>a("label",{class:"required",for:"desc-input"},"Short description of yourself (1 sentence):",-1)),Q=["maxlength"],ee=n(()=>a("label",{class:"required",for:"pic-input"},"Profile picture:",-1)),te=n(()=>a("hr",null,null,-1)),ae=n(()=>a("h3",null,"About Me",-1)),oe=n(()=>a("h3",null,"Gameplay Interests",-1)),le=n(()=>a("h3",null,"Departments",-1)),ne=n(()=>a("h3",null,"Contact",-1)),se=P({__name:"PlayerPageForm",setup(r){const _=atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTIyMDM3OTA5OTI2MTA0NjgwNC9qbE9VV0ozS3hta2FhSkUyZThUakZJU3VMUjRGYVdqYjlLX3A0T2tFamUzNFlLLXNjMElTZ3VSVVk5cUlVczhTTWFlUAo="),l=o(""),i=o(""),u=o(null),d=o(""),p=o(""),c=o(""),m=o(""),v=o(!1),g={about:"Introduce yourself",interests:"What you usually do in-game when playing",departments:"What departments you are part of and what you do there",contact:"How to contact you (Discord, Reddit, etc.)"},x=o(null),C=f(()=>!l.value||!u.value||!i.value),D=f(()=>!!(d.value||p.value||c.value||m.value)),F=f(S),I=f(()=>D.value?`${J.replace("PLAYERNAME_PLACEHOLDER",l.value)}

# ${l.value}

## About Me

${d.value}

## Gameplay Interests

${p.value}

## Departments

${c.value}

## Medals

${W.trim()}

## Contact

${m.value}`:"");function S(){return u.value?z(l.value,i.value,I.value,u.value):new FormData}async function T(h){var V;const{target:e}=h;if(!(e instanceof HTMLInputElement))return;const t=(V=e.files)==null?void 0:V[0];if(!t)return;v.value=!0;const L=await G(t);v.value=!1,u.value=L}const q=f(()=>v.value?"Compressing files...":void 0);function A(){var h;(h=x.value)==null||h.reset(),l.value="",i.value="",u.value=null,d.value="",p.value="",c.value="",m.value=""}return(h,e)=>(E(),U("form",{onSubmit:e[6]||(e[6]=H(()=>{},["prevent"])),ref_key:"form",ref:x},[s(B,null,{default:N(()=>[X,k(a("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>l.value=t),maxlength:y(w),id:"name-input",type:"text"},null,8,Z),[[M,l.value]]),K,k(a("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>i.value=t),maxlength:y(w),id:"desc-input",type:"text"},null,8,Q),[[M,i.value]]),ee,a("input",{id:"pic-input",type:"file",accept:"image/*",onChange:T},null,32)]),_:1}),te,ae,s(b,{modelValue:d.value,"onUpdate:modelValue":e[2]||(e[2]=t=>d.value=t),placeholder:g.about,"editor-id":"about","no-upload-img":""},null,8,["modelValue","placeholder"]),oe,s(b,{modelValue:p.value,"onUpdate:modelValue":e[3]||(e[3]=t=>p.value=t),placeholder:g.interests,"editor-id":"interests","no-upload-img":""},null,8,["modelValue","placeholder"]),le,s(b,{modelValue:c.value,"onUpdate:modelValue":e[4]||(e[4]=t=>c.value=t),placeholder:g.departments,"editor-id":"departments","no-upload-img":""},null,8,["modelValue","placeholder"]),ne,s(b,{modelValue:m.value,"onUpdate:modelValue":e[5]||(e[5]=t=>m.value=t),placeholder:g.contact,"editor-id":"contact","no-upload-img":""},null,8,["modelValue","placeholder"]),s(O,{"form-data-array":[F.value],"is-busy":v.value,"is-incomplete":C.value,text:q.value,webhook:y(_),onSuccess:A},null,8,["form-data-array","is-busy","is-incomplete","text","webhook"])],544))}}),re=Y(se,[["__scopeId","data-v-0ca24b12"]]),ie=j('<h1 id="create-user-page" tabindex="-1">Create User Page <a class="header-anchor" href="#create-user-page" aria-label="Permalink to &quot;Create User Page&quot;">​</a></h1><p>You can create your own user page here to be listed on the <a href="./">community page</a>.</p><p>If you only fill out the three required inputs, you will only get the card on the community page. For a full page, the textboxes should be filled out as well.</p><p>The textboxes support Markdown.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>You must be a citizen of Eisvana in order to be listed.</p><p><a href="./../joining">How to become a citizen</a></p></div><h2 id="editing-an-existing-page" tabindex="-1">Editing an Existing Page <a class="header-anchor" href="#editing-an-existing-page" aria-label="Permalink to &quot;Editing an Existing Page&quot;">​</a></h2><p>Unfortunately, you cannot easily edit an existing page from here. However, all posts are stored on GitHub and can be edited there.</p><p>A direct link to the file is at the bottom of each page.</p><h2 id="form" tabindex="-1">Form <a class="header-anchor" href="#form" aria-label="Permalink to &quot;Form&quot;">​</a></h2>',9),ve=JSON.parse('{"title":"Create User Page","description":"","frontmatter":{"next":false,"prev":{"text":"Community","link":"./"},"aside":false},"headers":[],"relativePath":"about/community/create.md","filePath":"about/community/create.md","lastUpdated":1711481284000}'),ue={name:"about/community/create.md"},ge=P({...ue,setup(r){return(_,l)=>(E(),U("div",null,[ie,s(re)]))}});export{ve as __pageData,ge as default};
