# Postgresql

---

PostgreSQL, often simply Postgres, is an advanced open-source relational database management system (RDBMS) that emphasizes extensibility and SQL compliance. It was developed at the University of California, Berkeley, starting in the mid-1980s and has been actively enhanced and maintained by a vibrant and independent community ever since its release in 1996.

PostgreSQL is known for its robustness, reliability, and performance, especially in handling complex queries and large datasets. It supports advanced data types and performance optimization features, which are not available in many other open-source databases. Moreover, PostgreSQL is highly extensible; for example, users can define their own data types, build out custom functions, and even write code from different programming languages without recompiling their database.

PostgreSQL features include:

- **ACID Compliance**: Ensures reliable transaction processing that is atomic, consistent, isolated, and durable.
- **Rich Data Types**: Supports a broad range of native data types, including JSON, XML, and arrays, as well as user-defined types.
- **Extensibility**: One of PostgreSQL’s most touted features is its extensibility. The database supports numerous programming languages and plugins, and it can also be extended by the user with custom functions that can be written in various programming languages, such as C/C++, Java, etc.

Example:
```sql
-- Example of creating a table and inserting data in PostgreSQL
CREATE TABLE inventory (
    id serial PRIMARY KEY,
    name VARCHAR (100),
    quantity INT
);

INSERT INTO inventory (name, quantity) VALUES ('banana', 150);
INSERT INTO inventory (name, quantity) VALUES ('orange', 154);

-- Querying data
SELECT * FROM inventory;
```

PostgreSQL is not just a database but a framework for developers to define and execute complex queries and manage data with excellent concurrency support. It stands out for its ability to handle a range of workloads, from single machines to data warehouses or Web services with many concurrent users.