import { Component } from 'react';
import NavbarLogo from './atoms/NavbarLogo';
import NavbarNavs from './molecules/NavbarNavs';
import NavbarItem from './atoms/NavbarItem';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            links: [
                {
                    name: "Home",
                    url: "#"
                },
                {
                    name: "About",
                    url: "#"
                },
                {
                    name: "Services",
                    url: "#"
                },
                {
                    name: "Contact",
                    url: "#"
                }
            ]
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
                <NavbarLogo/>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        {this.state.links.map(element => 
                            NavbarItem({ name: element.name, link: element.url })
                        )}
                    </ul>
                </div>
            </nav>
        );
    }
};

export default Navbar;