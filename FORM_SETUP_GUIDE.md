# Extended Contact Form Setup Guide

## Overview
This extended contact form collects comprehensive user information including:
- Personal details (name, email, phone, age)
- Fitness goals and current level
- Workout frequency preferences
- Additional message/comments

## Features
- ✅ Form validation for all required fields
- ✅ CORS-free submission using hidden iframe technique
- ✅ Success/error toast notifications
- ✅ Loading states and disabled buttons during submission
- ✅ Responsive design (separate mobile/desktop layouts)
- ✅ Google Sheets integration for data storage

## Setup Instructions

### 1. Google Apps Script Setup

1. **Create a new Google Apps Script project:**
   - Go to [https://script.google.com/](https://script.google.com/)
   - Click "New project"
   - Replace the default code with the content from `google-apps-script-extended.js`

2. **Configure the script:**
   - Replace `YOUR_GOOGLE_SHEET_ID` with your actual Google Sheet ID
   - Save the project (Ctrl+S)

3. **Deploy as web app:**
   - Click "Deploy" > "New deployment"
   - Choose "Web app" as the type
   - Set "Execute as" to "Me"
   - Set "Who has access" to "Anyone"
   - Click "Deploy"
   - Copy the web app URL

### 2. Google Sheets Setup

1. **Create a new Google Sheet:**
   - Go to [https://sheets.google.com/](https://sheets.google.com/)
   - Create a new blank spreadsheet
   - Name it something like "Contact Form Submissions"

2. **Get the Sheet ID:**
   - From the URL: `https://docs.google.com/spreadsheets/d/SHEET_ID/edit#gid=0`
   - Copy the `SHEET_ID` part

3. **Update the Apps Script:**
   - Replace `YOUR_GOOGLE_SHEET_ID` in the script with your actual Sheet ID
   - Save and redeploy the script

### 3. Frontend Configuration

1. **Update the form submission URL:**
   - In `ContactForm.tsx`, find line 64
   - Replace `YOUR_SCRIPT_ID` with your actual Apps Script deployment URL
   - Example: `https://script.google.com/macros/s/AKfycbx.../exec`

2. **Test the form:**
   - Fill out the form and submit
   - Check your Google Sheet for the data
   - Look for success/error toast notifications

## Form Fields

### Required Fields:
- **First Name** - User's first name
- **Last Name** - User's last name  
- **Email** - Contact email address
- **Phone** - Contact phone number
- **Age** - User's age
- **Goal** - Fitness goal (Weight Loss, Muscle Gain, etc.)
- **Fitness Level** - Current fitness level (Beginner, Intermediate, Advanced)
- **Workout Frequency** - How often they want to work out

### Optional Fields:
- **Message** - Additional comments or questions

## Data Storage

Data is stored in Google Sheets with the following columns:
1. Timestamp
2. First Name
3. Last Name
4. Email
5. Phone
6. Age
7. Goal
8. Fitness Level
9. Workout Frequency
10. Message

## Troubleshooting

### Common Issues:

1. **Form not submitting:**
   - Check that the Apps Script URL is correct
   - Ensure the script is deployed with "Anyone" access
   - Check browser console for JavaScript errors

2. **Data not appearing in sheets:**
   - Verify the Google Sheet ID is correct
   - Check Apps Script logs for errors
   - Ensure you have edit permissions on the sheet

3. **CORS errors:**
   - This shouldn't happen with the iframe method
   - If you see CORS errors, the iframe technique may not be working

### Testing the Apps Script:

1. **Run the test function:**
   - In Apps Script editor, select `testFunction` from the dropdown
   - Click the "Run" button
   - Check the logs for any errors

2. **Manual test:**
   - Run the `manualTest` function to verify sheet access
   - Check that the sheet is created and accessible

## Security Notes

- The form uses POST requests to prevent data leakage in URL parameters
- All data is stored in your private Google Sheet
- No sensitive data is cached or logged by the frontend
- The Apps Script runs with your Google account permissions

## Browser Compatibility

- Chrome: ✅ Full support
- Firefox: ✅ Full support  
- Safari: ✅ Full support
- Edge: ✅ Full support
- IE11: ❌ Not supported (uses modern JS features)

## Next Steps

1. Replace the placeholder script URL with your actual deployment URL
2. Test the form submission end-to-end
3. Customize the success/error messages if needed
4. Add any additional fields or validation as required
5. Consider adding email notifications via Apps Script if needed
