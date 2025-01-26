import { cn } from '@/lib/utils'
import { BentoGrid, BentoGridItem } from '../ui/bento-grid'

export function ListGame() {
  const games = [
    {
      title: `¿De Qué Se Trata?`,
      description: 'Responde preguntas y descifra su significado. Todo gira en torno a la Biblia y la vida cristiana.',
      link: '',
      className: 'md:col-span-1',
      img: 'game-1',
    },
    {
      title: '¿Qué Libro Es?',
      description: 'Elige entre tres opciones y descubre a qué libro de la Biblia corresponde cada cita.',
      link: '',
      className: 'md:col-span-1',
      img: 'game-2',
    },
    {
      title: 'Adivina el Personaje',
      description:
        'Descubre el personaje bíblico a través de las pistas que te ofrecen los enunciados. ¡Atención al detalle!',
      link: '',
      className: 'md:col-span-1',
      img: 'game-3',
    },
    {
      title: '¡Usa tu Espada!',
      description:
        'Demuestra tu conocimiento de la Palabra de Dios. Reconoce el versículo y su referencia bíblica a partir de la cita proporcionada.',
      link: '',
      className: 'md:col-span-2',
      img: 'game-4',
    },
    {
      title: '¿Bíblico o Popular?',
      description: 'Descubre si los enunciados son versículos de la Biblia o refranes populares.',
      link: '',
      className: 'md:col-span-1',
      img: 'game-5',
    },
  ]

  // <h2 className='font-mono text-2xl text-sky-light mb-3'>{game.title}</h2>
  //             <p className='text-white font-light mb-6 prose'>{game.description}</p>

  return (
    <section className='mt-24'>
      <h2 className='font-mono text-4xl text-white text-center mb-10'>
        Elige tu Juego <span className='text-sky-primary'>Bíblico</span>
      </h2>
      <BentoGrid className='max-w-4xl mx-auto md:auto-rows-[22rem]'>
        {games.map((game, index) => (
          <BentoGridItem
            key={index}
            className={cn('[&>p:text-lg]', game.className)}
            title={game.title}
            description={game.description}
            img={game.img}
          ></BentoGridItem>
        ))}
      </BentoGrid>
    </section>
  )
}
