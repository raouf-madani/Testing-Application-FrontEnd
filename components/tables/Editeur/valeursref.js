import React, { useState} from 'react';
import { Table, InputNumber, Popconfirm, Form, Typography,Input, Button } from 'antd';
import { SearchOutlined, EditOutlined} from '@ant-design/icons';

const originData = [];

for (let i = 0; i < 50; i++) {
  originData.push({
    key: i.toString(),
    champs: `NO Serie ${i}`,
    source: `SAP ${i}`,
    nomaffiche: `Nom Affiche ${i}`,
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
          ]}
        >
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

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      champs: '',
      source: '',
      nomaffiche: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
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

  const columns = [
    {
      title: 'Champs',
      dataIndex: 'champs',
      width: '30%',
      editable: false,
      filterDropdown:({setSelectedKeys, selectedKeys, confirm})=>{
        return (
        <>
        <Input 
        autoFocus
        placeholder="chercher par champ"
        value={selectedKeys[0]}
        onChange={(e)=> {setSelectedKeys(e.target.value?[e.target.value]:[]);
        confirm({closeDropdown : false})
        }}
        onPressEnter={()=>{confirm()}}
        onBlur={()=>{confirm()}}
        allowClear
        ></Input>
        </>)
      },
      filterIcon:()=>{
        return <SearchOutlined/>
      },
      onFilter:(value, record) => {return record.champs.toString().toLowerCase().includes(value.toLowerCase())}
    },
    {
      title: 'Source',
      dataIndex: 'source',
      width: '30%',
      editable: false,
    },
    {
        title: 'Nom Affiché',
        dataIndex: 'nomaffiche',
        width: '40%',
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
              }}
            >
              Save
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <div style={{justifyContent:"space-between"}}>
            <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            <EditOutlined style={{fontSize:"20px", cursor:"pointer", marginLeft:"10px" }} />
            </Typography.Link>
          </div>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
      <div >
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
          defaultPageSize:5,
          pageSizeOptions: [5, 10, 20, 50, 100]
        }}
      />
    </Form>
    </div>
  );
};
export default EditableTable;