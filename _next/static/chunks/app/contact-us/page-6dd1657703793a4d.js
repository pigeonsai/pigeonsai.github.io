(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[746],{3638:function(e,a,n){Promise.resolve().then(n.bind(n,9520))},9520:function(e,a,n){"use strict";n.r(a);var t=n(7437),s=n(2265),o=n(9245),i=n(9044),l=n(5927),r=n(3481),m=n(8938),c=n(9766);a.default=()=>{let[e,a]=(0,s.useState)({name:"",email:"",company:"",message:""}),handleChange=e=>{let{id:n,value:t}=e.target;a(e=>({...e,[n]:t}))},handleSubmit=async n=>{if(n.preventDefault(),!e.name||!e.email){alert("Please fill out the required fields: Name and Email");return}let t=await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,access_key:"060adcd7-0878-49c6-9dae-179f1573a2ab",name:"Pigeonsai.com: New contact."})});if(!t.ok){console.error("HTTP error! status: ".concat(t.status));return}let s=await t.json();console.log("response: ",t),console.log(s),a({name:"",email:"",company:"",message:""})};return(0,t.jsxs)(m.Z,{children:[(0,t.jsxs)(c.Z,{sx:{textAlign:"center",margin:"0 auto",maxWidth:{md:"70%",lg:"70%"}},children:[(0,t.jsx)(r.Z,{sx:{color:"black",fontSize:{xs:"7vw",sm:"4vw",md:"2.5rem"},fontWeight:600},children:"Talk to the Vector DB and Search experts."}),(0,t.jsx)(r.Z,{children:"Send us your questions about PigeonsAI or details about your vector DB and search needs. We’ll schedule a time to learn and solve your problem with our solutions."})]}),(0,t.jsx)(o.Z,{sx:{margin:"0 auto",maxWidth:{xs:"100%",sm:"100%",md:"50%",lg:"50%"},justifyContent:"center",alignItems:"center"},children:(0,t.jsxs)(c.Z,{sx:{py:4},spacing:2,component:"form",noValidate:!0,autoComplete:"off",onSubmit:handleSubmit,children:[(0,t.jsx)(i.Z,{required:!0,fullwidth:!0,id:"name",label:"Name",value:e.name,onChange:handleChange}),(0,t.jsx)(i.Z,{required:!0,id:"email",label:"Email",value:e.email,onChange:handleChange}),(0,t.jsx)(i.Z,{id:"company",label:"Company name",value:e.company,onChange:handleChange}),(0,t.jsx)(i.Z,{id:"message",label:"Message",multiline:!0,value:e.message,onChange:handleChange}),(0,t.jsx)(l.Z,{variant:"contained",color:"primary",type:"submit",children:"Submit"}),(0,t.jsx)(r.Z,{sx:{fontSize:"0.8rem"},children:"By clicking the submit button you agreed to be contacted by PigeonsAI about demo or services."})]})})]})}}},function(e){e.O(0,[534,266,44,971,472,744],function(){return e(e.s=3638)}),_N_E=e.O()}]);