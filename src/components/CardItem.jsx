import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
  return (
  <>
  <li className="cards__item" >
    <Link className="card__item__link" to={`/project/${props.id}`}>
    <figure className="cards__item__pic-wrap" data-category={props.label}>
        <img 
        src={props.src} 
        alt="Project Name" 
        className="cards__item__image"
         />
    </figure>
    <div className="cards__item__info">
    <h3 className="cards__item__text">
      {props.text}
    </h3>
    
</div>
    </Link>
  </li>
  </>
  )
}

export default CardItem;