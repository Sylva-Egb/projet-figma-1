import SearchForm from "./SearchForm";
import SocialMediaLink from "./SocialMediaLink";
import { Facebook, Instagram, Twitter } from "lucide-react";
import bgImage from "../assets/bg-dev.jpeg"

function Hero() {
    return (
        <div className="md:flex min-h-screen md:flex-col items-center pt-8 bg-black text-white">
            <div className="flex flex-col md:w-1/2 pl-8">
                <h1 className="md:text-5xl text-2xl font-bold text-white">Awesome tools for Designer & Developer <span className="text-orange-500">.</span></h1>
                <div className="w-3/4">
                    <p className="text-gray-600 mt-8">Antools is a web colection of information on paid or free Design and Development tools</p>
                    <div className="mt-12">
                        <SearchForm placeholder="Search for tools" />
                    </div>
                </div>
                <div className="mt-24 flex gap-4">
                    <SocialMediaLink icon={<Facebook size={24} />} href="https://www.facebook.com" />
                    <SocialMediaLink icon={<Instagram size={24} />} href="https://www.instagram.com" />
                    <SocialMediaLink icon={<Twitter size={24} />} href="https://www.twitter.com" />
                </div>
            </div>

            <div className="mt-4 px-10">
                <img 
                    src={bgImage}
                    alt="Background" 
                    className="md:max-w-full md:h-auto md:rounded-sm hidden md:block"
                />
            </div>
        </div>
    );
}

export default Hero;