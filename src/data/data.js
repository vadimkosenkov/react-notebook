export const notes = [
{
    id: Date.now(),
    text: 'I wanna go to shop'
},
{
    id: Date.now()+1,
    text: 'I wanna go to cinema'
},
{
    id: Date.now()+2,
    text: 'I wanna go to supermarket'
},
{
    id: Date.now()+3,
    text: 'I wanna go to supermarketI wanna go to supermarketI wanna go to supermarketI wanna go to supermarket'
},
]

export const tags = [
{
    id: Date.now(),
    text: 'shop'
},
{
    id: Date.now()+1,
    text: 'change'
},
{
    id: Date.now()+2,
    text: 'desert'
},
{
    id: Date.now()+3,
    text: 'address'
},
{
    id: Date.now()+4,
    text: 'address'
},
{
    id: Date.now()+5,
    text: 'old'
},
{
    id: Date.now()+6,
    text: 'task'
},
{
    id: Date.now()+7,
    text: 'dog'
},
{
    id: Date.now()+8,
    text: 'ILikeBearAndBeerAndPearAndTopGear'
},
]

export function getNotes() {
    return notes;
}
export function getTags() {
    return tags;
}

// export function setData(value) {
//     data.push(value);
// }

// export function editData(id, value) {
//     data = data.map(item => item.id === id ? value : item)
// }

// export function deleteData(id) {
//     data = data.filter(item=>item.id !== id)
// }

