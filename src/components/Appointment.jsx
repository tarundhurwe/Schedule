import React from 'react'
import "../assets/css/Appointment.css"

function Appointment({ value, onDelete }) {
    // name, email, phone number, time
    return (
        <>
            <div className="max-w-sm p-6 mb-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{ minWidth: '25rem' }}>
                <div className="flex justify-between">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Name: </h3>
                    <h3 className="text-l text-gray-900 dark:text-white">{value.firstName} {value.lastName}</h3>
                </div>
                <hr />
                <div className="flex justify-between">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Email: </h3>
                    <h3 className="text-l text-gray-900 dark:text-white">{value.email}</h3>
                </div>
                <hr />
                <div className="flex justify-between">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Phone No.: </h3>
                    <h3 className="text-l text-gray-900 dark:text-white">{value.phoneNo}</h3>
                </div>
                <hr />
                <div className="flex justify-between">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Date: </h3>
                    <h3 className="text-l text-gray-900 dark:text-white">{value.date}</h3>
                </div>
                <hr />
                <div className="flex justify-between">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Time: </h3>
                    <h3 className="text-l text-gray-900 dark:text-white">{value.time}</h3>
                </div>

                <br />
                <div className="flex justify-between">
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900">Edit</button>
                    <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={() => { onDelete(value) }}>Delete</button>
                </div>
            </div>
        </>
    )
}

export default Appointment