import React, {useState, useEffect} from 'react';
import Addiform from '@/components/forms/editeur/addValeursrow';
import {
  Table,
  InputNumber,
  Popconfirm,
  Form,
  Typography,
  Input,
  Button,
} from 'antd';
import {DeleteFilled, CheckOutlined, SearchOutlined} from '@ant-design/icons';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Col,
  FormGroup,
} from 'reactstrap';

const originData = [];

for (let i = 0; i < 5; i++) {
  originData.push({
    key: i.toString(),
    champs: `PV 110% ${i}`,
    type: `Formule ${i}`,
    listevaleurs: `PV*110% 100 ${i}`,
  });
}

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}>
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const EditableTable = props => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');
  const [isadding, setisadding] = useState(false);
  const [addingrow, setisaddingrow] = useState(null);

  const isEditing = record => record.key === editingKey;

  const edit = record => {
    form.setFieldsValue({
      champs: '',
      type: '',
      listevaleurs: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async key => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex(item => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {...item, ...row});
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const handleDelete = key => {
    const dataSource = [...data];
    setData(dataSource.filter(item => item.key !== key));
  };
  const columns = [
    {
      title: 'Champs',
      dataIndex: 'champs',
      width: '30%',
      editable: true,
      filterDropdown: ({setSelectedKeys, selectedKeys, confirm}) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="chercher par champ"
              value={selectedKeys[0]}
              onChange={e => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({closeDropdown: false});
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
              allowClear></Input>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.champs
          .toString()
          .toLowerCase()
          .includes(value.toLowerCase());
      },
    },
    {
      title: 'Type',
      dataIndex: 'type',
      width: '30%',
      editable: false,
    },
    {
      title: 'Liste de Valeurs',
      dataIndex: 'listevaleurs',
      width: '40%',
      editable: false,
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              href="javascript:;"
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}>
              Save
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <div style={{justifyContent: 'space-between'}}>
            <Typography.Link
              disabled={editingKey !== ''}
              onClick={() => edit(record)}>
              Modifier
            </Typography.Link>
            <Popconfirm
              title="es tu sure de supprimer?"
              onConfirm={() => handleDelete(record.key)}>
              <DeleteFilled
                style={{
                  fontSize: '20px',
                  cursor: 'pointer',
                  color: '#de2046',
                  marginLeft: '15px',
                }}
              />
            </Popconfirm>
          </div>
        );
      },
    },
  ];
  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: record => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  const resetadding = () => {
    setisaddingrow(null);
    setisadding(false);
  };
  const handleAdd = () => {
    addingrow &&
      setData(pre => {
        addingrow.key = data.length + 1;
        return [...pre, addingrow];
      });
    resetadding();
  };
  const onAddRow = () => {
    setisadding(true);
  };
  return (
    <div>
      <Button
        onClick={onAddRow}
        type="primary"
        style={{
          marginBottom: 16,
        }}>
        Add a row
      </Button>
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
            defaultPageSize: 5,
            pageSizeOptions: [5, 10, 20, 50, 100],
          }}
        />
      </Form>
      <Modal isOpen={isadding} toggle={() => setisadding(!isadding)}>
        <ModalHeader>
          <h3 style={{color: 'black'}}> Ajouter une Valeur</h3>
        </ModalHeader>
        <ModalBody>
          <Addiform
            handleAdd={handleAdd}
            setisaddingrow={setisaddingrow}
            setisadding={() => setisadding(!isadding)}
          />
        </ModalBody>
      </Modal>
    </div>
  );
};
export default EditableTable;
