export default function Brand({ dark=false }) {
  return <a className={`brand ${dark?'dark':''}`} href="/#home" aria-label="Slikonues home"><img className="official-logo" src="/assets/slikonues-logo.png" alt=""/><b>Slikonues</b></a>;
}
