import React from "react";
import Button from "@mui/material/Button";
function Card(props) {
  return (
    <>
      <div className="card">
        <p style={{marginLeft:"20px"}}>{props.ind}.{props.tit}</p>
        <div style={{display:"flex",alignItems:"center",marginRight:"20px",justifyContent:"space-between",width:"230px"}}>
           
        <Button 
          variant="contained"
          style={{ backgroundColor:"#003979",width:"110px"}} onClick= {props.onclickcompleted}
        >
         Completed
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor:"#D60707" ,width:"110px" }}
          onClick= {props.onclickdelete}
        >
         Delete
        </Button>
      </div>
      </div>
    </>
  );
}

export default Card;
