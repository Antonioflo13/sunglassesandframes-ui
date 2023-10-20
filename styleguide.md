### Style Guide

- **Model**: contains methods like fromModelEntity that parse a given structure to a Model that can be rendered
- **Theme**: contains objects representing important colors for each theme (dark | light)
- **Entities**: contains interfaces representing raw API responses
- **Hook**: contains one or more React Hook for the matter described by the name
- **StyleHook**: contains a React Hook that retrieves style objects for component to use
- **SCSS files**: use them in case pseudoselectors are needed

### Naming Convention

| Type         | File Name             | Object Name           |
| :----------- | :-------------------- | :-------------------- |
| Components   | CamelCase             | CamelCase             |
| Enums        | kebab-case            | CamelCase             |
| Models       | kebab-case"-model"    | CamelCase"Model"      |
| Entities     | kebab-case"-entity"   | CamelCase"Entity"     |
| Hooks        | "use"CamelCase        | "use"CamelCase        |
| StyleHook    | "use"CamelCase"Style" | "use"CamelCase"Style" |
| Theme Colors | kebab-case-"theme"    | CamelCase"Theme"      |
