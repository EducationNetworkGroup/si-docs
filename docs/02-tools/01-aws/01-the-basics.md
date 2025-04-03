---
sidebar_position: 1
---

# The Basics
---
## Pulumi (Infrastructure as Code)

Pulumi lets you define reusable building blocks known as "component resources." These are like your typical cloud resources but bundled with additional logic. If you are familiar with Terraform, these would be your modules.

### Install
#### macOS (using Homebrew)

```bash
brew install pulumi
```

#### Linux

Use the install script:

```bash
curl -fsSL https://get.pulumi.com | sh
```

Then add Pulumi to your PATH (add this to your `.bashrc` or `.zshrc`):

```bash
export PATH="$PATH:$HOME/.pulumi/bin"
```

Reload your terminal:

```bash
source ~/.bashrc
# or
source ~/.zshrc
```

#### Windows

Download and install Pulumi from the [official installer](https://www.pulumi.com/docs/get-started/install/#windows).

---

### Log into Pulumi

Log in to your Pulumi account (either Pulumi Cloud or self-hosted backend):

```bash
pulumi login
```

For self-hosted backend:

```bash
pulumi login s3://si-iac-state/si-pulumi/

# IAM module
pulumi login s3://si-iac-state/si-iam/
```

---

### Initialize Existing Project

Navigate to your existing Pulumi project directory and initialize:

```bash
cd si-infrastructure
pulumi stack select prod
```

If the stack does not exist yet, create it:

```bash
pulumi stack init <your-stack-name>
```

---

### Configure Your Stack

Get & Set necessary configuration values (example):

```bash title='Can be found in Pulumi.<stack>.yaml'
pulumi config get aws-region
pulumi config set someKey someValue --secret
```

---

### Additional Commands

- View stack status:

```bash
pulumi stack
```

- View outputs:

```bash
pulumi stack output
```

- Tear down stack resources:

```bash
pulumi destroy
```

---

You're now set up to manage your infrastructure using Pulumi!


---
## Install AWS CLI

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

