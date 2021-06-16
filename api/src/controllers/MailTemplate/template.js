const template = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
<head>
<meta charset="UTF-8">
<meta content="width=device-width, initial-scale=1" name="viewport">
<meta name="x-apple-disable-message-reformatting">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta content="telephone=no" name="format-detection">
<title>Nuevo mensaje</title>
<!--[if (mso 16)]>
<style type="text/css">
a {text-decoration: none;}
</style>
<![endif]-->
<!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
<!--[if gte mso 9]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG></o:AllowPNG>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
<style type="text/css">
#outlook a {
padding:0;
}
.ExternalClass {
width:100%;
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
line-height:100%;
}
.box-shadow {
box-shadow:0 0 7px 1px #5050501f;
}
.es-button {
mso-style-priority:100!important;
text-decoration:none!important;
}
a[x-apple-data-detectors] {
color:inherit!important;
text-decoration:none!important;
font-size:inherit!important;
font-family:inherit!important;
font-weight:inherit!important;
line-height:inherit!important;
}
.es-desk-hidden {
display:none;
float:left;
overflow:hidden;
width:0;
max-height:0;
line-height:0;
mso-hide:all;
}
[data-ogsb] .es-button {
border-width:0!important;
padding:10px 25px 10px 25px!important;
}
[data-ogsb] .es-button.es-button-1 {
padding:10px 25px!important;
}
@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1 { font-size:25px!important; text-align:center; line-height:120%!important } h2 { font-size:22px!important; text-align:center; line-height:120%!important } h3 { font-size:20px!important; text-align:center; line-height:120%!important } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:25px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:22px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:13px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:11px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button, button.es-button { font-size:14px!important; display:block!important; border-left-width:0px!important; border-right-width:0px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p10r { padding-right:10px!important } .es-m-p10l { padding-left:10px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }
</style>
</head>
<body style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
<div class="es-wrapper-color" style="background-color:#F6F6F6">
<!--[if gte mso 9]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
<v:fill type="tile" color="#f6f6f6"></v:fill>
</v:background>
<![endif]-->
<table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top">
<tr style="border-collapse:collapse">
<td valign="top" style="padding:0;Margin:0">
<table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
<tr style="border-collapse:collapse">
<td class="es-info-area" align="center" style="padding:0;Margin:0">
<table bgcolor="transparent" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:590px">
<tr style="border-collapse:collapse">
<td align="left" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px">
<table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td align="center" valign="top" style="padding:0;Margin:0;width:550px">
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td class="es-infoblock" align="left" style="padding:0;Margin:0;line-height:14px;font-size:12px;color:#CCCCCC"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:14px;color:#CCCCCC;font-size:12px">Put your preheader text here</p></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0">
<table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:590px">
<tr style="border-collapse:collapse">
<td align="left" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px">
<!--[if mso]><table style="width:550px" cellpadding="0"
cellspacing="0"><tr><td style="width:263px" valign="top"><![endif]-->
<table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
<tr style="border-collapse:collapse">
<td align="left" style="padding:0;Margin:0;width:263px">
<table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0;display:none"></td>
</tr>
</table></td>
</tr>
</table>
<!--[if mso]></td><td style="width:20px"></td><td style="width:267px" valign="top"><![endif]-->
<table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
<tr style="border-collapse:collapse">
<td align="left" style="padding:0;Margin:0;width:267px">
<table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td class="es-m-txt-c" align="right" style="padding:0;Margin:0;padding-top:10px"><span class="es-button-border" style="border-style:solid;border-color:#0000FF;background:#0000FF;border-width:0px;display:inline-block;border-radius:0px;width:auto"><a href="https://viewstripo.email/" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:18px;border-style:solid;border-color:#0000FF;border-width:10px 25px 10px 25px;display:inline-block;background:#0000FF;border-radius:0px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:22px;width:auto;text-align:center">Contact us</a></span></td>
</tr>
</table></td>
</tr>
</table>
<!--[if mso]></td></tr></table><![endif]--></td>
</tr>
</table></td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0;background-color:transparent" bgcolor="transparent">
<table bgcolor="#090101" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#090101;background-repeat:no-repeat;width:590px;background-image:url(https://pkcotd.stripocdn.email/content/guids/CABINET_d6b02eef486e424923e42d33952bbae0/images/79241561453270953.jpg);background-position:center top" background="https://pkcotd.stripocdn.email/content/guids/CABINET_d6b02eef486e424923e42d33952bbae0/images/79241561453270953.jpg">
<tr style="border-collapse:collapse">
<td align="left" style="padding:0;Margin:0;padding-top:20px;background-position:center top">
<table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td align="left" style="padding:0;Margin:0;width:590px">
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr class="es-mobile-hidden" style="border-collapse:collapse">
<td align="center" height="47" style="padding:0;Margin:0"></td>
</tr>
<tr style="border-collapse:collapse">
<td align="left" class="es-m-txt-l" style="padding:0;Margin:0;padding-left:25px;padding-right:25px"><h1 style="Margin:0;line-height:45px;mso-line-height-rule:exactly;font-family:verdana, geneva, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#FFFFFF">Restore password?</h1><h1 style="Margin:0;line-height:45px;mso-line-height-rule:exactly;font-family:verdana, geneva, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#FFFFFF">Your secret code!</h1></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
<tr style="border-collapse:collapse">
<td align="left" style="padding:0;Margin:0;padding-top:10px;background-position:center top">
<table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td align="center" valign="top" style="padding:0;Margin:0;width:590px">
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td align="left" style="Margin:0;padding-bottom:10px;padding-top:15px;padding-left:20px;padding-right:20px"><span class="es-button-border" style="border-style:solid;border-color:#0000FF;background:#0000FF;border-width:0px;display:inline-block;border-radius:0px;width:auto"><a href="https://http//localhost:3000/recovery" class="es-button es-button-1" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:18px;border-style:solid;border-color:#0000FF;border-width:10px 25px;display:inline-block;background:#0000FF;border-radius:0px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:22px;width:auto;text-align:center">Reset Password</a></span></td>
</tr>
<tr style="border-collapse:collapse">
<td align="left" class="es-m-txt-l" style="padding:0;Margin:0;padding-left:25px;padding-right:25px"><h5 style="Margin:0;line-height:150%;mso-line-height-rule:exactly;font-family:verdana, geneva, sans-serif;color:#FFFFFF">Click on the button and</h5><h5 style="Margin:0;line-height:150%;mso-line-height-rule:exactly;font-family:verdana, geneva, sans-serif;color:#FFFFFF">enter the secret code</h5></td>
</tr>
<tr style="border-collapse:collapse">
<td align="center" height="58" style="padding:0;Margin:0"></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0">
<table bgcolor="#ffffff" class="es-footer-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:590px">
<tr style="border-collapse:collapse">
<td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px;background-position:center center">
<!--[if mso]><table style="width:550px" cellpadding="0" cellspacing="0"><tr><td style="width:265px" valign="top"><![endif]-->
<table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
<tr style="border-collapse:collapse">
<td class="es-m-p20b" align="center" valign="top" style="padding:0;Margin:0;width:265px">
<table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:center top" role="presentation">
<tr style="border-collapse:collapse">
<td align="left" style="padding:0;Margin:0"><h4 style="Margin:0;line-height:25px;mso-line-height-rule:exactly;font-family:verdana, geneva, sans-serif;color:#0000FF;font-size:21px">Follow Us.</h4></td>
</tr>
<tr style="border-collapse:collapse">
<td align="left" style="padding:0;Margin:0;padding-top:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#090101;font-size:14px">It is a long established fact that a reader will be distracted by the readable&nbsp;</p></td>
</tr>
</table></td>
</tr>
</table>
<!--[if mso]></td><td style="width:20px"></td><td style="width:265px" valign="top"><![endif]-->
<table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
<tr style="border-collapse:collapse">
<td align="left" style="padding:0;Margin:0;width:265px">
<table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:center top" role="presentation">
<tr style="border-collapse:collapse">
<td align="left" style="padding:0;Margin:0"><h4 style="Margin:0;line-height:25px;mso-line-height-rule:exactly;font-family:verdana, geneva, sans-serif;color:#0000FF;font-size:21px">Contact Us.</h4></td>
</tr>
<tr style="border-collapse:collapse">
<td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#090101;font-size:14px">It is a long established fact that a reader will be distracted by the readable&nbsp;</p></td>
</tr>
</table></td>
</tr>
</table>
<!--[if mso]></td></tr></table><![endif]--></td>
</tr>
<tr style="border-collapse:collapse">
<td align="left" style="padding:0;Margin:0;padding-bottom:10px;padding-left:20px;padding-right:20px;background-position:center top">
<!--[if mso]><table style="width:550px" cellpadding="0" cellspacing="0"><tr><td style="width:265px" valign="top"><![endif]-->
<table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
<tr style="border-collapse:collapse">
<td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:265px">
<table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:center center" role="presentation">
<tr style="border-collapse:collapse">
<td align="left" bgcolor="transparent" style="padding:0;Margin:0;padding-top:10px;font-size:0;background-color:transparent">
<table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td align="center" valign="top" style="padding:0;Margin:0;padding-right:10px"><img title="Facebook" src="https://pkcotd.stripocdn.email/content/assets/img/social-icons/logo-black/facebook-logo-black.png" alt="Fb" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td>
<td align="center" valign="top" style="padding:0;Margin:0;padding-right:10px"><img title="Twitter" src="https://pkcotd.stripocdn.email/content/assets/img/social-icons/logo-black/twitter-logo-black.png" alt="Tw" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td>
<td align="center" valign="top" style="padding:0;Margin:0;padding-right:10px"><img title="Instagram" src="https://pkcotd.stripocdn.email/content/assets/img/social-icons/logo-black/instagram-logo-black.png" alt="Inst" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td>
<td align="center" valign="top" style="padding:0;Margin:0"><img title="Youtube" src="https://pkcotd.stripocdn.email/content/assets/img/social-icons/logo-black/youtube-logo-black.png" alt="Yt" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table>
<!--[if mso]></td><td style="width:20px"></td><td style="width:265px" valign="top"><![endif]-->
<table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
<tr style="border-collapse:collapse">
<td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:265px">
<table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:center top" role="presentation">
<tr style="border-collapse:collapse">
<td style="padding:0;Margin:0">
<table class="es-table-not-adapt" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td valign="top" align="center" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px;padding-right:5px;font-size:0"><img src="https://pkcotd.stripocdn.email/content/guids/CABINET_d6b02eef486e424923e42d33952bbae0/images/48411561457221481.png" alt width="21" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td>
<td align="left" style="padding:0;Margin:0">
<table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#090101;font-size:14px"><b><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#0000FF;font-size:14px" href="tel:123456789">123456789</a></b></p></td>
</tr>
</table></td>
</tr>
<tr style="border-collapse:collapse">
<td valign="top" align="center" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px;padding-right:5px;font-size:0"><img src="https://pkcotd.stripocdn.email/content/guids/CABINET_d6b02eef486e424923e42d33952bbae0/images/34561561457385078.png" alt width="21" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td>
<td align="left" style="padding:0;Margin:0">
<table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#090101;font-size:14px"><strong><a target="_blank" href="mailto:your@mail.com" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#0000FF;font-size:14px">your@mail.com</a></strong></p></td>
</tr>
</table></td>
</tr>
<tr style="border-collapse:collapse">
<td valign="top" align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px;padding-right:5px;font-size:0"><img src="https://pkcotd.stripocdn.email/content/guids/CABINET_d6b02eef486e424923e42d33952bbae0/images/9911561457458673.png" alt width="21" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td>
<td align="left" style="padding:0;Margin:0">
<table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#0000FF;font-size:14px"><strong>San Francisco</strong></p></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table>
<!--[if mso]></td></tr></table><![endif]--></td>
</tr>
</table></td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0">
<table bgcolor="#FFFFFF" class="es-footer-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:590px">
<tr style="border-collapse:collapse">
<td align="left" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px;background-position:center top">
<table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td align="center" valign="top" style="padding:0;Margin:0;width:550px">
<table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:center top" role="presentation">
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;color:#999999;font-size:12px">Lorem ipgsum dolor sit amet, consectetur adipiscing <br></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;color:#999999;font-size:12px">elit. Pellentesque vitae interdum ligula.</p></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0">
<table bgcolor="transparent" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:590px">
<tr style="border-collapse:collapse">
<td align="left" style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px;background-position:left top">
<table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td valign="top" align="center" style="padding:0;Margin:0;width:550px">
<table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td class="es-infoblock made_with" align="center" style="padding:0;Margin:0;line-height:120%;font-size:0;color:#CCCCCC"><a target="_blank" href="https://viewstripo.email/?utm_source=templates&utm_medium=email&utm_campaign=sport2&utm_content=password_reset" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px"><img src="https://pkcotd.stripocdn.email/content/guids/CABINET_09023af45624943febfa123c229a060b/images/7911561025989373.png" alt width="125" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table>
</div>
</body>
</html>

`
module.exports= {
    template
}