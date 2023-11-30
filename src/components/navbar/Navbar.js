import  {Bar, Title, MenuWrapper, MenuItem } from "./NavbarStyle"
const Navbar = () => {
    return (
        <Bar>
            <Title>My Learning Platform</Title>
            <MenuWrapper>
                <MenuItem href="#">Home</MenuItem>
                <MenuItem href="#">Home</MenuItem>
                <MenuItem href="#">Home</MenuItem>
                <MenuItem href="#">Home</MenuItem>
                <MenuItem href="#">Home</MenuItem>
                {/* <MenuItem to="">Home</MenuItem>
                <MenuItem to="t">About</MenuItem>
                <MenuItem to="">Contacts</MenuItem> */}
            </MenuWrapper>
        </Bar>
    )
}

export default Navbar;