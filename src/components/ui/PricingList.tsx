import { pricing } from '@const/index'
import Button from './Button'
import Image from 'next/image'

interface IPricingList {}

const PricingList: React.FC<IPricingList> = (): JSX.Element => {
   return (
      <div className={`grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3`}>
         {pricing.map((item, index) => (
            <div
               className={`h-full w-[19rem] rounded-[2rem] border border-n-6 bg-n-8 px-6 py-8 max-lg:w-full last:md:col-span-3 lg:w-auto last:xl:col-span-1 [&>h4]:first:text-color-2 [&>h4]:last:text-color-3 [&>h4]:even:text-color-1`}
               id={item.id}
               key={item.id}
            >
               <h4 className={`h4 mb-4`}>{item.title}</h4>
               <p className={`body-2 mb-3 min-h-[4rem] text-n-1/50`}>{item.description}</p>
               <div className={`mb-6 flex h-[5.5rem] items-center`}>
                  {item.price && (
                     <>
                        <div className={`h3`}>$</div>
                        <div className={`text-[5.5rem] font-bold leading-none`}>{item.price}</div>
                     </>
                  )}
               </div>
               {/* white={!!item.price} for button props */}
               <Button className={`mb-6 w-full`} href={'#'}>
                  {item.price ? 'Get Started' : 'Coming Soon'}
               </Button>

               <ul>
                  {item.features.map((feature, index) => (
                     <li className={`flex items-start border-t border-n-6 py-5`} key={index}>
                        <Image src={'/images/check.svg'} alt={'Check'} width={24} height={24} />
                        <p className={`body-2 ml-4`}>{feature}</p>
                     </li>
                  ))}
               </ul>
            </div>
         ))}
      </div>
   )
}

export default PricingList
