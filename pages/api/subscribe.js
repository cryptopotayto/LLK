import { connectDatabase, selectDB, insertDocument } from "@/utils/mongodb-utils";

async function handler(req, res) {
    if(req.method === 'POST') {
        
        const userEmail = req.body.email;
        const collection = 'subscribe';

        if(!userEmail || !userEmail.includes('@')) {
            res.status(422).json({ message: 'Invalid email address.' }); 
        return;
        }

        let client;

        try {
            client = await connectDatabase();
        } catch(error) {
            res.status(500).json({ message: 'Database connection failed'});
            return;
        }

        try {
            const db = selectDB(client, 'LLK');
            await insertDocument(db, collection,  { email: userEmail } );
            client.close();
        } catch (error) {
            res.status(500).json({ message: 'Document creation failed'});
            return;
        }
        
        

        res.status(201).json({ message: 'Signed Up' });
    }
}

export default handler;