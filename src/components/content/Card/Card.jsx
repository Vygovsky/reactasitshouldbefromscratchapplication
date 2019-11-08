import React from 'react';
import './Card.css'

const Card = (props) => {
    const {firstName, lastName, id, onRemoveCard} = props;


    return (
        <div className="cards">
            <div className="card">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb3vWteB5ORRGyQ3ZUlEdnQrlLOJXQmTZj5-noK_AConAgAUzu"/>
                <div className="card-body">
                    <p className="card-text">{firstName} {lastName}</p>
                    <a href="#" className="btn bg-dark text-white btn-sm mr-2 float-left">Info</a>
                    <button onClick={()=>onRemoveCard(id)} className="btn bg-dark text-white btn-sm float-left">Delete
                    </button>
                </div>
            </div>
        </div>
    )
};
export default Card;
