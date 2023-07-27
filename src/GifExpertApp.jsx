import React from 'react'
import { useState } from 'react'
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = ( newCategory ) => {

    if ( categories.includes( newCategory ) ) return;
    //categories.push(newCategory) EVITAR LOS PUSH
    setCategories([newCategory, ...categories]);
    //setCategories(cat => [...cat, 'Naruto' ]);   (opción B)
  }

  return (
    <>

      <h1>GIF EXPERT APP</h1>

      <AddCategory 
       //setCategories={setCategories}
        onNewCategory= {(value) => onAddCategory(value)}
      />

      {
        categories.map( category => (
          <GifGrid
            key={category}
            category={category}
          />
        ) ) 
      }
    </>
  )
}
