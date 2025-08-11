// Google Apps Script for Abhiram's Fitness Coaching Form
// This is an improved version that's more robust and handles errors better

// Configuration - Update these values with your own
const CONFIG = {
  SHEET_ID: '1ESuC87f_J1mIICArJ2LnKxxn_gquv6eYVJcoEmq77jg', // Replace with your new Google Sheet ID
  SHEET_NAME: 'Form Submissions',
  NOTIFICATION_EMAIL: 'tejvishnu05email@gmail.com',
  HIGH_PRIORITY_INVESTMENT_LEVEL: '₹80,000+'
};

/**
 * Process form data from the website
 */
function doPost(e) {
  try {
    // Set up CORS headers for browser compatibility
    const output = ContentService.createTextOutput()
      .setMimeType(ContentService.MimeType.JSON);
    
    // Parse data from form submission
    const formData = e.parameter || {};
    
    // Log the received data for debugging
    console.log('Received form data:', JSON.stringify(formData));
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone'];
    for (const field of requiredFields) {
      if (!formData[field]) {
        return output.setContent(JSON.stringify({
          status: 'error',
          message: `Missing required field: ${field}`
        }));
      }
    }
    
    // Process the form data
    const result = processFormSubmission(formData);
    
    // Return appropriate response
    return output.setContent(JSON.stringify({
      status: 'success',
      message: 'Form submitted successfully'
    }));
    
  } catch (error) {
    console.error('Error processing form:', error);
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Process the form submission by saving to spreadsheet and sending notifications
 */
function processFormSubmission(formData) {
  // Format timestamp
  const timestamp = new Date().toLocaleString('en-IN');
  
  // Save data to spreadsheet
  const sheet = getOrCreateSheet();
  
  // Add data to sheet
  sheet.appendRow([
    timestamp,
    formData.name || '',
    formData.email || '',
    formData.phone || '',
    formData.age || '',
    formData.struggle || '',
    formData.previousCoaching || '',
    formData.investmentLevel || '',
    formData.referralSource || ''
  ]);
  
  // Send high priority notification if applicable
  if (formData.investmentLevel && formData.investmentLevel.includes(CONFIG.HIGH_PRIORITY_INVESTMENT_LEVEL)) {
    sendHighPriorityAlert(formData, timestamp);
  }
  
  return { status: 'success' };
}

/**
 * Get or create the spreadsheet and sheet for form submissions
 */
function getOrCreateSheet() {
  // Access or create spreadsheet
  const spreadsheet = SpreadsheetApp.openById(CONFIG.SHEET_ID);
  let sheet = spreadsheet.getSheetByName(CONFIG.SHEET_NAME);
  
  // Create sheet with headers if it doesn't exist
  if (!sheet) {
    sheet = spreadsheet.insertSheet(CONFIG.SHEET_NAME);
    addHeaders(sheet);
  }
  
  // Check if sheet is empty (no headers)
  if (sheet.getLastRow() === 0) {
    addHeaders(sheet);
  }
  
  return sheet;
}

/**
 * Add headers to sheet with formatting
 */
function addHeaders(sheet) {
  const headers = [
    'Timestamp',
    'Name',
    'Email',
    'Phone',
    'Age',
    'Fitness Struggle',
    'Previous Coaching',
    'Investment Level',
    'Referral Source'
  ];
  
  sheet.appendRow(headers);
  
  // Format header row
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight('bold')
             .setBackground('#4CAF50')
             .setFontColor('white')
             .setHorizontalAlignment('center');
  
  // Set column widths
  sheet.setColumnWidth(1, 180); // Timestamp
  sheet.setColumnWidth(2, 150); // Name
  sheet.setColumnWidth(3, 200); // Email
  sheet.setColumnWidth(4, 150); // Phone
  sheet.setColumnWidth(5, 80);  // Age
  sheet.setColumnWidth(6, 300); // Fitness Struggle
  sheet.setColumnWidth(7, 150); // Previous Coaching
  sheet.setColumnWidth(8, 250); // Investment Level
  sheet.setColumnWidth(9, 150); // Referral Source
  
  // Freeze header row
  sheet.setFrozenRows(1);
}

/**
 * Send email notification for high-priority leads
 */
function sendHighPriorityAlert(data, timestamp) {
  const subject = `🔴 HIGH PRIORITY LEAD: ${data.name}`;
  const body = `
A high-priority lead has submitted the fitness coaching form:

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Age: ${data.age || 'Not specified'}
Investment Level: ${data.investmentLevel}
Submitted: ${timestamp}

Fitness Struggle:
${data.struggle || 'Not specified'}

Previous Coaching: ${data.previousCoaching || 'Not specified'}
Referral Source: ${data.referralSource || 'Not specified'}

View all leads: ${SpreadsheetApp.openById(CONFIG.SHEET_ID).getUrl()}
`;

  GmailApp.sendEmail(CONFIG.NOTIFICATION_EMAIL, subject, body);
}

/**
 * Weekly summary email - runs on Sunday via trigger
 */
function sendWeeklySummary() {
  const sheet = SpreadsheetApp.openById(CONFIG.SHEET_ID).getSheetByName(CONFIG.SHEET_NAME);
  if (!sheet || sheet.getLastRow() <= 1) return;
  
  const data = sheet.getDataRange().getValues();
  const headers = data.shift();
  
  // Get entries from past week
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  
  const recentEntries = data.filter(row => {
    try {
      // Try to parse the timestamp - format can vary
      let rowDate;
      if (typeof row[0] === 'string') {
        // Try different date formats
        const dateParts = row[0].split(/[\/,-\s:]/);
        if (dateParts.length >= 3) {
          rowDate = new Date(row[0]);
        }
      } else if (row[0] instanceof Date) {
        rowDate = row[0];
      }
      
      return rowDate && rowDate >= oneWeekAgo;
    } catch (e) {
      console.error('Error parsing date:', e);
      return false;
    }
  });
  
  if (recentEntries.length === 0) return;
  
  // Count investment levels
  const investmentCounts = {};
  recentEntries.forEach(row => {
    const level = row[7] || 'Not specified';
    investmentCounts[level] = (investmentCounts[level] || 0) + 1;
  });
  
  // Build email
  let emailBody = `WEEKLY SUMMARY (${recentEntries.length} new leads)\n\n`;
  
  // Add investment breakdown
  emailBody += "INVESTMENT BREAKDOWN:\n";
  Object.keys(investmentCounts).forEach(level => {
    emailBody += `${level}: ${investmentCounts[level]}\n`;
  });
  
  // Add list of high-value leads
  const highValueLeads = recentEntries.filter(row => 
    row[7] && row[7].includes(CONFIG.HIGH_PRIORITY_INVESTMENT_LEVEL)
  );
  
  if (highValueLeads.length > 0) {
    emailBody += "\nHIGH-VALUE LEADS THIS WEEK:\n";
    highValueLeads.forEach(lead => {
      emailBody += `- ${lead[1]} (${lead[2]}, ${lead[3]})\n`;
    });
  }
  
  emailBody += "\nVIEW ALL LEADS: " + SpreadsheetApp.openById(CONFIG.SHEET_ID).getUrl();
  
  // Send email
  GmailApp.sendEmail(
    CONFIG.NOTIFICATION_EMAIL,
    `Weekly Fitness Coaching Summary - ${new Date().toLocaleDateString()}`,
    emailBody
  );
}

/**
 * Creates a trigger that runs the weekly summary every Sunday
 * Run this function once manually to set up the weekly trigger
 */
function createWeeklySummaryTrigger() {
  // Delete any existing triggers first to avoid duplicates
  const existingTriggers = ScriptApp.getProjectTriggers();
  existingTriggers.forEach(trigger => {
    if (trigger.getHandlerFunction() === 'sendWeeklySummary') {
      ScriptApp.deleteTrigger(trigger);
    }
  });
  
  // Create new weekly trigger
  ScriptApp.newTrigger('sendWeeklySummary')
    .timeBased()
    .onWeekDay(ScriptApp.WeekDay.SUNDAY)
    .atHour(9)
    .create();
    
  return "Weekly summary trigger created successfully!";
}

/**
 * Test function to verify the script is working
 * Run this function manually to test
 */
function testScript() {
  const testData = {
    name: "Test User",
    email: "test@example.com",
    phone: "1234567890",
    age: "30",
    struggle: "Test struggle description",
    previousCoaching: "Yes",
    investmentLevel: "₹50,000 - I'm serious, just need some clarity.",
    referralSource: "Instagram"
  };
  
  const result = processFormSubmission(testData);
  return "Test completed. Check spreadsheet for test entry.";
}

/**
 * Setup function - call once to initialize everything
 * Run this function manually when setting up the script
 */
function setup() {
  const sheet = getOrCreateSheet();
  createWeeklySummaryTrigger();
  return "Setup complete! Spreadsheet prepared and weekly summary scheduled.";
}

// This function will execute when the script is published as a web app
function doGet() {
  return HtmlService.createHtmlOutput(
    "<h1>Abhiram Fitness Form Handler</h1><p>This is a backend service for processing form submissions. Please submit forms from the website.</p>"
  );
}
