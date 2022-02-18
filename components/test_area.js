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
  // props for buttons
  status,
  resume,
  stop,
  AnnulerConfirm,
  prev,
  tablelength,
  // props button reussi
  next,
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
              setFinaldata={setFinaldata}
              setNewMisePlace={setNewMisePlace}
              error={error}
              current={current}
              settablelength={settablelength}
              //props for buttons
              status={status}
              resume={resume}
              stop={stop}
              AnnulerConfirm={AnnulerConfirm}
              prev={prev}
              tablelength={tablelength}
              // props button reussi
              next={next}
            />
          ) : (
            <Phase3Forms
              commande={commande}
              mise_en_placeById={mise_en_placeById}
              test_type_selected={test_type_selected}
              Finaldata={Finaldata}
              setFinaldata={setFinaldata}
              setNewMisePlace={setNewMisePlace}
              error={error}
              current={current}
              settablelength={settablelength}
              //props for buttons
              status={status}
              resume={resume}
              stop={stop}
              AnnulerConfirm={AnnulerConfirm}
              prev={prev}
              tablelength={tablelength}
              // props button reussi
              next={next}
            />
          )}
        </>
      ) : (
        <>
          {Finaldata.test_type == '1phase' ? (
            <Phase1Forms
              commande={commande}
              mise_en_placeById={mise_en_placeById}
              test_type_selected={test_type_selected}
              Finaldata={Finaldata}
              setFinaldata={setFinaldata}
              setNewMisePlace={setNewMisePlace}
              error={error}
              current={current}
              settablelength={settablelength}
              //props for buttons
              status={status}
              resume={resume}
              stop={stop}
              AnnulerConfirm={AnnulerConfirm}
              prev={prev}
              tablelength={tablelength}
              // props button reussi
              next={next}
            />
          ) : Finaldata.test_type == '3phase' ? (
            <Phase3Forms
              commande={commande}
              mise_en_placeById={mise_en_placeById}
              test_type_selected={test_type_selected}
              Finaldata={Finaldata}
              setFinaldata={setFinaldata}
              setNewMisePlace={setNewMisePlace}
              error={error}
              current={current}
              settablelength={settablelength}
              //props for buttons
              status={status}
              resume={resume}
              stop={stop}
              AnnulerConfirm={AnnulerConfirm}
              prev={prev}
              tablelength={tablelength}
              // props button reussi
              next={next}
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
                    </Row>
                  </div>
                </Col>
              </Row>
            </>
          )}
        </>
      )}
      <div
        className="steps-action"
        style={{display: 'flex', justifyContent: 'end'}}>
        {test_type_selected && (
          <Form.Item>
            {current == 0 && (
              <Button
                type="primary"
                tabIndex={mise_en_placeById !== null ? 3 : 15}
                htmlType="submit">
                'Commencer'
              </Button>
            )}
          </Form.Item>
        )}
      </div>
    </>
  );
}

export default Test_area;
