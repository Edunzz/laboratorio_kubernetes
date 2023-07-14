# Docker create image and upload
docker build -t edunzz/otel_demo:inventario-app .
<br>
docker login
<br>
docker push edunzz/otel_demo:inventario-app
<br>
# Up applications and services AKS
<br>
kubectl apply -f mysql-deployment.yaml
<br>
kubectl apply -f app-deployment.yaml
<br>
