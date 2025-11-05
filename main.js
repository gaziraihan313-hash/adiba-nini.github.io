
document.addEventListener('DOMContentLoaded', function(){
  // set year
  document.getElementById('yr').textContent = new Date().getFullYear();
  // simple intersection observer for fade-up sections
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting) e.target.classList.add('visible');
    });
  }, {threshold:0.12});
  document.querySelectorAll('.fade-up').forEach(el=> obs.observe(el));
});
