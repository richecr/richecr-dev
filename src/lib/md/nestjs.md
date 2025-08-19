# NestJS

---

NestJS is a progressive **Node.js framework** for building efficient, reliable, and scalable server-side applications. Initially released in 2017 by Kamil Myśliwiec, NestJS combines elements of **Object-Oriented Programming (OOP), Functional Programming (FP), and Functional Reactive Programming (FRP)**. It is heavily inspired by Angular’s architecture, providing developers with a familiar structure when building large-scale enterprise applications in JavaScript or TypeScript.

At its core, NestJS leverages **TypeScript** and takes advantage of the latest ECMAScript features. It uses **decorators, dependency injection, and modularity** to create highly testable, maintainable, and loosely coupled applications. It integrates seamlessly with other libraries like Express (default) or Fastify and provides first-class support for GraphQL, WebSockets, and microservices.

NestJS is:

- **Modular:** Applications are organized into modules, making codebase structure clean and scalable.  
- **Type-Safe:** Built with TypeScript, ensuring strong typing and early error detection.  
- **Extensible:** Integrates easily with databases (MongoDB, PostgreSQL, MySQL), ORMs (TypeORM, Prisma), and messaging systems (Kafka, RabbitMQ).  
- **Versatile:** Supports REST APIs, GraphQL, WebSockets, and microservice architectures out of the box.  

### Example

```typescript
import { Controller, Get, Module } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

@Controller()
class AppController {
  @Get()
  getHello(): string {
    return 'Hello NestJS!';
  }
}

@Module({
  controllers: [AppController],
})
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```

NestJS stands out in the Node.js ecosystem by bringing enterprise-grade patterns and productivity to backend development, making it a top choice for teams building modern APIs, microservices, and cloud-native applications.