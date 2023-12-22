## To Do App
This is a simple to-do list application built using the MERN stack (MongoDB, Express.js, React.js, Node.js), TypeScript. It allows users to create, view, update, and delete tasks.

## Backend

### Prerequisites

- Node.js
- MongoDB

### Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/SahanLakmalDev/To-do-App-Men-Stack.git
    ```

2. Navigate to the backend directory:

    ```bash
    cd backend
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Add following to config.ts file in the backend directory:

    ```makefile
    PORT=5555
    MONGODB_URL=<your-mongodb-connection-string>
    ```

5. Run the server:

    ```bash
    npm start
    ```

   The server will be running at [http://localhost:5555](http://localhost:5555).

## Frontend

### Prerequisites

- Node.js

### Setup

1. Navigate to the frontend directory:

    ```bash
    cd frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the application:

    ```bash
    npm run dev
    ```

   The application will be running at [http://localhost:3000](http://localhost:3000).

## Features

### Task Management

- Users can create new tasks by entering a task title and description.
- Display a list of all tasks with their titles.
- Allow users to update tasks and remove tasks when its completed.
- Basic validation ensures tasks have a title before being added.

### UI Design

- Responsive UI design using React.js.
- Usable on both desktop and mobile devices.
- Basic styling to differentiate completed tasks from pending ones.

Feel free to explore the application and provide any feedback or suggestions for improvement.

## License
This project is licensed under the MIT license. See [License.txt](License.txt)

## Version 
1.0.0