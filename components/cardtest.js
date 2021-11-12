import React from 'react';
import {useRouter} from 'next/router';
import {Card, Button, CardTitle, CardText, Row, Col} from 'reactstrap';

const Cardrapport = ({rapport, children}) => {
  const router = useRouter();
  return (
    <Card
      className="rapportscard"
      onClick={() => {
        router.push('/rapports/[id]', `/rapports/${rapport._id}`);
      }}>
      <CardText className="rapports-card-text">{rapport.title}</CardText>
    </Card>
  );
};

export default Cardrapport;
