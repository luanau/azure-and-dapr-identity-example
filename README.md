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
