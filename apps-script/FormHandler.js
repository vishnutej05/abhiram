// Google Apps Script for Abhiram's Fitness Coaching Form

// Configuration - Update these values with your own
const CONFIG = {
  SHEET_ID: '1_ytrQr-ot8QXb4YnEV5oMMJT8-dWkKuwuUDW4dk7ACI', // Replace with your new Google Sheet ID from the new account
  SHEET_NAME: 'Form Submissions',
  NOTIFICATION_EMAIL: 'themight0084@gmail.com', // Update to the email address where you want to receive notifications
  BACKUP_SHEET_ID: '1nXMCKP_JVsqP2xBfsvMj_OGXW8XbmoHr2K8-nu4xcY8', // Replace with your new backup Google Sheet ID from the new account
  BACKUP_SHEET_NAME: 'Backup Form Submissions',
  ENABLE_BACKUP: true // Set to false to disable backup functionality
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
  try {
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
    
    // Format the newly added row
    const lastRow = sheet.getLastRow();
    
    // Apply alternating row colors for better readability
    if (lastRow % 2 === 0) {
      sheet.getRange(lastRow, 1, 1, 9).setBackground('#f9f9f9');
    }
    
    // Create backup of the data if backup is enabled
    if (CONFIG.ENABLE_BACKUP && CONFIG.BACKUP_SHEET_ID) {
      // Call testBackupSystem to ensure backup happens immediately for new leads
      console.log('Creating backup for new lead submission...');
      testBackupSystem();
    }
    
    // Send notification for every new lead
    sendNewLeadNotification(formData, timestamp);
    
    return { status: 'success' };
  } catch (error) {
    console.error('Error processing form submission:', error);
    return { status: 'error', message: error.toString() };
  }
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
 * Add headers to sheet with formatting and filters
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
  
  // Set column widths - more compact to fit on single screen
  sheet.setColumnWidth(1, 150); // Timestamp - reduced
  sheet.setColumnWidth(2, 120); // Name - reduced
  sheet.setColumnWidth(3, 180); // Email - reduced
  sheet.setColumnWidth(4, 120); // Phone - reduced
  sheet.setColumnWidth(5, 60);  // Age - reduced
  sheet.setColumnWidth(6, 250); // Fitness Struggle - reduced
  sheet.setColumnWidth(7, 120); // Previous Coaching - reduced
  sheet.setColumnWidth(8, 180); // Investment Level - reduced
  sheet.setColumnWidth(9, 120); // Referral Source - reduced
  
  // Freeze header row
  sheet.setFrozenRows(1);
  
  // Create filter for all columns if none exists
  let filter;
  try {
    filter = sheet.getFilter();
    if (!filter) {
      filter = headerRange.createFilter();
    }
    
    // Set specific filter criteria for relevant columns
    setupColumnFilters(sheet, filter);
  } catch (e) {
    console.log('Error setting up filter in addHeaders:', e.toString());
  }
  
  // Apply text wrapping to content cells for better vertical display
  sheet.getRange(2, 6, sheet.getMaxRows(), 1).setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP);
}

/**
 * Send email notification for every new lead
 */
