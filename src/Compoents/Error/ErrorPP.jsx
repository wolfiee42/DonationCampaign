import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="flex justify-center my-40">
            <div>
                <h1 className="text-center text-3xl">Oops!</h1>
                <p className="text-xl my-3">Sorry, an unexpected error has occurred.</p>
                <Link to={'/'} className="flex justify-center my-5">
                    <button className=" px-4 py-2 bg-red-500 text-white rounded-md font-medium">Home</button>
                </Link>
            </div>
        </div>
    );
}