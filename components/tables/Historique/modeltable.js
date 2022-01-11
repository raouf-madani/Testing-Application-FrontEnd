import React, {useState} from 'react';
import {Table} from 'reactstrap';

const Modeltable = props => {
  const {className, filteredCommands, children, onchangeselected, colored} =
    props;
  const [selectedrow, setselectedrow] = useState('');
  const onchange = mod => {
    setselectedrow(mod);
    onchangeselected(mod);
  };
  return (
    <>
      <Table hover className="models-table">
        <thead>
          <tr>
            <th>No de Produit</th>
          </tr>
        </thead>
        <tbody>
          {filteredCommands.map(filteredComand => (
            <tr
              key={filteredComand._id}
              style={
                selectedrow === filteredComand.id_product && colored == true
                  ? {background: '#009999', color: 'white'}
                  : {}
              }
              onClick={() => onchange(filteredComand.id_product)}>
              <td>{filteredComand.id_product}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Modeltable;
