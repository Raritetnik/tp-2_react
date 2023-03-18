import OneProduit from './OneProduit'

const ListeProduits = ({produits, onDeleteMany, onEditMany, menuOption ,setMenuOption}) => {
    return(
        <>
            <div className='d-flex justify-content-between'>
                <h3 className='py-3'>Liste des produits</h3>
                {menuOption ? (<button onClick={() => setMenuOption(!menuOption)} className='btn btn-danger' id='btnAdder'>Fermer</button>)
                 :
                (<button onClick={() => setMenuOption(!menuOption)} className='btn btn-primary' id='btnAdder'>Ajouter</button>) }
            </div>
            {produits.map((produit)=>(
                <OneProduit key={produit.id} produit={produit} onDelete={onDeleteMany} onEdit={onEditMany}/>
            ))}
        </>
    )
}

export default ListeProduits