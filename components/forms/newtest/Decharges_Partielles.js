import React, {useState, useRef, useEffect} from 'react';
import {UpdateData} from '@/actions/newtestupdate';
import {Form, Input, Modal, Button, Space, Row, Divider, Select} from 'antd';
import {PlusOutlined, MinusCircleOutlined} from '@ant-design/icons';
const {confirm} = Modal;

export default function Decharges_Partielles({
  miseenplaceok,
  setFinaldata,
  setNewMisePlace,
  Finaldata,
  error,
  onResetFields,
}) {
  const [Line2, setLine2] = useState();
  const [Line3, setLine3] = useState();
  const [modal, contextHolder] = Modal.useModal();
  const inputEl = useRef(null);
  function showDeleteConfirm() {
    confirm({
      title: 'Are you sure delete this task?',
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
        AnnulerConfirm();
        // onResetFields('S_180');
        console.log('supprimer s180');
        UpdateData('S_180', '', setFinaldata);
      },
    });
  }
  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.focus();
    }
  }, [inputEl]);

  useEffect(() => {
    if (
      Finaldata.Decharges_Partielles.S_15 <= 500 &&
      Finaldata.Decharges_Partielles.S_30 <= 500 &&
      Finaldata.Decharges_Partielles.S_45 <= 500 &&
      Finaldata.Decharges_Partielles.S_60 <= 500
    ) {
      setLine2(false);
    } else {
      setLine2(true);
    }
    if (
      Finaldata.Decharges_Partielles.S_75 <= 500 &&
      Finaldata.Decharges_Partielles.S_90 <= 500 &&
      Finaldata.Decharges_Partielles.S_105 <= 500 &&
      Finaldata.Decharges_Partielles.S_120 <= 500
    ) {
      setLine3(false);
    } else {
      setLine3(true);
    }
  }, [Finaldata]);

  useEffect(() => {
    if (Line2 == false) {
      console.log('supprimer la 2eme et la 3eme ligne');
      UpdateData('S_75', '', setFinaldata);
      UpdateData('S_90', '', setFinaldata);
      UpdateData('S_105', '', setFinaldata);
      UpdateData('S_120', '', setFinaldata);
      UpdateData('S_135', '', setFinaldata);
      UpdateData('S_150', '', setFinaldata);
      UpdateData('S_165', '', setFinaldata);
      UpdateData('S_180', '', setFinaldata);
    }
  }, [Line2]);
  useEffect(() => {
    if (Line3 == false) {
      console.log('supprimer la 2eme et la 3eme ligne');
      UpdateData('S_135', '', setFinaldata);
      UpdateData('S_150', '', setFinaldata);
      UpdateData('S_165', '', setFinaldata);
      UpdateData('S_180', '', setFinaldata);
    }
  }, [Line3]);

  const SKE77 = [
    {label: 'off', value: 'off'},
    {label: '1:16', value: '1:16'},
    {label: '2:32', value: '2:32'},
  ];
  const SKE17 = [
    {label: 'off', value: 'off'},
    {label: '1:1', value: '1:1'},
    {label: '2:3', value: '2:3'},
    {label: '3:5', value: '3:5'},
    {label: '4:7', value: '4:7'},
    {label: '5:9', value: '5:9'},
    {label: '6:10', value: '6:10'},
    {label: '7:11', value: '7:11'},
    {label: '8:12', value: '8:12'},
    {label: '9:13', value: '9:13'},
    {label: '10:14', value: '10:14'},
    {label: '11:15', value: '11:15'},
  ];

  return (
    <div className="Containertest">
      <Divider
        dashed
        orientation="left"
        style={{color: '#503662', marginBottom: '40px'}}>
        <h3>Decharges Partielles</h3>
      </Divider>
      <div>
        <Row key="row1" style={{justifyContent: 'center'}}>
          <Form.Item>
            <Form.Item
              key="1.7pu"
              className="show_item"
              style={{width: '100%'}}>
              TENSION APPLIQUÉ HAUTE TENSION 1.7pu (V)
            </Form.Item>
          </Form.Item>
        </Row>
        <Row key="row2" style={{justifyContent: 'center'}}>
          <Form.Item>
            <Form.Item
              key="1.5pu"
              className="show_item"
              style={{width: '100%'}}>
              TENSION APPLIQUÉ HAUTE TENSION 1.5pu (V)
            </Form.Item>
          </Form.Item>
        </Row>
        {miseenplaceok ? (
          <Row key="row3" style={{justifyContent: 'center'}}>
            <Form.Item
              key="Réactance_SKE77"
              className="show_item"
              style={{width: '40%'}}>
              Réactance SKE77:
              {miseenplaceok.Decharges_Partielles.Réactance_ske77_DP_P1}
            </Form.Item>
            <Form.Item
              key="Réactance_SKE17"
              className="show_item"
              style={{width: '40%'}}>
              Réactance SKE17 :
              {miseenplaceok.Decharges_Partielles.Réactance_ske17_DP_P1}
            </Form.Item>
          </Row>
        ) : (
          <>
            <Row key="row3" style={{justifyContent: 'center'}}>
              <Form.Item
                key="Réactance_SKE77"
                label="Réactance SKE77"
                style={{display: 'inline-block', width: 'calc(30% - 8px)'}}>
                <Form.Item
                  name="Réactance_SKE77_DP_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}>
                  <Select
                    placeholder="Réactance SKE77"
                    showSearch
                    ref={inputEl}
                    tabIndex={1}
                    initialvalues=""
                    options={SKE77}
                    onChange={value => {
                      UpdateData(
                        'Réactance_ske77_DP_P1',
                        value,
                        setNewMisePlace
                      );
                    }}
                  />
                </Form.Item>
              </Form.Item>
              <Form.Item
                key="Réactance_SKE17"
                label="Réactance SKE17"
                style={{
                  display: 'inline-block',
                  width: 'calc(30% - 8px)',
                  margin: '0 8px',
                }}>
                <Form.Item
                  name="Réactance_SKE17_DP_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}>
                  <Select
                    placeholder="Réactance SKE17"
                    showSearch
                    initialvalues=""
                    tabIndex={2}
                    options={SKE17}
                    onChange={value => {
                      UpdateData(
                        'Réactance_ske17_DP_P1',
                        value,
                        setNewMisePlace
                      );
                    }}
                  />
                </Form.Item>
              </Form.Item>
            </Row>
          </>
        )}
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            key="15_Sec"
            style={{width: '80px', marginRight: '5px'}}
            label="15 Sec"
            name="S_15"
            rules={[{required: true, message: 'Champ Requis'}]}>
            <Input
              type="number"
              ref={!miseenplaceok ? null : inputEl}
              tabIndex={!miseenplaceok ? 3 : 1}
              placeholder="15 Sec"
              onChange={e => {
                UpdateData('S_15', e.target.value, setFinaldata);
              }}
            />
          </Form.Item>
          <Form.Item
            key="30_Sec"
            style={{width: '80px', marginRight: '5px'}}
            label="30 Sec"
            name="S_30"
            rules={[{required: true, message: 'Champ Requis'}]}>
            <Input
              type="number"
              tabIndex={!miseenplaceok ? 4 : 2}
              placeholder="30 Sec"
              onChange={e => UpdateData('S_30', e.target.value, setFinaldata)}
            />
          </Form.Item>
          <Form.Item
            key="45_Sec"
            style={{width: '80px', marginRight: '5px'}}
            label="45 Sec"
            name="S_45"
            rules={[{required: true, message: 'Champ Requis'}]}>
            <Input
              type="number"
              tabIndex={!miseenplaceok ? 5 : 3}
              placeholder="45 Sec"
              onChange={e => UpdateData('S_45', e.target.value, setFinaldata)}
            />
          </Form.Item>
          <Form.Item
            key="60_Sec"
            style={{width: '80px', marginRight: '5px'}}
            label="60 Sec"
            name="S_60"
            rules={[{required: true, message: 'Champ Requis'}]}>
            <Input
              type="number"
              tabIndex={!miseenplaceok ? 6 : 4}
              placeholder="60 Sec"
              onChange={e => UpdateData('S_60', e.target.value, setFinaldata)}
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
                type="number"
                ref={!miseenplaceok ? null : inputEl}
                tabIndex={!miseenplaceok ? 7 : 5}
                placeholder="75 Sec"
                onChange={e => {
                  UpdateData('S_75', e.target.value, setFinaldata);
                }}
              />
            </Form.Item>
            <Form.Item
              key="90_Sec"
              style={{width: '80px', marginRight: '5px'}}
              label="90 Sec"
              name="S_90"
              rules={[{required: true, message: 'Champ Requis'}]}>
              <Input
                type="number"
                placeholder="90 Sec"
                tabIndex={!miseenplaceok ? 8 : 6}
                onChange={e => UpdateData('S_90', e.target.value, setFinaldata)}
              />
            </Form.Item>
            <Form.Item
              key="105_Sec"
              style={{width: '80px', marginRight: '5px'}}
              label="105 Sec"
              name="S_105"
              rules={[{required: true, message: 'Champ Requis'}]}>
              <Input
                type="number"
                placeholder="105 Sec"
                tabIndex={!miseenplaceok ? 9 : 7}
                onChange={e =>
                  UpdateData('S_105', e.target.value, setFinaldata)
                }
              />
            </Form.Item>
            <Form.Item
              key="120_Sec"
              style={{width: '80px', marginRight: '5px'}}
              label="120 Sec"
              name="S_120"
              rules={[{required: true, message: 'Champ Requis'}]}>
              <Input
                type="number"
                placeholder="120 Sec"
                tabIndex={!miseenplaceok ? 10 : 8}
                onChange={e =>
                  UpdateData('S_120', e.target.value, setFinaldata)
                }
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
                type="number"
                ref={!miseenplaceok ? null : inputEl}
                placeholder="135 Sec"
                tabIndex={!miseenplaceok ? 11 : 9}
                onChange={e => {
                  UpdateData('S_135', e.target.value, setFinaldata);
                  e.target.value > 500 &&
                    error('Le Test avec cette valeur est echoué...');
                }}
              />
            </Form.Item>
            <Form.Item
              key="150_Sec"
              style={{width: '80px', marginRight: '5px'}}
              label="150 Sec"
              name="S_150"
              rules={[{required: true, message: 'Champ Requis'}]}>
              <Input
                type="number"
                placeholder="150 Sec"
                tabIndex={!miseenplaceok ? 12 : 10}
                onChange={e => {
                  UpdateData('S_150', e.target.value, setFinaldata);
                  e.target.value > 500 &&
                    error('Le Test avec cette valeur est echoué...');
                }}
              />
            </Form.Item>
            <Form.Item
              key="165_Sec"
              style={{width: '80px', marginRight: '5px'}}
              label="165 Sec"
              name="S_165"
              rules={[{required: true, message: 'Champ Requis'}]}>
              <Input
                type="number"
                placeholder="165 Sec"
                tabIndex={!miseenplaceok ? 13 : 11}
                onChange={e => {
                  UpdateData('S_165', e.target.value, setFinaldata);
                  e.target.value > 500 &&
                    error('Le Test avec cette valeur est echoué...');
                }}
              />
            </Form.Item>
            <Form.Item
              key="180_Sec"
              style={{width: '80px', marginRight: '5px'}}
              label="180 Sec"
              name="S_180"
              rules={[{required: true, message: 'Champ Requis'}]}>
              <Input
                id="S_180"
                type="number"
                placeholder="180 Sec"
                tabIndex={!miseenplaceok ? 14 : 12}
                onChange={e => {
                  UpdateData('S_180', e.target.value, setFinaldata);
                  e.target.value > 500 &&
                    error('Le Test avec cette valeur est echoué...');
                }}
              />
            </Form.Item>
          </Row>
        )}
      </div>
    </div>
  );
}
