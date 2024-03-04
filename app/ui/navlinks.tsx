'use client'

import styles from '@/app/ui/css/header.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  {
    name: 'Inicio',
    href: '/'
  },
  {
    name: 'Nosotros',
    href: '/nosotros'
  },
  {
    name: 'Servicios',
    href: '/servicios'
  },
  {
    name: 'Galería',
    href: '/galeria'
  },
  {
    name: 'Contacto',
    href: '/contacto'
  }
]

export default function NavLinks() {
  const pathname = usePathname()

  return (
    <nav className='flex w-full max-md:h-12 items-center justify-center'>
      <ul className='flex w-full max-md:h-full flex-row items-center justify-evenly'>
        {links.map(link => (
          <li key={link.name}>
            <Link
              className={`${styles.navlink} ${
                pathname === link.href
                  ? 'text-principal  '
                  : 'md:text-secondary text-tertiary'
              } font-semibold md:text-lg`}
              href={link.href}
              aria-description={`Link hacia la sección ${link.name} en Nuestro refugio`}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
