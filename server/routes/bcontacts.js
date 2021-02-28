/* bcontact.js | Aashi Sinha | 301151250 | Feb 28, 2021 */

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

let passport = require('passport');

let bcontactsController = require('../controllers/bcontacts');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the Business Contacts List page  */
router.get('/', bcontactsController.displayBcontactsList);

/* GET Route for displaying the Add page  */
router.get('/add', requireAuth, bcontactsController.displayAddPage);

/* POST Route for processing the Add page  */
router.post('/add', requireAuth, bcontactsController.processAddPage);

/* GET Route for displaying the Edit page */
router.get('/edit/:id', requireAuth, bcontactsController.displayEditPage);

/* POST Route for processing the Edit page  */
router.post('/edit/:id', requireAuth, bcontactsController.processEditPage);

/* GET to perform  Deletion  */
router.get('/delete/:id', requireAuth, bcontactsController.performDelete);

module.exports = router;