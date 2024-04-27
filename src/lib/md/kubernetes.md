# Kubernetes

---

Kubernetes, also known as K8s, is an open-source platform designed to automate deploying, scaling, and operating application containers. Developed by Google and released in 2014, Kubernetes builds on a decade and a half of experience that Google has with running production workloads at scale, using a system called Borg. It aims to provide a platform for automating deployment, scaling, and operations of application containers across clusters of hosts, providing container-centric infrastructure.

Kubernetes has rapidly become the standard for container orchestration and management, enabling the deployment of highly resilient and scalable applications without tying them to individual machines. It manages clusters of Amazon EC2 compute instances and runs containers on those instances with processes for deployment, maintenance, and scaling.

Kubernetes is:

- **Self-healing**: It can automatically restart containers that fail, replace and reschedule containers when nodes die, kill containers that don't respond to user-defined health checks, and doesn't advertise them to clients until they are ready to serve.
- **Scalable**: Kubernetes allows you to automatically mount a storage system of your choice, whether from local storage, a public cloud provider such as AWS or GCP, or a network storage system like NFS, iSCSI, etc.
- **Modular**: It enables you to orchestrate computing, networking, and storage infrastructure on behalf of user workloads. This allows the underlying infrastructure to be abstracted away from the application developer.

Example:
```yaml
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
```

```bash
# Command to apply the deployment
kubectl apply -f deployment.yaml
```

Kubernetes not only simplifies application deployment, but also offers robust management of resources, ensuring applications run smoothly and efficiently across the cloud or on-premises environments. This platform has set a new standard in the automation and scalability of containerized applications.