import notification4 from '@img/notification/image-4.png'
import notification3 from '@img/notification/image-3.png'
import notification2 from '@img/notification/image-2.png'
import notification1 from '@img/notification/image-1.png'
import Image from 'next/image'
interface INotification {
   className?: string
   title: string
}
const notificationImages = [notification4, notification3, notification2]
const Notification: React.FC<INotification> = ({ className, title }): JSX.Element => {
   return (
      <div
         className={`flex items-center gap-5 rounded-2xl border border-n-1/10 bg-n-9/40 p-4 pr-6 backdrop-blur ${className || ''}`}
      >
        <Image className={`rounded-xl`} src={notification1} alt={`Notification Image`} width={62} height={62}  />
        <div className={`flex flex-col`}>
             <div className={`flex-1`}>
                <p className={`mb-1 justify-between text-base font-semibold`}>{title}</p>
             </div>
             <div className={`flex items-center justify-between`}>
                <ul className={`-m-0.5 flex`}>
                   {notificationImages.map((image, index) => (
                      <li className={`flex h-6 w-6 border-2 border-n-12 rounded-full overflow-hidden`} key={index}>
                         <Image className={`w-full`} src={image} width={20} height={20} alt="Notification" />
                      </li>
                   ))}
                </ul>
                <div className={`body-2 text-n-1`}>1m ago</div>
             </div>
        </div>
      </div>
   )
}

export default Notification
