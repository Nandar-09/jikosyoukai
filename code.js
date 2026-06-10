function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
      .setTitle('自己紹介フォーム')
      .addMetaTag('viewport', 'width=device-width, initial-scale=1'); // スマホ対応
}

// フォームから送信されたデータを受け取り、スプレッドシートに保存する処理
function saveData(formObject) {
  // スクリプトが紐づいているスプレッドシートの現在アクティブなシートを取得
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const timestamp = new Date();

  // 取得したデータを新しい行として追加
  sheet.appendRow([
    timestamp,
    formObject.name,
    formObject.country,
    formObject.holiday
  ]);

  return "success";
}

