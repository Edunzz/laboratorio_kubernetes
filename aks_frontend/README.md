# Docker create image and upload
docker build -t edunzz/k8s_laboratory:frontend .
<br>
docker login
<br>
docker push edunzz/k8s_laboratory:frontend
<br>
# Up applications and services AKS
export BACKEND_IP=10.10.10.10
<br>
export CROSS_COMPRA_IP=10.10.10.10
<br>
sed "s/--BACKEND_IP--/$BACKEND_IP/g; s/--CROSS_COMPRA_IP--/$CROSS_COMPRA_IP/g" app-deployment.yaml | kubectl apply -f -
<br>
