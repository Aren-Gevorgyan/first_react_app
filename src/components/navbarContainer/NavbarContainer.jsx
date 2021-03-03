import Navbar from './navbar/Navbar';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
         menuItem: state.navbar,
    }
}

const NavbarContainer = connect(mapStateToProps, "")(Navbar);

export default NavbarContainer;