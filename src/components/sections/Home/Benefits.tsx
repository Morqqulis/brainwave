import { benefits } from '@const/index'
import Section from '@layout/Section'
import Heading from '@ui/Heading'
import Image from 'next/image'
import Arrow from '../../svg/Arrow'
import ClipPath from '../../svg/ClipPath'
interface IBenefits {}
import { GradientLight } from '@design/Benefits'

const Benefits: React.FC = (): JSX.Element => {
   return (
      <Section id={'features'}>
         <div className={`container relative z-2`}>
            <Heading className={`mx-auto text-center`} title={'Chat Smarter, Not Harder with Brainwave'} />

            <div className="mb-10 grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3">
               {benefits.map((benefit, index) => (
                  <div
                     className={`relative block bg-[length:100%_100%] bg-no-repeat p-0.5 md:max-w-[24rem]`}
                     style={{ backgroundImage: `url(${benefit.backgroundUrl})` }}
                     key={benefit.id}
                  >
                     <div className={`pointer-events-none relative z-2 flex min-h-[22rem] flex-col p-[2.4rem]`}>
                        <h5 className={`h5 mb-5`}>{benefit.title}</h5>
                        <p className={`body-2 mb-6 text-n-3`}>{benefit.text}</p>
                        <div className={`mt-auto flex items-center`}>
                           <Image src={benefit.iconUrl} alt={benefit.title} width={48} height={48} />
                           <p className={`ml-auto font-code text-xs font-bold uppercase tracking-wider text-n-1`}>
                              Explore more
                           </p>
                           <Arrow />
                        </div>
                     </div>
                     {benefit.light && <GradientLight />}
                     <div className={`absolute inset-0.5 bg-n-8`} style={{ clipPath: 'url(#benefits)' }}>
                        <div className={`absolute inset-0 opacity-0 transition-opacity hover:opacity-30`}>
                           {benefit.imageUrl && (
                              <Image
                                 className={`absolute inset-0.5 h-full w-full object-cover`}
                                 src={benefit.imageUrl}
                                 alt={benefit.title}
                                 width={760}
                                 height={724}
                              />
                           )}
                        </div>
                     </div>
                     <ClipPath />
                  </div>
               ))}
            </div>
         </div>
      </Section>
   )
}

export default Benefits
