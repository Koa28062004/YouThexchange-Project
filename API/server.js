const express = require('express');
const cors = require('cors');
const http = require('http')

const app = express();
const port = process.env.PORT || 8000

app.use(cors());

const data = [
    {"search": "Homepage", "link": "/"},
    {"search": "About us", "link": "/About_us"},
    {"search": "Core Team", "link": "/Core_Team"},
    {"search": "SDGs", "link": "/SDGs"},
    {"search": "Subtopic 1 (An Overview)", "link": "/Project_1"},
    {"search": "Subtopic 2 (Product outcomes)", "link": "/Project_2"},
    {"search": "Subtopic 2 (Meeting Records)", "link": "/Project_3"},
    {"search": "Project", "link": "/Project"},
    {"search": "Project 1", "link": "/Project1"},
    {"search": "Project 2", "link": "/Project2"},
    {"search": "Project 3", "link": "/Project3"},
    {"search": "Project 4", "link": "/Project4"},
    {"search": "Project Videos", "link": "/ProjectVideos"}

]    


app.get('/api/:search', function (req, res) {
    const search = req.params.search.toLowerCase();

    if (search === "") {
        res.json([]);
    } else {
        const result = data.filter(item => item.search.toLowerCase().includes(search));
        res.json(result);
    }
});

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Start is starting on port ${port}`)
})