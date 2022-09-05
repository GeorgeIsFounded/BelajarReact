import { Outlet, Link, navigate, useNavigate, useLocation } from "react-router-dom";

export default function Admin() {

  let location = useLocation()

  let navigate = useNavigate()

  return (
    <div className="grid grid-cols-5 gap-5 w-screen">
      <div className="col-span-1 ">
        <nav className="flex flex-col items-start">
          <Link to="/admin/Dashboard">dashboard</Link>
          <Link to="/admin/User">user</Link>
          <Link to="/admin/Kelas">kelas</Link>
        </nav>
      </div>
      <section className="col-span-7 h-44 w-96 ">
        <Outlet />
      </section>
      <div className="col-span-4 ">
        <button
          className="border-2 border-solid border-b-black rounded-lg px-5"
          onClick={() => {
            return navigate("/home")
          }}>Log Out</button>
      </div>
    </div>
  );
}