import React from 'react';

const EvolutionChain = ({ evolvesFrom, firstEvolution, secondEvolution, currentEvolution }) => {
  return (
    <div className="evolution-wrapper">
      <div className="evolution">
        {evolvesFrom ? (
          <>
            <span>Evolves From: </span>
            <img className="evolution-img" src={evolvesFrom.img} alt={evolvesFrom.name} />
          </>
        ) : (
          <span>{`Evolves from: Null`}</span>
        )}
      </div>
      <div className="evolution">
        {currentEvolution.name === firstEvolution.name ? (
          <>
            <span>Evolves into: </span>
            <img className="evolution-img" src={secondEvolution.img} alt={secondEvolution.name} />
          </>
        ) : currentEvolution.name !== firstEvolution.name &&
          currentEvolution.name !== secondEvolution.name ? (
          <>
            <span>Evolves into: </span>
            <img className="evolution-img" src={firstEvolution.img} alt={firstEvolution.name} />
          </>
        ) : (
          <span>{`Evolves into: Null `}</span>
        )}
      </div>
    </div>
  );
};

export default EvolutionChain;
