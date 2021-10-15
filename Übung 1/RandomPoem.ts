namespace MusicPoem {
    let noun: string[] = ["Slash ", "Frank Zappa ", "Freddie Mercury ", "David Gilmour ", "Mark Knopfler ", "Angus Young "];
    let verb: string[] = ["zerstört", "trinkt", "wirft", "singt", "spielt", "liebt"];
    let object: string[] = [" Gitarren", " Bier", " Touren", " Fans", " Lieder", " Mikros"];

    for (let i: number = 6; i >= 1; i--) {
        let finalsentence: string = getVerse(noun, verb, object);
        console.log(finalsentence);
    }

    function getVerse(_noun: string[], _verb: string[], _object: string[]): string {

        let randomNumbernoun: number = Math.floor(Math.random() * _noun.length);
        let randomNumberverb: number = Math.floor(Math.random() * _noun.length);
        let randomNumberobject: number = Math.floor(Math.random() * _noun.length);
        let satzbau: string = _noun[randomNumbernoun] + _verb[randomNumberverb] + _object[randomNumberobject];
        _noun.splice(randomNumbernoun, 1);
        _verb.splice(randomNumberverb, 1);
        _object.splice(randomNumberobject, 1);
        return satzbau;
    }
}