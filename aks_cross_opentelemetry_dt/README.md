# Docker create image and upload
docker build -t edunzz/k8s_laboratory:impuesto-cross-opentelemetry .
<br>
docker login
<br>
docker push edunzz/k8s_laboratory:impuesto-cross-opentelemetry
<br>
<br>
docker build -t edunzz/k8s_laboratory:fecha-cross-opentelemetry .
<br>
docker login
<br>
docker push edunzz/k8s_laboratory:fecha-cross-opentelemetry
<br>
<br>
docker build -t edunzz/k8s_laboratory:compra-cross-opentelemetry .
<br>
docker login
<br>
docker push edunzz/k8s_laboratory:compra-cross-opentelemetry
<br>
<br>

# Up applications and services AKS
export BACKEND_IP=10.10.10.10
<br>
export DT_TENANT=XXXX.dynatrace.com
<br>
export DT_TOKEN=dtxxxx.xxxxxxx
<br>
sed "s/--BACKEND_IP--/$BACKEND_IP/g; s/--DT_TENANT--/$DT_TENANT/g; s/--DT_TOKEN--/$DT_TOKEN/g" impuesto-deployment.yaml | kubectl apply -f -
<br>
sed "s/--DT_TENANT--/$DT_TENANT/g; s/--DT_TOKEN--/$DT_TOKEN/g" fecha-deployment.yaml | kubectl apply -f -
<br>
sed "s/--DT_TENANT--/$DT_TENANT/g; s/--DT_TOKEN--/$DT_TOKEN/g" compra-deployment.yaml | kubectl apply -f -
<br>
# Delete applications and services AKS
kubectl delete -f impuesto-deployment.yaml
<br>
kubectl delete -f fecha-deployment.yaml
<br>
kubectl delete -f compra-deployment.yaml
<br>
