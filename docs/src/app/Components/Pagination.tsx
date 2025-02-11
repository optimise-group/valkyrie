import { Button, Divider, IconButton, Stack } from '@mui/joy';
import { PaginationProps } from '@mui/material';
import usePagination from '@mui/material/usePagination/usePagination';

import ValkyrieIcon, { viArrowLeft, viArrowRight, viEllipsisH } from '@sippy-platform/valkyrie';

export default function Pagination(props: PaginationProps) {
  const { items } = usePagination(props);

  return (
    <Stack direction="row" justifyContent="center" alignItems="center" gap={0.5}>
      {items.map(({ page, selected, type, disabled, ...props }, key) => {
        switch (type) {
          case 'page':
            return (
              <IconButton size="sm" color={selected ? 'primary' : 'neutral'} variant={selected ? 'solid' : 'plain'} disabled={disabled} {...props} key={key}>
                {page}
              </IconButton>
            );
          case 'previous':
            return (
              <Button
                size="sm"
                color={selected ? 'primary' : 'neutral'}
                variant={selected ? 'solid' : 'plain'}
                disabled={disabled}
                startDecorator={<ValkyrieIcon icon={viArrowLeft} />}
                {...props}
                key={key}
              >
                Prev
              </Button>
            );
          case 'next':
            return (
              <Button
                size="sm"
                color={selected ? 'primary' : 'neutral'}
                variant={selected ? 'solid' : 'plain'}
                disabled={disabled}
                endDecorator={<ValkyrieIcon icon={viArrowRight} />}
                {...props}
                key={key}
              >
                Next
              </Button>
            );
          case 'start-ellipsis':
          case 'end-ellipsis':
            return (
              <IconButton size="sm" color={selected ? 'primary' : 'neutral'} variant={selected ? 'solid' : 'plain'} disabled={disabled} {...props} key={key}>
                <ValkyrieIcon icon={viEllipsisH} />
              </IconButton>
            );
        }

        return <Divider orientation="vertical" sx={{ my: 0.5 }} key={key} />;
      })}
    </Stack>
  );
}
