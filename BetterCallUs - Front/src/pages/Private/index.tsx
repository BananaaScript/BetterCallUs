import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';

export const Private = () => {

    const auth = useContext(AuthContext)
    return(
        <div>
            <h2>FLAMENGOOO</h2><br/>
            Olá {auth.usuario?.nome} 
        </div>
    )

}