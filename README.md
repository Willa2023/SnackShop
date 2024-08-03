# Willa's SnackShop 
### Updated on 2024-08-03: Deploy Frontend to Azure 
[More Change Logs](https://github.com/Willa2023/SnackShop/wiki/Change-Logs)

Backend Stack：C#, .NET, EFCore, MVC, REST API, OpenAI (Betalgo.OpenAI Library for .NET)

Frontend Stack：Typescript, React, MUI Library, Chart.js

Database：SQLite

### Introduction
SnackShop is a responsive web application designed to facilitate snack viewing, purchasing, and management for different user roles.

#### 1.Unlogged Users
These users can view snacks and toggle between dark and light themes on the website. If user doesn’t have an account, they can  sign up using email and password or login through Google Account.

<p>
<img height="250" alt="Introduction1" src="https://github.com/Willa2023/SnackShop/blob/main/frontend/public/IntroImage/Introduction1.png?raw=true">
<img height="250" alt="Introduction2" src="https://github.com/Willa2023/SnackShop/blob/main/frontend/public/IntroImage/Introduction2.png?raw=true">
</p>

<p>
<img height="250" alt="Introduction3" src="https://github.com/Willa2023/SnackShop/blob/main/frontend/public/IntroImage/Introduction3.png?raw=true">
<img height="250" alt="Introduction4" src="https://github.com/Willa2023/SnackShop/blob/main/frontend/public/IntroImage/Introduction4.png?raw=true">
<img height="250" alt="Introduction5" src="https://github.com/Willa2023/SnackShop/blob/main/frontend/public/IntroImage/Introduction5.png?raw=true">
</p>

#### 2.Logged-In Normal User
These users can purchase snacks. When they log out, the items in their cart are saved and will be displayed the next time they log in.
When user pay for snack items, it will generate a sell history for each snack, sell information will be updated in database.

<p>
<img height="180" alt="Introduction6" src="https://github.com/Willa2023/SnackShop/blob/main/frontend/public/IntroImage/Introduction6.png?raw=true">
<img height="180" alt="Introduction7" src="https://github.com/Willa2023/SnackShop/blob/main/frontend/public/IntroImage/Introduction7.png?raw=true">
</p>

#### 3.Admin (Shop Manager)
Admins have full access to all features available to normal users and can also manage snacks, stocks, track sales, generate charts based on current data for clear insights, and request AI assistance for stock quantity advice.

<p>
<img height="250" alt="Introduction8" src="https://github.com/Willa2023/SnackShop/blob/main/frontend/public/IntroImage/Introduction8.png?raw=true">
<img height="250" alt="Introduction9" src="https://github.com/Willa2023/SnackShop/blob/main/frontend/public/IntroImage/Introduction9.png?raw=true">
</p>

<p>
<img height="220" alt="Introduction10" src="https://github.com/Willa2023/SnackShop/blob/main/frontend/public/IntroImage/Introduction10.png?raw=true">
<img height="220" alt="Introduction11" src="https://github.com/Willa2023/SnackShop/blob/main/frontend/public/IntroImage/Introduction11.png?raw=true">
<img height="220" alt="Introduction12" src="https://github.com/Willa2023/SnackShop/blob/main/frontend/public/IntroImage/Introduction12.png?raw=true">
</p>

### There is something I’m quite proud of: 

When a normal user logs in via Auth0, adds snacks to the cart, and checks out, it will automatically generate a sell history for each snack. When the shop manager views the sell page, they will see the updated sell table and chart. Additionally, the current stock and other related info will automatically be updated. 
The shop manager can also ask AI for advice based on the stock data, such as ask which snack need to be stocked more and which less to create better benefits.

### Basic & Advanced features I’ve implemented

#### 1.Basic features:
Frontend: Developed using React and Typescript with MUI library. It is resposive and utilizes React Router and Github.
Backend: Built with C# and .NET8 and EFCore, with persist data storage using an SQLite database. Includes CRUD operations for snacks and cart Items, with partial CRUD operations for stocks and sells.

#### 2.Advanced features:
Theme switching between dark mode and light mode.
Integration with OpenAI for the shop manager to ask questions based on stocks.
Deployment using Azure (frontend is successful, but backend still need to be resolved).

#### 3.Other:
Auth0 is used for sign-in and Login, with the ability to manage user account permissions on specifying to admin role.
Chart.js is used to display profit and revenue information on the snack and sell pages.

#### Deploy to Azure
Link of Website: https://snackshopfrontend.z8.web.core.windows.net
The deployment still has some issues. While the frontend can successfully show the login and logout functionality, it cannot connect to the Azure backend to retrieve data. However, it can connect to a local backend and work properly.

#### Test Accounts: 
Normal User Account 
email: testuser1@gmail.com
password: Testuser1!

Admin Account
email: admin@gmail.com
password: Admin2024!




