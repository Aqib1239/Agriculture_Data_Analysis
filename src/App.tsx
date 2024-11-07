import React, { useState, useEffect } from 'react';
import data from './data/DataSet.json'; // Import the JSON data

// Types for the crop data
type CropData = {
  Country: string;
  Year: string;
  "Crop Name": string;
  "Crop Production (UOM:t(Tonnes))": string;
  "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": string;
  "Area Under Cultivation (UOM:Ha(Hectares))": string;
};

type TableAData = {
  year: number;
  cropWithMaxProduction: string;
  cropWithMinProduction: string;
};

type TableBData = {
  crop: string;
  averageYield: number;
  averageCultivationArea: number;
};

// Helper function to process data for Table A
const calculateMaxMinProduction = (data: CropData[]) => {
  const yearWiseData: { [year: number]: { [crop: string]: number } } = {};

  // Grouping the data by year and crop production
  data.forEach((item) => {
    const year = parseInt(item.Year.match(/\d{4}/)?.[0] || "0", 10);
    const cropName = item["Crop Name"];
    const production = parseFloat(item["Crop Production (UOM:t(Tonnes))"] || "0");

    if (!yearWiseData[year]) yearWiseData[year] = {};
    yearWiseData[year][cropName] = production;
  });

  return Object.entries(yearWiseData).map(([year, crops]) => {
    const cropsArray = Object.entries(crops);
    const cropWithMaxProduction = cropsArray.reduce((max, crop) => (crop[1] > max[1] ? crop : max), ["", 0])[0];
    const cropWithMinProduction = cropsArray.reduce((min, crop) => (crop[1] < min[1] ? crop : min), ["", Infinity])[0];
    return { year: parseInt(year), cropWithMaxProduction, cropWithMinProduction };
  });
};

// Helper function to process data for Table B
const calculateAverageData = (data: CropData[]) => {
  const cropStats: { [crop: string]: { totalYield: number; totalArea: number; count: number } } = {};

  data.forEach((item) => {
    const cropName = item["Crop Name"];
    const yieldOfCrops = parseFloat(item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] || "0");
    const areaUnderCultivation = parseFloat(item["Area Under Cultivation (UOM:Ha(Hectares))"] || "0");

    if (!cropStats[cropName]) cropStats[cropName] = { totalYield: 0, totalArea: 0, count: 0 };
    cropStats[cropName].totalYield += yieldOfCrops;
    cropStats[cropName].totalArea += areaUnderCultivation;
    cropStats[cropName].count += 1;
  });

  return Object.entries(cropStats).map(([crop, stats]) => ({
    crop,
    averageYield: parseFloat((stats.totalYield / stats.count || 0).toFixed(3)),
    averageCultivationArea: parseFloat((stats.totalArea / stats.count || 0).toFixed(3)),
  }));
};

const App = () => {
  const [tableAData, setTableAData] = useState<TableAData[]>([]);
  const [tableBData, setTableBData] = useState<TableBData[]>([]);

  useEffect(() => {
    const tableADataArray = calculateMaxMinProduction(data);
    const tableBDataArray = calculateAverageData(data);
    
    setTableAData(tableADataArray);
    setTableBData(tableBDataArray);
  }, []);

  return (
    <div>
      <h1>Crop Data Analysis</h1>

      <h2>Table A: Maximum and Minimum Production per Year</h2>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Crop with Maximum Production</th>
            <th>Crop with Minimum Production</th>
          </tr>
        </thead>
        <tbody>
          {tableAData.map((row) => (
            <tr key={row.year}>
              <td>{row.year}</td>
              <td>{row.cropWithMaxProduction}</td>
              <td>{row.cropWithMinProduction}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Table B: Average Yield and Cultivation Area per Crop</h2>
      <table>
        <thead>
          <tr>
            <th>Crop</th>
            <th>Average Yield (Kg/Ha)</th>
            <th>Average Cultivation Area (Ha)</th>
          </tr>
        </thead>
        <tbody>
          {tableBData.map((row) => (
            <tr key={row.crop}>
              <td>{row.crop}</td>
              <td>{row.averageYield}</td>
              <td>{row.averageCultivationArea}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
