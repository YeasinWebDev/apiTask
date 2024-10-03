# User Borad

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/user-board.git
   cd user-board

2. **Install Dependencies:**:
   ```bash
   npm install

3. **Start the Development Server:**
   ```bash 
   npm start 



4. Visit the Application: Open your browser and go to http://localhost:3000 to see the User Board in action.


    ## Brief Explanation of Your Approach
    The UserBoard component is designed to display a list of users fetched from the JSONPlaceholder API 
    
   1) User Fetching: Users are fetched from the API when the component mounts.

   2)  Form Handling: A form is provided for submitting a new post with user details, and upon submission, the data is sent to the API.

   3) Comments Display: Comments related to each user can be viewed in a modal.


    ## Assumptions and Decisions Made
       1. It is designed with a simple UI, utilizing Tailwind CSS for styling, which ensures a responsive layout.
       2. The axios library is used for making HTTP requests, and the component is built purely in functional style.

     ## Features
    1. Fetches user data from the JSONPlaceholder API.
    2. Allows users to submit posts via a form.
    3. Displays user comments in a modal upon clicking a user.

    ## Known Issues
    1.  Currently, only one user can post because the post api