// ============================================================
// AgereArt — Google Apps Script Web App
// Deploy this as a Web App at:
//   https://script.google.com/  → New project → paste this code
//   → Deploy → New deployment → Web App
//   → Execute as: Me, Who has access: Anyone
// Copy the deployment URL and paste it as APPS_SCRIPT_URL in script.js
// ============================================================

const SHEET_NAME = 'Zamówienia';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow([
        'Data', 'Referencja', 'Imię i nazwisko', 'Email', 'Telefon',
        'Adres', 'Miasto', 'Kod pocztowy', 'Produkty',
        'Suma produktów (zł)', 'Wysyłka (zł)', 'Łącznie (zł)'
      ]);
      sheet.getRange(1, 1, 1, 12).setFontWeight('bold');
    }

    sheet.appendRow([
      data.timestamp,
      data.reference,
      data.name,
      data.email,
      data.phone,
      data.address,
      data.city,
      data.postal,
      data.items,
      data.productTotal,
      data.shipping,
      data.total,
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok', reference: data.reference }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
