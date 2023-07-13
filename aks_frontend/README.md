docker build -t edunzz/frontend-app .
<br>
docker push edunzz/frontend-app
<br>
kubectl apply -f app-deployment.yaml
