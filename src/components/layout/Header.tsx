'use client'

import { disablePageScroll, enablePageScroll } from 'scroll-lock'

import { navigation } from '@const/index'
import { HamburgerMenu } from '@design/Header'

import ButtonGradient from '@svg/ButtonGradient'
import MenuSvg from '@svg/MenuSvg'
import Button from '@ui/Button'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

interface IHeader {}

const Header: React.FC<IHeader> = (): JSX.Element => {
   const pathname = usePathname()
   const [openNavigation, setOpenNavigation] = useState<boolean>(false)

   const toggleNavigation = () => {
      if (openNavigation) {
         setOpenNavigation(false)
         enablePageScroll()
      } else {
         setOpenNavigation(true)
         disablePageScroll()
      }
   }

   const handleClick = () => {
      if (!openNavigation) return

      enablePageScroll()
      setOpenNavigation(false)
   }

   return (
      <header className={`overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]`}>
         <div
            className={`fixed left-0 top-0 z-50 w-full border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'}`}
         >
            <div className={`flex items-center px-5 max-lg:py-4 lg:px-7.5 xl:px-10`}>
               <Link className={`block w-[12rem] xl:mr-8`} href={`/`}>
                  <Image src={'/images/brainwave.svg'} alt={`Brainwave`} width={190} height={40} priority={true} />
               </Link>

               <nav
                  className={`${openNavigation ? 'flex' : 'hidden'} fixed bottom-0 left-0 right-0 top-[5rem] bg-n-8 lg:static lg:mx-auto lg:flex lg:bg-transparent`}
               >
                  <div className={`relative z-2 m-auto flex  flex-col items-center justify-center lg:flex-row`}>
                     {navigation.map(({ title, url, id, onlyMobile }) => (
                        <Link
                           className={`relative block font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${onlyMobile ? 'lg:hidden' : ''} px-6 py-6 md:py-8 lg:-mr-0.25 lg:px-8 lg:text-xs lg:font-semibold ${pathname === url ? 'z-2 lg:text-n-1' : 'lg:text-n-1/50'} whitespace-nowrap lg:leading-5 lg:hover:text-color-1 xl:px-12`}
                           key={id}
                           href={url}
                           onClick={handleClick}
                        >
                           {title}
                        </Link>
                     ))}
                  </div>
                  <HamburgerMenu />
               </nav>
               <Link
                  className={`button mr-8 hidden text-n-1/50 transition-colors hover:text-n-1 lg:block`}
                  href={`#signup`}
               >
                  New account
               </Link>
               <Button className={`hidden hover:text-color-1 lg:flex`} href={'#login'}>
                  Sign in
               </Button>
               <Button className={`ml-auto lg:hidden`} px={'px-3'} onClick={toggleNavigation}>
                  <MenuSvg openNavigation={openNavigation} />
               </Button>
            </div>
         </div>
         <ButtonGradient />
      </header>
   )
}

export default Header
