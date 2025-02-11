import { Stack, Typography } from '@mui/joy';

import Codeblock from '@/design/components/Codeblock';

export default function PageInstallation() {
  return (
    <Stack gap={2}>
      <Typography level="h2">Install Valkyrie</Typography>
      <Typography>Get started with Valkyrie by running the following command in your project.</Typography>
      <Codeblock>npm install @sippy-platform/valkyrie</Codeblock>
    </Stack>
  );
}
