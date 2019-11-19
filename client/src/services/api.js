
const apiURL = 'http://localhost:9000/'

// function getUser(cb) {
//     fetch(`${apiURL}user`)
//         .then(res => res.json())
//         .then(res => cb(res))
//         .catch(err => err);
// }

function getUser(userId, cb) {
    fetch(`${apiURL}users/${userId}`)
        .then(res => res.json())
        .then(res => cb(res.user))
        .catch(err => err);
}

function test(cb) {
    cb('dog')
}

export { getUser, test };