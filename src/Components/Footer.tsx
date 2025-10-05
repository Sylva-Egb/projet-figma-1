import Link from "./Link";
import { Home } from "lucide-react";

const Footer : React.FC = ((() => {
    return (
        <footer className="flex justify-between p-14 bg-black">
            <div className="flex flex-col text-white">
                <div className="flex items-center mb-4">
                    <div className="mr-2 bg-orange-500 p-2 rounded-md">
                        <Home />
                    </div>
                    <h1 className="text-2xl font-bold">Antools.</h1>
                </div>
                <span className="text-gray-400 text-sm mb-4">© 2021 Antools.</span>
                <span className="text-gray-400 text-sm">Antools is a web collection of</span>
                <span className="text-gray-400 text-sm">information on paid or free Design</span>
                <span className="text-gray-400 text-sm">and Development tools</span>
            </div>

            <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-white mb-4">Contact us</h1>
                <span className="text-gray-400 text-sm">+621987463</span>
                <span className="text-gray-400 text-sm">antools@awesome.com</span>
                <span className="text-gray-400 text-sm">M Bulding, No.10 A</span>
            </div>

            <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-white mb-4">Categories</h1>
                <span className="text-gray-400 text-sm">Design</span>
                <span className="text-gray-400 text-sm">Development</span>
            </div>

            <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-white mb-4">Company Info</h1>
                <Link text="About us" href="#" className="mr-4" />
                <Link text="Our Partners" href="#" className="mr-4" />
                <Link text="Blog" href="#" className="mr-4" />
            </div>
        </footer>
    )
}))

export default Footer