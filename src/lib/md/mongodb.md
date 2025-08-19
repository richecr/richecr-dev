# MongoDB

---

MongoDB is a leading **NoSQL database** designed for high-performance, high-availability, and easy scalability. First released in 2009 by MongoDB Inc., it uses a document-oriented data model, storing data in flexible, JSON-like documents rather than rows and columns. This approach allows developers to work with data in a way that is natural for modern applications, especially those requiring dynamic schemas and rapid iteration.

At its core, MongoDB leverages collections and documents instead of relational tables and rows. Documents are stored in BSON (binary JSON), which supports rich data types and nested structures. The database is well-suited for applications that demand agility, scalability, and real-time analytics.

MongoDB is:

- **Schema-less (Flexible):** Collections do not require predefined schemas, allowing developers to evolve applications quickly.  
- **Scalable:** Built-in horizontal scaling (sharding) makes MongoDB capable of handling very large datasets across distributed systems.  
- **Powerful Querying:** Rich query language, supporting ad-hoc queries, indexing, text search, geospatial queries, and aggregation pipelines.  
- **High Availability:** Features like replication (Replica Sets) ensure fault tolerance and automatic failover.  

### Example

```javascript
// Basic MongoDB usage with Node.js
const { MongoClient } = require("mongodb");

async function main() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("sample");
    const collection = database.collection("users");

    // Insert a document
    await collection.insertOne({ name: "Alice", age: 25 });

    // Find a document
    const user = await collection.findOne({ name: "Alice" });
    console.log(user);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
```

MongoDB has become a cornerstone for modern application development, particularly in microservices, big data, and real-time web apps, where flexibility and scalability are essential.