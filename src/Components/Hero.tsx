import SearchForm from "./SearchForm";
import SocialMediaLink from "./SocialMediaLink";
import { Facebook, Instagram, Twitter } from "lucide-react";
import bgImage from "../assets/bg-dev.jpeg"

function Hero() {
    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-between pt-8 bg-black text-white px-4 md:px-8 lg:px-16">
            <div className="flex flex-col w-full md:w-1/2 lg:pl-8 order-2 md:order-1">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                    Awesome tools for Designer & Developer <span className="text-orange-500">.</span>
                </h1>
                
                <div className="w-full md:w-3/4">
                    <p className="text-gray-400 mt-6 md:mt-8 text-base md:text-lg">
                        Antools is a web collection of information on paid or free Design and Development tools
                    </p>
                    
                    <div className="mt-8 md:mt-12">
                        <SearchForm placeholder="Search for tools" />
                    </div>
                </div>
                
                <div className="mt-12 md:mt-24 flex gap-4 justify-center md:justify-start">
                    <SocialMediaLink icon={<Facebook size={24} />} href="https://www.facebook.com" />
                    <SocialMediaLink icon={<Instagram size={24} />} href="https://www.instagram.com" />
                    <SocialMediaLink icon={<Twitter size={24} />} href="https://www.twitter.com" />
                </div>
            </div>

            <div className="w-full md:w-1/2 mt-8 md:mt-0 px-4 md:px-8 order-1 md:order-2">
                <img 
                    src={bgImage}
                    alt="Development tools" 
                    className="w-full h-auto rounded-lg md:rounded-sm max-w-md mx-auto md:max-w-full"
                />
            </div>
        </div>
    );
}

export default Hero;