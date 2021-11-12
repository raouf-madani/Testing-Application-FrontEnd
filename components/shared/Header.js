import React, {useState} from 'react';
import Modalnewtest from '@/components/modals/newtest/scanmodal';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  NavLink,
  UncontrolledDropdown,
} from 'reactstrap';
import Link from 'next/link';
import Typed from 'react-typed';
import {isAuthorized} from '@/utils/auth0';

const Bslink = props => {
  const {title, url, className = 'navlink', ontoggle} = props;
  return (
    <Link href={url}>
      <a
        className={`nav-link port-navbar-link ${className}`}
        onClick={ontoggle}>
        {title}
      </a>
    </Link>
  );
};
const Login = () => {
  return (
    <NavLink className="login" href="/api/V1/login">
      Log in
    </NavLink>
  );
};
const Logout = () => {
  return (
    <NavLink className="logout" href="/api/V1/logout">
      Log out
    </NavLink>
  );
};
const AdminMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dropdown
      className="port-navbar-link port-dropdown-menu"
      nav
      isOpen={isOpen}
      toggle={() => setIsOpen(!isOpen)}>
      <DropdownToggle className="port-dropdown-toggle" nav caret>
        Admin
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem>
          <Bslink
            className="port-dropdown-item"
            url="/portfolios/new"
            title="Test1"
          />
        </DropdownItem>
        <DropdownItem>
          <Bslink
            className="port-dropdown-item"
            url="/blogs/editor"
            title="Test2"
          />
        </DropdownItem>
        <DropdownItem>
          <Bslink
            className="port-dropdown-item"
            url="/blogs/dashboard"
            title="Test3"
          />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
const Header = ({user, loading, classNameheader}) => {
  const [isOpen, setIsOpen] = useState(false);
  const Roles = ['Actif Depuis 13h30:22'];
  const [modal, setModal] = useState(false);
  const toggle1 = () => setModal(!modal);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        className={`port-navbar port-default absolute Navbar`}
        dark
        expand="md">
        <NavbarBrand href="/">
          {' '}
          <span className="siemens">Siemens</span>{' '}
          <span className="energy">Energy</span>
        </NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavbarText>Application d'essai</NavbarText>
          </NavItem>
        </Nav>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="port-navbar-item">
              <Bslink title="Accueil" url="/" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <Bslink
                title="New Test"
                url="/newtest"
                ontoggle={() => toggle1}
              />
            </NavItem>
            <Modalnewtest modal={modal} toggle={toggle1} />
            {user && isAuthorized(user, 'admin') && (
              <>
                <NavItem className="port-navbar-item">
                  <Bslink title="Editeur" url="/editeur" />
                </NavItem>
              </>
            )}
            <NavItem className="port-navbar-item">
              <Bslink title="Rapports" url="/rapports" />
            </NavItem>
          </Nav>
          <Nav className="mr-auto">
            {/* {user && (
                  <Typed
                    loop
                    style={{ fontSize: "18px", 
                    fontFamily: "Roboto Mono" }}
                    strings={Roles}
                    typeSpeed={70}
                    backSpeed={70}
                    backDelay={1000}
                    loopCount={0}
                    showCursor
                    className="self-typed"
                    cursorChar="|"
                  />)}
                  */}
          </Nav>
          {!loading && (
            <>
              {user && (
                <>
                  <UncontrolledDropdown className="dropdown">
                    <DropdownToggle>
                      {user.given_name} {user.family_name}
                    </DropdownToggle>
                    <DropdownMenu right>
                      {isAuthorized(user, 'admin') && (
                        <h4 className="admintext">Admin</h4>
                      )}
                      {isAuthorized(user, 'guest') && (
                        <h4 className="admintext">Technicien</h4>
                      )}
                      {/* <DropdownItem> Option 2 </DropdownItem> */}
                      <DropdownItem divider />
                      <DropdownItem>
                        <span>
                          <Logout />
                        </span>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </>
              )}
              {!user && <Login />}
            </>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