function sendNewLeadNotification(data, timestamp) {
  const subject = `New Lead Submission: ${data.name}`;
  const body = `
A new lead has been submitted through the fitness coaching form:

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
 * Set up specific column filters for relevant columns
 */
function setupColumnFilters(sheet, filter) {
  if (!filter) return; // Exit if no filter is available
  
  try {
    // Column indexes (1-based in Sheets API)
    const previousCoachingCol = 7;  // Column G
    const investmentLevelCol = 8;   // Column H  
    const referralSourceCol = 9;    // Column I
    
    // Try to clear any existing criteria
    try {
      filter.removeColumnFilterCriteria(previousCoachingCol);
      filter.removeColumnFilterCriteria(investmentLevelCol);
      filter.removeColumnFilterCriteria(referralSourceCol);
    } catch (e) {
      // Ignore errors if no criteria exists
    }
    
    // Add data to ensure filter dropdown shows our options
    const lastRow = sheet.getLastRow();
    if (lastRow <= 1) {
      // If there's no data, add a sample row with all our expected values
      // This will ensure the filter dropdown shows these options
      sheet.appendRow([
        new Date().toLocaleString('en-IN'),
        "Sample Name (Delete)",
        "sample@email.com",
        "1234567890",
        "30",
        "Sample struggle text",
        "Yes", 
        "₹15,000 - Ready Looking for DIY/low cost programs.",
        "Instagram"
      ]);
      sheet.appendRow([
        new Date().toLocaleString('en-IN'),
        "Sample Name 2 (Delete)",
        "sample2@email.com",
        "0987654321",
        "25",
        "Another struggle text",
        "No", 
        "₹50,000 - I'm serious, just need some clarity.",
        "Friend/Family"
      ]);
      sheet.appendRow([
        new Date().toLocaleString('en-IN'),
        "Sample Name 3 (Delete)",
        "sample3@email.com",
        "5555555555",
        "35",
        "Another sample text",
        "Yes", 
        "₹80,000+ - I'm ready to transform all out.",
        "Email"
      ]);
      sheet.appendRow([
        new Date().toLocaleString('en-IN'),
        "Sample Name 4 (Delete)",
        "sample4@email.com",
        "9999999999",
        "40",
        "Last sample text",
        "No", 
        "₹0 - Just exploring, I'm not ready.",
        "YouTube"
      ]);
      
      // Hide these sample rows (they'll still be used for filters but not visible)
      sheet.hideRows(2, 4);
    }
    
    console.log("Sample data added to ensure filter options are available");
    
  } catch (e) {
    console.log('Error setting up column filters:', e.toString());
  }
}

/**
 * Format the entire spreadsheet for better readability
 */
function formatSpreadsheet() {
  const sheet = SpreadsheetApp.openById(CONFIG.SHEET_ID).getSheetByName(CONFIG.SHEET_NAME);
  if (!sheet) return "Sheet not found";
  
  const lastRow = sheet.getLastRow();
  if (lastRow <= 1) return "No data to format";
  
  // Apply alternating row colors
  for (let i = 2; i <= lastRow; i++) {
    const rowColor = i % 2 === 0 ? '#f9f9f9' : '#ffffff';
    sheet.getRange(i, 1, 1, 9).setBackground(rowColor);
  }
  
  // Apply text wrapping to content cells for better vertical display
  sheet.getRange(2, 6, lastRow - 1, 1).setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP);
  
  // Add filter to headers if not already present
  let filter;
  try {
    // Try to get existing filter
    filter = sheet.getFilter();
    if (!filter) {
      // If no filter exists, create one
      filter = sheet.getRange(1, 1, 1, 9).createFilter();
    }
    
    // Add sample data to ensure filter options are available
    setupColumnFilters(sheet, filter);
    
    // Make sure to apply the filter to the entire data range
    const dataRange = sheet.getDataRange();
    if (dataRange.getNumRows() > 1) {
      filter.setRange(sheet.getRange(1, 1, dataRange.getNumRows(), dataRange.getNumColumns()));
    }
  } catch (e) {
    console.log('Filter handling error:', e.toString());
  }
  
  // Set the print settings to fit content on page but keep gridlines visible
  sheet.setHiddenGridlines(false); // Keep gridlines visible
  sheet.getSheetProtection().setProtected(false);
  
  // Auto resize columns based on content (but within reasonable limits)
  for (let i = 1; i <= 9; i++) {
    sheet.autoResizeColumn(i);
    const currentWidth = sheet.getColumnWidth(i);
    const maxWidth = 300; // Maximum column width
    if (currentWidth > maxWidth) {
      sheet.setColumnWidth(i, maxWidth);
    }
  }
  
  return "Spreadsheet formatted successfully!";
}

/**
 * Setup function - call once to initialize everything
 * Run this function manually when setting up the script
 */
function setup() {
  try {
    // Get or create the sheet (this also adds headers if needed)
    const sheet = getOrCreateSheet();
    
    // Format the spreadsheet (will check for existing filters)
    formatSpreadsheet();
    
    // Set up the weekly summary trigger
    createWeeklySummaryTrigger();
    
    // Set up daily backup trigger if backup is enabled
    if (CONFIG.ENABLE_BACKUP && CONFIG.BACKUP_SHEET_ID) {
      createDailyBackupTrigger();
      createHourlyBackupTrigger();
      
      // Do an initial full backup
      syncFullBackup();
    }
    
    return "Setup complete! Spreadsheet prepared, formatted, and all triggers scheduled.";
  } catch (error) {
    console.error("Setup error:", error);
    return "Error during setup: " + error.toString();
  }
}

/**
 * Removes sample/hidden rows once there is enough real data
 */
function cleanupSampleRows() {
  const sheet = SpreadsheetApp.openById(CONFIG.SHEET_ID).getSheetByName(CONFIG.SHEET_NAME);
  if (!sheet) return "Sheet not found";
  
  // Look for rows with "(Delete)" in them - these are our sample rows
  const data = sheet.getDataRange().getValues();
  const rowsToDelete = [];
  
  for (let i = 1; i < data.length; i++) {  // Start at 1 to skip header
    if (data[i][1] && data[i][1].toString().includes("(Delete)")) {
      // +1 because array is 0-indexed but sheet is 1-indexed, and +1 more to account for header
      rowsToDelete.push(i + 1);  
    }
  }
  
  // Delete sample rows (from bottom to top to avoid changing indices)
  for (let i = rowsToDelete.length - 1; i >= 0; i--) {
    sheet.deleteRow(rowsToDelete[i]);
  }
  
  return `Cleaned up ${rowsToDelete.length} sample rows`;
}

/**
 * Creates a backup of a single form submission in the backup spreadsheet
 * @param {Object} formData - The form data to backup
 * @param {string} timestamp - The timestamp of the submission
 */
function createBackup(formData, timestamp) {
  try {
    // Skip if no backup sheet ID is configured
    if (!CONFIG.BACKUP_SHEET_ID) {
      console.log('Backup skipped - no backup sheet ID configured');
      return;
    }
    
    // Get or create backup sheet
    const backupSheet = getOrCreateBackupSheet();
    
    // Check if backupSheet is null (could happen if there was an error opening the spreadsheet)
    if (!backupSheet) {
      console.error('Failed to get or create backup sheet');
      return;
    }
    
    // Add data to backup sheet
    backupSheet.appendRow([
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
    
    // Format the newly added row
    const lastRow = backupSheet.getLastRow();
    
    // Apply alternating row colors for better readability
    if (lastRow % 2 === 0) {
      backupSheet.getRange(lastRow, 1, 1, 9).setBackground('#f9f9f9');
    }
    
    console.log('Backup created successfully');
  } catch (error) {
    console.error('Error creating backup:', error);
    // Don't throw the error to avoid disrupting the main form submission
  }
}

/**
 * Gets or creates the backup spreadsheet and sheet
 * @return {GoogleAppsScript.Spreadsheet.Sheet} The backup sheet
 */
function getOrCreateBackupSheet() {
  // Access or create backup spreadsheet
  let backupSpreadsheet;
  try {
    // Validate backup sheet ID
    if (!CONFIG.BACKUP_SHEET_ID || CONFIG.BACKUP_SHEET_ID.trim() === '') {
      console.error('Backup sheet ID is empty or invalid');
      return null;
    }
    
    backupSpreadsheet = SpreadsheetApp.openById(CONFIG.BACKUP_SHEET_ID);
    
    // Check if we successfully got the spreadsheet
    if (!backupSpreadsheet) {
      console.error('Could not open backup spreadsheet - returned null');
      return null;
    }
  } catch (error) {
    // If the backup sheet doesn't exist, log the error but don't throw
    console.error('Could not open backup spreadsheet:', error);
    return null;
  }
  
  let backupSheet = backupSpreadsheet.getSheetByName(CONFIG.BACKUP_SHEET_NAME);
  
  // Create backup sheet with headers if it doesn't exist
  if (!backupSheet) {
    backupSheet = backupSpreadsheet.insertSheet(CONFIG.BACKUP_SHEET_NAME);
    addHeaders(backupSheet);
  }
  
  // Check if sheet is empty (no headers)
  if (backupSheet.getLastRow() === 0) {
    addHeaders(backupSheet);
  }
  
  return backupSheet;
}

/**
 * Syncs all data from the main spreadsheet to the backup spreadsheet
 * This can be triggered manually or on a schedule
 */
function syncFullBackup() {
  try {
    // Skip if backup is not enabled or no backup sheet ID is configured
    if (!CONFIG.ENABLE_BACKUP || !CONFIG.BACKUP_SHEET_ID) {
      console.log('Full backup sync skipped - backup not enabled or no backup sheet ID configured');
      return 'Backup not enabled or no backup sheet ID configured';
    }
    
    // Get main and backup sheets
    const mainSheet = SpreadsheetApp.openById(CONFIG.SHEET_ID).getSheetByName(CONFIG.SHEET_NAME);
    
    if (!mainSheet) {
      return 'Main sheet not found';
    }
    
    const backupSheet = getOrCreateBackupSheet();
    
    if (!backupSheet) {
      return 'Could not access backup sheet';
    }
    
    // Get all data from main sheet
    const mainData = mainSheet.getDataRange().getValues();
    
    // Clear existing data in backup sheet (except headers)
    if (backupSheet.getLastRow() > 1) {
      backupSheet.deleteRows(2, backupSheet.getLastRow() - 1);
    }
    
    // Add all data from main sheet to backup sheet (skip headers)
    for (let i = 1; i < mainData.length; i++) {
      backupSheet.appendRow(mainData[i]);
      
      // Apply alternating row colors
      if ((i+1) % 2 === 0) {
        backupSheet.getRange(i+1, 1, 1, mainData[i].length).setBackground('#f9f9f9');
      }
    }
    
    // Format the backup spreadsheet
    formatBackupSpreadsheet();
    
    return `Full backup completed successfully. ${mainData.length - 1} rows synced.`;
  } catch (error) {
    console.error('Error performing full backup sync:', error);
    return 'Error performing full backup sync: ' + error.toString();
  }
}

/**
 * Format the backup spreadsheet similar to the main spreadsheet
 */
function formatBackupSpreadsheet() {
  try {
    const backupSpreadsheet = SpreadsheetApp.openById(CONFIG.BACKUP_SHEET_ID);
    const backupSheet = backupSpreadsheet.getSheetByName(CONFIG.BACKUP_SHEET_NAME);
    
    if (!backupSheet) return;
    
    // Set column widths
    backupSheet.setColumnWidth(1, 150); // Timestamp
    backupSheet.setColumnWidth(2, 120); // Name
    backupSheet.setColumnWidth(3, 180); // Email
    backupSheet.setColumnWidth(4, 120); // Phone
    backupSheet.setColumnWidth(5, 60);  // Age
    backupSheet.setColumnWidth(6, 200); // Fitness Struggle
    backupSheet.setColumnWidth(7, 150); // Previous Coaching
    backupSheet.setColumnWidth(8, 120); // Investment Level
    backupSheet.setColumnWidth(9, 150); // Referral Source
    
    // Set up column filters
    setupColumnFilters(backupSheet);
    
    // Set up data validation for dropdowns
    setupDataValidation(backupSheet);
    
    // Show gridlines
    backupSheet.setHiddenGridlines(false);
    
    // Freeze header row
    backupSheet.setFrozenRows(1);
  } catch (error) {
    console.error('Error formatting backup spreadsheet:', error);
  }
}

/**
 * Creates a trigger to sync the backup daily
 */
function createDailyBackupTrigger() {
  // Delete any existing triggers with the same function name
  const triggers = ScriptApp.getProjectTriggers();
  for (const trigger of triggers) {
    if (trigger.getHandlerFunction() === 'syncFullBackup') {
      ScriptApp.deleteTrigger(trigger);
    }
  }
  
  // Create a new trigger to run daily at midnight
  ScriptApp.newTrigger('syncFullBackup')
    .timeBased()
    .everyDays(1)
    .atHour(0)
    .create();
    
  return 'Daily backup sync scheduled for midnight every day';
}

/**
 * Creates a trigger that will check for new form submissions every hour
 * and back them up to the backup spreadsheet
 */
function createHourlyBackupTrigger() {
  // Delete any existing triggers first to avoid duplicates
  const existingTriggers = ScriptApp.getProjectTriggers();
  existingTriggers.forEach(trigger => {
    if (trigger.getHandlerFunction() === 'checkAndBackupNewEntries') {
      ScriptApp.deleteTrigger(trigger);
    }
  });
  
  // Create new hourly trigger
  ScriptApp.newTrigger('checkAndBackupNewEntries')
    .timeBased()
    .everyHours(1)
    .create();
    
  return "Hourly backup trigger created successfully!";
}

/**
 * Checks for new entries in the main sheet and backs them up
 * This is designed to be run on a schedule to ensure no submissions are missed
 */
function checkAndBackupNewEntries() {
  try {
    // Skip if backup is not enabled or no backup sheet ID is configured
    if (!CONFIG.ENABLE_BACKUP || !CONFIG.BACKUP_SHEET_ID) {
      console.log('Backup check skipped - backup not enabled or no backup sheet ID configured');
      return;
    }
    
    const mainSheet = SpreadsheetApp.openById(CONFIG.SHEET_ID).getSheetByName(CONFIG.SHEET_NAME);
    if (!mainSheet || mainSheet.getLastRow() <= 1) return;
    
    const backupSheet = getOrCreateBackupSheet();
    if (!backupSheet) {
      console.error('Could not access backup sheet');
      return;
    }
    
    // Get all data from both sheets
    const mainData = mainSheet.getDataRange().getValues();
    const backupData = backupSheet.getLastRow() > 1 ? 
                      backupSheet.getDataRange().getValues() : 
                      [mainData[0]]; // Just headers if backup is empty
    
    // Skip headers
    const mainRows = mainData.slice(1);
    const backupRows = backupData.slice(1);
    
    // Create a set of existing backup entries (using email + timestamp as a unique key)
    const backupEntrySet = new Set();
    backupRows.forEach(row => {
      // Use timestamp (0) + email (2) as a simple unique identifier
      const uniqueKey = `${row[0]}_${row[2]}`;
      backupEntrySet.add(uniqueKey);
    });
    
    // Find entries in main sheet that aren't in backup
    let newEntriesCount = 0;
    mainRows.forEach(row => {
      const uniqueKey = `${row[0]}_${row[2]}`;
      if (!backupEntrySet.has(uniqueKey)) {
        // This entry doesn't exist in backup, so add it
        backupSheet.appendRow(row);
        
        // Format the newly added row
        const lastRow = backupSheet.getLastRow();
        if (lastRow % 2 === 0) {
          backupSheet.getRange(lastRow, 1, 1, row.length).setBackground('#f9f9f9');
        }
        
        newEntriesCount++;
      }
    });
    
    if (newEntriesCount > 0) {
      console.log(`Added ${newEntriesCount} new entries to backup`);
      
      // Format the backup spreadsheet
      formatBackupSpreadsheet();
    } else {
      console.log('No new entries to back up');
    }
  } catch (error) {
    console.error('Error checking for new entries:', error);
  }
}

/**
 * Tests the backup functionality
 * Run this function manually to verify that the backup system is working correctly
 * Also used automatically when new leads are created
 */
function testBackupSystem() {
  try {
    if (!CONFIG.ENABLE_BACKUP) {
      console.log("Backup is disabled in CONFIG");
      return "Backup is disabled in CONFIG. Set CONFIG.ENABLE_BACKUP to true.";
    }
    
    if (!CONFIG.BACKUP_SHEET_ID) {
      console.log("No backup sheet ID configured");
      return "No backup sheet ID configured. Please set CONFIG.BACKUP_SHEET_ID.";
    }
    
    // Test opening the backup spreadsheet
    let backupSpreadsheet;
    try {
      backupSpreadsheet = SpreadsheetApp.openById(CONFIG.BACKUP_SHEET_ID);
      if (!backupSpreadsheet) {
        console.error('Could not open backup spreadsheet - returned null');
        return "Failed to open backup spreadsheet - returned null. Check the BACKUP_SHEET_ID.";
      }
    } catch (error) {
      console.error('Error opening backup spreadsheet:', error);
      return `Error opening backup spreadsheet: ${error.toString()}. Check the BACKUP_SHEET_ID.`;
    }
    
    // Skip creating test entry when called automatically
    // Just run a full backup sync
    const syncResult = syncFullBackup();
    
    console.log('Backup completed after new lead creation');
    return "Backup completed successfully after new lead creation";
  } catch (error) {
    console.error('Error in backup system:', error);
    return `Error in backup system: ${error.toString()}`;
  }
}

/**
 * Manual test function for the backup system
 * Includes creating a test entry and setting up triggers
 */
function testBackupSystemManual() {
  try {
    // First run the regular backup test
    const basicResult = testBackupSystem();
    if (basicResult.includes("Error")) {
      return basicResult;
    }
    
    // Create test data entry
    const testData = {
      name: "Backup Test User",
      email: "backuptest@example.com",
      phone: "9876543210",
      age: "28",
      struggle: "Testing backup functionality",
      previousCoaching: "No",
      investmentLevel: "₹15,000 - Ready Looking for DIY/low cost programs.",
      referralSource: "Test"
    };
    
    // Add test data to backup
    const timestamp = new Date().toLocaleString('en-IN');
    createBackup(testData, timestamp);
    
    // Set up hourly trigger
    createHourlyBackupTrigger();
    
    return `Backup system test completed successfully!\n\nA test entry was added to your backup sheet.\nHourly backup trigger has been set up to check for new leads every hour.\n\nBackup is now configured to run automatically after each new lead submission.\n\nIf you don't see the test entry in your backup sheet, check the logs for errors.`;
  } catch (error) {
    console.error('Error in manual backup test:', error);
    return `Error in manual backup test: ${error.toString()}`;
  }
}

// This function will execute when the script is published as a web app
function doGet() {
  return HtmlService.createHtmlOutput(
    "<h1>Abhiram Fitness Form Handler</h1><p>This is a backend service for processing form submissions. Please submit forms from the website.</p>"
  );
}
