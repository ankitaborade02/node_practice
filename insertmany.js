// const { url } = require('inspector');
const {MongoClient} = require('mongodb') 

// URL of mongodb
const url ="mongodb+srv://ankita:ankita02@cluster0.rl4mv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(url)

async function run() {
    try {
        await client.connect();
        const db = client.db()
//insert
        const myobj = [{name: 'john', age : '28', address:'pune'},
            {name : "freddy", age : "41", address : "mumbai"},
            {name : "max", age : '52', address : 'kolkata'},
            {name : 'robert', age : '10', address : 'USA'}
            
        ]
        const result = await db.collection('mydatabase').insertMany(myobj)
        console.log(`inserted ${result.insertedIds}`);
    } catch (error) {
        console.error(error);
    }
    finally{
        client.close()
    }
}
run()