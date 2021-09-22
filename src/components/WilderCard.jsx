import React from "react";
import PropTypes from "prop-types";

const WilderCard = ({ name, image, skills }) => {
    return (
        <div className="col">
            <div className="card shadow-sm mb-4">
                <img className="card-image-top" src={image} alt={name}></img>
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <div>
                        {skills.map((skill) => (
                            <span className="badge text-primary" key={skill}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

WilderCard.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    skills: PropTypes.array,
};

export default WilderCard;
