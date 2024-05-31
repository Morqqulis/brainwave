import Link from 'next/link'
import ButtonSvg from '@svg/ButtonSvg'
interface IButton {
   children?: React.ReactNode
   className?: string
   type?: 'button' | 'submit' | 'reset'
   tag?: 'button' | 'a'
   href?: string | undefined | any
   onClick?: () => void
   px?: string
   white?: boolean
}

const Button: React.FC<IButton> = ({ children, className, href, onClick, px, white = false }): JSX.Element => {
   const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
      px || 'px-7'
   } ${white ? 'text-n-8' : 'text-n-1'} ${className || ''}`
   const spanClasses = 'relative z-10'
   const renderButton = () => (
      <button className={classes} onClick={onClick} type={'button'} aria-label={'button'} value={'button'}>
         {ButtonSvg(white)}
         <span className={spanClasses}>{children}</span>
      </button>
   )

   const renderLink = () => (
      <Link className={classes} href={href} onClick={onClick}>
         <span className={spanClasses}>{children}</span>
         {ButtonSvg(white)}
      </Link>
   )

   return href ? renderLink() : renderButton()
}

export default Button
