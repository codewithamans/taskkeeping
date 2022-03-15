import React, { useState } from "react";
import "../index.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Card from "./Card";

function Task() {
  const [date, setDate] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [data,setData] = useState([]);
  // const [value,setValue] = useState([])
  const handleClick = () => {
      const val = {title : title,
      description : description,
      date : date}
      const arr =[...data,val]
      console.log(arr);
      setData(arr) 
      console.log(data);
      setDate(null)
      setTitle("")
      setDescription("")
      // setValue([...value,data])
    }
    const deletefunc = (e) => {
      console.log("delete invoked");
      let id = e.target.id
 
      // alert("Task successfully deleted ")
    setData(() => {
      return (data.filter(( cuval,index)  => {
          return index!=id
      }))
      
    })
  }
    const completedfunc = (e) => {
      console.log("completed invoked");
      let id = e.target.id
      alert("Task has been completed")
      setData(() => {
        return (data.filter(( cuval,index)  => {
            return index!=id
        }))
      })
      
    }

  return (
    <><div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"40px"}}>
      <div className="task-container">
        <div className="head">TASK MANAGER</div>
        <div className="content-form">
        <TextField  style = {{width : "50vw",margin:"10px"}}
          label="Task Title"
          id={"outlined-size-normal"}
       
          size="small"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }} 
        />
        <TextField  style = {{width : "50vw",margin:"10px"}}
          label="Task Description"
          id="outlined-multiline-static"
         
          size="normal"
          multiline
          rows={6}
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
         
        />
         
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date"
              value={date}
              onChange={(e) => {
                setDate(e);
              }}
              renderInput={(params) => (
                <TextField style={{ width: "50vw" ,margin:"10px"}} {...params} />
              )}
            />
          </LocalizationProvider>
          <Button variant="contained" style={{ marginTop: "40px",backgroundColor:"#003979" }} onClick={handleClick}>
            Submit Form
          </Button>
        </div>
        </div>
      </div>
      <h3 >Your Tasks</h3>
      <div className="card-container">
      {data.map((val,index)=>{
        return <Card ind ={index+1} id={index} tit={val.title} onclickdelete={deletefunc}  onclickcompleted={completedfunc}/>
      })}
      </div>
    </>
  );
}

export default Task;
