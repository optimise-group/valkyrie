import { Sheet, Table } from '@mui/joy';

import Code from '@/design/components/Code';

import { IIconCssVariables } from './Playground';

interface IApiTableProps {
  cssVariables: IIconCssVariables[];
}

export default function ApiTable({ cssVariables }: IApiTableProps) {
  return (
    <Sheet variant="outlined" sx={{ borderRadius: 'sm', boxShadow: 'md' }}>
      <Table variant="outlined">
        <thead>
          <tr>
            <th style={{ width: '30%' }}>Property name</th>
            <th style={{ width: '15%' }}>Default</th>
            <th style={{ width: '55%' }}>Description</th>
          </tr>
        </thead>
        <tbody>
          {cssVariables.map((variable, key) => (
            <tr key={key}>
              <td>
                <Code>{variable.name}</Code>
              </td>
              <td>
                <Code>{variable.default}</Code>
              </td>
              <td>{variable.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Sheet>
  );
}
