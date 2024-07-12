import { ICustomer, ITransaction } from "../../../types/index.ts";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface IProps {
    customer: ICustomer;
    amount: string;
    index: number
}

const CustomersInfo = ({ customer, amount, index }: IProps) => {
    const [transactions, setTransactions] = useState<ITransaction[]>([]);
    const getTransactions = async (amount: string) => {
        const { data } = await axios.get(
            `http://localhost:3000/transactions?amount=${amount}`
        );
        setTransactions(data);
    };
    const customerTotalAmount: number = transactions
        ?.filter((trans: ITransaction) => +trans.customer_id === +customer.id)
        .reduce((curr: number, { amount }: { amount: number }) => {
            return curr + amount;
        }, 0);

    const clothestDate: number[] = transactions
        ?.filter((trans: ITransaction) => +trans.customer_id === +customer.id)
        .map((trans: ITransaction) => +new Date(trans.date).getTime());

    useEffect(() => {
        getTransactions(amount);
    }, [amount]);

    return (
        <>
            {
                customerTotalAmount ? (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {index + 1}
                        </th>
                        <Link to={`/customerChart/${customer.id}`}>
                            <td className="px-6 py-4">{customer.name}</td>
                        </Link>
                        <td className="px-6 py-4">
                            {clothestDate?.length &&
                                new Date(Math.max(...clothestDate)).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4">{customerTotalAmount}$</td>
                    </tr>
                ) : ""
            }
        </>
    );
};

export default CustomersInfo;
