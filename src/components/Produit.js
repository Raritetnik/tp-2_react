import { useState, useEffect } from 'react'

import AddProduit from './produits/AddProduit'
import ListeProduits from './produits/ListeProduits'


const Produit = () => {

    const [produits, setProduits] = useState ([])

    // Remplissage au démarrage
    useEffect(()=>  {
            const getProduits = async () => {
            const produitsDeServer = await fetchProduits()
            setProduits(produitsDeServer)
        }
        getProduits()
        //fetchTasks()
    },[])

    // Receptions des produits
    const fetchProduits = async () => {
    const res = await fetch('http://localhost:3000/produits')
    const data = await res.json()
    return data
    }

    // Receptions des produit unique
    const fetchProduit = async (id) => {
        const res = await fetch(`http://localhost:3000/produits/${id}`)
        const data = await res.json()
        return data
    }

    // Supprimer un produit unique
    const deleteProduit = async (id) => {
        await fetch(`http://localhost:3000/produits/${id}`, {
            method: 'DELETE',
        })
        setProduits(produits.filter((produit) => produit.id !== id))
    }

    // Modifier un paramètre un produit unique
    const modifierProduit = async (newProduit) => {
        const res = await fetch(`http://localhost:3000/produits/${newProduit.id}`,{
            method: 'PUT',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newProduit)
        })
        setProduits(produits.map((produit) => (produit.id === newProduit.id) ? newProduit : produit))
    }

    //Add
    const addProduit =  async (produit) => {
    const res = await fetch('http://localhost:3000/produits', {
        method: 'POST',
        headers: {
        'Content-type': 'application/json'
        },
        body: JSON.stringify(produit)
    })
    const newProduit = await res.json()
    setProduits([...produits, newProduit])
    }

    let [showMenu, setShowMenu] = useState(false);

    return (
        <div className=''>
            {showMenu && <div className='d-flex justify-content-center p-3 sticky-lg-top'>
                <AddProduit onAdd={addProduit}/>
            </div>}
            <div className='container'>
                <ListeProduits produits={produits} onDeleteMany={deleteProduit} onEditMany={modifierProduit} setMenuOption={setShowMenu} menuOption={showMenu}/>
            </div>
        </div>
    )
}
export default Produit