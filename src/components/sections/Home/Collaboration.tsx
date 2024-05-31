import { collabApps, collabContent, collabText } from '@const/index'
import Section from '@layout/Section'
import Button from '@ui/Button'
import Image from 'next/image'
import { LeftCurve, RightCurve } from '../../design/Collaboration'
interface ICollaboration {}

const Collaboration: React.FC = (): JSX.Element => {
   return (
      <Section crosses={true} id={'collaboration'}>
         <div className="container lg:flex">
            <div className={`md:ml-12 lg:max-w-[25rem]  `}>
               <h2 className={`h2 mb-4 md:mb-8`}>AI Chat App for seamless collaboration</h2>

               <ul className={`mb-10 max-w-full md:mb-14 lg:max-w-[22rem]`}>
                  {collabContent.map((item) => (
                     <li className={`mb-3 py-3`} key={item.id}>
                        <div className={`flex items-center gap-5`}>
                           <Image src={'/images/check.svg'} alt={'icon'} width={24} height={24} />
                           <h6 className={`body-2`}>{item.title}</h6>
                        </div>

                        {item.text && <p className={`body-2 mt-3 text-n-4`}>{item.text}</p>}
                     </li>
                  ))}
               </ul>

               <Button className={`w-full md:w-auto`}>Try it now</Button>
            </div>

            <div className={`mt-4 lg:ml-auto lg:mr-12 xl:w-[38rem]`}>
               <p
                  className={`body-2 mb-4 mt-10 text-center text-n-4 md:mb-16 lg:mx-auto lg:mb-32 lg:w-[22rem] lg:text-left`}
               >
                  {collabText}
               </p>
               <div
                  className={`relative left-1/2 flex aspect-square w-[22rem] -translate-x-1/2 scale-75 rounded-full border border-n-6 md:scale-100`}
               >
                  <div className={`m-auto flex aspect-square w-60 rounded-full border border-n-6`}>
                     <div className={`m-auto aspect-square w-[6rem] rounded-full bg-conic-gradient p-[0.2rem]`}>
                        <div className={`flex h-full w-full items-center justify-center rounded-full bg-n-8`}>
                           <Image
                              src={'/images/brainwave-symbol.svg'}
                              alt={`Brainwave Symbol`}
                              width={48}
                              height={48}
                           />
                        </div>
                     </div>
                  </div>
                  <ul>
                     {collabApps.map((app, index) => (
                        <li
                           className={`absolute left-1/2 top-0 -ml-[1.6rem] h-1/2 origin-bottom rotate-${index * 45}`}
                           key={app.id}
                        >
                           <div
                              className={`relative -top-[1.6rem] flex h-[3.2rem] w-[3.2rem] rounded-xl border border-n-1/15 bg-n-7 -rotate-${index * 45}`}
                           >
                              <Image
                                 className={`m-auto`}
                                 src={app.icon}
                                 alt={'App Icon'}
                                 width={app.width}
                                 height={app.width}
                              />
                           </div>
                        </li>
                     ))}
                  </ul>
                  <LeftCurve />
                  <RightCurve />
               </div>
            </div>
         </div>
      </Section>
   )
}

export default Collaboration
