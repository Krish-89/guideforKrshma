import React from 'react'
import CategoryItem from './category-item.component'

function CategoryItemComponent({categories}) {
  return (
    <div>




 <div className='categories-container'>
          {categories.map((category) => (
               <CategoryItem key={category.id} category={category} />
            ))}
   </div>
    </div>
  )
}

export default CategoryItemComponent