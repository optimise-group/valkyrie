import { useState } from 'react';
import { createSearchParams, NavLink, useNavigate } from 'react-router-dom';

import { Alert, Box, Button, Container, IconButton, Input, Stack, Typography } from '@mui/joy';

import icons from '@/data/icons';
import Codeblock from '@/design/components/Codeblock';
import Header from '@/design/layout/LayoutElements/Header';

import ValkyrieIcon, { viBook, viCircleExclamation, viFlag, viHeart, viHouse, viLockOpen, viMagnifyingGlass, viValkyrieSword } from '@sippy-platform/valkyrie';

import LargeIconGrid from './Components/LargeIconGrid';

export default function Home() {
  const navigate = useNavigate();

  const [search, setSearch] = useState('');

  function onSearchSubmit() {
    const searchParams = { search };
    const searchQuery = `?${createSearchParams(searchParams)}`;
    navigate({ pathname: '/icons', search: searchQuery });
  }

  return (
    <>
      <Header>
        <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="space-between" gap={5} sx={{ my: 7 }}>
          <Stack gap={5} sx={{ flexGrow: 1, order: { xs: 2, md: 1 } }}>
            <Box>
              <Typography level="h1" fontSize={{ xs: 36, md: 48 }} sx={{ textAlign: { xs: 'center', md: 'initial' } }}>
                <Typography color="primary">{icons.length}</Typography> delightful icons
                <br />
                for <Typography color="primary">your</Typography> designs
              </Typography>
            </Box>

            <form onSubmit={onSearchSubmit}>
              <Input
                startDecorator={
                  <IconButton type="submit" color="primary" sx={{ borderRadius: 'md' }}>
                    <ValkyrieIcon icon={viMagnifyingGlass} />
                  </IconButton>
                }
                size="lg"
                placeholder="Find your icon"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                sx={{
                  px: 4,
                  py: 2,
                  background: 'rgba(var(--joy-palette-background-channel) / .5)',
                  borderRadius: 'xl',
                  boxShadow: 'none',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(var(--joy-palette-background-channel) / .5)'
                }}
              />
            </form>
          </Stack>
          <LargeIconGrid icon={viValkyrieSword} sx={{ order: { xs: 1, md: 2 }, '--ValkyrieIcon-scale': { xs: '8px', md: '16px' } }} />
        </Stack>
      </Header>
      <Container>
        <Stack gap={5} sx={{ my: 5 }}>
          <Alert color="danger" variant="solid" startDecorator={<ValkyrieIcon icon={viCircleExclamation} />} size="lg" sx={{ borderRadius: 'xl' }}>
            We're still working on this, a lot can change.
          </Alert>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1f', md: '1fr 1fr' }, gap: 5 }}>
            <Stack gap={1} justifyContent="center" sx={{ order: { xs: 2, md: 1 } }}>
              <Typography level="h2">Get started</Typography>
              <Typography>Get started with Valkyrie by installing the npm package.</Typography>
              <Codeblock>npm install @sippy-platform/valkyrie</Codeblock>
              <Stack direction="row" gap={1} sx={{ mt: 3 }}>
                <Button startDecorator={<ValkyrieIcon icon={viBook} />} component={NavLink} to="/docs">
                  Documentation
                </Button>
              </Stack>
            </Stack>
            <Box
              sx={{
                order: { xs: 1, md: 2 },
                p: 3,
                borderRadius: 'xl',
                backgroundImage:
                  'radial-gradient(49% 81% at 45% 47%, #032CFF26 0%, #0309FF00 100%),radial-gradient(113% 91% at 17% -2%, #00FFEC1C 0%, #00FFEC00 100%),radial-gradient(142% 91% at 83% 7%, #008BFF36 0%, #00C9FF00 100%),radial-gradient(142% 91% at -6% 74%, #0045FF1C 0%, #0045FF00 100%),radial-gradient(142% 91% at 111% 84%, #007BFF26 0%, #007BFF12 100%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 3,
                fontSize: 'xl4',
                border: '1px solid var(--joy-palette-primary-outlinedBorder)',
                height: { xs: 120, md: 300 }
              }}
            >
              <ValkyrieIcon icon={viFlag} />
              <ValkyrieIcon icon={viValkyrieSword} />
            </Box>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1f', md: '1fr 1fr' }, gap: 5 }}>
            <Box
              sx={{
                order: { xs: 1, md: 2 },
                p: 3,
                borderRadius: 'xl',
                backgroundImage:
                  'radial-gradient(49% 81% at 45% 47%, #5EFFAC21 0%, #073AFF00 100%),radial-gradient(113% 91% at 81% 41%, #8BFF5E1F 0%, #FF000000 100%),radial-gradient(142% 91% at 83% 7%, #B8FF001A 0%, #FF000000 100%),radial-gradient(142% 91% at -6% 74%, #5EFF6700 0%, #5EFF6C2B 100%),radial-gradient(142% 91% at 111% 84%, #FFFFFF00 0%, #FFFFFF00 100%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 3,
                fontSize: 'xl4',
                border: '1px solid var(--joy-palette-success-outlinedBorder)',
                height: { xs: 120, md: 300 }
              }}
            >
              <ValkyrieIcon icon={viValkyrieSword} />
              <ValkyrieIcon icon={viHeart} />
              <ValkyrieIcon icon={viHouse} />
            </Box>
            <Stack gap={1} justifyContent="center" sx={{ order: { xs: 1, md: 2 } }}>
              <Typography level="h2">Icons with love</Typography>
              <Typography>Every icon is made by hand, and with our heart. We don't include that in the package tho, we still need it.</Typography>
              <Stack direction="row" gap={1} sx={{ mt: 3 }}>
                <Button startDecorator={<ValkyrieIcon icon={viValkyrieSword} />} component={NavLink} to="/icons">
                  Full library
                </Button>
              </Stack>
            </Stack>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1f', md: '1fr 1fr' }, gap: 5 }}>
            <Stack gap={1} justifyContent="center" sx={{ order: { xs: 2, md: 1 } }}>
              <Typography level="h2">Open source.</Typography>
              <Typography>Valkyrie is open source.</Typography>
            </Stack>
            <Box
              sx={{
                order: { xs: 1, md: 2 },
                p: 3,
                borderRadius: 'xl',
                backgroundImage:
                  'radial-gradient(49% 81% at 45% 47%, #FFE20326 0%, #FFE20300 100%),radial-gradient(113% 91% at 17% -2%, #FF5A0021 0%, #FF5A0000 100%),radial-gradient(142% 91% at 83% 7%, #FFDB0036 0%, #FFDB0000 100%),radial-gradient(142% 91% at -6% 74%, #FF004917 0%, #FF004900 100%),radial-gradient(142% 91% at 111% 84%, #FF700026 0%, #FF000014 100%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 3,
                fontSize: 'xl4',
                border: '1px solid var(--joy-palette-danger-outlinedBorder)',
                height: { xs: 120, md: 300 }
              }}
            >
              <ValkyrieIcon icon={viLockOpen} />
            </Box>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
