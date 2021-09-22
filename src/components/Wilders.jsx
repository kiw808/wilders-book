import React from "react";
import WilderCard from "./WilderCard";
import wilders from "../data/wilders";

const Wilders = () => {
    return (
        <div className="bg-dark">
            <div className="container">
                <header className="py-3">
                    <h1 className="text-secondary">Wilders</h1>
                </header>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                    {wilders.map((wilder) => (
                        <WilderCard
                            key={wilder.name}
                            name={wilder.name}
                            image={wilder.image}
                            skills={wilder.skills}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Wilders;
