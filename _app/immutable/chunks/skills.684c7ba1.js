import{A as e}from"./UIcon.39926d37.js";const p=`# Svelte

---

[\`Svelte\`](https://svelte.dev/) is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.

The compiler itself is written in TypeScript. Its source code is licensed under MIT License and hosted on GitHub.

<br/>

Svelte is :

- compiled : Svelte shifts as much work as possible out of the browser and into your build step. No more manual optimisations — just faster, more efficient apps.
- compact : Write breathtakingly concise components using languages you already know — HTML, CSS and JavaScript. Oh, and your application bundles will be tiny as well.
- complete : Built-in scoped styling, state management, motion primitives, form bindings and more — don't waste time trawling npm for the bare essentials. It's all here.

<br/>

## Example

\`\`\`ts
<script>
    let count = 1;
    $: doubled = count * 2;
<\/script>

<p>{count} * 2 = {doubled}</p>

<button on:click={() => count = count + 1}>Count</button>
\`\`\`

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

> Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members.
`,u=`# Python

---

Here's a description for Python, crafted in a similar style to the one used for Svelte:

Python is a high-level, open-source programming language created by Guido van Rossum and maintained by members of the global Python community. Unlike compiled languages, Python is interpreted, meaning that code is executed line by line, which can ease debugging and iterative development. Python's design emphasizes code readability, allowing programmers to express concepts in fewer lines of code than would be possible in other languages. Additionally, Python supports multiple programming paradigms, including object-oriented, imperative, and functional programming.

The standard interpreter is written in C, and the language is licensed under the Python Software Foundation License, with its source code hosted on GitHub.

Python is:

- **Intuitive**: Python simplifies the complexity of software development, removing common barriers to entry for programming thanks to its clear syntax and vast ecosystem of libraries and frameworks.
- **Versatile**: From web development to machine learning, Python provides robust tools and specialized frameworks such as Django for web and TensorFlow for AI, ensuring you have everything you need at your fingertips.
- **Interactive**: With support for interactivity through notebooks like Jupyter, Python makes it easy to experiment and share code, fostering a vibrant and collaborative community.

Example:
\`\`\`python
counter = 1

def double(x):
    return x * 2

doubled = double(counter)
print(f"{counter} * 2 = {doubled}")

counter += 1
\`\`\`

\`\`\`bash
1 * 2 = 2
\`\`\`

Increment button:
\`\`\`python
counter += 1
\`\`\`

Python is a high-level, open-source programming language created by Guido van Rossum and maintained by an active global community.`,m=`# Java

---

Java is a powerful, high-level programming language developed by Sun Microsystems in 1995 and currently maintained by Oracle Corporation. It is a compiled language that translates source code into bytecode, which is then run on the Java Virtual Machine (JVM). This allows Java programs to run on any device that has a JVM, making the language highly portable. Java's design focuses on robustness, offering strong memory management and built-in support for multithreading, which enhances performance and scalability across different platforms.

Java is object-oriented, which simplifies complex software development by promoting cleaner, modular code that can be reused across different projects. The standard JDK (Java Development Kit) includes a comprehensive standard library that provides tools and utilities for application development.

Java is:

- **Reliable**: Java offers an extensive standard library and strong memory management, which reduces the likelihood of crashes and memory leaks, thereby enhancing the stability of applications.
- **Scalable**: With inherent support for multithreading and concurrency, Java can handle growing user demands and data volumes efficiently, making it a favorite for enterprise-level applications.
- **Cross-Platform**: Java programs are compiled into bytecode, which can be run on any device equipped with a JVM. This "write once, run anywhere" (WORA) capability ensures that Java applications are versatile across different operating systems.

Example:
\`\`\`java
public class Main {
    public static void main(String[] args) {
        int counter = 1;
        int doubled = doubleValue(counter);
        System.out.println(counter + " * 2 = " + doubled);
        counter += 1;
    }

    public static int doubleValue(int x) {
        return x * 2;
    }
}
\`\`\`

\`\`\`bash
1 * 2 = 2
\`\`\`

Increment button:
\`\`\`java
counter += 1;
\`\`\`

Java is a robust, high-level programming language developed by Sun Microsystems, now maintained by Oracle, known for its portability, reliability, and extensive use in large-scale enterprise environments.`,g=`# Kotlin

---

Kotlin is a modern, statically typed programming language that was developed by JetBrains and first released in 2011. It is designed to be fully interoperable with Java, allowing developers to use both languages seamlessly within the same project. Kotlin addresses many of the shortcomings of Java, such as verbosity and null pointer exceptions, by providing a more concise syntax and built-in null safety.

The language runs on the Java Virtual Machine (JVM) and can also be compiled to JavaScript source code or use the LLVM compiler infrastructure to target native binaries. Kotlin is object-oriented and also supports functional programming features, such as lambdas and higher-order functions, which make the code more expressive and concise.

Kotlin is:

- **Concise**: Kotlin reduces boilerplate code, which makes programs easier to read and write. Its concise syntax also leads to fewer coding errors and, consequently, more robust code.
- **Safe**: With built-in null safety and immutability features, Kotlin helps prevent common programming errors such as null pointer exceptions, making the codebase more reliable.
- **Interoperable**: Kotlin is fully interoperable with Java, allowing developers to use all existing Java libraries and frameworks, making it a versatile choice for new and existing projects.

Example:
\`\`\`kotlin
fun main() {
    var counter = 1
    val doubled = doubleValue(counter)
    println("$counter * 2 = $doubled")
    counter += 1
}

fun doubleValue(x: Int): Int {
    return x * 2
}
\`\`\`

\`\`\`bash
1 * 2 = 2
\`\`\`

Increment button:
\`\`\`kotlin
counter += 1
\`\`\`

Kotlin is a versatile, modern programming language developed by JetBrains, acclaimed for its conciseness, safety features, and seamless interoperability with Java, making it a popular choice for both Android development and server-side applications.`,h=`# JavaScript

---

JavaScript, often abbreviated as JS, is a dynamic, high-level scripting language that was developed by Netscape in 1995. Originally designed to enhance the interactivity of web pages, it has since become one of the core technologies of the web, alongside HTML and CSS. JavaScript is interpreted rather than compiled, allowing it to run across different web browsers without the need for compilation.

JavaScript is unique in that it can be executed not only in the browser but also on the server-side, thanks to environments such as Node.js. This makes JavaScript a versatile choice for developing both client-side and server-side components of web applications. It supports multiple programming paradigms, including object-oriented, imperative, and functional programming, providing flexibility in how developers write code.

JavaScript is:

- **Ubiquitous**: As the scripting language of the web, JavaScript is supported by all major browsers and is essential for developing interactive web applications.
- **Flexible**: JavaScript supports various programming styles and is used in a wide range of applications, from small website animations to large-scale enterprise web applications.
- **Event-driven**: JavaScript excels in creating responsive user interfaces and handling asynchronous operations, particularly useful for tasks like AJAX calls and real-time updates.

Example:
\`\`\`javascript
let counter = 1;
const doubleValue = x => x * 2;
let doubled = doubleValue(counter);
console.log(\`\${counter} * 2 = \${doubled}\`);

counter += 1;
\`\`\`

\`\`\`bash
1 * 2 = 2
\`\`\`

Increment button:
\`\`\`javascript
counter += 1;
\`\`\`

JavaScript is a dynamic, essential web technology known for its role in enhancing user interaction and functionality in web applications, making it indispensable for modern web development.`,f=`# TypeScript

---

TypeScript is an open-source programming language developed and maintained by Microsoft, first introduced in 2012. As a superset of JavaScript, TypeScript adds optional static typing to the language, helping to catch errors early in the development process and enhancing code quality and maintainability. This makes it particularly appealing for large-scale application development where JavaScript’s dynamic typing can become a source of complex bugs and maintenance challenges.

TypeScript is compiled into plain JavaScript, ensuring compatibility with any browser, host, or operating system. This compilation step checks types, which can catch common typing errors before code runs, and allows for the use of future JavaScript features before they are widely supported in browsers.

TypeScript is:

- **Scalable**: Designed for developing large applications, TypeScript features such as interfaces, enums, and generics make the codebase more organized and manageable.
- **Developer-friendly**: Provides powerful tools for JavaScript development, including static checking, code refactoring, and IntelliSense.
- **Robust**: The addition of static types ensures that many potential runtime errors can be detected at compile time, improving the reliability and robustness of applications.

Example:
\`\`\`typescript
let counter: number = 1;
const doubleValue = (x: number): number => x * 2;
let doubled: number = doubleValue(counter);
console.log(\`\${counter} * 2 = \${doubled}\`);

counter += 1;
\`\`\`

\`\`\`bash
1 * 2 = 2
\`\`\`

Increment button:
\`\`\`typescript
counter += 1;
\`\`\`

TypeScript is a powerful enhancement to JavaScript, developed by Microsoft, that brings static typing and object-oriented tools to modern JavaScript development, making it a favorite among developers for building complex and large-scale applications.`,y=`# Go

---

Go, often referred to as Golang, is an open-source programming language created by Google engineers Robert Griesemer, Rob Pike, and Ken Thompson. It was officially launched in 2009 as a language optimized for programming productivity in the era of multicore, networked machines, and large codebases. Go combines the performance and security benefits of statically typed languages with the speed of dynamic languages.

Designed with simplicity and efficiency in mind, Go has a clean syntax and garbage collection, and it supports concurrent programming, enabling it to handle multiple tasks at once efficiently. This makes Go particularly well-suited for building fast, reliable, and scalable server-side applications.

Go is:

- **Concurrent**: Go's built-in support for concurrency is one of its standout features. It utilizes goroutines, which are lightweight threads managed by the Go runtime, allowing easy handling of tasks that can run concurrently.
- **Fast**: Compilation times in Go are fast, enhancing developer productivity. The compiled binary code also runs at close to C/C++ speed, thanks to its static typing and efficiency.
- **Practical**: Go has a minimalist design but includes powerful standard libraries. It avoids much of the "bloat" that slows down other languages, making it easier to maintain and deploy software written in Go.

Example:
\`\`\`go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
\`\`\`

Go has gained popularity for its ability to handle modern computing challenges such as cloud services and distributed systems efficiently. Its robustness, simplicity, and powerful standard libraries make it a favored choice for developers in high-performance computing environments.`,b=`# Nodejs

---

Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser. Developed by Ryan Dahl in 2009, it is designed to build scalable network applications. Node.js allows developers to use JavaScript for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.

Node.js is built on the V8 JavaScript engine, the same engine used in Google Chrome, enabling it to provide high performance and speed for real-time applications. It uses an event-driven, non-blocking I/O model, which makes it lightweight and efficient, particularly suitable for data-intensive real-time applications that run across distributed devices.

Node.js is:

- **Efficient**: Its non-blocking, event-driven architecture handles many connections simultaneously, making it optimal for real-time applications like online gaming and chat applications.
- **Unified**: Node.js uses JavaScript on both the server and client sides, allowing for more uniform and integrated development practices.
- **Extensive**: With one of the largest ecosystems of open-source libraries available through npm, Node.js offers a rich set of modules and tools that simplify the development of web applications.

Example:
\`\`\`javascript
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\\n');
});

server.listen(port, hostname, () => {
  console.log(\`Server running at http://\${hostname}:\${port}/\`);
});
\`\`\`

Node.js revolutionizes backend development by enabling JavaScript to perform server-side operations, providing a powerful platform for developing fast and scalable network applications.`,v=`# FastAPI

---

FastAPI is a modern, fast (high-performance) web framework for building APIs with Python 3.6+ based on standard Python type hints. Created by Sebastián Ramírez in 2018, FastAPI is designed to be easy to use while ensuring high performance. It leverages ASGI (Asynchronous Server Gateway Interface) to enable asynchronous features, which makes it ideal for handling high volumes of requests and delivering high concurrency.

FastAPI integrates seamlessly with Python's asynchronous programming features and is built on top of Starlette for the web parts and Pydantic for the data parts. This combination makes it one of the fastest Python frameworks available, significantly outperforming many traditional synchronous frameworks.

FastAPI is:

- **Fast**: It is one of the fastest frameworks for building APIs in Python, thanks to its underlying ASGI support.
- **Robust**: Type hints and automatic data model validation ensure that the APIs you build are more bug-resistant.
- **Developer-friendly**: It includes automatic interactive API documentation (using Swagger UI and ReDoc), which makes it easier for developers to understand and test the API endpoints.

Example:
\`\`\`python
from fastapi import FastAPI
from pydantic import BaseModel

class Item(BaseModel):
    name: str
    description: str = None
    price: float
    tax: float = None

app = FastAPI()

@app.post("/items/")
async def create_item(item: Item):
    return {"name": item.name, "price": item.price}

@app.get("/")
async def read_root():
    return {"Hello": "World"}
\`\`\`

FastAPI simplifies API development with its straightforward, rapid, and efficient approach, making it highly suitable for modern web applications that require complex data interactions and high-performance responsiveness.`,w=`# Spring

---

Spring is a comprehensive programming and configuration model for modern Java-based enterprise applications - on any kind of deployment platform. Developed initially by Rod Johnson and released in 2003 under the Apache 2.0 license, Spring Framework provides a robust infrastructure support for developing Java applications. Spring handles the infrastructure so developers can focus on building application business logic.

Spring’s core feature is dependency injection which promotes loose coupling through inversion of control. The framework's modularity allows it to be used piecemeal with many other frameworks. It is also well-known for its transaction management, sophisticated integration with messaging systems, and its dynamic response to the demands of real-time enterprises.

Spring is:

- **Comprehensive**: It provides a wide range of capabilities including but not limited to transaction management, security, JDBC operations, web application development, and more, via its various projects like Spring Boot, Spring Cloud, and Spring Security.
- **Flexible**: Spring is designed to be highly configurable with minimal impact on application code, supporting both XML and annotation-based configuration.
- **Extensible**: Thanks to its modular architecture, developers can easily adapt and extend the framework by plugging in their own implementation of specific framework interfaces.

Example:
\`\`\`java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class HelloApplication {

    public static void main(String[] args) {
        SpringApplication.run(HelloApplication.class, args);
    }

    @GetMapping("/hello")
    public String sayHello(@RequestParam(value = "name", defaultValue = "World") String name) {
        return String.format("Hello %s!", name);
    }
}
\`\`\`

Spring stands out in the enterprise Java community for its depth, providing extensive infrastructure support and enabling developers to create high-performing, robust applications efficiently.`,k=`# Fastify

---

Fastify is a high-performance, low-overhead web framework for Node.js. It was created by Matteo Collina and Tomas Della Vedova in 2016, designed to be a faster alternative to Express by focusing on providing a faster foundation for web applications and APIs. Fastify leverages a schema-based approach to serialize and validate data, which significantly enhances its speed and efficiency.

One of the standout features of Fastify is its extensive plugin architecture, allowing developers to extend its capabilities with plugins without compromising on performance. It also supports asynchronous request handling out of the box, making it suitable for handling high levels of concurrency and I/O-heavy operations typical in modern web applications.

Fastify is:

- **Efficient**: Designed with performance in mind, it offers quick server startup and request processing times, with low overhead per request.
- **Scalable**: Its non-blocking nature and efficient handling of requests make it an excellent choice for applications expecting high traffic volumes.
- **Developer-friendly**: Fastify provides a robust ecosystem of plugins, detailed documentation, and built-in schema-based validation to simplify the development process.

Example:
\`\`\`javascript
const fastify = require('fastify')({ logger: true })

fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

fastify.listen(3000, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(\`server listening on \${address}\`)
})
\`\`\`

Fastify stands out in the Node.js ecosystem for its focus on performance and scalability, making it a compelling choice for developers looking to build fast, efficient web applications.`,S=`# ReactJS

---

ReactJS, commonly referred to simply as React, is an open-source JavaScript library for building user interfaces, particularly for single-page applications where you need a fast and interactive user experience. Developed and maintained by Facebook, it was released in 2013 and has since become one of the most popular tools for front-end development.

React's main concept is the virtual DOM, which optimizes rendering in the web browser by minimizing the number of real DOM manipulations. This leads to significant performance improvements and a smoother user experience. React also promotes the creation of reusable UI components, which makes developing complex applications more manageable and maintainable.

React is:

- **Declarative**: React makes it painless to create interactive UIs by designing simple views for each state in your application. When your data changes, React efficiently updates and re-renders just the right components.
- **Component-Based**: You can build encapsulated components that manage their own state, then compose them to make complex UIs. This modularity can greatly enhance code reusability and testing.
- **Learnable**: React has a strong community, extensive documentation, and many learning resources, making it accessible to beginners and valuable to experienced developers.

Example:
\`\`\`javascript
import React, { useState } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

React revolutionizes the way developers build web applications, offering a scalable, powerful, and highly efficient approach to developing web interfaces.`,x=`# VueJS

---

Vue.js is an open-source progressive JavaScript framework used to develop interactive web interfaces and single-page applications. Created by Evan You in 2014, Vue is designed to be incrementally adoptable. The core library focuses on the view layer only, making Vue easy to integrate with other libraries or existing projects, while also being capable enough to power sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.

Vue.js is known for its simplicity and flexibility. It features an easy-to-understand templating syntax and a reactive data-binding system that ensures efficient updates to the user interface in response to data changes. Vue's component architecture allows developers to build reusable custom elements, which can be beneficial in large-scale applications to promote maintainability and organization.

Vue.js is:

- **Intuitive**: Vue features a straightforward API and a design that's easy to understand for those who are new to framework-based front end development.
- **Versatile**: With a supportive ecosystem that includes tools like Vuex for state management and Vue Router for client-side routing, Vue.js is flexible enough to handle a range of complexity in application development, from small projects to large-scale enterprise software.
- **Efficient**: Vue optimizes DOM updates and minimizes performance bottlenecks, making it a solid choice for dynamic user interfaces that require fast interaction and rendering.

Example:
\`\`\`javascript
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
\`\`\`

\`\`\`html
<div id="app">
  {{ message }}
</div>
\`\`\`

Vue.js enhances the development of web applications with its approachable concept, combined with powerful capabilities for building scalable and fast-reacting user interfaces.`,I=`# AWS

---

AWS (Amazon Web Services) is a comprehensive and broadly adopted cloud platform, offered by Amazon.com, that provides over 200 fully featured services from data centers globally. Launched in 2006, AWS provides a variety of building blocks that can be used to create and deploy any type of application in the cloud. These services include computing power, storage options, networking, databases, analytics, machine learning, Internet of Things (IoT), security, and enterprise applications.

AWS is designed to enable companies of all sizes, from startups to leading enterprises and public sector organizations, to lower costs, become more agile, and innovate faster. It provides a highly reliable, scalable, and low-cost infrastructure platform that powers hundreds of thousands of businesses in 190 countries around the world.

AWS is:

- **Scalable**: You can scale resources up or down based on demand, within minutes, ensuring that you pay only for what you use.
- **Flexible**: AWS offers a wide variety of tools and solutions for developers and businesses to use in their applications. Whether it’s computing power, database storage, or content delivery, AWS has the services to help you build sophisticated applications with increased flexibility, scalability, and reliability.
- **Secure**: AWS is designed to be the most flexible and secure cloud computing environment available today. Its core infrastructure is built to satisfy the security requirements of the military, global banks, and other high-sensitivity organizations. This is accomplished through an end-to-end approach that secures and hardens infrastructure, from physical security to software, data, and personnel.

Example:
\`\`\`bash
# Using the AWS CLI to list all S3 buckets
aws s3 ls
\`\`\`

AWS revolutionizes how technology is used to solve business problems, offering a vast suite of cloud computing services that provide a host of infrastructure and software solutions for digital businesses.`,J=`# Docker

---

Docker is an open-source platform that revolutionized software development by making it significantly easier to create, deploy, and run applications using containers. Containers allow a developer to package up an application with all the parts it needs, such as libraries and other dependencies, and ship it all out as one package. This ensures that the application will run on any other Linux machine regardless of any customized settings that machine might have that could differ from the machine used for writing and testing the code.

Developed initially by Solomon Hykes and released by Docker, Inc. in 2013, Docker quickly gained popularity in the DevOps community for its lightweight approach to containerization, which is less resource-intensive than traditional virtual machines. Containers are isolated from each other and the host system, but they share the OS kernel, binaries, and libraries, when appropriate, which saves on memory and allows applications to boot up in seconds.

Docker is:

- **Portable**: Docker containers can run consistently across any desktop, data center, and cloud environment, making it easy to build, test, and deploy applications seamlessly.
- **Efficient**: By using containers, developers can create predictable environments that are isolated from other applications. Docker uses resources more efficiently than virtual machines.
- **Flexible**: Docker’s containers have become a standard for software deployment, with support for automated testing and continuous integration and delivery, making it a cornerstone of modern software development pipelines.

Example:
\`\`\`bash
# Create a Dockerfile in your project directory
FROM python:3.8-slim-buster
WORKDIR /app
COPY . .
RUN pip install -r requirements.txt
CMD ["python", "./my_script.py"]
\`\`\`

\`\`\`bash
# Build and run your Docker container
docker build -t my-python-app .
docker run my-python-app
\`\`\`

Docker enhances the development, testing, and deployment processes of applications by encapsulating them in lightweight, portable containers. This approach has widely been adopted for its efficiency and compatibility across multiple environments.`,P=`# Kubernetes

---

Kubernetes, also known as K8s, is an open-source platform designed to automate deploying, scaling, and operating application containers. Developed by Google and released in 2014, Kubernetes builds on a decade and a half of experience that Google has with running production workloads at scale, using a system called Borg. It aims to provide a platform for automating deployment, scaling, and operations of application containers across clusters of hosts, providing container-centric infrastructure.

Kubernetes has rapidly become the standard for container orchestration and management, enabling the deployment of highly resilient and scalable applications without tying them to individual machines. It manages clusters of Amazon EC2 compute instances and runs containers on those instances with processes for deployment, maintenance, and scaling.

Kubernetes is:

- **Self-healing**: It can automatically restart containers that fail, replace and reschedule containers when nodes die, kill containers that don't respond to user-defined health checks, and doesn't advertise them to clients until they are ready to serve.
- **Scalable**: Kubernetes allows you to automatically mount a storage system of your choice, whether from local storage, a public cloud provider such as AWS or GCP, or a network storage system like NFS, iSCSI, etc.
- **Modular**: It enables you to orchestrate computing, networking, and storage infrastructure on behalf of user workloads. This allows the underlying infrastructure to be abstracted away from the application developer.

Example:
\`\`\`yaml
# Example Kubernetes configuration file to create a deployment
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2
        ports:
        - containerPort: 80
\`\`\`

\`\`\`bash
# Command to apply the deployment
kubectl apply -f deployment.yaml
\`\`\`

Kubernetes not only simplifies application deployment, but also offers robust management of resources, ensuring applications run smoothly and efficiently across the cloud or on-premises environments. This platform has set a new standard in the automation and scalability of containerized applications.`,T=`# Nginx

---

Nginx (pronounced "engine-x") is a powerful, high-performance HTTP server, reverse proxy, and email (IMAP/POP3) proxy, designed to efficiently handle a large number of concurrent connections. It was originally created by Igor Sysoev in 2002 to solve the C10k problem, which relates to handling ten thousand concurrent connections. Nginx has since evolved to provide a lightweight, high-speed solution for serving static content, directing web traffic, load balancing, and more, making it a cornerstone of modern web architectures.

Nginx uses an asynchronous, event-driven approach rather than the traditional thread-based handling of requests used by many servers. This architecture uses small and predictable amounts of memory under load, which significantly improves the performance when dealing with simultaneous HTTP connections, especially in comparison to servers that spawn a new thread or process for each request.

Nginx is:

- **Efficient**: Capable of handling more than 10,000 simultaneous connections with a low memory footprint, Nginx is highly efficient and effective for both static content delivery and as a reverse proxy or load balancer.
- **Flexible**: Nginx serves as a reverse proxy and load balancer, providing increased flexibility when working with different backend services and managing the flow of web traffic.
- **Robust**: It offers out-of-the-box features like SSL/TLS termination, WebSocket support, and HTTP/2 capabilities, enhancing the security and speed of web services.

Example:
\`\`\`nginx
# Sample Nginx configuration for a basic web server serving on port 80
server {
    listen 80;
    server_name example.com;

    location / {
        root /var/www/html;
        index index.html index.htm;
    }

    location /images/ {
        root /var/www;
    }
}
\`\`\`

\`\`\`bash
# Command to restart Nginx after making configuration changes
sudo systemctl restart nginx
\`\`\`

Nginx is widely appreciated for its performance, stability, and low resource usage, making it an essential tool in hosting high-traffic websites, web applications, and for use as a reverse proxy and load balancer in complex application architectures.`,A=`# Kafka

---

Apache Kafka is a distributed streaming platform developed by LinkedIn and donated to the Apache Software Foundation. It was originally designed for handling real-time data feeds and has evolved into a robust, scalable tool for managing high-throughput, fault-tolerant messaging systems. Kafka is widely used to build real-time streaming data pipelines and applications that adapt and react to data streams.

Kafka's core capabilities revolve around its ability to publish and subscribe to streams of records, similar to a message queue or enterprise messaging system. Additionally, it can store streams of records in a fault-tolerant manner and process streams as they occur. Kafka is designed to function on a cluster of one or more servers that can span multiple datacenters, with the Kafka cluster storing streams of records in categories called topics.

Kafka is:

- **Highly Scalable**: You can scale out capabilities without downtime by adding more nodes to the cluster, and Kafka can handle hundreds of megabytes of reads and writes per second from thousands of clients.
- **Durable**: It replicates data and supports multiple subscribers; additionally, it automatically balances consumers in the event of failure.
- **Fault Tolerant**: Kafka ensures that messages are processed in the order they are received, even in the event of a failure, by using ZooKeeper for cluster management.

Example:
\`\`\`java
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
\`\`\`

Kafka's unique architecture allows it to be not merely a messaging system but a platform for handling all of the data's journey from ingestion through to processing and real-time querying capabilities, making it integral to modern data-driven applications.`,R=`# Postgresql

---

PostgreSQL, often simply Postgres, is an advanced open-source relational database management system (RDBMS) that emphasizes extensibility and SQL compliance. It was developed at the University of California, Berkeley, starting in the mid-1980s and has been actively enhanced and maintained by a vibrant and independent community ever since its release in 1996.

PostgreSQL is known for its robustness, reliability, and performance, especially in handling complex queries and large datasets. It supports advanced data types and performance optimization features, which are not available in many other open-source databases. Moreover, PostgreSQL is highly extensible; for example, users can define their own data types, build out custom functions, and even write code from different programming languages without recompiling their database.

PostgreSQL features include:

- **ACID Compliance**: Ensures reliable transaction processing that is atomic, consistent, isolated, and durable.
- **Rich Data Types**: Supports a broad range of native data types, including JSON, XML, and arrays, as well as user-defined types.
- **Extensibility**: One of PostgreSQL’s most touted features is its extensibility. The database supports numerous programming languages and plugins, and it can also be extended by the user with custom functions that can be written in various programming languages, such as C/C++, Java, etc.

Example:
\`\`\`sql
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
\`\`\`

PostgreSQL is not just a database but a framework for developers to define and execute complex queries and manage data with excellent concurrency support. It stands out for its ability to handle a range of workloads, from single machines to data warehouses or Web services with many concurrent users.`,j=`# Redis

---

Redis is an open-source, in-memory data structure store, used as a database, cache, and message broker. It supports data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs, geospatial indexes with radius queries, and streams. Redis was created by Salvatore Sanfilippo in 2009 and is developed and maintained by Redis Ltd. (formerly known as Redis Labs).

Redis is well-known for its high performance, providing sub-millisecond response times that enable millions of requests per second for real-time applications in industries like gaming, ad-tech, financial services, healthcare, and IoT. It's designed to be accessed by trusted clients inside trusted environments, as it does not emphasize encryption or fine-grained access control but focuses on high performance and simplicity.

Redis features include:

- **Speed**: Redis stores its entire dataset in the primary memory, as opposed to databases that store data on disk, which makes it extremely fast.
- **Versatility**: It can be used as a database, cache, message broker, etc. Its support for various data structures, pub/sub, and transaction features allows it to handle a wide array of use cases.
- **Persistence**: While Redis is an in-memory database, it can persist data to disk by snapshots and append-only file (AOF) methods, ensuring that data is not lost during server restarts.

Example:
\`\`\`redis
# Example of setting and getting data in Redis
SET greeting "Hello, World!"
GET greeting

# Example of working with lists
RPUSH mylist "one"
RPUSH mylist "two"
LRANGE mylist 0 -1
\`\`\`

Redis excels in situations where high availability and high performance are critical, and it's often used for caching to reduce the load on traditional databases or to speed up response times. Its simplicity and the ability to scale horizontally make it a popular choice among developers for modern, high-performance applications.`;function E(a,...i){const s=Object.assign({},a);return Object.keys(s).forEach(o=>{i.includes(o)&&delete s[o]}),s}const t=a=>a,C=[t({name:"Programming Languages",slug:"pro-lang"}),t({name:"Frameworks",slug:"framework"}),t({name:"Libraries",slug:"library"}),t({name:"Langauges",slug:"lang"}),t({name:"Databases",slug:"db"}),t({name:"ORMs",slug:"orm"}),t({name:"DevOps",slug:"devops"}),t({name:"Testing",slug:"test"}),t({name:"Dev Tools",slug:"devtools"}),t({name:"Markup & Style",slug:"markup-style"}),t({name:"Design",slug:"design"}),t({name:"Soft Skills",slug:"soft"})],n=a=>{const i=E(a,"category");return a.category&&(i.category=C.find(s=>s.slug===a.category)),i},c=[n({slug:"python",color:"blue",description:u,logo:e.Python,name:"Python",category:"pro-lang"}),n({slug:"java",color:"orange",description:m,logo:e.Java,name:"Java",category:"pro-lang"}),n({slug:"kotlin",color:"pink",description:g,logo:e.Kotlin,name:"Kotlin",category:"pro-lang"}),n({slug:"js",color:"yellow",description:h,logo:e.JavaScript,name:"Javascript",category:"pro-lang"}),n({slug:"ts",color:"blue",description:f,logo:e.TypeScript,name:"Typescript",category:"pro-lang"}),n({slug:"go",color:"orange",description:y,logo:e.Go,name:"Go",category:"pro-lang"}),n({slug:"nodejs",color:"yellow",description:b,logo:e.NodeJs,name:"NodeJs",category:"framework"}),n({slug:"fastapi",color:"cyan",description:v,logo:e.FastApi,name:"FastApi",category:"library"}),n({slug:"spring",color:"cyan",description:w,logo:e.Spring,name:"Spring",category:"library"}),n({slug:"fastify",color:"cyan",description:k,logo:e.Fastify,name:"Fastify",category:"library"}),n({slug:"reactjs",color:"cyan",description:S,logo:e.ReactJs,name:"React Js",category:"library"}),n({slug:"vuejs",color:"cyan",description:x,logo:e.VueJs,name:"Vue Js",category:"framework"}),n({slug:"svelte",color:"cyan",description:p,logo:e.Svelte,name:"svelte",category:"library"}),n({slug:"aws",color:"orange",description:I,logo:e.AWS,name:"Aws",category:"devops"}),n({slug:"docker",color:"orange",description:J,logo:e.Docker,name:"Docker",category:"devops"}),n({slug:"kubernetes",color:"orange",description:P,logo:e.Kubernetes,name:"Kubernetes",category:"devops"}),n({slug:"nginx",color:"orange",description:T,logo:e.Nginx,name:"Nginx",category:"devops"}),n({slug:"kafka",color:"orange",description:A,logo:e.Kafka,name:"Kafka",category:"devtools"}),n({slug:"postgresql",color:"orange",description:R,logo:e.PostgreSQL,name:"PostgreSQL",category:"db"}),n({slug:"redis",color:"orange",description:j,logo:e.Redis,name:"Redis",category:"db"})],V="Skills",K=(...a)=>c.filter(i=>a.includes(i.slug)),L=a=>{const i=[],s=[];return c.forEach(o=>{if(a.trim()&&!o.name.toLowerCase().includes(a.trim().toLowerCase()))return;if(!o.category){console.log(o.category),s.push(o);return}let r=i.find(d=>{var l;return d.category.slug===((l=o.category)==null?void 0:l.slug)});r||(r={items:[],category:o.category},i.push(r)),r.items.push(o)}),s.length!==0&&i.push({category:{name:"Others",slug:"others"},items:s}),i};export{L as a,K as g,c as i,V as t};
