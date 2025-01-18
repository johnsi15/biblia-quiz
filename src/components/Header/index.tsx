export function Header() {
  return (
    <header
      className='backdrop-blur-[10px] md:backdrop-blur-0 w-full mb-10 overflow-visible z-[99999] py-6'
      style={{ boxShadow: 'rgb(59 130 246 / 60%) 0px 0px 8px' }}
    >
      <div className='max-w-[1200px] mx-auto '>
        <span className='text-xl'>Biblia Quiz</span>
      </div>
    </header>
  )
}
