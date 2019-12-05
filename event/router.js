const { Router } = require("express");
const Event = require("./model");
const router = new Router();

router.post("/event", (req, res, next) =>
  Event.create(req.body)
    .then(event => res.send(event))
    .catch(error => next(error))
);

router.get("/event", (req, res, next) =>
  Event.findAll().then(result => res.send(result).catch(err => next(err)))
);

router.get("/event/:id", (req, res, next) =>
  Event.findByPk(req.params.id).then(eventid =>
    res.send(eventid).catch(error => next(error))
  )
);

router.put("/event/:id", (req, res, next) =>
  Event.findByPk(req.params.id)
    .then(event => event.update(req.body))
    .then(event => res.send(event))
    .catch(err => next(err))
);

router.delete("/event/:id", (req, res, next) =>
  Event.destroy({ where: { id: req.params.id } })
    .then(number => res.send({ number }))
    .catch(next)
);

module.exports = router;
