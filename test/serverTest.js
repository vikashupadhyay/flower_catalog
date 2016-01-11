var supertest = require('supertest');
var controller = require('../routes');
var assert = require('assert').assert;

describe('homepage',function(){
	describe('index.html',function(){
		it('should get index.html when url is /',function(done){
			supertest(controller)
				.get('/')
				.expect('content-Type',/text\/html/)
				.expect(200,done)
		})
	});
	describe('render comment',function(){
		it('it should render comment page',function(done){
			supertest(controller)
			.post('/comment')
			.expect(200,done);
		})
	});
})
