import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  Box,
  Chip,
  ChipDelete,
  Container,
  IconButton,
  Input,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
  Stack,
  Typography
} from '@mui/joy';

import categories from '@/data/categories';
import icons from '@/data/icons';
import Header from '@/design/layout/LayoutElements/Header';
import useSearch from '@/hooks/useSearch';
import { ILibraryIcon } from '@/types';

import ValkyrieIcon, { viFilterXmark, viMagnifyingGlass } from '@sippy-platform/valkyrie';

import IconCard from './Components/IconCard';
import Pagination from './Components/Pagination';

export default function Icons() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchCategories, searchQuery, searchPage]: [string[], string, number] = useMemo(() => {
    const categories = searchParams.get('category');
    const query = searchParams.get('search');
    const page = Number(searchParams.get('page') ?? 1);

    return [categories?.split(',').filter((item) => item !== '') ?? [], query ?? '', page ?? 1];
  }, [searchParams]);

  const searchableList = useMemo(() => {
    if (searchCategories.length >= 1) {
      return icons.filter((icon) => searchCategories.every((_searchCategory) => icon.categories.includes(_searchCategory as never)));
    }

    return icons;
  }, [searchCategories]);

  const { result } = useSearch(searchableList, ['slug', 'tags'], searchQuery);

  // c: categories
  // q: query
  // p: page
  const setSearchQuery = useCallback(
    (type: 'q' | 'c' | 'p', value: string | number) => {
      let search = searchParams.get('search');
      let page = Number(searchParams.get('page'));
      let category =
        searchParams
          .get('category')
          ?.split(',')
          .filter((item) => item !== '') ?? [];

      switch (type) {
        case 'c': {
          if (typeof value === 'number') return;

          if (category.includes(value)) {
            category = category.filter((item) => item !== value);
          } else {
            category.push(value);
          }

          page = 1; // Always reset page
          break;
        }
        case 'q': {
          if (typeof value === 'number') return;

          search = value;
          page = 1; // Always reset page
          break;
        }
        case 'p': {
          if (typeof value === 'string') return;

          page = value;
          break;
        }
      }

      setSearchParams({
        page: (page || 1).toString(),
        search: search ?? '',
        category: category.join(',') ?? ''
      });
    },
    [searchParams, setSearchParams]
  );

  return (
    <>
      <Header>
        <Typography level="h1" fontSize={48}>
          Icons
        </Typography>
      </Header>
      <Container>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '220px auto',
            gap: 3
          }}
        >
          <Box sx={{ position: 'sticky', top: 58 + 16, overflow: 'auto', maxHeight: 'calc(100dvh - 58px - 16px)', alignSelf: 'flex-start' }}>
            <List
              sx={{
                p: 0,
                my: 2,
                gap: 0.25,
                '--ListItem-paddingY': 0,
                '--ListItem-radius': 'var(--joy-radius-md)',
                '--ListItem-paddingLeft': '.5rem',
                '--ListItem-paddingRight': '.5rem',
                '--ListItemDecorator-size': '1.5rem'
              }}
            >
              {categories.map((_category) => {
                const categoryIcons = searchableList.filter((icon) => icon.categories.includes(_category.slug as never));

                if (categoryIcons.length === 0) {
                  return;
                }

                return (
                  <ListItem key={_category.slug}>
                    <ListItemButton onClick={() => setSearchQuery('c', _category.slug)} selected={searchCategories.includes(_category.slug)} color="primary">
                      <ListItemDecorator>
                        <ValkyrieIcon icon={_category.icon} />
                      </ListItemDecorator>
                      <ListItemContent>
                        <Typography noWrap>{_category.title}</Typography>
                      </ListItemContent>
                      <ListItemContent sx={{ fontFamily: 'display', textAlign: 'right' }}>{categoryIcons.length}</ListItemContent>
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
          <Stack gap={2} sx={{ my: 2 }}>
            <Stack direction="row" gap={1} justifyContent="space-between" alignItems="center">
              <Stack direction="row" gap={1} alignItems="baseline">
                <Typography level="h2">{result.length} icons</Typography>
                <Typography color="neutral">
                  Page {searchPage} of {Math.ceil(result.length / 96)}
                </Typography>
              </Stack>

              <Stack direction="row" gap={0.5} alignItems="baseline">
                <Input
                  startDecorator={<ValkyrieIcon icon={viMagnifyingGlass} />}
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery('q', e.target.value)}
                />
                <IconButton
                  variant="outlined"
                  disabled={searchQuery === '' && searchCategories.length === 0}
                  onClick={() => {
                    setSearchParams({
                      search: '',
                      category: ''
                    });
                  }}
                >
                  <ValkyrieIcon icon={viFilterXmark} />
                </IconButton>
              </Stack>
            </Stack>
            {(searchQuery || searchCategories.length >= 1) && (
              <Stack direction="row" gap={0.5} sx={{ '--_Chip-minHeight': '2rem' }}>
                {searchQuery && (
                  <Chip
                    size="lg"
                    sx={{ fontSize: 'sm', fontWeight: '300', gap: 1.25, fontFamily: 'display', '--_Chip-minHeight': '2rem' }}
                    endDecorator={<ChipDelete onClick={() => setSearchQuery('q', '')} />}
                  >
                    "{searchQuery}"
                  </Chip>
                )}
                {searchCategories.map((category) => (
                  <Chip
                    key={category}
                    size="lg"
                    sx={{ fontSize: 'sm', fontWeight: '300', gap: 1.25, fontFamily: 'display', '--_Chip-minHeight': '2rem' }}
                    endDecorator={<ChipDelete onClick={() => setSearchQuery('c', category)} />}
                  >
                    {category}
                  </Chip>
                ))}
              </Stack>
            )}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(9rem, 100%), 1fr))',
                gap: { xs: 1 }
              }}
            >
              {result.slice((searchPage - 1) * 96, searchPage * 96).map((icon: ILibraryIcon) => (
                <IconCard key={icon.slug} icon={icon} />
              ))}
            </Box>

            {result.length > 0 && <Pagination count={Math.ceil(result.length / 96)} page={searchPage} onChange={(_, page) => setSearchQuery('p', page)} />}
          </Stack>
        </Box>
      </Container>
    </>
  );
}
