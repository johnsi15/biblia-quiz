import Svg from '@/assets/icons/SvgIcon'

function ArrowNext() {
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
      <path d='M5 12h.5m3 0h1.5m3 0h6' />
      <path d='M13 18l6 -6' />
      <path d='M13 6l6 6' />
    </Svg>
  )
}

export default ArrowNext
