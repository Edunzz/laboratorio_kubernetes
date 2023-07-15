# Docker create image and upload
docker build -t edunzz/k8s_laboratory:inventario-backend .
<br>
docker login
<br>
docker push edunzz/k8s_laboratory:inventario-backend
<br>
# Up applications and services AKS
kubectl apply -f mysql-deployment.yaml
<br>
kubectl apply -f app-deployment.yaml
<br>
