# FastAPI

---

FastAPI is a modern, fast (high-performance) web framework for building APIs with Python 3.6+ based on standard Python type hints. Created by Sebastián Ramírez in 2018, FastAPI is designed to be easy to use while ensuring high performance. It leverages ASGI (Asynchronous Server Gateway Interface) to enable asynchronous features, which makes it ideal for handling high volumes of requests and delivering high concurrency.

FastAPI integrates seamlessly with Python's asynchronous programming features and is built on top of Starlette for the web parts and Pydantic for the data parts. This combination makes it one of the fastest Python frameworks available, significantly outperforming many traditional synchronous frameworks.

FastAPI is:

- **Fast**: It is one of the fastest frameworks for building APIs in Python, thanks to its underlying ASGI support.
- **Robust**: Type hints and automatic data model validation ensure that the APIs you build are more bug-resistant.
- **Developer-friendly**: It includes automatic interactive API documentation (using Swagger UI and ReDoc), which makes it easier for developers to understand and test the API endpoints.

Example:
```python
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
```

FastAPI simplifies API development with its straightforward, rapid, and efficient approach, making it highly suitable for modern web applications that require complex data interactions and high-performance responsiveness.