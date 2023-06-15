"use strict";import{jsx as a,jsxs as u}from"react/jsx-runtime";import{useRef as h,useState as c}from"react";import l from"./index.module.css";const N=210,C=10,A=["January","Febuary","March","April","May","June","July","August","September","October","November","December"],W=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],Y=0;function _(e,i){return new Date(e,i,0).getDate()}function E(e,i){return new Date(e+"-"+i+"-01").getDay()}function b(e){return a("div",{onClick:()=>e.onClick?.(),className:[l.calendarDay,...e.dayNumber?["_isHoverable"]:[],...e.isSelected?["_isSelected"]:[]].join(" "),children:e.dayNumber??e.contents})}function d(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:a("path",{d:"M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"})})}export default function T(e){const i=h(null),D=h(null),[n,k]=c(new Date(`${e.value}`)),[m,v]=c(!1),[p,w]=c(!m),[y,S]=c({top:!1,left:!1});function F(){M(),w(!1),setTimeout(()=>{v(!0),window.addEventListener("click",g)},0)}function g(t){t?.target&&i.current?.contains(t.target)||(v(!1),setTimeout(()=>{window.removeEventListener("click",g)},0),setTimeout(()=>{w(!0)},e.transitionDuration??N))}function M(){setTimeout(()=>{const t=i.current?.getBoundingClientRect(),r=D.current?.getBoundingClientRect();if(!t||!r)throw new Error("No rect found");const o=e.gapBetweenInputWrapperAndCalendar??C,{height:R}=r;S({top:t.top+t.height+o+R>window.innerHeight,left:t.left+t.width+o>window.innerWidth})},0)}function s(t,r,o){r>12&&(r=1,t++),r<=0&&(r=12,t--),k(new Date(`${t}-${r}-${o}`))}function I(t,r,o){s(t,r,o),e.onDateUpdate(new Date(`${t}-${r}-${o}`).toISOString()),g()}const f=new Date(e.value);return u("div",{ref:i,className:[l.DatePicker,...m?["_isOpened"]:[]].join(" "),style:{"--transition-duration":`${e.transitionDuration??N}ms`,"--gap-between-input-wrapper-and-calendar":`${e.gapBetweenInputWrapperAndCalendar??C}px`},children:[a("div",{className:l.inputWrapper,onClick:()=>m?null:F(),children:a("input",{type:"text",value:e.toHumanDate?e.toHumanDate(n):n.toLocaleDateString(),readOnly:!0})}),u("div",{ref:D,className:[l.calendar,...y.top?["_isRevealedFromBottom"]:[],...y.left?["_isRevealedFromRight"]:[],...p?["_isRemovedFromLayout"]:[]].join(" "),children:[u("div",{className:l.timePeriodSelector,children:[a("button",{type:"button",className:"_isZeroed",onClick:()=>s(n.getFullYear(),n.getMonth(),n.getDate()),children:e.arrowIcon??a(d,{})}),a("span",{children:(e.monthNames??A)[n.getMonth()]}),a("button",{type:"button",className:"_isZeroed",onClick:()=>s(n.getFullYear(),n.getMonth()+2,n.getDate()),children:e.arrowIcon??a(d,{})})]}),u("div",{className:l.timePeriodSelector,children:[a("button",{type:"button",className:"_isZeroed",onClick:()=>s(n.getFullYear()-1,n.getMonth()+1,n.getDate()),children:e.arrowIcon??a(d,{})}),a("span",{children:n.getFullYear()}),a("button",{type:"button",className:"_isZeroed",onClick:()=>s(n.getFullYear()+1,n.getMonth()+1,n.getDate()),children:e.arrowIcon??a(d,{})})]}),u("div",{className:l.calendarDaysGrid,children:[(e.weekdayNames??W).map(t=>a(b,{contents:t},t)),Array.from(Array((E(n.getFullYear(),n.getMonth()+1)||7)-(e.weekStart??Y)).keys()).map(t=>a(b,{contents:""},t)),Array.from(Array(_(n.getFullYear(),n.getMonth()+1)).keys()).map(t=>a(b,{dayNumber:t+1,onClick:()=>I(n.getFullYear(),n.getMonth()+1,t+1),isSelected:n.getFullYear()===f.getFullYear()&&n.getMonth()===f.getMonth()&&t+1===f.getDate()},t+1))]})]})]})}
