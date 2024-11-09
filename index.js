const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;


// MiddleWare 
app.use(express.json());



app.get('/data', (req, res) => {
    const data = { "name": "John", "email": "john@example.com" };

    res.send(data);
})




app.get("/", (req, res) => {
    res.send("Server is Running");
});


app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});