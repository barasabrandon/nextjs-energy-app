import clientPromise from '@/lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const reqBody = JSON.parse(req.body);
      const client = await clientPromise;
      const db = client.db('energy-audit');
      const collection = db.collection('entities');
      const name = reqBody.name;
      const existingUser = await collection.findOne({ name });
      if (existingUser) {
        res.status(400).send('Entity already exists');
        return;
      } else {
        await collection.insertOne({
          name: reqBody.name,
          startDate: reqBody.startDate,
          endDate: reqBody.endDate,
          associatedFacilities: reqBody.associatedFacilities,
        });
        const results = await collection.findOne({ name });
        res.status(200).json({ results });
      }
    } catch (error) {
      console.log('Error Occured', error);
    }
  } else if (req.method === 'GET') {
    try {
      const client = await clientPromise;
      const db = client.db('energy-audit');
      const collection = db.collection('entities');
      const results = await collection.find({}).toArray();
      res.status(200).json({ results });
    } catch (error) {
      console.log('Error Occured', error);
    }
  }
}
