import bannerimg from './assets/image.png'
import { PiConfettiDuotone } from 'react-icons/pi'
const Home = () => {
    return ( <div className="home lg:max-h-screen flex flex-col-reverse lg:flex-row text-5xl p-10 px-20 items-center justify-between">
        <div className=''>
            <img className='w-full h-fit' src={bannerimg} alt="banner image" />
        </div>
        <div className='text-center lg:text-right'>
            <h2 className="">Imagine if <br /> <span className=" text-purple-400">Snapchat</span> <br /> had events</h2>
            <p className='text-sm text-zinc-700 my-8'>Easily host and share events with your friends across <br /> any social media</p>
            <button className='text-sm flex items-center gap-3 p-3 font-bold my-6 mx-auto lg:mx-0 lg:ml-auto'><span><PiConfettiDuotone /></span>Create my event</button>
        </div>

        <div>
            
        </div>
    </div> );
}
 
export default Home;