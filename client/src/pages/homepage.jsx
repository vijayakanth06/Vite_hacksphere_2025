import React, { useState } from "react";

const Homepage = () => {
  const [search, setSearch] = useState("");
  const username = localStorage.getItem("username"); 

  const handleSearch = async () => {
    if (!username || !search) {
      console.error("Username not found in localStorage or search query is empty");
      return;
    }

    const response = await fetch("http://localhost:5000/search/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, query: search }),
    });

    if (response.ok) {
      console.log("Search saved successfully");
      document.getElementById("res").innerHTML = `Search saved in ${username} successfully`;
      document.getElementById("res").style.display = "block";
    setTimeout(() => {
      document.getElementById("res").style.display = "none";
    }, 1000);
    } else {
      console.error("Error saving search");
    }
  };

  return (
    <div>
      <h1>Homepage</h1>

      

      <input 
        type="text" 
        placeholder="Enter search query" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
      /><br />
      <button onClick={handleSearch}>Search</button><br />
      <div id="res"></div>

      <input type="text" placeholder="Chatbot (Not functional yet)" disabled />
    </div>
  );
};

export default Homepage;
