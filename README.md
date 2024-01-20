## Game Shop Angular Test

📝Requirements:

From the provided template, create a small website with the following features:

- Create a component for stores that includes a name, an image, the store's URL (with direct access in a new tab), and the total number of games. Similar to the profile card shown on https://www.creative-tim.com/product/blk-design-system-angular on their profile page example.

- When clicking on the store component (not on the website link), navigate to a new page that displays information about the selected store and its description.
- On that page, display the list of games available in the store.
- Create a game component that will be shown in a modal after clicking on the corresponding item in the previous list. Display information such as the name, description, one of the associated images (optionally include a carousel if there is more than one photo), the release date, and the rating. For the rating, use the progress element from the template.

## File Structure
Within the download you'll find the following directories and files:

```
app
 ┣ pages
 ┃ ┣ shop-details
 ┃ ┃ ┣ game-modal
 ┃ ┃ ┃ ┣ game-modal.component.html
 ┃ ┃ ┃ ┣ game-modal.component.scss
 ┃ ┃ ┃ ┣ game-modal.component.spec.ts
 ┃ ┃ ┃ ┗ game-modal.component.ts
 ┃ ┃ ┣ shop-details.component.html
 ┃ ┃ ┣ shop-details.component.scss
 ┃ ┃ ┣ shop-details.component.spec.ts
 ┃ ┃ ┗ shop-details.component.ts
 ┃ ┣ shop-list
 ┃ ┃ ┣ shop-card
 ┃ ┃ ┃ ┣ shop-card.component.html
 ┃ ┃ ┃ ┣ shop-card.component.scss
 ┃ ┃ ┃ ┣ shop-card.component.spec.ts
 ┃ ┃ ┃ ┗ shop-card.component.ts
 ┃ ┃ ┣ shop-list.component.html
 ┃ ┃ ┣ shop-list.component.scss
 ┃ ┃ ┣ shop-list.component.spec.ts
 ┃ ┃ ┗ shop-list.component.ts
 ┃ ┗ pages.module.ts
 ┣ shared
 ┃ ┗ spinner
 ┃ ┃ ┣ spinner.component.html
 ┃ ┃ ┣ spinner.component.scss
 ┃ ┃ ┣ spinner.component.spec.ts
 ┃ ┃ ┗ spinner.component.ts
 ┣ app-routing.module.ts
 ┣ app.component.html
 ┣ app.component.scss
 ┣ app.component.spec.ts
 ┣ app.component.ts
 ┗ app.module.ts
 ┃ interfaces
 ┃ ┣ game-details.interfaz.ts
 ┃ ┣ shop-details.interface.ts
 ┃ ┗ shops.interfaces.ts
 ┃ services
 ┃ ┗ shop-data.service.ts

```
## Set up

To test locally:

- Clone the repository
or
- Download zip

```shell
$ npm install
$ npm start

```
