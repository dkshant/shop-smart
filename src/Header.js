import { Link, NavLink } from 'react-router-dom';

function Header(){
    return(
        <header className="site-header">
            <div className="container">
                <div className="hgroup-wrap">
                    <div className="site-logo">
                        <Link to='/'>Shop Smart</Link>
                    </div>
                    <div className="navigation">
                        <ul>
                            <li>tea collections</li>
                            <li>accessories</li>
                            <li><NavLink to='/blogs'>blogs</NavLink></li>
                            <li><NavLink to='/contact'>contact us</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;