// Google Sheets Configuration
// This file contains the configuration for fetching Instagram posts directly from Google Sheets

export const GOOGLE_SHEETS_CONFIG = {
  // Your Google Sheets spreadsheet ID (from your Google Apps Script setup)
  // Get this from your Google Sheets URL: https://docs.google.com/spreadsheets/d/SPREADSHEET_ID_HERE/edit
  SPREADSHEET_ID: '189N5z5x_cdhd92NQELMWvHc-vWR6CriymI_TWgFVIJM',
  
  // Sheet name (should match your Google Apps Script CONFIG.sheetName)
  SHEET_NAME: 'Instagram Posts',
  
  // Sheet GID (usually 0 for the first sheet)
  GID: '0'
};

// Generate the CSV export URL using the simpler format
export const getCSVUrl = () => {
  // Use the simpler CSV export format that works better with CORS
  return `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEETS_CONFIG.SPREADSHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(GOOGLE_SHEETS_CONFIG.SHEET_NAME)}`;
};

// Check if Google Sheets is configured
export const isConfigured = () => {
  return GOOGLE_SHEETS_CONFIG.SPREADSHEET_ID !== 'YOUR_SPREADSHEET_ID_HERE';
};
