import { Stack, Typography } from '@mui/joy';

import Code from '@/design/components/Code';

import { viHouse, viMessageSmile, viValkyrieSword } from '@sippy-platform/valkyrie';

import Playground, { IPlaygroundConfig } from '../playground/Playground';

export default function PageFlip() {
  const playgroundConfig: IPlaygroundConfig = {
    icons: [viMessageSmile, viValkyrieSword, viHouse],
    properties: [
      {
        label: 'Flip',
        type: 'chip',
        name: 'flip',
        values: [true, 'x', 'y', false],
        default: true
      }
    ]
  };

  return (
    <Stack gap={2}>
      <Typography level="h2">Flip</Typography>
      <Typography>
        With the <Code>flip</Code> property you can mirror your icon on its x-axis, y-axis or both.
      </Typography>

      <Playground config={playgroundConfig} />
    </Stack>
  );
}
