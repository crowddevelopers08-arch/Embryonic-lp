// Open your Google Sheet, then go to Extensions > Apps Script, paste this
// file in, and deploy as a Web app. Because this script is opened from
// inside the Sheet, it's bound to that Sheet automatically — no ID needed.
const SHEET_NAME = 'Submissions';
const HEADERS = ['Timestamp', 'Source', 'Name', 'Phone', 'Concern', 'Location', 'URL', 'TeleCRM'];

function doGet() {
  return output({ success: true, message: 'Embryonic submissions API is running' });
}

function doPost(e) {
  try {
    const data = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    if (!data.name || !data.phone || !data.concern) {
      return output({ success: false, error: 'Name, phone, and concern are required' });
    }

    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);

    sheet.appendRow([
      data.timestamp || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      data.source || 'Hero Consultation Form',
      data.name || '',
      data.phone || '',
      data.concern || '',
      data.location || '',
      data.pageUrl || data.url || '',
      data.telecrm || ''
    ]);

    return output({ success: true, message: 'Submission saved successfully' });
  } catch (error) {
    return output({ success: false, error: String(error) });
  }
}

function output(value) {
  return ContentService.createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
