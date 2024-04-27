# Nginx

---

Nginx (pronounced "engine-x") is a powerful, high-performance HTTP server, reverse proxy, and email (IMAP/POP3) proxy, designed to efficiently handle a large number of concurrent connections. It was originally created by Igor Sysoev in 2002 to solve the C10k problem, which relates to handling ten thousand concurrent connections. Nginx has since evolved to provide a lightweight, high-speed solution for serving static content, directing web traffic, load balancing, and more, making it a cornerstone of modern web architectures.

Nginx uses an asynchronous, event-driven approach rather than the traditional thread-based handling of requests used by many servers. This architecture uses small and predictable amounts of memory under load, which significantly improves the performance when dealing with simultaneous HTTP connections, especially in comparison to servers that spawn a new thread or process for each request.

Nginx is:

- **Efficient**: Capable of handling more than 10,000 simultaneous connections with a low memory footprint, Nginx is highly efficient and effective for both static content delivery and as a reverse proxy or load balancer.
- **Flexible**: Nginx serves as a reverse proxy and load balancer, providing increased flexibility when working with different backend services and managing the flow of web traffic.
- **Robust**: It offers out-of-the-box features like SSL/TLS termination, WebSocket support, and HTTP/2 capabilities, enhancing the security and speed of web services.

Example:
```nginx
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
```

```bash
# Command to restart Nginx after making configuration changes
sudo systemctl restart nginx
```

Nginx is widely appreciated for its performance, stability, and low resource usage, making it an essential tool in hosting high-traffic websites, web applications, and for use as a reverse proxy and load balancer in complex application architectures.