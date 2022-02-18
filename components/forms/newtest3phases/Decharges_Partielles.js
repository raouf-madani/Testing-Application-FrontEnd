import React, {useState, useRef, useEffect} from 'react';
import {
  Form,
  Input,
  Button,
  Select,
  Card,
  Space,
  Radio,
  Row,
  Col,
  Divider,
} from 'antd';

export default function Decharges_Partielles({commande, mise_en_placeById}) {
  const [Line2, setLine2] = useState(false);
  const [Line3, setLine3] = useState(false);
  const inputEl = useRef(null);
  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.focus();
    }
  }, [inputEl]);

  // useEffect(() => {
  //   if (
  //     Finaldata.Decharges_Partielles.S_15 < 500 &&
  //     Finaldata.Decharges_Partielles.S_30 < 500 &&
  //     Finaldata.Decharges_Partielles.S_45 < 500 &&
  //     Finaldata.Decharges_Partielles.S_60 < 500
  //   ) {
  //     setLine2(false);
  //   } else {
  //     setLine2(true);
  //   }
  //   if (
  //     Finaldata.Decharges_Partielles.S_75 < 500 &&
  //     Finaldata.Decharges_Partielles.S_90 < 500 &&
  //     Finaldata.Decharges_Partielles.S_105 < 500 &&
  //     Finaldata.Decharges_Partielles.S_120 < 500
  //   ) {
  //     setLine3(false);
  //   } else {
  //     setLine3(true);
  //   }
  // }, [Finaldata]);

  // useEffect(() => {
  //   if (Line2 == false) {
  //     console.log('supprimer la 2eme et la 3eme ligne');
  //     UpdateData('S_75', '', setFinaldata);
  //     UpdateData('S_90', '', setFinaldata);
  //     UpdateData('S_105', '', setFinaldata);
  //     UpdateData('S_120', '', setFinaldata);
  //     UpdateData('S_135', '', setFinaldata);
  //     UpdateData('S_150', '', setFinaldata);
  //     UpdateData('S_165', '', setFinaldata);
  //     UpdateData('S_180', '', setFinaldata);
  //   }
  // }, [Line2]);
  const Reactance = [
    {label: 'A1B1C1', value: 'A1B1C1'},
    {label: 'A3B3C3', value: 'A3B3C3'},
    {label: 'A4B4C4', value: 'A4B4C4'},
  ];
  const TR_Charge = [
    {label: '347/600', value: 347 / 600},
    {label: '693/1200', value: 693 / 1200},
    {label: '1385/2400', value: 1385 / 2400},
    {label: '2771/4800', value: 2771 / 4800},
    {label: 'N/A', value: 'N/A'},
  ];
  const TR_Voltage = [
    {label: '240/X2', value: 240 / 2},
    {label: '480/X4', value: 480 / 4},
    {label: '600/X5', value: 600 / 5},
    {label: '1200/X10', value: 1200 / 10},
    {label: '2400/X20', value: 2400 / 20},
    {label: '4800/X40', value: 4800 / 40},
    {label: 'N/A', value: 'N/A'},
  ];
  const TR_Courant = [
    {label: '5/X1', value: 5 / 1},
    {label: '10/X2', value: 10 / 2},
    {label: '25/X5', value: 25 / 5},
    {label: '50/X10', value: 50 / 10},
    {label: '100/X20', value: 100 / 20},
    {label: '200/X40', value: 200 / 40},
    {label: '400/X80', value: 400 / 80},
    {label: '600/X120', value: 600 / 120},
    {label: 'N/A', value: 'N/A'},
  ];
  return (
    <div className="Containertest">
      <Divider
        dashed
        orientation="left"
        style={{color: '#34b1ab', marginBottom: '40px'}}>
        <h3>Decharges Partielles</h3>
      </Divider>
      <div>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            key="Sélecteur_de_prise_DechargeP"
            label="Sélecteur de prise"
            name="Sélecteur_de_prise_DechargeP "
            rules={[{required: true, message: 'Champ Requis'}]}
            className="show_item_input">
            <Input
              ref={inputEl}
              type="number"
              placeholder="Sélecteur de prise"
            />
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            key="Sélecteur_de_tension_DechargeP"
            label="Sélecteur de tension"
            name="Sélecteur_de_tension_DechargeP "
            rules={[{required: true, message: 'Champ Requis'}]}
            className="show_item_input">
            <Input type="number" placeholder="Sélecteur de tension" />
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            key="Réactance_DechargeP"
            label="Réactance "
            name="Réactance_DechargeP"
            rules={[{required: true, message: 'Champ Requis'}]}
            className="show_item_input">
            <Select
              placeholder="Réactance"
              showSearch
              initialvalues=""
              options={Reactance}
            />
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            key="TR_Charge_DechargeP"
            label="TR Charge "
            name="TR_Charge_DechargeP"
            rules={[{required: true, message: 'Champ Requis'}]}
            className="show_item_input">
            <Select
              placeholder="TR Charge"
              showSearch
              initialvalues=""
              options={TR_Charge}
            />
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            key="TR_Courant_DechargeP"
            label="TR Courant"
            name="TR_Courant_DechargeP "
            rules={[{required: true, message: 'Champ Requis'}]}
            className="show_item_input">
            <Select
              placeholder="TR Courant "
              showSearch
              initialvalues=""
              options={TR_Courant}
            />
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            key="TR_Voltage_DechargeP"
            label="TR Voltage"
            name="TR_Voltage_DechargeP "
            rules={[{required: true, message: 'Champ Requis'}]}
            className="show_item_input">
            <Select
              placeholder="TR Voltage "
              showSearch
              initialvalues=""
              options={TR_Voltage}
            />
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            key="Tension_appliqué_1_7_pu_DechargeP"
            label="Tension appliqué 1.7 pu"
            name="Tension_appliqué_1_7_pu_DechargeP "
            rules={[{required: true, message: 'Champ Requis'}]}
            className="show_item_input">
            <Input type="number" placeholder="Tension appliqué 1.7 pu" />
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            key="Tension_appliqué_1_5_pu_DechargeP"
            label="Tension appliqué 1.5 pu"
            name="Tension_appliqué_1_5_pu_DechargeP "
            rules={[{required: true, message: 'Champ Requis'}]}
            className="show_item_input">
            <Input type="number" placeholder="Tension appliqué 1.5 pu" />
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            key="15_Sec"
            style={{width: '80px', marginRight: '5px'}}
            label="15 Sec"
            name="S_15"
            rules={[{required: true, message: 'Champ Requis'}]}>
            <Input
              ref={!mise_en_placeById ? null : inputEl}
              placeholder="15 Sec"
              // onChange={e => {
              //   UpdateData('S_15', e.target.value, setFinaldata);
              //   e.target.value < 50 && UpdateData('S_75', '', setFinaldata);
              // }}
            />
          </Form.Item>
          <Form.Item
            key="30_Sec"
            style={{width: '80px', marginRight: '5px'}}
            label="30 Sec"
            name="S_30"
            rules={[{required: true, message: 'Champ Requis'}]}>
            <Input
              placeholder="30 Sec"
              // onChange={e => UpdateData('S_30', e.target.value, setFinaldata)}
            />
          </Form.Item>
          <Form.Item
            key="45_Sec"
            style={{width: '80px', marginRight: '5px'}}
            label="45 Sec"
            name="S_45"
            rules={[{required: true, message: 'Champ Requis'}]}>
            <Input
              placeholder="45 Sec"
              // onChange={e => UpdateData('S_45', e.target.value, setFinaldata)}
            />
          </Form.Item>
          <Form.Item
            key="60_Sec"
            style={{width: '80px', marginRight: '5px'}}
            label="60 Sec"
            name="S_60"
            rules={[{required: true, message: 'Champ Requis'}]}>
            <Input
              placeholder="60 Sec"
              // onChange={e => UpdateData('S_60', e.target.value, setFinaldata)}
            />
          </Form.Item>
        </Row>
        {Line2 && (
          <Row style={{justifyContent: 'center'}}>
            <Form.Item
              key="75_Sec"
              style={{width: '80px', marginRight: '5px'}}
              label="75 Sec"
              name="S_75"
              rules={[{required: true, message: 'Champ Requis'}]}>
              <Input
                ref={!mise_en_placeById ? null : inputEl}
                placeholder="75 Sec"
                // onChange={e => {
                //   UpdateData('S_75', e.target.value, setFinaldata);
                // }}
              />
            </Form.Item>
            <Form.Item
              key="90_Sec"
              style={{width: '80px', marginRight: '5px'}}
              label="90 Sec"
              name="S_90"
              rules={[{required: true, message: 'Champ Requis'}]}>
              <Input
                placeholder="90 Sec"

                // onChange={e => UpdateData('S_90', e.target.value, setFinaldata)}
              />
            </Form.Item>
            <Form.Item
              key="105_Sec"
              style={{width: '80px', marginRight: '5px'}}
              label="105 Sec"
              name="S_105"
              rules={[{required: true, message: 'Champ Requis'}]}>
              <Input
                placeholder="105 Sec"

                // onChange={e =>
                //   UpdateData('S_105', e.target.value, setFinaldata)
                // }
              />
            </Form.Item>
            <Form.Item
              key="120_Sec"
              style={{width: '80px', marginRight: '5px'}}
              label="120 Sec"
              name="S_120"
              rules={[{required: true, message: 'Champ Requis'}]}>
              <Input
                placeholder="120 Sec"

                // onChange={e =>
                //   UpdateData('S_120', e.target.value, setFinaldata)
                // }
              />
            </Form.Item>
          </Row>
        )}

        {Line2 && Line3 && (
          <Row style={{justifyContent: 'center'}}>
            <Form.Item
              key="135_Sec"
              style={{width: '80px', marginRight: '5px'}}
              label="135 Sec"
              name="S_135"
              rules={[{required: true, message: 'Champ Requis'}]}>
              <Input
                ref={!mise_en_placeById ? null : inputEl}
                placeholder="135 Sec"

                // onChange={e =>
                //   UpdateData('S_135', e.target.value, setFinaldata)
                // }
              />
            </Form.Item>
            <Form.Item
              key="150_Sec"
              style={{width: '80px', marginRight: '5px'}}
              label="150 Sec"
              name="S_150"
              rules={[{required: true, message: 'Champ Requis'}]}>
              <Input
                placeholder="150 Sec"

                // onChange={e =>
                //   UpdateData('S_150', e.target.value, setFinaldata)
                // }
              />
            </Form.Item>
            <Form.Item
              key="165_Sec"
              style={{width: '80px', marginRight: '5px'}}
              label="165 Sec"
              name="S_165"
              rules={[{required: true, message: 'Champ Requis'}]}>
              <Input
                placeholder="165 Sec"

                // onChange={e =>
                //   UpdateData('S_165', e.target.value, setFinaldata)
                // }
              />
            </Form.Item>
            <Form.Item
              key="180_Sec"
              style={{width: '80px', marginRight: '5px'}}
              label="180 Sec"
              name="S_180"
              rules={[{required: true, message: 'Champ Requis'}]}>
              <Input
                placeholder="180 Sec"

                // onChange={e =>
                //   UpdateData('S_180', e.target.value, setFinaldata)
                // }
              />
            </Form.Item>
          </Row>
        )}
        {Line2 ? <>line 2 active</> : <>line 2 no active</>}
        {Line3 ? <>line 3 active</> : <>line 3 no active</>}
      </div>
    </div>
  );
}
