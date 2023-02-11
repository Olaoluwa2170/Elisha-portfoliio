import king from './assets/img/king.svg'
import Layout from './Layout'

const Header = () => {
    return (
        <div >
            <nav className="flex sm:justify-between sm:flex-col sm:m-2 sm:p-2 ">
                <div className="flex justify-center">
                    <h1 className="font-bold text-lg text-gray-700 mr-5">
                        <img className="ml-5 sm:ml-0 w-10"src={king} alt="" />
                        <a className='ml-6 sm:ml-1 text-high font-sofia' href="#">Elisha</a>
                    </h1>
                </div>
                    <Layout/>
            </nav>
            
        </div>
    )
}



export default Header