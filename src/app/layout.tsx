import Footer from '@layout/Footer'
import Header from '@layout/Header'

import '@styles/index.scss'

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en">
         <body>
            <div className="wrapper">
               <Header />
               {children}
               <Footer />
            </div>
         </body>
      </html>
   )
}
