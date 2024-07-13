
const TableSkeleton = () => {
    return (
        <>
            <tr role="status" className="w-full p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
                <td className="p-4">
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                </td>
                <td className="p-4">
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                </td>
                <td className="p-4">
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                </td>
                <td className="p-4">
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                </td>
                <td className="p-4">
                    <div className="h-10 w-16 bg-gray-300 rounded-md dark:bg-gray-700" />
                </td>
                <span className="sr-only">Loading...</span>
            </tr>
        </>
    )
}

export default TableSkeleton