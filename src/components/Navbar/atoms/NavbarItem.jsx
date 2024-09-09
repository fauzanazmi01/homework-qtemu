const NavbarItem = ({name, link}) => {
    return (
        <li className="nav-item">
            <a className="nav-link" href={ link }>{name}</a>
        </li>
    )
}

export default NavbarItem;