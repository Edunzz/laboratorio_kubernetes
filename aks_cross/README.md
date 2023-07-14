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
export BACKEND_IP=10.10.10.10
<br>
kubectl apply -f compra-deployment.yaml
<br>
kubectl apply -f fecha-deployment.yaml
<br>
sed "s/--BACKEND_IP--/$BACKEND_IP/g" impuesto-deployment.yaml | kubectl apply -f -
<br>
# Delete applications and services AKS
kubectl delete -f compra-deployment.yaml
<br>
kubectl delete -f fecha-deployment.yaml
<br>
kubectl delete -f impuesto-deployment.yaml
