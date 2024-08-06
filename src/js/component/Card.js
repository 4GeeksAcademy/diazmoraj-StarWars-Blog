import React from "react";

const Card = ({nombre}) => {
    return(
        <div className="card col-6" style={{ width: "18rem" }}>
            <img src="..." class="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <a href="#" class="btn btn-primary">Learn More</a>
            </div>
        </div>
    )
}

export default Card;