import React, {useState, useRef, useEffect} from 'react';
import {Form, Input, Space, Button, Row, Divider, Select} from 'antd';
import {PlusOutlined, MinusCircleOutlined} from '@ant-design/icons';

export default function Decharges_Partielles({
  UpdateData,
  miseenplaceok,
  setFinaldata,
  setNewMisePlace,
  Finaldata,
}) {
  const [Line2, setLine2] = useState(false);
  const [Line3, setLine3] = useState(false);
  const inputEl = useRef(null);
  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.focus();
    }
  }, [inputEl]);

  useEffect(() => {
    if (
      Finaldata.Decharges_Partielles.S_15 < 50 &&
      Finaldata.Decharges_Partielles.S_30 < 50 &&
      Finaldata.Decharges_Partielles.S_45 < 50 &&
      Finaldata.Decharges_Partielles.S_60 < 50
    ) {
      setLine2(false);
    } else {
      setLine2(true);
    }
    if (
      Finaldata.Decharges_Partielles.S_75 < 50 &&
      Finaldata.Decharges_Partielles.S_90 < 50 &&
      Finaldata.Decharges_Partielles.S_105 < 50 &&
      Finaldata.Decharges_Partielles.S_120 < 50
    ) {
      setLine3(false);
    } else {
      setLine3(true);
    }
  }, [Finaldata]);

  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.focus();
    }
  }, [inputEl]);

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

  const [stopaddrow, setstopaddrow] = useState(false);
  const SKE77 = [
    {label: 'off', value: 'off'},
    {label: 16, value: 16},
    {label: 32, value: 32},
  ];
  const SKE17 = [
    {label: 'off', value: 'off'},
    {label: 1, value: 1},
    {label: 3, value: 3},
    {label: 5, value: 5},
    {label: 7, value: 7},
    {label: 9, value: 9},
    {label: 10, value: 10},
    {label: 11, value: 11},
    {label: 12, value: 12},
    {label: 13, value: 13},
    {label: 14, value: 14},
    {label: 15, value: 15},
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
            style={{width: '10%', marginRight: '5px'}}
            label="15 Sec"
            name="S_15"
            rules={[{required: true, message: 'Champ Requis'}]}>
            <Input
              ref={!miseenplaceok ? null : inputEl}
              tabIndex={!miseenplaceok ? 3 : 1}
              min={10}
              max={1000}
              placeholder="15 Sec"
              onChange={e => {
                UpdateData('S_15', e.target.value, setFinaldata);
                e.target.value < 50 && UpdateData('S_75', '', setFinaldata);
              }}
            />
          </Form.Item>
          <Form.Item
            key="30_Sec"
            style={{width: '10%', marginRight: '5px'}}
            label="30 Sec"
            name="S_30"
            rules={[{required: true, message: 'Champ Requis'}]}>
            <Input
              tabIndex={!miseenplaceok ? 4 : 2}
              min={10}
              max={1000}
              placeholder="30 Sec"
              onChange={e => UpdateData('S_30', e.target.value, setFinaldata)}
            />
          </Form.Item>
          <Form.Item
            key="45_Sec"
            style={{width: '10%', marginRight: '5px'}}
            label="45 Sec"
            name="S_45"
            rules={[{required: true, message: 'Champ Requis'}]}>
            <Input
              tabIndex={!miseenplaceok ? 5 : 3}
              min={10}
              max={1000}
              placeholder="45 Sec"
              onChange={e => UpdateData('S_45', e.target.value, setFinaldata)}
            />
          </Form.Item>
          <Form.Item
            key="60_Sec"
            style={{width: '10%', marginRight: '5px'}}
            label="60 Sec"
            name="S_60"
            rules={[{required: true, message: 'Champ Requis'}]}>
            <Input
              tabIndex={!miseenplaceok ? 6 : 4}
              min={10}
              max={1000}
              placeholder="60 Sec"
              onChange={e => UpdateData('S_60', e.target.value, setFinaldata)}
            />
          </Form.Item>
        </Row>
        {Line2 && (
          <Row style={{justifyContent: 'center'}}>
            <Form.Item
              key="75_Sec"
              style={{width: '10%', marginRight: '5px'}}
              label="75 Sec"
              name="S_75"
              rules={[{required: true, message: 'Champ Requis'}]}>
              <Input
                ref={!miseenplaceok ? null : inputEl}
                min={10}
                max={1000}
                tabIndex={!miseenplaceok ? 7 : 5}
                placeholder="75 Sec"
                onChange={e => {
                  UpdateData('S_75', e.target.value, setFinaldata);
                }}
              />
            </Form.Item>
            <Form.Item
              key="90_Sec"
              style={{width: '10%', marginRight: '5px'}}
              label="90 Sec"
              name="S_90"
              rules={[{required: true, message: 'Champ Requis'}]}>
              <Input
                min={10}
                max={1000}
                placeholder="90 Sec"
                tabIndex={!miseenplaceok ? 8 : 6}
                onChange={e => UpdateData('S_90', e.target.value, setFinaldata)}
              />
            </Form.Item>
            <Form.Item
              key="105_Sec"
              style={{width: '10%', marginRight: '5px'}}
              label="105 Sec"
              name="S_105"
              rules={[{required: true, message: 'Champ Requis'}]}>
              <Input
                min={10}
                max={1000}
                placeholder="105 Sec"
                tabIndex={!miseenplaceok ? 9 : 7}
                onChange={e =>
                  UpdateData('S_105', e.target.value, setFinaldata)
                }
              />
            </Form.Item>
            <Form.Item
              key="120_Sec"
              style={{width: '10%', marginRight: '5px'}}
              label="120 Sec"
              name="S_120"
              rules={[{required: true, message: 'Champ Requis'}]}>
              <Input
                min={10}
                max={1000}
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
              style={{width: '10%', marginRight: '5px'}}
              label="135 Sec"
              name="S_135"
              rules={[{required: true, message: 'Champ Requis'}]}>
              <Input
                ref={!miseenplaceok ? null : inputEl}
                min={10}
                max={1000}
                placeholder="135 Sec"
                tabIndex={!miseenplaceok ? 11 : 9}
                onChange={e =>
                  UpdateData('S_135', e.target.value, setFinaldata)
                }
              />
            </Form.Item>
            <Form.Item
              key="150_Sec"
              style={{width: '10%', marginRight: '5px'}}
              label="150 Sec"
              name="S_150"
              rules={[{required: true, message: 'Champ Requis'}]}>
              <Input
                min={10}
                max={1000}
                placeholder="150 Sec"
                tabIndex={!miseenplaceok ? 12 : 10}
                onChange={e =>
                  UpdateData('S_150', e.target.value, setFinaldata)
                }
              />
            </Form.Item>
            <Form.Item
              key="165_Sec"
              style={{width: '10%', marginRight: '5px'}}
              label="165 Sec"
              name="S_165"
              rules={[{required: true, message: 'Champ Requis'}]}>
              <Input
                min={10}
                max={1000}
                placeholder="165 Sec"
                tabIndex={!miseenplaceok ? 13 : 11}
                onChange={e =>
                  UpdateData('S_165', e.target.value, setFinaldata)
                }
              />
            </Form.Item>
            <Form.Item
              key="180_Sec"
              style={{width: '10%', marginRight: '5px'}}
              label="180 Sec"
              name="S_180"
              rules={[{required: true, message: 'Champ Requis'}]}>
              <Input
                min={10}
                max={1000}
                placeholder="180 Sec"
                tabIndex={!miseenplaceok ? 14 : 12}
                onChange={e =>
                  UpdateData('S_180', e.target.value, setFinaldata)
                }
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
