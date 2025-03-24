# Car Auction Web App

## Overview
This is a **Car Auction Web App** built using a **microservice architecture**, leveraging **ASP.NET Core** for creation of different services. The system is designed to facilitate online car auctions and consists of multiple services that communicate through an **event bus** powered by **RabbitMQ**. It also includes a dedicated **authentication and authorization service** using **Duende IdentityServer**.

All services are containerized and have been deployed for a local environment.

## Architecture
The web app consists of the following services:

1. **Auction Service** - Manages car auctions.
2. **Search Service** - Responsibles for handling search functionality for auctions.
3. **Bidding Service** - Handles bids placed by users.
4. **Notification Service** - Sends notifications regarding auction updates.
5. **Gateway Service** - Acts as an API gateway for routing requests.
6. **Auth Service** - Handles authentication and authorization using **Duende IdentityServer**.

### Communication
All microservices communicate asynchronously using **RabbitMQ** as an **event bus**.

## Frontend
The UI is built with:
- **ReactJS**
- **NextAuth** for authentication
- **TailwindCSS** for styling

The frontend is also containerized.

## Running the Application

To run the application, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone <repo-url>
   cd <repo-folder>
   ```

2. **Run the application using Docker Compose:**
   ```sh
   docker compose up -d
   ```
   This will start all the necessary services in the background.

3. **Access the Web App:**
   Open your browser and navigate to:
   ```
   http://app.car-auction-webapp.local
   ```
   The app runs on **HTTP** by default.

4. **(Optional) Enable HTTPS:**
   If you want to run the application securely over HTTPS, additional steps are required.
   - Follow the guide for setting up SSL certificates using **mkcert**: [mkcert GitHub Repository](https://github.com/FiloSottile/mkcert)

## Notes
- Ensure **Docker** and **Docker Compose** are installed on your machine.
- Make sure your system allows access to **http://app.car-auction-webapp.local**.
- Check the logs using `docker compose logs -f` if any service fails to start.

---
Feel free to raise any issues!

