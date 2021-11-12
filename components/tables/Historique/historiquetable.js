import React from "react"

import { Table } from 'reactstrap';

const Tables = (props) => {
    const {className ,filteredEssais, children, onChange} = props

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
  return (
    <Table borderless hover>
        <thead>
        <tr>
          <th>No de serie</th>
          <th>Type d'acier</th>
          <th>EPN1 WATTS</th>
          <th>EPN2 WATTS</th>
          <th>temps d'essai</th>
          <th>Pertes a vide</th>
          <th>PV vs Garanties</th>
          <th>% Destructin</th>
          <th>1.Exc % vs (amp)</th>
          <th>1.Exc % vs Gar</th>
        </tr>
        <tr style={{backgroundColor:"#174961"}}>
        <td>Total</td>
        <td>#</td>
        <td>{Math.round(sumEPN1WATTS/filteredEssais.length * 100) / 100}</td>
        <td>{Math.round(sumEPN2WATTS/filteredEssais.length * 100) / 100} </td>
        <td>{Math.round(sumTEMPSESSAI/filteredEssais.length * 100) / 100 }</td>
        <td>{Math.round(sumPERTESAVIDE/filteredEssais.length * 100) / 100 }</td>
        <td>#</td>
        <td>{Math.round(sumDESTRUTION/filteredEssais.length * 100) / 100 }</td>
        <td>{Math.round(sumEXC1amp/filteredEssais.length * 100) / 100 }</td>
        <td>{Math.round(sumEXC1GAR/filteredEssais.length * 100) / 100 }</td>
       </tr>
      </thead>
      <tbody >
        {filteredEssais.map((filteredEssai) => (
                   <tr key={filteredEssai.id} onClick={onChange}>
                     <td contentEditable>{filteredEssai.numserie}</td>
                     <td>{filteredEssai.typedacier}</td>
                     <td>{filteredEssai.EPN1WATTS}</td>
                     <td>{filteredEssai.EPN2WATTS}</td>
                     <td>{filteredEssai.TEMPSESSAI}</td>
                     <td>{filteredEssai.PERTESAVIDE}</td>
                     <td>{filteredEssai.PVVSGARANTIES}</td>
                     <td>{filteredEssai.DESTRUTION}</td>
                     <td>{filteredEssai.EXC1amp}</td>
                     <td>{filteredEssai.EXC1GAR}</td>
                   </tr>
        ))}
      </tbody> 
      </Table>
  );
}
export default Tables;