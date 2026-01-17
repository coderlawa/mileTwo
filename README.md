# MOVEMENTIN - Flights Finding Service

This website has been built to accomodate most visitors needs, regardless of the device used to access it - this means it is robustly responsive.

![Coderlawa on different devices](assets/images/devices.webp)

[View MOVEMENTIN on Github](https://coderlawa.github.io/mileTwo/)

![Project Submission](https://img.shields.io/badge/Submitted-November%202025-orange)
![GitHub contributors](https://img.shields.io/badge/Contributors-1-green)
![GitHub languages](https://img.shields.io/badge/Languages-3-blue)
![HTML validation](https://img.shields.io/badge/w3%20HTML-validated-yellow)
![CSS validation](https://img.shields.io/badge/w3%20CSS-validated-aqua)

## TABLE OF CONTENT

* [User Experience (UX)](#user-experience-ux)
    * [Initial Discussion](#initial-discussion)
    * [User Stories](#user-stories)

* [Design](#design)
    * [Color Scheme](#color-scheme)
    * [Typography](#typography)
    * [Imagery](#imagery)
    * [Wireframes](#wireframes)
        * [Home Page](#home-page)
        * [Profile](#profile)
        * [Portfolio](#portfolio)
        * [Contact Us](#contact)
    * [Features & Goals Solved](#features)
    * [Accessibility](#accessibility)

* [Technologies Used](#technology-used)
    * [Languages Used](#languages-used)
    * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)

* [Doployment & Local Development](#deployment--local-development)
    * [Deployment](#deployment)
    * [Local Development](#local-development)
        * [How to Clone](#how-to-clone)

* [Testing](#testing)
    * [W3 Validators](#w3-validators)
    * [Solved Bugs](#solved-bugs)
    * [Known Bugs](#known-bugs)
    * [Lighthouse](#lighthouse)
    * [JSHint](#jshint)

* [Credits](#credits)

* [Conclusion](#conclusion)

* [Acknowledgement](#acknowledgement)
- - -

## User Experience (UX)

### Initial Discussion

MOVEMENTIN is a web service for finding airline tickets and holiday bundles based on a site user's desired destination, we also educate travellers about famous facts around their destination.

#### Key Info About The Site

* Real time flights search
* An interactive map for choosing destination
* Holiday bundles discovery
* A contact box for dropping messages
* Social links for further contact
* Brief information about the site's services
* Image of scenic locations scrolling continuously
* 

### User Stories

#### Client Goals

* 

#### Site Visitor Goals

* 

#### Frequent & Returning Visitor Goals

* Account creation is a future development opportunity for Movementin.

---

## Design

### Color Scheme

![MOVEMENTIN websit color palette](assets/images/colors.png)

This website uses a palette of extremely contrasting colors for the purpose of keeping site users visually stimulated. This color scheme was sourced from [Coolors](https://coolors.co/).

### Typography

[Google Fonts](https://fonts.google.com/) has been used exclusively for all the words presented on this website. See fonts used listed below;

* Primary Font - [Rubik](https://fonts.google.com/specimen/Rubik)
* Secondary Font - [Ubuntu](https://fonts.google.com/specimen/Ubuntu)

Both fonts are backed-up by sans-serif.

### Imagery

The images on this website were sourced from [Pexels](https://www.pexels.com/) - a royalty free stock photos and videos web service.

### Wireframes

Wireframes were created for Mobile & Tablet/Desktop.

#### Home Page
* Mobile Home Page
![Home Page - mobile](assets/images/Home(sm).webp)
* Tablet / Desktop Home Page
![Home Page - tablet / desktop](assets/images/Home(big).webp)

#### Information Page
* Mobile Information Page
![Information Page - mobile](assets/images/Information(sm).webp)
* Tablet / Desktop Information Page
![Information Page - tablet / desktop](assets/images/Infomation(big).webp)

### Features

This website is made up of one main page and an information page. Both pages are divided into 3 sections in the following ways;

* INDEX PAGE: Flight Booking Form, Interactive Map & Deals sections.
    * Booking Section I.D. -
    This section contains the booking form needed by site visitors to find flights. The form allows users input their flight type (i.e. one-way / round trip), departure point, departure date, return date (if applicable), destination point, flight grade (i.e. economy, premium or first class) and number of passengers.

    This section covers [Site Visitors Goal](#site-visitor-goals).

    ![Booking Section](assets/images/booking-form.webp)

    * Map Section I.D. -
    This is the section of the site where users can visualize their locations. The map has been created using the same foundation as [Google Maps](https://google.com/maps) and is highly interactive with the booking form (above) while maintaining its native features. 

    ![Map Section](assets/images/interactive-map.webp)

    * Deals I.D. -
    In this section, site visitors can find holiday packages for varying locations (including their desired location). These deals are not customizable to suit individual requirements.

    ![Deals](assets/images/deals.webp)

* INFO PAGE: About Us, Infinite Scrolling Images & Contact Us Form.
    * About I.D. - 
    This section provides visitors with a brief overview of what MOVEMENTIN is about and touches on the business' mission.

    ![About Us Section](assets/images/about-us.webp)

    * Infinite Scrolling Images -
    This section of the info page contains scenic images that should fill site visitors heads with locations for their next holiday destination. The collection of images have made to look like they never end, thus creating the illusion of an infinite scroll. 

    ![Infinity Scroll Section](assets/images/infinite-scroll.webp)

    * Contact I.D. -
    This is a form designed to give site visitors the ability to send a message to the dev. The form contains fields for full name, phone number, email, message & a submit button. A bounce animation has been added to the paper-plane icon attached to this label to draw the attention of visitors.

    ![Contact Us Section](assets/images/contact-form.webp)

* Footer (on all pages)
    * Footer ID - 
    Contains icons connected to the following professional social platforms; Facebook, Instagram, Pinterest & X. It also contains footer text for copyright.

* Back-To-Top button (located at the BOTTOM RIGHT) for helping site visitors get back to the top of the page without needing to scroll back up. The bounce animation has been added to the icon attached to this heading to draw the attention of visitors. This feature is only appears after visitors begin scrolling down the page.

This feature has been replicated from my [Milestone One](https://coderlawa.github.io/milestoneOne/)

* JavaScrpts -
    * Bootstrap script for bootstrap codes implemented into entire code body.
    * Font Awesome script for font awesome icons used in project.
    * Auto-close site menu after site user has selected an option from the navigation.
    * Back-to-top script for back-to-top button.

### Accessibility

I have adopted the best practices available for making websites usable to individuals who depend on screen-readers by making this project as accessible as possible by;

* Used semantic HTML.
* Used descriptive "alt" attributes on images.
* Ensured sufficient color contrast throughout the site.
* Added animated icons to attract the attention of users.

- - -

## Technology Used

### Languages Used

HTML, CSS & Javascript have been used to create this website and its features.

### Frameworks, Libraries & Programs Used

[Am I Responsive?](https://ui.dev/amiresponsive) - for viewing website across different screen sizes at the same time.

[Bootstrap (v5.3)](https://getbootstrap.com/) - codes for the navbar, tabs, cards and general site designing. More designing was done in the style.css file.

[Birme](https://www.birme.net/) - for converting images to .webp format.

[Balsamiq](https://balsamiq.com/) - used to create wireframes.

[Favicon](https://favicon.io/) - used for this site's favicon.

[Font Awesome](https://fontawesome.com/i) - used for all icons & their animations on the site.

Git - for version control.

[GitHub](https://github.com/) - for saving & storage of files for the website.

Google Dev Tools - used to troubleshoot & test features (including responsiveness & styles).

[Google Fonts](https://fonts.google.com/) - used for all literature on this website.

[Shields](https://shields.io/badges) - for making badges added to this README.md file.

[SerpAPI](https://serpapi.com/) - used this to scrape the web for flights

- - -

## Deployment & Local Development

### Deployment

GitHub pages was used to deploy the live website. Steps followed are listed below:

1. Log in / Sign up for [GitHub](https://github.com/)
2. Selected the repository - mileTwo.
3. Clicked the Settings tab (from the top row).
4. Clicked the Pages option (on the left panel).
5. In the "Build and deployment" sub-heading, ONLY change the drop-down options under "Branch". Select "main" in the first drop-down & "root" in the second drop-down.
6. Click "Save" & the live GitHub site should provide a link to your project.

## Local Development

### How to Clone

To clone this site, do the following;

1. Log in / Sign up for [GitHub](https://github.com/)
2. Select the repository - mileTwo.
3. Click on the arrow beside the code button. Depending on your preference, select the correct tab option from either HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open your IDE and follow the instructions provided to clone a project.

- - -

## Testing

The following bugs were raised by my mentor during a milestone catch-up;

* 

The Contact Form would pop-up whenever the submit button was clicked even though the required form fields were empty.

I had an issue with the radio buttons on the flight checking form. The Flight Type and the Flight Grade classed because they we all shared the same NAME - changing names of elements to fit their group solves this problem.

The "Find Flights" button is intentionally longer than the "Clear All" button to draw attention to its importance.

I styled the placeholder on the flight form using "input::placeholder" to target the element.

I used large / larger font-size for both the navbar & btn to add more motion to the site

[Autocomplete Form](https://developers.google.com/maps/documentation/javascript/legacy/supported_types#table3)

[Geocoder](https://developers.google.com/maps/documentation/geocoding/overview)

[Infinite Scroller](https://www.youtube.com/watch?v=KD1Yo8a_Qis)

[Youtube Search](https://www.youtube.com/results?search_query=infinite+horizontal+images+scroll+html+css)