'use strict';

const express = require('express');
const router = express.Router();
const dateformat = require('dateformat');
const {mongoUrl, database} = require('../config');
const db = require('../db');

router.get('/', (req, res, next) => {
    db(mongoUrl, async (err, client) => {
        if(!err) {
            const collection = client.db(database).collection('sales'); 
            const results = await collection.find({}).sort({ saleDate: -1 }).limit(3).toArray();

            for(let result of results) {
                const date = new Date(result.saleDate);
                result.saleDate = dateformat(date, 'dd/mm/yyyy');
            }
            
            res.render('index', { sales: results });
        }
    });
});

module.exports = router;