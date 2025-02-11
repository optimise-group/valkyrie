import { Stack, Typography } from '@mui/joy';

import Code from '@/design/components/Code';

import { viExpand, viHeart, viPlay } from '@sippy-platform/valkyrie';

import ApiTable from '../playground/ApiTable';
import Playground, { IIconCssVariables, IPlaygroundConfig } from '../playground/Playground';

export default function PageBeat() {
  const playgroundConfig: IPlaygroundConfig = {
    icons: [viHeart, viExpand, viPlay],
    properties: [
      {
        label: 'Beat',
        type: 'chip',
        name: 'beat',
        values: [true, false],
        default: true
      }
    ],
    cssVariables: [
      {
        name: '--vi-animation-duration',
        default: '1s',
        description: 'Time for a full play through of the animation.'
      },
      {
        name: '--vi-animation-timing-function',
        default: 'ease-in-out',
        description: 'The timing function used for the animation.'
      },
      {
        name: '--vi-animation-iteration-count',
        default: 'infinite',
        description: 'Number of times the animation is repeated.'
      },
      {
        name: '--vi-animation-scale',
        default: '1.4',
        description: 'The scale at which the icon can grow.'
      }
    ]
  };

  return (
    <Stack gap={2}>
      <Typography level="h2">Beat</Typography>
      <Typography>
        With the <Code>beat</Code> property gives you a basic beat animation.
      </Typography>

      <Playground config={playgroundConfig} />

      <Typography level="h3">API</Typography>

      <ApiTable cssVariables={playgroundConfig.cssVariables as IIconCssVariables[]} />
    </Stack>
  );
}
