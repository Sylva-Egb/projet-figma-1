import figma from "../assets/diamant.png"

function Sponsors () {
    return (
        <div className="bg-black text-white py-20">
            <div className="pt-6 max-w-full rounded-2xl overflow-hidden mx-24
            bg-white/5 backdrop-blur-md border border-white/10 
            transition-all duration-500 ease-in-out 
            bg-gradient-to-tr from-orange-500/20 to-transparent p-6 shadow-lg">
                <div className="flex items-center justify-center mb-4">
                    <p className="font-semibold text-base text-white">Trusted More than 150+ brand</p>
                </div>
        
                <div className="flex items-center justify-center mb-4">
                    <img className="w-14 h-14 object-contain mr-3" src={figma} alt="figma" />
                    <img className="w-14 h-14 object-contain mr-3" src={figma} alt="figma" />
                    <img className="w-14 h-14 object-contain mr-3" src={figma} alt="figma" />
                    <img className="w-14 h-14 object-contain mr-3" src={figma} alt="figma" />
                </div>
            </div>
        </div>
    )
}

export default Sponsors