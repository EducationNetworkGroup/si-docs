---
sidebar_position: 3
description: Local deployment for the si-infrastructure repository.
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

You will need to log-in to pulumi to make changes directly, CI/CD pipelines are able to do this to deploy updates automatically. Since the migration to GCP, the Pulumi state backend is a Cloud Storage bucket rather than S3:

```bash
pulumi login 'gs://si-iac-state'
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

### Version Tags Matter

Pulumi only picks up a new Docker image on `pulumi up` if the corresponding version tag in the stack config has also changed — pushing a commit to `main` without bumping the tag will be silently ignored, and the previous image keeps running. See [si-infrastructure: Deployment Approval Bottleneck](06-si-infrastructure.md#deployment-approval-bottleneck) for the current (manual, approval-gated) workflow this requires.

---
