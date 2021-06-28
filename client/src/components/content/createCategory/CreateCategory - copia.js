import React, {useState} from 'react'

function CreateCategory() {
        const [input, setInput] = useState({
            name: "",
            description: "",
        })
    
        function handleChange(e) {
            const value = e.target.value
            setInput({
                ...input,
                [e.target.name]: value
            })
        }
    
        function onSubmit() {
            // despachar action que haga el post a categories
        }
    
        return (
            <form onSubmit={onSubmit}>
                <label> Nombre </label>
                <input type="text" name="name" onChange={handleChange}/>
    
                <label> Descripción </label>
                <input type="text" name="description" onChange={handleChange}/>
    
                <label> Imagen </label>
                <input type="file" accept="image/png, image/jpeg"/> {/* Investigar handleFiles */}
            </form>
        )
}

export default CreateCategory
