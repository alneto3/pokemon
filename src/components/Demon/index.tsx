import React from "react";
import useEnemyMoviment from "../../hooks/useEnemyMoviment";
import { DEMON_TILE_SIZE, EDirection, TILE_SIZE, TILE_SIZELEFT, TILE_SIZETOP } from "../../settings/constants";

import './index.css';

interface IProps {
  initialPosition: { x: number, y: number}
}

const Demon = (props: IProps) => {
    const moviment = useEnemyMoviment (props.initialPosition)
    return (
        <div
        style={{
            position: 'absolute',  
            top: TILE_SIZETOP * moviment.position.y,
            left: TILE_SIZELEFT * moviment.position.x,
            width: DEMON_TILE_SIZE,
            height: DEMON_TILE_SIZE,
            backgroundImage: "url(./assets/DEMON.png)" ,
            backgroundRepeat: "no-repeat",
            animation: 'demon-animation 1s steps(4) infinite',
            transform: `scaleX(${moviment.direction === EDirection.RIGHT ? 1 : -1})`,
            
         }}
        />
    )
};

export default Demon;