const endpoint = 'https://api.urbandictionary.com/v0'


/**
 * Returns random definitions
 */
export async function random() {
    const response = await (await fetch(`${endpoint}/random`)).json()
    return response.list
}
/**
 * Upvotes or downvotes a post
 * @param {Number} defid 
 * @param {String} direction 
 */
export async function vote(defid, direction) {
    const response = await (await fetch(`${endpoint}/vote`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({ defid:defid, direction:direction.toLowerCase() })
    })).json()
    return response
}
/**
 * Returns the definitions of a term
 * @param {String} term 
 */
export async function define(term) {
    const response = await (await fetch(`${endpoint}/define?term=${encodeURIComponent(term)}`)).json()
    return response.list
}
/**
 * Gets a definition by id
 * @param {String} id 
 */
export async function defid(id) {
    const response = await (await fetch(`${endpoint}/define?defid=${id}`)).json()
    return response.list
}