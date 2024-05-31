import { smallSphere, stars } from '@img/index'
import Section from '@layout/Section'
import Heading from '@ui/Heading'
import PricingList from '@ui/PricingList'
import Image from 'next/image'
import { LeftLine, RightLine } from './../../design/Pricing'
import Link from 'next/link'

interface IPricing {}

const Pricing: React.FC = (): JSX.Element => {
   return (
      <Section className={`overflow-hidden`} id={'pricing'}>
         <div className={`container relative z-2`}>
            <div className={`relative mb-[6.5rem] hidden justify-center lg:flex`}>
               <Image className={`relative z-1`} src={smallSphere} alt={'Sphere'} width={255} height={255} />
               <div
                  className={`pointer-events-none absolute left-1/2 top-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2`}
               >
                  <Image className={`w-full`} src={stars} alt={'Stars'} width={900} height={400} />
               </div>
            </div>
            <Heading className={`text-balance`} tag={`GET STARTED WITH BRAINWAVE`} title={`Pay once, use forever`} />

            <div className={`relative`}>
               <PricingList />
               <LeftLine />
               <RightLine />
            </div>
            <div className={`flex justify-center mt-10`}>
                <Link className={`text-xs font-code font-bold tracking-wider uppercase border-b`} href={`mailto:morqqulis@gmail`}>See the full details</Link>
            </div>
         </div>
      </Section>
   )
}

export default Pricing
