import { collection, dbConnect } from '@/lib/dbconnect';
import { ObjectId } from 'mongodb';

export const getProperties = async () => {
  const PropertyCollection = dbConnect(collection.PROPERTIES);
  const properties = await PropertyCollection.find().toArray();
  return JSON.parse(JSON.stringify(properties));
};

export const getSingleProperty = async (id) => {
  if (!id || id.length !== 24) {
    return {};
  }

  try {
    const query = { _id: new ObjectId(id) };
    const propertyCollection = await dbConnect(collection.PROPERTIES);
    const property = await propertyCollection.findOne(query);
    return JSON.parse(JSON.stringify(property));
  } catch (error) {
    return {};
  }
};
