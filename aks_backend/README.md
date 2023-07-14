# Docker create image and upload
docker build -t edunzz/kubernetes_lab:inventario-backend .
<br>
docker login
<br>
docker push edunzz/kubernetes_lab:inventario-backend
<br>
# Up applications and services AKS
kubectl apply -f mysql-deployment.yaml
<br>
kubectl apply -f app-deployment.yaml
<br>
