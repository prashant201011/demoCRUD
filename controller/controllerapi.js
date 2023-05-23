const Candidate = require("../model/model");

exports.getUser = (req, res, next) => {
  Candidate.find()
    .then((result) => {
      res.json({ result });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getsuser = (req, res, next) => {
  const userId = req.params.id;

  Candidate.find({ _id: userId })
    .then((result) => {
      res.json({ result });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postUser = (req, res, next) => {
  const event = req.body.event;
  const uid = req.body.uid;
  const name = req.body.name;
  const tagline = req.body.tagline;

  const apimodel = new Candidate({
    event: event,
    uid: uid,
    name: name,
    tagline: tagline,
  });

  apimodel
    .save()
    .then((result) => {
      console.log("stored");
    })
    .catch((err) => {
      console.log(err);
    });

  res.json("data stored");
};

exports.deleteUser = (req, res, next) => {
  const id = req.params.id;

  Candidate.findByIdAndDelete({ _id: id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log("deletion failed");
    });
};

exports.updateUser = (req, res, next) => {
  const id = req.params.id;
  const event = req.body.event;
  const uid = req.body.uid;
  const name = req.body.name;
  const tagline = req.body.tagline;

  Candidate.updateOne(
    { _id: id },
    { $set: { event: event, uid: uid, name: name, tagline: tagline } }
  )
    .then((result) => {
      console.log("check before", result);
      res.json(result);
      console.log("check after", result);
    })
    .catch((err) => {
      console.log(err);
    });
};
