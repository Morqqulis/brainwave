import brackets from './../svg/Brackets'

interface ITagline {
   children?: React.ReactNode
   className?: string
}

const Tagline: React.FC<ITagline> = ({ className, children }): JSX.Element => {
   return (
      <div className={`tagline flex items-center ${className || ''}`}>
         {brackets('left')}
        <div className={`mx-3 text-n-3`}> {children}</div>
         {brackets('right')}
      </div>
   )
}

export default Tagline
