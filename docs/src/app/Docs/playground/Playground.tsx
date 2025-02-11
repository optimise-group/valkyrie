import { ReactNode, useMemo, useState } from 'react';

import { Box, Card, Chip, Divider, FormControl, FormLabel, IconButton, Input, Sheet, Stack, Typography } from '@mui/joy';

import Codeblock from '@/design/components/Codeblock';

import ValkyrieIcon, { IValkyrieIcon, viBroom } from '@sippy-platform/valkyrie';

export interface IPlaygroundConfig {
  icons: IValkyrieIcon[];
  properties?: IIconProperties[];
  cssVariables?: IIconCssVariables[];
}

export interface IIconProperties {
  label: string;
  type: 'chip';
  name: string;
  values: unknown[];
  default: unknown;
}

export interface IIconCssVariables {
  name: string;
  default: string | number | boolean;
  description: ReactNode;
}

interface IPlaygroundProps {
  config: IPlaygroundConfig;
}

export default function Playground({ config }: IPlaygroundProps) {
  const [playgroundIcon, setPlaygroundIcon] = useState<IValkyrieIcon>(config.icons[0]);

  // Get the icon name
  function getIconName(icon: string): string {
    return `vi${icon
      .split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('')}`;
  }

  const iconName = useMemo(() => getIconName(playgroundIcon.name), [playgroundIcon]);

  // Properties
  const [playgroundProps, setPlaygroundProps] = useState<{ [index: string]: string | number }>({});

  const iconProperties: { [index: string]: string | number | boolean } = useMemo(() => {
    const props: { [index: string]: string | number | boolean } = {};

    config.properties?.map((property) => {
      props[property.name] = playgroundProps?.[property.name] ?? property.default;
    });

    return props;
  }, [config.properties, playgroundProps]);

  const propertyParser: string = useMemo(() => {
    let exampleString = '';

    Object.keys(iconProperties).map((propName) => {
      if (iconProperties[propName] === true) {
        exampleString += `\n  ${propName}`;
        return;
      } else if (iconProperties[propName] === false) {
        return;
      } else if (typeof iconProperties[propName] === 'number') {
        exampleString += `\n  ${propName}={${iconProperties[propName]}}`;
      } else if (typeof iconProperties[propName] === 'string') {
        exampleString += `\n  ${propName}="${iconProperties[propName]}"`;
      }
    });

    return exampleString;
  }, [iconProperties]);

  // CSS Variables
  const [playgroundCssVariable, setPlaygroundCssVariable] = useState<{ [cssVar: string]: string }>({});

  const iconVariables: { [index: string]: string | number | boolean } = useMemo(() => {
    const props: { [index: string]: string | number | boolean } = {};

    config.cssVariables?.map((variable) => {
      props[variable.name] = playgroundCssVariable?.[variable.name as string] ?? variable.default;
    });

    return props;
  }, [config.cssVariables, playgroundCssVariable]);

  const variableParser = useMemo(() => {
    let exampleString = '';
    let hasProperty = false;

    Object.keys(iconVariables).map((varName) => {
      const variableProperties = config.cssVariables?.find((variable) => variable.name === varName);

      if (iconVariables[varName] === variableProperties?.default) return;

      hasProperty = true;

      if (typeof iconVariables[varName] === 'number') {
        exampleString += `\n    ${varName}: ${iconVariables[varName]},`;
      } else if (typeof iconVariables[varName] === 'string') {
        exampleString += `\n    ${varName}: "${iconVariables[varName]}",`;
      }
    });

    return hasProperty ? exampleString : '';
  }, [config.cssVariables, iconVariables]);

  return (
    <Card sx={{ display: 'grid', gridTemplateColumns: 'auto 280px', p: 0, contain: 'paint', gap: 0 }}>
      <Stack sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center', alignItems: 'center', fontSize: 'xl4' }}>
          <ValkyrieIcon icon={playgroundIcon} {...iconProperties} style={playgroundCssVariable} />
        </Box>
        <Codeblock>{`<ValkyrieIcon
  icon={${iconName}}${propertyParser}${
    variableParser !== ''
      ? `
  style={{${variableParser}
  }}`
      : ''
  }
/>`}</Codeblock>
      </Stack>
      <Sheet sx={{ p: 2, borderWidth: '0 0 0 1px' }} variant="outlined">
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography level="title-lg">Playground</Typography>
          <IconButton
            onClick={() => {
              setPlaygroundIcon(config.icons[0]);
              setPlaygroundProps({});
              setPlaygroundCssVariable({});
            }}
            size="sm"
          >
            <ValkyrieIcon icon={viBroom} />
          </IconButton>
        </Stack>
        <Divider sx={{ my: 2, mx: -2 }} />
        <Stack gap={1.5}>
          <FormControl>
            <FormLabel>Icon</FormLabel>
            <Stack direction="row" gap={0.5}>
              {config.icons.map((icon) => (
                <IconButton
                  variant={playgroundIcon === icon ? 'solid' : 'outlined'}
                  color={playgroundIcon === icon ? 'primary' : 'neutral'}
                  onClick={() => setPlaygroundIcon(icon)}
                  key={icon.name}
                >
                  <ValkyrieIcon icon={icon} />
                </IconButton>
              ))}
            </Stack>
          </FormControl>
          {config.properties?.map((property) => {
            switch (property.type) {
              case 'chip': {
                return (
                  <FormControl key={property.name}>
                    <FormLabel>{property.label}</FormLabel>
                    <Stack direction="row" gap={0.5}>
                      {property.values.map((value, key) => (
                        <Chip
                          key={key}
                          onClick={() => setPlaygroundProps((prev) => ({ ...prev, [property.name as string]: value as string | number }))}
                          color={iconProperties?.[property.name] === value ? 'primary' : 'neutral'}
                          variant={iconProperties?.[property.name] === value ? 'solid' : 'outlined'}
                        >
                          {value?.toString()}
                        </Chip>
                      ))}
                    </Stack>
                  </FormControl>
                );
              }
            }
          })}
          {config.cssVariables?.map((variable) => (
            <FormControl key={variable.name}>
              <FormLabel>{variable.name}</FormLabel>
              <Input
                onChange={(e) => setPlaygroundCssVariable((prev) => ({ ...prev, [variable.name]: e.target.value }))}
                placeholder={variable.default.toString()}
                value={playgroundCssVariable?.[variable.name as string] ?? ''}
              />
            </FormControl>
          ))}
        </Stack>
      </Sheet>
    </Card>
  );
}
