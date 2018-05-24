import React from 'react';

export default ({ fac }) => {
  return (
    <section className="game">
      {fac.length !== 32 ? (
        <p>...loading</p>
      ) : (
        fac.map((member, index) => <article key={index}>{member.name}</article>)
      )}
    </section>
  );
};
