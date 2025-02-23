import { Button } from "@/components/ui/button"
import { toggleSidebar } from "@/lib/store/slice/uiSlice"
import { Menu } from "lucide-react"
import { useDispatch } from "react-redux"
import Logo from "@/assets/Logo.svg"

const Navbar: React.FC = () => {

    const dispatch = useDispatch()

    const handleSidebar = () => {
        dispatch(toggleSidebar())
    }

    return (
        <div className="flex justify-between border-s-0 items-center border p-4 h-[79px]">
            <div className="flex items-center gap-4">
                <Button onClick={() => handleSidebar()} variant={"ghost"}><Menu /></Button>
                <img className="pb-2" src={Logo} width={100} alt="HustleHive" />
            </div>
            <Button className="text-sm font-medium py-1 px-3">LOG OUT</Button>
        </div>
    )
}

export default Navbar