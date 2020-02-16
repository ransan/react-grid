import React, { useState } from 'react';
import Prototypes from 'prop-types'
import { Button, Modal } from 'antd';
import "antd/dist/antd.css";
import './card.styles.css';

const Card = props => {
  const [getModal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  };

  const handleOk = () => {
    setModal(false);
  };

  return (
    <div className='card-container'>
      <img
        alt='monster'
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      />
      <h2> {props.monster.name} </h2>
      <p> {props.monster.email} </p>
        <Button type="default" onClick={() => showModal()}>Select</Button>
        <Modal
          title={`I am ${props.monster.name}`}
          visible={getModal}
          onOk={() => handleOk() }
          onCancel={() => handleOk()}
        >
          <p>{props.monster.email}</p>
        </Modal>
    </div>
  )
};

Card.defaultpros = {
  monster: {
    name: '',
    email: '',
  },
};

Card.prototypes = {
  monster: {
    name: Prototypes.string,
    email: Prototypes.string,
  } 
};

export default Card;