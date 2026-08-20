import {useState} from 'react';
import Brand from '../ui/Brand';
import {navigation} from '../../data/content';
import {useToast} from '../ui/Toast';
export default function Header() {
  const [open,setOpen]=useState(false);
  const toast=useToast();
  const [user,setUser]=useState(()=>{try{return JSON.parse(localStorage.getItem('slikonues_session'))}catch{return null}});
  const logout=()=>{localStorage.removeItem('slikonues_session');setUser(null);setOpen(false);toast('You have been logged out.');setTimeout(()=>window.location.assign('/login'),500)};
  return <header className="header wrap"><Brand/><nav className={open?'open':''} aria-label="Main navigation">{navigation.map(item=><a key={item} href={'#'+item.toLowerCase().replace(' ','-')} onClick={()=>setOpen(false)}>{item}</a>)}<span className="mobile-auth">{user?<><span>Hello, <b>{user.firstName||'User'}</b></span><button type="button" onClick={logout}>Logout</button></>:<><a href="/login">Login</a><a href="/signup">Sign Up</a></>}</span></nav><div className="actions"><button type="button" aria-label="Search">⌕</button><button type="button" className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle account menu" aria-expanded={open}>{open?'×':'⊞'}</button></div><div className={`account-menu ${open?'show':''}`}>{user?<><p>Hello, <b>{user.firstName||'User'}</b></p><span>{user.email}</span><button type="button" onClick={logout}>Logout</button></>:<><p>Welcome to Slikonues</p><span>Access your saved interior projects.</span><a href="/login">Login</a><a className="account-signup" href="/signup">Create account</a></>}</div></header>;
}
