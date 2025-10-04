import Button from "./Button"
import { Search } from "lucide-react"

interface SearchFormProps{
    icon ?: boolean
    placeholder ?: string
    onSearch ?: () => void
    value ?: string
    onSubmit ?: () => void
}

const SearchForm : React.FC<SearchFormProps> = ({ icon = true, placeholder, onSearch, value, onSubmit }) => {
    return (
        <div className="bg-gray-900 rounded-lg">
            <form className="flex items-center border border-transparent rounded-md p-2 backdrop-blur-md" onSubmit={onSubmit}>
                {icon && <Search className="mr-2" />}
                <input className="rounded-md w-full" placeholder={placeholder} onChange={onSearch} value={value} />
                <Button text="Search" backgroundColor="orange-500" buttonClassName="ml-2" onClick={onSearch} />
            </form>
        </div>
    )
}

export default SearchForm