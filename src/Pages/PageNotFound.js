import { Link } from "react-router-dom"

const PageNotFound = () => {
    return (
        <div className="p-5 flex  justify-center items-center">
            <div className="text-[#FEF4EA] max-w-3xl">
                <h1 className="text-center text-2xl font-semibold mt-10 md:text-7xl md:mt-40">
                    404! Page Not found
                </h1>

                <div className="flex flex-col sm:flex-row justify-center items-center mt-10 gap-5">
                    <Link to='/'>
                        <div>
                            <h2 className="border rounded-sm text-center py-2 px-5 ">
                                Go to Registration Page
                            </h2>
                        </div>
                    </Link>

                    <Link to='/verification'>
                        <div>
                            <h2 className="border rounded-sm text-center py-2 px-5 ">
                                Go to Verification Page
                            </h2>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound