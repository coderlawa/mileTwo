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



I used mt-1 to space the top of "Book Your Flight Here" & m-3

I had an issue with the radio buttons on the flight checking form. The Flight Type and the Flight Grade classed because they we all shared the same NAME - changing names of elements to fit their group solves this problem.

The "Find Flights" button is intentionally longer than the "Clear All" button to draw attention to its importance.

I styled the placeholder on the flight form using "input::placeholder" to target the element.

I used large / larger font-size for both the navbar & btn to add more motion to the site

[Autocomplete Form](https://developers.google.com/maps/documentation/javascript/legacy/supported_types#table3)

[Geocoder](https://developers.google.com/maps/documentation/geocoding/overview)

[Infinite Scroller](https://www.youtube.com/watch?v=KD1Yo8a_Qis)

[Youtube Search](https://www.youtube.com/results?search_query=infinite+horizontal+images+scroll+html+css)