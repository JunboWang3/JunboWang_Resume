
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="line"></div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', }}>
                <div className="navButton">
                    <a className="navLink" href="#/">HOME</a>
                </div>
            </div>
            <div className="line"></div>
        </nav>
    );
}

export default Navbar;