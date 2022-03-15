import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs'
import GifGridItem from './GifGridItem'


export const GifGrid = ({category}) => {
    // se puede renombrar
    const { data:images,loading }= useFetchGifs( category );

  return (
      <>
        <h2 className='animate__animated animate__fadeIn'>{category}</h2>

        {loading && <p>loading....</p>}
        
        <div className='card-grid'>
        
            {
                images.map(img=>
                (
                    <GifGridItem 
                        key={img.id} 
                        {...img} // manda las propiedades del objeto
                        />
                )
                )
            }
        
        </div>
    </>
  )
}
