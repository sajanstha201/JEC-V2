import { Link } from 'react-router-dom'
import logo from '../../media/images/jec-logo.png'
export const Header =()=>{
    return(
        <div className=' bg-black w-full'>
            <div className='lg:w-[85%] w-full flex justify-around mx-auto'>
                {/* logo section */}
                <div>
                    <img src={logo} className='h-20'/>
                </div>

                {/* lists section */}
                <div className="lists w-full md:w-auto flex items-center justify-center md:justify-end md:mr-4 bg-black">
                    <ul className="flex flex-wrap justify-center md:justify-end gap-5 p-2 flex-col md:flex-row">
                        <li><Link to='/admission' className="text-xl text-white">Admission</Link></li>
                        <li><Link to='/about-us' className="text-xl text-white">About</Link></li>
                        <li><Link to='/academic' className="text-xl text-white">Academic</Link></li>
                        <li><Link to='/facilities' className="text-xl text-white">Facilities</Link></li>
                        <li><Link to='/news' className="text-xl text-white">News</Link></li>
                        <li><Link to='/contact-us' className="text-xl text-white">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}