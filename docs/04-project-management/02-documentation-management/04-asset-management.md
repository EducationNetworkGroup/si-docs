---
sidebar_position: 4
description: Guidelines for managing images, diagrams, and other assets.
---

# Asset Management

## Game Asset Stogae
All game assets are stored in a dedicate Google Cloud Storage bucket seperate from our code repository.

- **Base URL:** `http://storage.googleapis.com/science-island-gamedata/`

## Image Guidelines
- **Location:** Store in `/static/img/` directory with appropriate subfolders
- **Naming Convention:** Use kebab-case: `database-schema-v2.png`
- **File Formats:** 
  - PNG for diagrams and screenshots
  - JPEG for photographs
  - SVG for logos and icons
- **Size Optimization:** Compress images before committing (aim for `<500KB`)
- **Alt Text:** Always include descriptive alt text for accessibility
- **Dimensions:** Resize images to appropriate display size

## Diagram Standards
- **Tools:** Use Draw.io, Lucidchart, or Mermaid.js for consistency
- **Styling:** Maintain consistent color schemes and fonts
- **Version Control:** Include source files when possible (`.drawio`, `.mmd`)
- **Accessibility:** Ensure sufficient color contrast and readable text
- **Annotations:** Label important parts clearly

## Best Practices
- **Regular Cleanup:** Removed unused assets quarterly
- **Naming Convention:** See [Naming Convention](../01-coding-conventions/07-naming-conventions.md)for more details.
- **Backup:** Important assets should be stored in version control
- **Licensing:** ensure proper rights for all visual assets
