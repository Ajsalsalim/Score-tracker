import React, { useEffect, useState } from 'react';
import {Container,Box,Paper, Button} from "@mui/material"



function App() {
  
  const [count,setCount]=useState(0);
  const [ballcount,setBallcount]=useState(0);
  const [runs,setRuns]=useState([])
  const [overcount,setOvercount]=useState(0);
  const [prevRuns, setPrevRuns] = useState([]);

  const handleaction1=(value)=>{
    setPrevRuns([...runs]);
    setCount(count+1);
    setRuns((prevRuns) => [...prevRuns, value]);
    
   
    if(ballcount<0.5){
      setBallcount(parseFloat((ballcount + 0.1).toFixed(1)));

    }else{
      setBallcount(0)
    }
    if(ballcount===0.5){
      setOvercount(overcount+1)
  
    }
    

  }
  const handleaction2=(value2)=>{
    setPrevRuns([...runs]);
    setCount(count+2);
    setRuns((prevRuns) => [...prevRuns, value2]);
    if(ballcount<0.5){
      setBallcount(parseFloat((ballcount + 0.1).toFixed(1)));

    }else{
      setBallcount(0)
    }
    if(ballcount===0.5){
      setOvercount(overcount+1)
  
    }
    

  }
  const handleaction3=(value3)=>{
    setPrevRuns([...runs]);
    setCount(count+3);
    setRuns((prevRuns) => [...prevRuns, value3]);
    if(ballcount<0.5){
      setBallcount(parseFloat((ballcount + 0.1).toFixed(1)));

    }else{
      setBallcount(0)
    }
    if(ballcount===0.5){
      setOvercount(overcount+1)
  
    }
    

  }
  const handleaction4=(value4)=>{
    setPrevRuns([...runs]);
    setCount(count+4);
    setRuns((prevRuns) => [...prevRuns, value4]);
    if(ballcount<0.5){
      setBallcount(parseFloat((ballcount + 0.1).toFixed(1)));

    }else{
      setBallcount(0)
    }
    if(ballcount===0.5){
      setOvercount(overcount+1)
  
    }

  }
  const handleaction6=(value6)=>{
    setPrevRuns([...runs]);
    setCount(count+6);
    setRuns((prevRuns) => [...prevRuns, value6]);
    if(ballcount<0.5){
      setBallcount(parseFloat((ballcount + 0.1).toFixed(1)));

    }else{
      setBallcount(0)
    }
    if(ballcount===0.5){
      setOvercount(overcount+1)
  
    }

  }
  const handleactionextras=(value)=>{
    setPrevRuns([...runs]);
    setRuns((prevRuns) => [...prevRuns, value]);
    

    setCount(count+1)
    if(ballcount===0.5){
      setOvercount(overcount+1)
  
    }
    

  }
  const handleactionout=(value)=>{
    setPrevRuns([...runs]);
    setRuns((prevRuns) => [...prevRuns, value]);
    if(ballcount<0.5){
      setBallcount(parseFloat((ballcount + 0.1).toFixed(1)));

    }else{
      setBallcount(0)
    }
    if(ballcount===0.5){
      setOvercount(overcount+1)
  
    }


  }
  // const handleUndo = () => {
  //   if (prevRuns.length > 0) {
  //     const lastRun = prevRuns.pop();
  //     setRuns([...prevRuns]);
  //     setCount(lastRun);
  //     setBallcount(parseFloat((ballcount - 0.1).toFixed(1)));
  //     setPrevRuns([...prevRuns]);
  //   }
  // };
  const refresh = ()=>{
    setCount(0);
    setBallcount(0);
    setRuns([]);
    setOvercount(0);
  }
 




  return (
    <div>
      <Container>
        <Paper sx={{height:"30px"}} p={3} elevation={5}>
          <Box sx={{textAlign:"center"}}>
          SCORE TRACKER
          </Box>

        </Paper>
        <Paper sx={{marginTop:"30px",height:"600px",backgroundColor:"black",borderRadius:"20px"}} p={3} elevation={5}>
          <Box sx={{textAlign:"center",marginTop:"40px"}}>
          <div style={{marginTop:"30px"}}>

            <h1 style={{fontFamily:"cursive",color:"cyan"}}>{count}</h1>
            <h4 style={{ fontFamily:"fantasy",color:"white"}}>{ballcount}</h4>
            {overcount!==-1?(
              <h2 style={{ fontFamily:"fantasy",color:"white"}}>Over:  {overcount}</h2>

            ):(null)}
            
            </div>
          
          </Box>
          <Box sx={{margin:"1px",display:"flex",justifyContent:"space-around" }}>
          <Button onClick={()=>handleaction1(1)} sx={{backgroundColor:"blueviolet",color:"white"}}>1</Button>
          <Button onClick={()=>handleaction2(2)} sx={{backgroundColor:"blueviolet",color:"white"}}>2</Button>

          
          </Box>
          <Box sx={{margin:"1px",display:"flex",justifyContent:"space-around",marginTop:"25px" }}>
          <Button onClick={()=>handleaction3(3)} sx={{backgroundColor:"blueviolet",color:"white"}}>3</Button>
          <Button onClick={()=>handleaction4(4)}  sx={{backgroundColor:"blueviolet",color:"white"}}>4</Button>
          
          
          </Box>
          <Box sx={{margin:"1px",display:"flex",justifyContent:"space-around",marginTop:"25px" }}>
          <Button onClick={()=>handleaction6(6)}  sx={{backgroundColor:"blueviolet",color:"white"}}>6</Button>
          <Button onClick={()=>handleactionout("0")}  sx={{backgroundColor:"blueviolet",color:"white"}}>DOT</Button>
         
          
          
          </Box>
          <Box sx={{margin:"1px",display:"flex",justifyContent:"space-around",marginTop:"25px" }}>
          <Button onClick={()=>handleactionextras("WD")} sx={{backgroundColor:"red",color:"white"}}>Wide</Button>
          <Button onClick={()=>handleactionout("W")} sx={{backgroundColor:"red",color:"white"}}>OUT</Button>
          <Button onClick={()=>handleactionextras("NB")} sx={{backgroundColor:"red",color:"white"}}>noball</Button>
          
          
          </Box>
          <h3 style={{color:"white",margin:"20px",marginTop:"20px",justifyContent:"center",display:"flex"}}>Scoring history:</h3>
          <Box sx={{ margin: "20px", marginTop: "25px", display: "flex", flexDirection: "column", alignItems: "flex-start",color:"white" }}>
              {runs.map((item) => 
              item+" "
              )
}
    
</Box>
<Box sx={{display:"flex",justifyContent:"center"}}>
<Button onClick={refresh} sx={{backgroundColor:"white",color:"black",display:"flex",justifyContent:"center"}}>Refresh</Button>
{/* <Button onClick={handleUndo} variant="outlined" color="primary">  Undo  </Button> */}
            
          

</Box>

          
         

        </Paper>

      </Container>
     
    </div>
    
  
    
  );
}
export default App


