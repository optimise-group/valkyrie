import { Outlet } from 'react-router-dom';

import { Box, Container, Stack, Typography } from '@mui/joy';

import Header from '@/design/layout/LayoutElements/Header';

import DocsNavigation from './Docs/Navigation';

export default function Docs() {
  return (
    <>
      <Header>
        <Typography level="h1" fontSize={48}>
          Documentation
        </Typography>
      </Header>
      <Container sx={{ my: 5 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '220px auto',
            gap: 3
          }}
        >
          <Box sx={{ position: 'sticky', top: 58 + 32, overflow: 'auto', maxHeight: 'calc(100dvh - 58px - 32px)', alignSelf: 'flex-start' }}>
            <DocsNavigation />
          </Box>
          <Stack gap={4}>
            <Outlet />
          </Stack>
        </Box>
      </Container>
    </>
  );
}
