import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {
    
    //variable and function that controlls navbar visibility
    const [isVisible, setIsVisible] = useState(false)
    
    //clicking the hamburger dropdown expands or contracts the navbar
    const dropDown = () => {
        setIsVisible(!isVisible)
    }
    
    //clicking anywhere with this function attached closes the navbar
    const clicked = () => {
        setIsVisible(false)
    }
    //body
    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-500 p-6 ">
            <div className="flex items-center justify-center flex-shrink-0 text-gray-200 mr-6 p-5 hover:text-white">
                <Link to='/' className="font-semibold text-xl tracking-tight">MOTORS-R-US</Link>
            </div>
            <div className="block">
                <button onClick={dropDown} className=" flex items-center px-3 py-2 text-gray-200 border rounded border-gray-200 hover:text-white hover:border-white">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            { isVisible ? (
            <div className=" w-full block flex-grow items-center">
                <div className="flex text-sm lg:flex-grow">
                    <div className="flex p-3 justify-center">
                        <Link to='/' onClick={clicked} className=" p-4 flex place-items-center mt-4 lg:inline-block lg:mt-0 border rounded border-gray-200 text-gray-200 hover:text-white hover:border-white mr-4">
                            <button>Home</button>
                        </Link>
                    </div>
                    <div className="flex p-3 justify-center">
                        <Link to='/dashboard' onClick={clicked} className=" p-4 flex place-items-center mt-4 lg:inline-block lg:mt-0 border rounded border-gray-200 text-gray-200 hover:text-white hover:border-white mr-4">
                            <button>Dashboard</button>
                        </Link>
                    </div>
                </div>
            </div>) : (<></>)}
        </nav>
    )
}

export default Navbar