// Replace this with your actual professional email address before submission.
const CONTACT_EMAIL = 'kyletyson.louw@gmail.com';
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
if (CONTACT_EMAIL !== 'YOUR_EMAIL@example.com') {
  const display = document.getElementById('email-display');
  const emailLink = document.createElement('a');
  emailLink.href = `mailto:${CONTACT_EMAIL}`;
  emailLink.textContent = CONTACT_EMAIL;
  display.replaceWith(emailLink);
}
document.getElementById('contact-form').addEventListener('submit', event => {
  event.preventDefault();
  if (CONTACT_EMAIL === 'YOUR_EMAIL@example.com') {alert('First add your professional email address in script.js.');return;}
  const value = id => document.getElementById(id).value.trim();
  const subject = encodeURIComponent(value('subject'));
  const body = encodeURIComponent(`From: ${value('name')} (${value('email')})\n\n${value('message')}`);
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
});
