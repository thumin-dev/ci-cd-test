import SearchBar from "../Components/SearchBar";
import Divider from "@mui/material/Divider";
import { Box, Container, Typography } from "@mui/material";
import ItemList from "../Components/ItemList";
import { useState, useEffect } from "react";

export default function SearchBarForm() {

    const [items, setItems] = useState([]);

    //fetch data from the server
    const fetchData = async () => {
    let requestOptions = {
        method: 'GET',
        "Content-Type": "application/json",
        redirect: 'follow'
    };
      
    let response = await fetch("/api/searchDB", requestOptions)
    let data =  await response.json();
    console.log("Response from DB for card:",data)
    setItems(data);

    }
    useEffect(() => {
        fetchData();    
    },[]);

  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: "100vh", // Full viewport height
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start", // Align content towards the top
        alignItems: "center",
        paddingTop: { xs: "8%", md: "5%" }, // Top padding: 10% for small screens, 8% for medium+ screens
        boxSizing: "border-box",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Search Page
      </Typography>

      <SearchBar />

      <Divider
        sx={{
          width: "100%",
          marginTop: 4, 
          borderColor: "rgba(0, 0, 0, 0.12)",
          marginBottom: 4,
        }}
      />
      {console.log("Items", items)}
    <ItemList items={items}/>
    </Container>
    
  );
}
