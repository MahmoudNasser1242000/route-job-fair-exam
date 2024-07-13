import { MoveLeft } from "lucide-react"
import { Link } from "react-router-dom"

const PageNotFound = () => {
    return (
        <>
            <div className="grid h-screen place-content-center bg-white px-4">
                <div className="text-center">
                    <h1 className="text-9xl font-black text-gray-200">404</h1>

                    <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</p>

                    <p className="mt-4 text-gray-500">We can't find that page.</p>

                    <Link
                        className="group mx-4 my-6 relative inline-flex items-center overflow-hidden rounded px-[30px] py-3 text-white bg-sky-600 focus:outline-none focus:ring active:bg-sky-500"
                        to="/"
                    >
                        <span className="absolute -start-full transition-all group-hover:start-4">
                            <MoveLeft/>
                        </span>

                        <span className="text-sm font-medium transition-all group-hover:ms-4">Go Back Home</span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default PageNotFound