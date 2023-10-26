import  {Bar, Title, MenuWrapper, MenuItem} from "./NavbarStyle"

const Navbar = () => {
    return (
        <Bar>
            <Title>My Learning Platform</Title>
            <MenuWrapper>
                <MenuItem>Home</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Contacts</MenuItem>
            </MenuWrapper>
        </Bar>
    )
}

export default Navbar;