import React from 'react';
import './CardList.css';

const CardList = props => {
    return (
        <div id="cardGrid">
            {props.cardList.map(card => (
                <span key={card.id}><img
                    src={card.imageUrl}
                    alt={`${card.name} - ${card.text}`}/>
                <table>
                    <tbody>
                    <tr>
                        <th scope="row">Name</th>
                        <td>{card.name}</td>
                    </tr>
                    <tr>
                        <th scope="row">Text</th>
                        <td>{card.text}</td>
                    </tr>
                    <tr>
                        <th scope="row">Set Name</th>
                        <td>{card.set.name}</td>
                    </tr>
                    <tr>
                        <th scope="row">Type</th>
                        <td>{card.type}</td>
                    </tr>
                    </tbody>
                </table>
            </span>
            ))}
        </div>
    );

};

export default CardList;