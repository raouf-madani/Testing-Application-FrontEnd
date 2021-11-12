import React from 'react'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Input  } from 'reactstrap';
import {  CaretDownOutlined, CloseCircleFilled, PlusCircleFilled, GooglePlusCircleFilled } from '@ant-design/icons';
const Listeetapes = () => {

  const Etapeslist = () => {
    return(
          <div className="leftside-container">
              <div className="flex-div">  
              <CloseCircleFilled className="xbutton" />
              <label style={{textAlign:"center", backgroundColor:"white",color:"black", margin:"5px", padding:"2px", 
                      boxShadow:"inset 0px 0px 0px 1px #549af6", color:"#0d8975", width:"100%"}}>Bornes</label>
              </div>
              <div className="flex-div">  
              <CloseCircleFilled className="xbutton" />
              <label style={{textAlign:"center", backgroundColor:"white",color:"black", margin:"5px", padding:"2px", 
                      boxShadow:"inset 0px 0px 0px 1px #549af6", color:"#0d8975", width:"100%"}}>Ratio</label>
              </div>
              <div className="flex-div">  
              <CloseCircleFilled className="xbutton" />
              <label style={{textAlign:"center", backgroundColor:"white",color:"black", margin:"5px", padding:"2px", 
                      boxShadow:"inset 0px 0px 0px 1px #549af6", color:"#0d8975", width:"100%"}}>Perte a charge</label>
              </div>
              
          </div>
          )
  }
  const EtapeDetails = () => {
    return(
     <>
                   <h4>Nom</h4>
                <div>
                    <label style={{backgroundColor:"white",color:"black", padding:"5px"}}>Special 3 phases</label>
                    <a href="#" style={{color:"#24a2a7", padding:"5px"}}>copier</a>
                    <a href="#" style={{color:"#24a2a7", padding:"5px"}}>supprimer</a>
                </div>
              <h4>Condition <GooglePlusCircleFilled /></h4>
                <div className="block-div" style={{backgroundColor:"#0e1133e0"}}>
                    <div className="flex-div">  
                    <CloseCircleFilled className="xbutton" />
                      <ButtonDropdown className="Dropdown" >
                        <DropdownToggle caret size="sm" color="info">
                         Modele
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                      <ButtonDropdown className="Dropdown" >
                        <DropdownToggle caret size="sm" color="info">
                         Egale
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                      <label style={{textAlign:"center", backgroundColor:"white",color:"black", margin:"5px", padding:"2px", borderRadius:"15%",
                      boxShadow:"inset 0px 0px 0px 1px #549af6", color:"#0d8975"}}>Special 3 phases</label>
                    </div>
                    <div className="flex-div" >  
                     <CloseCircleFilled className="xbutton"/>
                      <ButtonDropdown className="Dropdown" >
                        <DropdownToggle caret size="sm" color="info">
                          No Serie
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                      <ButtonDropdown className="Dropdown" >
                        <DropdownToggle caret size="sm" color="info">
                          Debute Par
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>

                      <label style={{textAlign:"center", backgroundColor:"white",color:"black", margin:"5px", padding:"2px", borderRadius:"15%",
                      boxShadow:"inset 0px 0px 0px 1px #549af6", color:"#0d8975"}}>Special 3 phases</label>
                     </div>
                    <a href="#" style={{color:"#24a2a7", padding:"5px"}}>Ajouter AND</a>
                    <div>
                  </div>
                </div>
              <h4>OR</h4>
              <div className="block-div" style={{backgroundColor:"#0e1133e0", width:"100%"}}>
                    <div className="flex-div">  
                    <CloseCircleFilled className="xbutton" />
                      <ButtonDropdown className="Dropdown" >
                        <DropdownToggle caret size="sm" color="primary">
                          Kva
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                      <ButtonDropdown className="Dropdown" >
                        <DropdownToggle caret size="sm" color="primary">
                          Entre
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                      <label style={{textAlign:"center", backgroundColor:"white",color:"black", margin:"5px", padding:"2px", width:"40%", borderRadius:"15%",
                      boxShadow:"inset 0px 0px 0px 1px #549af6", color:"#1071f2"}}>2</label>
                      ET
                      <label style={{textAlign:"center", backgroundColor:"white",color:"black", margin:"5px", padding:"2px", width:"40%", borderRadius:"15%",
                      boxShadow:"inset 0px 0px 0px 1px #549af6", color:"#1071f2"}}>72</label>
                    </div>
                    <a href="#" style={{color:"#24a2a7", padding:"5px"}}>Ajouter AND</a>
                    <div>
                  </div>
                </div>
     </>
    )
  }

  const SousEtape = () => {
    return (
      <>
      <div className="block-div" style={{backgroundColor:"#0e1133e0", width:"100%"}}>
       <div className="flex-div">  
        <h2>Titre</h2>

                   <br/><br/><br/><br/>
                   <br/><br/><br/><br/>
                   <br/><br/>
       </div>
      </div>
      </>
    )
  }

    return (
        <div className="editeur-page">
        <div className=" row editeur-container " >
         <div className=" col-md-3 col-lg-4 leftside ">
          <div className="leftheader">
            <h4>etapes</h4>
            <PlusCircleFilled className="plusbutton" />
          </div> 
          <Etapeslist/>
        </div>
        <div className="row rightside col-md-9 col-lg-8 " style={{width:"100%"}}>
            <div style={{ width:"100%"}}>
              <EtapeDetails/>
                <br/>
              <SousEtape/>
            </div>
          
        </div>
        </div>
        </div>
    )
}

export default Listeetapes
