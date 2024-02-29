import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from '../App'
import Main from '../components/Dashboard/Main'
import Employee from '../pages/Employee/Employee'
import AddEmployee from '../pages/Employee/AddEmployee'
import Attendance from '../pages/Attendance/Attendance'
import LeaveForm from "../pages/Leave/Leave"
import Department from '../pages/Setting/Department/Department'
import Designation from '../pages/Setting/Designation/Designation.jsx'

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    
                    <Route path="/" element={<App />}>
                        <Route index element={<Main />} />
                    </Route>
                    <Route path="/dashboard" element={<App />}>
                        <Route index element={<Main />} />
                    </Route>
                    <Route path="/employee" element={<App />}>
                        <Route index element={<Employee />} />
                    </Route>

                    <Route path="/attendance" element={<App />}>
                        <Route index element={<Attendance />} />
                    </Route>

                    <Route path="/leave" element={<App />}>
                        <Route index element={<LeaveForm/>} />
                    </Route>
                  
                    <Route path="/add-employee" element={<App />}>
                        <Route index element={<AddEmployee />} />
                    </Route>

                    <Route path="/setting/department" element={<App />}>
                        <Route index element={<Department />} />
                    </Route>

                    <Route path="/setting/designation" element={<App />}>
                        <Route index element={<Designation />} />
                    </Route>

                 
                
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router