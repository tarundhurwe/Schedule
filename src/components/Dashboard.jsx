import React from 'react'
import AddAppointmentForm from './AddAppointmentForm'
import Appointment from './Appointment'

function Dashboard({ addSchedule }) {
    return (
        <>
            <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" className="block text-white mt-10 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" type="button" style={{ margin: "auto", marginTop: "5rem" }}>
                <strong className="font-semibold text-white flex">
                    Add Appointment
                    <svg className="w-4 h-4 text-white ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                    </svg>
                </strong>
            </button>

            <AddAppointmentForm addSchedule={addSchedule} />
            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    <div className="flex flex-wrap mb-4 justify-center" style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-evenly"
                    }}>
                        <Appointment />
                        <Appointment />
                        <Appointment />
                        <Appointment />
                        <Appointment />
                        <Appointment />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard