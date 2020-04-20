const express = require('express');

const router = express.Router();
const Post = require('../models/Posts')

router.get('/', (req, res) => {
    res.send('Hello Post')
})
router.post('/', async (req, res) => {
    const post = new Post({
        Lagos: req.body.Lagos,
        Abuja: req.body.Abuja,
        Kano: req.body.Kano,
        Osun: req.body.Osun,
        Oyo: req.body.Oyo,
        Edo: req.body.Edo,
        Ogun: req.body.Ogun,
        Kwara: req.body.Kwara,	
        Katsina: req.body.Katsina,
        Bauchi: req.body.Bauchi,
        Kaduna: req.body.Kaduna,
        Akwa_Ibom: req.body.Akwa_Ibom,
        Delta: req.body.Delta,
        Ondo: req.body.Ondo,
        Ekiti: req.body.Ekiti,
        Enugu: req.body.Enugu,
        Rivers: req.body.Rivers,
        Niger: req.body.Niger,
        Benue: req.body.Benue,
        Anambra: req.body.Anambra,
        Bayelsa: req.body.Bayelsa,
        Cross_River: req.body.Cross_River,
        Abia: req.body.Abia,
        Adamawa: req.body.Adamawa,
        Borno: req.body.Borno,
        Ebonyi: req.body.Ebonyi,
        Imo: req.body.Imo,
        Jigawa: req.body.Jigawa,
        Kebbi: req.body.Kebbi,
        Kogi: req.body.Kogi,
        Nasarawa: req.body.Nasarawa,
        Plateau: req.body.Plateau,
        Sokoto: req.body.Sokoto,
        Taraba: req.body.Taraba,
        Zamfara: req.body.Zamfara,
        Gombe: req.body.Gombe,
        Yobe: req.body.Yobe,
    });
    
    try {
        const savedPost = await post.save();
        res.json(savedPost)
    } catch (err) {
        res.json({message: err})
    }

})

module.exports = router;