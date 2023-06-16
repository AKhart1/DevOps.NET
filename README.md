# **_Features_**

This project is a `.NET 6` with `Angular` application that contains several components for interacting with NASA APIs and performing various operations related to prime numbers. The project includes the following components:

## Prime Numbers
This component includes the implementation of the following methods:
- `generatePrimeNumbers()`: This method generates a list of prime numbers.
- `isPrime()`: This method checks whether a given number is prime or not.
- `getRandomColor()`: This method return a random color.
The generated prime numbers are displayed in an HTML page with CSS styling after every click, starting from 2. Each displayed numbers have a random color. 

## NASA picture
This component interacts with NASA's API to fetch the picture of the day. It includes the following method:
- `getPictureofTheDay()`: This method sends an HTTP GET request to the NASA API with token and store the data recieved.
NASA Picture page display NASA Astronomy Picture of the Day in the center with the title underneath.

## NASA Asteroids
This component interacts with the .NET API to retrieve data about nearest asteroids to Earth and displays it in table format. It displays the asteroid data in a table format and provides the ability to sort the table *by clicking on the column headers*. Additionally, it includes different queries that can be set up using buttons to filter the asteroid data based on specific criteria.

Using the .NET `controller` `AsteroidController` sends an HTTP GET request to the NASA server to get data about asteroids for the last two days (`start date`: the day before today, `end date`: today) 

Component includes the implementation of different quieries for manipulatin and displaying the asteroids data such as:
- `fetchAsteroidData()`: method to make HTTP GET request to the `api/Asteroid` endpoint using HttpClient service and storing this data in `asteroids` array
- `sortBy()`: to sort data by any column 
- `getNearestAsteroid()`: to display nearest asteroid to Earth 
- `addAsteroid()`: to add new entry
- `editAsteroid()`: to change existing entry
- `deleteAsteroid()`: to delete one entry

### Unit Tests:
The prime numbers component includes unit tests to validate the correctness of the implemented methods. The unit tests cover different scenarios and edge cases to ensure the accuracy of the prime number generation, primality check, and color generation.
To run the unit tests:
1. Navigate to the project directory: `cd <project-directory>`
2. Run the unit tests:
- Run `ng test --exclude='**/!(prime-numbers.component.spec).ts'` to execute the unit tests. The tests will be executed in a headless browser environment by default.

### Installation
To run the project locally, follow these steps:
1. Clone the repository
2. Set up the development environment:
- Install `.NET 6 SDK`
- Install `Node.js` and `npm`
3. Configure the project:
- Navigate to the project directory: `cd <project-directory>`
- Restore the .NET packages:  Run `dotnet restore` to restore the required NuGet packages.
- Install Angular dependencies: Run `npm install` to install the necessary npm packages for the Angular app.

### Configuration

Before running the project, you need to configure the following:
- NASA API :key: : Obtain an API key from NASA's API website. Set the API key in the appropriate configuration file or environment variables.

### Usage 
Once the application is up and running, you can access the different components through the following routes(*or by clicking on nav-menu*):
- Prime Numbers Component: `/prime-numbers`
- NASA Picture Component: `/nasa-picture`
- NASA Asteroids Component: `/nasa-asteroids`

## Contact
If you have any questions, suggestions, or feedback, please feel free to contact the project maintainers at kahrtaniukalex@gmail.com. :email: