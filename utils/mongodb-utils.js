import { MongoClient } from "mongodb";

export async function connectDatabase() {
    const client = await MongoClient.connect(
        'mongodb+srv://jsdevtay23:Ca2253ke!!@cluster0.txe4anx.mongodb.net/?retryWrites=true&w=majority'
        );
    return client;
}

export function selectDB(client, name) {
    const db = client.db(name.toString());
    return db;
}

export async function insertDocument(db, collection, obj ) {
    await db.collection(collection.toString()).insertOne({ obj });
}