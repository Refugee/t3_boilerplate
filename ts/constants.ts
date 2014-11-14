styles.content.imgtext.maxW = 1650
styles.content.imgtext.maxWInText = 0
styles.content.imgtext.linkWrap.width = 1650
styles.content.loginform.pid = 0
content.defaultHeaderType = 2


plugin.tx_news {

    view {
        templateRootPath =  fileadmin/{$Modul.project_name}/html/ext/news/Templates/
        partialRootPath =   fileadmin/{$Modul.project_name}/html/ext/news/Partials/
        layoutRootPath =    fileadmin/{$Modul.project_name}/html/ext/news/Layouts/
    }

    settings {
        displayDummyIfNoMedia = 0
        cssFile = fileadmin/{$Modul.project_name}/css/ext/tx-news.css
    }

    _LOCAL_LANG {
        default {
            more-link = Zum Artikel
            read_more = Zum Artikel
        }
    }
}