import Navbar from "@/components/common/Navbar"
import Sidebar from "@/components/common/Sidebar"
import { Outlet } from "react-router-dom"

const Layout: React.FC = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full">
                <Navbar />
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout