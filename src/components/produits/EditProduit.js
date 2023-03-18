import { useState } from 'react'

const EditProduit = ({onEditProduit, produit}) => {
    const id = produit.id;
    const [nom, setNom] = useState(produit.nom)
    const [description, setDescription] = useState(produit.description)
    const [prix, setPrix] = useState(produit.prix)
    const [categorie, setCategorie] = useState(produit.categorie)

    const onSubmit = (e) => {
        e.preventDefault()
        if(!nom){
            alert('Veillez saisir le nom de produit')
            return
        }
        onEditProduit({id, nom, prix, categorie, description});
    }

    const styleBoite = {
        backgroundColor: '#80EFB7',
        border: '1 solid black',
        padding: 10
    }
    return (
        <div style={styleBoite}>
            <form className="add-form" onSubmit={onSubmit}>
                <div className='m-1'>
                    <label className='form-label'>Nom</label>
                    <input
                    className='form-control'
                    type='text'
                    placeholder="Nom de produit"
                    value={nom}
                    onChange = {(e) => setNom(e.target.value)}
                    />
                </div>
                <div className='m-1'>
                    <label className='form-label'>Catégorie</label>
                    <input
                    className='form-control'
                    type='text'
                    placeholder="Catégorie"
                    value={categorie}
                    onChange = {(e) => setCategorie(e.target.value)}
                    />
                </div>
                <div className='m-1'>
                    <label className='form-label'>Prix</label>
                    <input
                    className='form-control'
                    type='number'
                    value={prix}
                    step="0.01"
                    onChange = {(e) => setPrix(e.target.value)}
                    />
                </div>
                <div className='m-1'>
                    <label className='form-label'>Description</label><br/>
                    <textarea
                    className='form-control'
                    placeholder="Description de produit..."
                    value={description}
                    onChange = {(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className='d-flex justify-content-end mt-2'>
                    <input type="submit" className="btn btn-primary" value="Sauvegarder"/>
                </div>
            </form>
        </div>
    )
}

export default EditProduit