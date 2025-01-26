import { cn } from '@/lib/utils'

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div className={cn('grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ', className)}>
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  img?: string
}) => {
  return (
    <div
      className={cn(
        'row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black  bg-black border border-sky-lightest justify-between flex flex-col space-y-4 relative',
        className
      )}
    >
      <img
        src={`/games/${img}.webp`}
        alt={img}
        width='100%'
        height='100%'
        className={cn('max-w-full max-h-[200px] h-full object-cover block', img === 'game-4' && 'h-[186px]')}
      />
      <div className='group-hover/bento:translate-x-2 transition duration-200'>
        <div className='font-mono font-bold text-xl text-sky-primary dark:text-neutral-200 mb-2 mt-2'>{title}</div>
        <div className='font-sans font-normal text-base text-sky-lightest prose dark:text-neutral-300'>
          {description}
          <a
            href=''
            className='ml-2 leading-none hover:scale-105 transition-transform duration-300 text-sky-primary no-underline'
          >
            Jugar
          </a>
        </div>
      </div>
    </div>
  )
}
