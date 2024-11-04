// const { url } = require('inspector');
const {MongoClient} = require('mongodb') 

// URL of mongodb
const url = "mongodb+srv://ankita:ankita02@cluster0.rl4mv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(url)

async function run() {
    try {
        await client.connect();

        const db = client.db()
//insert
        const myobj = {name: "prince", age : "03", address:"mumbai"}
        const result = await db.collection('mydatabase').insertOne(myobj)
        console.log(`inserted ${result.insertedId}`);
    } catch (error) {
        console.error(error);
    }
    finally{
        client.close()
    }
}
run()