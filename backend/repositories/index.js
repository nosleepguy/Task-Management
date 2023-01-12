import { MongoClient, ServerApiVersion } from 'mongodb';
export const db = {
    user: null,
    task: null,
    label: null,
};

export const initDatabase = () => {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    client.connect().then(() => {
        console.log("db connected");
        const connected = client.db("TaskManagement");
        db.user = connected.collection("user");
        db.task = connected.collection("task");
        db.label = connected.collection("label");
    })
}
