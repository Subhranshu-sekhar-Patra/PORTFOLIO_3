const btn = document.getElementById('button');

document.getElementById('conatct form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_jv7krfp';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Massage Sent Successfully !');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});