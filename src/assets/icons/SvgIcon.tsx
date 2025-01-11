type SvgIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number
  fill?: string
  className?: string
  children: React.ReactNode
}

function SvgIcon({ size = 24, fill = 'currentColor', className, children, ...svgProps }: SvgIconProps) {
  return (
    <svg width={size} height={size} fill={fill} className={className} viewBox='0 0 24 24' {...svgProps}>
      {children}
    </svg>
  )
}

export default SvgIcon
