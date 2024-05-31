import yourlogo from '@img/yourlogo.svg'
import Image from 'next/image'
interface ICompanyLogos {
   className?: string
}
const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo]
const CompanyLogos: React.FC<ICompanyLogos> = ({ className }): JSX.Element => {
   return (
      <div className={`${className || ''}`}>
         <p className={`tagline mb-6 text-center text-n-1/50`}>Helping people create bautifull content at</p>
         <ul className={`flex`}>
            {companyLogos.map((logo, index) => (
               <li className={`flex h-[8.5rem] flex-1 items-center justify-center`} key={index}>
                  <Image src={logo} alt={`Company Logo`} width={134} height={28} />
               </li>
            ))}
         </ul>
      </div>
   )
}

export default CompanyLogos
