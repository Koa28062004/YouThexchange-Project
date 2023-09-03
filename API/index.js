const express = require('express');
const cors = require('cors');

const port = 8000;

const app = express();

app.use(cors());

const data = [
    {"search": "Homepage", "link": "/"},
    {"search": "About us", "link": "/About_us"},
    {"search": "Core Team", "link": "/About_us/Core_Team"},
    {"search": "SDGs", "link": "/SDGs"},
    {"search": "Subtopic 1 (An Overview)", "link": "/Pilot_Program/Project_1"},
    {"search": "Subtopic 2 (Product outcomes)", "link": "/Pilot_Program/Project_2"},
    {"search": "Project", "link": "/Project"},
    {"search": "Project 1", "link": "/Project1"},
    {"search": "Project 2", "link": "/Project2"}
];

app.get('/api/:search', function (req, res) {
    const search = req.params.search.toLowerCase();

    if (search === "") {
        res.json([]);
    } else {
        const result = data.filter(item => item.search.toLowerCase().includes(search));
        res.json(result);
    }
});

app.listen(port, () => console.log(`Server is starting at PORT ${port}`));
