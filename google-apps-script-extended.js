/**
 * Google Apps Script for handling Extended Contact Form submissions
 * This script handles form data with multiple fields and writes them to Google Sheets
 * 
 * Setup Instructions:
 * 1. Go to https://script.google.com/
 * 2. Create a new project
 * 3. Replace the default code with this script
 * 4. Save the project with a name like "Extended Contact Form Handler"
 * 5. Deploy as a web app:
 *    - Click "Deploy" > "New deployment"
 *    - Choose "Web app" as the type
 *    - Set execute as "Me"
 *    - Set access to "Anyone"
 *    - Click "Deploy"
 * 6. Copy the web app URL and replace YOUR_SCRIPT_ID in ContactForm.tsx
 * 7. Create a Google Sheet and copy its ID into the SHEET_ID variable below
 */

// Configuration - Replace with your actual Google Sheet ID
const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID'; // Replace with your actual Google Sheet ID
const SHEET_NAME = 'Form Submissions'; // Name of the sheet tab

function doPost(e) {
  console.log('Received POST request');
  console.log('Request parameters:', e.parameter);
  console.log('Request postData:', e.postData);
  
  try {
    let formData = {};
    
    // Handle form-encoded data (from hidden iframe submission)
    if (e.parameter) {
      console.log('Processing form-encoded data');
      formData = e.parameter;
    }
    // Handle JSON data (fallback)
    else if (e.postData && e.postData.contents) {
      console.log('Processing JSON data');
      formData = JSON.parse(e.postData.contents);
    }
    else {
      console.log('No data received');
      return ContentService
        .createTextOutput('No data received')
        .setMimeType(ContentService.MimeType.TEXT);
    }
    
    console.log('Parsed form data:', formData);
    
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'age', 'goal', 'fitnessLevel', 'workoutFrequency'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      console.log('Missing required fields:', missingFields);
      return ContentService
        .createTextOutput(`Missing required fields: ${missingFields.join(', ')}`)
        .setMimeType(ContentService.MimeType.TEXT);
    }
    
    // Get or create the spreadsheet
    let spreadsheet;
    try {
      spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    } catch (error) {
      console.log('Error opening spreadsheet:', error);
      return ContentService
        .createTextOutput('Error: Could not access spreadsheet. Please check SHEET_ID.')
        .setMimeType(ContentService.MimeType.TEXT);
    }
    
    // Get or create the sheet
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    if (!sheet) {
      console.log('Creating new sheet:', SHEET_NAME);
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      
      // Add headers
      const headers = [
        'Timestamp',
        'First Name',
        'Last Name',
        'Email',
        'Phone',
        'Age',
        'Goal',
        'Fitness Level',
        'Workout Frequency',
        'Message'
      ];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // Format headers
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground('#f0f0f0');
      headerRange.setFontWeight('bold');
      headerRange.setFontSize(11);
    }
    
    // Prepare the data row
    const timestamp = formData.timestamp || new Date().toISOString();
    const rowData = [
      timestamp,
      formData.firstName || '',
      formData.lastName || '',
      formData.email || '',
      formData.phone || '',
      formData.age || '',
      formData.goal || '',
      formData.fitnessLevel || '',
      formData.workoutFrequency || '',
      formData.message || ''
    ];
    
    console.log('Data to be written:', rowData);
    
    // Add the data to the sheet
    const nextRow = sheet.getLastRow() + 1;
    sheet.getRange(nextRow, 1, 1, rowData.length).setValues([rowData]);
    
    console.log('Data successfully written to row:', nextRow);
    
    // Format the new row
    const newRowRange = sheet.getRange(nextRow, 1, 1, rowData.length);
    newRowRange.setFontSize(10);
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, rowData.length);
    
    // Return success response
    return ContentService
      .createTextOutput('Success: Form submitted successfully!')
      .setMimeType(ContentService.MimeType.TEXT);
    
  } catch (error) {
    console.error('Error in doPost:', error);
    return ContentService
      .createTextOutput(`Error: ${error.message}`)
      .setMimeType(ContentService.MimeType.TEXT);
  }
}

// Test function to verify the script works
function testFunction() {
  console.log('Test function called');
  
  // Test with sample data
  const testData = {
    parameter: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '1234567890',
      age: '25',
      goal: 'Weight Loss',
      fitnessLevel: 'Beginner',
      workoutFrequency: '3-4 times per week',
      message: 'I want to lose weight and get fit.',
      timestamp: new Date().toISOString()
    }
  };
  
  const result = doPost(testData);
  console.log('Test result:', result.getContent());
}

// Function to manually test the script
function manualTest() {
  console.log('Manual test started');
  
  try {
    // Test opening the spreadsheet
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    console.log('Spreadsheet opened successfully:', spreadsheet.getName());
    
    // Test getting/creating the sheet
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      console.log('Created new sheet:', SHEET_NAME);
    } else {
      console.log('Sheet found:', SHEET_NAME);
    }
    
    console.log('Manual test completed successfully');
    
  } catch (error) {
    console.error('Manual test failed:', error);
  }
}
