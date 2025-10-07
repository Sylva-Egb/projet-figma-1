import sketch from "../assets/diamant.png"
import figma from "../assets/figma.png"
import invision from "../assets/invision.png"
import Card from "./Card"
import Button from "./Button"

function PopularTools() {
    return (
        <div className="bg-black text-white py-10">
            <div className="flex justify-center flex-col items-center">
                <h1 className="text-4xl mb-4 font-bold">Most Popular Tools</h1>
                <span>Tools for the best Designers and Developers</span>
                <span>most popularly used in the world</span>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-8 justify-center px-8">
                <Card img={figma} alt="figma" title="Figma" subtitle="Free" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." link="https://www.figma.com" />
                <Card img={sketch} alt="sketch" title="Sketch" subtitle="Design" description="Lorem dolor sit amet consectetur adipisicing elit." link="https://www.sketch.com" />
                <Card img={invision} alt="invision" title="Invision" subtitle="Design" description="Lorem dolor sit amet consectetur adipisicing elit." link="https://www.invisionapp.com" />
                <Card img={figma} alt="figma" title="Figma" subtitle="Design" description="Lorem dolor sit amet consectetur adipisicing elit." link="https://www.figma.com" />
                <Card img={sketch} alt="sketch" title="Sketch" subtitle="Design" description="Lorem dolor sit amet consectetur adipisicing elit." link="https://www.sketch.com" />
                <Card img={invision} alt="invision" title="Invision" subtitle="Design" description="Lorem dolor sit amet consectetur adipisicing elit." link="https://www.invisionapp.com" />
            </div>

            <div className="flex justify-center mt-8">
                <Button text="learn more" backgroundColor="black" buttonClassName="text-orange-500 border border-gray-900" />
            </div>
        </div>
    )
}

export default PopularTools