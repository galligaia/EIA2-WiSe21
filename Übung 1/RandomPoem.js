var MusicPoem;
(function (MusicPoem) {
    var noun = ["Slash ", "Frank Zappa ", "Freddie Mercury ", "David Gilmour ", "Mark Knopfler ", "Angus Young "];
    var verb = ["zerstört", "trinkt", "wirft", "singt", "spielt", "liebt"];
    var object = [" Gitarren", " Bier", " Touren", " Fans", " Lieder", " Mikros"];
    for (var i = 6; i >= 1; i--) {
        var finalsentence = getVerse(noun, verb, object);
        console.log(finalsentence);
    }
    function getVerse(_noun, _verb, _object) {
        var randomNumbernoun = Math.floor(Math.random() * _noun.length);
        var randomNumberverb = Math.floor(Math.random() * _noun.length);
        var randomNumberobject = Math.floor(Math.random() * _noun.length);
        var satzbau = _noun[randomNumbernoun] + _verb[randomNumberverb] + _object[randomNumberobject];
        _noun.splice(randomNumbernoun, 1);
        _verb.splice(randomNumberverb, 1);
        _object.splice(randomNumberobject, 1);
        return satzbau;
    }
})(MusicPoem || (MusicPoem = {}));
//# sourceMappingURL=RandomPoem.js.map