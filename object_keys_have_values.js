/*
Check if all object keys have value defined

Run: node <file.js>

2017-10-15
*/

const songA = {
    title: 'Bounty Hunter',
    artist: 'superb',
    genre: 'pop'
};

const songB = {
    title: 'Hunter',
    artist: null,
    genre: 'pop'
};

function areAllKeysDefined(song) {
    console.log(`check keys of object ${song}`)

    // get object keys
    songKeys = Object.keys(song)
    console.log(songKeys)

    result = songKeys.every(k => !!song[k])
    console.log(result)
}

areAllKeysDefined(songA)
areAllKeysDefined(songB)
