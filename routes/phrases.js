var express = require('express');
var router = express.Router();

const ALL_PHRASES = ["¡No contaban con mi astucia!", "Se aprovechan de mi nobleza",
    "Síganme los buenos", "Que no panda el cúnico", "Todos mis movimientos están fríamente calculados",
    "I'll be back", "Hasta la vista, baby",
    "I need your clothes, your boots, and your motorcycle", "You're terminated",
    "May the Force be with you", "I am your father",
    "A long time ago in a galaxy far, far away...", "The dark side is in our blood"];

/* GET all info */
router.get('/', function (req, res, next) {
    res.json(ALL_PHRASES);
});

router.delete('/:phrase', function (req, res, next) {
    let actuallyDeleted = false;
    const phraseToDelete = req.params.phrase;
    const phraseIndex = ALL_PHRASES.indexOf(phraseToDelete);
    if (phraseIndex > -1) {
        ALL_PHRASES.splice(phraseIndex, 1);
        actuallyDeleted = true;
    }
    res.json({ deletedPhrase: actuallyDeleted ? phraseToDelete : null });
});

router.post('/:phrase', function (req, res, next) {
    let actuallyAdded = false;
    const phraseToAdd = req.params.phrase;
    const phraseIndex = ALL_PHRASES.indexOf(phraseToAdd);
    if (phraseIndex === -1) {
        ALL_PHRASES.unshift(phraseToAdd);
        actuallyAdded = true;
    }
    res.json({ addedPhrase: actuallyAdded ? phraseToAdd : null });
});

module.exports = router;

