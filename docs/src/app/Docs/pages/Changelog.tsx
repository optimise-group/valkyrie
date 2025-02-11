import { Stack } from '@mui/joy';

import Code from '@/design/components/Code';

import Release from './_Release';

export default function Changelog() {
  return (
    <Stack gap={5}>
      <Release
        name="Valkyrie 1.0 alpha 54"
        version="1.0.0-alpha.54"
        date="11 February 2025"
        newIcons={['file-audio', 'file-excel', 'file-word', 'file-powerpoint', 'file-text', 'file-zip', 'folder-open', 'folder-plus', 'folder-min']}
      />
      <Release
        name="Valkyrie 1.0 alpha 53"
        version="1.0.0-alpha.53"
        date="31 January 2025"
        newIcons={[
          'align-center',
          'align-left',
          'align-justify',
          'align-right',
          'horizontal-line',
          'subscript',
          'superscript',
          'table-column-insert-right',
          'table-cell-merge',
          'table-column-insert-left',
          'table-header-cell',
          'table-column-min',
          'table-row-insert-top',
          'table-min',
          'table-row-min',
          'table-row-insert-bottom'
        ]}
      />
      <Release
        name="Valkyrie 1.0 alpha 52"
        version="1.0.0-alpha.52"
        date="8 January 2025"
        added={[<>Improvements to React 19 support.</>]}
        newIcons={['car-side', 'react', 'record', 'record-stop']}
      />
      <Release name="Valkyrie 1.0 alpha 51" version="1.0.0-alpha.51" date="11 December 2024" added={[<>Valkyrie now supports React 19.</>]} />
      <Release
        name="Valkyrie 1.0 alpha 50"
        version="1.0.0-alpha.50"
        date="13 November 2024"
        newIcons={['diagram', 'magnifying-glass-min', 'magnifying-glass-plus', 'microphone-slash', 'phone-xmark']}
      />
      <Release
        name="Valkyrie 1.0 alpha 49"
        version="1.0.0-alpha.49"
        date="17 October 2024"
        added={[
          <>
            You can now apply <Code>className</Code> to the <Code>ValkyrieIcon</Code> component.
          </>
        ]}
        newIcons={['angles-x', 'apple', 'burger-glass', 'glass', 'moped', 'plate-utensils', 'receipt', 'shopping-cart', 'wallet', 'windows']}
        updatedIcons={['angles-y']}
        renamedIcons={[
          { old: 'thumbstack', new: 'thumbtack' },
          { old: 'thumbstack-slash', new: 'thumbtack-slash' }
        ]}
      />
      <Release
        name="Valkyrie 1.0 alpha 48"
        version="1.0.0-alpha.48"
        date="3 July 2024"
        newIcons={['fanvil', 'teams', 'yealink']}
        updatedIcons={['cloud-softphone']}
      />
      <Release
        name="Valkyrie 1.0 alpha 47"
        version="1.0.0-alpha.47"
        date="24 June 2024"
        newIcons={['arrow-up-right-from-square', 'ellipsis-v']}
        renamedIcons={[{ old: 'grip-dots', new: 'grip-dots-h' }]}
      />
      <Release name="Valkyrie 1.0 alpha 46" version="1.0.0-alpha.46" date="17 June 2024" newIcons={['cloud-softphone']} />
      <Release name="Valkyrie 1.0 alpha 45" version="1.0.0-alpha.45" date="29 May 2024" newIcons={['password']} updatedIcons={['check', 'circle-check']} />
      <Release
        name="Valkyrie 1.0 alpha 44"
        version="1.0.0-alpha.44"
        date="7 May 2024"
        added={[
          <>
            The <Code>ValkyrieIcon</Code> component now supports the <Code>fade</Code> property.
          </>,
          <>
            The <Code>ValkyrieIcon</Code> now allows you to pass the <Code>classname</Code> prop.
          </>,
          <>You can now overwrite the scale of the pulse animation.</>,
          <>
            Introduces a brand new documentation website with improved icon previews, component documentation with interactive playground, this changelog, and
            much more. And best of all; it's now available online instead of needing to be compiled by you.
          </>
        ]}
        fixed={[
          <>
            Removes the duplicate glyph behind the <Code>expand</Code> icon.
          </>,
          <>Fixes a bug where some CSS variables couldn't be overwritten.</>,
          <>Various TypeScript type fixes.</>
        ]}
        newIcons={['order-alphabetical-asc', 'order-alphabetical-desc', 'order-numerical-asc', 'order-numerical-desc', 'arrow-left-arrow-right']}
      />
      <Release name="Valkyrie 1.0 alpha 43" version="1.0.0-alpha.43" date="26 April 2024" newIcons={['bel']} />
      <Release
        name="Valkyrie 1.0 alpha 42"
        version="1.0.0-alpha.42"
        date="26 April 2024"
        newIcons={['bars-uneven', 'keyboard', 'keyboard-brightness-high', 'keyboard-brightness-low']}
      />
      <Release
        name="Valkyrie 1.0 alpha 41"
        version="1.0.0-alpha.41"
        date="18 March 2024"
        newIcons={['folder-image']}
        updatedIcons={['grip-dots', 'grip-dots-v']}
      />
      <Release name="Valkyrie 1.0 alpha 40" version="1.0.0-alpha.40" date="11 March 2024" newIcons={['arrow-down-arrow-up', 'grip-dots', 'grip-dots-v']} />
      <Release
        name="Valkyrie 1.0 alpha 39"
        version="1.0.0-alpha.39"
        date="19 February 2024"
        changed={[
          <>
            The default values for a number of properties is now set to <Code>undefined</Code>.
          </>
        ]}
        fixed={[
          <>
            Removes the duplicate glyph behind the <Code>expand</Code> icon.
          </>,
          <>Fixes a bug where some CSS variables couldn't be overwritten.</>,
          <>Various TypeScript type fixes.</>
        ]}
        updatedIcons={[
          'a-gum',
          'envelope',
          'expand',
          'facebook',
          'heading-1',
          'heading-2',
          'heading-3',
          'heading-4',
          'heading-5',
          'heading-6',
          'safari',
          'translate',
          'triangle-exclamation'
        ]}
        renamedIcons={[{ old: 'ellipsis', new: 'ellipsis-h' }]}
      />
      <Release
        name="Valkyrie 1.0 alpha 38"
        version="1.0.0-alpha.38"
        date="30 Janaury 2024"
        added={[
          <>
            The <Code>ValkyrieIcon</Code> component will now play a transition when its props change.
          </>,
          <>
            The default <Code>rotation</Code> is now <Code>undefined</Code> instead of <Code>0</Code>.
          </>,
          <>
            Adds support for the <Code>beat</Code> property.
          </>,
          <>
            Adds support to set the <Code>spin</Code> property to <Code>pulse</Code>.
          </>,
          <>The documentation now includes information on CSS variables.</>
        ]}
        changed={[
          <>
            The rotate class is now applied if <Code>rotation</Code> is set to <Code>0</Code>.
          </>,
          <>
            The default <Code>rotation</Code> is now <Code>undefined</Code> instead of <Code>0</Code>.
          </>
        ]}
        newIcons={['spinner']}
        updatedIcons={['shuffle', 'volume-slash', 'volume-0', 'volume-1', 'volume-2', 'volume-3']}
      />
      <Release name="Valkyrie 1.0 alpha 36" version="1.0.0-alpha.36" date="26 January 2024" newIcons={['broom']} />
      <Release name="Valkyrie 1.0 alpha 35" version="1.0.0-alpha.35" date="25 January 2024" newIcons={['command', 'flask']} />
      <Release
        name="Valkyrie 1.0 alpha 35"
        version="1.0.0-alpha.35"
        date="9 January 2024"
        newIcons={['dice', 'dice-five', 'dice-four', 'dice-one', 'dice-six', 'dice-three', 'dice-two', 'export']}
        updatedIcons={['arrow-down-from-cloud']}
      />
      <Release name="Valkyrie 1.0 alpha 34" version="1.0.0-alpha.34" date="10 November 2023" newIcons={['people-xmark', 'person-xmark']} />
      <Release
        name="Valkyrie 1.0 alpha 33"
        version="1.0.0-alpha.33"
        date="7 November 2023"
        fixed={[
          <>
            Fixes the <Code>file</Code> icon appearing completely filled in.
          </>
        ]}
        newIcons={['arrow-down-from-cloud', 'arrow-up-to-cloud']}
        updatedIcons={['file']}
      />
      <Release
        name="Valkyrie 1.0 alpha 32"
        version="1.0.0-alpha.32"
        date="2 November 2023"
        newIcons={['arrow-right-to-file', 'arrow-right-from-file']}
        renamedIcons={[{ old: 'smartphone-arrow-right', new: 'arrow-right-from-smartphone' }]}
      />
      <Release
        name="Valkyrie 1.0 alpha 31"
        version="1.0.0-alpha.31"
        date="13 September 2023"
        changed={[<>You can now search on categories and tags in icons.</>]}
        fixed={[
          <>
            Fixes an incorrect type import in the <Code>ValkyrieIcon</Code> component.
          </>
        ]}
        removed={[
          <>
            Drops support for the <Code>xs</Code> prop in the <Code>ValkyrieIcon</Code> component.
          </>
        ]}
        newIcons={['compare']}
      />
      <Release name="Valkyrie 1.0 alpha 30" version="1.0.0-alpha.30" date="5 September 2023" newIcons={['min']} />
      <Release name="Valkyrie 1.0 alpha 29" version="1.0.0-alpha.29" date="1 September 2023" newIcons={['calendar-day', 'calendar-week']} />
      <Release name="Valkyrie 1.0 alpha 28" version="1.0.0-alpha.28" date="23 August 2023" fixed={[<>Fixes a missing index file.</>]} />
      <Release
        name="Valkyrie 1.0 alpha 27"
        version="1.0.0-alpha.27"
        date="23 August 2023"
        changed={[
          <>Updates the documentation with category, tag, and version information for each icon.</>,
          <>Refreshed home and example page design for icons.</>,
          <>Improved tooling for builds.</>
        ]}
        fixed={[
          <>
            Fixes an incorrect type import in the <Code>ValkyrieIcon</Code> component.
          </>
        ]}
        removed={[<>Removes the included CSS and font files.</>]}
        updatedIcons={[
          'chart-pie',
          'circle-dashed',
          'server',
          'table-clock',
          'table-header-column',
          'table-header-row',
          'table',
          'tag-gear',
          'tag-plus',
          'tag'
        ]}
        renamedIcons={[
          { old: 'pin', new: 'thumbstack' },
          { old: 'pin-slash', new: 'thumbstack-slash' }
        ]}
      />
      <Release
        name="Valkyrie 1.0 alpha 26"
        version="1.0.0-alpha.26"
        date="13 July 2023"
        changed={[<>Revamps the documentation design and introduces a better search tool.</>]}
        newIcons={['key']}
      />
      <Release name="Valkyrie 1.0 alpha 25" version="1.0.0-alpha.25" date="13 July 2023" updatedIcons={['chalkboard-person']} />
      <Release
        name="Valkyrie 1.0 alpha 24"
        version="1.0.0-alpha.24"
        date="13 July 2023"
        newIcons={['chalkboard-person', 'life-ring']}
        updatedIcons={['server', 'smartphone']}
      />
      <Release name="Valkyrie 1.0 alpha 23" version="1.0.0-alpha.23" date="15 June 2023" newIcons={['toggle-off', 'toggle-on']} />
      <Release
        name="Valkyrie 1.0 alpha 22"
        version="1.0.0-alpha.22"
        date="12 June 2023"
        newIcons={['sidebar-left', 'sidebar-right']}
        updatedIcons={['thumbtack', 'thumbtack-slash', 'translate']}
      />
      <Release name="Valkyrie 1.0 alpha 21" version="1.0.0-alpha.21" date="12 June 2023" newIcons={['thumbtack', 'thumbtack-slash']} />
      <Release name="Valkyrie 1.0 alpha 20" version="1.0.0-alpha.20" date="30 May 2023" newIcons={['door']} />
      <Release
        name="Valkyrie 1.0 alpha 19"
        version="1.0.0-alpha.19"
        date="11 May 2023"
        newIcons={['circle-dashed', 'share']}
        updatedIcons={['blf', 'list-ordered', 'list-ordered-clock']}
      />
      <Release name="Valkyrie 1.0 alpha 18" version="1.0.0-alpha.18" date="2 May 2023" newIcons={['pager', 'speaker-grill']} />
      <Release
        name="Valkyrie 1.0 alpha 17"
        version="1.0.0-alpha.17"
        date="19 April 2023"
        added={[
          <>
            You can now change the speed of the spin animation with <Code>--vi-animation-duration</Code>.
          </>
        ]}
        renamedIcons={[{ old: 'square-p', new: 'rectangle-p' }]}
      />
      <Release
        name="Valkyrie 1.0 alpha 16"
        version="1.0.0-alpha.16"
        date="19 April 2023"
        changed={[
          <>
            General improvements to the <Code>ValkyrieIcon</Code> component.
          </>
        ]}
      />
      <Release
        name="Valkyrie 1.0 alpha 15"
        version="1.0.0-alpha.15"
        date="5 April 2023"
        changed={[
          <>
            General improvements to the <Code>ValkyrieIcon</Code> component.
          </>
        ]}
      />
      <Release name="Valkyrie 1.0 alpha 14" version="1.0.0-alpha.14" date="4 April 2023" newIcons={['rectangle-p', 'translate']} />
      <Release name="Valkyrie 1.0 alpha 13" version="1.0.0-alpha.13" date="27 February 2023" newIcons={['tag-gear', 'tag-plus']} />
      <Release
        name="Valkyrie 1.0 alpha 12"
        version="1.0.0-alpha.12"
        date="13 February 2023"
        newIcons={['next', 'previous']}
        updatedIcons={['filter', 'filter-plus', 'filter-xmark']}
      />
      <Release
        name="Valkyrie 1.0 alpha 11"
        version="1.0.0-alpha.11"
        date="6 February 2023"
        newIcons={['calendar-range', 'calendar-range-clock', 'table-header-column', 'table-header-row']}
      />
      <Release
        name="Valkyrie 1.0 alpha 10"
        version="1.0.0-alpha.10"
        date="3 February 2023"
        fixed={[<>Fixes a bug where the fill prop was being deleted from the SVG files.</>]}
      />
      <Release
        name="Valkyrie 1.0 alpha 9"
        version="1.0.0-alpha.9"
        date="3 February 2023"
        newIcons={['calendar-clock', 'circle-half', 'circle-half-inner']}
        updatedIcons={['puzzle-piece']}
      />
      <Release
        name="Valkyrie 1.0 alpha 8"
        version="1.0.0-alpha.8"
        date="19 December 2022"
        newIcons={['music-pause']}
        updatedIcons={['blf', 'file', 'files', 'files-list']}
        renamedIcons={[{ old: 'circle-user', new: 'circle-person' }]}
      />
      <Release name="Valkyrie 1.0 alpha 7" version="1.0.0-alpha.7" date="12 December 2022" newIcons={['list-checks-xmark']} />
      <Release
        name="Valkyrie 1.0 alpha 6"
        version="1.0.0-alpha.6"
        date="6 December 2022"
        newIcons={['music-pause']}
        updatedIcons={['filter', 'filter-plus', 'filter-xmark', 'store']}
      />
      <Release
        name="Valkyrie 1.0 alpha 5"
        version="1.0.0-alpha.5"
        date="17 November 2022"
        changed={[
          <>
            Renames <Code>ValkyrieIcon</Code> to <Code>IValkyrieIcon</Code>.
          </>
        ]}
        fixed={[
          <>
            The <Code>sx</Code> prop is now properly types as <Code>SxProp</Code>.
          </>,
          <>Fixes a bug that may cause a failure to compile the CSS.</>
        ]}
      />
      <Release
        name="Valkyrie 1.0 alpha 4"
        version="1.0.0-alpha.4"
        date="17 November 2022"
        changed={[
          <>
            The <Code>ValkyrieIcon</Code> TypeScript type is now exported.
          </>
        ]}
      />
      <Release
        name="Valkyrie 1.0 alpha 3"
        version="1.0.0-alpha.3"
        date="9 November 2022"
        changed={[
          <>
            You can now extend the <Code>sx</Code> prop of the <Code>ValkyrieIcon</Code> component.
          </>,
          <>CSS transitions are now inherited from the parent component.</>
        ]}
      />
      <Release
        name="Valkyrie 1.0 alpha 2"
        version="1.0.0-alpha.2"
        date="26 October 2022"
        fixed={[<>Fixes an issue where the SVG of icons included a width and height.</>]}
        updatedIcons={['circle-person', 'house']}
      />
      <Release
        name="Valkyrie 1.0 alpha 1"
        version="1.0.0-alpha.1"
        date="25 October 2022"
        changed={[
          <>Introduces a revamped iconography set based on Amaranth.</>,
          <>
            The <Code>ValkyrieIcon</Code> component now includes its styling and no longer requires you to import CSS.
          </>
        ]}
        removed={[<>The repository no longer provides font files or CSS files.</>]}
        renamedIcons={[
          { old: 'arrow-right-ban', new: 'arrow-right-prohibited' },
          { old: 'ban', new: 'prohibited' },
          { old: 'clear-formatting', new: 'a-gum' },
          { old: 'clear-node', new: 'square-gum' },
          { old: 'film', new: 'filmstrip' },
          { old: 'horizontal-rule', new: 'line' },
          { old: 'link', new: 'chain' },
          { old: 'link-slash', new: 'chain-slash' },
          { old: 'list-check', new: 'list-checks' },
          { old: 'list-ol', new: 'list-ordered' },
          { old: 'list-ol-cloc', new: 'list-ordered-clock' },
          { old: 'logs', new: 'files-list' },
          { old: 'paper-plane-top', new: 'paper-plane' },
          { old: 'phone-arrow-down-left-ban', new: 'phone-arrow-down-left-prohibited' },
          { old: 'phone-arrow-up-right-ban', new: 'phone-arrow-up-right-prohibited' },
          { old: 'repeat-1', new: 'repeat-once' },
          { old: 'smartphone-divert', new: 'smartphone-arrow-right' },
          { old: 'unlock', new: 'lock-open' },
          { old: 'users', new: 'people' },
          { old: 'user', new: 'person' },
          { old: 'user-clock', new: 'person-clock' },
          { old: 'user-gear', new: 'person-gear' },
          { old: 'user-headset', new: 'person-headset' },
          { old: 'user-list', new: 'person-list' },
          { old: 'user-lock', new: 'person-lock' },
          { old: 'user-plus', new: 'person-plus' },
          { old: 'volumne-none', new: 'volume-slash' }
        ]}
      />
    </Stack>
  );
}
