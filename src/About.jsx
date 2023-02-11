import HoverText from './Hover'
import Rocket from './assets/img/rocket.svg'
import SocialMedia from './SocialMedia'

const About = () => (
    <div>
        <section class="p-5 sm:p-16 m-5 mt-10 sm:mt-2">

                <div className="flex justify-between">
                    <div className="flex-col sm:ml-16 sm:w-1/2 " id="text">
                            <p className='text-1xl mb-4 text-white font-alfa'>Hi There <HoverText textOnHover="✋" initialText="🖐" /></p>
                            <p className='text-3xl sm:text-4xl mb-4 text-white font-alfa'>I am</p>
                            <p className="text-3xl sm:text-4xl font-alfa text-white mb-4 mt-4">Babalola Elisha <HoverText textOnHover="😀" initialText="😉" /></p>
                            <p className="text-sm sm:text-lg text-white mt-4">I am a full stack developer specialized in building and occasionally designing exceptional digital experience.
                                Currently I am focused on building responsive full stack web application.
                            </p>
                            <SocialMedia/>                        
                    </div>
                    
                        <img className="hidden sm:block w-16 sm:w-36 sm:mr-36" src={Rocket} alt="rocket"/>
                    
                </div>




        </section>




    </div>
)

export default About