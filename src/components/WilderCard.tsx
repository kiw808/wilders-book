import React from "react";

interface Props {
    name: string,
    image: string,
    skills: string[]
}

const WilderCard = ({ name, image, skills }: Props) => {
    return (
        <div className="bg-white rounded shadow">
            <img className="w-full rounded-t" src={image} alt={name}></img>
            <div className="p-4">
                <h3 className="text-xl font-medium mb-3">{name}</h3>
                <div>
                    {skills.map((skill) => (
                        <span className="py-1 px-2 bg-blue-300 text-xs rounded mr-2" key={skill}>
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WilderCard;
