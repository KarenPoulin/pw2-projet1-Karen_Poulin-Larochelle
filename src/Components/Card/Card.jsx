import React from 'react'
import './Card.css'

const Card = (props) => {
    const classnames = ["card"];

    if (props.className) {classnames.push(props.className)};
    if (props.pokemonType) {classnames.push(props.pokemonType)}
    if (props.borders) {classnames.push(props.borders)}

    const onMouseEnter = () => {
      console.log("entered");
      props.onMouseEnter(props.value);
    };

    const onMouseLeave = () => {
        console.log("left");
        props.onMouseLeave();
    };

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={classnames.join(" ")}>{props.children}</div>
  )
}

export default Card