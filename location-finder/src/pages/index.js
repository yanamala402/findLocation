import { Outlet } from "react-router-dom";
import PageIndex from "../components/PageIndex";
import '../css-styling/index.css';

export default function Index() {
    return (
        <>
            <nav className="nav-bar">
                <PageIndex />
            </nav>
            <body className="nav-body">
                <Outlet />
            </body>
            <foooter>

            </foooter>
        </>
    )
}