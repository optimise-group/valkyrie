import { ReactNode } from 'react';

import { Box, Container } from '@mui/joy';

interface IHeaderProps {
  children: ReactNode;
}

export default function Header({ children }: IHeaderProps) {
  return (
    <Box
      sx={{
        bgcolor: 'primary.100',
        pb: 3,
        pt: 12,
        borderBottom: '1px solid var(--joy-palette-primary-outlinedBorder)'
      }}
    >
      <Container>{children}</Container>
    </Box>
  );
}
