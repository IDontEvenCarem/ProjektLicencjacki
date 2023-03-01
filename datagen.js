const _ = require('lodash')
const faker = require('@faker-js/faker').faker

function GenPosts(count = 6) {
    return _.range(6)
        .map(i => ({
            img: "https://picsum.photos/300/200?i="+i,
            img_w: 300,
            img_h: 200,
            title: faker.lorem.sentence(),
            text: faker.lorem.sentences(Math.floor(1+Math.random()*3))
        }))
}


module.exports = {
    GenPosts
}