const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
function submitForm(e){e.preventDefault();const f=e.target;const msg=document.getElementById('form-message');const name=f.name.value.trim();const phone=f.phone.value.trim();const course=f.course.value;const message=f.message.value.trim();const subject=encodeURIComponent(`VRK Academy enquiry - ${course}`);const body=encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nInterested in: ${course}\nMessage: ${message}`);window.location.href=`mailto:vrkgate@gmail.com?subject=${subject}&body=${body}`;msg.textContent='Opening your email app to send the enquiry…';}
