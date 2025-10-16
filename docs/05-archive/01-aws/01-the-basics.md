---
sidebar_position: 1
description: How to set up the AWS CLI.
---

# The Basics

## Prereq
---
- See [Setting up Pulumi](../../03-guides/01-setup-local-environment/05-pulumi.md) to setup Pulumi, and get the details of the cloud environment.
- Ensure you have created an account via AWS IAM within the Pulumi Project

## Install AWS CLI
---
### On macOS (using Homebrew)

```bash
brew install awscli
```

### On Linux

Download and install using the bundled installer:

```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
```

Verify installation:

```bash
aws --version
```

### On Windows

- Download the AWS CLI installer from [AWS CLI for Windows](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).
- Run the downloaded installer and follow the prompts.
- Verify installation:

```powershell
aws --version
```

---

### Configuration

After installation, configure AWS CLI by running:

```bash
aws configure
```

Provide your AWS credentials and default region when prompted.

---

