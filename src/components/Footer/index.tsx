export function Footer() {
  return (
    <footer className='text-white text-sm font-light py-4'>
      <div className='max-w-5xl mx-auto flex gap-2 justify-center'>
        <span>Una iniciativa de </span>
        <a
          href='https://johnserrano.co/'
          target='_blank'
          className='text-blue-700 font-bold hover:opacity-90 transition-colors inline-block'
        >
          John Serrano
        </a>
        <span>con mucho ❤️</span>
      </div>
    </footer>
  )
}
