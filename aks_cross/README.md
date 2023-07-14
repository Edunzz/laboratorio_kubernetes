# Docker create image and upload
docker build -t edunzz/otel_demo:inventario-app .
<br>
docker login
<br>
docker push edunzz/otel_demo:inventario-app
<br>
docker build -t edunzz/otel_demo:inventario-app .
<br>
docker login
<br>
docker push edunzz/otel_demo:inventario-app
<br>
docker build -t edunzz/otel_demo:inventario-app .
<br>
docker login
<br>
docker push edunzz/otel_demo:inventario-app
<br>
# Up applications and services AKS
kubectl apply -f compra-deployment.yaml
<br>
kubectl apply -f fecha-deployment.yaml
<br>
kubectl apply -f impuesto-deployment.yaml
<br>
