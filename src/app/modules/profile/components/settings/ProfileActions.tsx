import React from 'react';
import { Link } from 'react-router-dom';

const ProfileActions: React.FC = () => {
  return (
    <div className="d-flex my-4">
      <button className="btn btn-primary me-2">Agregar a historia</button>
      <Link to="/profile/edit" className="btn btn-light">
        Editar perfil
      </Link>
      <button className="btn btn-secondary ms-2">Más</button>
    </div>
  );
};

export default ProfileActions;
