# Docker create image and upload
docker build -t edunzz/otel_demo:compra-cross .
<br>
docker login
<br>
docker push edunzz/otel_demo:compra-cross
<br>
<br>
docker build -t edunzz/otel_demo:fecha-cross .
<br>
docker login
<br>
docker push edunzz/otel_demo:fecha-cross
<br>
<br>
docker build -t edunzz/otel_demo:impuesto-cross .
<br>
docker login
<br>
docker push edunzz/otel_demo:impuesto-cross
<br>
# Up applications and services AKS
kubectl apply -f compra-deployment.yaml
<br>
kubectl apply -f fecha-deployment.yaml
<br>
kubectl apply -f impuesto-deployment.yaml
<br>
