import { useSelector } from "react-redux"
import { Button } from "../ui/button"
import { RootState } from "@/lib/store/store"
import { PieChart, Globe, FolderDot, Mail,CircleUser } from "lucide-react"
import { Link } from 'react-router-dom';

const sidebarButtons = [
    {label: "Dashboard" ,icon: <PieChart/>, link: '/dashboard'},
    {label: "Browse" ,icon: <Globe/> , link: '/dashboard/browse'},
    {label: "Projects" ,icon: <FolderDot/>, link: '/dashboard/my-projects'},
    /* {label: "My Tasks" ,icon:<CheckCircle/>, link: '/dashboard/tasks'}, */
    {label: "Inbox" ,icon:<Mail/>, link: '/dashboard/inbox'},
    {label: "My Account" ,icon:<CircleUser/>, link: '/dashboard/inbox'}
]


const Sidebar: React.FC = () => {

    const isSidebarOpen = useSelector((state: RootState) => state.ui.isSidebarOpen)
    return (
        <div className={`flex gap-2 flex-col border-t-0 border w-[250px] h-screen transition-all ${ isSidebarOpen ? "sm:ms-0 ms-[-250px]" : "sm:ms-[-250px] ms-0" }`}>
            <div className="w-full h-[79px] border border-r-0"></div>
            <div className="flex flex-col py-10 gap-4">
                {sidebarButtons.map((item, i) => (
                    <Link to={item.link} key={i}>
                        <Button className="text-lg justify-start gap-2" variant={"ghost"} key={i}>{item.icon}{item.label}</Button>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Sidebar