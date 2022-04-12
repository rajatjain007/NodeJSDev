var request = require('request')

describe('calc',()=>{
    it('should add 2 and 3',()=>{
        expect(2+3).toBe(5)
    })
})

describe('get messages',()=>{
    it('should return 200 Ok',(done)=>{
        request.get('http://localhost:3000/messages',(err,res)=>{
            expect(res.statusCode).toBe(200)
            done()
        })
    })
})

describe('get messages',()=>{
    it('should return an unempty list',(done)=>{
        request.get('http://localhost:3000/messages',(err,res)=>{
            expect(JSON.parse(res.body).length).toBeGreaterThan(0)
            done()
        })
    })
})

describe('get messages from a user',()=>{
    it('should return 200 Ok',(done)=>{
        request.get('http://localhost:3000/messages/Rajat',(err,res)=>{
            expect(res.statusCode).toBe(200)
            done()
        })
    })
    it('name should be Rajat',(done)=>{
        request.get('http://localhost:3000/messages/Rajat',(err,res)=>{
            expect(JSON.parse(res.body)[0].name).toEqual('Rajat')
            done()
        }) 
    })
})