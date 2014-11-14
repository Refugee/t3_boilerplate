[globalVar = TSFE : beUserLogin > 0]
    config.no_cache = 1
    #config.admPanel = 1
[global]

config {

    htmlTag_stdWrap.wrap (
        <!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="de">   <![endif]-->
        <!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="de">          <![endif]-->
        <!--[if IE 8]>    <html class="no-js lt-ie9" lang="de">                 <![endif]-->
        <!--[if IE 9]>    <html class="no-js lt-ie10" lang="de">                <![endif]-->
        <!--[if gt IE 8]> <!--> |                                           <!--<![endif]-->
    )

    tx_realurl_enable       =   1
    baseURL                 =   http://{$Modul.base_url_domain}/
    linkVars                =   L
    prefixLocalAnchors      =   all

    language                =   de
    locale_all              =   de_DE
    htmlTag_setParams       =   lang = "{$Modul.language}"
    sys_language_uid        =   0

    removeDefaultJS         =   1
    inlineStyle2TempFile    =   1
    disablePrefixComment    =   1
    disableImgBorderAttr    =   1
    xhtml_cleaning          =   all

    spamProtectEmailAddresses               =   ascii
    spamProtectEmailAddresses_atSubst       =   &#64;
    spamProtectEmailAddresses_lastDotSubst  =   &#46;
    
}


page = PAGE
page {

    typeNum = 0

    meta.viewport = width=device-width, initial-scale=1.0
    meta.description.field = description
    meta.description.ifEmpty = {$Modul.meta_description}   
    meta.keywords.field = keywords
    meta.keywords.ifEmpty = {$Modul.meta_keywords}
    meta.author.field = author
    meta.author.ifEmpty = {$Modul.meta_author}
    meta.robots = {$Modul.meta_robots}

    config {
        headerComment (
            Header Comment goes here
         )
    }

    bodyTag >
    bodyTagCObject = COA
    bodyTagCObject.10 = TEXT
    bodyTagCObject.10.field = backend_layout
    bodyTagCObject.10.noTrimWrap = | class="layout-|"|
    bodyTagCObject.20 = TEXT
    bodyTagCObject.20.field = uid
    bodyTagCObject.20.noTrimWrap = | id="page-|"|
    bodyTagCObject.wrap = <body | >
    wrap = <div id="base">|</div>

    10 = FLUIDTEMPLATE 
    10 {
        
        file.stdWrap.cObject = CASE
            file.stdWrap.cObject {

                key.data = levelfield:-1, backend_layout_next_level, slide
                key.override.field = backend_layout

                default = TEXT
                default.value = fileadmin/{$Modul.project_name}/html/default.html

                2 = TEXT
                2.value = fileadmin/{$Modul.project_name}/html/subpage.html

                #4 = TEXT
                #4.value = fileadmin/{$Modul.project_name}/html/template.html

            }
    }
}


[globalVar = GP:L = 1]
    config.sys_language_uid = 1
    config.language = en
    config.locale_all = en_EN
    config.htmlTag_langKey = en
    config.htmlTag_setParams = lang="en"
[global]


lib.languagemenu = COA_INT
lib.languagemenu {
    10 = TEXT
    10.data = TSFE:baseUrl
    10.wrap =  <a href="|
    20 = TEXT
    20.typolink {
        parameter.data = TSFE:id
        returnLast = url
        additionalParams = &L=1
        addQueryString = 1
        addQueryString.method = GET
        addQueryString.exclude = id
    }
    30 = TEXT
    30.value =
    30.wrap =" class="lang-link lang-link-en" title="translate to english"><div class="hidden">translate to english</div><img alt="translate to english" src="fileadmin/{$Modul.project_name}/img/layout/lang-link-en.png"></a>
}

[globalVar = GP:L = 1]
    lib.languagemenu.20.typolink.additionalParams = &L=0
    lib.languagemenu.30.value = 
    lib.languagemenu.30.wrap =" class="lang-link lang-link-de" title="auf deutsch">|<img alt="auf deutsch" src="fileadmin/templates/kunde/{$Modul.project_name}/img/layout/lang-link-de.png"></a>
