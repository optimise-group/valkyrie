import { IValkyrieIcon } from '@sippy-platform/valkyrie';

export interface IIcon {
  title: string;
  categories: string[];
  tags: string[];
  created: string;
  updated: string;
}

export interface ILibraryIcon {
  component: string;
  categories: string[];
  tags: string[];
  slug: string;
  icon: IValkyrieIcon;
}

export interface IIconCategory {
  slug: string;
  title: string;
  icon: IValkyrieIcon;
}

export interface IColorSwatch {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}
