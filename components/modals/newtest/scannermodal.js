import React, {useState, useRef, useEffect} from 'react';
import {Modal, Button, Input, Form, Checkbox} from 'antd';
import {useRouter} from 'next/router';

const App = ({modal, toggle, direction, teststatus}) => {
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState('Content of the modal');
  const [numcommande, setnumcommande] = useState(null);
  const [firsttestday, setfirsttestday] = useState(false);
  const [form] = Form.useForm();

  const router = useRouter();
  const inputEl = useRef(null);
  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.focus();
    }
  });

  const handleOk = () => {
    if (numcommande !== null) {
      setConfirmLoading(true);
      router.push({
        pathname: '/newtest/[id]',
        query: {id: numcommande, firstchecked: firsttestday},
      });
    }
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setConfirmLoading(false);
    form.resetFields();
    if (teststatus == 'fin' && direction == 'index') {
      router.push('/');
    } else {
      toggle();
    }
  };

  return (
    <>
      <Modal
        title="Scanner"
        visible={modal}
        onOk={handleOk}
        okText="Rechercher"
        okButtonProps={{form: 'scanner_form', htmlType: 'submit'}}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width={400}>
        <Form
          id="scanner_form"
          form={form}
          layout="vertical"
          name="basic"
          onFinish={handleOk}
          autoComplete="off">
          <Form.Item name="firsttest">
            <Checkbox onChange={e => setfirsttestday(e.target.checked)}>
              Premier Test de Jour
            </Checkbox>
          </Form.Item>
          <Form.Item
            label="Numero de Commande"
            name="Commande"
            rules={[
              {
                required: true,
                message: 'Veuillez Scanner le Numero de Commande!',
              },
            ]}>
            <Input
              ref={inputEl}
              onChange={e => setnumcommande(e.target.value)}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default App;
