---
sidebar_position: 1
---

# The Basics
## Install `kubectl` 

This guide provides detailed steps for downloading and installing both the Kubernetes CLI tool (`kubectl`) and the AWS CLI.

### On macOS (using Homebrew)

```bash
brew install kubectl
```

### On Linux

Download the latest release using `curl`:

```bash
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
```

Make the binary executable:

```bash
chmod +x kubectl
```

Move the binary to a directory in your `PATH`:

```bash
sudo mv kubectl /usr/local/bin/
```

Verify installation:

```bash
kubectl version --client
```

### On Windows

Download the latest stable release from:
- [kubectl release page](https://kubernetes.io/docs/tasks/tools/#kubectl)

Then:
- Add the binary to your `PATH` environment variable.
- Restart your terminal or Command Prompt.
- Verify with:

```powershell
kubectl version --client
```

---

You are now ready to use both `kubectl` and AWS CLI to view the kubernetes cluster!

## Get kubeconfig
To give `kubectl` access to the cluster, you should use `aws eks update-kubeconfig` with the details of the cluster- which can be obtained from getting the output / config from Pulumi in [si-infrastructure](https://github.com/EducationNetworkGroup/si-infrastructure/).

Below is a helpful script that can be used to do this:

```bash title='aws-getkubeconfig.sh'
STACK=${STACK:='prod'}
clusterName=$(pulumi stack output clusterName --stack $STACK)
region=$(pulumi config get aws-region --stack $STACK)

aws eks update-kubeconfig --name $clusterName --region $region
```


