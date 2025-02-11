import { NavLink } from 'react-router-dom';

import { Box, Link, Sheet, Stack, Typography } from '@mui/joy';

import { ILibraryIcon } from '@/types';

import ValkyrieIcon from '@sippy-platform/valkyrie';

export default function IconCard({ icon }: { icon: ILibraryIcon }) {
  return (
    <Sheet
      key={icon.slug}
      sx={{
        gap: 0,
        borderRadius: 'sm',
        color: 'text.primary',
        bgcolor: 'neutral.50',
        '&:hover, &:focus-within': {
          color: 'primary.700',
          backgroundColor: 'primary.100'
        }
      }}
    >
      <Stack gap={1} justifyContent="center" alignItems="center" sx={{ pt: 2.5, pb: 1.5 }}>
        <Box sx={{ height: 28, width: 28, fontSize: 28 }} lineHeight="1rem">
          <ValkyrieIcon icon={icon.icon} />
        </Box>
        <Link
          overlay
          component={NavLink}
          to={`/icons/${icon.slug}`}
          underline="none"
          color="neutral"
          sx={{
            maxWidth: 'calc(100% - 16px)'
          }}
        >
          <Typography
            noWrap
            level="body-sm"
            sx={{
              px: 0.5,
              py: 0.25,
              borderRadius: 'sm',
              fontSize: 12,
              fontFamily: 'SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace'
            }}
          >
            {icon.slug}
          </Typography>
        </Link>
      </Stack>
    </Sheet>
  );
}
