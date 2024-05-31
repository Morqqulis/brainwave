import Section from '@layout/Section'
import Heading from '@ui/Heading'
import PricingList from '@ui/PricingList'
import Image from 'next/image'
import Link from 'next/link'
import { LeftLine, RightLine } from './../../design/Pricing'

interface IPricing {}

const Pricing: React.FC = (): JSX.Element => {
   return (
      <Section className={`overflow-hidden`} id={'pricing'}>
         <div className={`container relative z-2`}>
            <div className={`relative mb-[6.5rem] hidden justify-center lg:flex`}>
               <Image className={`relative z-1`} src={'/images/4-small.png'} alt={'Sphere'} width={255} height={255} />
               <div
                  className={`pointer-events-none absolute left-1/2 top-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2`}
               >
                  <Image
                     className={`w-full`}
                     src={'/images/pricing/stars.svg'}
                     alt={'Stars'}
                     width={900}
                     height={400}
                  />
               </div>
            </div>
            <Heading className={`text-balance`} tag={`GET STARTED WITH BRAINWAVE`} title={`Pay once, use forever`} />

            <div className={`relative`}>
               <PricingList />
               <LeftLine />
               <RightLine />
            </div>
            <div className={`mt-10 flex justify-center`}>
               <Link
                  className={`border-b font-code text-xs font-bold uppercase tracking-wider`}
                  href={`mailto:morqqulis@gmail`}
               >
                  See the full details
               </Link>
            </div>
         </div>
      </Section>
   )
}

export default Pricing
