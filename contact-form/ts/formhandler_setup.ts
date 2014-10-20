plugin.Tx_Formhandler.settings.predef.formhandler-basic-contactform {

	#debug = 1

    formValuesPrefix = contact

	name = Kontakt Formular
	
	langFile.1 = TEXT
	#langFile.1.value = fileadmin/t3_boilerplate/contact-form/lang/lang.xml
	langFile.1.value = fileadmin/{$Modul.projekt_name}/contact-form/lang/lang.xml

	templateFile = TEXT
	#templateFile.value = fileadmin/t3_boilerplate/contact-form/html/contact-form.html
	templateFile.value = fileadmin/{$Modul.projekt_name}/contact-form/html/contact-form.html

	masterTemplateFile = TEXT
	#masterTemplateFile.value = fileadmin/t3_boilerplate/contact-form/html/mastertemplate.html
	masterTemplateFile.value = fileadmin/{$Modul.projekt_name}/contact-form/html/mastertemplate.html

	singleErrorTemplate {
		totalWrap = <div class="error">|</div>
		singleWrap = <span class="message">|</span>
	}

	validators {
		1.class = Validator_Default
		1.config.fieldConf {
			name.errorCheck.1 = required
			forename.errorCheck.1 = required
			email.errorCheck.1 = required
			email.errorCheck.2 = email
			phone.errorCheck.1 = required
			message.errorCheck.1 = required
		}
	}

	#ajax {
    #    class = AjaxHandler_JQuery
    #        config {
    #            ajaxSubmit = 1
    #            jsPosition = footer
    #    }
    #}

	finishers {

		1.class = Finisher_Mail
		1.config {
			checkBinaryCrLf = message
			admin {
				templateFile = TEXT
				templateFile.value = {$formhandlerExamples.basic.contact-form.rootPath}/html/contact-form-email-admin.html
				sender_email = {$formhandlerExamples.basic.contact-form.email.admin.sender_email}
				to_email = {$formhandlerExamples.basic.contact-form.email.admin.to_email}
				subject = TEXT
				subject.data = LLL:{$formhandlerExamples.basic.contact-form.rootPath}/lang/lang.xml:email_admin_subject
			}
		}

		5.class = Finisher_Redirect
		5.config {
			redirectPage = {$formhandlerExamples.basic.contact-form.redirectPage}
		}
	}
}

[globalVar = GP:contact|receive-copy = 1]
plugin.Tx_Formhandler.settings.predef.formhandler-basic-contactform {
	finishers {
		1.config {
			user {
				templateFile = TEXT
				templateFile.value = {$formhandlerExamples.basic.contact-form.rootPath}/html/email-user.html
				sender_email = {$formhandlerExamples.basic.contact-form.email.user.sender_email}
				to_email = email
				subject = TEXT
				subject.data = LLL:{$formhandlerExamples.basic.contact-form.rootPath}/lang/lang.xml:email_user_subject
			}
		}
	}
}
[global]