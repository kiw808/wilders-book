import React from "react";
import WilderCard from "./WilderCard";
import wilders from "../data/wilders";

const Wilders = () => {
    return (
        <div className="bg-gray-700">
            <div className="container mx-auto">
                <header className="py-4">
                    <h1 className="text-4xl text-red-400">Wilders</h1>
                </header>
                <div className="grid grid-cols-5 gap-4 pb-12">
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
