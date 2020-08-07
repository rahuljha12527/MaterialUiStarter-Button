import React from "react";

import "./App.css";
import SimpleTable from './SimpleTable';

//import Button from "@material-ui/core/Button";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
// import FacebookIcon from '@material-ui/icons/Facebook';
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material/react-icon-button";
import PictureAsPdfSharpIcon from '@material-ui/icons/PictureAsPdfSharp';



const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    marginRight:'2%',
    
  },
  label: {
    width: '100%',
    display: 'flex',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  
  },
  
 
});


function App() {

 
  const classes = useStyles();

  return (


    <div className="App">
     
        <SimpleTable/>
     
      <IconButton className={classes.root  }    color="secondary" aria-label="add an alarm"  >
  <span className={classes.label}>Share &nbsp;  <WhatsAppIcon />  </span>
    
      </IconButton>
      <IconButton  className={classes.root}  color="secondary" aria-label="add an alarm">
      <span className={classes.label}>Download &nbsp;  <PictureAsPdfSharpIcon/>  </span>
      
</IconButton>

    
     
    </div>
  );
}

export default App;
