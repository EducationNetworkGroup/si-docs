---
sidebar_position: 3
---

# Setting up Pulumi (si-infrastructure)

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

### Config Passphrase

**You will need the `PULUMI_CONFIG_PASSPHRASE` of the project to be able to use these commands.**

Contact your Project Manager or Team Lead for this value.

### Log into Pulumi

You will need to log-in to pulumi to make changes directly, CI/CD pipelines are able to do this to deploy updates automatically:

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

Config values can then be accessed within the code as follows:
```ts
const config = new pulumi.Config("si-pulumi");
const efsList = config.getObject<string[]>("efsList");
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
