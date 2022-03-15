import React,{useState} from 'react'
import PropTypes from 'prop-types'

// pasando una funcion de props
export const AddCategory = ({setCategories}) => {

    const [valor, setValor] = useState("")

    //verifica el valor del estado
    const handleInputChange=(e)=>{
        setValor(e.target.value)
    }
    //maneja el evento de envio
    const handleSubmit=(e)=>{
        e.preventDefault()

        if(valor.trim().length > 2){
            setCategories(categorie =>[ valor,...categorie ])
            setValor('')
        }

        
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={valor}
                onChange={handleInputChange}
            />
        </form>
    </>
  )
}
// verifica que sea una funcion
AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}
