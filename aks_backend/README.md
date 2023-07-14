# Docker create image and upload
docker build -t edunzz/node-app:1.0 .
<br>
docker login
<br>
docker push edunzz/node-app:1.0
<br>
# Up applications and services AKS
<br>
kubectl apply -f mysql-deployment.yaml
<br>
kubectl apply -f app-deployment.yaml
<br>
