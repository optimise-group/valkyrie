import { ReactNode } from 'react';

import { Sheet, SheetProps } from '@mui/joy';

interface ICodeblockProps extends SheetProps {
  children: ReactNode;
}

export default function Codeblock({ children, ...props }: ICodeblockProps) {
  return (
    <Sheet
      variant="outlined"
      color="primary"
      component="pre"
      sx={{
        fontSize: 'sm',
        fontFamily: 'code',
        p: 1,
        m: 0,
        borderRadius: 'sm',
        backgroundColor: 'rgba(var(--joy-palette-primary-mainChannel) / .1)'
      }}
      {...props}
    >
      <code>{children}</code>
    </Sheet>
  );
}
