import { brainwaveServices, brainwaveServicesIcons } from '@const/index'

import Section from '@layout/Section'
import Generating from '@ui/Generating'
import Heading from '@ui/Heading'
import Image from 'next/image'
import { Gradient, PhotoChatMessage, VideoBar, VideoChatMessage } from '../../design/Services'
interface IServices {}

const Services: React.FC = (): JSX.Element => {
   return (
      <Section id={'how-to-use'}>
         <div className="container">
            <Heading
               className="text-balance text-center"
               title={'Generative AI made for creators.'}
               text={`Brainwave unlocks the potential of AI-powered applications`}
            />
            <div className="relative">
               <div className="relative z-1 mb-5 flex h-[39rem] items-center overflow-hidden rounded-3xl border border-n-1/10 p-8 lg:p-20 xl:h-[46rem]">
                  <div className={`pointer-events-none absolute left-0 top-0 h-full w-full md:w-3/5 xl:w-auto`}>
                     <Image
                        className={`h-full w-full object-cover md:object-right`}
                        src={'/images/services/service-1.png'}
                        alt={`Smartest AI`}
                        width={800}
                        height={730}
                     />
                  </div>
                  <div className={`relative z-1 ml-auto max-w-[17rem]`}>
                     <h4 className={`h4 mb-4`}>Smartest AI</h4>
                     <p className={`body-2 mb-[3rem] text-n-3`}>
                        Brainwave unlocks the potential of AI-powered applications
                     </p>
                     <ul className={`body-2`}>
                        {brainwaveServices.map((service, index) => (
                           <li className={`mb-3 flex items-start gap-4 border-t border-n-6 py-4`} key={index}>
                              <Image className={``} src={'/images/check.svg'} alt={`icon`} width={24} height={24} />
                              <p className={`body-2`}>{service}</p>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <Generating
                     className={`absolute bottom-4 left-1/2 flex w-full max-w-[90%] -translate-x-1/2 border border-n-1/10 lg:bottom-8`}
                  />
               </div>
               <div className={`relative z-1 grid gap-5 lg:grid-cols-2`}>
                  <div className={`relative min-h-[39rem] overflow-hidden rounded-3xl border border-n-1/10`}>
                     <div className={`absolute inset-0`}>
                        <Image
                           className={`h-full w-full object-cover`}
                           src={'/images/services/service-2.png'}
                           alt={`Robot`}
                           width={630}
                           height={750}
                        />
                     </div>
                     <div
                        className={`absolute inset-0 flex flex-col justify-end bg-gradient-to-b from-n-8/0 to-n-8/90 p-8 lg:p-15`}
                     >
                        <h4 className={`h4 mb-4`}>Photo editing</h4>
                        <p className={`body-2 mb-[3rem] text-n-3`}>
                           Automatically enhance your photos using our AI app&apos;s photo editing feature. Try it now!
                        </p>
                     </div>
                     <PhotoChatMessage />
                  </div>
                  <div className={`overflow-hidden rounded-3xl bg-n-7 p-4 lg:min-h-[46rem]`}>
                     <div className={`px-4 py-12 xl:px-8`}>
                        <h4 className={`h4 mb-4`}>Video generation</h4>
                        <p className={`body-2 mb-[2rem] text-n-3`}>
                           The world’s most powerful AI photo and video art generation engine. What will you create?
                        </p>
                        <ul className={`flex items-center justify-between gap-1`}>
                           {brainwaveServicesIcons.map((icon, index) => (
                              <li
                                 className={`flex items-center justify-center rounded-2xl ${index === 2 ? 'h-[3rem] w-[3rem] bg-conic-gradient p-0.25 md:h-[4.5rem] md:w-[4.5rem]' : 'flex h-10 w-10 bg-n-6 md:h-15 md:w-15'}`}
                                 key={index}
                              >
                                 <div
                                    className={
                                       index === 2
                                          ? 'flex  h-full w-full items-center justify-center rounded-[1rem] bg-n-7'
                                          : ''
                                    }
                                 >
                                    <Image src={icon} alt={'icon'} width={24} height={24} />
                                 </div>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className={`relative h-[20rem] overflow-hidden rounded-xl bg-n-8 md:h-[25rem]`}>
                        <Image
                           className={`h-full w-full object-cover`}
                           src={'/images/services/service-3.png'}
                           alt={`Scary robot`}
                           width={520}
                           height={400}
                        />
                        <VideoChatMessage />
                        <VideoBar />
                     </div>
                  </div>
               </div>
               <Gradient />
            </div>
         </div>
      </Section>
   )
}

export default Services
