function Navbar() {

    return (

        <nav className="fixed top-0 z-50 w-screen">
            <div className="flex flex-row gap-4 justify-between px-[80px] py-[16px]">
            {/* <div className="grid grid-cols-2 p-4"> */}
                {/* Logo */}
                <div className="px-[10] py-[10]">
                    <img className="w-[322px] h-[70px] object-contain" src="src/assets/Pulsematelogo.png" alt="Pulsemate Logo" />
                </div>

                {/* Navbar Menu */}
                <ul className="grid grid-flow-col gap-6 text-[32px] font-medium justify-end">
                    <li><a href="#" className="hover:text-blue-600 transition">Home</a></li>
                    <li><a href="#" className="hover:text-blue-600 transition">Services</a></li>
                    <li><a href="#" className="hover:text-blue-600 transition">About us</a></li>
                    <li>
                        <a href="#" className="hover:text-blue-600 transition">
                            Register/Login
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar