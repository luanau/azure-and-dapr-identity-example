# Azure/DAPR Identity Example

## Check for helm releases in namespace 'wintellect'

```
helm list --short -n wintellect

example-app-ingress
```

## Uninstall the release

```
helm uninstall example-app-ingress -n wintellect
```

## Check Ingress controller uninstalled

```
kubectl get pod -n wintellect
```

# Installing Ingress Controller from nginx with no additional config file.

```
helm repo add nginx-stable https://helm.nginx.com/stable

"nginx-stable" already exists with the same configuration, skipping

helm install nginx-ingress nginx-stable/nginx-ingress

Error: failed to download "nginx-stable/nginx-ingress" (hint: running `helm repo update` may help)

helm install nginx-ingress nginx-stable/nginx-ingress

W0405 20:07:38.260250   17428 warnings.go:70] networking.k8s.io/v1beta1 IngressClass is deprecated in v1.19+, unavailable in v1.22+; use networking.k8s.io/v1 IngressClassList
W0405 20:07:38.428086   17428 warnings.go:70] networking.k8s.io/v1beta1 IngressClass is deprecated in v1.19+, unavailable in v1.22+; use networking.k8s.io/v1 IngressClassList
NAME: nginx-ingress
LAST DEPLOYED: Mon Apr  5 20:07:38 2021
NAMESPACE: default
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
The NGINX Ingress Controller has been installed.
```
