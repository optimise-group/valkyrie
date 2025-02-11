import { useNavigate } from 'react-router-dom';

import { Container, IconButton, Stack, Typography } from '@mui/joy';

import ValkyrieIcon, { viArrowLeft } from '@sippy-platform/valkyrie';

export default function Error() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Stack sx={{ textAlign: 'center' }} alignItems="center">
        <IconButton variant="outlined" onClick={() => navigate('/')} sx={{ mb: 2 }}>
          <ValkyrieIcon icon={viArrowLeft} />
        </IconButton>
        <Typography level="h1">Welp, nothing to see here.</Typography>
        <Typography level="body-sm">Error 404</Typography>
      </Stack>
    </Container>
  );
}
