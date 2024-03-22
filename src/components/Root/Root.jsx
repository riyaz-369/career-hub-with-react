import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Footer>a</Footer>
        </div>
    );
};

export default Root;