# Kafka

---

Apache Kafka is a distributed streaming platform developed by LinkedIn and donated to the Apache Software Foundation. It was originally designed for handling real-time data feeds and has evolved into a robust, scalable tool for managing high-throughput, fault-tolerant messaging systems. Kafka is widely used to build real-time streaming data pipelines and applications that adapt and react to data streams.

Kafka's core capabilities revolve around its ability to publish and subscribe to streams of records, similar to a message queue or enterprise messaging system. Additionally, it can store streams of records in a fault-tolerant manner and process streams as they occur. Kafka is designed to function on a cluster of one or more servers that can span multiple datacenters, with the Kafka cluster storing streams of records in categories called topics.

Kafka is:

- **Highly Scalable**: You can scale out capabilities without downtime by adding more nodes to the cluster, and Kafka can handle hundreds of megabytes of reads and writes per second from thousands of clients.
- **Durable**: It replicates data and supports multiple subscribers; additionally, it automatically balances consumers in the event of failure.
- **Fault Tolerant**: Kafka ensures that messages are processed in the order they are received, even in the event of a failure, by using ZooKeeper for cluster management.

Example:
```java
# Example of a Kafka producer configuration in Java
Properties props = new Properties();
props.put("bootstrap.servers", "localhost:9092");
props.put("acks", "all");
props.put("retries", 0);
props.put("batch.size", 16384);
props.put("linger.ms", 1);
props.put("buffer.memory", 33554432);
props.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer");
props.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer");

Producer<String, String> producer = new KafkaProducer<>(props);
try {
    for(int i = 0; i < 100; i++)
        producer.send(new ProducerRecord<String, String>("myTopic", Integer.toString(i), "My message #" + i));
} finally {
    producer.close();
}
```

Kafka's unique architecture allows it to be not merely a messaging system but a platform for handling all of the data's journey from ingestion through to processing and real-time querying capabilities, making it integral to modern data-driven applications.