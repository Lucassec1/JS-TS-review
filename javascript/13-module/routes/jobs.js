const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// Add job via post
router.post('/add', (req, res) => {
    let {title, salary, company, description, email, new_job} = req.body;

    // insert
    Job.create({
        title,
        description,
        salary,
        company,
        email,
        new_job
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error));
});