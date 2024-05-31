import { socials } from '@const/index'
import Section from './Section'
import Link from 'next/link'
import Image from 'next/image'

interface IFooter {}

const Footer: React.FC<IFooter> = (): JSX.Element => {
   return (
      <footer>
         <Section className={`relative !px-0 !py-10 `} crosses>
            <div className={`container flex items-center justify-center gap-10 max-sm:flex-col sm:justify-between`}>
               <p className={`caption text-n-4 lg:block`}>©{new Date().getFullYear()} All rights reserved.</p>
               <ul className={`flex flex-wrap gap-5`}>
                  {socials.map((item) => (
                     <li key={item.id}>
                        <Link
                           className={`flex h-10 w-10 items-center justify-center rounded-full bg-n-7 transition-colors hover:bg-n-6`}
                           href={'#'}
                           target={'_blank'}
                        >
                           <Image src={item.iconUrl} alt={item.title} width={16} height={16} />
                        </Link>
                     </li>
                  ))}
               </ul>
            </div>
         </Section>
      </footer>
   )
}

export default Footer
