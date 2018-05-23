const { Photo } = require('../../db/models/photoModel')

const photoCtrl = {
  GET: (req, res) => {
    Photo.find({}, (err, data) => {
      if (err) {
        console.log('Error in GET /api/photo', err);
        res.status(404).send();
      } else {
        console.log('GET /api/photo successful');
        res.send(data).status(200);
      }
    })
  },
  POST: (req, res) => {
    const newPhoto = new Photo(req.body);
    newPhoto.save((err) => {
      if (err) {
        console.log('Error in POST /api/photo');
      } else {
        console.log('POST /api/photo successful', newPhoto);
        res.send(newPhoto).status(200);
      }
    })
  }
}

module.exports.photoCtrl = photoCtrl;