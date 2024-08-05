import React from "react";

const Card = (props) => {
    return(
        <div className="card" style={{ width: "18rem" }}>
            <img src="..." class="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                    {props.nombre} {props.apellido}
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Card;