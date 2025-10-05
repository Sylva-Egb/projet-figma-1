import Button from "./Button";
import figma from "../assets/figma.png"
import Card from "./Card";

function NewComer() {
    return (
        <div className="flex min-h-screen bg-black text-white px-20">
            <div className="flex flex-col w-1/2 pl-8 mt-10">
                <h1 className="text-4xl font-bold text-white">Newcomer Tools</h1>
                <div className="w-3/4">
                    <p className="text-gray-600 mt-8">Wow see the latest update of the most</p>
                    <p className="text-gray-600">recommanded tools from reliable designers</p>
                    <p className="text-gray-600">and developers</p>
                    <div className="mt-8">
                        <Button text="Explore more" backgroundColor="orange-500" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
                <Card img={figma} alt="figma" title="Figma" subtitle="Free" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." link="https://www.figma.com" />
                <Card img={figma} alt="figma" title="Figma" subtitle="Free" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." link="https://www.figma.com" />
                <Card img={figma} alt="figma" title="Figma" subtitle="Free" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." link="https://www.figma.com" />
                <Card img={figma} alt="figma" title="Figma" subtitle="Free" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." link="https://www.figma.com" />
            </div>
        </div>
    );
}

export default NewComer;