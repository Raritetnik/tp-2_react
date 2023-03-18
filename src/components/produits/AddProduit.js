import { useState } from 'react'

const AddProduit = ({onAdd}) => {
    const [nom, setNom] = useState('')
    const [description, setDescription] = useState('')
    const [prix, setPrix] = useState(0)
    const [categorie, setCategorie] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        if(!nom){
            alert('Veillez saisir le nom de produit')
            return
        }
        onAdd({nom, prix, categorie, description})
        setDescription('')
        setPrix(0)
        setNom("")
        setCategorie("")

    }


    return (
        <aside className='addProduct border rounded-2 px-5 py-2' >
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
        </aside>
    )
}

export default AddProduit