[global]


page.includeCSS {

    bootstrap = fileadmin/{$Modul.project_name}/css/bootstrap.css
    bootstrap.media = screen

    fontawesome = fileadmin/{$Modul.project_name}/css/font-awesome.css
    fontawesome.media = screen

    flexslider = fileadmin/{$Modul.project_name}/css/flexslider.css
    flexslider.media = screen

    opensans = http://fonts.googleapis.com/css?family=Open+Sans:400,700
    opensans.media = screen
    opensans.external = 1

    #lato = http://fonts.googleapis.com/css?family=Lato:400,700
    #lato.media = screen
    #lato.external = 1

    menu = fileadmin/{$Modul.project_name}/css/menu.css
    menu.media = screen

    csc = fileadmin/{$Modul.project_name}/css/csc.css
    csc.media = screen

    txformhandler = fileadmin/{$Modul.project_name}/css/ext/tx-formhandler.css
    txformhandler.media = screen

    screen = fileadmin/{$Modul.project_name}/css/screen.css
    screen.media = screen

    print = fileadmin/{$Modul.project_name}/css/print.css
    print.media = print

}

page.headerData.666 = TEXT
page.headerData.666.value (
    <link rel="shortcut icon" href="fileadmin/{$Modul.project_name}/favicon.ico" type="image/x-ico; charset=binary" />
)

page.includeJS {
    modernizr = fileadmin/{$Modul.project_name}/js/modernizr.js
    respond = fileadmin/{$Modul.project_name}/js/respond.js
}

page.includeJSFooterlibs {
    jquery = fileadmin/{$Modul.project_name}/js/jquery.js
    jquery.forceOnTop = 1
    flexslider = fileadmin/{$Modul.project_name}/js/jquery.flexslider.js
}

page.includeJSFooter {
    custom = fileadmin/{$Modul.project_name}/js/custom.js
}


#lib.pageTitle = TEXT
#lib.pageTitle {
#    value = {page:subtitle//page:title}
#    insertData = 1
#    wrap = <h1 class="page-title hidden">|</h1>
#}


lib.logo = TEXT
lib.logo.value(
    <a href="http://{$Modul.base_url_domain}/" class="logo">
        <img src="fileadmin/{$Modul.project_name}/img/logo.png" alt="Logo">
    </a>
)

lib.menu.1.wrap = <nav class="nav-main clearfix" role="navigation"><ul id="nav-main-ul">|</ul></nav>


lib.getLeft < styles.content.getLeft
lib.content < styles.content.get
lib.getRight < styles.content.getRight
lib.getBorder < styles.content.getBorder
lib.getBorder.slide = -1


lib.nav-main-toggle = TEXT  
lib.nav-main-toggle.value (

    <div class="nav-main-toggle">
        <span><i class="icon-reorder"></i></span>
    </div>

)


lib.menu = HMENU
lib.menu {

    1 = TMENU
    1 {
        noBlur = 1
        expAll = 1

        wrap = <nav class="nav-main nav-basic clearfix" role="navigation"><ul id="nav-main-ul">|<!--li class="search-toggle"><a href="#"><i class="fa fa-search"></i> Suche</a></li--></ul></nav>

        NO = 1
        NO {
            wrapItemAndSub = <li>|</li>
            ATagTitle.field >
            #ATagTitle.field = title
        }
        
        ACT < .NO
        ACT.wrapItemAndSub = <li class="active">|</li>
    }
    
    2 < .1
    2.wrap = <ul class="lvl2">|</ul>

    #3 < .2
    #3.wrap = <ul class="lvl3">|</ul>

    #4 < .3
    #4.wrap = <ul class="lvl4">|</ul>

    #5 < .4
    #5.wrap = <ul class="lvl5">|</ul>

}

