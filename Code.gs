function myFunction() {
  const recipientEmail = "recipient@example.com"; // Replace with the actual recipient's email
  const subject = "subject";
  const html = HtmlService.createTemplateFromFile("index").evaluate().getContent();
  var image = DriveApp.getFileById("--choose--your-custome--image").getAs("image/--image-type--");
  var logo = {"template-image": image};
  GmailApp.createDraft(recipientEmail, subject,html, {htmlBody: html, inlineImages: logo});
}
