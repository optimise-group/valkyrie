import { NavLink, useLocation } from 'react-router-dom';

import { Box, Button, Container, IconButton, Link, Sheet, Stack } from '@mui/joy';

import ValkyrieIcon, { viGithub } from '@sippy-platform/valkyrie';

export default function Navbar() {
  const location = useLocation();

  return (
    <Container
      maxWidth="lg"
      sx={{
        position: 'sticky',
        zIndex: 1600,
        top: 0,
        pt: 2,
        mb: 2
      }}
    >
      <Sheet
        variant="outlined"
        sx={{
          zIndex: 1600,
          borderRadius: 'md',
          p: 1.5,
          background: 'rgba(var(--joy-palette-primary-mainChannel) / .75)',
          border: '1px solid rgba(var(--joy-palette-primary-mainChannel) / .75)',
          backdropFilter: 'blur(20px)',
          boxShadow: 'xs',
          height: 58,
          '--joy-fontFamily-body': 'var(--joy-fontFamily-display)'
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            gap: 1,
            '--variant-plainColor': 'var(--joy-palette-common-white)',
            '--variant-plainHoverBg': 'var(--joy-palette-primary-500)',
            '--variant-plainActiveBg': 'var(--joy-palette-primary-600)'
          }}
        >
          <Stack direction="row" alignItems="center" gap={1} sx={{ pl: 0.5 }}>
            <Link color="neutral" underline="none" level="h1" fontSize="xl" sx={{ color: 'common.white' }} component={NavLink} to="/">
              <img src="logo.svg" style={{ width: 24, height: 24, marginRight: 8 }} />
              <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
                Valkyrie
              </Box>
            </Link>
          </Stack>
          <Stack direction="row" gap={0.5}>
            <Button
              component={NavLink}
              to="/"
              variant={location?.pathname === '/' ? 'solid' : 'plain'}
              size="sm"
              color={location?.pathname === '/' ? 'primary' : 'primary'}
            >
              Home
            </Button>
            <Button
              component={NavLink}
              to="/icons"
              variant={location?.pathname?.startsWith('/icons') ? 'solid' : 'plain'}
              size="sm"
              color={location?.pathname?.startsWith('/icons') ? 'primary' : 'primary'}
            >
              Icons
            </Button>
            <Button
              component={NavLink}
              to="/docs"
              variant={location?.pathname?.startsWith('/docs') ? 'solid' : 'plain'}
              size="sm"
              color={location?.pathname?.startsWith('/docs') ? 'primary' : 'primary'}
            >
              Docs
            </Button>
            <Button
              component={NavLink}
              to="/changelog"
              variant={location?.pathname?.startsWith('/changelog') ? 'solid' : 'plain'}
              size="sm"
              color={location?.pathname?.startsWith('/changelog') ? 'primary' : 'primary'}
            >
              Changelog
            </Button>
          </Stack>
          <Stack direction="row" justifyContent="flex-end">
            <IconButton size="sm" variant="plain" color="primary" component="a" href="https://github.com/sippy-platform/valkyrie" target="_blank">
              <ValkyrieIcon icon={viGithub} />
            </IconButton>
          </Stack>
        </Box>
      </Sheet>
    </Container>
  );
}
