import about from './assets/img/about.svg'
import blog from './assets/img/blog.svg'
import port from './assets/img/port.svg'
import project from './assets/img/project.svg'


const Layout = () => {
  return (
    <div><ul className="flex text-xs shadow-xs sm:shadow-lg sm:w-5/6 ml-24 sm:ml-20 bg-secondary-100 rounded-full p-2 mt-3 sm:justify-center font-bold gap-5 sm:gap-20">
    <li><img className='icons' src={about} alt="" /><a target={"_blank"} href={'https://www.linkedin.com/in/elisha-babalola-python-dev/'}>About</a></li>
    <li><img className='icons' src={port} alt="" /><a target={"_blank"} href={"https://docs.google.com/document/d/1d9aZNxf2143ZQTF8MBaDUvTjje7kK_jd4Cnx_2p6TI0/edit?usp=sharing"}>Portfolio</a></li>
    <li><img className='icons' src={project} alt="" /><a target={"_blank"} href={"https://github.com/Olaoluwa2170"}>Projects</a></li>
    <li><img className='icons' src={blog} alt="" /><a target={"_blank"} href={"https://elitebabson.blogspot.com"}>Blog/More</a></li>
</ul></div>
  )
};

export default Layout;