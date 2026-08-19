import {useState} from 'react';
import Brand from '../ui/Brand';
import {useToast} from '../ui/Toast';
export default function Footer() {
  const [message,setMessage]=useState('');
  const toast=useToast();
  const subscribe=e=>{e.preventDefault();setMessage('Thanks for subscribing!');toast('You are now subscribed to Slikonues.');e.currentTarget.reset()};
  return <footer id="contact-us" className="footer wrap"><div className="footer-grid"><div><Brand dark/><p>There are many variations of passages of Lorem the Ipsum available it majority.</p><form onSubmit={subscribe}><input type="email" required placeholder="Enter your email" aria-label="Email address"/><button type="submit">Subscribe</button></form><small className="form-msg">{message}</small></div><div><h3>Services</h3><a href="#home">Incident Responder</a><a href="#home">Secure Managed IT</a><a href="#home">Check website Url</a><a href="#home">Locker Security</a></div><div><h3>About Us</h3><a href="#about">Payment Plans</a><a href="#about">Make saving More</a><a href="#about">Tax Calculator</a><a href="#contact-us">Talk To Us</a></div><div><h3>Contact Info</h3><p>455 West Orchard Street<br/>Kings Mountain, NC 280867</p><b>☎ &nbsp;+088 (246) 642-27-10</b><b>✉ &nbsp;example@mail.com</b></div></div><div className="copyright">© 2022 All Rights Reserved</div></footer>;
}
