import React, {useState} from 'react';
import {Table, Dropdown, Menu, Select, Popconfirm, Typography} from 'antd';
import Modal from '@/components/modals/editeur/editeurmodal';
import Addiform from '@/components/forms/editeur/addmodeletapes';

import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from 'react-sortable-hoc';
import {MenuOutlined, DeleteFilled} from '@ant-design/icons';
import {arrayMoveImmutable} from 'array-move';
const DragHandle = sortableHandle(() => (
  <MenuOutlined style={{cursor: 'grab', color: '#999'}} />
));

const SortableItem = sortableElement(props => <tr {...props} />);
const SortableContainer = sortableContainer(props => <tbody {...props} />);
const SortableTable = props => {
  const {tabledata, isadding, setisadding} = props;

  const [dataSource, setdataSource] = useState(tabledata);
  const [addingrow, setisaddingrow] = useState(null);

  const handleDelete = key => {
    console.log(dataSource);
    setdataSource(dataSource.filter(item => item.key !== key));
  };
  const columns = [
    {
      dataIndex: 'sort',
      width: '15%',
      className: 'drag-visible',
      render: () => <DragHandle />,
    },
    {
      dataIndex: 'etape',
      className: 'drag-visible',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_, record) => {
        return (
          <div>
            <Popconfirm
              title="es tu sure de supprimer?"
              onConfirm={() => handleDelete(record.key)}>
              <DeleteFilled
                style={{fontSize: '20px', cursor: 'pointer', color: '#de2046'}}
              />
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  const onSortEnd = ({oldIndex, newIndex}) => {
    if (oldIndex !== newIndex) {
      const newData = arrayMoveImmutable(
        [].concat(dataSource),
        oldIndex,
        newIndex
      ).filter(el => !!el);
      console.log('Sorted items: ', newData);
      setdataSource(newData);
    }
  };

  const DraggableContainer = props => (
    <SortableContainer
      useDragHandle
      disableAutoscroll
      helperClass="row-dragging"
      onSortEnd={onSortEnd}
      {...props}
    />
  );

  const DraggableBodyRow = ({className, style, ...restProps}) => {
    // function findIndex base on Table rowKey props and should always be a right array index
    const index = dataSource.findIndex(
      x => x.index === restProps['data-row-key']
    );
    return <SortableItem index={index} {...restProps} />;
  };
  const resetadding = () => {
    setisaddingrow(null);
    setisadding(false);
  };
  const handleAdd = () => {
    let newid = dataSource.length + 1;
    addingrow.coditions = 'foor';
    addingrow.index = newid;
    addingrow.key = newid;
    addingrow &&
      setdataSource(pre => {
        return [...pre, addingrow];
      });
    resetadding();
  };

  return (
    <div>
      {' '}
      <Table
        showHeader={false}
        pagination={false}
        dataSource={dataSource}
        columns={columns}
        rowKey="index"
        components={{
          body: {
            wrapper: DraggableContainer,
            row: DraggableBodyRow,
          },
        }}
      />
      <Modal
        toggle={() => setisadding(!isadding)}
        modal={isadding}
        title="Ajouter un model d'etape"
        className="modalContainer"
        width="45%">
        <Addiform
          handleAdd={handleAdd}
          setisaddingrow={setisaddingrow}
          setisadding={() => setisadding(!isadding)}
          addingrow={addingrow}
          tabledata={tabledata}
        />
      </Modal>
    </div>
  );
};
export default SortableTable;
