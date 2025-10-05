import Button from "./Button";
import Link from "./Link";
import { Home } from "lucide-react";

const Header : React.FC = ((() => {
    return (
        <header className="flex items-center justify-between p-4 bg-black">
            <div className="flex items-center text-white">
                <div className="mr-2 bg-orange-500 p-2 rounded-md">
                    <Home />
                </div>
                <h1 className="text-2xl font-bold">Antools.</h1>
            </div>
            <div>
                <Link text="Home" href="#" className="mr-4" />
                <Link text="My Collections" href="#" className="mr-4" />
                <Link text="Blog" href="#" className="mr-4" />
            </div>
            <div>
                <Button text="Login" backgroundColor="black" />
                <Button text="Sign Up" backgroundColor="orange-500" buttonClassName="ml-2" />
            </div>
        </header>
    )
}))

export default Header