# Docker create image and upload
docker build -t edunzz/otel_demo:inventario-backend .
<br>
docker login
<br>
docker push edunzz/otel_demo:inventario-backend
<br>
# Up applications and services AKS
kubectl apply -f mysql-deployment.yaml
<br>
kubectl apply -f app-deployment.yaml
<br>
