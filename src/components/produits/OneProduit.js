import { FaTimes } from 'react-icons/fa'
import { FaPen } from 'react-icons/fa'
import EditProduit from './EditProduit';
import { useState } from 'react'


const OneProduit = ({produit, onDelete, onEdit}) => {
    const [showEditProduit, setShowEditProduit] = useState(false);

    return(
        <div className='row'>
            <div className='border p-4 m-2'>
                <div className='d-flex justify-content-between align-items-center pb-2'>
                    <h3>{produit.nom}</h3>
                    <div>
                        <button className='btn btn-info' disabled>$CA{Number(produit.prix).toFixed(2)}</button>
                        <div>
                            <FaPen
                            style={{ color: 'gray', cursor: 'pointer', transform: "scale(1.2)"}}
                            onClick = {() => setShowEditProduit(!showEditProduit)}
                            className='m-2'
                            />
                            <FaTimes
                            style={{ color: 'red', cursor: 'pointer', transform: "scale(1.5)"}}
                            onClick = {() => onDelete(produit.id)}
                            className='m-2'
                            />
                        </div>
                    </div>
                </div>
                <p>{produit.description}</p>
            </div>
                {showEditProduit && <EditProduit onEditProduit={onEdit} produit={produit} showEditOprion={showEditProduit}/>}
            <div>

            </div>
        </div>
    )
}

export default OneProduit