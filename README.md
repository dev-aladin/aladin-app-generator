# Aladin App

## Installation

1. If not already installed, install [Node.js](https://nodejs.org/) v10 or higher _(minimum required version is Node.js v8)_.

2. Create a new directory and `cd` into it:

    ```bash
    mkdir hello-aladin
    cd hello-aladin
    ```
    
3. Generate a Aladin app, you can specify the framework.

    | Framework | Use this command to install |
    |------------------|-----------------------------|
    | Plain Javascript | `npx generator-aladin --plain` |
    | React | `npx generator-aladin --react` |
    | Vue | `npx generator-aladin --vue` |

    For additional options run `npx generator-aladin --help`.

    > Alternatively, global package installation can be used. Try this if running into problems:
    > ```
    > npm install -g yo generator-aladin
    > yo aladin
    > ```

4. Start the development server:

    ```bash
    npm run start
    ```


## Testing the generated app

The single tests works for all generators:


```bash
npm run test
```


## Testing the generator project

Within the repo directory, run `npm run test`. This command will generate the variants of Aladin     apps 
in folders called `.app-gen-test`, `.webpack-gen-test`, `.react-gen-test`, and `.vue-gen-test`. The test asserts 
that all expected files were actually created. It also runs the `npm run test` command within each app. For the
React, Webpack, and Vue generators, `npm run test` currently builds the app, but that command can be
changed. (For a React app, the typical test command is `react-scripts test`.)
