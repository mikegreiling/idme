# ID.me test project

## Setup

1. Install deps and run vite

```
npm install
npm run dev
```

2. Visit `localhost:5173` in your browser of choice
3. Profit!

## Notes

Decisions I've made while implementing this test project:

- I've decided to handle the responsive layout transformation entirely in CSS rather than creating two components and selectively hiding them. It's a fun challenge, and I get to flex some CSS "grid" tricks to handle the mobile "card" layout. In a real world implementation, depending on the project requirements, this may not be an ideal way to go for maintainability.

- I've imported SCSS directly in components, in a global context, without any proper scoping. This was a quick and dirty implementation, and normally I'd like to avoid global scoped CSS classes when possible. My style library of choice has been Tailwind lately, which solves for this quite well, but I recognize this is not something that ID.me has adopted and wanted to show that I can write traditional semantic CSS just as well.

- I've presumed that the JSON provided in the test description was to be treated as an API endpoint, so I have implemented it as such. I'm using a basic `fetch` with TanStack's versitile `useQuery` hook to pull in the data, then I'm doing a basic schema validation with `zod` to achieve **proper type safety** within the custom component (and all of those autocomplete nicities).

- I've mostly stuck to the figma design verbatim, but there are certainly changes I'd advocate for in collaboration with the designer, including right-aligning the "Price" column, defining the color scheme for the categories, and adjusting some of the margins between elements to be more consistant.

### Things I'd do if I had more time

- I'd re-organize the source tree a bit better
- I'd add some proper unit tests beyond zod schema validation and type definitions
- I'd paginate the projects table
- I'd add better overflow handling to the table view
- I'd add Storybook and playwright for visual regression testing and integration testing
