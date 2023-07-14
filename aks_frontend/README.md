# Docker create image and upload
docker build -t edunzz/kubernetes_lab:frontend-app .
<br>
docker login
<br>
docker push edunzz/kubernetes_lab:frontend-app
<br>
# Up applications and services AKS
kubectl apply -f app-deployment.yaml
<br>
