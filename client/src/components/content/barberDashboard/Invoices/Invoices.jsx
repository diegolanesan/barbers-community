import React from 'react'

const InvoicesDash = () => {
    return (
        <div className='flex flex-col' >
            <span className='flex h-1/3 w-full justify-center underline font-bold'>Today's Appointments</span>
            <div className='flex h-1/3 w-full justify-center ' >
                <table className='w-11/12' >
                    <tr>
                        <th className='border-solid border-2 border-black' >#</th>
                        <th className='border-solid border-2 border-black' >Details</th>
                        <th className='border-solid border-2 border-black' >Status</th>
                        <th className='border-solid border-2 border-black' >Name</th>
                        <th className='border-solid border-2 border-black' >N° Service</th>
                        <th className='border-solid border-2 border-black' >Action</th>
                    </tr>
                </table>
            </div>
            <span className='flex h-1/3 w-full justify-center  underline font-bold'>Invoices</span>
            <div className='flex flex-col h-2/3 w-full' >
                <table className='self-center w-11/12' >
                    <tr>
                        <th className='border-solid border-2 border-black' >#</th>
                        <th className='border-solid border-2 border-black' >Details</th>
                        <th className='border-solid border-2 border-black' >Status</th>
                        <th className='border-solid border-2 border-black' >Name</th>
                        <th className='border-solid border-2 border-black' >N° Service</th>
                        <th className='border-solid border-2 border-black' >Checkout</th>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default InvoicesDash;