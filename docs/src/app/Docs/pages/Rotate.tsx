import { Stack, Typography } from '@mui/joy';

import Code from '@/design/components/Code';

import { viArrowUp, viMessageSmile, viValkyrieSword } from '@sippy-platform/valkyrie';

import ApiTable from '../playground/ApiTable';
import Playground, { IIconCssVariables, IPlaygroundConfig } from '../playground/Playground';

export default function PageRotate() {
  const playgroundConfig: IPlaygroundConfig = {
    icons: [viMessageSmile, viValkyrieSword, viArrowUp],
    properties: [
      {
        label: 'Rotate',
        type: 'chip',
        name: 'rotate',
        values: [0, 90, 180, 270, false],
        default: 90
      }
    ],
    cssVariables: [
      {
        name: '--vi-transition-duration',
        default: '0.2s',
        description: 'Time for a full play through of the animation.'
      },
      {
        name: '--vi-animation-timing-function',
        default: 'ease-in-out',
        description: 'The timing function used for the animation.'
      }
    ]
  };

  return (
    <Stack gap={2}>
      <Typography level="h2">Rotate</Typography>
      <Typography>
        With the <Code>rotate</Code> property you can change the default rotation of your icon.
      </Typography>

      <Playground config={playgroundConfig} />

      <Typography level="h3">API</Typography>

      <ApiTable cssVariables={playgroundConfig.cssVariables as IIconCssVariables[]} />
    </Stack>
  );
}
