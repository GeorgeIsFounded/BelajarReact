import { Outlet, Link } from "react-router-dom";

export default function Setting(){
    return (
        <div class="grid grid-cols-8 border" >
            <section class="space-y-5 col-span-1 flex flex-col">
                <Link to="/setting/phone">phone</Link>
                <Link to="/setting/profile">profile</Link>
                <Link to="/setting/computer">computer</Link>
            </section>
        </div>
    )
}