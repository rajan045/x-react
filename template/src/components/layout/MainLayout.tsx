import { Header } from "../Header"
import { Sidebar } from "../Sidebar"
import { Outlet, useLocation } from "react-router-dom"

export const MainLayout = () => {
    const location = useLocation();

    return (
        <div className='h-screen bg-white'>
            <Header />
            <div className='flex h-[calc(100vh-5rem)]'>
                <Sidebar />
                <div className='flex-1 bg-[#F3F4F7] p-6 overflow-y-auto ml-[68px]'>
                        <div key={location.pathname} className="min-h-full">
                            <Outlet />
                        </div>
                </div>
            </div>
        </div>
    )
}