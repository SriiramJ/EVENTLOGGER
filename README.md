# Event-Driven Architecture with Node.js

This project demonstrates an **Event-Driven Architecture** implemented using Node.js. The core modules `fs`, `os`, and `events` are utilized to handle file operations, system events, and custom event emissions effectively.

## Features

- **Event-Driven Design**: Uses the `EventEmitter` module to create and listen for custom events.
- **File System Integration**: Handles file operations like reading and writing using the `fs` module.
- **System Information**: Utilizes the `os` module to retrieve system information and trigger events.
- **Modular Code**: Demonstrates a clean and modular approach to building event-driven systems.

## Prerequisites

Ensure you have the following installed:

- **Node.js** (version 14 or higher)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/SriiramJ/EVENTLOGGER.git
   cd https://github.com/SriiramJ/EVENTLOGGER
   ```

2. Install any required dependencies (if applicable):

   ```bash
   npm install
   ```

3. Run the application:

   ```bash
   node app.js
   ```

## Code Overview

### Core Files

#### `app.js`

This file is the backbone of the application, where events are registered and triggered. It establishes an event-driven workflow by:

- Setting up event listeners to respond to specific triggers.
- Leveraging the `os` module to fetch system information like platform, CPU architecture, and memory details.
- Utilizing the `fs` module to interact with the file system, including reading and writing operations.

### Workflow

1. The application starts by emitting a greeting event to introduce the project.
2. It then emits a system information event, which collects and logs system details to the console and writes them to a file.
3. All events are handled using `EventEmitter` to ensure seamless communication within the application.

## Project Workflow

1. **Initialization**: The application starts by emitting a custom greeting event, welcoming the user to the project.
2. **System Information Retrieval**: A dedicated event collects platform, architecture, and memory details using the `os` module. These details are logged and written to a file (`system-info.txt`) for reference.
3. **File System Interaction**: The application demonstrates how to write to and read from files, showcasing the integration of the `fs` module.
4. **Custom Events**: Additional events can be easily created and managed, enabling scalability and adaptability of the system.

## Output

When the application is executed:

1. A greeting message is displayed to welcome the user.
2. System information, including platform, CPU architecture, and free memory, is logged to the console and saved in a file.
3. The file serves as a persistent record of the system state during runtime.

## How to Extend

- Add new events to enhance functionality. For example, create an event to monitor real-time changes in system performance.
- Leverage other Node.js modules, such as `http` for networking or `stream` for managing data flows, to expand the application's capabilities.
- Modularize the code further by separating event definitions and handlers into different files for improved maintainability.

## Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests with enhancements or fixes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
