import { Fragment } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { List, ListItem, ListItemButton, ListItemContent, ListSubheader, Typography } from '@mui/joy';

import ValkyrieIcon, { viArrowRotateRight, viCircleHalfInner, viHeart, viReact, viSpinner, viStar, viValkyrieSword } from '@sippy-platform/valkyrie';

export default function DocsNavigation() {
  const location = useLocation();

  const pages = [
    {
      title: 'Get started',
      icon: viValkyrieSword,
      pages: [
        {
          title: 'Installation',
          icon: viValkyrieSword,
          link: '/docs/installation'
        }
      ]
    },
    {
      title: 'React component',
      icon: viReact,
      pages: [
        {
          title: 'Spin',
          icon: viSpinner,
          link: '/docs/spin'
        },
        {
          title: 'Rotate',
          icon: viArrowRotateRight,
          link: '/docs/rotate'
        },
        {
          title: 'Flip',
          icon: viValkyrieSword,
          link: '/docs/flip'
        },
        {
          title: 'Beat',
          icon: viHeart,
          link: '/docs/beat'
        },
        {
          title: 'Fade',
          icon: viCircleHalfInner,
          link: '/docs/fade'
        }
      ]
    },
    {
      title: 'More',
      icon: viStar,
      pages: [
        {
          title: 'Changelog',
          icon: viStar,
          link: '/changelog'
        }
      ]
    }
  ];

  return (
    <List
      sx={{
        p: 0,
        gap: 0.25,
        '--ListItem-paddingY': 0,
        '--ListItem-radius': 'var(--joy-radius-md)',
        '--ListItem-paddingLeft': '.5rem',
        '--ListItem-paddingRight': '.5rem',
        '--ListItemDecorator-size': '1.5rem'
      }}
    >
      {pages.map((category, key) => (
        <Fragment key={key}>
          <ListSubheader sx={{ '&:not(:first-child)': { mt: 2 } }}>
            <Typography level="title-sm" textTransform="none" letterSpacing="initial" fontSize="md" startDecorator={<ValkyrieIcon icon={category.icon} />}>
              {category.title}
            </Typography>
          </ListSubheader>
          {category.pages.map((page) => (
            <ListItem key={page.link}>
              <ListItemButton component={NavLink} to={page.link} color="primary" selected={location.pathname.includes(page.link)}>
                <ListItemContent>
                  <Typography noWrap>{page.title}</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
          ))}
        </Fragment>
      ))}
    </List>
  );
}
