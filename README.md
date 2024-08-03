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
<img height="300" alt="Introduction1" src="https://github.com/Willa2023/SnackShop/blob/main/frontend/public/IntroImage/Introduction1.png?raw=true">
<img height="300" alt="Introduction2" src="https://github.com/Willa2023/SnackShop/blob/main/frontend/public/IntroImage/Introduction2.png?raw=true">
</p>

<p>
<img height="200" alt="Introduction3" src="https://github.com/Willa2023/SnackShop/blob/main/frontend/public/IntroImage/Introduction3.png?raw=true">
<img height="200" alt="Introduction4" src="https://github.com/Willa2023/SnackShop/blob/main/frontend/public/IntroImage/Introduction4.png?raw=true">
<img height="200" alt="Introduction5" src="https://github.com/Willa2023/SnackShop/blob/main/frontend/public/IntroImage/Introduction5.png?raw=true">
</p>

#### 2.Logged-In Normal User
These users can purchase snacks. When they log out, the items in their cart are saved and will be displayed the next time they log in.
When user pay for snack items, it will generate a sell history for each snack, sell information will be updated in database.

<p>
<img height="200" alt="Introduction6" src="https://github.com/Willa2023/SnackShop/blob/main/frontend/public/IntroImage/Introduction6.png?raw=true">
<img height="200" alt="Introduction7" src="https://github.com/Willa2023/SnackShop/blob/main/frontend/public/IntroImage/Introduction7.png?raw=true">
</p>

#### 3.Admin (Shop Manager)
Admins have full access to all features available to normal users and can also manage snacks, stocks, track sales, generate charts based on current data for clear insights, and request AI assistance for stock quantity advice.

<p>
<img height="300" alt="Introduction8" src="https://github.com/Willa2023/SnackShop/blob/main/frontend/public/IntroImage/Introduction8.png?raw=true">
<img height="300" alt="Introduction9" src="https://github.com/Willa2023/SnackShop/blob/main/frontend/public/IntroImage/Introduction9.png?raw=true">
</p>

<p>
<img height="400" alt="Introduction10" src="https://github.com/Willa2023/SnackShop/blob/main/frontend/public/IntroImage/Introduction10.png?raw=true">
<img height="400" alt="Introduction11" src="https://github.com/Willa2023/SnackShop/blob/main/frontend/public/IntroImage/Introduction11.png?raw=true">
</p>
<img height="600" alt="Introduction12" src="https://github.com/Willa2023/SnackShop/blob/main/frontend/public/IntroImage/Introduction12.png?raw=true">

<!-- <img width="1496" alt="Home1" src="https://github.com/Willa2023/SnackShop/blob/main/frontend/public/IntroImage/Readme1.jpg?raw=true">
<img width="1496" alt="Home2" src="https://github.com/Willa2023/SnackShop/blob/main/frontend/public/IntroImage/Readme2.jpg?raw=true">
<img width="1496" alt="Home1" src="https://github.com/Willa2023/SnackShop/blob/main/frontend/public/IntroImage/Readme3.jpg?raw=true">
<img width="1496" alt="Home2" src="https://github.com/Willa2023/SnackShop/blob/main/frontend/public/IntroImage/Readme4.jpg?raw=true">
<img width="1496" alt="Home1" src="https://github.com/Willa2023/SnackShop/blob/main/frontend/public/IntroImage/Readme5.jpg?raw=true">
<img width="1496" alt="Home2" src="https://github.com/Willa2023/SnackShop/blob/main/frontend/public/IntroImage/Readme6.jpg?raw=true"> -->





