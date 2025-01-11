import Svg from '@/assets/icons/SvgIcon'

function ArrowPrev() {
  return (
    <Svg
      size={32}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M5 12h6m3 0h1.5m3 0h.5' />
      <path d='M5 12l6 6' />
      <path d='M5 12l6 -6' />
    </Svg>
  )
}

export default ArrowPrev
