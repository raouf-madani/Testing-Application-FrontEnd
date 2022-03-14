import React, {useState} from 'react';
import Baselayout from '@/components/layouts/baselayout';
import Basepage from '@/components/Basepage';
import Modalnewtestscanner from '@/components/modals/newtest/scannermodal';
import {UseGetUser} from '@/actions/user';
import withAuth from '@/hoc/withAuth';
import {Spin, Space, Row, Card, Divider} from 'antd';
const Editeur = () => {
  const {data, loading} = UseGetUser();
  const [modal, setmodal] = useState(false);

  return (
    <div>
      <Baselayout user={data} loading={loading} status={0}>
        <Basepage className="base-page">
          <Row justify="center">
            <h1>Editeur is on the road.</h1>
          </Row>
        </Basepage>
        <Modalnewtestscanner
          modal={modal}
          toggle={() => setmodal(!modal)}
          teststatus={0}
          direction="index"
        />
      </Baselayout>
    </div>
  );
};

export default withAuth(Editeur)('admin');
