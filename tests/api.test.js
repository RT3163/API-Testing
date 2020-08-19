const request = require('supertest')
const express = require('express')

let app;
delete require.cache[require.resolve('../index')]
app = require('../index')

describe('GET /posts', () => {
    it ('Response with 200 and the correct object.', (done) => {
    request(app)
    .get('/posts')
    .expect(200, done)
    .expect([{postId: 1, id: 1, name: 'is labore ex et quam laborum', email: 'Eliseo@gardner.biz', body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'}])
    })
})


describe('POST /posts', () => {
    it ('Accepts a comment', (done) => {
         request(app)
        .post('/posts')
        .send([{postId: 1, id: 1, name: 'is labore ex et quam laborum', email: 'Eliseo@gardner.biz', body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'}])
        .set('Accept', 'application/json')
        .expect(201)
        .expect({"message": "Your comment was posted."})
        done()
    }) 
})
