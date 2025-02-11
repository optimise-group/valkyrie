import { ReactNode } from 'react';

import { Typography, TypographyProps } from '@mui/joy';

interface ICodeProps extends TypographyProps {
  children: ReactNode;
}

export default function Code({ children, ...props }: ICodeProps) {
  return (
    <Typography
      fontSize="sm"
      fontFamily="code"
      color="primary"
      variant="soft"
      sx={{ display: 'inline', bgcolor: 'primary.100', borderRadius: 'sm' }}
      {...props}
    >
      {children}
    </Typography>
  );
}
