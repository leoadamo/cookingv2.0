<?php

	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	header('Content-Type: application/json; charset="utf-8"');
	header('Access-Control-Allow-Methods: *');
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Headers: *');

	require_once('../connect.php');
	require_once('../contato/funcoes.php');

	$data = json_decode(file_get_contents('php://input'));

	$nome = $data->name;
	$email = $data->email;
	$assunto = $data->about;
	$message = $data->message;

	$array = array($nome, $email, $assunto, $message);
	$contact = newContact($pdo, $array);

	if($contact) {
		require_once('../PHPMailer/src/PHPMailer.php');
		require_once('../PHPMailer/src/Exception.php');
		require_once('../PHPMailer/src/SMTP.php');

		$mail = new PHPMailer();
		$mail->SetLanguage("br");
		$mail->IsSMTP();
		$mail->isHTML(true);
		$mail->SMTPDebug = 0; //exibe erros e mensagens, 0 não exibe nada
		$mail->SMTPAuth = true;
		$mail->SMTPSecure = "tls";

		$mail->Host = "smtp.gmail.com";
		$mail->Port = 587;
		$mail->Username = "cookingv2.0@gmail.com";
		$mail->Password = "Senha5Cook";
		$mail->CharSet = "utf-8";

		$mail->From = "cookingv2.0@gmail.com"; //remetente
		$mail->FromName = "Cooking";
		$mail->AddAddress($email);

		$mail->Subject = "Contato - Cooking";
		$mail->Body = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

									<html xmlns="http://www.w3.org/1999/xhtml">
										<!--[if gte mso 15]>
											<xml>
											<o:OfficeDocumentSettings>
											<o:AllowPNG/>
											<o:PixelsPerInch>96</o:PixelsPerInch>
											</o:OfficeDocumentSettings>
											</xml>
											<![endif]-->

										<head>
											<meta name="x-apple-disable-message-reformatting">
											<meta content="IE=edge" http-equiv="X-UA-Compatible">
											<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
											<meta name="viewport" content="width=device-width,initial-scale=1.0">
											<meta name="format-detection" content="telephone=no">
											<meta name="format-detection" content="date=no">
											<meta name="format-detection" content="address=no">
											<meta name="format-detection" content="email=no">
											<meta charset="UTF-8">
											<title>CookingV2.0 - Contato</title>
											<style type="text/css">
												table td {
													border-collapse: collapse;
												}

												#outlook a {
													padding: 0;
												}

												[owa] .email-container {
													width: 100% !important;
													margin: auto !important;
												}

												.ExternalClass {
													width: 100%;
												}

												.ExternalClass,
												.ExternalClass td {
													line-height: 100%;
												}

												div,
												p,
												a,
												li,
												td {
													-webkit-text-size-adjust: none;
												}

												[class="full-85-no-padding"] {
													margin: 0 auto;
												}

												[class="full"] {
													margin: 0 auto;
												}

												img {
													margin: 0;
													border: none;
												}

												a {
													text-decoration: none;
													text-align: left;
													font-size: 14px;
													font-family: arial;
													font-weight: 300;
													line-height: 15px;
													color: #878787;
												}

												@media only screen and (max-width: 415px) {
													body {
														overflow-x: hidden;
													}
												}

												.wrapper {
													width: 100%;
													table-layout: fixed;
													-webkit-text-size-adjust: 100%;
													-ms-text-size-adjust: 100%;
												}

												.webkit {
													max-width: 600px;
												}
											</style>
										</head>

										<body leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0"
											style="height:100%;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;width:100%;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;background-color: #F0F0F0;font-family:Helvetica;">
											<center class="wrapper"
												style="width:100%;table-layout:fixed;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;border: 0;background-color: #F0F0F0 !important;">
												<table cellpadding="0" cellspacing="0"
													style="border: 0px; padding: 0px; margin: 0px; position: absolute; display: none; float: left">
													<tbody>
														<tr>
															<td height="1" style="font-size: 1px; line-height: 1px; padding: 0px;"></td>
														</tr>
													</tbody>
												</table>
												<div class="webkit" style="max-width: 600px;">
													<!--Spacer Start-->
													<table border="0" cellpadding="0" cellspacing="0"
														style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" width="100%" align="center">
														<tbody>
															<tr>
																<td valign="top">
																	<table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0"
																		style="margin: 0; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" width="600"
																		align="center">
																		<tbody>
																			<tr>
																				<td height="55" width="600"><!--  --></td>
																			</tr>
																		</tbody>
																	</table>
																</td>
															</tr>
														</tbody>
													</table>
													<!--Spacer End-->

													<!--Title Start-->
													<table border="0" cellpadding="0" cellspacing="0"
														style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" width="100%" align="center">
														<tbody>
															<tr>
																<td valign="top">
																	<table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0"
																		style="margin: 0 auto; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"
																		width="600" align="center">
																		<tbody>
																			<tr>
																				<td height="23" width="100"><!--  --></td>
																				<td height="23" width="75"><!--  --></td>
																				<td height="23" width="250"  style="font-family: Arial, Helvetica, sans-serif; font-size: 30px; letter-spacing: 0; line-height: 23px; ;text-align: center; color: #404040;">Olá, '.$nome.'!<br/><br/>Estamos quase lá!</td>
																				<td height="23" width="75"><!--  --></td>
																				<td height="23" width="100"><!--  --></td>
																			</tr>
																		</tbody>
																	</table>
																</td>
															</tr>
														</tbody>
													</table>
													<!--Title End-->

													<!--Spacer Start-->
													<table border="0" cellpadding="0" cellspacing="0"
														style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" width="100%" align="center">
														<tbody>
															<tr>
																<td valign="top">
																	<table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0"
																		style="margin: 0; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" width="600"
																		align="center">
																		<tbody>
																			<tr>
																				<td width="600" height="24"><!--  --></td>
																			</tr>
																		</tbody>
																	</table>
																</td>
															</tr>
														</tbody>
													</table>
													<!--Spacer End-->

													<!--Paragraph Start-->
													<table border="0" cellpadding="0" cellspacing="0"
														style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" width="100%" align="center">
														<tbody>
															<tr>
																<td valign="top">
																	<table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0"
																		style="margin: 0; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" width="600"
																		align="center">
																		<tbody>
																			<tr>
																				<td width="100" height="46"><!--  --></td>
																				<td width="400" height="46" style="font-size: 16px; color: #404040; letter-spacing: 0; text-align: center; line-height: 23px;">Sua mensagem foi enviada e estamos verificando. <br /> Entraremos em contato o mais rápido possível.</td>
																				<td width="100" height="46"><!--  --></td>
																			</tr>
																		</tbody>
																	</table>
																</td>
															</tr>
														</tbody>
													</table>
													<!--Paragraph End-->

													<!--Spacer Start-->
													<table border="0" cellpadding="0" cellspacing="0"
														style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" width="100%" align="center">
														<tbody>
															<tr>
																<td valign="top">
																	<table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0"
																		style="margin: 0; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" width="600"
																		align="center">
																		<tbody>
																			<tr>
																				<td width="600" height="20"><!--  --></td>
																			</tr>
																		</tbody>
																	</table>
																</td>
															</tr>
														</tbody>
													</table>
													<!--Spacer End-->

													<!--Link Start-->
													<table border="0" cellpadding="0" cellspacing="0"
														style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" width="100%" align="center">
														<tbody>
															<tr>
																<td valign="top">
																	<table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0"
																		style="margin: 0; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" width="600"
																		align="center">
																		<tbody>
																			<tr>
																				<td width="164" height="18"><!--  --></td>
																				<td width="273" height="18" style="text-align: center;"><a style="font-family: Arial, Helvetica, sans-serif; font-size: 16px; font-weight: bold; line-height: 18px; color: #1685F4; text-decoration: underline;" href="#" target="_blank">Acessar o Cooking</a></td>
																				<td width="163" height="18"><!--  --></td>
																			</tr>
																		</tbody>
																	</table>
																</td>
															</tr>
														</tbody>
													</table>
													<!--Link End-->

													<!--Spacer Start-->
													<table border="0" cellpadding="0" cellspacing="0"
														style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" width="100%" align="center">
														<tbody>
															<tr>
																<td valign="top">
																	<table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0"
																		style="margin: 0; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" width="600"
																		align="center">
																		<tbody>
																			<tr>
																				<td width="600" height="65"><!--  --></td>
																			</tr>
																		</tbody>
																	</table>
																</td>
															</tr>
														</tbody>
													</table>
													<!--Spacer End-->

													<!--Spacer Start-->
													<table border="0" cellpadding="0" cellspacing="0"
														style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" width="100%" align="center">
														<tbody>
															<tr>
																<td valign="top">
																	<table bgcolor="#F5F5F5" border="0" cellpadding="0" cellspacing="0"
																		style="margin: 0; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" width="600"
																		align="center">
																		<tbody>
																			<tr>
																				<td width="600" height="26"><!--  --></td>
																			</tr>
																		</tbody>
																	</table>
																</td>
															</tr>
														</tbody>
													</table>
													<!--Spacer End-->

													<!--Footer Start-->
													<table border="0" cellpadding="0" cellspacing="0"
														style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" width="100%" align="center">
														<tbody>
															<tr>
																<td valign="top">
																	<table bgcolor="#F5F5F5" border="0" cellpadding="0" cellspacing="0"
																		style="margin: 0; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" width="600"
																		align="center">
																		<tbody>
																			<tr>
																				<td width="84" height="37"><!--  --></td>
																				<td width="432" height="37" style="font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: #000000; text-align: center; line-height: 17px;">Este e-mail foi enviado para informar sobre o seu envio de mensagem no Portal Cooking. Por favor, não responda.</td>
																				<td width="84" height="37"><!--  --></td>
																			</tr>
																		</tbody>
																	</table>
																</td>
															</tr>
														</tbody>
													</table>
													<!--Footer End-->

													<!--Spacer Start-->
													<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" width="100%" align="center">
														<tbody>
															<tr>
																<td valign="top">
																	<table bgcolor="#F5F5F5" border="0" cellpadding="0" cellspacing="0" style="margin: 0; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" width="600" align="center">
																		<tbody>
																			<tr>
																				<td width="600" height="26"><!--  --></td>
																			</tr>
																		</tbody>
																	</table>
																</td>
															</tr>
														</tbody>
													</table>
													<!--Spacer End-->
												</div>
											</center>
										</body>
									</html>';

		if(!$mail->Send()){
			$message = $mail->ErrorInfo;
			echo(json_encode(['success' => false, 'message' => $message]));
		} else {
			echo(json_encode(['success' => true, 'message' => 'Seu contato foi enviado com sucesso!']));
		}
	}
	else echo(json_encode(['success' => false, 'message' => 'Erro ao enviar sua mensagem, tente novamente!']));
?>
