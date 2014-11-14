#typo3-boilerplate

A responsive TYPO3-Boilerplate using Bootstrap3.

# install extensions

- Formhandler
- News (news)
- jQuery FancyBox 2 (cl_jquery_fancybox)
- realurl 

# include static templates

- CSS Styled Content (css_styled_content)
- Clickenlarge Rendering (rtehtmlarea)
- News (news)
- jQuery FancyBox 2 (cl_jquery_fancybox)

##########################################################################################

# main template

# constants

    Modul.project_name = t3_boilerplate
    Modul.base_url_domain = yourdomain.com
    Modul.language = de
    Modul.meta_keywords =
    Modul.meta_description =
    Modul.meta_author =
    Modul.meta_robots = noindex, nofollow
    Modul.google_analytics_code = XX-XXXXXXX-XY
    <INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/t3_boilerplate/ts/constants.ts">
    <INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/t3_boilerplate/contact-form/ts/formhandler_constants.ts">

# setup

    <INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/t3_boilerplate/ts/setup.ts">
    <INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/t3_boilerplate/contact-form/ts/formhandler_setup.ts">

##########################################################################################

# ressources root page
    <INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/t3_boilerplate/ts/page.ts">

##########################################################################################

# backend-layout homepage

    backend_layout {
    	colCount = 3
    	rowCount = 3
    	rows {
    		1 {
    			columns {
    				1 {
    					name = header
    					colPos = 1
    					colspan = 3
    				}
    			}
    		}
    		2 {
    			columns {
    				1 {
    					name = left
    					colPos = 3
    					colspan = 1
    				}
    				2 {
    					name = content
    					colPos = 0
    					colspan = 2
    				}
    			}
    		}
    		3 {
    			columns {
    				1 {
    					name = bottom
    					colPos = 2
    					colspan = 3
    				}
    			}
    		}
    	}
    }

##########################################################################################

# backend-layout subpage

    backend_layout {
    	colCount = 3
    	rowCount = 1
    	rows {
    		1 {
    			columns {
    				1 {
    					name = sidebar
    					colPos = 1
    					colspan = 1
    				}
    				2 {
    					name = content
    					colPos = 0
    					colspan = 2
    				}
    			}
    		}
    	}
    }

##########################################################################################

# backend-layout footer multi columns

    backend_layout {
    	colCount = 4
    	rowCount = 1
    	rows {
    		1 {
    			columns {
    				1 {
    					name = footer 1
    					colPos = 1
    				}
    				2 {
    					name = footer 2
    					colPos = 2
    				}
    				3 {
    					name = footer 3
    					colPos = 3
    				}
    				4 {
    					name = footer 3
    					colPos = 4
    				}
    			}
    		}
    	}
    }