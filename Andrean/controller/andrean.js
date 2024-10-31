const Andrean = require('../model/andrean');

const createAndrean = (req,res)=>{
    const andrean = new Andrean({
        pemandu: req.body.pemandu,
        tujuan: req.body.tujuan,
        destinasi: req.body.destinasi
    });
    console.log(andrean);
    andrean.save()
    .then((createAndrean)=>{
        res.status(201).json({
            message : "Data Berhasil Dipublikasikan",
            andreanId : createAndrean._id
        });
    })
    .catch((err)=>{
        res.status(500).json({
            message: "Internal Server Error"
            //Error : err
        });
    });
};

module.exports = {createAndrean};