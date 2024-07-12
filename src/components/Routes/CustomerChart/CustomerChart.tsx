import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ICustomer, ITransaction } from '../../../../types';
import axios from 'axios';
import { ResponsiveCalendar, ResponsiveTimeRange } from '@nivo/calendar'
import { Calendar, MoveLeft, User, UserRound } from 'lucide-react';

interface IProps {

}

const CustomerChart = ({ }: IProps) => {
    const [customer, setCustomer] = useState<ICustomer[]>([]);
    const [transactions, setTransactions] = useState<ITransaction[]>([]);

    const { id } = useParams();
    const getCustomer = async () => {
        const { data } = await axios.get(`http://localhost:3000/customers?id=${id}`);
        setCustomer(data)
    }

    const getCustomerTransactions = async () => {
        const { data } = await axios.get(`http://localhost:3000/transactions?customer_id=${id}`);
        setTransactions(data)
    }

    const data = transactions.map((trans: ITransaction) => {
        return { "day": trans.date, "value": trans.amount }
    })

    const colors = ['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560'];

    useEffect(() => {
        getCustomer()
        getCustomerTransactions()
    }, []);
    console.log(customer);

    return (
        <>
            <h2 className='text-center text-[40px] font-extrabold pt-8 flex items-center justify-center'>
                <span>({customer[0]?.name}) Treansactions Chart</span>
                <Link
                    className="group mx-4 relative inline-flex items-center overflow-hidden rounded px-8 py-3 text-white bg-sky-600 focus:outline-none focus:ring active:bg-sky-500"
                    to="/"
                >
                    <span className="absolute -start-full transition-all group-hover:start-4">
                        <MoveLeft />
                    </span>

                    <span className="text-sm font-medium transition-all group-hover:ms-4"> Back Home </span>
                </Link>
            </h2>
            <div className='h-[350px] w-[90%] mx-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <ResponsiveTimeRange
                    data={data}
                    from="2021-12-30"
                    to="2022-12-30"
                    emptyColor="#eeeeee"
                    colors={colors}
                    margin={{ top: 40, right: 40, bottom: 50, left: 40 }}
                    dayBorderWidth={2}
                    dayBorderColor="#ffffff"
                    tooltip={e => {
                        return (
                            <div className='bg-white p-1 w-[180px] h-[35px] rounded-md'>
                                <div className='flex items-center w-full h-full'>
                                    <span className={`block mr-[7px]`}>
                                        <Calendar size={"18px"} />
                                    </span>
                                    {e.day}: <span className='block px-1'></span> <strong>{e.value}$</strong>
                                </div>
                            </div>
                        )
                    }}
                    legends={[
                        {
                            anchor: 'bottom',
                            direction: 'row',
                            justify: false,
                            itemCount: 4,
                            itemWidth: 42,
                            itemHeight: 36,
                            itemsSpacing: 14,
                            itemDirection: 'right-to-left',
                            translateX: -60,
                            translateY: -60,
                            symbolSize: 20
                        }
                    ]}
                />
            </div>
        </>
    )
}

export default CustomerChart