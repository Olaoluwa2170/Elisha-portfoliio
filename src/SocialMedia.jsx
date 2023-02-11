import github from './assets/img/github.svg'
import king from './assets/img/king.svg'
import linkedln from './assets/img/linkedin.svg'
import twitter from './assets/img/twitter.svg'
import whatsapp from './assets/img/whatsapp.svg'

const SocialMedia = () => {
    return(
        <div>
            <ul className="flex gap-5 font-bold text-xs sm:shadow-lg sm:flex bg-secondary-100 w-5/6 sm:w-full  p-2 mt-3 sm:justify-center sm:gap-20">
                    <li><img className='icons' src={github} alt="" /><a target={"_blank"} href={'https://github.com/Olaoluwa2170'}>Github</a></li>
                    <li><img className='icons' src={twitter} alt="" /><a target={"_blank"} href={"https://twitter.com/elisha_babalola"}>Twitter</a></li>
                    <li><img className='icons' src={whatsapp} alt="" /><a target={"_blank"} href={"https://wa.me/2348032223140"}>WhatsApp</a></li>
                    <li><img className='icons' src={linkedln} alt="" /><a target={"_blank"} href={"https://www.linkedin.com/in/elisha-babalola-python-dev/"}>Linkdeln</a></li>
            </ul>
        </div>
    )
}

export default SocialMedia