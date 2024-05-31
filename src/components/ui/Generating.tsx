import loading from '@img/loading.png'
import Image from 'next/image'
interface IGenerating {
   className?: string
}

const Generating: React.FC<IGenerating> = ({ className }): JSX.Element => {
   return (
      <div className={`flex h-[3.5rem] items-center rounded-[1.7rem] bg-n-8/80 px-6 text-base ${className || ''}}`}>
         <Image className={`mr-4 h-5 w-5`} src={loading} alt={`Loading`} width={80} height={80} />
         AI is generating
      </div>
   )
}

export default Generating
