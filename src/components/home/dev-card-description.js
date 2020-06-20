/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';

const DevCardDescription = () => {
  return (
    <section
      sx={{
        maxWidth: 1440,
        display: 'grid',
        margin: '0 auto',
        gridTemplateColumns: 'minmax(auto, 500px), 1fr',
        gap: '2.5em',
      }}
    >
      <div>
        <h3
          sx={{
            fontFamily: 'heading',
            fontWeight: 400,
            fontSize: ['1.5rem', '2rem'],
            letterSpacing: 'text',
            marginLeft: 2,
            ':after': {
              content: "''",
              display: 'block',
              paddingTop: 1,
              width: '100%',
              borderBottom: `2px solid #e45858`,
            },
          }}
        >
          Dev Card
        </h3>
      </div>
      <div></div>
    </section>
  );
};

export default DevCardDescription;
