import Tagline from './Tagline'

interface IHeading {
   className?: string
   title?: string
   text?: string
   tag?: string
}

const Heading: React.FC<IHeading> = ({ className, title, text, tag }): JSX.Element => {
   return (
      <div className={`max-w-[50rem lg:mb-20] md:text-center mx-auto mb-12 ${className || ''}`}>
         {tag && <Tagline className={`mb-4 md:justify-center`}>{tag}</Tagline>}
         {title && <h2 className={`h2 mx-auto md:max-w-md lg:max-w-2xl `}>{title}</h2>}
         {text && <p className={`body-2 mt-4 text-n-4`}>{text}</p>}
      </div>
   )
}

export default Heading
