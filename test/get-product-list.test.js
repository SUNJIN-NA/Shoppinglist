var request = require('request')
var expect = require('chai').expect

var assert = require('assert')
const { doesNotMatch } = require('assert')
describe('Product', function () {
    describe('Get list', function () {
        it("should return 1 item's name list when requested.", function (done) {
            // assert.equal(['test.name'].length, 1)
            request.get(
                'http://localhost:3000/product-list',
                function (err, res, body) {
                    expect(res.statusCode).to.equal(200)
                    const products = JSON.parse(res.body)
                    expect(products.length).to.equal(1)
                    assert(products[0].name, 'test name')
                    done()
                }
            )
        })
    })
})
