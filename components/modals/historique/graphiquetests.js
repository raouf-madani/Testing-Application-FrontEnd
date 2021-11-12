
import React, { useState, useEffect } from 'react';

import Cartchart from '@/components/testchart'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Col,Form, FormGroup } from 'reactstrap';

const ModalExample = (props) => {
  const {className , children,toggleAll,toggle, isOpen, onClosed,filteredEssais} = props
  const [chartData, setchartData] = useState();

  
  var sumEPN1WATTS = 0,sumEPN2WATTS = 0,sumTEMPSESSAI = 0,sumPERTESAVIDE = 0,sumDESTRUTION = 0,sumEXC1amp = 0,sumEXC1GAR = 0;
  for (var key in filteredEssais) {
      sumEPN1WATTS += filteredEssais[key].EPN1WATTS;
      sumEPN2WATTS += filteredEssais[key].EPN2WATTS;
      sumTEMPSESSAI += filteredEssais[key].TEMPSESSAI;
      sumPERTESAVIDE += filteredEssais[key].PERTESAVIDE ;
      sumDESTRUTION += filteredEssais[key].DESTRUTION;
      sumEXC1amp += filteredEssais[key].EXC1amp;
      sumEXC1GAR += filteredEssais[key].EXC1GAR;
  }
useEffect(() => {
  getChartData();
});

const getChartData = () => {
  // Ajax calls here
  setchartData({
      labels: ['EPN1WATTS', 'EPN2WATTS', 'TEMPSESSAI', 'PERTESAVIDE', 'DESTRUTION', 'EXC1amp','EXC1GAR'],
      datasets:[
        {
          label:'Position 1',
          data:[
            sumEPN1WATTS/filteredEssais.length,
            sumEPN2WATTS/filteredEssais.length,
            sumTEMPSESSAI/filteredEssais.length,
            sumPERTESAVIDE/filteredEssais.length,
            sumDESTRUTION/filteredEssais.length,
            sumEXC1amp/filteredEssais.length,
            sumEXC1GAR/filteredEssais.length
          ],
          backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 82, 200, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(151, 72, 90, 0.6)'
          ]
        }
      ]
  });
}

  return (
    <div >
       <Modal isOpen={isOpen} toggle={toggle} onClosed={onClosed} size="xl" style={{width:"600px"}}>
                  <ModalHeader>Graphique des tests</ModalHeader>
                  <ModalBody>
                  <Cartchart  title="Position 1"   chartData={chartData} legendPosition="bottom"/>
                  <Cartchart  title="Position 2"   chartData={chartData} legendPosition="bottom"/>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={toggle}>Fermer</Button>{' '}
                    <Button color="secondary" onClick={toggleAll}>Fermer Tout</Button>
                  </ModalFooter>
                </Modal>
    </div>
  );
}

export default ModalExample;