import React from 'react'
import { Outlet } from "react-router"

const AdminLayout = () => {
    return (
        <div className="admin-layout">
            AdminLayout
            <div className="children">
                <Outlet />
            </div>
        </div>
    )
}
export default AdminLayout
