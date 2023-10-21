 const heading = React.createElement(
        "h1",
        {id:"heading" ,xyz:"abc"},
        "this is my react tuorials"
      );

 console.log(heading)  //object return karega

      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(heading);