const express = require('express')
const cors = require('cors')
 
const PORT = 3000;
 
const app = express()
 
app.use(cors())
 
app.get('/api/search', function(req, res){
 
    const search = ["Phat dep trai", "Khoa xau trai", "Thang be de", "Khang cu to"];
 
    res.json(search)
})
 
app.listen(PORT, () => console.log(`Server is starting at PORT ${PORT}`));
