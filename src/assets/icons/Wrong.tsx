import Svg from '@/assets/icons/SvgIcon'

function Wrong() {
  return (
    <Svg
      size={32}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={1}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z' />
      <path d='M9 8l6 8' />
      <path d='M15 8l-6 8' />
    </Svg>
  )
}

export default Wrong
