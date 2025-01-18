import Link from 'next/link'

export function Header() {
  return (
    <header
      className='backdrop-blur-[10px] md:backdrop-blur-0 w-full mb-10 overflow-visible z-[99999] py-6'
      style={{ boxShadow: 'rgb(59 130 246 / 60%) 0px 0px 8px' }}
    >
      <div className='max-w-[1200px] mx-auto flex justify-between items-center'>
        <Link href='/' className='text-xl'>
          Biblia Quiz
        </Link>
        <nav>
          <ul className='flex gap-4 mt-4'>
            <li>
              <Link href='/games' className='hover:text-blue-500 transition-colors'>
                Juegos
              </Link>
            </li>
            <li>
              <Link href='/about' className='hover:text-blue-500 transition-colors'>
                Versículo del día
              </Link>
            </li>
            <li>
              <Link
                href='https://link.mercadopago.com.co/johnserrano'
                className='hover:text-blue-500 transition-colors'
                target='_blank'
                rel='noopener noreferrer'
              >
                Donar
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
