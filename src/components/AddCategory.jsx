import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onImputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        //setCategories(categories => [inputValue, ...categories]);   YA NO EXISTE ENTONCES...
        setInputValue('');
        onNewCategory(inputValue.trim());
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar GIFS..."
                value={inputValue}
                onChange={onImputChange}
            />
        </form>
    )
}
