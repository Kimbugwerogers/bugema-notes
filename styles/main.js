document.addEventListener('DOMContentLoaded', function(){
  // Toggle mobile nav
  const toggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.main-nav ul');
  if(toggle){
    toggle.addEventListener('click', ()=>{
      if(navList.style.display === 'flex') navList.style.display = '';
      else navList.style.display = 'flex';
    });
  }

  // Simple contact form handling
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const data = new FormData(form);
      const obj = {};
      data.forEach((v,k)=>obj[k]=v);
      console.log('Contact form submitted', obj);
      alert('Thanks! Your message was recorded. We will contact you soon.');
      form.reset();
    });
  }
});