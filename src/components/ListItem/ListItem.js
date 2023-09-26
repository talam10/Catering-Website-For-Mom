import React from 'react'
import './ListItem.css'

function ListItem({title, description, price, itemImage}) {
  return (
    <div className='list-item'>
        <ul>
            <li>
                {itemImage && <img src={itemImage} alt="bg" />}
                <div>
                    <h3> {title} </h3>
                    {description && <p>{description}</p>}
                </div>
                <h3>${price}</h3>
            </li>
        </ul>
    </div>
  )
}

export default ListItem