

class MarvelServise {

    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey ='apikey=cd3f37f58b7fdcfcbc35ab399e4057ba'
    getResource = async(url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters =()=> {
        return this.getResource(`${this._apiBase}characters?limit=9&offset=200&${this._apiKey}`);
    }

    getCharacter =(id)=> {
        return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
    }
}

export default MarvelServise;