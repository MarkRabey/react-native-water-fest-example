import React from 'react';

import { Button } from 'galio-framework';

export default ({ children, ...props }) => (
  <Button shadowless uppercase { ...props }>
    { children }
  </Button>
);