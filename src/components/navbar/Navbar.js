import  {Bar, Title, MenuWrapper, MenuItem} from "./NavbarStyle"

const Navbar = () => {
    return (
        <Bar>
            <Title>My Learning Platform</Title>
            <MenuWrapper>
                <MenuItem to="/home">Home</MenuItem>
                <MenuItem to="/about">About</MenuItem>
                <MenuItem to="/contacts">Contacts</MenuItem>
            </MenuWrapper>
        </Bar>
    )
}

export default Navbar;