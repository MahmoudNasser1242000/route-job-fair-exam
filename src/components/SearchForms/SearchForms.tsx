import React, { useState } from 'react'

interface IProps {
    searchAmountSubmit: (e: React.FormEvent<HTMLFormElement>, amountValue: string)=> void,
    searchNameSubmit: (e: React.FormEvent<HTMLFormElement>, name: string)=> void,
    getCustomers: (name: string)=> void
}

const SearchForms = ({ searchAmountSubmit, searchNameSubmit }: IProps) => {
    const [amount, setAmount] = useState<string>("");
    const [name, setName] = useState<string>("");
    return (
        <div className='flex justify-evenly flex-wrap md:space-y-0 space-y-4 align-middle mt-16'>
            <form className='lg:w-[40%] md:w-[45%] w-full' onSubmit={(e) => { searchNameSubmit(e, name) }}>
                <div className="relative">
                    <label htmlFor="Search" className="sr-only"> Search </label>

                    <input
                        onChange={(e) => { setName(e.target.value) }}
                        value={name}
                        type="text"
                        id="Search"
                        placeholder="Search for..."
                        className="w-full rounded-md text-slate-950 border-gray-200 focus:ring-0 focus:border-[#050708]/60 focus:border-2 py-2.5 pe-10 shadow-sm sm:text-sm"
                    />

                    <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                        <div className="text-gray-600 hover:text-gray-700">
                            <span className="sr-only">Search</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                />
                            </svg>
                        </div>
                    </span>
                </div>
                <button type="submit" className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 my-2">
                    Search with name
                </button>
            </form>

            <form className='lg:w-[40%] md:w-[45%] w-full' onSubmit={(e) => { searchAmountSubmit(e, amount) }}>
                <div className="relative">
                    <label htmlFor="Search" className="sr-only"> Search </label>

                    <input
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setAmount(e.target.value) }}
                        value={amount}
                        type="number"
                        id="Search"
                        placeholder="Search for..."
                        className="w-full rounded-md text-slate-950 border-gray-200 focus:ring-0 focus:border-[#050708]/60 focus:border-2 py-2.5 pe-10 shadow-sm sm:text-sm"
                    />

                    <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                        <div className="text-gray-600 hover:text-gray-700">
                            <span className="sr-only">Search</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                />
                            </svg>
                        </div>
                    </span>
                </div>
                <button type="submit" className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 my-2">
                    Search with amount
                </button>
            </form>
        </div>
    )
}

export default SearchForms