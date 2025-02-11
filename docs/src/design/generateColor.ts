import { IColorSwatch } from '@/types';

const darkColorVariables = (color: string, swatch: IColorSwatch) => ({
  ...swatch,

  contrastText: 'var(--joy-palette-common-white)',

  plainColor: `var(--joy-palette-${color}-500)`,
  plainHoverBg: `var(--joy-palette-${color}-100)`,
  plainActiveBg: `var(--joy-palette-${color}-200)`,
  plainDisabledColor: `var(--joy-palette-neutral-400)`,

  outlinedColor: `var(--joy-palette-${color}-500)`,
  outlinedBorder: `var(--joy-palette-${color}-200)`,
  outlinedHoverBg: `var(--joy-palette-${color}-100)`,
  outlinedActiveBg: `var(--joy-palette-${color}-200)`,
  outlinedDisabledColor: `var(--joy-palette-neutral-400)`,
  outlinedDisabledBorder: `var(--joy-palette-neutral-200)`,

  softColor: `var(--joy-palette-${color}-700)`,
  softActiveColor: `var(--joy-palette-${color}-700)`,
  softBg: `var(--joy-palette-${color}-100)`,
  softHoverBg: `var(--joy-palette-${color}-200)`,
  softActiveBg: `var(--joy-palette-${color}-300)`,
  softDisabledColor: `var(--joy-palette-neutral-400)`,
  softDisabledBg: `var(--joy-palette-neutral-50)`,

  solidColor: 'var(--joy-palette-common-white)',
  solidBg: `var(--joy-palette-${color}-500)`,
  solidHoverBg: `var(--joy-palette-${color}-600)`,
  solidActiveBg: `var(--joy-palette-${color}-700)`,
  solidDisabledColor: `var(--joy-palette-neutral-400)`,
  solidDisabledBg: `var(--joy-palette-neutral-100)`
});

const lightColorVariables = (color: string, swatch: IColorSwatch) => ({
  ...swatch,

  contrastText: 'var(--joy-palette-common-black)',

  plainColor: `var(--joy-palette-${color}-700)`, // 500 for dark?
  plainHoverBg: `var(--joy-palette-${color}-100)`,
  plainActiveBg: `var(--joy-palette-${color}-200)`,
  plainDisabledColor: `var(--joy-palette-neutral-400)`,

  outlinedColor: `var(--joy-palette-${color}-700)`, // 500 for dark?
  outlinedBorder: `var(--joy-palette-${color}-200)`,
  outlinedHoverBg: `var(--joy-palette-${color}-100)`,
  outlinedActiveBg: `var(--joy-palette-${color}-200)`,
  outlinedDisabledColor: `var(--joy-palette-neutral-400)`,
  outlinedDisabledBorder: `var(--joy-palette-neutral-200)`,

  softColor: `var(--joy-palette-${color}-700)`,
  softActiveColor: `var(--joy-palette-${color}-700)`,
  softBg: `var(--joy-palette-${color}-100)`,
  softHoverBg: `var(--joy-palette-${color}-200)`,
  softActiveBg: `var(--joy-palette-${color}-300)`,
  softDisabledColor: `var(--joy-palette-neutral-400)`,
  softDisabledBg: `var(--joy-palette-neutral-50)`,

  solidColor: 'var(--joy-palette-common-black)',
  solidBg: `var(--joy-palette-${color}-500)`,
  solidHoverBg: `var(--joy-palette-${color}-600)`,
  solidActiveBg: `var(--joy-palette-${color}-700)`,
  solidDisabledColor: `var(--joy-palette-neutral-400)`,
  solidDisabledBg: `var(--joy-palette-neutral-100)`
});

const neutralColorVariables = (color: string, swatch: IColorSwatch) => ({
  ...swatch,

  contrastText: 'var(--joy-palette-common-white)',

  plainColor: `var(--joy-palette-${color}-900)`,
  plainHoverColor: `var(--joy-palette-${color}-900)`,
  plainHoverBg: `var(--joy-palette-${color}-100)`,
  plainActiveBg: `var(--joy-palette-${color}-200)`,
  plainDisabledColor: `var(--joy-palette-neutral-400)`,

  outlinedColor: `var(--joy-palette-${color}-900)`,
  outlinedBorder: `var(--joy-palette-${color}-200)`,
  outlinedHoverBg: `var(--joy-palette-${color}-100)`,
  outlinedActiveBg: `var(--joy-palette-${color}-200)`,
  outlinedDisabledColor: `var(--joy-palette-neutral-400)`,
  outlinedDisabledBorder: `var(--joy-palette-neutral-200)`,

  softColor: `var(--joy-palette-${color}-900)`,
  softActiveColor: `var(--joy-palette-${color}-900)`,
  softBg: `var(--joy-palette-${color}-100)`,
  softHoverBg: `var(--joy-palette-${color}-200)`,
  softActiveBg: `var(--joy-palette-${color}-300)`,
  softDisabledColor: `var(--joy-palette-neutral-400)`,
  softDisabledBg: `var(--joy-palette-neutral-50)`,

  solidColor: 'var(--joy-palette-common-white)',
  solidBg: `var(--joy-palette-${color}-500)`,
  solidHoverBg: `var(--joy-palette-${color}-600)`,
  solidActiveBg: `var(--joy-palette-${color}-700)`,
  solidDisabledColor: `var(--joy-palette-neutral-400)`,
  solidDisabledBg: `var(--joy-palette-neutral-100)`
});

export { darkColorVariables, lightColorVariables, neutralColorVariables };
