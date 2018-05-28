const template = require('./template.hbs');
const data = [
    {
        firstName: 'Jonh',
        lastName: 'Doue'
    },
    {
        firstName: 'James',
        lastName: 'Johna'
    }
]

const sliceOfHtml = template({ people: data });
