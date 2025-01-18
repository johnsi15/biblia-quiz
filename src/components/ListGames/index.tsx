export function ListGame() {
  const games = [
    {
      title: '¿De Qué Se Trata?',
      description: 'Responde preguntas y descifra su significado. Todo gira en torno a la Biblia y la vida cristiana.',
      link: '',
    },
    {
      title: '¿Qué Libro Es?',
      description: 'Elige entre tres opciones y descubre a qué libro de la Biblia corresponde cada cita.',
      link: '',
    },
    {
      title: 'Adivina el Personaje',
      description:
        'Pon a prueba tus habilidades de detective. Descubre el personaje bíblico a través de las pistas que te ofrecen los enunciados. ¡Atención al detalle!',
      link: '',
    },
    {
      title: '¡Usa tu Espada!',
      description:
        'Demuestra tu conocimiento de la Palabra de Dios. Reconoce el versículo y su referencia bíblica a partir de la cita proporcionada.',
      link: '',
    },
    {
      title: '¿Bíblico o Popular?',
      description:
        'Pon a prueba tu conocimiento. Descubre si los enunciados son versículos de la Biblia o refranes populares. ¿Puedes reconocer la diferencia?',
      link: '',
    },
  ]
  return (
    <section>
      <h2 className='text-4xl text-white text-center mt-16'>
        Elige tu Juego <span className='text-blue-500'>Bíblico</span>
      </h2>

      <ul className='mt-10 gap-5 pb-16 flex flex-wrap justify-center  h-full'>
        {games.map((game, index) => (
          <li
            key={index}
            className='border border-[#111C2D] bg-[#0B1422] rounded-2xl p-5 break-inside-avoid max-w-[385px] min-h-28 box-border flex flex-col justify-between'
          >
            <h2 className='text-2xl text-blue-500 mb-3'>{game.title}</h2>
            <p className='text-white font-light mb-6'>{game.description}</p>
            <a
              href=''
              className=' py-2.5 px-4 justify-center rounded-[10px] font-bold border flex items-center gap-x-2.5 leading-none hover:scale-105 transition-transform duration-300 shadow-button bg-brand-blue text-white border-brand-blue mt-3 max-w-max'
            >
              Jugar
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
