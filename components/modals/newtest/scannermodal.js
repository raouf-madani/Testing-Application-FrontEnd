import React, {useState} from 'react';
import {Modal, Button, Input, Form} from 'antd';
import {useRouter} from 'next/router';

const App = ({modal, toggle, direction}) => {
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState('Content of the modal');
  const [numcommande, setnumcommande] = useState(null);
  const [form] = Form.useForm();

  const router = useRouter();

  const handleOk = () => {
    if (numcommande !== null) {
      setConfirmLoading(true);
      router.push('/newtest/[id]', `/newtest/${numcommande}`);
    }
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setConfirmLoading(false);
    form.resetFields();
    router.push('/');
    if (direction == 'index') {
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
          <Form.Item
            label="Numero de Commande"
            name="Commande"
            rules={[
              {
                required: true,
                message: 'Veuillez Scanner le Numero de Commande!',
              },
            ]}>
            <Input onChange={e => setnumcommande(e.target.value)} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default App;
