var express = require('express');
var router = express.Router();


const CHAPULIN_DATA = {
    author: 'Chapulín colorado',
    imageSrcs: [
        "https://res.cloudinary.com/remezcla/images/f_auto,q_auto/v1639757764/production/El_Chapulin_Colorado_Film/El_Chapulin_Colorado_Film.jpeg?_i=AA",
        "https://pbs.twimg.com/media/ERU824XUEAAghak?format=jpg&name=small",
        "https://peru21.pe/resizer/Q-IjRKP5L20tutWXNbaAx2BdcUc=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/FV5WVDR5DVFVVKALI5X5AGSNQA.jpg",
    ],
    phrases: ["¡No contaban con mi astucia!", "Se aprovechan de mi nobleza",
        "Síganme los buenos", "Que no panda el cúnico", "Todos mis movimientos están fríamente calculados"],
}

const TERMINATOR_DATA = {
    author: 'Terminator',
    imageSrcs: [
        "https://www.cinematographe.it/wp-content/uploads/2019/11/16hVhjMagAdrMG44A86c3YQ.jpeg",
        "https://cdn.pastemagazine.com/www/articles/2021/07/03/T2-header.jpg",
    ],
    phrases: ["I'll be back", "Hasta la vista, baby",
        "I need your clothes, your boots, and your motorcycle", "You're terminated"],
}

const STAR_WARS_DATA = {
    author: 'Star Wars',
    imageSrcs: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1920px-Star_Wars_Logo.svg.png",
        "https://insolenzadir2d2.it/wp-content/uploads/2016/11/r2d2-and-c3po-star-wars.jpg",
        "https://i.insider.com/60ad1c51a412370019d31cf0?width=1000&format=jpeg&auto=webp",
    ],
    phrases: ["May the Force be with you", "I am your father",
        "A long time ago in a galaxy far, far away...", "The dark side is in our blood"],
}

const allPhrases = [CHAPULIN_DATA, TERMINATOR_DATA, STAR_WARS_DATA];


/* GET all info */
router.get('/', function (req, res, next) {
    res.json(allPhrases);
});

/* DELETE a phrase */
router.delete('/:name/phrases/:phrase', function (req, res, next) {
    console.log("entering delete");
    let actuallyDeleted = false;
    console.log({ actuallyDeleted });
    const authorName = req.params.name;
    const phraseToDelete = req.params.phrase;
    console.log({ authorName, phraseToDelete });
    const author = allPhrases.find(authorBlock => authorBlock.author === authorName);
    console.log({ author });
    const phraseIndex = author ? author.phrases.indexOf(phraseToDelete) : -1;
    console.log({ phraseIndex });
    if (author && phraseIndex > -1) {
        console.log(`deleting ${phraseToDelete} (index ${phraseIndex}) of author ${authorName}`)
        author.phrases.splice(phraseIndex, 1);
        actuallyDeleted = true;
        console.log('list of phrases after deletion')
        console.log(author.phrases)
    }

    res.json({ deletedPhrase: actuallyDeleted ? phraseToDelete : null });
});

module.exports = router;
