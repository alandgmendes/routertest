import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';

interface Task {
    _id: string;
    atividade: string;
    descricao: string;          
    periodoInicial: number;   
    periodoFinal: number;      
  }
  
  interface CronogramaTableProps {
    tasks: Task[];
  }
function CronogramaTable({ tasks }: CronogramaTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="Cronograma table">
        <TableHead>
          <TableRow>
            <TableCell>-</TableCell>
            <TableCell>Descrição</TableCell>

            <TableCell>Descrição</TableCell>

            <TableCell>Descrição</TableCell>

            <TableCell>Descrição</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task._id}>
              <TableCell><Button>arara</Button></TableCell>
              <TableCell>{task.atividade}</TableCell>
              <TableCell>{task._id}</TableCell>
              <TableCell>{task.periodoInicial}</TableCell>
              <TableCell>{task.periodoFinal}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CronogramaTable;