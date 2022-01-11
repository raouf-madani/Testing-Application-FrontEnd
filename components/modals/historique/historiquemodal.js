import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Input,
} from 'reactstrap';
import React, {useState, useEffect} from 'react';
import Teststable from '@/components/tables/Historique/historiquetable';
import Modeltable from '@/components/tables/Historique/modeltable';
import Modelgraph from '@/components/modals/historique/graphiquetests';

const ModalLink = props => {
  const {
    modal,
    className,
    title,
    toggle,
    width,
    height,
    noCommande,
    commandes,
  } = props;

  const [Commandes, setModels] = useState(commandes);

  const [Essais, setCEssais] = useState([
    {
      id: '1',
      numproduit: 'Produit6',
      date: '2021-04-05',
      heure: '15:03',
      numcommand: 'CP20136',
      numserie: '100',
      typedacier: 'SH1',
      EPN1WATTS: 10,
      EPN2WATTS: 32,
      TEMPSESSAI: 30,
      PERTESAVIDE: 42,
      PVVSGARANTIES: '-10.23',
      DESTRUTION: 34.12,
      EXC1amp: 8,
      EXC1GAR: 80,
    },
    {
      id: '6',
      numproduit: 'Produit1',
      date: '2021-04-05',
      heure: '12:03',
      numcommand: 'CP20135',
      numserie: '110',
      typedacier: 'SH1',
      EPN1WATTS: 10,
      EPN2WATTS: 32,
      TEMPSESSAI: 30,
      PERTESAVIDE: 42,
      PVVSGARANTIES: '-10.23',
      DESTRUTION: 34.12,
      EXC1amp: 8,
      EXC1GAR: 80,
    },
    {
      id: '7',
      numproduit: 'Produit1',
      date: '2021-04-05',
      heure: '16:03',
      numcommand: 'CP20135',
      numserie: '111',
      typedacier: 'SH1',
      EPN1WATTS: 10,
      EPN2WATTS: 32,
      TEMPSESSAI: 30,
      PERTESAVIDE: 42,
      PVVSGARANTIES: '-10.23',
      DESTRUTION: 34.12,
      EXC1amp: 8,
      EXC1GAR: 80,
    },
    {
      id: '8',
      numproduit: 'Produit1',
      date: '2021-07-15',
      heure: '14:03',
      numcommand: 'CP20136',
      numserie: '109',
      typedacier: 'SH1',
      EPN1WATTS: 10,
      EPN2WATTS: 32,
      TEMPSESSAI: 30,
      PERTESAVIDE: 42,
      PVVSGARANTIES: '-10.23',
      DESTRUTION: 34.12,
      EXC1amp: 8,
      EXC1GAR: 80,
    },
    {
      id: '2',
      numproduit: 'Produit5',
      date: '2021-08-05',
      heure: '09:43',
      numcommand: 'CP20136',
      numserie: '101',
      typedacier: 'SH1',
      EPN1WATTS: 20,
      EPN2WATTS: 34,
      TEMPSESSAI: 30,
      PERTESAVIDE: 32,
      PVVSGARANTIES: '-10.23',
      DESTRUTION: 34.12,
      EXC1amp: 6,
      EXC1GAR: 80,
    },
    {
      id: '3',
      numproduit: 'Produit4',
      date: '2020-06-12',
      heure: '10:03',
      numcommand: 'CP20138',
      numserie: '102',
      typedacier: 'SH1',
      EPN1WATTS: 12,
      EPN2WATTS: 30,
      TEMPSESSAI: 30,
      PERTESAVIDE: 12,
      PVVSGARANTIES: '-10.23',
      DESTRUTION: 34.12,
      EXC1amp: 1,
      EXC1GAR: 80,
    },
    {
      id: '4',
      numproduit: 'Produit4',
      date: '2021-07-15',
      heure: '15:35',
      numcommand: 'CP20138',
      numserie: '103',
      typedacier: 'SH1',
      EPN1WATTS: 18,
      EPN2WATTS: 24,
      TEMPSESSAI: 30,
      PERTESAVIDE: 34,
      PVVSGARANTIES: '-10.23',
      DESTRUTION: 34.12,
      EXC1amp: 4,
      EXC1GAR: 80,
    },
    {
      id: '5',
      numproduit: 'Produit1',
      date: '2021-07-15',
      heure: '09:41',
      numcommand: 'CP20137',
      numserie: '104',
      typedacier: 'SH1',
      EPN1WATTS: 18,
      EPN2WATTS: 10,
      TEMPSESSAI: 30,
      PERTESAVIDE: 38,
      PVVSGARANTIES: '-10.23',
      DESTRUTION: 34.12,
      EXC1amp: 2,
      EXC1GAR: 80,
    },
  ]);
  const [searchcommand, setSearchcommand] = useState('');
  const [selectedmodel, setselectedmodel] = useState('');
  const [colored, setcolored] = useState(false);
  const [filteredEssais, setFilteredEssais] = useState([]);
  const [filteredCommands, setFilteredCommands] = useState([]);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  };
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  };

  useEffect(() => {
    const handle = () => {
      setFilteredCommands(
        Commandes.filter(Commande =>
          Commande.id_commande.includes(noCommande ? noCommande : searchcommand)
        )
      );
    };
    handle();
  }, [searchcommand]);
  useEffect(() => {
    const handle = () => {
      setFilteredEssais(
        Essais.filter(Essai =>
          Essai.numcommand.includes(noCommande ? noCommande : selectedmodel)
        )
      );
    };
    handle();
  }, [selectedmodel]);
  {
    /*
            useEffect(() => {
            setFilteredEssais(
              filteredEssais.filter((filtredEssai) =>
              filtredEssai.name.toLowerCase().includes(searchessai.toLowerCase())
               )
              );
             }, [searchessai]);
      */
  }

  function orderbydate(a, b) {
    return new Date(b.date).valueOf() - new Date(a.date).valueOf();
  }
  Essais.sort(orderbydate);

  function orderbyhour(a, b) {
    var time1 = parseFloat(a.heure.replace(':', '.').replace(/[^\d.-]/g, ''));
    var time2 = parseFloat(b.heure.replace(':', '.').replace(/[^\d.-]/g, ''));
    // if(a.fc_start_time.match(/.*pm/)) time1 += 12; if(b.fc_start_time.match(/.*pm/)) time2 += 12;
    if (new Date(b.date).valueOf() == new Date(a.date).valueOf()) {
      if (time1 < time2) return 1;
      if (time1 > time2) return -1;
      return 0;
    }
  }
  Essais.sort(orderbyhour);

  const onchangeselected = mod => {
    if (mod == selectedmodel) {
      setselectedmodel('');
      setcolored(false);
    } else {
      setselectedmodel(mod);
      setcolored(true);
    }
  };
  var foundhistorique = false;
  for (var i = 0; i < Essais.length; i++) {
    if (Essais[i].numcommand == noCommande) {
      foundhistorique = true;
      break;
    }
  }
  return (
    <div>
      {!noCommande ? (
        <Modal
          style={{width: width}}
          className={className}
          size="xl"
          isOpen={modal}
          toggle={toggle}
          backdrop="static">
          <ModalHeader className="modalHeader" toggle={toggle}>
            <h2>{title}</h2>
          </ModalHeader>
          <ModalBody className="modalBody" style={{height: height}}>
            <div
              className="row historique-page "
              style={{borderRadius: '10px'}}>
              <div className="leftside col-md-4 col-lg-2 ">
                <Form>
                  <FormGroup>
                    <h3>Rechercher</h3>
                    <Input
                      type="search"
                      name="search"
                      id="modelsearch"
                      onChange={e => setSearchcommand(e.target.value)}
                      placeholder="Search"
                    />
                  </FormGroup>
                </Form>
                <div className="modellist">
                  <Modeltable
                    filteredCommands={filteredCommands}
                    onchangeselected={onchangeselected}
                    colored={colored}
                  />
                </div>
              </div>
              <div
                className={`rightside ${
                  noCommande ? 'col-md-12 col-lg-12' : 'col-md-8 col-lg-10'
                }  `}>
                <h3 style={{textAlign: 'center'}}>
                  Listes des Essais {noCommande && `du ${noCommande}`}
                </h3>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingBottom: '15px',
                    alignItems: 'center',
                  }}>
                  <h4>Position 1</h4>
                  <Button outline color="info" onClick={toggleNested}>
                    Graphique des Tests{' '}
                  </Button>
                </div>
                <div className="essailist">
                  <Teststable filteredEssais={filteredEssais} />
                </div>
                <Modelgraph
                  isOpen={nestedModal}
                  toggle={toggleNested}
                  onClosed={closeAll ? toggle : undefined}
                  toggleAll={toggleAll}
                  filteredEssais={filteredEssais}
                  selectedmodel={selectedmodel}
                />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <h4>Position 2</h4>
                </div>
                <div className="essailist">
                  <Teststable filteredEssais={filteredEssais} />
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter className="modalFooter">
            <Button color="danger" onClick={toggle}>
              Fermer
            </Button>
          </ModalFooter>
        </Modal>
      ) : !foundhistorique ? (
        <Modal style={{width: width}} isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>
            <h2>{title}</h2>
          </ModalHeader>
          <ModalBody style={{display: 'flex', justifyContent: 'center'}}>
            <h1>No Tests Found</h1>
          </ModalBody>
          <ModalFooter className="modalFooter">
            <Button color="danger" onClick={toggle}>
              Fermer
            </Button>
          </ModalFooter>
        </Modal>
      ) : (
        <Modal
          style={{width: width}}
          className={className}
          size="xl"
          isOpen={modal}
          toggle={toggle}
          backdrop="static">
          <ModalHeader className="modalHeader" toggle={toggle}>
            <h2>{title}</h2>
          </ModalHeader>
          <ModalBody className="modalBody" style={{height: height}}>
            <div
              className="row historique-page "
              style={{borderRadius: '10px'}}>
              <div
                className={`rightside ${
                  noCommande ? 'col-md-12 col-lg-12' : 'col-md-8 col-lg-10'
                }  `}>
                <h3 style={{textAlign: 'center'}}>
                  Listes des Essais {noCommande && `du ${noCommande}`}
                </h3>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingBottom: '15px',
                    alignItems: 'center',
                  }}>
                  <h4>Position 1</h4>
                  <Button outline color="info" onClick={toggleNested}>
                    Graphique des Tests{' '}
                  </Button>
                </div>
                <div className="essailist">
                  <Teststable filteredEssais={filteredEssais} />
                </div>
                <Modelgraph
                  isOpen={nestedModal}
                  toggle={toggleNested}
                  onClosed={closeAll ? toggle : undefined}
                  toggleAll={toggleAll}
                  filteredEssais={filteredEssais}
                  selectedmodel={selectedmodel}
                />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <h4>Position 2</h4>
                </div>
                <div className="essailist">
                  <Teststable filteredEssais={filteredEssais} />
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter className="modalFooter">
            <Button color="danger" onClick={toggle}>
              Fermer
            </Button>
          </ModalFooter>
        </Modal>
      )}
    </div>
  );
};

export default ModalLink;
