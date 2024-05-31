import { Sora, Source_Code_Pro, Space_Grotesk } from 'next/font/google'

export const primaryFont = Sora({
   subsets: ['latin'],
   weight: ['300', '400', '600'],
   display: 'swap',
   variable: '--font-sora',
})
export const secondatyFont = Source_Code_Pro({
   subsets: ['latin'],
   weight: ['400', '600', '700'],
   display: 'swap',
   variable: '--font-code',
})
export const tertiaryFont = Space_Grotesk({
   subsets: ['latin'],
   weight: ['300'],
   display: 'swap',
   variable: '--font-grotesk',
})
