import { ListGame } from '@/components/ListGames'
import { Start } from '@/components/Start'

export default function Home() {
  return (
    <section className='max-w-[1200px] mx-auto'>
      <h1 className='font-mono text-white font-bold text-5xl md:text-7xl text-balance text-center max-w-[20ch] mx-auto md:leading-[1.16]'>
        Descubre la <span className='text-sky-primary'>Biblia</span> Explora y Aprende
      </h1>

      <p className='text-white/80 text-center text-2xl mt-6 max-w-3xl mx-auto prose'>
        Resuelve tus dudas y profundiza en la Biblia con pruebas divertidas para hacer solo, en familia, con amigos o
        con tu grupo de jóvenes.
      </p>

      <ListGame />
      <Start />
    </section>
  )
}
