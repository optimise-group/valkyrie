import { Box, Sheet } from '@mui/joy';
import { SxProps } from '@mui/joy/styles/types';

import ValkyrieIcon, { IValkyrieIcon } from '@sippy-platform/valkyrie';

export default function LargeIconGrid({ icon, sx }: { icon: IValkyrieIcon; sx?: SxProps }) {
  return (
    <Box
      sx={[
        {
          p: 'calc(var(--ValkyrieIcon-scale, 16px) * 2)',
          background: 'rgba(var(--joy-palette-background-channel) / .5)',
          borderRadius: 'xl',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(var(--joy-palette-background-channel) / .5)'
        },
        ...(Array.isArray(sx) ? sx : [sx])
      ]}
    >
      <Sheet
        variant="outlined"
        sx={{
          // Icon display
          color: 'text.primary',
          borderColor: 'var(--joy-palette-primary-200)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 'calc(var(--ValkyrieIcon-scale, 16px) * 16)',
          height: 'calc(var(--ValkyrieIcon-scale, 16px) * 16)',
          borderRadius: 'sm',
          backgroundColor: 'transparent',
          backgroundSize: 'var(--ValkyrieIcon-scale, 16px) var(--ValkyrieIcon-scale, 16px)',
          backgroundPosition: '-1px -1px',
          backgroundImage:
            'linear-gradient(to right, var(--joy-palette-primary-200) 1px, transparent 1px), linear-gradient(to bottom, var(--joy-palette-primary-200) 1px, transparent 1px)'
        }}
      >
        <ValkyrieIcon icon={icon} style={{ fontSize: 'calc(var(--ValkyrieIcon-scale, 16px) * 16)' }} />
      </Sheet>
    </Box>
  );
}
