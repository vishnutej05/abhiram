/**
 * Instagram Posts Manual Entry - Google Apps Script
 * 
 * Simple manual entry system for Instagram posts
 * Perfect for @coachpotate's 4 weekly posts
 * 
 * Instructions:
 * 1. Update the 4 posts below every Sunday
 * 2. Run addPostsToSheet() to update your Google Sheet
 * 3. Run setupWeeklyReminder() ONCE to get weekly email reminders
 */

// Configuration - Update with your email
const CONFIG = {
  sheetName: 'Instagram Posts',
  notificationEmail: 'tejvishnu05email@gmail.com',  // Update with your email
  username: 'coachpotate'
};

// ========================
// MANUAL POSTS - UPDATE THESE 4 POSTS EVERY SUNDAY
// ========================
const posts = [
  {
    imageUrl: 'PASTE_IMAGE_URL_HERE',
    postUrl: 'https://www.instagram.com/p/POST_CODE_HERE/',
    caption: 'PASTE_CAPTION_HERE',
    likes: '0'
  },
  {
    imageUrl: 'PASTE_IMAGE_URL_HERE',
    postUrl: 'https://www.instagram.com/p/POST_CODE_HERE/',
    caption: 'PASTE_CAPTION_HERE',
    likes: '0'
  },
  {
    imageUrl: 'PASTE_IMAGE_URL_HERE',
    postUrl: 'https://www.instagram.com/p/POST_CODE_HERE/',
    caption: 'PASTE_CAPTION_HERE',
    likes: '0'
  },
  {
    imageUrl: 'PASTE_IMAGE_URL_HERE',
    postUrl: 'https://www.instagram.com/p/POST_CODE_HERE/',
    caption: 'PASTE_CAPTION_HERE',
    likes: '0'
  }
];

/**
 * MAIN FUNCTION - Run this after updating posts above
 * Adds your posts to the Google Sheet
 */
function addPostsToSheet() {
  console.log('Adding posts to Google Sheet...');
  
  try {
    // Get or create the sheet
    const sheet = getOrCreateSheet();
    
    // Clear old data (keep headers)
    clearSheetData(sheet);
    
    // Convert posts to sheet format
    const sheetData = posts.map((post, index) => [
      `post_${index + 1}_${Date.now()}`, // ID
      post.imageUrl,                      // Image URL
      post.postUrl,                       // Post URL
      post.caption,                       // Caption
      post.likes,                         // Likes
      'image',                            // Type (always image for simplicity)
      `Post from @${CONFIG.username}`,    // Alt Text
      new Date().toISOString()            // Timestamp
    ]);
    
    // Write to sheet
    if (sheetData.length > 0) {
      const dataRange = sheet.getRange(2, 1, sheetData.length, 8);
      dataRange.setValues(sheetData);
      sheet.autoResizeColumns(1, 8);
    }
    
    console.log('Successfully added ' + posts.length + ' posts to Google Sheet!');
    console.log('View your sheet: ' + SpreadsheetApp.getActiveSpreadsheet().getUrl());
    
    // Send success email
    sendSuccessEmail(posts.length);
    
    return posts.length;
    
  } catch (error) {
    console.error('Error adding posts:', error.toString());
    sendErrorEmail(error.toString());
    throw error;
  }
}

/**
 * WEEKLY REMINDER - Run this ONCE to set up Sunday reminders
 * Sends you an email every Sunday to update the posts
 */
function setupWeeklyReminder() {
  console.log('Setting up weekly reminder...');
  
  try {
    // Delete existing triggers
    const triggers = ScriptApp.getProjectTriggers();
    triggers.forEach(trigger => {
      if (trigger.getHandlerFunction() === 'sendWeeklyReminder') {
        ScriptApp.deleteTrigger(trigger);
      }
    });
    
    // Create new weekly trigger (Sunday at 9 AM)
    ScriptApp.newTrigger('sendWeeklyReminder')
      .timeBased()
      .everyWeeks(1)
      .onWeekDay(ScriptApp.WeekDay.SUNDAY)
      .atHour(9)
      .create();
    
    console.log('Weekly reminder set up! You\'ll get emails every Sunday at 9 AM');
    
    // Send confirmation email
    sendSetupConfirmationEmail();
    
  } catch (error) {
    console.error('Error setting up reminder:', error.toString());
    throw error;
  }
}

/**
 * Weekly reminder email (triggered automatically)
 */
