import Link from 'next/link';
import { useTheme } from 'next-themes';

const links = [
  { href: '#', label: 'GitHub' },
  { href: '#', label: 'Docs' },
]

export default function Nav() {
  const {theme, setTheme } = useTheme();
  const setIcon = () => {
    switch(theme){
        case 'dark':
          $('#hello').remove();
          $('#lua').remove();
          $('#changeTheme').append('<i id="sol" class="fas fa-sun text-yellow-400"/>');
          break;
        case 'light':
          $('#hello').remove();
          $('#sol').remove();
          $('#changeTheme').append('<i id="lua" class="fas fa-moon text-purple-800"/>');
        break;
      }
  }
  if(process.browser){
    window.onload = () => {
      setIcon();
    }
  }
  return (
    <nav>
      <ul className="flex items-center justify-between p-8">
        <li>
          <Link href="/">
            <a className="text-black no-underline sbtn papercurl-btn purple-btn text-accent-1 dark:text-white">
              About
            </a>
          </Link>
        </li>
        <ul className="flex items-center justify-between space-x-4">
        <a className="text-center px-2 text-2xl border-none" id="changeTheme" title="Change Theme" onLoad={setIcon()} onClick={() => {setTheme(theme === 'light' ? 'dark' : 'light');}}><p id="hello"></p></a>
        
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className="no-underline sbtn colored-on-hover-btn purple-btn">
                <p className=" dark:text-white ">{label}</p>
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  )
}
