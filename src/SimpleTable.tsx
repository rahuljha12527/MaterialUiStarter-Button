import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// function createData( name:any, calories:number, fat:number, carbs:number, protein:number) {
//   return { name, calories, fat, carbs, protein };
// }

const data=[
  {
    name:"Frozen yoghurt",
    calories:"159",
    fat:"6",
    carbs:"24",
    protein:"4",
  },
  {
    name:"Ice cream sandwich",
    calories:"237",
    fat:"9",
    carbs:"37",
    protein:"4",
  },
  {
    name:"Eclair",
    calories:"262",
    fat:"16",
    carbs:"24",
    protein:"6",
  },
  {
    name:"Cupcake",
    calories:" 305",
    fat:" 3",
    carbs:"67",
    protein:"4",
  },
  {
    name:"Gingerbread",
    calories:"356",
    fat:"16",
    carbs:"49",
    protein:"3",
  },

]




export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