function sendWeeklyReminder() {
  const subject = 'Weekly Reminder: Update Instagram Posts for @coachpotate';
  const body = `Hi!

Time to update your Instagram posts for @${CONFIG.username}!

TO UPDATE:
1. Go to script.google.com and open your Instagram Posts Manager
2. Visit @${CONFIG.username} Instagram profile
3. For each of the 4 latest posts:
   • Right-click image → "Copy image address"
   • Copy post URL from address bar
   • Copy caption text
   • Note likes count
4. Update the posts array in the script
5. Run addPostsToSheet() to update your Google Sheet

Your Google Sheet: ${SpreadsheetApp.getActiveSpreadsheet().getUrl()}
@${CONFIG.username}: https://www.instagram.com/${CONFIG.username}/

This reminder comes every Sunday at 9:00 AM.

Happy posting!`;
  
  try {
    GmailApp.sendEmail(CONFIG.notificationEmail, subject, body);
    console.log('Weekly reminder email sent');
  } catch (error) {
    console.error('Failed to send weekly reminder:', error);
  }
}

/**
 * Get or create the Google Sheet
 */
function getOrCreateSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(CONFIG.sheetName);
  
  if (!sheet) {
    sheet = spreadsheet.insertSheet(CONFIG.sheetName);
  }
  
  // Set up headers if empty
  if (sheet.getLastRow() === 0) {
    const headers = [
      'ID', 'Image URL', 'Post URL', 'Caption', 'Likes', 'Type', 'Alt Text', 'Timestamp'
    ];
    
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setValues([headers]);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#f1f3f4');
    
    console.log('Sheet headers created');
  }
  
  return sheet;
}

/**
 * Clear existing data (keep headers)
 */
function clearSheetData(sheet) {
  const lastRow = sheet.getLastRow();
  if (lastRow > 1) {
    sheet.deleteRows(2, lastRow - 1);
  }
}

/**
 * Send success notification
 */
function sendSuccessEmail(postCount) {
  const subject = 'Instagram Posts Updated - ' + postCount + ' Posts Added';
  const body = `Great job!

Successfully updated ${postCount} Instagram posts for @${CONFIG.username}.

View your updated data: ${SpreadsheetApp.getActiveSpreadsheet().getUrl()}
Updated: ${new Date().toLocaleString()}

Your website will now show the latest posts!`;
  
  try {
    GmailApp.sendEmail(CONFIG.notificationEmail, subject, body);
    console.log('Success email sent');
  } catch (error) {
    console.error('Failed to send success email:', error);
  }
}

/**
 * Send error notification
 */
function sendErrorEmail(errorMessage) {
  const subject = 'Instagram Posts Update Failed';
  const body = `Something went wrong while updating Instagram posts:

Error: ${errorMessage}

Time: ${new Date().toLocaleString()}
Sheet: ${SpreadsheetApp.getActiveSpreadsheet().getUrl()}

Please check the Google Apps Script logs for more details.`;
  
  try {
    GmailApp.sendEmail(CONFIG.notificationEmail, subject, body);
    console.log('Error email sent');
  } catch (error) {
    console.error('Failed to send error email:', error);
  }
}

/**
 * Send setup confirmation
 */
function sendSetupConfirmationEmail() {
  const subject = 'Instagram Posts Manager - Setup Complete!';
  const body = `Instagram Posts Manager is now set up!

Weekly reminders: Every Sunday at 9:00 AM
Target account: @${CONFIG.username}
Google Sheet: ${SpreadsheetApp.getActiveSpreadsheet().getUrl()}

WHAT HAPPENS NOW:
1. You'll get an email reminder every Sunday
2. Update the 4 posts in your script
3. Run addPostsToSheet() to update your sheet
4. Your website automatically shows the new posts

Next reminder: This Sunday at 9:00 AM

Happy posting!`;
  
  try {
    GmailApp.sendEmail(CONFIG.notificationEmail, subject, body);
    console.log('Setup confirmation email sent');
  } catch (error) {
    console.error('Failed to send setup email:', error);
  }
}

/**
 * Test email functionality
 */
function testEmail() {
  sendSuccessEmail(4);
  console.log('Test email sent');
}

/**
 * Get current sheet statistics
 */
function getSheetStats() {
  try {
    const sheet = getOrCreateSheet();
    const lastRow = sheet.getLastRow();
    
    const stats = {
      totalRows: lastRow,
      totalPosts: Math.max(0, lastRow - 1),
      lastUpdate: lastRow > 1 ? sheet.getRange(2, 8).getValue() : 'No posts yet',
      sheetUrl: SpreadsheetApp.getActiveSpreadsheet().getUrl()
    };
    
    console.log('Sheet Statistics:', stats);
    return stats;
    
  } catch (error) {
    console.error('Error getting stats:', error);
    return null;
  }
}

/**
 * Remove all reminders
 */
function removeReminders() {
  const triggers = ScriptApp.getProjectTriggers();
  triggers.forEach(trigger => ScriptApp.deleteTrigger(trigger));
  console.log('All reminders removed');
}

/**
 * Quick update function for testing
 */
function quickUpdate() {
  console.log('Quick update test...');
  addPostsToSheet();
}