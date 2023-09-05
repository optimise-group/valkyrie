import { useState } from 'react';

import { Box, IconButton, Input, Link, Sheet, Stack, Typography } from '@mui/joy';

import icons from '@/data/icons';
import useSearch from '@/hooks/useSearch';

import ValkyrieIcon, { viChevronLeft, viChevronRight, viMagnifyingGlass } from '@sippy-platform/valkyrie';

export default function Icons() {
  const [page, setPage] = useState(0);

  const { result, needle, setNeedle } = useSearch(icons, ['slug']);

  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={1} justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={1} alignItems="baseline">
          <Typography level="h2">{result.length} icons</Typography>
          <Typography color="neutral">
            Page {page + 1} of {Math.ceil(result.length / 180)}
          </Typography>
        </Stack>

        <Input
          startDecorator={<ValkyrieIcon icon={viMagnifyingGlass} />}
          placeholder="Search"
          value={needle}
          onChange={(e) => {
            setNeedle(e.target.value);
            setPage(0);
          }}
        />
      </Stack>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(9.5rem, 100%), 1fr))',
          gap: { xs: 1 }
        }}
      >
        {result.slice(page * 180, (page + 1) * 180).map((icon) => (
          <Sheet
            key={icon.slug}
            variant="outlined"
            sx={{
              gap: 0,
              borderRadius: 'sm',
              '&:hover, &:focus-within': {
                backgroundColor: 'rgba(var(--joy-palette-primary-mainChannel) / .0625)',
                '& > div > a > .MuiTypography-root': {
                  backgroundColor: 'rgba(var(--joy-palette-primary-mainChannel) / .125)'
                }
              }
            }}
          >
            <Stack gap={3} justifyContent="center" alignItems="center" sx={{ pt: 3, pb: 1 }}>
              <ValkyrieIcon icon={icon.icon} sx={{ fontSize: 32 }} />
              <Link
                overlay
                href={`/icons/${icon.slug}`}
                underline="none"
                color="neutral"
                sx={{
                  maxWidth: 'calc(100% - 32px)'
                }}
              >
                <Typography
                  noWrap
                  level="body-sm"
                  sx={{
                    px: 0.5,
                    py: 0.25,
                    borderRadius: 'sm',
                    fontFamily: 'SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace'
                  }}
                >
                  {icon.slug}
                </Typography>
              </Link>
            </Stack>
          </Sheet>
        ))}
      </Box>

      <Stack direction="row" justifyContent="center" alignItems="center" gap={1}>
        <IconButton variant="solid" color="primary" onClick={() => setPage((prev) => prev - 1)} disabled={page === 0}>
          <ValkyrieIcon icon={viChevronLeft} />
        </IconButton>
        <IconButton variant="solid" color="primary" onClick={() => setPage((prev) => prev + 1)} disabled={page === Math.ceil(result.length / 180) - 1}>
          <ValkyrieIcon icon={viChevronRight} />
        </IconButton>
      </Stack>
    </Stack>
  );
}
