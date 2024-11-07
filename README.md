#  Agriculture_Data_Analysis 

#### This project provides a detailed analysis of agriculture crop data using React, TypeScript, and Mantine. The goal is to compute important statistics such as crop production, yield, and cultivation area for various crops across different years.

  
## Table of Contents:

#### --> Project Overview
 
#### --> Features
 
#### --> Folder Structure
 
#### --> Installation and Setup
 
#### --> How It Works
 
#### --> Screenshots
 


## **Project Overview**

#### This project reads agricultural data from a JSON file, processes the data to generate two tables:

#### Table A: Displays the crop with the maximum and minimum production per year.

#### Table B: Displays the average yield (Kg/Ha) and the average cultivation area (Ha) per crop.

#### The app uses React and TypeScript, styled with Mantine components and custom CSS for the table layout.


## **Features**

#### --> Displays crop production data in tabular format.
#### --> Calculates and displays the crop with maximum and minimum production for each year.
#### --> Calculates the average yield and cultivation area for each crop.
#### --> Clean, modular code structure for ease of maintenance and scalability.
#### --> Responsive and visually appealing UI with Mantine and custom CSS styling.


## **Folder Structure**

#### The folder structure of the project is as follows:

#### src/

#### ├── data/

#### │   └── DataSet.json           // dataset file

#### ├── App.tsx                 // Main React component where logic resides

#### ├── index.tsx               // Entry point for app

#### ├── index.css               // Global CSS styling


#### --> data.json: Contains the agricultural data used by the app.

#### --> App.tsx: Main React component that contains the logic for generating the tables.

#### --> index.tsx: Entry point of the app where the App component is rendered.

#### --> index.css: Global CSS styles for the app, including table styling.



## **Installation and Setup**

#### To run this project on your local machine, follow the instructions below.

### Prerequisites:

#### Make sure you have the following installed:

     yarn (or node)

#### Steps :-

#### --> Clone the repository:
 
     git clone https://github.com/Aqib1239/Agriculture_Data_Analysis.git

#### --> Navigate into the project directory:
 
     cd Agriculture_Data_Analysis

#### --> Install the dependencies:
 
     yarn  (or npm install)

#### --> Start the development server:
 
     yarn dev (or npm run dev)
     
#### Your application should now be running at http://localhost:5173


## **How It Works**

#### --> Data Import: The agricultural data is stored in the DataSet.json file in the data/ folder.

#### --> Processing Data:
 
     Table A: For each year, the crop with the maximum and minimum production is calculated and displayed.
     
     Table B: The average yield and average cultivation area for each crop is computed based on the data.
     
#### --> Rendering Data:
 
     The calculated data is rendered in two separate tables: one for the maximum/minimum crop production per year and the other for the average yield and area per crop.
     
#### --> Styling:
 
     Mantine components are used for layout and theming, while custom CSS ensures the tables are styled and readable.


## **Screenshots**

#### --> Table A: Maximum and Minimum Production per Year
 

#### --> Table B: Average Yield and Cultivation Area per Crop
