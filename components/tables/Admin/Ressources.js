import React, {useState} from 'react';
import {
  Table,
  InputNumber,
  Popconfirm,
  Form,
  Typography,
  Input,
  Button,
  Row,
  Tooltip,
} from 'antd';
import {
  DeleteFilled,
  CheckOutlined,
  KeyOutlined,
  SearchOutlined,
  EditOutlined,
} from '@ant-design/icons';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

const originData = [];

for (let i = 0; i < 30; i++) {
  originData.push({
    key: i.toString(),
    nom: `Nom${i}`,
    couriel: `Couriel ${i}@couriel.com`,
    permissions: `permission ${i}`,
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
              message: `s'il vous plait entrer ${title}!`,
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

const EditableTable = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');
  const [isadding, setisadding] = useState(false);
  const [addingrow, setisaddingrow] = useState(null);

  const isEditing = record => record.key === editingKey;

  const edit = record => {
    form.setFieldsValue({
      nom: '',
      couriel: '',
      permissions: '',
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
      title: 'Nom',
      dataIndex: 'nom',
      editable: true,
      filterDropdown: ({setSelectedKeys, selectedKeys, confirm}) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="chercher par Nom"
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
        return record.nom
          .toString()
          .toLowerCase()
          .includes(value.toLowerCase());
      },
    },

    {
      title: 'Couriel',
      dataIndex: 'couriel',
      editable: true,
    },

    {
      title: 'Permissions',
      dataIndex: 'permissions',
      editable: true,
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
          <div>
            <Row justify="space-between">
              <Typography.Link
                disabled={editingKey !== ''}
                onClick={() => edit(record)}>
                <Tooltip title="Modifier" color="#108ee9" key="#108ee9">
                  <EditOutlined style={{fontSize: '20px', cursor: 'pointer'}} />
                </Tooltip>
              </Typography.Link>

              <Typography.Link
                disabled={editingKey !== ''}
                onClick={() => edit(record)}>
                <Tooltip title="Modifier le Role" color="#108ee9" key="#108ee9">
                  <KeyOutlined
                    style={{
                      fontSize: '20px',
                      cursor: 'pointer',
                      color: 'green',
                    }}
                  />
                </Tooltip>
              </Typography.Link>
              <Popconfirm
                title="es tu sure de supprimer?"
                onConfirm={() => handleDelete(record.key)}>
                <Tooltip
                  title="Supprimer l'utilisateur"
                  color="#108ee9"
                  key="#108ee9">
                  <DeleteFilled
                    style={{
                      fontSize: '20px',
                      cursor: 'pointer',
                      color: '#de2046',
                    }}
                  />
                </Tooltip>
              </Popconfirm>
            </Row>
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
        inputType: col.dataIndex === 'text',
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
    let newid = data.length + 1;
    addingrow &&
      setData(pre => {
        addingrow.key = newid;
        return [...pre, addingrow];
      });
    resetadding();
  };
  return (
    <div>
      <Row justify="space-between">
        Ressources
        <Button
          onClick={() => {
            setisadding(true);
          }}
          type="primary"
          style={{
            marginBottom: 16,
          }}>
          Add a row
        </Button>
      </Row>
      <Row>
        <Form form={form} component={false}>
          <Table
            style={{width: '80vh'}}
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
              defaultPageSize: 10,
              pageSizeOptions: [5, 10, 20, 50, 100],
            }}
          />
        </Form>
      </Row>
    </div>
  );
};
export default EditableTable;
