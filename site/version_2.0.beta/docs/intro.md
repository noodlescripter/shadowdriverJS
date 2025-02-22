---
sidebar_position: 1
---
# ShadowdriverJS Installation

### Prerequisite
	- Before installing shadowdriverJS make you have install NodeJS (Version 18.x or higer)

	- npm (which comes with NodeJS obiously)

### Verify The Node Version

#node-version

```shell
node -v
```

#npm-version

```shell
npm --version
```

### Install **ShadowdriverJS init** 
Install ShadowdriverJS globally to use its initialization tool across your system:

```shell
npm install shadowdriverjs-init@latest -g
```

### Create shadowdriverJS project using below command
To initialize a new project, use the following command:

```bash
npx shadowdriver-init
```

This command will create a new project folder, generate configuration files, and install all necessary dependencies.

### Example Workflow
- Install the initialization tool globally:
  ```shell
  npm install shadowdriverjs-init -g
  ```

- Navigate to your desired directory and initialize a project:
  ```shell
  npx shadowdriverjs-init
  ```
- Confirm installation
  ```shell
  shadowdriverjs-init
  ```