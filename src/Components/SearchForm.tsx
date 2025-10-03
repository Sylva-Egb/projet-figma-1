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
        <form className="flex items-center border border-transparent rounded-md p-4" onSubmit={onSubmit}>
            {icon && <Search className="mr-2" />}
            <input className="rounded-md w-full" placeholder={placeholder} onChange={onSearch} value={value} />
            <Button text="Search" backgroundColor="blue" buttonClassName="ml-2" onClick={onSearch} />
        </form>
    )
}

export default SearchForm