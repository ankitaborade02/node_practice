const {MongoClient} = require('mongodb') 

// URL of mongodb
const url = "mongodb+srv://ankita:ankita02@cluster0.rl4mv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(url)

async function run() {
    try {
        await client.connect();
        const db = client.db()

// to find according to particular field 
       var query = {name: "max"}
       const newvalue = {$set : {name:"will", address : "USA"}}
        const result = await db.collection('mydatabase').updateOne(query,newvalue)
         console.log(result); 
       
    }
    catch(error){
        console.error(error);
    }
    finally{
        client.close()
    }
}
run()