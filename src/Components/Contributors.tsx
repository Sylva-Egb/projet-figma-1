import SearchForm from "./SearchForm"

function Contributors() {
    return (
        <div className="bg-black text-white pb-10 pt-32">
            <div className="flex justify-center flex-col items-center mb-10">
                <h1 className="text-4xl mb-4 font-bold">Become A Contributor?</h1>
                <span>Join us and get tips & tricks to become a better</span>
                <span>Designer and Developer</span>
            </div>

            <div className="flex justify-center">
                <SearchForm icon={false} placeholder="Enter your mail" />
            </div>
        </div>
    )
}

export default Contributors