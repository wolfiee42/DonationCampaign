import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex flex-col gap-5 md:flex-row md:gap-0 justify-between items-center my-5">
            <div>
                <img src="https://i.ibb.co/6NMHqPt/Logo.png" alt="" />
            </div>
            <div className="flex justify-center items-center gap-10 text-lg font-medium ">
                <NavLink to={'/'} style={({ isActive }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? 'red' : 'black',
                        textDecoration: isActive ? 'underline' : ''
                    };
                }}>Home</NavLink>
                <NavLink to={'/donation'} style={({ isActive }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "red" : "black",
                        textDecoration: isActive ? 'underline' : ''
                    };
                }}>Donation</NavLink>
                <NavLink to={'/statistics'} style={({ isActive }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "red" : "black",
                        textDecoration: isActive ? 'underline' : ''
                    };
                }}>Statistics</NavLink>
            </div>
        </div>
    );
};

export default Navbar;