# Docker create image and upload
docker build -t edunzz/otel_demo:frontend-app .
<br>
docker login
<br>
docker push edunzz/otel_demo:frontend-app
<br>
# Up applications and services AKS
kubectl apply -f app-deployment.yaml
<br>