lib.breadcrumb = HMENU
lib.breadcrumb {
    includeNotInMenu = 1
    special = rootline
    special.range = 1|-1
    1 = TMENU
    1 {
        NO.linkWrap = | <i class="fa fa-caret-right"></i> 
        NO.stdWrap2.noTrimWrap = | | |
        CUR < .NO
        CUR = 1
        CUR {
            linkWrap = |
            doNotLinkIt = 1
        }
    }
}

lib.footermenu = HMENU
lib.footermenu {
    special = directory
    special.value = 8
 
    1 = TMENU
    1 {
        NO {
            linkWrap= <ul><li>|</li>|*|<li>|</li>|*|<li>|</li><li>&copy; 2014</li></ul>
        }
    }
}

lib.footerCol1 = CONTENT
lib.footerCol1 {
   table = tt_content
   select {
     pidInList = 7
     where = colPos=1
     orderBy = sorting
   }
}

lib.footerCol2 = CONTENT
lib.footerCol2 {
   table = tt_content
   select {
     pidInList = 7
     where = colPos=2
     orderBy = sorting
   }
}

lib.footerCol3 = CONTENT
lib.footerCol3 {
   table = tt_content
   select {
     pidInList = 7
     where = colPos=3
     orderBy = sorting
   }
}

lib.footerCol4 = CONTENT
lib.footerCol4 {
   table = tt_content
   select {
     pidInList = 7
     where = colPos=4
     orderBy = sorting
   }
}


#lib.footerNav = RECORDS
#lib.footerNav.tables = tt_content
#lib.footerNav.source = 98


lib.google = TEXT  
lib.google.value (
    <script type="text/javascript">
        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', '{$Modul.google_analytics_code}']);
        _gaq.push(['_gat._anonymizeIp']);
        _gaq.push(['_trackPageview']);

        (function() {
           var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
           ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
           var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();
    </script>
)

tt_content.stdWrap.innerWrap.cObject = CASE
tt_content.stdWrap.innerWrap.cObject {

  key.field = section_frame

  100 = TEXT
  100.value = <div class="flexslider">|</div>

  110 = TEXT
  110.value = <div class="row"><div class="two-col col-xs-12 col-sm-12 col-md-6 col-lg-6">|</div>

  120 = TEXT
  120.value = <div class="two-col col-xs-12 col-sm-12 col-md-6 col-lg-6">|</div></div><!--.row-->

}

plugin.tx_news.settings.list.paginate {
    itemsPerPage = 3
    insertAbove = false
    insertBelow = true
    lessPages = true
    forcedNumberOfLinks = 5
    pagesBefore = 2
    pagesAfter = 2
}

plugin.tx_indexedsearch.templateFile = fileadmin/{$Modul.project_name}/html/ext/indexed_search.tmpl
plugin.tx_indexedsearch.show.advancedSearchLink = 0

lib.search = COA_INT
lib.search {
  10 = TEXT
  10 {
    typolink.parameter = 8
    typolink.returnLast = url
    wrap = <form action="|" method="post" id="indexedsearch">
  }
  
  20 = COA
  20 {
    10 = TEXT
    10.data = GPvar : tx_indexedsearch |sword
    10.htmlSpecialChars = 1
    10.wrap = <input name="tx_indexedsearch[sword]" value="|" class="searchField" placeholder="Suche nach Themen, Bilder und mehr..." type="text" required/>
  }

  30 = TEXT
  30.value (
    <input type="hidden" name="tx_indexedsearch[sections]" value="0" />
    <input name="tx_indexedsearch[submit_button]" value="Search" type="hidden" />
    <input name="search" value="Suche" class="searchSubmit" type="submit" />
  )

  40 = TEXT
  40.value = </form>
}


config {

    no_search       = 0
    no_cache        = 0
    index_enable    = 1

    compressCss     = 0
    compressJs      = 0

    concatenateCss  = 0
    concatenateJs   = 0

    admPanel        = 0

}