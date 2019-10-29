import React from 'react';

import Grid from '@riipen-ui/components/Grid';
import GridItem from '@riipen-ui/components/GridItem';

export default function CenteredGrid() {
  const itemStyle = {
    backgroundColor: '#fff',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.23)',
    padding: '10px',
    textAlign: 'center',
  };

  return (
    <Grid>
      <GridItem lg={12} md="hidden">
        <div style={itemStyle}>lg=12 md=hidden</div>
      </GridItem>
      <GridItem lg={12} sm="hidden">
        <div style={itemStyle}>lg=12 sm=hidden</div>
      </GridItem>
    </Grid>
  );
}