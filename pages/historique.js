import React, {useState, useEffect} from 'react';
import Baselayout from '@/components/layouts/baselayout';
import Basepage from '@/components/Basepage';
import Teststable from '@/components/tables/Historique/historiquetable';
import Modeltable from '@/components/tables/Historique/modeltable';
import {useGetUser} from '@/actions/user';
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  ListGroup,
  ListGroupItem,
  Button,
} from 'reactstrap';

const Historique = () => {
  const {data, loading} = useGetUser();

  const [Models, setModels] = useState([
    {id: '1', MO: 'A2170', numserie: '100'},
    {id: '2', MO: 'A2171', numserie: '101'},
    {id: '2', MO: 'A2172', numserie: '102'},
  ]);

  const [Essais, setCEssais] = useState([
    {
      id: '1',
      numserie: '100',
      typedacier: 'SH1',
      EPN1WATTS: '18.7',
      EPN1WATTS: '30.29',
      TEMPSESSAI: '30.01',
      PERTESAVIDE: '49.872',
      PVVSGARANTIES: '-10.23',
      DESTRUTION: '34.12',
      EXC1amp: '0.118',
      EXC1GAR: '-80.91',
    },
    {
      id: '1',
      numserie: '101',
      typedacier: 'SH1',
      EPN1WATTS: '18.7',
      EPN1WATTS: '30.29',
      TEMPSESSAI: '30.01',
      PERTESAVIDE: '49.872',
      PVVSGARANTIES: '-10.23',
      DESTRUTION: '34.12',
      EXC1amp: '0.118',
      EXC1GAR: '-80.91',
    },
    {
      id: '1',
      numserie: '102',
      typedacier: 'SH1',
      EPN1WATTS: '18.7',
      EPN1WATTS: '30.29',
      TEMPSESSAI: '30.01',
      PERTESAVIDE: '49.872',
      PVVSGARANTIES: '-10.23',
      DESTRUTION: '34.12',
      EXC1amp: '0.118',
      EXC1GAR: '-80.91',
    },
    {
      id: '1',
      numserie: '103',
      typedacier: 'SH1',
      EPN1WATTS: '18.7',
      EPN1WATTS: '30.29',
      TEMPSESSAI: '30.01',
      PERTESAVIDE: '49.872',
      PVVSGARANTIES: '-10.23',
      DESTRUTION: '34.12',
      EXC1amp: '0.118',
      EXC1GAR: '-80.91',
    },
    {
      id: '1',
      numserie: '100',
      typedacier: 'SH1',
      EPN1WATTS: '18.7',
      EPN1WATTS: '30.29',
      TEMPSESSAI: '30.01',
      PERTESAVIDE: '49.872',
      PVVSGARANTIES: '-10.23',
      DESTRUTION: '34.12',
      EXC1amp: '0.118',
      EXC1GAR: '-80.91',
    },
    {
      id: '1',
      numserie: '100',
      typedacier: 'SH1',
      EPN1WATTS: '18.7',
      EPN1WATTS: '30.29',
      TEMPSESSAI: '30.01',
      PERTESAVIDE: '49.872',
      PVVSGARANTIES: '-10.23',
      DESTRUTION: '34.12',
      EXC1amp: '0.118',
      EXC1GAR: '-80.91',
    },
    {
      id: '1',
      numserie: '100',
      typedacier: 'SH1',
      EPN1WATTS: '18.7',
      EPN1WATTS: '30.29',
      TEMPSESSAI: '30.01',
      PERTESAVIDE: '49.872',
      PVVSGARANTIES: '-10.23',
      DESTRUTION: '34.12',
      EXC1amp: '0.118',
      EXC1GAR: '-80.91',
    },
    {
      id: '1',
      numserie: '100',
      typedacier: 'SH1',
      EPN1WATTS: '18.7',
      EPN1WATTS: '30.29',
      TEMPSESSAI: '30.01',
      PERTESAVIDE: '49.872',
      PVVSGARANTIES: '-10.23',
      DESTRUTION: '34.12',
      EXC1amp: '0.118',
      EXC1GAR: '-80.91',
    },
    {
      id: '1',
      numserie: '100',
      typedacier: 'SH1',
      EPN1WATTS: '18.7',
      EPN1WATTS: '30.29',
      TEMPSESSAI: '30.01',
      PERTESAVIDE: '49.872',
      PVVSGARANTIES: '-10.23',
      DESTRUTION: '34.12',
      EXC1amp: '0.118',
      EXC1GAR: '-80.91',
    },
    {
      id: '1',
      numserie: '100',
      typedacier: 'SH1',
      EPN1WATTS: '18.7',
      EPN1WATTS: '30.29',
      TEMPSESSAI: '30.01',
      PERTESAVIDE: '49.872',
      PVVSGARANTIES: '-10.23',
      DESTRUTION: '34.12',
      EXC1amp: '0.118',
      EXC1GAR: '-80.91',
    },
  ]);
  const [searchmodel, setSearchmodel] = useState('');
  const [searchessai, setSearchessai] = useState('');
  const [selectedmodel, setselectedmodel] = useState('');
  const [colored, setcolored] = useState(false);
  const [filteredEssais, setFilteredEssais] = useState([]);
  const [filteredModels, setFilteredModels] = useState([]);

  useEffect(() => {
    setFilteredModels(
      Models.filter(Model =>
        Model.MO.toLowerCase().includes(searchmodel.toLowerCase())
      )
    );
  }, [searchmodel]);
  useEffect(() => {
    setFilteredEssais(
      Essais.filter(Essai => Essai.model.includes(selectedmodel))
    );
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

  const onchangeselected = mod => {
    if (mod == selectedmodel) {
      setselectedmodel('');
      setcolored(false);
    } else {
      setselectedmodel(mod);
      setcolored(true);
    }
  };
  return (
    <div>
      <Baselayout user={data} loading={loading}>
        <Basepage
          className=" historique-page "
          header="Consulter l'Historique des Essais">
          <div className=" row historique-container ">
            <div className="leftside col-md-2 col-lg-2 ">
              <Form>
                <FormGroup>
                  <Label for="exampleSearch">Rechercher</Label>
                  <Input
                    type="search"
                    name="search"
                    id="modelsearch"
                    onChange={e => setSearchmodel(e.target.value)}
                    placeholder="Search"
                  />
                </FormGroup>
              </Form>
              <div className="modellist">
                <Modeltable
                  filteredModels={filteredModels}
                  onchangeselected={onchangeselected}
                  colored={colored}
                />
              </div>
            </div>
            <div className="rightside col-md-10 col-lg-10 ">
              <Label for="exampleSearch" style={{display: 'block'}}>
                Liste Des Essais
              </Label>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingBottom: '15px',
                  alignItems: 'center',
                }}>
                <Label for="exampleSearch">Position 1</Label>
                <Button outline color="info">
                  Graphique des Tests
                </Button>
              </div>
              <div className="essailist">
                <Teststable filteredEssais={filteredEssais} />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Label for="exampleSearch">Position </Label>
              </div>
              <div className="essailist">
                <Teststable filteredEssais={filteredEssais} />
              </div>
            </div>
          </div>
        </Basepage>
      </Baselayout>
    </div>
  );
};
export default Historique;
