import React, {useState} from 'react';
import Baselayout from '@/components/layouts/baselayout';
import Basepage from '@/components/Basepage';
import Modalnewtestscanner from '@/components/modals/newtest/scannermodal';
import Ressources from '@/components/tables/Admin/Ressources';
import {UseGetUser} from '@/actions/user';
import withAuth from '@/hoc/withAuth';
import {Spin, Space, Row, Card, Divider} from 'antd';
const Pilote = () => {
  const {data, loading} = UseGetUser();
  const [modal, setmodal] = useState(false);
  return (
    <div>
      <Baselayout user={data} loading={loading} status={0}>
        <Basepage className="base-page">
          <main className="Homemain">
            <Row justify="center">
              <Ressources searchtext="" />
            </Row>
          </main>
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
export default withAuth(Pilote)('admin');
