import React from 'react';
import Baselayout from '@/components/layouts/baselayout';
import Basepage from '@/components/Basepage';
import {UseGetUser} from '@/actions/user';
import {Spin, Space, Row, Card, Divider} from 'antd';
function pilote() {
  const {data, loading} = UseGetUser();
  return (
    <div>
      <Baselayout user={data} loading={loading}>
        <Basepage className="base-page">
          <Row justify="center">
            <h1>Pilote is on road</h1>
          </Row>
        </Basepage>
      </Baselayout>
    </div>
  );
}

export default pilote;
