export default function Button({children='Read More',href='#contact-us',light=false}) {
  return <a className={`button ${light?'light':''}`} href={href}>{children}</a>;
}
