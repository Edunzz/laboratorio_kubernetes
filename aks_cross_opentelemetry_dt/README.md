# Docker create image and upload
docker build -t edunzz/k8s_laboratory:impuesto-cross .
<br>
docker login
<br>
docker push edunzz/k8s_laboratory:impuesto-cross
<br>
<br>
docker build -t edunzz/k8s_laboratory:fecha-cross .
<br>
docker login
<br>
docker push edunzz/k8s_laboratory:fecha-cross
<br>
<br>
docker build -t edunzz/k8s_laboratory:compra-cross .
<br>
docker login
<br>
docker push edunzz/k8s_laboratory:compra-cross
<br>
<br>

# Up applications and services AKS
export BACKEND_IP=10.10.10.10
<br>
sed "s/--BACKEND_IP--/$BACKEND_IP/g" impuesto-deployment.yaml | kubectl apply -f -
<br>
kubectl apply -f fecha-deployment.yaml
<br>
kubectl apply -f compra-deployment.yaml
<br>
# Delete applications and services AKS
kubectl delete -f impuesto-deployment.yaml
<br>
kubectl delete -f fecha-deployment.yaml
<br>
kubectl delete -f compra-deployment.yaml
<br>
