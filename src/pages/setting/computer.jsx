import { Outlet, Link }from "react-router-dom";

export default function computer() {
    return (
        <div className="flex">
            <div className="">ini adalah computer</div>
            <div className="flex flex-row mr-5 space-5">
                <Link className="mr-1" to="/setting/computer/apple">Apple</Link>
                <Link className="mr-1" to="/setting/computer/asus">Asus</Link>
                <Link to="/setting/computer/lenovo">Lenovo</Link>
            </div>
            <div className="flex justify-center rounded-b-lg border-4 hover:border-t-4 border-gray-900 bg-gray-500 w-60 h-40">
                <Outlet />
            </div>
        </div>

    )
}