import { Outlet, Link, Navigate, useNavigate, useLocation } from "react-router-dom";

export default function Setting() {

    let location = useLocation()

    let navigate = useNavigate()

    let path = location.pathname.split("/")[1];

    console.log('location =>', location)
    return (
        <div class="grid grid-cols-8 border" >
            <section class="space-y-5 col-span-1 flex flex-col">
                <Link to={`/${path}/phone`}>phone</Link>
                <Link to={`/${path}/profile`}>profile</Link>
                <Link to={`/${path}/computer`}>computer</Link>
                <section>

                </section>
                <section className="col-span-7 bg-green-200 h-44 w-96 ">
                    <Outlet />
                </section>
                <button 
                className="border rounded-lg border-black"
                onClick={() => {
                    return navigate(-1)
                }}>{" "}Back</button>
            </section>
        </div>
    )
}