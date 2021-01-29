import { route } from 'next/dist/next-server/server/router';
import Link from 'next/link';
import {useRouter} from 'next/router';

const links = [
  { href: 'https://github.com/ChristopherMarques/uuidGenerator', label: 'GitHub' },
  { href: 'https://github.com/ChristopherMarques/uuidGenerator', label: 'Docs' },
]

export default function Nav() {
  const router = useRouter();
  return (
    <nav>
      <ul className="flex items-center justify-between p-8">
        <li>
          <Link href="about">
            <a className={router.pathname == '/about' ? 'hidden' : 'text-black no-underline sbtn papercurl-btn purple-btn text-accent-1 dark:text-white'}>
              About
            </a>
          </Link>
          <Link href="/">
            <a className={router.pathname == '/about' ? 'text-black no-underline sbtn papercurl-btn purple-btn text-accent-1 dark:text-white' : 'hidden'}>Return</a>
          </Link>
        </li>
        <ul className="flex items-center justify-between space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} target="_blank" className="no-underline sbtn colored-on-hover-btn purple-btn">
                <p className=" dark:text-white ">{label}</p>
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  )
}
