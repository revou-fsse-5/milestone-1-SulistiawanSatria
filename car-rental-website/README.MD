# Car Rental Website Project

## Features

**Home Section**: Introduction to the car rental service with a hero image.
**Profile Section**: Information about the company.
**Vehicles Section**: Display of available vehicles with images and details.
**Booking Section**: Form to book a car.
**Responsive Design**: Adapts to different screen sizes (desktop, tablet, mobile).

## Technologies Used

**HTML**: For structuring the content.
**CSS**: For styling and responsive design.
**JavaScript**: For interactive elements.

## File Structure

The project consists of the following files:
`index.html`: The main HTML file that contains the structure of the website.
`style.css`: The CSS file that contains the styles for the website.
`script.js`: The JavaScript file that contains the interactive elements for the website

## Sections

### Home Section

The Home section includes:
A hero image that represents the car rental service.
A title and a call-to-action button.

### Profile Section

The Profile section includes:
A brief introduction about the car rental service.

### Vehicles Section

The Vehicles section includes:
A grid display of available vehicles with images, details, and pricing.
Icons to mark favorite vehicles.

### Booking Section

The Booking section includes:
A form for booking a car with fields for name, email, pickup location, dropoff location, car selection, and dates.

## Responsive Design

Media queries are used to make the website responsive across different devices:
**Tablet (max-width: 768px)**: Adjustments for layout and font sizes.
**Mobile (max-width: 480px)**: Adjustments for layout and font sizes.

### Example Media Queris

```css

 /* Media Query for Tablet */ 

@media (max-width: 768px) {
    .container {
        width: 90%;
    }

    .navbar-nav {
        flex-direction: column;
        align-items: center;
    }

    .navbar-nav li {
        margin: 10px 0;
    }

    .vehicle-item {
        width: calc(50% - 2rem);
    }

    .booking-section form,
    .booking-section table {
        width: 100%;
    }

    .booking-section input,
    .booking-section select,
    .booking-section button {
        font-size: 0.9rem;
    }
}

 /* Media Query for Mobile */ 

@media (max-width: 480px) {
    .container {
        width: 95%;
    }

    .navbar-nav {
        flex-direction: column;
        align-items: center;
    }

    .navbar-nav li {
        margin: 10px 0;
    }

    .vehicle-item {
        width: calc(100% - 2rem);
    }

    .booking-section form,
    .booking-section table {
        width: 100%;
    }

    .booking-section input,
    .booking-section select,
    .booking-section button {
        font-size: 0.8rem;
    }
}

