import React, {useState} from 'react';
import Image from 'next/image';
import Modalnewtestscanner from '@/components/modals/newtest/scannermodal';

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
  NavLink,
  UncontrolledDropdown,
} from 'reactstrap';
import {Modal, Button} from 'antd';
import Link from 'next/link';
import {isAuthorized} from '@/utils/auth0';
const {confirm} = Modal;

// function AnnulerConfirm() {
//   confirm({
//     title: "etes vous sur d'annuler le test Courant?",
//     onOk() {
//       console.log('ok');
//     },
//     onCancel() {
//       console.log('Cancel');
//     },
//   });
// }

const Bslink = props => {
  const {title, url, className = 'navlink', ontoggle, status} = props;
  return (
    <Link style={{PointerEvent: 'default'}} href={url}>
      <a
        disabled={status > 0 && true}
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
    <>
      <NavLink className="logout" href="/api/V1/logout">
        Log out
      </NavLink>
    </>
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
const Header = ({user, loading, classNameheader, status, AnnulerConfirm}) => {
  const [isOpen, setIsOpen] = useState(false);
  const Roles = ['Actif Depuis 13h30:22'];
  const [modal, setModal] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        className={`port-navbar port-default absolute Navbar`}
        dark
        expand="md">
        {status == 0 ? (
          <NavbarBrand href="/">
            <Image
              src="/SE_Logo_White_RGB.svg"
              height="45px"
              width="130px"
              alt="se-logo"
            />
          </NavbarBrand>
        ) : (
          <>
            <NavbarBrand onClick={AnnulerConfirm}>
              {' '}
              <Image
                src="/SE_Logo_White_RGB.svg"
                height="45px"
                width="130px"
                alt="se-logo"
              />
            </NavbarBrand>
          </>
        )}

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="port-navbar-item">
              <Bslink
                title="Accueil"
                url={status > 0 ? '#' : '/'}
                status={status}
              />
            </NavItem>
            <NavItem className="port-navbar-item">
              <Bslink
                title="Nouveau test"
                url="#"
                ontoggle={status < 1 ? () => setModal(!modal) : AnnulerConfirm}
                status={status}
              />
            </NavItem>
            <Modalnewtestscanner
              modal={modal}
              toggle={() => setModal(!modal)}
              direction="index"
            />
            {user && isAuthorized(user, 'admin') && (
              <>
                <NavItem className="port-navbar-item">
                  <Bslink
                    title="Editeur"
                    url={status > 0 ? '#' : '/editeur'}
                    status={status}
                  />
                </NavItem>
              </>
            )}
            <NavItem className="port-navbar-item">
              <Bslink
                title="Rapports"
                url={status > 0 ? '#' : '/rapports'}
                status={status}
              />
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
                    <DropdownToggle>{user.nickname}</DropdownToggle>
                    <DropdownMenu right>
                      {isAuthorized(user, 'admin') && (
                        <>
                          <h4 className="admintext">Admin</h4>
                          <DropdownItem>
                            <span>
                              <NavLink className="logout" href="/pilote">
                                Pilote
                              </NavLink>
                            </span>
                          </DropdownItem>
                        </>
                      )}
                      {isAuthorized(user, 'guest') && (
                        <h4 className="admintext">Technicien</h4>
                      )}
                      {/* <DropdownItem> Option 2 </DropdownItem> */}
                      <DropdownItem divider />

                      <DropdownItem>
                        <span>
                          <Logout
                            status={status}
                            AnnulerConfirm={AnnulerConfirm}
                          />
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
