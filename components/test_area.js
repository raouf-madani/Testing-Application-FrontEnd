import React from 'react';
import {
  Steps,
  Button,
  Row,
  Col,
  Divider,
  Form,
  Modal,
  Space,
  Spin,
  Select,
  Alert,
  Radio,
} from 'antd';

import Phase1Forms from '@/components/newTestComponents/Content1phase';
import Phase3Forms from '@/components/newTestComponents/Content3phase';

function Test_area({
  mise_en_placeById,
  test_type_selected,
  current,
  Finaldata,
  commande,
  setFinaldata,
  setNewMisePlace,
  error,
  settest_type_selected,
  settablelength,
}) {
  const Type_Test = [
    {label: '1 Phase', value: '1phase'},
    {label: '3 Phase', value: '3phase'},
  ];

  return (
    <>
      {mise_en_placeById !== null ? (
        <>
          {mise_en_placeById.Type_test == '1phase' ? (
            <Phase1Forms
              commande={commande}
              mise_en_placeById={mise_en_placeById}
              test_type_selected={test_type_selected}
              Finaldata={Finaldata}
              Prise={commande.prise}
              setFinaldata={setFinaldata}
              setNewMisePlace={setNewMisePlace}
              error={error}
              current={current}
              settablelength={settablelength}
            />
          ) : (
            <Phase3Forms
              commande={commande}
              mise_en_placeById={mise_en_placeById}
              test_type_selected={test_type_selected}
              Finaldata={Finaldata}
              Prise={commande.prise}
              setFinaldata={setFinaldata}
              setNewMisePlace={setNewMisePlace}
              error={error}
              current={current}
              settablelength={settablelength}
            />
          )}
        </>
      ) : (
        <>
          {Finaldata.test_type == '1phase' ? (
            <Phase1Forms
              mise_en_placeById={mise_en_placeById}
              test_type_selected={test_type_selected}
              Finaldata={Finaldata}
              Prise="SP"
              setFinaldata={setFinaldata}
              setNewMisePlace={setNewMisePlace}
              error={error}
              current={current}
              settablelength={settablelength}
            />
          ) : Finaldata.test_type == '3phase' ? (
            <Phase3Forms
              mise_en_placeById={mise_en_placeById}
              test_type_selected={test_type_selected}
              Finaldata={Finaldata}
              Prise="SP"
              setFinaldata={setFinaldata}
              setNewMisePlace={setNewMisePlace}
              error={error}
              current={current}
              settablelength={settablelength}
            />
          ) : (
            <>
              {' '}
              <Row justify="center">
                <Col
                  key="content"
                  span={24}
                  style={{
                    borderRadius: '10px',
                  }}>
                  <div className="steps-content">
                    <Alert
                      message="Mise en place du produit"
                      description="Veuillez Choisir le Type d'envirenement de test a utiliser."
                      type="info"
                      showIcon
                    />
                    <Row
                      justify="center"
                      align="middle"
                      style={{marginTop: '30px'}}>
                      <Radio.Group defaultValue="" buttonStyle="solid">
                        <Radio.Button
                          value="1phase"
                          onClick={() => {
                            settest_type_selected('1phase');
                          }}>
                          1 Phase
                        </Radio.Button>
                        <Radio.Button
                          value="3phase"
                          onClick={() => {
                            settest_type_selected('3phase');
                          }}>
                          3 Phase
                        </Radio.Button>
                      </Radio.Group>
                      {/* <Space direction="horizental">
                        <Select
                          defaultValue="Choose a Test envirenement"
                          options={Type_Test}
                          onChange={value => {
                            settest_type_selected(value);
                          }}
                        />
                      </Space> */}
                    </Row>
                  </div>
                </Col>
              </Row>
            </>
          )}
        </>
      )}
    </>
  );
}

export default Test_area;
