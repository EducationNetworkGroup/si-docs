---
sidebar_position: 1
---

# The Basics

This documentation website was made using [Docusaurus](https://docusaurus.io/docs), which relies on React and Markdown. This category provides an overview of how to contribute to the documentation and maintain the website.

---

## Directory Structure

```bash
| docs                          # Markdown documentation organized by sections
| ├── 01-overview.md            # High-level intro to the documentation or project
| ├── 02-tools/                 # Documentation for tools used in the project
| │   ├── _category_.json       # Sidebar config: label + order for the 'tools' section
| │   └── [tool].md             # Tool-specific documentation
| ├── 03-guides/                # How-to guides and tutorials
| │   ├── _category_.json       # Sidebar config: label + order for the 'guides' section
| │   └── [guide].md            # Guide-specific documentation
|
| projects/                     # Project-specific docs or assets
| └── [project folders]         # Content related to individual projects (optional)
|
| src/                          # React components or custom pages
| static/                       # Static assets (e.g., images, PDFs, favicons)
| docusaurus.config.ts          # Main config file (site name, theme, navbar, plugins)
| sidebars.ts                   # Controls sidebar structure (if not using `_category_.json`)
```

### Documentation

Markdown documents can be added to the `docs` of `projects` folders to the website to contribute to the documentation. Each folder serves a distinct purpose:

- **docs:** Is where technical documentation relating to tools and guides is stored.
- **projects**: Is where teams working on Science Island provide an overview of the work they have contributed, and any important hand-over notes that will assist the next team.

docs is then further subdivided into `tools` and `guides`:

- **tools:** Is where the team is able to provide knowledge on the specific tools and services used within Science Island. This section is intended to share knowledge to significant reduce upskilling efforts.
- **guides:** Contains documentation specific to Science Island, such as architectures, design choices, and steps for setting up local instances. This section is intended to ensure knowledge persists between project teams, significantly reducing onboarding efforts.

---

## Run Locally

Install Dependencies

``` bash
npm install
```

Run Locally

``` bash
npm start
```

Docs will then be available locally at [http://localhost:3000/si-docs/](http://localhost:3000/si-docs/)

---

## How Markdown is Interpreted by Docusaurus

Docusaurus will automatically add any markdown files added to the `docs` of `projects` folders to the website. The [Official Docusaurus Docs](https://docusaurus.io/docs/markdown-features) provide a good overview of how the MDX compiler interprets markdown files and React components.

For now, it is enough to emphasize only the key markdown features that are relevant to this project:

### Headings

Heading levels are determined by prepending hashtags ( # ) to the beginning of a line.

- \# `h1`: Use this as the first line in the document (after the meta information). The h1 element is the name of the file that will appear in the sidebar.
- \## `h2`: The title of any section within the document. This will appear as a main heading in the navigation list to the right of the document.
- \### `h3`: A subtitle within a section. This will appear as a sub-heading in the navigation list.

### Code Snippets

Add code snippets by surrounding text with three backticks, and the language name after the initial backticks. For instance:

````
```python
print("Wonderful Design")
```
````

Will render as

```python
print("Wonderful Design")
```

---

## Meta Information

### Markdown Files

Meta information is placed in the front matter of each markdown file.

There are a optional things that we elect not to include here since Docusaurus automatically interprets them from other features, such as title, slug, keywords, etc. For our purposes, then the only meta-information we need to include in a markdown file is `sidebar-position`. This determines the relative position that the file appears in within the category or subcategory.

Surround the meta information with `---`. For instance:

```
---
sidebar_position: 1
---
```

### Category Folders

Meta information for a category folder is placed within a `_category_.json` file in that folder. The file should contain the following information:

```json
{
    "label": "Setup Local Environment",   // Title of the category in the sidebar.
    "position": 1,                        // Position of the category within it's folder.
    "link": {
        "type": "generated-index",        // Allows Docusaurus to auto-generate the path and link for routing.
        "description": "Steps to create a local developer environment of Science Island" // Description.
    }
}
```

> Note that folders and files compete for sidebar position via `position` and `sidebar_position` accordingly.

> Also note that folders / files are named with a number in the codebase (E.g., `01-science-island-website.md`). This is so the order can easily be determined when maintaining docs. The number should match the position / sidebar_position in the folder / file, but it is up to the developer to enforce this.

---

## Edit Docs

The `.github\workflows\deploy.yml` outlines how any changes pushed to `main` will result in the project being rebuilt and deployed. This means that the update the docs, you simply need to commit and change to the main branch.

Since all documents are written in markdown, they are very easy to update. Simply click the `edit this page` link in the bottom left of the relevant document, and you will be redirected to the file in the GitHub Web Browser where you can edit and commit document.

For more substantial changes, it is best to branch and have a team member review your pull request for accuracy, readability, and styling consistency first.

---

## Create Docs

You can create a page by simply adding a markdown file to the relevant category folder. Similarly, you can create a category by simply adding a folder containing a `_category_.json` file within a parent folder. Docusaurus will automatically integrate your additions to the project.

Be sure to follow the [Meta Information](#meta-information) guidelines listed above when creating documents.
