'use client'
import { BackgroundCircles, BottomLine, Gradient } from '@design/Hero'

import Section from '@layout/Section'
import Button from '@ui/Button'
import CompanyLogos from '@ui/CompanyLogos'
import Generating from '@ui/Generating'
import Notification from '@ui/Notification'
import Image from 'next/image'
import { useRef } from 'react'
import { ScrollParallax } from 'react-just-parallax'

interface IHero {}
const heroIcons = ['/images/home-smile.svg', '/images/file-02.svg', '/images/search-md.svg', '/images/plus-square.svg']

const Hero: React.FC<IHero> = (): JSX.Element => {
   const parallaxRef = useRef(null)
   return (
      <Section className={`-mt-[5.25rem] pt-[12rem]`} crosses crossesOffset={'lg:translate-y-[5.25rem]'} id={'hero'}>
         {/* <div className={`overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]`}>

         </div> */}

         <div className={`container relative`} ref={parallaxRef}>
            <div className={`z-1 mx-auto mb-[4rem] max-w-[62rem] text-center md:mb-20 lg:mb-[6rem]`}>
               <h1 className={`h1 mb-6 text-balance`}>
                  Explore the possibilities <br /> of AI Chatting with {`\n`}
                  <span className={`relative inline-block`}>
                     Brainwave
                     <Image
                        className={`absolute -bottom-2 left-0 w-full xl:-mt-2`}
                        src={'/images/hero/curve.png'}
                        alt={`Curve`}
                        width={624}
                        height={28}
                     />
                  </span>
               </h1>
               <h2 className={`body-1 mx-auto mb-6 max-w-3xl text-n-2 lg:mb-8`}>
                  Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat
                  app.
               </h2>
               <Button href={'/#pricing'} white>
                  Get Started
               </Button>
            </div>
            <div className={`relative mx-auto max-w-[23rem] md:max-w-5xl xl:mb-24`}>
               <div className={`relative z-1 rounded-2xl bg-conic-gradient p-0.5`}>
                  <div className={`relative rounded-[1rem] bg-n-8`}>
                     <div className={`h-[1.4rem] rounded-t-[0.9rem] bg-n-10`} />
                     <div
                        className={`aspect-[33/40] overflow-hidden rounded-b-[0.9rem] md:aspect-[688/490] lg:aspect-[1024/490]`}
                     >
                        <Image
                           className={`w-full`}
                           src={'/images/hero/robot.jpg'}
                           alt={`AI`}
                           width={1034}
                           height={1512}
                        />

                        <ScrollParallax isAbsolutelyPositioned>
                           <Generating
                              className={`absolute bottom-5 left-4 right-4 md:bottom-8 md:left-1/2 md:right-auto md:w-[31rem] md:-translate-x-1/2 `}
                           />
                        </ScrollParallax>

                        <ScrollParallax isAbsolutelyPositioned>
                           <ul
                              className={`absolute -left-[5.5rem] bottom-[7.5rem] hidden rounded-2xl border border-n-1/10 bg-n-9/40 px-1 py-1 backdrop-blur xl:flex`}
                           >
                              {heroIcons.map((icon, index) => (
                                 <li className={`p-5`} key={index}>
                                    <Image className={``} src={icon} alt={`icon`} width={24} height={24} />
                                 </li>
                              ))}
                           </ul>
                        </ScrollParallax>

                        <ScrollParallax isAbsolutelyPositioned>
                           <Notification
                              className={`absolute -right-[5.5rem] bottom-[11rem] hidden w-[17rem] xl:flex`}
                              title={'Code generation'}
                           />
                        </ScrollParallax>
                     </div>
                  </div>
                  <Gradient />
               </div>
               <div
                  className={`absolute -top-[54%] left-1/2 -z-1 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]`}
               >
                  <Image
                     className={`w-full translate-y-[8%] scale-[1.7] md:-translate-y-[10%] md:scale-100 lg:-translate-y-[23%]`}
                     src={'/images/hero/hero-background.jpg'}
                     alt={`hero`}
                     width={1440}
                     height={1800}
                     priority={true}
                  />
               </div>
               <BackgroundCircles parallaxRef={parallaxRef} />
            </div>
            <CompanyLogos className={`relative z-10 mt-20 hidden lg:block`} />
         </div>
         <BottomLine />
      </Section>
   )
}

export default Hero
