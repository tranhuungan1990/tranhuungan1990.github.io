"function" != typeof String.prototype.startsWith &&
    (String.prototype.startsWith = function (t) {
        return 0 === this.lastIndexOf(t, 0);
    }),
    "function" != typeof String.prototype.endsWith &&
        (String.prototype.endsWith = function (t) {
            return -1 !== this.indexOf(t, this.length - t.length);
        }),
    "function" != typeof String.prototype.trim &&
        (String.prototype.trim = function () {
            return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        }),
    "function" != typeof Array.prototype.find &&
        (Array.prototype.find = function (t) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var e = Object(this),
                i = e.length >>> 0;
            if ("function" != typeof t) throw new TypeError("callback must be a function");
            for (var a = arguments[1], n = 0; n < i; ) {
                var o = e[n];
                if (t.call(a, o, n, e)) return o;
                n++;
            }
        }),
    "function" != typeof Array.prototype.findIndex &&
        Object.defineProperty(Array.prototype, "findIndex", {
            value: function (t) {
                if (null == this) throw new TypeError('"this" is null or not defined');
                var e = Object(this),
                    i = e.length >>> 0;
                if ("function" != typeof t) throw new TypeError("predicate must be a function");
                for (var a = arguments[1], n = 0; n < i; ) {
                    var o = e[n];
                    if (t.call(a, o, n, e)) return n;
                    n++;
                }
                return -1;
            },
            configurable: !0,
            writable: !0,
        }),
    "function" != typeof Array.prototype.filter &&
        (Array.prototype.filter = function (t, e) {
            "use strict";
            if ("function" != typeof t || !this) throw new TypeError();
            var i = this.length >>> 0,
                a = new Array(i),
                n = this,
                o = 0,
                r = -1;
            if (void 0 === e)
                for (; ++r !== i; )
                    if (r in this)
                        if (t(n[r], r, n)) a[o++] = n[r];
                        else for (; ++r !== i; ) r in this && t.call(e, n[r], r, n) && (a[o++] = n[r]);
            return (a.length = o), a;
        }),
    "function" != typeof Array.prototype.map &&
        (Array.prototype.map = function (t) {
            var e, i, a;
            if (null == this) throw new TypeError("this is null or not defined");
            var n = Object(this),
                o = n.length >>> 0;
            if ("function" != typeof t) throw new TypeError(t + " is not a function");
            for (arguments.length > 1 && (e = arguments[1]), i = new Array(o), a = 0; a < o; ) {
                var r, d;
                a in n && ((r = n[a]), (d = t.call(e, r, a, n)), (i[a] = d)), a++;
            }
            return i;
        }),
    "function" != typeof Array.prototype.reduce &&
        (Array.prototype.reduce = function (t) {
            if (null === this) throw new TypeError("Array.prototype.reduce called on null or undefined");
            if ("function" != typeof t) throw new TypeError(t + " is not a function");
            var e,
                i = Object(this),
                a = i.length >>> 0,
                n = 0;
            if (arguments.length >= 2) e = arguments[1];
            else {
                for (; n < a && !(n in i); ) n++;
                if (n >= a) throw new TypeError("Reduce of empty array with no initial value");
                e = i[n++];
            }
            for (; n < a; ) n in i && (e = t(e, i[n], n, i)), n++;
            return e;
        }),
    "function" != typeof Object.keys &&
        (Object.keys = (function () {
            "use strict";
            var t = Object.prototype.hasOwnProperty,
                e = !{ toString: null }.propertyIsEnumerable("toString"),
                i = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                a = i.length;
            return function (n) {
                if ("function" != typeof n && ("object" != typeof n || null === n)) throw new TypeError("Object.keys called on non-object");
                var o,
                    r,
                    d = [];
                for (o in n) t.call(n, o) && d.push(o);
                if (e) for (r = 0; r < a; r++) t.call(n, i[r]) && d.push(i[r]);
                return d;
            };
        })()),
    (String.prototype.replaceAll = function (t, e) {
        return this.valueOf().split(t).join(e);
    }),
    (String.prototype.decode = function () {
        return this.valueOf()
            .replaceAll(/&#38;/g, "&")
            .replaceAll(/&#62;/g, ">")
            .replaceAll(/&#60;/g, "<")
            .replaceAll(/&#39;/g, "'")
            .replaceAll(/&#34;/g, '"')
            .replaceAll(/&#165;/g, "\\")
            .replaceAll(/&#123;/g, "{")
            .replaceAll(/&#125;/g, "}");
    }),
    (String.prototype.format = function () {
        for (var t = this, e = 0; e < arguments.length; e++) {
            var i = new RegExp("\\{" + e + "\\}", "gi");
            t = t.replace(i, arguments[e]);
        }
        return t.valueOf();
    }),
    (Array.prototype.removeSpace = function () {
        var t = [];
        return (
            this.forEach(function (e) {
                (e = e.trim()).length > 0 && t.push(e);
            }),
            t
        );
    }),
    (Array.prototype.random = function () {
        return this[Math.floor(Math.random() * this.length)];
    }),
    (Array.prototype.unique = function () {
        return this.filter(function (t, e, i) {
            return i.indexOf(t) == e;
        });
    }),
    (Array.prototype.except = function (t) {
        var e = this;
        return (
            Array.isArray(t) &&
                t.forEach(function (t) {
                    var i = e.indexOf(t);
                    -1 != i && e.splice(i, 1);
                }),
            e
        );
    }),
    (Array.prototype.only = function (t) {
        var e = [];
        return (
            Array.isArray(t) &&
                this.forEach(function (i) {
                    -1 != t.indexOf(i) && e.push(i);
                }),
            e
        );
    }),
    (Array.prototype.insert = function (t, e) {
        this.splice(t, 0, e);
    });
var LadiPageScriptV2 = LadiPageScriptV2 || function () {};
(LadiPageScriptV2.prototype.init = function () {
    (this.const = {
        DESKTOP: "desktop",
        MOBILE: "mobile",
        DOMAIN_GOOGLE_DOCS: "docs.google.com",
        POWERED_BY_IMAGE: "https://w.ladicdn.com/source/v3/by/ladipage.svg",
        STATIC_W_DOMAIN: "w.ladicdn.com",
        STATIC_S_DOMAIN: "s.ladicdn.com",
        APP_RUNTIME_PREFIX: "_runtime",
        ACTION_TYPE: { action: "action", "1st_click": "1st_click", "2nd_click": "2nd_click", hover: "hover", complete: "complete" },
        DATA_ACTION_TYPE: {
            link: "link",
            section: "section",
            email: "email",
            phone: "phone",
            popup: "popup",
            dropbox: "dropbox",
            hidden_show: "hidden_show",
            collapse: "collapse",
            set_value: "set_value",
            copy_clipboard: "copy_clipboard",
            change_index: "change_index",
            set_style: "set_style",
            set_value_2nd: "set_value_2nd",
            lightbox: "lightbox",
            popup_cart: "popup_cart",
            popup_checkout: "popup_checkout",
        },
        DATA_ACTION_LIGHTBOX_TYPE: { image: "image", video: "video", iframe: "iframe" },
        COUNTDOWN_TYPE: { countdown: "countdown", daily: "daily", endtime: "endtime" },
        COUNTDOWN_ITEM_TYPE: { day: "day", hour: "hour", minute: "minute", seconds: "seconds" },
        VIDEO_TYPE: { youtube: "youtube", direct: "direct" },
        BACKGROUND_STYLE: { solid: "solid", gradient: "gradient", image: "image", video: "video" },
        PUBLISH_PLATFORM: { ladipage: "LADIPAGE", ladipagedns: "LADIPAGEDNS", wordpress: "WORDPRESS", haravan: "HARAVAN", sapo: "SAPO", shopify: "SHOPIFY", itop: "ITOPWEBSITE", ftp: "FTP", other: "OTHER" },
        SECTION_TYPE: { default: "DEFAULT", global: "GLOBAL" },
        TRACKING_NAME: "ladicid",
        ACCESS_KEY_NAME: "ladiack",
        REF_NAME: "ref",
        OTP_TYPE: { send: "OTP_SEND", resend: "OTP_RESEND", sms: "OTP_SMS", voice: "OTP_VOICE", zns: "OTP_ZNS" },
        STATUS_SEND: { capture: 1, otp: 1, sendform: 2 },
        PUBLISH_STYLE: { desktop_min_width: 768, mobile_small_min_width: 320 },
        ANIMATED_LIST: ["rotate-1", "rotate-2", "rotate-3", "type", "scale", "loading-bar", "slide", "clip", "zoom", "push"],
        POSITION_TYPE: {
            default: "default",
            top: "top",
            bottom: "bottom",
            top_left: "top_left",
            top_center: "top_center",
            top_right: "top_right",
            center_left: "center_left",
            center_right: "center_right",
            bottom_left: "bottom_left",
            bottom_center: "bottom_center",
            bottom_right: "bottom_right",
        },
        COLLECTION_TYPE: { carousel: "carousel", readmore: "readmore" },
        INPUT_TYPE: {
            tel: "tel",
            password: "password",
            text: "text",
            date: "date",
            select_multiple: "select_multiple",
            number: "number",
            email: "email",
            textarea: "textarea",
            select: "select",
            radio: "radio",
            checkbox: "checkbox",
            facebook_checkbox_plugin_transactional: "facebook_checkbox_plugin_transactional",
            facebook_checkbox_plugin_promotional: "facebook_checkbox_plugin_promotional",
            file: "file",
            image_choices: "image_choices",
            product_variant: "product_variant",
        },
        CONTENT_TYPE: { form_data: "FORM_DATA", form_urlencoded: "X_WWW_FORM_URLENCODED", json: "JSON" },
        SORT_BY_TYPE: { asc: "asc", desc: "desc" },
        PRODUCT_VARIANT_TYPE: { combined: "combined", combobox: "combobox", label: "label" },
        PRODUCT_VARIANT_OPTION_TYPE: { color: 1, image: 2 },
        PRODUCT_VARIANT_TITLE: { left: "left", top: "top" },
        FORM_THANKYOU_TYPE: { default: "default", url: "url", popup: "popup" },
        GAME_RESULT_TYPE: { default: "default", popup: "popup" },
        PERCENT_TRACKING_SCROLL: [0, 25, 50, 75, 100],
        TIME_ONPAGE_TRACKING: [10, 30, 60, 120, 180, 300, 600],
        FORM_CONFIG_TYPE: {
            email: "EMAIL",
            mail_chimp: "MAIL_CHIMP",
            infusion_soft: "INFUSION_SOFT",
            infusion_soft_ladi: "INFUSION_SOFT_LADI",
            active_campaign: "ACTIVE_CAMPAIGN",
            sendgrid: "SENDGRID",
            hubspot: "HUBSPOT",
            smtp: "SMTP",
            esms: "ESMS",
            get_response: "GET_RESPONSE",
            convertkit: "CONVERTKIT",
            ladiflow: "LADIFLOW",
            telegram: "TELEGRAM",
            slack: "SLACK",
            zalo_zns: "ZALO_ZNS",
            mautic: "MAUTIC",
            google_sheet: "GOOGLE_SHEET",
            google_form: "GOOGLE_FORM",
            custom_api: "CUSTOM_API",
            ladisales: "LADISALES",
            ladishare: "LADISHARE",
            haravan: "HARAVAN",
            sapo: "SAPO",
            shopify: "SHOPIFY",
            nhanh_vn: "NHANH_VN",
            google_recaptcha: "GOOGLE_RECAPTCHA",
            google_recaptcha_checkbox: "GOOGLE_RECAPTCHA_CHECKBOX",
            google_recaptcha_enterprise: "GOOGLE_RECAPTCHA_ENTERPRISE",
            google_places_autocomplete: "GOOGLE_PLACES_AUTOCOMPLETE",
            kiotviet: "KIOTVIET",
            wordpress: "WORDPRESS",
            metu: "METU",
            ladichat: "LADICHAT",
            shopping: "SHOPPING",
            blog: "BLOG",
            conversion_api: "CONVERSION_API",
            popupx: "POPUPX",
        },
        FORM_UPLOAD_FILE_LENGTH: 20,
        FORM_UPLOAD_FILE_SIZE: 25,
        CART_LAYOUT: { editable: "editable", viewonly: "viewonly" },
        WIDTH_SECTION_RESIZE: {},
        RESIZE_ADD_PIXEL: 300,
        RESIZE_ADD_PIXEL_THUMB: 50,
        RESIZE_RANGE: 50,
        TOOLTIP_TYPE: { default: "default", info: "info", success: "success", error: "error", notice: "notice" },
        TOOLTIP_POSITION: {
            top_left: "top_left",
            top_middle: "top_middle",
            top_right: "top_right",
            bottom_left: "bottom_left",
            bottom_middle: "bottom_middle",
            bottom_right: "bottom_right",
            left_top: "left_top",
            left_middle: "left_middle",
            left_bottom: "left_bottom",
            right_top: "right_top",
            right_middle: "right_middle",
            right_bottom: "right_bottom",
        },
        TOOLTIP_SIZE: { small: "small", medium: "medium", big: "big" },
        STORY_PAGE: { horizontal: "horizontal", vertical: "vertical", none: "none" },
        COMBOBOX_TYPE: { delivery_method: "delivery_method" },
        PRODUCT_TYPE: { event: "Event", service: "Service", physical: "Physical" },
    }),
        (this.runtime = {
            backdrop_popup_id: "backdrop-popup",
            backdrop_dropbox_id: "backdrop-dropbox",
            lightbox_screen_id: "lightbox-screen",
            builder_section_popup_id: "SECTION_POPUP",
            builder_section_background_id: "BODY_BACKGROUND",
            ladipage_powered_by_classname: "ladipage_powered_by",
            current_element_mouse_down_carousel: null,
            current_element_mouse_down_carousel_position_x: 0,
            current_element_mouse_down_carousel_diff: 40,
            current_element_mouse_down_gallery_control: null,
            current_element_mouse_down_gallery_control_time: 0,
            current_element_mouse_down_gallery_control_time_click: 300,
            current_element_mouse_down_gallery_control_position_x: 0,
            current_element_mouse_down_gallery_view: null,
            current_element_mouse_down_gallery_view_position_x: 0,
            current_element_mouse_down_gallery_view_diff: 40,
            country_state_sort: { VN: ["201", "202", "224", "220", "203"] },
            location_state_sort: { VN: ["HN", "SG", "HP", "CT", "DN"] },
            scroll_show_popup: {},
            scroll_depth: [],
            scroll_to_section: {},
            send_request_response: {},
            is_mobile_only: !1,
            interval_countdown: null,
            interval_gallery: null,
            timeout_gallery: {},
            interval_carousel: null,
            count_click_dom: {},
            timenext_carousel: {},
            time_click_dom: {},
            time_click: 300,
            time_otp: 6e4,
            isClient: !1,
            isDesktop: !0,
            isBrowserDesktop: !0,
            isIE: !1,
            isLoadHtmlGlobal: !1,
            isYouTubeIframeAPIReady: !1,
            isLoadYouTubeIframeAPI: !1,
            isVideoButtonUnmute: !0,
            device: this.const.DESKTOP,
            ladipage_id: null,
            func_get_code_otp: {},
            list_dataset_load: [],
            list_scroll_func: {},
            list_loaded_func: [],
            list_show_popup_func: {},
            list_youtube_ready_exec: [],
            list_scrolling_exec: {},
            list_scrolled_exec: {},
            list_lightbox_id: {},
            list_set_value_name_country: ["ward", "district", "state", "country"],
            tmp: {},
            tabindexForm: 0,
            eventData: {},
            eventDataGlobal: {},
            timenow: 0,
            widthScrollBar: 0,
            replaceStr: {},
            replacePrefixStart: "{{",
            replacePrefixEnd: "}}",
            replaceNewPrefixStart: "!::",
            replaceNewPrefixEnd: "::!",
        }),
        (this.const.WIDTH_SECTION_RESIZE[this.const.DESKTOP] = 1440),
        (this.const.WIDTH_SECTION_RESIZE[this.const.MOBILE] = 768);
}),
    ["isObject", "isArray", "isFunction", "isBoolean", "isString", "isEmpty", "isNull"].forEach(function (t) {
        LadiPageScriptV2.prototype[t] = function (e) {
            return window[t + "LadiPage"](e);
        };
    }),
    (LadiPageScriptV2.prototype.copy = function (t) {
        return isObjectLadiPage(window.angular) && isFunctionLadiPage(window.angular.copy) ? window.angular.copy(t) : isNullLadiPage(t) ? t : JSON.parse(JSON.stringify(t));
    });
var Base64 = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode: function (t) {
            var e,
                i,
                a,
                n,
                o,
                r,
                d,
                s = "",
                l = 0;
            for (t = Base64._utf8_encode(t); l < t.length; )
                (n = (e = t.charCodeAt(l++)) >> 2),
                    (o = ((3 & e) << 4) | ((i = t.charCodeAt(l++)) >> 4)),
                    (r = ((15 & i) << 2) | ((a = t.charCodeAt(l++)) >> 6)),
                    (d = 63 & a),
                    isNaN(i) ? (r = d = 64) : isNaN(a) && (d = 64),
                    (s = s + Base64._keyStr.charAt(n) + Base64._keyStr.charAt(o) + Base64._keyStr.charAt(r) + Base64._keyStr.charAt(d));
            return s;
        },
        decode: function (t) {
            var e,
                i,
                a,
                n,
                o,
                r,
                d = "",
                s = 0;
            for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); s < t.length; )
                (e = (Base64._keyStr.indexOf(t.charAt(s++)) << 2) | ((n = Base64._keyStr.indexOf(t.charAt(s++))) >> 4)),
                    (i = ((15 & n) << 4) | ((o = Base64._keyStr.indexOf(t.charAt(s++))) >> 2)),
                    (a = ((3 & o) << 6) | (r = Base64._keyStr.indexOf(t.charAt(s++)))),
                    (d += String.fromCharCode(e)),
                    64 != o && (d += String.fromCharCode(i)),
                    64 != r && (d += String.fromCharCode(a));
            return (d = Base64._utf8_decode(d));
        },
        _utf8_encode: function (t) {
            t = t.replace(/\r\n/g, "\n");
            for (var e = "", i = 0; i < t.length; i++) {
                var a = t.charCodeAt(i);
                a < 128
                    ? (e += String.fromCharCode(a))
                    : a > 127 && a < 2048
                    ? ((e += String.fromCharCode((a >> 6) | 192)), (e += String.fromCharCode((63 & a) | 128)))
                    : ((e += String.fromCharCode((a >> 12) | 224)), (e += String.fromCharCode(((a >> 6) & 63) | 128)), (e += String.fromCharCode((63 & a) | 128)));
            }
            return e;
        },
        _utf8_decode: function (t) {
            for (var e = "", i = 0, a = 0, n = 0, o = 0; i < t.length; )
                (a = t.charCodeAt(i)) < 128
                    ? ((e += String.fromCharCode(a)), i++)
                    : a > 191 && a < 224
                    ? ((o = t.charCodeAt(i + 1)), (e += String.fromCharCode(((31 & a) << 6) | (63 & o))), (i += 2))
                    : ((o = t.charCodeAt(i + 1)), (n = t.charCodeAt(i + 2)), (e += String.fromCharCode(((15 & a) << 12) | ((63 & o) << 6) | (63 & n))), (i += 3));
            return e;
        },
    },
    LadiPageScript = LadiPageScript || new LadiPageScriptV2();
LadiPageScript.init();
var LadiFormApi = LadiFormApi || {},
    LadiPageCommand = LadiPageCommand || [],
    equalsLadiPage = function (t, e) {
        return isObjectLadiPage(window.angular) && isFunctionLadiPage(window.angular.equals) ? window.angular.equals(t, e) : typeof t == typeof e && JSON.stringify(t) == JSON.stringify(e);
    },
    isObjectLadiPage = function (t) {
        return !isFunctionLadiPage(t) && !isArrayLadiPage(t) && t instanceof Object;
    },
    isArrayLadiPage = function (t) {
        return t instanceof Array;
    },
    isFunctionLadiPage = function (t) {
        return "function" == typeof t || t instanceof Function;
    },
    isBooleanLadiPage = function (t) {
        return "boolean" == typeof t;
    },
    isStringLadiPage = function (t) {
        return "string" == typeof t || t instanceof String;
    },
    isEmptyLadiPage = function (t) {
        return !!isNullLadiPage(t) || (isStringLadiPage(t) ? 0 == (t = t.trim()).length || "undefined" == t.toLowerCase() : !!isArrayLadiPage(t) && 0 == t.length);
    },
    isNullLadiPage = function (t) {
        return void 0 === t || void 0 == t;
    },
    parseFloatLadiPage = function (t, e) {
        var i = parseFloat(t);
        try {
            return parseFloat(LadiPageScript.formatNumber(i, 21, null, e || 6));
        } catch (t) {
            return NaN;
        }
    },
    decodeURIComponentLadiPage = function (t) {
        try {
            return decodeURIComponent(t);
        } catch (e) {
            return t;
        }
    };
(LadiPageScriptV2.prototype.loadDataset = function (t, e, i, a, n, o, r, d) {
    isArrayLadiPage(this.runtime.list_dataset_load) && this.runtime.list_dataset_load.push({ element_id: t, dataset_id: e, dataset_type: i, sort_name: a, sort_by: n, isFirst: o, is_client: r, callback: d });
}),
    (LadiPageScriptV2.prototype.loadHtmlGlobal = function (t) {
        for (var e = this, i = 0, a = [], n = document.querySelectorAll(".ladi-section[data-global-id]"), o = 0; o < n.length; o++) {
            var r = n[o],
                d = r.getAttribute("data-global-id");
            isEmptyLadiPage(d) || a.push({ id: r.id, data_global_id: d });
        }
        var s = function (n) {
            isObjectLadiPage(n) &&
                Object.keys(n).forEach(function (t) {
                    e.runtime.eventDataGlobal[t] = n[t];
                });
            i == a.length &&
                (function (t) {
                    for (var i = [], a = document.querySelectorAll("div.ladi-section-global[data-country-file]"), n = 0; n < a.length; n++) {
                        var o = a[n].getAttribute("data-country-file");
                        isEmptyLadiPage(o) || ((o = (o = o.split(";")).removeSpace()), (i = i.concat(o)));
                    }
                    if ((i = i.unique()).length > 0 && e.runtime.hasOwnProperty("cdn_url") && e.runtime.hasOwnProperty("version")) {
                        var r = 0;
                        i.forEach(function (a) {
                            var n = e.runtime.cdn_url + a + ".js?v=" + e.runtime.version;
                            e.loadScript(n, null, !0, function (a) {
                                ++r < i.length || (e.runtime.load_location || ((e.runtime.load_location = !0), e.runAfterLocation()), isFunctionLadiPage(t) && t());
                            });
                        });
                    } else isFunctionLadiPage(t) && t();
                })(function () {
                    document.querySelectorAll('.ladi-section-global[data-dataset="true"]').length > 0 &&
                        !e.runtime.has_dataset &&
                        ((e.runtime.has_dataset = !0), e.runtime.hasOwnProperty("cdn_url") && e.runtime.hasOwnProperty("version") && e.loadScript(e.runtime.cdn_url + "dataset.min.js?v=" + e.runtime.version)),
                        (e.runtime.isLoadHtmlGlobal = !0),
                        e.run(t);
                });
        };
        a.forEach(function (t) {
            var a = t.id,
                n = document.getElementById(a),
                o = LadiPageScript.const.API_SECTION_GLOBAL_HTML.format(e.runtime.store_id, t.data_global_id);
            e.sendRequest("GET", o, null, !0, null, function (o, r, d) {
                if (d.readyState == XMLHttpRequest.DONE) {
                    var l = document.createElement("div");
                    (l.innerHTML = o),
                        isEmptyLadiPage(l.querySelector('div.ladi-section-global[data-id="' + t.id + '"] .ladi-section[data-global-id="' + t.data_global_id + '"]')) ? n.parentElement.removeChild(n) : (n.outerHTML = o),
                        (function (t) {
                            i++;
                            var a = document.querySelector('.ladi-section-global[data-id="' + t + '"] > script');
                            if (isEmptyLadiPage(a)) s();
                            else {
                                var n = null;
                                try {
                                    (n = JSON.parse(a.innerHTML)), (n = e.decodeValue(n));
                                } catch (t) {}
                                a.parentElement.removeChild(a), s(n);
                            }
                        })(a);
                }
            });
        }),
            s();
    }),
    (LadiPageScriptV2.prototype.postMessageWindow = function (t, e, i) {
        t.postMessage(JSON.stringify(e), i);
    }),
    (LadiPageScriptV2.prototype.updateHeightElement = function (t, e, i, a, n, o) {
        var r = this;
        if (a != n) {
            var d = "style_update_height_element",
                s = !0;
            if (("fixed" == getComputedStyle(e).position && (s = !1), t)) {
                r.runtime.tmp.dimension_element_new = {};
                var l = "#" + r.runtime.builder_section_popup_id + " > .ladi-container > .ladi-element { max-height: none !important;}";
                r.createStyleElement(d, l);
            }
            for (
                var c,
                    u,
                    p = function (t, i) {
                        return t.id == e.id && "height" == i ? n : isEmptyLadiPage(r.runtime.tmp.dimension_element_new[t.id + i]) ? parseFloatLadiPage(getComputedStyle(t)[i]) || 0 : r.runtime.tmp.dimension_element_new[t.id + i];
                    },
                    m = function (t, e, i) {
                        var a = p(t, e) + i;
                        if (o) {
                            var n = "transition-parent-collapse-" + e;
                            t.classList.add(n);
                            var d = 1e3 * parseFloatLadiPage(getComputedStyle(t).transitionDuration);
                            r.runTimeout(function () {
                                t.classList.remove(n);
                            }, d);
                        }
                        t.style.setProperty(e, a + "px"), (r.runtime.tmp.dimension_element_new[t.id + e] = a);
                    },
                    g = n - a,
                    _ = p(e, "top") + a,
                    y = 0;
                y < e.parentElement.children.length;
                y++
            ) {
                var f = e.parentElement.children[y];
                f.id != e.id && p(f, "top") >= _ && m(f, "top", g);
            }
            if (!isEmptyLadiPage(i) && i.id != r.runtime.builder_section_popup_id) {
                var v = p(i, "height"),
                    P = (function () {
                        for (var t = 0, i = 0; i < e.parentElement.children.length; i++) {
                            var a = e.parentElement.children[i];
                            if ("none" != getComputedStyle(a).display && 0 != p(a, "height")) {
                                var n = p(a, "top") + p(a, "height");
                                n > t && (t = n);
                            }
                        }
                        return t;
                    })();
                if (((i.classList.contains("ladi-section") || i.getElementsByClassName("ladi-popup").length > 0) && (P = v + g), m(i, "height", P - v), s)) {
                    var h = ((c = i), (u = r.findAncestor(c.parentElement, "ladi-element")), isEmptyLadiPage(u) && (u = r.findAncestor(c.parentElement, "ladi-section")), u);
                    this.updateHeightElement(!1, i, h, v, P, o);
                }
            }
            if (t) {
                if (this.runtime.tmp.is_loaded_func_done) {
                    var L = document.getElementById(d);
                    isEmptyLadiPage(L) || L.parentElement.removeChild(L);
                }
                delete r.runtime.tmp.dimension_element_new, r.fireEvent(window, "resize");
            }
        }
    }),
    (LadiPageScriptV2.prototype.showParentVisibility = function (t, e) {
        var i = this.findAncestor(t, "ladi-popup");
        if (!isEmptyLadiPage(i) && ((i = this.findAncestor(i, "ladi-element")), !isEmptyLadiPage(i)))
            return "none" == getComputedStyle(i).display && i.classList.add("hide-visibility"), isFunctionLadiPage(e) && e(), void i.classList.remove("hide-visibility");
        isFunctionLadiPage(e) && e();
    }),
    (LadiPageScriptV2.prototype.pauseAllVideo = function (t) {
        var e = document.getElementById(this.runtime.lightbox_screen_id).getElementsByClassName("lightbox-close")[0];
        if (!isEmptyLadiPage(e)) return e.click(), this.pauseAllVideo(t);
        delete this.runtime.tmp.gallery_playing_video;
        for (var i = (t = t || document).querySelectorAll(".iframe-video-preload:not(.no-pause)"), a = 0; a < i.length; a++) this.runEventReplayVideo(i[a].id, i[a].getAttribute("data-video-type"), !1);
    }),
    (LadiPageScriptV2.prototype.runEventReplayVideo = function (t, e, i) {
        var a = this,
            n = document.getElementById(t),
            o = null;
        if (!isEmptyLadiPage(n)) {
            var r = document.getElementById(t + "_button_unmute"),
                d = isEmptyLadiPage(r);
            if (e == a.const.VIDEO_TYPE.youtube) {
                o = i ? "playVideo" : "pauseVideo";
                var s = !1;
                if (a.runtime.isYouTubeIframeAPIReady) {
                    var l = window.YT.get(t);
                    if (!isEmptyLadiPage(l)) {
                        if ((d && i && isFunctionLadiPage(l.unMute) && l.unMute(), !d && i && isFunctionLadiPage(l.mute) && l.mute(), !isFunctionLadiPage(l[o])))
                            return void a.runTimeout(function () {
                                a.runEventReplayVideo(t, e, i);
                            }, 100);
                        l[o](), (s = !0);
                    }
                }
                s ||
                    (d && i && a.postMessageWindow(n.contentWindow, { event: "command", func: "unMute", args: [] }, "*"),
                    !d && i && a.postMessageWindow(n.contentWindow, { event: "command", func: "mute", args: [] }, "*"),
                    a.postMessageWindow(n.contentWindow, { event: "command", func: o, args: [] }, "*"));
            }
            e == a.const.VIDEO_TYPE.direct && ((o = i ? "play" : "pause"), d && i && (n.muted = !1), !d && i && (n.muted = !0), isFunctionLadiPage(n[o]) && n[o]()),
                i ? (n.classList.remove("ladi-hidden"), isEmptyLadiPage(r) || r.style.removeProperty("display")) : (n.classList.add("ladi-hidden"), isEmptyLadiPage(r) || r.style.setProperty("display", "none"));
        }
    }),
    (LadiPageScriptV2.prototype.runEventPlayVideo = function (t, e, i, a, n, o, r, d, s, l) {
        var c = this,
            u = c.runtime.isVideoButtonUnmute;
        (c.runtime.isDesktop || r || d || n || a) && (u = !1);
        var p = function (t, i) {
                if (u && !t.hasAttribute("data-remove-button-unmute")) {
                    var a = t.id + "_button_unmute",
                        n = document.getElementById(a);
                    isEmptyLadiPage(n) &&
                        (((n = document.createElement("div")).id = a),
                        (n.innerHTML = "<div></div>"),
                        (n.className = "button-unmute ladi-hidden"),
                        n.addEventListener("click", function (i) {
                            if ((i.stopPropagation(), (t = document.getElementById(t.id)), e == c.const.VIDEO_TYPE.youtube)) {
                                var a = !1;
                                if (c.runtime.isYouTubeIframeAPIReady) {
                                    var o = window.YT.get(t.id);
                                    !isEmptyLadiPage(o) && isFunctionLadiPage(o.unMute) && (o.unMute(), (a = !0));
                                }
                                a || c.postMessageWindow(t.contentWindow, { event: "command", func: "unMute", args: [] }, "*");
                            }
                            e == c.const.VIDEO_TYPE.direct && (t.muted = !1), n.parentElement.removeChild(n), t.setAttribute("data-remove-button-unmute", !0);
                        }),
                        t.parentElement.appendChild(n)),
                        i && n.classList.remove("ladi-hidden");
                    var o = c.findAncestor(t, "lightbox-screen");
                    isEmptyLadiPage(o) || (n.style.setProperty("width", getComputedStyle(t).width), n.style.setProperty("height", getComputedStyle(t).height));
                }
            },
            m = document.getElementById(t);
        if (!isEmptyLadiPage(m)) {
            var g = c.findAncestor(m, "ladi-video");
            isEmptyLadiPage(g) || (g = c.findAncestor(g, "ladi-element")), !a || o || isEmptyLadiPage(g) || (g.classList.add("pointer-events-none"), m.classList.add("no-pause")), r && m.classList.add("ladi-hidden");
            var _ = "";
            if (!isEmptyLadiPage(g)) {
                var y = g.getElementsByClassName("ladi-video-background")[0];
                if (!isEmptyLadiPage(y)) {
                    var f = getComputedStyle(y).backgroundImage;
                    f.toLowerCase().startsWith('url("') && f.toLowerCase().endsWith('")') && ((f = (f = f.substr('url("'.length)).substr(0, f.length - '")'.length)), isEmptyLadiPage(f) || (_ = f));
                }
            }
            if (e == c.const.VIDEO_TYPE.youtube) {
                var v = c.getVideoId(e, i),
                    P = function () {
                        try {
                            if (
                                ((c.runtime.isLoadYouTubeIframeAPI && c.runtime.isYouTubeIframeAPIReady) ||
                                    !isObjectLadiPage(window.YT) ||
                                    !isFunctionLadiPage(window.YT.Player) ||
                                    ((c.runtime.isLoadYouTubeIframeAPI = !0), (c.runtime.isYouTubeIframeAPIReady = !0)),
                                c.runtime.isLoadYouTubeIframeAPI ||
                                    ((c.runtime.isLoadYouTubeIframeAPI = !0),
                                    (window.onYouTubeIframeAPIReady = function () {
                                        c.runtime.isYouTubeIframeAPIReady = !0;
                                        for (; c.runtime.list_youtube_ready_exec.length > 0; ) c.runtime.list_youtube_ready_exec.shift()();
                                    }),
                                    c.loadScript("https://www.youtube.com/iframe_api")),
                                !c.runtime.isYouTubeIframeAPIReady)
                            )
                                return void c.runtime.list_youtube_ready_exec.push(P);
                            (m.outerHTML = m.outerHTML.replaceAll("<iframe", "<div").replaceAll("</iframe>", "</div>")), (m = document.getElementById(t)), n && m.classList.add("opacity-0");
                            var e = function () {
                                    n && (m = document.getElementById(t)).classList.remove("opacity-0");
                                },
                                i = e,
                                g = function (e) {
                                    m = document.getElementById(t);
                                    var i = window.YT.get(t);
                                    isEmptyLadiPage(i) || isEmptyLadiPage(m) ? c.runTimeout(g, 100) : (c.runResizeAll(), a || u ? i.mute() : i.unMute(), r || d || i.playVideo(), isFunctionLadiPage(l) && l(), p(m));
                                };
                            new window.YT.Player(t, {
                                videoId: v,
                                playerVars: { rel: 0, modestbranding: 0, playsinline: n || a || s || u ? 1 : 0, controls: !n && o ? 1 : 0 },
                                events: {
                                    onReady: g,
                                    onStateChange: function (i) {
                                        if (i.data == window.YT.PlayerState.PLAYING) {
                                            if (((m = document.getElementById(t)), n)) {
                                                var a = function () {
                                                    window.YT.get(t).getCurrentTime() >= 0.1 ? e() : c.runTimeout(a, 100);
                                                };
                                                a();
                                            }
                                            p(m, !0);
                                            var o = document.getElementById(t + "_button_unmute");
                                            isEmptyLadiPage(o) || window.YT.get(t).mute();
                                        }
                                        i.data == window.YT.PlayerState.ENDED && window.YT.get(t).playVideo();
                                    },
                                    onError: i,
                                },
                            });
                        } catch (t) {}
                    };
                P();
            }
            if (e == c.const.VIDEO_TYPE.direct) {
                isEmptyLadiPage(_) || m.setAttribute("poster", _),
                    m.setAttribute("preload", "auto"),
                    m.setAttribute("controlslist", "nodownload"),
                    m.setAttribute("loop", ""),
                    r || d || m.setAttribute("autoplay", ""),
                    (n || a || s || u) && (m.setAttribute("playsinline", ""), m.setAttribute("webkit-playsinline", "")),
                    !n && o && m.setAttribute("controls", ""),
                    a || u ? m.setAttribute("muted", "") : m.removeAttribute("muted"),
                    n && m.classList.add("opacity-0");
                var h = function () {
                    n && (m = document.getElementById(t)).classList.remove("opacity-0");
                };
                m.removeAttribute("src"),
                    m.setAttribute("data-src", i),
                    (m.outerHTML = m.outerHTML.replaceAll("data-src=", "src=")),
                    (m = document.getElementById(t)),
                    isFunctionLadiPage(l) && l(m),
                    m.addEventListener("loadedmetadata", function (t) {
                        p(m);
                    }),
                    m.addEventListener("error", h),
                    m.addEventListener("playing", function (t) {
                        if (n) {
                            var e = function () {
                                m.currentTime >= 0.1 ? h() : c.runTimeout(e, 100);
                            };
                            e();
                        }
                        p(m, !0);
                        var i = document.getElementById(m.id + "_button_unmute");
                        isEmptyLadiPage(i) || (m.muted = !0);
                    });
            }
        }
    }),
    (LadiPageScriptV2.prototype.playVideo = function (t, e, i, a, n, o) {
        var r = document.getElementById(t);
        if (!isEmptyLadiPage(r)) {
            var d = document.getElementById(t + "_player");
            if ((o || n || this.pauseAllVideo(), isEmptyLadiPage(d))) {
                var s = r.getElementsByClassName("ladi-video")[0],
                    l = t + "_player";
                e == this.const.VIDEO_TYPE.youtube &&
                    ((s.innerHTML =
                        s.innerHTML +
                        '<iframe id="' +
                        l +
                        '" class="iframe-video-preload" data-video-type="' +
                        e +
                        '" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'),
                    this.runEventPlayVideo(l, e, i, n, !1, a, o)),
                    e == this.const.VIDEO_TYPE.direct &&
                        ((s.innerHTML = s.innerHTML + '<video id="' + l + '" class="iframe-video-preload" data-video-type="' + e + '" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; object-fit: cover;"></video>'),
                        this.runEventPlayVideo(l, e, i, n, !1, a, o));
            } else this.runEventReplayVideo(d.id, e, !0);
        }
    }),
    (LadiPageScriptV2.prototype.checkResizeImage = function (t) {
        var e = [".jpg", ".jpeg", ".png"],
            i = function (t) {
                for (var i = !1, a = 0; a < e.length; a++)
                    if (t.endsWith(e[a])) {
                        i = !0;
                        break;
                    }
                return i;
            };
        if (!i(t.toLowerCase())) {
            var a = this.getElementAHref(t, !0);
            return (a.search = ""), i(a.href);
        }
        return !0;
    }),
    (LadiPageScriptV2.prototype.getOptimizeImage = function (t, e, i, a, n, o, r) {
        if (isEmptyLadiPage(t) || !isStringLadiPage(t)) return t;
        var d = t.split("/"),
            s = d.indexOf("");
        if (
            (-1 != s && d.length > s + 1 && (d[s + 1] = d[s + 1].toLowerCase()),
            (s = d.indexOf(this.const.STATIC_W_DOMAIN.toLowerCase())),
            this.checkResizeImage(t) && -1 != s && (d.length == s + 3 || (d.length == s + 6 && "ls" == d[3] && "product" == d[5]) || (d.length == s + 4 && "luid" == d[3] && "avatar" == d[4]) || (d.length == s + 4 && "rbg" == d[4])))
        ) {
            var l = d[s + 1].toLowerCase(),
                c = !0;
            if (l.startsWith("s")) {
                var u = l.split("x");
                2 == u.length && parseFloatLadiPage(u[1]) == u[1] && (c = !1);
            }
            if (c) {
                if (r || n) {
                    if (((e = parseInt(e) || 0), (i = parseInt(i) || 0), a)) {
                        var p = this.const.RESIZE_RANGE + (o ? this.const.RESIZE_ADD_PIXEL_THUMB : this.const.RESIZE_ADD_PIXEL);
                        (e <= 0 || i <= 0) && (p *= 2), (e = e - (e % this.const.RESIZE_RANGE) + p), (i = i - (i % this.const.RESIZE_RANGE) + p);
                    }
                } else (e = this.const.WIDTH_SECTION_RESIZE[LadiPage.data.device_screen]), (i = this.const.WIDTH_SECTION_RESIZE[LadiPage.data.device_screen]);
                d.insert(s + 1, "s" + e + "x" + i);
            }
        }
        return (t = d.join("/"));
    }),
    (LadiPageScriptV2.prototype.historyReplaceState = function (t) {
        try {
            window.history.replaceState(null, null, t);
        } catch (t) {}
    }),
    (LadiPageScriptV2.prototype.resetViewport = function () {
        isEmptyLadiPage(this.runtime.tmp.timeoutViewport) || this.removeTimeout(this.runtime.tmp.timeoutViewport), isFunctionLadiPage(window.ladi_viewport) && (this.runtime.tmp.timeoutViewport = this.runTimeout(window.ladi_viewport, 10));
    }),
    (LadiPageScriptV2.prototype.runStoryPage = function () {
        var t = this,
            e = t.runtime.story_page;
        if (isObjectLadiPage(e)) {
            var i = document.getElementsByClassName("ladi-wraper")[0];
            if (!isEmptyLadiPage(i)) {
                var a = document.getElementsByClassName("ladi-story-page-progress-bar")[0];
                isEmptyLadiPage(a) || a.parentElement.removeChild(a);
                var n = document.querySelectorAll('.ladi-section:not([id="' + this.runtime.builder_section_popup_id + '"]):not([id="' + this.runtime.builder_section_background_id + '"])');
                if (0 != n.length) {
                    (a = document.createElement("div")).className = "ladi-story-page-progress-bar";
                    for (
                        var o = null,
                            r =
                                (n[0],
                                function (e, i) {
                                    e.addEventListener("click", function (e) {
                                        e.stopPropagation(), t.removeTimeout(t.runtime.tmp.story_page_next_timeout_id), window.ladi(i.id, i).scroll();
                                    });
                                }),
                            d = 0;
                        d < n.length;
                        d++
                    ) {
                        var s = document.createElement("div");
                        (s.className = "ladi-story-page-progress-bar-item"), s.style.setProperty("width", "calc(100% / " + n.length + " - 10px)"), r(s, n[d]), a.appendChild(s), 0 == d && (o = s);
                    }
                    i.appendChild(a), (t.runtime.tmp.story_page_mouse_down = !1), (t.runtime.tmp.story_page_current_page = 1);
                    var l = function (t, i) {
                            if (!isEmptyLadiPage(t)) {
                                i && t.click();
                                for (var a = t; !isEmptyLadiPage(a.previousElementSibling); ) (a = a.previousElementSibling).classList.add("active");
                                for (var n = t; !isEmptyLadiPage(n.nextElementSibling); ) (n = n.nextElementSibling).classList.remove("active");
                                t.classList.remove("active");
                                var o = t.parentElement.getElementsByTagName("span")[0];
                                isEmptyLadiPage(o) || o.parentElement.removeChild(o), (o = document.createElement("span")), t.appendChild(o), e.is_autoplay || o.style.setProperty("width", "100%");
                            }
                        },
                        c = function () {
                            if (e.is_autoplay) {
                                var i = 300,
                                    a = null;
                                if (
                                    isEmptyLadiPage(t.runtime.tmp.current_default_popup_id) &&
                                    !t.runtime.tmp.story_page_mouse_down &&
                                    !t.runtime.tmp.story_page_scroll &&
                                    ((a = document.querySelector(".ladi-story-page-progress-bar-item span")), !isEmptyLadiPage(a))
                                ) {
                                    var n = parseFloatLadiPage(a.style.getPropertyValue("width")) || 0;
                                    (n = (n = (((n = (1e3 * e.autoplay_time) / (100 / n)) + i) / (1e3 * e.autoplay_time)) * 100) > 100 ? 100 : n),
                                        a.style.setProperty("width", n + "%"),
                                        n >= 100 &&
                                            ((t.runtime.tmp.story_page_next_timeout_id = t.runTimeout(function () {
                                                isEmptyLadiPage(a.parentElement) || l(a.parentElement.nextElementSibling, !0);
                                            }, i)),
                                            (i *= 2));
                                }
                                t.runtime.tmp.story_page_timeout_id = t.runTimeout(c, i);
                            }
                        };
                    l(o, !1),
                        (t.runtime.tmp.story_page_timeout_id = t.runTimeout(c, 300)),
                        document.addEventListener("mousedown", function (e) {
                            t.runtime.tmp.story_page_mouse_down = !0;
                        }),
                        document.addEventListener(
                            "touchstart",
                            function (e) {
                                t.runtime.tmp.story_page_mouse_down = !0;
                            },
                            t.runtime.scrollEventPassive
                        ),
                        document.addEventListener("mouseup", function (e) {
                            t.runtime.tmp.story_page_mouse_down = !1;
                        }),
                        document.addEventListener("touchend", function (e) {
                            t.runtime.tmp.story_page_mouse_down = !1;
                        }),
                        i.addEventListener(
                            "scroll",
                            function (a) {
                                isEmptyLadiPage(t.runtime.tmp.current_default_popup_id) &&
                                    ((t.runtime.tmp.story_page_scroll = !0),
                                    t.removeTimeout(t.runtime.tmp.story_page_scroll_timeout_id),
                                    t.removeTimeout(t.runtime.tmp.story_page_timeout_id),
                                    (t.runtime.tmp.story_page_scroll_timeout_id = t.runTimeout(function () {
                                        var a = 0,
                                            n = e.type == t.const.STORY_PAGE.horizontal ? i.scrollLeft / i.clientWidth : i.scrollTop / i.clientHeight;
                                        if ((n = Math.floor(n + 1.5)) != t.runtime.tmp.story_page_current_page) {
                                            t.runtime.tmp.story_page_current_page = n;
                                            var o = document.querySelector(".ladi-story-page-progress-bar-item:nth-child(" + n + ")");
                                            t.removeTimeout(t.runtime.tmp.story_page_next_timeout_id), l(o, !1), (a = 100);
                                        }
                                        (t.runtime.tmp.story_page_scroll = !1), delete t.runtime.tmp.story_page_scroll_timeout_id, (t.runtime.tmp.story_page_timeout_id = t.runTimeout(c, a));
                                    }, 300)));
                            },
                            t.runtime.scrollEventPassive
                        );
                }
            }
        }
    }),
    (LadiPageScriptV2.prototype.runThankyouPage = function () {
        var t = this.runtime.thankyou_page;
        if (isObjectLadiPage(t)) {
            var e = { is_thankyou_page: !0 };
            (e.conversion_name = t.event_value),
                (e.google_ads_conversion = t.event_id),
                (e.google_ads_label = t.event_label),
                (e.purchase_value = t.purchase_value),
                (e.event_category = "LadiPageThankYouPage"),
                this.runEventTracking(null, e),
                delete this.runtime.thankyou_page;
        }
    }),
    (LadiPageScriptV2.prototype.runResizeSectionBackground = function () {
        var t = this;
        t instanceof LadiPageScriptV2 || (t = LadiPageScript);
        try {
            for (var e = document.querySelectorAll(".ladi-section .ladi-section-background iframe.ladi-section-background-video"), i = 0; i < e.length; i++) {
                var a = e[i],
                    n = parseFloatLadiPage(a.getAttribute("width")) || 0,
                    o = parseFloatLadiPage(a.getAttribute("height")) || 0;
                if (!(n <= 0 || o <= 0)) {
                    var r = t.findAncestor(a, "ladi-section-background"),
                        d = r.clientWidth,
                        s = (o / n) * d;
                    s < r.clientHeight && ((d = (r.clientHeight / s) * d), (s = r.clientHeight));
                    var l = (r.clientHeight - s) / 2,
                        c = (r.clientWidth - d) / 2;
                    a.style.setProperty("top", (parseFloatLadiPage(l) || 0) + "px"),
                        a.style.setProperty("left", (parseFloatLadiPage(c) || 0) + "px"),
                        a.style.setProperty("width", (parseFloatLadiPage(d) || 0) + "px"),
                        a.style.setProperty("height", (parseFloatLadiPage(s) || 0) + "px");
                }
            }
        } catch (t) {}
    }),
    (LadiPageScriptV2.prototype.runResizeAll = function () {
        var t = this;
        t instanceof LadiPageScriptV2 || (t = LadiPageScript), t.removeTimeout(t.runtime.tmp.timeout_is_resize_all_id);
        try {
            isFunctionLadiPage(window.ladi_viewport) && window.ladi_viewport(), t.runtime.tmp.generateCart();
            for (var e = document.querySelectorAll("#" + t.runtime.builder_section_popup_id + " .ladi-container > .ladi-element"), i = 0; i < e.length; i++)
                "none" != getComputedStyle(e[i]).display && ((t.runtime.tmp.is_resize_all = !0), window.ladi(e[i].id).show(!0, { checkHidePopupOther: !1 }));
            t.runResizeSectionBackground();
        } catch (t) {}
        t.runtime.tmp.timeout_is_resize_all_id = t.runTimeout(function () {
            delete t.runtime.tmp.is_resize_all;
        }, 200);
    }),
    (LadiPageScriptV2.prototype.runEventResize = function (t) {
        var e = this;
        e instanceof LadiPageScriptV2 || (e = LadiPageScript), isEmptyLadiPage(e.runtime.tmp.timeoutResizeAll) || e.removeTimeout(e.runtime.tmp.timeoutResizeAll), (e.runtime.tmp.timeoutResizeAll = e.runTimeout(e.runResizeAll, 10));
    }),
    (LadiPageScriptV2.prototype.runEventOrientationChange = function (t) {
        var e = this;
        e instanceof LadiPageScriptV2 || (e = LadiPageScript), e.runEventResize(t);
    }),
    (LadiPageScriptV2.prototype.runAfterLocation = function () {
        var t = this;
        if ((t instanceof LadiPageScriptV2 || (t = LadiPageScript), t.runtime.isRun)) {
            for (; t.runtime.tmp.listAfterLocation.length > 0; ) {
                t.runtime.tmp.listAfterLocation.shift()();
            }
            t.reloadFeeShipping();
        } else t.runTimeout(t.runAfterLocation, 100);
    }),
    (LadiPageScriptV2.prototype.removeLazyloadPopup = function (t) {
        var e = document.getElementById(t);
        if (!isEmptyLadiPage(e)) for (var i = e.getElementsByClassName("ladi-lazyload"); i.length > 0; ) i[0].classList.remove("ladi-lazyload");
    }),
    (LadiPageScriptV2.prototype.reloadLazyload = function (t) {
        var e = this;
        if ((e instanceof LadiPageScriptV2 || (e = LadiPageScript), e.runtime.tmp.is_loaded_func_done)) {
            var i = [];
            if (t && isObjectLadiPage(e.runtime.story_page)) {
                var a = document.getElementsByClassName("ladi-section")[0];
                if (!isEmptyLadiPage(a)) for (i = a.getElementsByClassName("ladi-lazyload"); i.length > 0; ) i[0].classList.remove("ladi-lazyload");
            } else {
                i = document.getElementsByClassName("ladi-lazyload");
                for (var n = [], o = 0; o < i.length; o++) {
                    var r = e.getElementBoundingClientRect(i[o]).y + window.scrollY;
                    window.scrollY + e.getHeightDevice() > r && r + i[o].offsetHeight > window.scrollY && n.push(i[o]);
                }
                n.forEach(function (t) {
                    t.classList.remove("ladi-lazyload");
                });
                for (var d = document.querySelectorAll(".ladi-gallery .ladi-gallery-view-item.selected:not(.ladi-lazyload)"), s = 0; s < d.length; s++)
                    if (isEmptyLadiPage(d[s].getAttribute("data-lazyload"))) {
                        d[s].setAttribute("data-lazyload", !0);
                        for (var l = d[s].parentElement.getElementsByClassName("ladi-lazyload"); l.length > 0; ) l[0].classList.remove("ladi-lazyload");
                    }
            }
        }
    }),
    (LadiPageScriptV2.prototype.documentLoaded = function () {
        var t = this;
        t instanceof LadiPageScriptV2 || (t = LadiPageScript), (t.const.LANG = JSON.stringify(t.const.LANG)), (t.const.LANG = t.convertReplacePrefixStr(t.const.LANG)), (t.const.LANG = JSON.parse(t.const.LANG));
        var e = t.getURLSearchParams(null, null, !0),
            i = e.ladishow,
            a = e.ladihide,
            n = e.laditop,
            o = window.location.hash;
        isEmptyLadiPage(i) ? (i = []) : isArrayLadiPage(i) || (i = i.split(",").removeSpace()),
            isEmptyLadiPage(a) ? (a = []) : isArrayLadiPage(a) || (a = a.split(",").removeSpace()),
            isEmptyLadiPage(n) ? (n = []) : isArrayLadiPage(n) || (n = n.split(",").removeSpace().reverse());
        try {
            var r = window.ladi("LADI_CAMP_END_DATE").get_cookie(),
                d = window.ladi("LADI_CAMP_CONFIG").get_cookie();
            if (!isEmptyLadiPage(r) && !isEmptyLadiPage(d)) {
                d = JSON.parse(Base64.decode(d));
                var s = ((r = parseInt(r) || 0) - Date.now()) / 24 / 60 / 60 / 1e3;
                if (s > 0 && isArrayLadiPage(d.dynamic_content.cookie)) {
                    var l = [];
                    d.dynamic_content.cookie.forEach(function (t) {
                        var e = t.split("=");
                        2 != (e = e.removeSpace()).length || isEmptyLadiPage(e[0]) || isEmptyLadiPage(e[1]) || l.push({ name: e[0], value: e[1] });
                    }),
                        l.forEach(function (t) {
                            window.ladi(t.name).set_cookie(t.value, s);
                        });
                }
                (a = d.dynamic_content.hide || []),
                    (i = d.dynamic_content.show || []),
                    (n = d.dynamic_content.top || []),
                    isArrayLadiPage(d.dynamic_content.scroll) && d.dynamic_content.scroll.length > 0 && (o = "#" + d.dynamic_content.scroll.pop());
            }
        } catch (t) {}
        var c = null,
            u = [];
        if (
            (i.forEach(function (t) {
                var e = document.getElementById(t);
                isEmptyLadiPage(e) || (e.getElementsByClassName("ladi-popup").length > 0 && u.push(t));
            }),
            u.length > 0 && !isEmptyLadiPage(o))
        )
            try {
                (c = document.querySelector(o)), isEmptyLadiPage(c) || isEmptyLadiPage(c.id) || !c.classList.contains("ladi-section") || (window.ladi(c.id).scroll(!1, !0), (o = null));
            } catch (t) {}
        if (
            (a.forEach(function (t) {
                window.ladi(t).hide();
            }),
            i.forEach(function (t) {
                window.ladi(t).show();
            }),
            n.forEach(function (t) {
                window.ladi(t).top();
            }),
            !isEmptyLadiPage(o))
        )
            try {
                (c = document.querySelector(o)),
                    isEmptyLadiPage(c) ||
                        isEmptyLadiPage(c.id) ||
                        t.runTimeout(function () {
                            window.ladi(c.id).scroll();
                        }, 300);
            } catch (t) {}
        if ((t.resetViewport(), t.runEventScroll(), !isEmptyLadiPage(t.runtime.tracking_global_url))) {
            var p = !1,
                m = window;
            isObjectLadiPage(t.runtime.story_page) && (m = document.getElementsByClassName("ladi-wraper")[0]);
            var g = function () {
                p || ((p = !0), t.loadScript(t.runtime.tracking_global_url + "?v=" + Date.now()), m.removeEventListener("scroll", g), document.removeEventListener("mousemove", g), document.removeEventListener("touchstart", g));
            };
            m.addEventListener("scroll", g, t.runtime.scrollEventPassive),
                document.addEventListener("mousemove", g),
                document.addEventListener("touchstart", g, t.runtime.scrollEventPassive),
                t.runTimeout(g, t.runtime.tracking_global_delay);
        }
        for (; t.runtime.list_loaded_func.length > 0; ) {
            t.runtime.list_loaded_func.shift()();
        }
        t.runtime.tmp.is_loaded_func_done = !0;
        var _ = document.getElementById("style_update_height_element");
        isEmptyLadiPage(_) || _.parentElement.removeChild(_);
        var y = document.getElementById("style_animation");
        isEmptyLadiPage(y) || y.parentElement.removeChild(y), t.reloadLazyload(!1);
    }),
    (LadiPageScriptV2.prototype.runConversionApi = function (t, e, i) {
        !isEmptyLadiPage(t) && !isEmptyLadiPage(e) && isObjectLadiPage(window.ladi_conversion_api) && isObjectLadiPage(window.ladi_conversion_api[t]) && (window.ladi_conversion_api[t][e] = i);
        if (
            isObjectLadiPage(window.ladi_conversion_api) &&
            isObjectLadiPage(window.ladi_conversion_api.facebook) &&
            isArrayLadiPage(window.ladi_conversion_api.facebook.pixels) &&
            isArrayLadiPage(window.ladi_conversion_api.facebook.events) &&
            isFunctionLadiPage(window.fbq)
        ) {
            (window.ladi_conversion_api.facebook.pixels = window.ladi_conversion_api.facebook.pixels.unique()),
                (window.ladi_conversion_api.facebook.fbc = window.ladi("_fbc").get_cookie()),
                (window.ladi_conversion_api.facebook.fbp = window.ladi("_fbp").get_cookie());
            for (var a = 0; a < window.ladi_conversion_api.facebook.events.length; a++) {
                var n = window.ladi_conversion_api.facebook.events[a].data;
                (n.event_id = n.eventID), delete n.eventID, (window.ladi_conversion_api.facebook.events[a].data = n);
            }
            this.runtime.tmp.runTrackingAnalytics("ConversionApi", { data: window.ladi_conversion_api }),
                delete window.ladi_conversion_api.facebook.fbc,
                delete window.ladi_conversion_api.facebook.fbp,
                delete window.ladi_conversion_api.facebook.events;
        }
    }),
    (LadiPageScriptV2.prototype.getWidthDevice = function (t) {
        if (this.runtime.is_mobile_only) {
            var e = document.getElementsByClassName("ladi-wraper")[0];
            if (!isEmptyLadiPage(e)) return e.clientWidth;
        }
        var i = window.ladi_screen_width || window.screen.width;
        return t ? (window.innerWidth > 0 ? window.innerWidth : i) : window.outerWidth > 0 ? window.outerWidth : i;
    }),
    (LadiPageScriptV2.prototype.getHeightDevice = function (t) {
        return window.outerHeight > 0 && !this.runtime.isDesktop && ((t && window.outerHeight > window.innerHeight) || (!t && window.innerHeight > window.outerHeight)) ? window.outerHeight : window.innerHeight;
    }),
    (LadiPageScriptV2.prototype.startAutoScroll = function (t, e, i, a) {
        if (this.runtime.isDesktop ? i : a) {
            var n = document.getElementById(t);
            if (!isEmptyLadiPage(n) && !n.classList.contains("ladi-auto-scroll")) {
                var o = 0;
                if ("section" != e) {
                    if (n.clientWidth <= this.getWidthDevice()) return;
                    o = (o = parseFloatLadiPage(getComputedStyle(n).left) || 0) > 0 ? 0 : -1 * o;
                } else {
                    for (var r = n.querySelectorAll(".ladi-container > .ladi-element"), d = 0; d < r.length; d++) {
                        var s = parseFloatLadiPage(getComputedStyle(r[d]).left) || 0;
                        s < o && (o = s);
                    }
                    (o = o > 0 ? 0 : -1 * o), n.querySelector(".ladi-container").style.setProperty("margin-left", o + "px");
                }
                n.classList.add("ladi-auto-scroll"), (n.scrollLeft = o);
            }
        }
    }),
    (LadiPageScriptV2.prototype.getLinkUTMRedirect = function (t, e) {
        var i = this.createTmpElement("a", "", { href: t }),
            a = this.getURLSearchParams(e, null, !1);
        if (!isEmptyLadiPage(i.href) && !isEmptyLadiPage(i.host)) {
            var n = this.getURLSearchParams(i.search, null, !1);
            ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach(function (t) {
                isEmptyLadiPage(n[t]) && !isEmptyLadiPage(a[t]) && (i.search = i.search + (isEmptyLadiPage(i.search) ? "?" : "&") + t + "=" + encodeURIComponent(a[t]));
            });
            var o = [];
            isArrayLadiPage(window.LadiPageURLSearchParamsCustom) && (o = window.LadiPageURLSearchParamsCustom),
                isStringLadiPage(window.LadiPageURLSearchParamsCustom) && (o = [window.LadiPageURLSearchParamsCustom]),
                o.forEach(function (t) {
                    isEmptyLadiPage(n[t]) && !isEmptyLadiPage(a[t]) && (i.search = i.search + (isEmptyLadiPage(i.search) ? "?" : "&") + t + "=" + encodeURIComponent(a[t]));
                });
        }
        return i.href;
    }),
    (LadiPageScriptV2.prototype.randomInt = function (t, e) {
        return (t = Math.ceil(t)), (e = Math.floor(e)), Math.floor(Math.random() * (e - t + 1)) + t;
    }),
    (LadiPageScriptV2.prototype.randomString = function (t) {
        for (var e = "", i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", a = i.length, n = 0; n < t; n++) e += i.charAt(Math.floor(Math.random() * a));
        return e;
    }),
    (LadiPageScriptV2.prototype.runCallback = function (t, e) {
        if (isFunctionLadiPage(e)) {
            var i = this;
            if (t) {
                var a = i.runInterval(function () {
                    i.removeInterval(a), i.runCallback(!1, e);
                }, 0);
                return;
            }
            e();
        }
    }),
    (LadiPageScriptV2.prototype.runTimeout = function (t, e) {
        if (isFunctionLadiPage(t)) {
            if (!isEmptyLadiPage(e) && e > 0) return setTimeout(t, e);
            t();
        }
    }),
    (LadiPageScriptV2.prototype.removeTimeout = function (t) {
        return clearTimeout(t);
    }),
    (LadiPageScriptV2.prototype.removeInterval = function (t) {
        return clearInterval(t);
    }),
    (LadiPageScriptV2.prototype.runInterval = function (t, e) {
        if (isFunctionLadiPage(t)) return setInterval(t, e);
    }),
    (LadiPageScriptV2.prototype.getURLSearchParams = function (t, e, i) {
        var a = {},
            n = isNullLadiPage(t);
        if (((t = n ? window.location.search : t), !isEmptyLadiPage(t)))
            for (var o = t.substr(1).split("&"), r = 0; r < o.length; ++r) {
                var d = o[r].split("=", 2);
                if (isNullLadiPage(a[d[0]])) {
                    1 == d.length ? (a[d[0]] = "") : (a[d[0]] = decodeURIComponentLadiPage(d[1].replace(/\+/g, " ")));
                    try {
                        if (i) {
                            var s = JSON.parse(a[d[0]]);
                            Number.isInteger(s) || ((a[d[0]] = s), 0 == a[d[0]].length ? (a[d[0]] = "") : 1 == a[d[0]].length && (a[d[0]] = a[d[0]][0]));
                        }
                    } catch (t) {}
                } else i && (isArrayLadiPage(a[d[0]]) || (a[d[0]] = [a[d[0]]]), 1 == d.length ? a[d[0]].push("") : a[d[0]].push(decodeURIComponentLadiPage(d[1].replace(/\+/g, " "))));
            }
        return (
            n &&
                ["email", "phone"].forEach(function (t) {
                    try {
                        var e = a[t];
                        if (!isEmptyLadiPage(e)) {
                            var i = Base64.decode(e);
                            e == Base64.encode(i) && (a[t] = i);
                        }
                    } catch (t) {}
                }),
            isEmptyLadiPage(e) ? a : a[e]
        );
    }),
    (LadiPageScriptV2.prototype.getVideoId = function (t, e) {
        if (isEmptyLadiPage(e)) return e;
        if (t == this.const.VIDEO_TYPE.youtube) {
            var i = this.createTmpElement("a", "", { href: e });
            -1 != e.toLowerCase().indexOf("watch")
                ? (e = this.getURLSearchParams(i.search, "v", !1))
                : -1 != e.toLowerCase().indexOf("embed/")
                ? (e = i.pathname.substring("/embed/".length))
                : -1 != e.toLowerCase().indexOf("shorts/")
                ? (e = i.pathname.substring("/shorts/".length))
                : -1 != e.toLowerCase().indexOf("youtu.be") && (e = i.pathname.substring("/".length));
        }
        return e;
    }),
    (LadiPageScriptV2.prototype.sendRequest = function (t, e, i, a, n, o) {
        var r = this,
            d = function (s) {
                var l = s[e],
                    c = function (s, u) {
                        if (l.list.length <= s) 0 == s ? d({}) : isFunctionLadiPage(o) && o(r.const.LANG.REQUEST_SEND_ERROR, 0, u, e);
                        else {
                            var p = {};
                            (p.timeout = l.timeout),
                                (p.onreadystatechange = function () {
                                    this.readyState == XMLHttpRequest.DONE && (200 == this.status ? o(this.responseText, this.status, this, e) : c(s + 1, this));
                                }),
                                r.sendRequestWithOption(t, l.list[s], i, a, n, p);
                        }
                    };
                if (isObjectLadiPage(l)) return c(0, null);
                r.sendRequestWithOption(t, e, i, a, n, null, o);
            },
            s = function () {
                var t = r.runtime.tmp.send_request_configs;
                if (!isObjectLadiPage(t)) return (r.runtime.tmp.send_request_configs = {}), void s();
                d(t);
            };
        s();
    }),
    (LadiPageScriptV2.prototype.sendRequestWithOption = function (t, e, i, a, n, o, r) {
        if (this.runtime.has_popupx && this.runtime.request_through_parent) {
            var d = this.randomId();
            return (
                (this.runtime.tmp["request_callback_id_" + d] = r),
                void this.runtime.tmp.runActionPopupX({ request_data: { method: t, url: e, data: i, async: a, headers: n, options: o, callback_id: d }, action: { type: "send_request_with_option" } })
            );
        }
        var s = new XMLHttpRequest();
        if (isFunctionLadiPage(this.runtime.send_request_response[e]) && this.runtime.send_request_response[e](e, i, r)) return;
        isFunctionLadiPage(r) &&
            (s.onreadystatechange = function () {
                var t = null;
                try {
                    t = this.responseText;
                } catch (t) {}
                r(t, this.status, this, e);
            }),
            s.open(t, e, a);
        isObjectLadiPage(n) &&
            Object.keys(n).forEach(function (t) {
                s.setRequestHeader(t, n[t]);
            }),
            isObjectLadiPage(o) &&
                Object.keys(o).forEach(function (t) {
                    s[t] = o[t];
                }),
            s.send(i);
    }),
    (LadiPageScriptV2.prototype.deleteCookie = function (t) {
        return window.ladi(t).delete_cookie();
    }),
    (LadiPageScriptV2.prototype.setCookie = function (t, e, i, a, n, o) {
        return window.ladi(e).set_cookie(i, a, o, t, n);
    }),
    (LadiPageScriptV2.prototype.getCookie = function (t) {
        return window.ladi(t).get_cookie();
    }),
    (LadiPageScriptV2.prototype.removeSticky = function () {
        var t = this;
        t instanceof LadiPageScriptV2 || (t = LadiPageScript);
        for (var e = document.querySelectorAll('[data-sticky="true"]'), i = 0; i < e.length; i++)
            e[i].removeAttribute("data-top"),
                e[i].removeAttribute("data-left"),
                e[i].style.removeProperty("top"),
                e[i].style.removeProperty("left"),
                e[i].style.removeProperty("width"),
                e[i].style.removeProperty("position"),
                e[i].style.removeProperty("z-index");
        t.runEventScroll();
    }),
    (LadiPageScriptV2.prototype.runEventBackdropPopupClick = function (t) {
        t.stopPropagation();
        var e = this;
        e instanceof LadiPageScriptV2 || (e = LadiPageScript);
        for (var i = null, a = document.querySelectorAll('[data-popup-backdrop="true"]'), n = 0; n < a.length; n++) "none" != getComputedStyle(a[n]).display && (i = a[n].id);
        if (!isEmptyLadiPage(i)) {
            var o = document.querySelector("#" + i + " .popup-close");
            if (!isEmptyLadiPage(o) && "none" == getComputedStyle(o).display) return;
        }
        e.runRemovePopup(i, e.runtime.isClient);
    }),
    (LadiPageScriptV2.prototype.runEventBackdropDropboxClick = function (t) {
        t.stopPropagation();
        var e = this;
        e instanceof LadiPageScriptV2 || (e = LadiPageScript);
        for (var i = document.querySelectorAll('[data-dropbox-backdrop="true"]'), a = 0; a < i.length; a++) window.ladi(i[a].id).hide();
        document.getElementById(e.runtime.backdrop_dropbox_id).style.removeProperty("display");
    }),
    (LadiPageScriptV2.prototype.runEventMouseMove = function (t) {
        t.stopPropagation();
        var e = this;
        e instanceof LadiPageScriptV2 || (e = LadiPageScript), (t = e.getEventCursorData(t));
        var i = null,
            a = 0,
            n = 0,
            o = 0;
        isEmptyLadiPage(e.runtime.current_element_mouse_down_carousel) ||
            ((i = document.getElementById(e.runtime.current_element_mouse_down_carousel)),
            (a = t.pageX - e.runtime.current_element_mouse_down_carousel_position_x),
            (n = parseFloatLadiPage(i.getElementsByClassName("ladi-carousel-content")[0].getAttribute("data-left")) || 0),
            (n += a) < (o = -((parseFloatLadiPage(e.runtime.eventData[e.runtime.current_element_mouse_down_carousel][e.runtime.device + ".option.carousel_crop.width"]) || 0) - i.clientWidth)) && (n = o),
            n > 0 && (n = 0),
            i.getElementsByClassName("ladi-carousel-content")[0].style.setProperty("left", n + "px"));
        if (!isEmptyLadiPage(e.runtime.current_element_mouse_down_gallery_view)) {
            (i = document.querySelector('[data-runtime-id="' + e.runtime.current_element_mouse_down_gallery_view + '"]')), (a = t.pageX - e.runtime.current_element_mouse_down_gallery_view_position_x);
            var r = parseFloatLadiPage(i.getAttribute("data-current")) || 0;
            r == (parseFloatLadiPage(i.getAttribute("data-max-item")) || 0) - 1 && a < 0 && (a = 0),
                a > 0 && 0 == r && (a = 0),
                a >= e.runtime.current_element_mouse_down_gallery_view_diff
                    ? ((e.runtime.current_element_mouse_down_gallery_view = null), (e.runtime.current_element_mouse_down_gallery_view_position_x = 0), i.getElementsByClassName("ladi-gallery-view-arrow-left")[0].click())
                    : a <= -e.runtime.current_element_mouse_down_gallery_view_diff
                    ? ((e.runtime.current_element_mouse_down_gallery_view = null), (e.runtime.current_element_mouse_down_gallery_view_position_x = 0), i.getElementsByClassName("ladi-gallery-view-arrow-right")[0].click())
                    : i.querySelectorAll(".ladi-gallery-view-item.selected").length > 0 && i.querySelectorAll(".ladi-gallery-view-item.selected")[0].style.setProperty("left", a + "px");
        }
        isEmptyLadiPage(e.runtime.current_element_mouse_down_gallery_control) ||
            ((i = document.querySelector('[data-runtime-id="' + e.runtime.current_element_mouse_down_gallery_control + '"]')),
            (a = t.pageX - e.runtime.current_element_mouse_down_gallery_control_position_x),
            (n = parseFloatLadiPage(i.getElementsByClassName("ladi-gallery-control-box")[0].getAttribute("data-left")) || 0),
            (n += a) <
                (o = (parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-gallery-control")[0]).width) || 0) - (parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-gallery-control-box")[0]).width) || 0)) &&
                (n = o),
            n > 0 && (n = 0),
            i.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("left", n + "px"));
    }),
    (LadiPageScriptV2.prototype.runEventMouseUp = function (t) {
        t.stopPropagation();
        var e = this;
        e instanceof LadiPageScriptV2 || (e = LadiPageScript), (t = e.getEventCursorData(t));
        var i = null,
            a = 0;
        if (!isEmptyLadiPage(e.runtime.current_element_mouse_down_carousel)) {
            delete e.runtime.timenext_carousel[e.runtime.current_element_mouse_down_carousel], (a = t.pageX - e.runtime.current_element_mouse_down_carousel_position_x);
            var n = (i = document.getElementById(e.runtime.current_element_mouse_down_carousel)).getElementsByClassName("ladi-carousel-content")[0].getAttribute("data-left");
            i.getElementsByClassName("ladi-carousel-content")[0].removeAttribute("data-left"),
                i.getElementsByClassName("ladi-carousel-content")[0].style.removeProperty("transition-duration"),
                (e.runtime.current_element_mouse_down_carousel = null),
                a >= e.runtime.current_element_mouse_down_carousel_diff
                    ? i.getElementsByClassName("ladi-carousel-arrow-left")[0].click()
                    : a <= -e.runtime.current_element_mouse_down_carousel_diff
                    ? i.getElementsByClassName("ladi-carousel-arrow-right")[0].click()
                    : i.getElementsByClassName("ladi-carousel-content").length > 0 &&
                      (i.getElementsByClassName("ladi-carousel-content")[0].style.setProperty("transition-duration", "100ms"),
                      i.getElementsByClassName("ladi-carousel-content")[0].style.setProperty("left", n),
                      e.runTimeout(function () {
                          i.getElementsByClassName("ladi-carousel-content")[0].style.removeProperty("transition-duration");
                      }, 1));
        }
        if (
            (isEmptyLadiPage(e.runtime.current_element_mouse_down_gallery_view) ||
                ((i = document.querySelector('[data-runtime-id="' + e.runtime.current_element_mouse_down_gallery_view + '"]')).querySelectorAll(".ladi-gallery-view-item.selected").length > 0 &&
                    i.querySelectorAll(".ladi-gallery-view-item.selected")[0].style.removeProperty("left")),
            !isEmptyLadiPage(e.runtime.current_element_mouse_down_gallery_control))
        )
            if (
                ((i = document.querySelector('[data-runtime-id="' + e.runtime.current_element_mouse_down_gallery_control + '"]')).getElementsByClassName("ladi-gallery-control-box")[0].removeAttribute("data-left"),
                i.getElementsByClassName("ladi-gallery-control-box")[0].style.removeProperty("transition-duration"),
                i.getElementsByClassName("ladi-gallery-control-arrow-left")[0].classList.remove("opacity-0"),
                i.getElementsByClassName("ladi-gallery-control-arrow-right")[0].classList.remove("opacity-0"),
                i.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-top") || i.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-bottom"))
            ) {
                var o = parseFloatLadiPage(i.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("left")) || 0,
                    r = parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-gallery-control-box")[0]).width) || 0;
                (r = (r = -(r -= parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-gallery-control")[0]).width) || 0)) > 0 ? 0 : r),
                    o > 0 && (o = 0),
                    o >= 0 && i.getElementsByClassName("ladi-gallery-control-arrow-left")[0].classList.add("opacity-0"),
                    o <= r && i.getElementsByClassName("ladi-gallery-control-arrow-right")[0].classList.add("opacity-0");
            } else {
                var d = parseFloatLadiPage(i.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("top")) || 0,
                    s = parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-gallery-control-box")[0]).height) || 0;
                (s = (s = -(s -= parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-gallery-control")[0]).height) || 0)) > 0 ? 0 : s),
                    d > 0 && (d = 0),
                    d >= 0 && i.getElementsByClassName("ladi-gallery-control-arrow-left")[0].classList.add("opacity-0"),
                    d <= s && i.getElementsByClassName("ladi-gallery-control-arrow-right")[0].classList.add("opacity-0");
            }
        (e.runtime.current_element_mouse_down_carousel_position_x = 0), (e.runtime.current_element_mouse_down_gallery_view = null), (e.runtime.current_element_mouse_down_gallery_view_position_x = 0);
        var l = 0;
        e.runtime.current_element_mouse_down_gallery_control_time + e.runtime.current_element_mouse_down_gallery_control_time_click < Date.now() && (l = 5),
            e.runTimeout(function () {
                (e.runtime.current_element_mouse_down_gallery_control = null), (e.runtime.current_element_mouse_down_gallery_control_time = 0), (e.runtime.current_element_mouse_down_gallery_control_position_x = 0);
            }, l);
    }),
    (LadiPageScriptV2.prototype.runEventMouseLeave = function (t) {
        var e = this;
        e instanceof LadiPageScriptV2 || (e = LadiPageScript),
            Object.keys(e.runtime.eventData).forEach(function (t) {
                var i = e.runtime.eventData[t];
                if ("popup" == i.type && i["option.show_popup_exit_page"]) {
                    if ((isObjectLadiPage(e.runtime.tmp.popup_leave_show) || (e.runtime.tmp.popup_leave_show = {}), e.runtime.tmp.popup_leave_show[t])) return;
                    (e.runtime.tmp.popup_leave_show[t] = !0), window.ladi(t).show();
                }
            });
    }),
    (LadiPageScriptV2.prototype.runEventScroll = function (t) {
        var e = this;
        if ((e instanceof LadiPageScriptV2 || (e = LadiPageScript), e.runtime.isRun)) {
            if (!isEmptyLadiPage(e.runtime.eventData) && !e.runtime.tmp.is_run_show_popup) {
                for (var i = null, a = document.querySelectorAll('[data-popup-backdrop="true"]'), n = 0; n < a.length; n++) "none" != getComputedStyle(a[n]).display && (i = a[n].id);
                var o = [];
                if (!isEmptyLadiPage(i)) for (var r = document.querySelectorAll("#" + i + " .ladi-element"), d = 0; d < r.length; d++) o.push(r[d].id);
                if (
                    (Object.keys(e.runtime.eventData).forEach(function (t) {
                        var a = e.runtime.eventData[t],
                            n = null,
                            r = null,
                            d = null,
                            s = Object.keys(e.runtime.list_scroll_func),
                            l = [];
                        l = "gallery" == a.type ? document.querySelectorAll("#" + t) : [(d = document.getElementById(t))];
                        for (var c = 0; c < l.length; c++)
                            if (((d = l[c]), !isEmptyLadiPage(d))) {
                                var u = "gallery" == a.type ? d.getAttribute("data-runtime-id") : d.getAttribute("id");
                                if (-1 != s.indexOf(u)) {
                                    var p = !1;
                                    "section" == a.type
                                        ? ((n = d.offsetTop),
                                          ((window.scrollY >= n && window.scrollY <= n + d.offsetHeight) ||
                                              (window.scrollY + e.getHeightDevice() >= n && window.scrollY + e.getHeightDevice() <= n + d.offsetHeight) ||
                                              (n >= window.scrollY && window.scrollY + e.getHeightDevice() >= n)) &&
                                              (p = !0))
                                        : ((n = e.getElementBoundingClientRect(d).y + window.scrollY),
                                          ((window.scrollY >= n && window.scrollY <= n + d.offsetHeight) ||
                                              (window.scrollY + e.getHeightDevice(!0) >= n && window.scrollY + e.getHeightDevice(!0) <= n + d.offsetHeight) ||
                                              (n >= window.scrollY && window.scrollY + e.getHeightDevice(!0) >= n)) &&
                                              (p = !0)),
                                        p && ((r = e.runtime.list_scroll_func[u]), delete e.runtime.list_scroll_func[u], r());
                                }
                            }
                        var m = a[e.runtime.device + ".style.animation-name"];
                        if (!isEmptyLadiPage(m) && ((d = document.getElementById(t)), !isEmptyLadiPage(d) && !d.classList.contains("ladi-animation"))) {
                            var g = parseFloatLadiPage(a[e.runtime.device + ".style.animation-delay"]) || 0;
                            n = e.getElementBoundingClientRect(d).y + window.scrollY;
                            var _ =
                                (window.scrollY >= n && window.scrollY <= n + d.offsetHeight) ||
                                (window.scrollY + e.getHeightDevice(!0) >= n && window.scrollY + e.getHeightDevice(!0) <= n + d.offsetHeight) ||
                                (n >= window.scrollY && window.scrollY + e.getHeightDevice(!0) >= n);
                            e.runtime.tmp.isFirstScroll && g > 0 && d.classList.add("ladi-animation-hidden"),
                                _ &&
                                    (d.classList.add("ladi-animation"),
                                    e.runTimeout(function () {
                                        d.classList.remove("ladi-animation-hidden");
                                    }, 1e3 * g));
                        }
                        if (isEmptyLadiPage(i) || -1 != o.indexOf(t)) {
                            var y = null,
                                f = null,
                                v = null;
                            if (
                                (a[e.runtime.device + ".option.sticky"] &&
                                    ((y = a[e.runtime.device + ".option.sticky_position"]),
                                    (f = parseFloatLadiPage(a[e.runtime.device + ".option.sticky_position_top"])),
                                    (v = parseFloatLadiPage(a[e.runtime.device + ".option.sticky_position_bottom"]))),
                                !e.runtime.has_popupx && !isEmptyLadiPage(y))
                            ) {
                                var P = document.getElementById(t);
                                if (!isEmptyLadiPage(P) && P.clientWidth > 0 && P.clientHeight > 0 && -1 != ["default", "top", "bottom"].indexOf(y)) {
                                    var h = e.getElementBoundingClientRect(P),
                                        L = P.getAttribute("data-top"),
                                        E = P.getAttribute("data-left");
                                    isEmptyLadiPage(L) ? (P.setAttribute("data-top", h.y + window.scrollY), (L = h.y)) : (L = parseFloatLadiPage(L)),
                                        isEmptyLadiPage(E) ? (P.setAttribute("data-left", h.x + window.scrollX), (E = h.x)) : (E = parseFloatLadiPage(E));
                                    var b = null,
                                        A = null,
                                        w = e.getHeightDevice(),
                                        T = document.getElementsByClassName("ladi-wraper")[0],
                                        S = 0,
                                        O = 0,
                                        C = 0,
                                        N = 0;
                                    if (
                                        ("default" == y &&
                                            (f >= L - window.scrollY
                                                ? ((b = f + "px"), (A = E + "px"), f <= 0 && (S = P.clientHeight), (C = P.clientHeight))
                                                : w - v - P.clientHeight <= L - window.scrollY && ((b = "calc(100% - " + (v + P.clientHeight) + "px)"), (A = E + "px"), v <= 0 && (O = P.clientHeight), (N = P.clientHeight))),
                                        "top" == y && (f >= L - window.scrollY || w - 0 < L - window.scrollY) && ((b = f + "px"), (A = E + "px"), f <= 0 && (S = P.clientHeight), (C = P.clientHeight)),
                                        "bottom" == y &&
                                            (w - v - P.clientHeight <= L - window.scrollY || 0 > L + P.clientHeight - window.scrollY) &&
                                            ((b = "calc(100% - " + (v + P.clientHeight) + "px)"), (A = E + "px"), v <= 0 && (O = P.clientHeight), (N = P.clientHeight)),
                                        isEmptyLadiPage(b) || isEmptyLadiPage(A))
                                    )
                                        P.style.removeProperty("top"),
                                            P.style.removeProperty("left"),
                                            P.style.removeProperty("width"),
                                            P.style.removeProperty("position"),
                                            P.style.removeProperty("z-index"),
                                            T.getAttribute("data-padding-top-id") == t && (T.removeAttribute("data-padding-top-id"), T.style.removeProperty("padding-top")),
                                            T.getAttribute("data-padding-bottom-id") == t && (T.removeAttribute("data-padding-bottom-id"), T.style.removeProperty("padding-bottom"));
                                    else if (
                                        ("section" == a.type &&
                                            (e.runtime.is_mobile_only ? P.style.setProperty("width", T.clientWidth + "px") : e.runtime.isDesktop && P.style.setProperty("width", "100%"),
                                            S > 0 && (T.setAttribute("data-padding-top-id", t), T.style.setProperty("padding-top", S + "px")),
                                            O > 0 && (T.setAttribute("data-padding-bottom-id", t), T.style.setProperty("padding-bottom", O + "px")),
                                            C > 0 && T.setAttribute("data-scroll-padding-top", C),
                                            N > 0 && T.setAttribute("data-scroll-padding-bottom", N)),
                                        P.style.setProperty("top", b),
                                        P.style.setProperty("left", A),
                                        P.style.setProperty("position", "fixed"),
                                        P.style.setProperty("z-index", "90000050"),
                                        !P.hasAttribute("data-sticky"))
                                    ) {
                                        P.setAttribute("data-sticky", !0), P.classList.contains("ladi-animation-hidden") && (P.classList.remove("ladi-animation-hidden"), P.classList.add("ladi-animation"));
                                        for (var I = P.getElementsByClassName("ladi-animation-hidden"); I.length > 0; ) I[0].classList.add("ladi-animation"), I[0].classList.remove("ladi-animation-hidden");
                                        P.classList.remove("ladi-lazyload");
                                        for (var k = P.getElementsByClassName("ladi-lazyload"); k.length > 0; ) k[0].classList.remove("ladi-lazyload");
                                    }
                                }
                            }
                        }
                        if ("popup" == a.type) {
                            if (!isEmptyLadiPage(e.runtime.scroll_show_popup[t])) return;
                            isEmptyLadiPage(a["option.popup_welcome_page_scroll_to"]) ||
                                ((d = document.getElementById(a["option.popup_welcome_page_scroll_to"])),
                                !isEmptyLadiPage(d) &&
                                    d.offsetHeight > 0 &&
                                    ((n = d.offsetTop),
                                    ((window.scrollY >= n && window.scrollY <= n + d.offsetHeight) ||
                                        (window.scrollY + e.getHeightDevice() >= n && window.scrollY + e.getHeightDevice() <= n + d.offsetHeight) ||
                                        (n >= window.scrollY && window.scrollY + e.getHeightDevice() >= n)) &&
                                        ((e.runtime.scroll_show_popup[t] = !0), window.ladi(t).show())));
                        }
                        if ("section" == a.type) {
                            if (!isEmptyLadiPage(e.runtime.scroll_to_section[t])) return;
                            (d = document.getElementById(t)),
                                isEmptyLadiPage(d) ||
                                    ((n = d.offsetTop),
                                    ((window.scrollY >= n && window.scrollY <= n + d.offsetHeight) ||
                                        (window.scrollY + e.getHeightDevice() >= n && window.scrollY + e.getHeightDevice() <= n + d.offsetHeight) ||
                                        (n >= window.scrollY && window.scrollY + e.getHeightDevice() >= n)) &&
                                        ((e.runtime.scroll_to_section[t] = !0), e.runEventTracking(t, { is_form: !1 })));
                        }
                    }),
                    e.runtime.isClient)
                ) {
                    if (e.runtime.is_popupx) return;
                    for (
                        var s = Math.round(((window.scrollY + e.getHeightDevice()) / document.body.clientHeight) * 100),
                            l = function (t) {
                                e.runLadiPageCommand(function (e) {
                                    if (e.tiktokViewContent && t >= e.scrollPercent) return window.ttq.track(e.name), !0;
                                });
                            },
                            c = 1;
                        c < e.const.PERCENT_TRACKING_SCROLL.length;
                        c++
                    ) {
                        var u = e.const.PERCENT_TRACKING_SCROLL[c];
                        s > e.const.PERCENT_TRACKING_SCROLL[c - 1] &&
                            s <= u &&
                            -1 == e.runtime.scroll_depth.indexOf(u) &&
                            (e.runtime.scroll_depth.push(u),
                            isFunctionLadiPage(window.gtag) &&
                                window.gtag("event", "ScrollDepth_" + u + "_percent", { event_category: "LadiPageScrollDepth", event_label: window.location.host + window.location.pathname, non_interaction: !0 }),
                            isFunctionLadiPage(window.fbq) && window.fbq("trackCustom", "ScrollDepth_" + u + "_percent"),
                            isNullLadiPage(window.ttq) || l(s));
                    }
                }
                if (((e.runtime.tmp.isFirstScroll = !1), !isEmptyLadiPage(t))) {
                    var p = 0,
                        m = Object.values(e.runtime.list_scrolling_exec);
                    if (isEmptyLadiPage(e.runtime.tmp.timeout_scrolling_id)) for (p = 0; p < m.length; p++) m[p]();
                    e.removeTimeout(e.runtime.tmp.timeout_scrolling_id),
                        (e.runtime.tmp.timeout_scrolling_id = e.runTimeout(function () {
                            for (delete e.runtime.tmp.timeout_scrolling_id, m = Object.values(e.runtime.list_scrolled_exec), p = 0; p < m.length; p++) m[p]();
                        }, 1e3));
                }
            }
        } else
            e.runTimeout(function () {
                e.runEventScroll(t);
            }, 100);
    }),
    (LadiPageScriptV2.prototype.runRemovePopup = function (t, e, i, a, n) {
        var o = this,
            r = document.querySelectorAll("#" + this.runtime.builder_section_popup_id + " .ladi-container > .ladi-element"),
            d = !1,
            s = !1;
        e || (LadiPagePlugin.getPlugin("popup").removeStyleShowPopupBuilder(), LadiPagePlugin.getPlugin("popup").removeStyleShowPopupBuilderScroll());
        var l = function () {
                if (!o.runtime.tmp.is_resize_all && !o.runtime.tmp.is_wait_popup) {
                    var t = document.getElementById("style_popup");
                    isEmptyLadiPage(t) || t.parentElement.removeChild(t);
                }
            },
            c = [],
            u = 0;
        if (isEmptyLadiPage(t)) for (u = 0; u < r.length; u++) c.push(r[u].id);
        else c.push(t);
        if (
            (c.forEach(function (t) {
                var i = document.getElementById(t);
                if (!isEmptyLadiPage(i)) {
                    o.runtime.has_popupx && ("none" != getComputedStyle(i).display && (s = !0), document.body.style.removeProperty("height"));
                    var a = parseFloatLadiPage(i.getAttribute("data-timeout-id")) || null;
                    o.removeTimeout(a),
                        i.removeAttribute("data-timeout-id"),
                        (a = parseFloatLadiPage(i.getAttribute("data-timeout-id-2")) || null),
                        o.removeTimeout(a),
                        i.removeAttribute("data-timeout-id-2"),
                        (a = parseFloatLadiPage(i.getAttribute("data-timeout-id-3")) || null),
                        o.removeTimeout(a),
                        i.removeAttribute("data-timeout-id-3");
                    var n = i.getElementsByClassName("popup-close")[0];
                    isEmptyLadiPage(n) || ((a = parseFloatLadiPage(n.getAttribute("data-timeout-id")) || null), o.removeTimeout(a), n.removeAttribute("data-timeout-id")),
                        o.pauseAllVideo(i),
                        isEmptyLadiPage(i.style.getPropertyValue("display")) || (d = !0),
                        i.style.removeProperty("display"),
                        i.style.removeProperty("z-index");
                    var c = i.hasAttribute("data-popup-backdrop"),
                        u = o.runtime.eventData[t];
                    if ((isObjectLadiPage(u) && u[o.runtime.device + ".option.popup_position"] == o.const.POSITION_TYPE.default && (c = !0), c)) {
                        l(), e && (isEmptyLadiPage(o.runtime.tmp.bodyScrollY) || window.scrollTo(0, o.runtime.tmp.bodyScrollY)), (o.runtime.tmp.bodyScrollY = null);
                        for (var p = 0; p < r.length; p++) r[p].style.removeProperty("z-index");
                    }
                    i.removeAttribute("data-scroll"), i.removeAttribute("data-fixed-close"), i.style.removeProperty("overflow-y"), i.style.removeProperty("overflow-x");
                    var m = i.getElementsByClassName("ladi-popup")[0];
                    isEmptyLadiPage(m) || m.style.removeProperty("height"), i.style.removeProperty("max-height");
                }
            }),
            d && isFunctionLadiPage(i) && i(),
            a && l(),
            !n && s)
        ) {
            o.runtime.tmp.runActionPopupX({ id: t, dimension: { display: "none" }, action: { type: "set_iframe_dimension" } });
        }
        delete this.runtime.tmp.current_default_popup_id;
    }),
    (LadiPageScriptV2.prototype.runShowPopup = function (t, e, i, a, n) {
        var o = this;
        if (!isEmptyLadiPage(e)) {
            var r = document.getElementById(e);
            if (!n || (!isEmptyLadiPage(r) && isObjectLadiPage(o.runtime.eventData) && !isEmptyLadiPage(o.runtime.eventData[e]))) {
                n && ((i = o.runtime.eventData[e][o.runtime.device + ".option.popup_position"]), (a = o.runtime.eventData[e][o.runtime.device + ".option.popup_backdrop"]));
                var d = function (t) {
                        o.runtime.tmp.is_run_show_popup = !0;
                        var s = 0,
                            l = "";
                        n || LadiPagePlugin.getPlugin("popup").showStyleShowPopupBuilder(e);
                        isEmptyLadiPage(a)
                            ? (l += n ? "#" + o.runtime.backdrop_popup_id + " { display: none !important;}" : "#" + o.runtime.backdrop_popup_id + " { display: block !important;}")
                            : ((l += "#" + o.runtime.backdrop_popup_id + " { display: block !important; " + a + "}"), r.setAttribute("data-popup-backdrop", !0)),
                            i == o.const.POSITION_TYPE.default &&
                                "true" != r.getAttribute("data-dropbox") &&
                                (!(function () {
                                    if (!o.runtime.has_popupx && n) {
                                        var t = window.scrollY;
                                        if (!isEmptyLadiPage(o.runtime.tmp.bodyScrollY)) {
                                            var i = getComputedStyle(document.body);
                                            "fixed" == i.position && (parseFloatLadiPage(i.top) || 0) == -1 * o.runtime.tmp.bodyScrollY && (t = o.runtime.tmp.bodyScrollY);
                                        }
                                        "block" != r.style.getPropertyValue("display") || isEmptyLadiPage(o.runtime.tmp.bodyScrollY) || (t = o.runtime.tmp.bodyScrollY),
                                            (l += "body {"),
                                            0 == r.getElementsByClassName("ladi-google-recaptcha-checkbox").length && (l += "position: fixed !important;"),
                                            (l += "width: 100% !important;"),
                                            (l += "top: -" + t + "px !important;"),
                                            (l += "}"),
                                            (o.runtime.tmp.bodyScrollY = t);
                                    }
                                    for (var a = document.querySelectorAll("#" + o.runtime.builder_section_popup_id + " .ladi-container > .ladi-element"), d = 0; d < a.length; d++)
                                        a[d].id != e && a[d].style.setProperty("z-index", "1", "important");
                                    s = 500;
                                })(),
                                (o.runtime.tmp.current_default_popup_id = e));
                        var c = "block" == r.style.getPropertyValue("display");
                        if (isArrayLadiPage(o.runtime.list_show_popup_func[e]))
                            for (; o.runtime.list_show_popup_func[e].length > 0; ) {
                                o.runtime.list_show_popup_func[e].shift()();
                            }
                        var u = r.hasAttribute("data-scroll"),
                            p = r.hasAttribute("data-fixed-close"),
                            m = !1,
                            g = r.getElementsByClassName("ladi-popup")[0],
                            _ = 1e3 * (parseFloatLadiPage(getComputedStyle(g).animationDuration) || 0),
                            y = 1e3 * (parseFloatLadiPage(getComputedStyle(g).animationDelay) || 0),
                            f = parseFloatLadiPage(r.getAttribute("data-timeout-id")) || null;
                        o.removeTimeout(f),
                            (f = parseFloatLadiPage(r.getAttribute("data-timeout-id-2")) || null),
                            o.removeTimeout(f),
                            !n ||
                                "true" == r.getAttribute("data-dropbox") ||
                                o.runtime.tmp.is_resize_all ||
                                o.runtime.tmp.is_wait_popup ||
                                (isEmptyLadiPage(r.style.getPropertyValue("max-height")) && r.style.setProperty("visibility", "hidden")),
                            r.classList.add("ladi-animation-hidden"),
                            "block" != getComputedStyle(r).display && r.style.setProperty("display", "block", "important"),
                            (f = o.runTimeout(function () {
                                r.classList.remove("ladi-animation-hidden"), r.removeAttribute("data-timeout-id");
                            }, y)),
                            isEmptyLadiPage(f) || r.setAttribute("data-timeout-id", f),
                            t &&
                                (!u &&
                                    r.clientHeight > 0.8 * o.getHeightDevice() &&
                                    (n
                                        ? o.runtime.has_popupx
                                            ? (m = !0)
                                            : (r.setAttribute("data-scroll", !0), r.style.setProperty("overflow-y", "auto", "important"), r.style.setProperty("overflow-x", "hidden", "important"), (u = !0))
                                        : (p = !0)),
                                o.runtime.has_popupx && (m ? (r.setAttribute("data-fixed-close", !0), document.body.style.setProperty("height", r.clientHeight + "px")) : document.body.style.removeProperty("height")),
                                u &&
                                    n &&
                                    (r.getElementsByClassName("ladi-popup")[0].style.removeProperty("height"),
                                    r.style.removeProperty("max-height"),
                                    r.getElementsByClassName("ladi-popup")[0].style.setProperty("height", r.clientHeight + "px", "important"),
                                    r.style.setProperty("max-height", "80vh"))),
                            !n && p && LadiPagePlugin.getPlugin("popup").styleShowPopupBuilderScroll(e),
                            o.runtime.has_popupx &&
                                ((l += n ? "#" + o.runtime.backdrop_popup_id + " { display: none !important;}" : "#" + o.runtime.backdrop_popup_id + " { display: block !important;}"),
                                r.style.removeProperty("max-height"),
                                r.style.removeProperty("overflow-y"),
                                r.style.removeProperty("overflow-x")),
                            isEmptyLadiPage(l) || o.runtime.tmp.is_resize_all || o.runtime.tmp.is_wait_popup || o.createStyleElement("style_popup", l);
                        var v = null;
                        if (n && !isEmptyLadiPage(r) && "true" != r.getAttribute("data-dropbox")) {
                            var P = r.getElementsByClassName("popup-close")[0];
                            isEmptyLadiPage(P) &&
                                (((P = document.createElement("div")).className = "popup-close"),
                                r.appendChild(P),
                                P.addEventListener("click", function (t) {
                                    t.stopPropagation(), o.runRemovePopup(e, n);
                                })),
                                (f = parseFloatLadiPage(P.getAttribute("data-timeout-id")) || null),
                                o.removeTimeout(f),
                                "true" == r.getAttribute("data-scroll") && (P.style.removeProperty("right"), P.style.removeProperty("top"), P.style.removeProperty("position")),
                                o.runtime.has_popupx && o.runtime.tmp.popupx_is_inline && P.classList.add("ladi-hidden");
                            var h = function () {
                                if (((P = r.getElementsByClassName("popup-close")[0]), !isEmptyLadiPage(P)))
                                    if ("true" == r.getAttribute("data-scroll")) {
                                        var t = o.getElementBoundingClientRect(r),
                                            e = t.y,
                                            i = window.innerWidth - t.x - t.width;
                                        (u || m) && (i += o.runtime.widthScrollBar), P.style.setProperty("right", i + "px"), P.style.setProperty("top", e + "px"), P.style.setProperty("position", "fixed");
                                    } else P.style.removeProperty("right"), P.style.removeProperty("top"), P.style.removeProperty("position");
                            };
                            h(),
                                (v = function () {
                                    (f = o.runTimeout(function () {
                                        h(), P.removeAttribute("data-timeout-id");
                                    }, _ + y + 100)),
                                        P.setAttribute("data-timeout-id", f);
                                }),
                                (u || m) && (r.hasAttribute("data-resize-scroll") || (r.setAttribute("data-resize-scroll", !0), window.addEventListener("resize", h)));
                        }
                        n && !c && o.runEventTracking(e, { is_form: !1 });
                        var L = function () {
                            var t = s;
                            (f = o.runTimeout(function () {
                                delete o.runtime.tmp.is_run_show_popup, o.runEventScroll(), isFunctionLadiPage(v) && v(), r.removeAttribute("data-timeout-id-2");
                            }, t)),
                                isEmptyLadiPage(f) || r.setAttribute("data-timeout-id-2", f),
                                r.style.removeProperty("visibility");
                        };
                        if (t) L();
                        else {
                            (f = o.runTimeout(function () {
                                "none" == getComputedStyle(r).display ? ((s -= 100), L()) : d(!0), r.removeAttribute("data-timeout-id-2");
                            }, 100)),
                                r.setAttribute("data-timeout-id-2", f);
                        }
                        r.removeAttribute("data-timeout-id-3");
                    },
                    s = 0;
                i == o.const.POSITION_TYPE.default && (s = 100);
                var l = o.runTimeout(function () {
                    d(t);
                }, s);
                isEmptyLadiPage(r) || r.setAttribute("data-timeout-id-3", l);
            }
        }
    }),
    (LadiPageScriptV2.prototype.convertPhoneNumberTiktok = function (t) {
        for (
            var e = null,
                i = [
                    {
                        startStr: "+84",
                        endStr: "(9|8|7|5|3)[0-9]{8}",
                        listRegex: [
                            { str_start: "0", str_input: "0" },
                            { str_start: "\\+84", str_input: "+84" },
                        ],
                    },
                ],
                a = 0;
            a < i.length;
            a++
        )
            for (var n = 0; n < i[a].listRegex.length; n++) {
                new RegExp("^(" + i[a].listRegex[n].str_start + ")" + i[a].endStr + "$", "gi").test(t) && (e = i[a].startStr + t.substring(i[a].listRegex[n].str_input.length));
            }
        return e;
    }),
    (LadiPageScriptV2.prototype.runGlobalTrackingScript = function () {
        if (isObjectLadiPage(window.ladi_global_tracking) && isArrayLadiPage(window.ladi_global_tracking.thankyou_page))
            for (; window.ladi_global_tracking.thankyou_page.length > 0; ) {
                var t = window.ladi_global_tracking.thankyou_page.shift();
                this.runEventTracking(null, t);
            }
    }),
    (LadiPageScriptV2.prototype.runLadiPageCommand = function (t) {
        if (isArrayLadiPage(LadiPageCommand))
            for (var e = 0; e < LadiPageCommand.length; e++)
                if (isFunctionLadiPage(t) && t(LadiPageCommand[e])) {
                    LadiPageCommand.splice(e, 1), this.runLadiPageCommand(t);
                    break;
                }
    }),
    (LadiPageScriptV2.prototype.runEventTracking = function (t, e, i, a, n) {
        var o = this;
        if (this.runtime.isClient) {
            var r = null,
                d = null,
                s = null,
                l = null,
                c = null,
                u = o.runtime.currency,
                p = o.runtime.eventData[t],
                m = null,
                g = e.is_form,
                _ = e.is_click && e.count_data_event > 0 && o.runtime.tracking_button_click,
                y = e.is_thankyou_page;
            if (y) (r = e.conversion_name), (d = e.google_ads_conversion), (s = e.google_ads_label), (c = isEmptyLadiPage(e.purchase_value) ? null : parseFloatLadiPage(e.purchase_value) || 0);
            else {
                if (isEmptyLadiPage(t) || !isObjectLadiPage(p)) return;
                (m = p.type),
                    g && "form" == m
                        ? ((r = p["option.form_conversion_name"]),
                          (d = p["option.form_google_ads_conversion"]),
                          (s = p["option.form_google_ads_label"]),
                          (l = p["option.form_event_custom_script"]),
                          (c = isEmptyLadiPage(p["option.form_purchase_value"]) ? null : parseFloatLadiPage(p["option.form_purchase_value"]) || 0),
                          o.runtime.shopping && (c = o.getCartCheckoutPrice(c)))
                        : ((r = p["option.conversion_name"]), (d = p["option.google_ads_conversion"]), (s = p["option.google_ads_label"]), (l = p["option.event_custom_script"]));
            }
            var f = function (t) {
                    var e = null,
                        a = null,
                        n = "trackCustom",
                        d = [],
                        s = null,
                        l = function () {
                            return { eventID: "ladi." + Date.now() + "." + (Math.floor(9e10 * Math.random()) + 1e10) };
                        };
                    isEmptyLadiPage(r) ||
                        (-1 !=
                            [
                                "AddPaymentInfo",
                                "AddToCart",
                                "AddToWishlist",
                                "CompleteRegistration",
                                "Contact",
                                "CustomizeProduct",
                                "Donate",
                                "FindLocation",
                                "InitiateCheckout",
                                "Lead",
                                "PageView",
                                "Purchase",
                                "Schedule",
                                "Search",
                                "StartTrial",
                                "SubmitApplication",
                                "Subscribe",
                                "ViewContent",
                            ].indexOf(r) && (n = "track"),
                        isEmptyLadiPage(c) || isEmptyLadiPage(u) || (((e = {}).value = c), (e.currency = u)),
                        !t && isObjectLadiPage(window.ladi_conversion_api) && isObjectLadiPage(window.ladi_conversion_api.facebook) && isArrayLadiPage(window.ladi_conversion_api.facebook.pixels) && (a = l()),
                        d.push({ fbq_track_name: n, conversion_name: r, fbq_data: e, fbq_event_data: a }),
                        d.forEach(function (e) {
                            isFunctionLadiPage(window.fbq) && window.fbq(e.fbq_track_name, e.conversion_name, e.fbq_data, e.fbq_event_data);
                            var a = o.copy(e.fbq_event_data);
                            if (o.runtime.shopping && g) {
                                var n = o.getCartProducts();
                                isNullLadiPage(n) || (isObjectLadiPage(a) || (a = {}), (a.cart_products = n));
                            }
                            isObjectLadiPage(i) && (isObjectLadiPage(a) || (a = {}), (a.email = i.email), (a.phone = i.phone)),
                                (s = [{ key: e.fbq_track_name, name: e.conversion_name, custom_data: e.fbq_data, data: a }]),
                                o.runConversionApi("facebook", "events", s),
                                t &&
                                    (o.runtime.tmp.runActionPopupX({ fbq_track_name: e.fbq_track_name, conversion_name: e.conversion_name, fbq_data: e.fbq_data, fbq_event_data: e.fbq_event_data, action: { type: "run_tracking_fbq" } }),
                                    o.runtime.tmp.runActionPopupX({ type: "facebook", key: "events", keyData: s, action: { type: "run_conversion_api" } }));
                        })),
                        _ &&
                            ((n = "trackCustom"),
                            (e = null),
                            (a = null),
                            (d = []),
                            !t && isObjectLadiPage(window.ladi_conversion_api) && isObjectLadiPage(window.ladi_conversion_api.facebook) && isArrayLadiPage(window.ladi_conversion_api.facebook.pixels) && (a = l()),
                            d.push({ fbq_track_name: n, conversion_name: "ClickButton", fbq_data: e, fbq_event_data: a }),
                            d.forEach(function (e) {
                                isFunctionLadiPage(window.fbq) && window.fbq(e.fbq_track_name, e.conversion_name, e.fbq_data, e.fbq_event_data),
                                    (s = [{ key: e.fbq_track_name, name: e.conversion_name, custom_data: e.fbq_data, data: e.fbq_event_data }]),
                                    o.runConversionApi("facebook", "events", s),
                                    t &&
                                        (o.runtime.tmp.runActionPopupX({ fbq_track_name: e.fbq_track_name, conversion_name: e.conversion_name, fbq_data: e.fbq_data, fbq_event_data: e.fbq_event_data, action: { type: "run_tracking_fbq" } }),
                                        o.runtime.tmp.runActionPopupX({ type: "facebook", key: "events", keyData: s, action: { type: "run_conversion_api" } }));
                            }));
                },
                v = function (t) {
                    isEmptyLadiPage(d) ||
                        isEmptyLadiPage(s) ||
                        (t
                            ? o.runtime.tmp.runActionPopupX({ conversion_name: "conversion", gtag_data: { send_to: "AW-" + d + "/" + s }, action: { type: "run_tracking_gtag" } })
                            : isFunctionLadiPage(window.gtag) && window.gtag("event", "conversion", { send_to: "AW-" + d + "/" + s }));
                    var i = null;
                    if (!isEmptyLadiPage(r)) {
                        var a = "";
                        (a = "section" == m ? "LadiPageSection" : "popup" == m ? "LadiPagePopup" : "form" == m ? "LadiPageConversion" : "LadiPageClick"), y && (a = e.event_category);
                        var n = LadiPageApp[m + o.const.APP_RUNTIME_PREFIX];
                        if (!isEmptyLadiPage(n)) {
                            var l = n(p, o.runtime.isClient);
                            isFunctionLadiPage(l.getEventTrackingCategory) && (a = n(p, o.runtime.isClient).getEventTrackingCategory());
                        }
                        (i = { event_category: a, event_label: window.location.host + window.location.pathname }),
                            isEmptyLadiPage(c) || isEmptyLadiPage(u) || ((i.value = c), (i.currency = u)),
                            t ? o.runtime.tmp.runActionPopupX({ conversion_name: r, gtag_data: i, action: { type: "run_tracking_gtag" } }) : isFunctionLadiPage(window.gtag) && window.gtag("event", r, i);
                    }
                },
                P = function (t) {
                    var e = null;
                    if (
                        (isObjectLadiPage(i) && (e = { email: i.email, phone_number: o.convertPhoneNumberTiktok(i.phone) }),
                        isObjectLadiPage(e) && !isEmptyLadiPage(e.phone_number) && (t ? o.runtime.tmp.runActionPopupX({ ttq_identify_data: e, action: { type: "run_identify_ttq" } }) : isNullLadiPage(window.ttq) || window.ttq.identify(e)),
                        !isEmptyLadiPage(r))
                    ) {
                        if (-1 != ["Purchase", "Lead"].indexOf(r)) return;
                        var a = null;
                        "CompletePayment" != r || isEmptyLadiPage(c) || isEmptyLadiPage(u) || (((a = { content_id: o.runtime.ladipage_id, content_type: "product" }).value = c), (a.currency = u)),
                            t ? o.runtime.tmp.runActionPopupX({ conversion_name: r, ttq_data: a, action: { type: "run_tracking_ttq" } }) : isNullLadiPage(window.ttq) || (isObjectLadiPage(a) ? window.ttq.track(r, a) : window.ttq.track(r));
                    }
                    _ &&
                        (o.runLadiPageCommand(function (e) {
                            if (e.tiktokViewContent && e.clickButton) return t ? o.runtime.tmp.runActionPopupX({ conversion_name: e.name, action: { type: "run_tracking_ttq" } }) : isNullLadiPage(window.ttq) || window.ttq.track(e.name), !0;
                        }),
                        t ? o.runtime.tmp.runActionPopupX({ conversion_name: "ClickButton", action: { type: "run_tracking_ttq" } }) : isNullLadiPage(window.ttq) || window.ttq.track("ClickButton"));
                };
            if (!isEmptyLadiPage(a)) {
                var h = !1;
                return (
                    isEmptyLadiPage(d) || isEmptyLadiPage(s) || (h = !0),
                    isEmptyLadiPage(r) || (h = !0),
                    isEmptyLadiPage(l) || (h = !0),
                    _ && (h = !0),
                    -1 != ["section", "popup", "countdown"].indexOf(m) && (h = !1),
                    void (
                        h &&
                        a.addEventListener("click", function (r) {
                            (isFunctionLadiPage(n) && !n(a, r)) || o.runEventTracking(t, e, i);
                        })
                    )
                );
            }
            if (o.runtime.is_popupx) return f(!0), v(!0), P(!0), void o.runtime.tmp.runActionPopupX({ script: l, action: { type: "event_custom_script" } });
            f(), v(), P(), isEmptyLadiPage(l) || o.runFunctionString(l);
        }
    }),
    (LadiPageScriptV2.prototype.runFunctionString = function (t) {
        try {
            new Function(t)();
        } catch (t) {}
    }),
    (LadiPageScriptV2.prototype.convertReplacePrefixStr = function (t, e) {
        var i = t,
            a = this.runtime.replacePrefixStart,
            n = this.runtime.replacePrefixEnd,
            o = this.runtime.replaceNewPrefixStart,
            r = this.runtime.replaceNewPrefixEnd;
        if (e) {
            var d = o;
            (o = a), (a = d), (d = r), (r = n), (n = d);
        }
        for (
            var s = new RegExp(a + "[^" + a + "$" + n + "]*" + n, "gi"),
                l = null,
                c = function (t) {
                    i = i.replaceAll(t, t.replaceAll(a, o).replaceAll(n, r));
                };
            null !== (l = s.exec(t));

        )
            l.index === s.lastIndex && s.lastIndex++, l.forEach(c);
        return i;
    }),
    (LadiPageScriptV2.prototype.formatCurrency = function (t, e, i, a) {
        var n = { VND: "{0}đ", KHR: "{0}៛", USD: "${0}", EUR: "€{0}", GBP: "£{0}", THB: "฿{0}", LAK: "₭{0}", PHP: "₱{0}", SGD: "S${0}", HKD: "HK${0}", TWD: "NT${0}", MYR: "RM{0}", IDR: "Rp{0}", INR: "₹{0}" };
        if (
            (Object.keys(n).forEach(function (t) {
                var i = n[t].replaceAll("{0}", "");
                (i = i.trim()) == e && (e = t);
            }),
            a)
        )
            return isEmptyLadiPage(n[e]) ? e : n[e].format("").trim();
        var o = this.formatNumber(t, 3, null, { VND: 0, USD: 2, EUR: 2, GBP: 2, SGD: 2, MYR: 2, HKD: 2, TWD: 0, THB: 0, PHP: 0, KHR: 0, LAK: 0, IDR: 0, INR: 0 }[e] || 0);
        return i && (o = isEmptyLadiPage(n[e]) ? o + " " + e : n[e].format(o)), o;
    }),
    (LadiPageScriptV2.prototype.formatNumber = function (t, e, i, a) {
        if (void 0 != t) {
            void 0 == i && (i = 0), void 0 == a && (a = 0);
            var n = "\\d(?=(\\d{" + (e || 3) + "})+" + (a > 0 ? "\\." : "$") + ")";
            t = t.toFixed(Math.max(0, ~~a)).replace(new RegExp(n, "g"), "$&,");
            var o = null,
                r = null;
            i >= 1 && ((r = (o = t.split("."))[0]), (t = r = new Array(i - r.length + 1).join("0") + r), 2 == o.length && (t += "." + o[1])),
                a >= 1 && 2 == (o = t.split(".")).length && ((r = o[1]), (r = new Array(a - r.length + 1).join("0") + r), (t = o[0] + "." + r));
        }
        return t;
    }),
    (LadiPageScriptV2.prototype.setDataReplaceStr = function (t, e) {
        this.runtime.replaceStr[t] = e;
    }),
    (LadiPageScriptV2.prototype.getDataReplaceStr = function (t, e) {
        var i = null;
        return isNullLadiPage(e) || (i = e[t]), isNullLadiPage(i) && (i = this.runtime.replaceStr[t]), i;
    }),
    (LadiPageScriptV2.prototype.highlightText = function (t, e, i, a) {
        if (!isEmptyLadiPage(t) && 0 != e.length) {
            var n = i ? "gi" : "g",
                o = [];
            e.forEach(function (t) {
                o.push(t.replaceAll("|", "\\|"));
            }),
                o.sort(function (t, e) {
                    return e.length - t.length;
                });
            for (
                var r = this,
                    d = function (t) {
                        var d = new RegExp(o.join("|"), n);
                        if (3 !== t.nodeType) r.highlightText(t, e, i, a);
                        else if (d.test(t.textContent)) {
                            var s = document.createDocumentFragment(),
                                l = 0;
                            t.textContent.replace(d, function (e, i) {
                                var n = document.createTextNode(t.textContent.slice(l, i)),
                                    o = null;
                                isFunctionLadiPage(a) ? (o = a(e)) : ((o = document.createElement("span")).textContent = e), s.appendChild(n), s.appendChild(o), (l = i + e.length);
                            });
                            var c = document.createTextNode(t.textContent.slice(l));
                            s.appendChild(c), t.parentNode.replaceChild(s, t);
                        }
                    },
                    s = 0;
                s < t.childNodes.length;
                s++
            ) {
                d(t.childNodes[s]);
            }
        }
    }),
    (LadiPageScriptV2.prototype.convertDataReplaceStr = function (t, e, i, a, n, o) {
        var r = this,
            d = r.runtime.replacePrefixStart,
            s = r.runtime.replacePrefixEnd;
        r.runtime.convert_replace_str && ((d = r.runtime.replaceNewPrefixStart), (s = r.runtime.replaceNewPrefixEnd));
        for (
            var l = (t = isEmptyLadiPage(t) ? "" : t),
                c = new RegExp(d + "[^" + d + "$" + s + "]*" + s, "gi"),
                u = null,
                p = [],
                m = function (t) {
                    if (a) p.push(t);
                    else {
                        var i = t,
                            c = i.split("|");
                        (i = c[0].substr(d.length)), 1 == c.length && (i = i.substr(0, i.length - s.length));
                        var u = r.getDataReplaceStr(i, n);
                        if (isEmptyLadiPage(u))
                            if (c.length > 1) {
                                var m = r.randomInt(1, c.length - 1);
                                (u = c[m]), m == c.length - 1 && (u = u.substr(0, u.length - s.length));
                            } else u = "";
                        e && (isArrayLadiPage(u) && u.length > 1 && (u = JSON.stringify(u)), (u = encodeURIComponent(u))), (l = o && isArrayLadiPage(u) && u.length > 1 ? u : l.replaceAll(t, u));
                    }
                };
            null !== (u = c.exec(t));

        )
            u.index === c.lastIndex && c.lastIndex++, u.forEach(m);
        return (
            (p = p.unique()),
            r.highlightText(i, p, !0, function (t) {
                var e = document.createElement("span");
                return e.setAttribute("data-replace-str", t), e;
            }),
            r.runtime.isDesktop &&
                e &&
                !isEmptyLadiPage(l) &&
                ["fb://profile/", "fb://page/?id=", "fb://page/"].forEach(function (t) {
                    l.startsWith(t) && (l = l.replaceAll(t, "https://www.facebook.com/"));
                }),
            l
        );
    }),
    (LadiPageScriptV2.prototype.setDataReplaceElement = function (t, e, i, a, n) {
        var o = isEmptyLadiPage(a) ? document : document.getElementById(a);
        if (!isEmptyLadiPage(o)) {
            for (var r = o.querySelectorAll("span[data-replace-str]"), d = 0; d < r.length; d++) {
                var s = r[d].getAttribute("data-replace-str");
                r[d].innerHTML = this.convertDataReplaceStr(s, !1, null, !1, i);
            }
            for (var l = o.querySelectorAll("a[data-replace-href]"), c = 0; c < l.length; c++) {
                var u = l[c].getAttribute("data-replace-href");
                (u = this.convertDataReplaceStr(u, !0, null, !1, i)), (l[c].href = u);
            }
            for (var p = o.querySelectorAll(".ladi-element .ladi-form-item-container [name]"), m = 0; m < p.length; m++) {
                var g = null,
                    _ = null,
                    y = !1,
                    f = null,
                    v = p[m].getAttribute("type");
                if (((v = isEmptyLadiPage(v) ? v : v.trim()), t)) {
                    var P = p[m].getAttribute("name").trim();
                    (y = !0) && -1 == n.indexOf(P) && (y = !1), y && "country" == P && "true" == p[m].getAttribute("data-is-select-country") && (y = !1), y && (g = this.getDataReplaceStr(P, i));
                }
                if (!y) {
                    if (((f = this.findAncestor(p[m], "ladi-element")), isEmptyLadiPage(f))) continue;
                    var h = this.runtime.eventData[f.id];
                    if (isEmptyLadiPage(h)) continue;
                    var L = h["option.input_default_value"];
                    if (isEmptyLadiPage(L)) continue;
                    var E = !1;
                    "INPUT" == p[m].tagName && "checkbox" == v && (E = !0), (g = this.convertDataReplaceStr(L, !1, null, !1, i, E));
                }
                if (!isNullLadiPage(g)) {
                    if (((_ = isArrayLadiPage(g) ? g[0] : g), (_ = isNullLadiPage(_) ? "" : _), (_ = String(_)), "INPUT" == p[m].tagName))
                        if ("checkbox" == v || "radio" == v) {
                            var b = !1;
                            if ("checkbox" == v) {
                                var A = g;
                                isArrayLadiPage(A) || (A = [A]), (b = -1 != A.indexOf(p[m].getAttribute("value")));
                            }
                            "radio" == v && (b = p[m].getAttribute("value") == _.trim()), b ? ((p[m].checked = !0), e && p[m].setAttribute("checked", "checked")) : ((p[m].checked = !1), e && p[m].removeAttribute("checked"));
                            var w = this.findAncestor(p[m], "ladi-form-checkbox-item");
                            if (!isEmptyLadiPage(w)) {
                                var T = w.querySelector("span");
                                isEmptyLadiPage(T) || T.setAttribute("data-checked", p[m].checked);
                            }
                        } else (f = this.findAncestor(p[m], "ladi-element")), (isEmptyLadiPage(f) || "true" != f.getAttribute("data-quantity")) && ((p[m].value = _.trim()), e && p[m].setAttribute("value", p[m].value));
                    if (("TEXTAREA" == p[m].tagName && ((p[m].value = _.trim()), e && (p[m].innerHTML = p[m].value)), "SELECT" == p[m].tagName)) {
                        var S = p[m].querySelector('option[value="' + _.trim() + '"]');
                        if (!isEmptyLadiPage(S) && ((p[m].value = S.getAttribute("value")), e && !S.hasAttribute("selected"))) {
                            for (var O = p[m].querySelectorAll("option"), C = 0; C < O.length; C++) O[C].removeAttribute("selected");
                            S.setAttribute("selected", "selected");
                        }
                    }
                }
            }
        }
    }),
    (LadiPageScriptV2.prototype.setDataReplaceStart = function () {
        for (var t = document.querySelectorAll(".ladi-headline, .ladi-paragraph, .ladi-list-paragraph ul"), e = 0; e < t.length; e++) this.convertDataReplaceStr(t[e].innerHTML, !1, t[e], !0);
        this.setDataReplaceElement(!0, !0, null, null, Object.keys(this.runtime.replaceStr));
    }),
    (LadiPageScriptV2.prototype.runLimitRequest = function (t, e) {
        var i = this,
            a = 1e3 / t;
        if (i.runtime.tmp.time_limit_request_next > Date.now())
            return i.runTimeout(function () {
                i.runLimitRequest(t, e);
            }, a / 5);
        (i.runtime.tmp.time_limit_request_next = Date.now() + a), isFunctionLadiPage(e) && e();
    }),
    (LadiPageScriptV2.prototype.showMessage = function (t, e, i) {
        if (((t = this.convertDataReplaceStr(t, !1, null, !1, e)), this.runtime.has_popupx)) (this.runtime.tmp.popupx_show_message_callback = i), this.runtime.tmp.runActionPopupX({ message: t, action: { type: "show_message" } });
        else {
            var a = document.getElementsByClassName("ladipage-message")[0];
            if ((isEmptyLadiPage(a) || a.parentElement.removeChild(a), isEmptyLadiPage(t))) return void (isFunctionLadiPage(i) && i());
            ((a = document.createElement("div")).className = "ladipage-message"), document.body.appendChild(a);
            var n = document.createElement("div");
            (n.className = "ladipage-message-box"), a.appendChild(n);
            var o = document.createElement("span");
            n.appendChild(o), (o.textContent = this.const.LANG.ALERT_TITLE);
            var r = document.createElement("div");
            (r.className = "ladipage-message-text"), n.appendChild(r), (r.innerHTML = t);
            var d = document.createElement("button");
            (d.className = "ladipage-message-close"),
                n.appendChild(d),
                (d.textContent = this.const.LANG.ALERT_BUTTON_TEXT),
                d.focus(),
                d.addEventListener("click", function (t) {
                    t.stopPropagation(), a.parentElement.removeChild(a), isFunctionLadiPage(i) && i();
                });
        }
    }),
    (LadiPageScriptV2.prototype.getTextClipboard = function (t, e) {
        var i = function (i) {
                isFunctionLadiPage(e) && ((i = isEmptyLadiPage(i) ? (isEmptyLadiPage(t) ? "" : t) : i), e(!0, i));
            },
            a = function () {
                try {
                    var t = document.createElement("textarea");
                    t.setAttribute("style", "position: fixed; top: 0, left: 0, width: 1px; height: 1px; opacity: 0;"), document.body.appendChild(t), t.focus();
                    var a = document.execCommand("paste"),
                        n = t.value;
                    if ((t.parentElement.removeChild(t), a)) return void i(n);
                } catch (t) {}
                isFunctionLadiPage(e) && e(!1, null);
            };
        window.navigator.clipboard ? window.navigator.clipboard.readText().then(i).catch(a) : a();
    }),
    (LadiPageScriptV2.prototype.copyTextClipboard = function (t, e) {
        var i = function () {
                isFunctionLadiPage(e) && e(!0, t);
            },
            a = function () {
                try {
                    var a = document.createElement("textarea");
                    a.setAttribute("style", "position: fixed; top: 0, left: 0, width: 1px; height: 1px; opacity: 0;"), document.body.appendChild(a), (a.value = t), a.select();
                    var n = document.execCommand("copy");
                    if ((a.parentElement.removeChild(a), n)) return void i();
                } catch (t) {}
                isFunctionLadiPage(e) && e(!1, null);
            };
        window.navigator.clipboard ? window.navigator.clipboard.writeText(t).then(i).catch(a) : a();
    }),
    (LadiPageScriptV2.prototype.fireEvent = function (t, e, i) {
        t = isStringLadiPage(t) ? document.querySelector(t) : t;
        var a = document.createEvent("HTMLEvents");
        (a.initEvent(e, !0, !0), isObjectLadiPage(i)) &&
            Object.keys(i).forEach(function (t) {
                a[t] = i[t];
            });
        return !t.dispatchEvent(a);
    }),
    (LadiPageScriptV2.prototype.tapEventListener = function (t, e) {
        var i = this,
            a = function (t) {
                isFunctionLadiPage(e) && e(t);
            };
        if ((t.addEventListener("click", a), "ontouchstart" in window)) {
            var n = 0,
                o = 0,
                r = i.getWidthDevice(),
                d = Math.max(1, Math.floor(0.01 * r)),
                s = null;
            t.addEventListener(
                "touchstart",
                function (e) {
                    (e = i.getEventCursorData(e)), i.removeTimeout(s), (n = e.screenX), (o = e.screenY), t.removeEventListener("click", a);
                },
                i.runtime.scrollEventPassive
            ),
                t.addEventListener("touchend", function (e) {
                    (e = i.getEventCursorData(e)),
                        Math.abs(e.screenX - n) <= d && Math.abs(e.screenY - o) <= d && a(e),
                        (s = i.runTimeout(function () {
                            t.addEventListener("click", a);
                        }, i.runtime.time_click));
                });
        }
    }),
    (LadiPageScriptV2.prototype.findAncestor = function (t, e) {
        e = isArrayLadiPage(e) ? e : [e];
        for (
            var i = function (t, e) {
                    if (isNullLadiPage(t) || isNullLadiPage(t.classList) || !t.classList.contains(e)) for (; (t = t.parentElement) && !t.classList.contains(e); );
                    return t;
                },
                a = 0;
            a < e.length && ((t = i(t, e[a])), !isEmptyLadiPage(t));
            a++
        );
        return t;
    }),
    (LadiPageScriptV2.prototype.createStyleElement = function (t, e) {
        var i = document.getElementById(t);
        return isEmptyLadiPage(i) && (((i = document.createElement("style")).id = t), (i.type = "text/css"), document.head.appendChild(i)), i.innerHTML != e && (i.innerHTML = e), i;
    }),
    (LadiPageScriptV2.prototype.createTmpElement = function (t, e, i, a, n) {
        var o = document.createElement(t);
        isEmptyLadiPage(i) ||
            Object.keys(i).forEach(function (t) {
                o.setAttribute(t, i[t]);
            });
        var r = document.createElement("div");
        return r.appendChild(o), a ? (o.outerHTML = e) : (o.innerHTML = e), n ? r : r.firstChild;
    }),
    (LadiPageScriptV2.prototype.getSource2ndClick = function (t) {
        var e = this.runtime.eventData[t];
        if (!isEmptyLadiPage(e))
            return "image" == e.type && e[this.runtime.device + ".option.image_setting.2nd_click"]
                ? e[this.runtime.device + ".option.image_setting.source_2nd_click"]
                : "shape" == e.type && e["option.shape_setting.2nd_click"]
                ? e[this.runtime.device + ".option.shape_setting.source_2nd_click"]
                : void 0;
    }),
    (LadiPageScriptV2.prototype.getCountdownTime = function (t, e) {
        var i = Math.floor(t / 1e3),
            a = i % 86400,
            n = a % 3600,
            o = Math.floor(i / 86400),
            r = Math.floor(a / 3600),
            d = Math.floor(n / 60),
            s = n % 60;
        (o = o < 0 ? 0 : o), (r = r < 0 ? 0 : r), (d = d < 0 ? 0 : d), (s = s < 0 ? 0 : s), (o = o < 10 ? "0" + o : o), (r = r < 10 ? "0" + r : r), (d = d < 10 ? "0" + d : d), (s = s < 10 ? "0" + s : s);
        var l = {};
        return (l[this.const.COUNTDOWN_ITEM_TYPE.day] = o), (l[this.const.COUNTDOWN_ITEM_TYPE.hour] = r), (l[this.const.COUNTDOWN_ITEM_TYPE.minute] = d), (l[this.const.COUNTDOWN_ITEM_TYPE.seconds] = s), isEmptyLadiPage(e) ? l : l[e];
    }),
    (LadiPageScriptV2.prototype.getElementBoundingClientRect = function (t) {
        isStringLadiPage(t) && (t = document.getElementById(t));
        var e = t.getBoundingClientRect();
        return (isNullLadiPage(e.x) || isNullLadiPage(e.y)) && ((e.x = e.left), (e.y = e.top)), e;
    }),
    (LadiPageScriptV2.prototype.getElementViewBox = function (t) {
        var e = { x: 0, y: 0, width: 0, height: 0 },
            i = t.getAttribute("viewBox").split(" ");
        return (e.x = parseFloatLadiPage(i[0]) || 0), (e.y = parseFloatLadiPage(i[1]) || 0), (e.width = parseFloatLadiPage(i[2]) || 0), (e.height = parseFloatLadiPage(i[3]) || 0), e;
    }),
    (LadiPageScriptV2.prototype.getEventCursorData = function (t) {
        return (
            ["pageX", "pageY", "screenX", "screenY"].forEach(function (e) {
                isNullLadiPage(t[e]) &&
                    (!isEmptyLadiPage(t.touches) && t.touches.length > 0
                        ? (t[e] = t.touches[0][e])
                        : !isEmptyLadiPage(t.targetTouches) && t.targetTouches.length > 0
                        ? (t[e] = t.targetTouches[0][e])
                        : !isEmptyLadiPage(t.changedTouches) && t.changedTouches.length > 0 && (t[e] = t.changedTouches[0][e]));
            }),
            t
        );
    }),
    (LadiPageScriptV2.prototype.getElementAHref = function (t, e) {
        var i = document.createElement("a");
        return !e || t.toLowerCase().startsWith("http://") || t.toLowerCase().startsWith("https://") || t.startsWith("//") || (t = "http://" + t), (i.href = t), i;
    }),
    (LadiPageScriptV2.prototype.loadScript = function (t, e, i, a) {
        var n = document.createElement("script");
        ((n.type = "text/javascript"), isFunctionLadiPage(i) && ((a = i), (i = e), (e = null)), i && (n.async = !0), isObjectLadiPage(e)) &&
            Object.keys(e).forEach(function (t) {
                n.setAttribute(t, e[t]);
            });
        n.addEventListener("load", a), (n.src = t), document.head.appendChild(n);
    }),
    (LadiPageScriptV2.prototype.loadCss = function (t, e) {
        var i = document.createElement("link");
        ((i.rel = "stylesheet"), isObjectLadiPage(e)) &&
            Object.keys(e).forEach(function (t) {
                i.setAttribute(t, e[t]);
            });
        (i.href = t), document.head.appendChild(i);
    }),
    (LadiPageScriptV2.prototype.showLoadingBlur = function () {
        var t = this;
        t instanceof LadiPageScriptV2 || (t = LadiPageScript);
        var e = document.getElementsByClassName("ladi-loading")[0];
        isEmptyLadiPage(e) &&
            (((e = document.createElement("div")).className = "ladi-loading"),
            (e.innerHTML = '<div class="loading"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>'),
            document.body.appendChild(e));
    }),
    (LadiPageScriptV2.prototype.hideLoadingBlur = function () {
        var t = this;
        t instanceof LadiPageScriptV2 || (t = LadiPageScript);
        var e = document.getElementsByClassName("ladi-loading")[0];
        isEmptyLadiPage(e) || e.parentElement.removeChild(e);
    }),
    (LadiPageScriptV2.prototype.randomId = function () {
        var t = Date.now(),
            e = (window.performance && window.performance.now && 1e3 * window.performance.now()) || 0;
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (i) {
            var a = 16 * Math.random();
            return t > 0 ? ((a = (t + a) % 16 | 0), (t = Math.floor(t / 16))) : ((a = (e + a) % 16 | 0), (e = Math.floor(e / 16))), ("x" === i ? a : (3 & a) | 8).toString(16);
        });
    }),
    (LadiPageScriptV2.prototype.decodeValue = function (t) {
        var e = this;
        isObjectLadiPage(t) &&
            Object.keys(t).forEach(function (i) {
                t[i] = e.decodeValue(t[i]);
            });
        if (isArrayLadiPage(t)) for (var i = 0; i < t.length; i++) t[i] = e.decodeValue(t[i]);
        return isStringLadiPage(t) && (t = t.decode()), t;
    }),
    (LadiPageScriptV2.prototype.run = function (t) {
        var e = this;
        if (e.runtime.isLoadHtmlGlobal) {
            (e.runtime.isIE = !!document.documentMode), (e.runtime.isIE = e.runtime.isIE ? e.runtime.isIE : !e.runtime.isIE && !!window.StyleMedia), (e.runtime.scrollEventPassive = null);
            try {
                var i = Object.defineProperty({}, "passive", {
                    get: function () {
                        e.runtime.scrollEventPassive = { passive: !0 };
                    },
                });
                window.addEventListener("testPassive", null, i), window.removeEventListener("testPassive", null, i);
            } catch (t) {}
            (e.runtime.isClient = t),
                (e.runtime.timenow = window.ladi("_timenow").get_cookie()),
                isEmptyLadiPage(e.runtime.timenow) ? ((e.runtime.timenow = Date.now()), window.ladi("_timenow").set_cookie(e.runtime.timenow, 1)) : (e.runtime.timenow = parseFloatLadiPage(e.runtime.timenow) || 0);
            try {
                e.runtime.widthScrollBar = window.innerWidth - document.documentElement.clientWidth;
            } catch (t) {}
            if (isStringLadiPage(e.runtime.eventData))
                try {
                    var a = decodeURIComponentLadiPage(e.runtime.eventData);
                    e.runtime.eventData = JSON.parse(a);
                } catch (t) {
                    var n = e.runtime.eventData
                        .replaceAll(/&amp;/g, "&")
                        .replaceAll(/&gt;/g, ">")
                        .replaceAll(/&lt;/g, "<")
                        .replaceAll(/&quot;/g, '"');
                    (n = n.replaceAll("\r\n", "").replaceAll("\n", "")), (e.runtime.eventData = JSON.parse(n));
                }
            else {
                var o = document.getElementById("script_event_data");
                if (!isEmptyLadiPage(o))
                    try {
                        (e.runtime.eventData = JSON.parse(o.innerHTML)), (e.runtime.eventData = e.decodeValue(e.runtime.eventData));
                    } catch (t) {}
            }
            isNullLadiPage(window.ladi_is_desktop)
                ? (e.runtime.isDesktop = t ? !/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(window.navigator.userAgent.toLowerCase()) : LadiPage.isDesktop())
                : (e.runtime.isDesktop = t ? window.ladi_is_desktop : LadiPage.isDesktop()),
                (e.runtime.isBrowserDesktop = !("ontouchstart" in window)),
                (e.runtime.device = e.runtime.isDesktop ? e.const.DESKTOP : e.const.MOBILE),
                (e.runtime.tmp.isFirstScroll = !0),
                (e.runtime.tmp.capture_form_data_last = {}),
                (e.runtime.tmp.listAfterLocation = []),
                (e.runtime.tmp.product_info = {}),
                (e.runtime.tmp.timeout_product_info = {}),
                (e.runtime.tmp.product_tag_info = {}),
                (e.runtime.tmp.timeout_product_tag_info = {}),
                (e.runtime.tmp.dataset_check_load = !1),
                (e.runtime.tmp.dataset_data = {}),
                (e.runtime.tmp.timeout_dataset_data = {}),
                (e.runtime.tmp.cart = []),
                (e.runtime.tmp.add_to_cart_discount = 0),
                (e.runtime.tmp.add_to_cart_fee_shipping = 0),
                (e.runtime.tmp.is_click_add_to_cart = !1),
                (e.runtime.tmp.is_click_check_price_discount = !1),
                (e.runtime.tmp.current_use_coupon = null);
            var r = Object.keys(e.runtime.eventDataGlobal);
            r.forEach(function (t) {
                (e.runtime.eventData[t] = e.runtime.eventDataGlobal[t]), delete e.runtime.eventDataGlobal[t];
            }),
                (r = Object.keys(e.runtime.eventData)).forEach(function (t) {
                    Object.keys(e.runtime.eventData[t]).forEach(function (i) {
                        if (e.runtime.isDesktop) {
                            if (i.toLowerCase().startsWith(e.const.DESKTOP)) {
                                var a = e.const.MOBILE + i.substring(e.const.DESKTOP.length);
                                e.runtime.eventData[t][a] = e.runtime.eventData[t][i];
                            }
                        } else if (i.toLowerCase().startsWith(e.const.MOBILE)) {
                            var n = e.const.DESKTOP + i.substring(e.const.MOBILE.length);
                            e.runtime.eventData[t][n] = e.runtime.eventData[t][i];
                        }
                    });
                });
            try {
                var d = window.ladi("LADI_DATA").get_cookie();
                (d = JSON.parse(Base64.decode(d || Base64.encode("{}")))),
                    Object.keys(d).forEach(function (t) {
                        e.setDataReplaceStr(t, d[t]);
                    });
            } catch (t) {}
            var s = function (t) {
                    var i = e.copy(t);
                    return (
                        isObjectLadiPage(i) &&
                            e.runtime.list_set_value_name_country.forEach(function (t) {
                                if (!isEmptyLadiPage(i[t])) {
                                    var e = i[t].split(":");
                                    e.length > 1 && e.shift(), (i[t] = e.join(":"));
                                }
                            }),
                        i
                    );
                },
                l = e.getURLSearchParams(null, null, !0),
                c = e.getURLSearchParams(window.location.search, null, !0),
                u = s(l),
                p = Object.keys(u),
                m = "";
            p.forEach(function (t) {
                if (t != e.const.TRACKING_NAME && t != e.const.ACCESS_KEY_NAME) {
                    if ((e.setDataReplaceStr(t, u[t]), "products" == t && isStringLadiPage(u[t]))) {
                        var i = u[t].split("|");
                        2 == i.length && -1 == p.indexOf("product_id") && e.setDataReplaceStr("product_value", i[0]), 2 == i.length && -1 == p.indexOf("product_name") && e.setDataReplaceStr("product_name", i[1]);
                    }
                    (isArrayLadiPage(c[t]) ? c[t] : [c[t]]).forEach(function (e) {
                        isEmptyLadiPage(m) ? (m += "?") : (m += "&"), (m += t + "=" + encodeURIComponent(e));
                    });
                }
            }),
                window.ladi(e.const.TRACKING_NAME).delete_cookie("/"),
                m != window.location.search && e.historyReplaceState(window.location.pathname + m + window.location.hash);
            var g = c[e.const.REF_NAME];
            isEmptyLadiPage(g) ? (g = window.ladi("ladi_ref").get_cookie()) : window.ladi("ladi_ref").set_cookie(g, 90, "/", window.location.host);
            var _ = Object.keys(e.runtime.eventData),
                y = [],
                f = window.ladi("LADI_CLIENT_ID").get_cookie(),
                v = parseFloatLadiPage(window.ladi("LADI_PAGE_VIEW").get_cookie()) || 0,
                P = parseFloatLadiPage(window.ladi("LADI_FORM_SUBMIT").get_cookie()) || 0,
                h = window.ladi("LADI_FUNNEL_NEXT_URL").get_cookie(),
                L = window.ladi("LADI_CAMP_ID").get_cookie(),
                E = window.ladi("LADI_CAMP_NAME").get_cookie(),
                b = window.ladi("LADI_CAMP_TYPE").get_cookie(),
                A = window.ladi("LADI_CAMP_TARGET_URL").get_cookie(),
                w = window.ladi("LADI_CAMP_ORIGIN_URL").get_cookie(),
                T = parseFloatLadiPage(window.ladi("LADI_CAMP_PAGE_VIEW").get_cookie()) || 0,
                S = parseFloatLadiPage(window.ladi("LADI_CAMP_FORM_SUBMIT").get_cookie()) || 0,
                O = window.ladi("LADI_CAMP_CONFIG").get_cookie(),
                C = function (t, i, a) {
                    if ("FormSubmit" == t && isEmptyLadiPage(f)) isFunctionLadiPage(a) && a();
                    else if (!e.runtime.is_popupx || e.runtime.has_popupx) {
                        var n = e.runtime.publish_platform,
                            o = e.runtime.store_id,
                            r = e.runtime.time_zone,
                            d = window.location.host,
                            s = window.location.href,
                            l = e.runtime.ladipage_id,
                            c = { event: t, pixel_id: o, time_zone: r, domain: d, url: s, ladipage_id: l, publish_platform: n, data: [] };
                        Object.keys(i).forEach(function (t) {
                            c[t] = i[t];
                        }),
                            e.runtime.is_popupx &&
                            ((c.type = "POPUPX"),
                            (c.origin_store_id = e.runtime.tmp.popupx_origin_store_id),
                            (c.origin_referer = e.runtime.tmp.popupx_origin_referer),
                            (c.origin_domain = e.runtime.tmp.popupx_origin_domain),
                            (c.origin_url = e.runtime.tmp.popupx_origin_url),
                            (c.element_id = e.runtime.tmp.popupx_current_element_id),
                            isEmptyLadiPage(c.element_id))
                                ? e.runTimeout(function () {
                                      C(t, i, a);
                                  }, 100)
                                : ("FormSubmit" == t &&
                                      (isEmptyLadiPage(L) ? P++ : (A == w && P++, S++),
                                      window.ladi("LADI_CAMP_FORM_SUBMIT").set_cookie(S, 3650),
                                      window.ladi("LADI_FORM_SUBMIT").set_cookie(P, 3650),
                                      e.runtime.is_popupx && e.runtime.tmp.runActionPopupX({ action: { type: "set_submit_form" } })),
                                  "PageView" == t && e.runtime.has_popupx && (v++, window.ladi("LADI_PAGE_VIEW").set_cookie(v, 3650)),
                                  e.sendRequest(
                                      "POST",
                                      e.const.API_ANALYTICS_EVENT,
                                      JSON.stringify(c),
                                      !0,
                                      {
                                          "Content-Type": "application/json",
                                          LADI_CLIENT_ID: f,
                                          LADI_PAGE_VIEW: v,
                                          LADI_FORM_SUBMIT: P,
                                          LADI_CAMP_ID: L,
                                          LADI_CAMP_NAME: E,
                                          LADI_CAMP_TYPE: b,
                                          LADI_CAMP_TARGET_URL: A,
                                          LADI_CAMP_ORIGIN_URL: w,
                                          LADI_CAMP_PAGE_VIEW: T,
                                          LADI_CAMP_FORM_SUBMIT: S,
                                      },
                                      function (t, e, i) {
                                          i.readyState == XMLHttpRequest.DONE && isFunctionLadiPage(a) && a(e, t);
                                      }
                                  ));
                    } else
                        e.runTimeout(function () {
                            C(t, i, a);
                        }, 100);
                },
                N = function (t, i, a, n) {
                    var o = null,
                        r = null,
                        d = null,
                        s = 0;
                    if (isEmptyLadiPage(i) || "POPUP_PRODUCT" != i.id)
                        if (isEmptyLadiPage(i) || "POPUP_BLOG" != i.id) isFunctionLadiPage(n) && n();
                        else {
                            if (
                                ((o = e.generateVariantProduct(a, !1, null, null, null, null, !0, !0, function (e) {
                                    N(t, i, a, n);
                                })),
                                !isObjectLadiPage(o) || !isObjectLadiPage(o.product) || !isObjectLadiPage(o.store_info))
                            )
                                return;
                            var l = function () {
                                var t,
                                    a,
                                    c = !0;
                                if (
                                    (Object.keys(o.product).forEach(function (t) {
                                        if (c && isStringLadiPage(o.product[t]) && o.product[t].startsWith(e.const.DATASET_CONTENT_SOURCE_URL) && o.product[t].endsWith(e.const.DATASET_CONTENT_SOURCE_ENDSWITH)) {
                                            var i = o.product[t].replaceAll(e.const.DATASET_CONTENT_SOURCE_URL, e.const.API_DATASET_BLOG);
                                            (c = !1),
                                                e.showLoadingBlur(),
                                                e.sendRequest("GET", i, null, !0, null, function (e, i, a) {
                                                    a.readyState == XMLHttpRequest.DONE && ((o.product[t] = e), l());
                                                });
                                        }
                                    }),
                                    c)
                                ) {
                                    e.hideLoadingBlur(), i.classList.add("opacity-0"), (r = document.querySelectorAll("#" + i.id + " .ladi-element"));
                                    var u = null,
                                        p = function (t) {
                                            e.removeTimeout(u);
                                            var a = function (t, i) {
                                                var a = e.findAncestor(t.parentElement, "ladi-element");
                                                e.updateHeightElement(!0, t, a, i, t.clientHeight);
                                            };
                                            u = e.runTimeout(
                                                function () {
                                                    e.showParentVisibility(r[0], function () {
                                                        for (s = 0; s < r.length; s++) {
                                                            if (r[s].querySelectorAll(".ladi-headline, .ladi-paragraph").length > 0 && r[s].hasAttribute("data-height")) {
                                                                var t = parseFloatLadiPage(r[s].getAttribute("data-height")) || 0;
                                                                t != r[s].clientHeight && (r[s].setAttribute("data-height", r[s].clientHeight), a(r[s], t));
                                                            }
                                                        }
                                                    }),
                                                        e.runShowPopup(!0, i.id, null, null, !0);
                                                },
                                                isEmptyLadiPage(t) ? 0 : 100
                                            );
                                        };
                                    e.showParentVisibility(r[0], function () {
                                        for (s = 0; s < r.length; s++) {
                                            r[s].querySelectorAll(".ladi-headline, .ladi-paragraph").length > 0 && !r[s].hasAttribute("data-height") && r[s].setAttribute("data-height", r[s].clientHeight);
                                        }
                                    });
                                    var m = function (t) {
                                        (!e.runtime.isDesktop || (isEmptyLadiPage(t.getAttribute("height")) && isEmptyLadiPage(t.style.getPropertyValue("height")))) && (t.addEventListener("load", p), t.addEventListener("error", p));
                                    };
                                    for (s = 0; s < r.length; s++)
                                        e.runtime.tmp.runLadiSaleProductKey(r[s].id, !1, !1, d, o, !0, null, !0),
                                            (t = r[s]),
                                            void 0,
                                            (a = e.runtime.eventData[t.id]),
                                            isFunctionLadiPage(e.runtime.tmp.runOptionAction) && isObjectLadiPage(a) && e.runtime.tmp.runOptionAction(t, t.id, a.type, a, o);
                                    for (s = 0; s < r.length; s++) for (var g = r[s].querySelectorAll(".ladi-headline img, .ladi-paragraph img"), _ = 0; _ < g.length; _++) m(g[_]);
                                    isFunctionLadiPage(n) && n(),
                                        p(),
                                        e.runTimeout(function () {
                                            i.classList.remove("opacity-0");
                                        }, 150);
                                }
                            };
                            l();
                        }
                    else {
                        if (
                            ((o = e.generateVariantProduct(a, !1, null, null, null, null, !0, !0, function (e) {
                                N(t, i, a, n);
                            })),
                            !isObjectLadiPage(o) || !isObjectLadiPage(o.store_info) || !isObjectLadiPage(o.product) || !isArrayLadiPage(o.product.variants) || o.product.variants.length <= 0)
                        )
                            return;
                        if (isEmptyLadiPage(a["option.product_variant_id"])) {
                            d = o.product.variants[0];
                            var c = e.findAncestor(t, "ladi-collection-item"),
                                u = null;
                            if (isEmptyLadiPage(c)) {
                                for (var p = document.querySelectorAll('[data-variant="true"] select[data-store-id="' + o.store_info.id + '"][data-product-id="' + o.product.product_id + '"]'), m = 0; m < p.length; m++)
                                    if (isEmptyLadiPage(e.findAncestor(p[m], "ladi-collection-item"))) {
                                        u = p[m];
                                        break;
                                    }
                            } else u = c.querySelector('[data-variant="true"]');
                            if (!isEmptyLadiPage(u)) {
                                u = e.findAncestor(u, "ladi-element");
                                var g = e.getProductVariantId(u, o.product);
                                isEmptyLadiPage(g) ||
                                    (d = o.product.variants.find(function (t) {
                                        return t.product_variant_id == g;
                                    }));
                            }
                        } else
                            d = o.product.variants.find(function (t) {
                                return t.product_variant_id == a["option.product_variant_id"];
                            });
                        if (isEmptyLadiPage(d)) return;
                        var _ = function (t) {
                            var i = e.runtime.eventData[t.id];
                            isFunctionLadiPage(e.runtime.tmp.runOptionAction) && isObjectLadiPage(i) && e.runtime.tmp.runOptionAction(t, t.id, i.type, i, o);
                        };
                        for (r = document.querySelectorAll("#" + i.id + " .ladi-element"), s = 0; s < r.length; s++) e.runtime.tmp.runLadiSaleProductKey(r[s].id, !1, !1, d, o), _(r[s]);
                        isFunctionLadiPage(n) && n();
                    }
                },
                I = function (t, i) {
                    i = isArrayLadiPage(i) ? i : [];
                    var a = e.runtime.eventData[t.id],
                        n = i.findIndex(function (t) {
                            return t.action_type == e.const.ACTION_TYPE.complete && (t.type == e.const.DATA_ACTION_TYPE.popup || t.type == e.const.DATA_ACTION_TYPE.popup_cart || t.type == e.const.DATA_ACTION_TYPE.popup_checkout);
                        });
                    (n = -1 != n),
                        i.forEach(function (i) {
                            if (i.action_type == e.const.ACTION_TYPE.complete) {
                                var o = null,
                                    r = null;
                                if (i.type == e.const.DATA_ACTION_TYPE.section) {
                                    var d = 0,
                                        s = document.getElementById(i.action);
                                    if (!isEmptyLadiPage(s)) {
                                        if (n) return void window.ladi(s.id).scroll(!1, !0);
                                        if (((o = e.findAncestor(t, "ladi-popup")), !isEmptyLadiPage(o))) {
                                            var l = e.findAncestor(o, "ladi-element");
                                            l.hasAttribute("data-popup-backdrop") && (window.ladi(l.id).hide(), (d = 100));
                                        }
                                        e.runTimeout(function () {
                                            window.ladi(s.id).scroll();
                                        }, d);
                                    }
                                }
                                if (
                                    (i.type == e.const.DATA_ACTION_TYPE.popup &&
                                        ((o = document.getElementById(i.action)),
                                        isEmptyLadiPage(o) ||
                                            N(t, o, a, function () {
                                                window.ladi(i.action).show();
                                            })),
                                    i.type == e.const.DATA_ACTION_TYPE.hidden_show &&
                                        (isArrayLadiPage(i.hidden_ids) &&
                                            i.hidden_ids.forEach(function (t) {
                                                window.ladi(t).hide();
                                            }),
                                        isArrayLadiPage(i.show_ids) &&
                                            i.show_ids.forEach(function (t) {
                                                window.ladi(t).show();
                                            })),
                                    i.type == e.const.DATA_ACTION_TYPE.change_index && ((r = window.ladi(i.action)), isFunctionLadiPage(r[i.change_index_type]) ? r[i.change_index_type]() : r.index(i.change_index_number || 1)),
                                    i.type == e.const.DATA_ACTION_TYPE.set_value &&
                                        ((r = window.ladi(i.action)),
                                        isEmptyLadiPage(r) ||
                                            (i.is_clipboard
                                                ? e.getTextClipboard(i.str, function (e, a) {
                                                      r.value(e ? a : i.str), k(t, e, !0);
                                                  })
                                                : r.value(i.str))),
                                    i.type == e.const.DATA_ACTION_TYPE.link)
                                ) {
                                    var c = i.action;
                                    isEmptyLadiPage(c) || ((c = e.getLinkUTMRedirect(c, null)), (c = e.convertDataReplaceStr(c, !0)), window.ladi(c).open_url(i.target, i.nofollow));
                                }
                            }
                        });
                },
                k = function (t, i, a) {
                    var n = parseFloatLadiPage(t.getAttribute("data-timeout-id-copied")) || 0;
                    e.removeTimeout(n);
                    var o = "hint-{0}-middle-s-small-hint-anim-d-short",
                        r = !0;
                    e.getElementBoundingClientRect(t).y < 35 && (r = !1),
                        r ? (t.classList.add(o.format("top")), t.classList.remove(o.format("bottom"))) : (t.classList.remove(o.format("top")), t.classList.add(o.format("bottom"))),
                        i ? (a ? t.setAttribute("data-hint", e.const.LANG.PASTED) : t.setAttribute("data-hint", e.const.LANG.COPIED)) : t.setAttribute("data-hint", e.const.LANG.FAILED),
                        (n = e.runTimeout(function () {
                            t.classList.remove(o.format("top")), t.classList.remove(o.format("bottom")), t.removeAttribute("data-hint"), t.removeAttribute("data-timeout-id-copied");
                        }, 1e3)),
                        t.setAttribute("data-timeout-id-copied", n);
                },
                x = function (t, i, a, n, o) {
                    if (((t = t || document.getElementById(i)), !isEmptyLadiPage(t))) {
                        var r = function (t) {
                                if (!isEmptyLadiPage(t)) return "true" == t.getAttribute("data-dropbox") ? t : r(t.parentElement);
                            },
                            d = function (t, e) {
                                if ("false" == t.getAttribute("data-click")) return !1;
                                var i = r(e.target);
                                if (!isEmptyLadiPage(i)) {
                                    var a = document.getElementById(i.getAttribute("data-from-doc-id"));
                                    if (!isEmptyLadiPage(a)) return a.id != t.id && d(t, { target: a });
                                }
                                return !0;
                            },
                            s = function () {
                                return e.runtime.count_click_dom[t.id] || 0;
                            },
                            l = function (t) {
                                var i = s();
                                return t.action_type == e.const.ACTION_TYPE.action || (t.action_type == e.const.ACTION_TYPE["1st_click"] && i % 2 == 1) || (t.action_type == e.const.ACTION_TYPE["2nd_click"] && i % 2 == 0) || void 0;
                            };
                        t.addEventListener("click", function () {
                            e.runtime.count_click_dom[t.id] = s() + 1;
                        });
                        var c = n["option.is_submit_form"],
                            u = n["option.data_submit_form_id"];
                        if (!n["option.action_funnel"] || isEmptyLadiPage(h))
                            if (!c || isEmptyLadiPage(u)) {
                                var p = n["option.data_event"];
                                if (!isArrayLadiPage(p) && ((p = []), isObjectLadiPage(n["option.data_action"]))) {
                                    var m = e.copy(n["option.data_action"]);
                                    (m.action_type = e.const.ACTION_TYPE.action), p.push(m);
                                }
                                var g = e.getSource2ndClick(t.id);
                                isEmptyLadiPage(g) || (t.classList.add("is-2nd-click"), p.push({ action_type: e.const.ACTION_TYPE.action, type: e.const.DATA_ACTION_TYPE.set_value_2nd, source: g }));
                                var _ = function (e, i) {
                                        return k(t, e, !1);
                                    },
                                    y = p.findIndex(function (t) {
                                        return t.action_type == e.const.ACTION_TYPE.action && (t.type == e.const.DATA_ACTION_TYPE.popup || t.type == e.const.DATA_ACTION_TYPE.popup_cart || t.type == e.const.DATA_ACTION_TYPE.popup_checkout);
                                    });
                                y = -1 != y;
                                var f = 0;
                                p.forEach(function (a) {
                                    if (a.action_type == e.const.ACTION_TYPE.action || a.action_type == e.const.ACTION_TYPE["1st_click"] || a.action_type == e.const.ACTION_TYPE["2nd_click"]) {
                                        if (
                                            (f++,
                                            a.type == e.const.DATA_ACTION_TYPE.set_value_2nd &&
                                                t.addEventListener("click", function (e) {
                                                    if (d(t, e) && l(a)) {
                                                        var i = window.ladi(t.id, t);
                                                        isEmptyLadiPage(i) || i.set_value_2nd(a.source);
                                                    }
                                                }),
                                            a.type == e.const.DATA_ACTION_TYPE.link)
                                        ) {
                                            var r = null;
                                            t.addEventListener("click", function (i) {
                                                d(t, i) &&
                                                    l(a) &&
                                                    "true" == t.getAttribute("data-action") &&
                                                    ((r = a.action),
                                                    isEmptyLadiPage(a.action_mapping) || (r = a.action_mapping),
                                                    isEmptyLadiPage(r) || ((r = e.getLinkUTMRedirect(r, null)), (r = e.convertDataReplaceStr(r, !0)), window.ladi(r).open_url(a.target, a.nofollow)));
                                            });
                                            var s = function () {
                                                if ((isNullLadiPage(o) && (o = e.generateVariantProduct(n, !1, null, null, null, null, !0, !0, s)), isObjectLadiPage(o) && isObjectLadiPage(o.store_info) && isObjectLadiPage(o.product))) {
                                                    r = a.action;
                                                    var i = a.link_mapping;
                                                    isEmptyLadiPage(i) && (i = a.link_mapping_custom),
                                                        isEmptyLadiPage(i) || ((a.action_mapping = o.product[i]), isEmptyLadiPage(a.action_mapping) || (r = a.action_mapping)),
                                                        isEmptyLadiPage(r)
                                                            ? (t.removeAttribute("data-replace-href"), t.removeAttribute("href"))
                                                            : ((r = e.getLinkUTMRedirect(r, null)), t.setAttribute("data-replace-href", r), (t.href = e.convertDataReplaceStr(r, !0)));
                                                }
                                            };
                                            s();
                                        }
                                        if (
                                            (a.type == e.const.DATA_ACTION_TYPE.email &&
                                                t.addEventListener("click", function (e) {
                                                    d(t, e) && l(a) && ("true" != t.getAttribute("data-action") || isEmptyLadiPage(a.action) || window.ladi("mailto:" + a.action).open_url());
                                                }),
                                            a.type == e.const.DATA_ACTION_TYPE.phone &&
                                                t.addEventListener("click", function (e) {
                                                    d(t, e) && l(a) && ("true" != t.getAttribute("data-action") || isEmptyLadiPage(a.action) || window.ladi("tel:" + a.action).open_url());
                                                }),
                                            a.type == e.const.DATA_ACTION_TYPE.collapse &&
                                                t.addEventListener("click", function (e) {
                                                    if (d(t, e) && l(a)) {
                                                        var i = document.getElementById(a.action);
                                                        isEmptyLadiPage(i) || window.ladi(a.action).collapse();
                                                    }
                                                }),
                                            a.type == e.const.DATA_ACTION_TYPE.section &&
                                                t.addEventListener("click", function (i) {
                                                    if (d(t, i) && l(a)) {
                                                        var n = 0,
                                                            o = document.getElementById(a.action);
                                                        if (!isEmptyLadiPage(o)) {
                                                            if (y) return void window.ladi(o.id).scroll(!1, !0);
                                                            var r = e.findAncestor(t, "ladi-popup");
                                                            if (!isEmptyLadiPage(r)) {
                                                                var s = e.findAncestor(r, "ladi-element");
                                                                s.hasAttribute("data-popup-backdrop") && (window.ladi(s.id).hide(), (n = 100));
                                                            }
                                                            e.runTimeout(function () {
                                                                window.ladi(o.id).scroll();
                                                            }, n);
                                                        }
                                                    }
                                                }),
                                            a.type == e.const.DATA_ACTION_TYPE.popup &&
                                                t.addEventListener("click", function (e) {
                                                    if (d(t, e) && l(a)) {
                                                        var i = document.getElementById(a.action);
                                                        isEmptyLadiPage(i) ||
                                                            N(t, i, n, function () {
                                                                window.ladi(a.action).show();
                                                            });
                                                    }
                                                }),
                                            a.type == e.const.DATA_ACTION_TYPE.dropbox &&
                                                t.addEventListener("click", function (e) {
                                                    if (d(t, e) && l(a)) {
                                                        var i = document.getElementById(a.action);
                                                        isEmptyLadiPage(i) || window.ladi(a.action).showDropbox(t, a.dropbox, !1);
                                                    }
                                                }),
                                            a.type == e.const.DATA_ACTION_TYPE.hidden_show &&
                                                t.addEventListener("click", function (e) {
                                                    d(t, e) &&
                                                        l(a) &&
                                                        (isArrayLadiPage(a.hidden_ids) &&
                                                            a.hidden_ids.forEach(function (t) {
                                                                window.ladi(t).hide();
                                                            }),
                                                        isArrayLadiPage(a.show_ids) &&
                                                            a.show_ids.forEach(function (t) {
                                                                window.ladi(t).show();
                                                            }));
                                                }),
                                            a.type == e.const.DATA_ACTION_TYPE.change_index &&
                                                t.addEventListener("click", function (e) {
                                                    if (d(t, e) && l(a)) {
                                                        var i = window.ladi(a.action);
                                                        isEmptyLadiPage(i) || (isFunctionLadiPage(i[a.change_index_type]) ? i[a.change_index_type]() : i.index(a.change_index_number || 1));
                                                    }
                                                }),
                                            a.type == e.const.DATA_ACTION_TYPE.set_style)
                                        ) {
                                            var c = window.ladi(a.action);
                                            isEmptyLadiPage(c) || c.set_style(t, a, !0),
                                                t.addEventListener("click", function (e) {
                                                    if (d(t, e) && l(a)) {
                                                        var i = window.ladi(a.action);
                                                        isEmptyLadiPage(i) || i.set_style(t, a);
                                                    }
                                                });
                                        }
                                        a.type == e.const.DATA_ACTION_TYPE.set_value &&
                                            t.addEventListener("click", function (i) {
                                                if (d(t, i) && l(a)) {
                                                    var n = window.ladi(a.action);
                                                    isEmptyLadiPage(n) ||
                                                        (a.is_clipboard
                                                            ? e.getTextClipboard(a.str, function (e, i) {
                                                                  n.value(e ? i : a.str), k(t, e, !0);
                                                              })
                                                            : n.value(a.str));
                                                }
                                            }),
                                            a.type == e.const.DATA_ACTION_TYPE.copy_clipboard &&
                                                t.addEventListener("click", function (i) {
                                                    if (d(t, i) && l(a)) {
                                                        var n = null,
                                                            o = window.ladi(a.action);
                                                        isEmptyLadiPage(o) || (n = o.value(null, null, { only_text: !0 })), (n = isEmptyLadiPage(n) ? a.str : n), isEmptyLadiPage(n) || e.copyTextClipboard(n, _);
                                                    }
                                                });
                                        var u = null;
                                        if (
                                            (a.type == e.const.DATA_ACTION_TYPE.lightbox
                                                ? (u = a.lightbox_type)
                                                : "lightbox_image" == a.type
                                                ? (u = e.const.DATA_ACTION_LIGHTBOX_TYPE.image)
                                                : "lightbox_video" == a.type
                                                ? (u = e.const.DATA_ACTION_LIGHTBOX_TYPE.video)
                                                : "lightbox_iframe" == a.type && (u = e.const.DATA_ACTION_LIGHTBOX_TYPE.iframe),
                                            u == e.const.DATA_ACTION_LIGHTBOX_TYPE.image &&
                                                t.addEventListener("click", function (i) {
                                                    if (d(t, i) && l(a)) {
                                                        var n = a.image_url;
                                                        isEmptyLadiPage(n) && (n = a["image_url_" + e.runtime.device]), lightbox_image(n);
                                                    }
                                                }),
                                            u == e.const.DATA_ACTION_LIGHTBOX_TYPE.video)
                                        ) {
                                            var p = document.querySelectorAll("#" + i + ".preload").length > 0;
                                            p && lightbox_video(a.video_url, a.video_type, p),
                                                t.addEventListener("click", function (e) {
                                                    d(t, e) && l(a) && lightbox_video(a.video_url, a.video_type, !1);
                                                });
                                        }
                                        u == e.const.DATA_ACTION_LIGHTBOX_TYPE.iframe &&
                                            t.addEventListener("click", function (e) {
                                                d(t, e) && l(a) && lightbox_iframe(a.iframe_url);
                                            }),
                                            a.type == e.const.DATA_ACTION_TYPE.popup_cart &&
                                                t.addEventListener("click", function (e) {
                                                    if (d(t, e) && l(a)) {
                                                        var i = document.getElementById("POPUP_CART");
                                                        isEmptyLadiPage(i) || window.ladi(i.id).show();
                                                    }
                                                }),
                                            a.type == e.const.DATA_ACTION_TYPE.popup_checkout &&
                                                t.addEventListener("click", function (i) {
                                                    d(t, i) && l(a) && (e.runtime.shopping_third_party ? e.getThirdPartyCheckoutUrl(!0) : window.ladi("POPUP_CHECKOUT").show());
                                                });
                                    }
                                }),
                                    e.runEventTracking(i, { count_data_event: f, is_click: !0, is_form: !1 }, null, t, d);
                            } else
                                t.addEventListener("click", function (e) {
                                    if (d(t, e)) {
                                        var i = document.getElementById(u);
                                        isEmptyLadiPage(i) || i.setAttribute("data-button-submit-other", t.id), window.ladi(u).submit();
                                    }
                                });
                        else
                            t.addEventListener("click", function (a) {
                                if (d(t, a)) {
                                    a.preventDefault();
                                    var n = h;
                                    (n = e.getLinkUTMRedirect(n, null)), (n = e.convertDataReplaceStr(n, !0)), window.ladi(n).open_url(), e.runEventTracking(i, { is_form: !1 });
                                }
                            });
                    }
                },
                D = function (t, i, a, n) {
                    if (((t = t || document.getElementById(i)), !isEmptyLadiPage(t))) {
                        if (!isArrayLadiPage(n)) {
                            var o = e.copy(n);
                            (n = []), isObjectLadiPage(o) && ((o.action_type = e.const.ACTION_TYPE.hover), n.push(o));
                        }
                        n.forEach(function (i) {
                            if (
                                i.action_type == e.const.ACTION_TYPE.hover &&
                                (i.type == e.const.DATA_ACTION_TYPE.dropbox &&
                                    (t.addEventListener("mouseenter", function (e) {
                                        window.ladi(i.action).showDropbox(t, i.dropbox, !0);
                                    }),
                                    t.addEventListener("mouseleave", function (t) {
                                        window.ladi(i.action).hide();
                                    })),
                                i.type == e.const.DATA_ACTION_TYPE.hidden_show &&
                                    (t.addEventListener("mouseenter", function (t) {
                                        isArrayLadiPage(i.hidden_ids) &&
                                            i.hidden_ids.forEach(function (t) {
                                                window.ladi(t).hide();
                                            }),
                                            isArrayLadiPage(i.show_ids) &&
                                                i.show_ids.forEach(function (t) {
                                                    window.ladi(t).show();
                                                });
                                    }),
                                    t.addEventListener("mouseleave", function (t) {
                                        isArrayLadiPage(i.hidden_ids) &&
                                            i.hidden_ids.forEach(function (t) {
                                                window.ladi(t).show();
                                            }),
                                            isArrayLadiPage(i.show_ids) &&
                                                i.show_ids.forEach(function (t) {
                                                    window.ladi(t).hide();
                                                });
                                    })),
                                i.type == e.const.DATA_ACTION_TYPE.change_index &&
                                    t.addEventListener("mouseenter", function (t) {
                                        var e = window.ladi(i.action);
                                        isFunctionLadiPage(e[i.change_index_type]) ? e[i.change_index_type]() : e.index(i.change_index_number || 1);
                                    }),
                                i.type == e.const.DATA_ACTION_TYPE.set_style)
                            ) {
                                var a = window.ladi(i.action);
                                isEmptyLadiPage(a) || a.set_style(t, i, !0),
                                    t.addEventListener("mouseenter", function (e) {
                                        window.ladi(i.action).set_style(t, i);
                                    }),
                                    t.addEventListener("mouseleave", function (e) {
                                        window.ladi(i.action).remove_style(t, i);
                                    });
                            }
                        });
                    }
                },
                R = function (t) {
                    var i = document.getElementById(t);
                    if (!isEmptyLadiPage(i) && t != e.runtime.builder_section_popup_id && t != e.runtime.builder_section_background_id) {
                        var a = i.classList.contains("ladi-section") ? "section" : null;
                        if (e.runtime.is_popupx && "section" == a) {
                            var n = document.createElement("div");
                            (n.className = "ladi-section-close"),
                                n.addEventListener("click", function (e) {
                                    e.stopPropagation(), window.ladi(t).hide();
                                }),
                                i.appendChild(n);
                        }
                    }
                },
                F = function (t, i, a, n, o, r, d, s) {
                    "countdown" != a ||
                        isEmptyLadiPage(n) ||
                        ((i = i || document.getElementById(t)),
                        isEmptyLadiPage(i) ||
                            (i.setAttribute("data-type", n),
                            n != e.const.COUNTDOWN_TYPE.countdown || isEmptyLadiPage(o) || i.setAttribute("data-minute", o),
                            n != e.const.COUNTDOWN_TYPE.endtime || isEmptyLadiPage(s) || i.setAttribute("data-endtime", s),
                            n != e.const.COUNTDOWN_TYPE.daily || isEmptyLadiPage(r) || isEmptyLadiPage(d) || (i.setAttribute("data-daily-start", r), i.setAttribute("data-daily-end", d))));
                },
                q = function (t, e, i, a) {
                    "countdown_item" != i || isEmptyLadiPage(a) || ((e = e || document.getElementById(t)), isEmptyLadiPage(e) || e.setAttribute("data-item-type", a));
                },
                B = function () {
                    _.forEach(function (t) {
                        var i = document.getElementById(t);
                        if (!isEmptyLadiPage(i) && "true" != i.getAttribute("data-action")) {
                            var a = e.runtime.eventData[t],
                                n = a["option.data_event"];
                            if (!isArrayLadiPage(n) && ((n = []), isObjectLadiPage(a["option.data_action"]))) {
                                var o = e.copy(a["option.data_action"]);
                                (o.action_type = e.const.ACTION_TYPE.action), n.push(o);
                            }
                            !(function (t, i) {
                                i.forEach(function (i) {
                                    if (i.action_type == e.const.ACTION_TYPE.action && i.type == e.const.DATA_ACTION_TYPE.link)
                                        if (isEmptyLadiPage(t.getAttribute("href"))) t.removeAttribute("href");
                                        else {
                                            var a = e.getLinkUTMRedirect(t.href, null);
                                            t.setAttribute("data-replace-href", a), (t.href = e.convertDataReplaceStr(a, !0));
                                        }
                                });
                            })(i, n);
                        }
                    });
                    for (var t = document.querySelectorAll(".ladi-headline a[href], .ladi-paragraph a[href], .ladi-list-paragraph a[href]"), i = 0; i < t.length; i++)
                        if (isEmptyLadiPage(t[i].getAttribute("href"))) t[i].removeAttribute("href");
                        else {
                            var a = e.getLinkUTMRedirect(t[i].href, null);
                            t[i].setAttribute("data-replace-href", a), (t[i].href = e.convertDataReplaceStr(a, !0));
                        }
                },
                M = function () {
                    if (t) {
                        var i = function () {
                                // if (((e.runtime.ladipage_powered_by_classname = e.randomString(e.randomInt(6, 32))), e.runtime.isClient)) {
                                //     var t = document.createElement("div");
                                //     document.body.insertBefore(t, document.body.childNodes[e.randomInt(0, document.body.childNodes.length)]), (t.className = e.runtime.ladipage_powered_by_classname);
                                //     var i =
                                //             "." +
                                //             e.runtime.ladipage_powered_by_classname +
                                //             ' {width: 140px; height: 30px; position: fixed; bottom: -40px; left: 10px; z-index: 10000000000; background: url("' +
                                //             e.const.POWERED_BY_IMAGE +
                                //             '") no-repeat center #fafafa; background-size: 90% 70%; border-radius: 4px 4px 0 0; display: block; animation: ' +
                                //             e.runtime.ladipage_powered_by_classname +
                                //             " 10s;} @keyframes " +
                                //             e.runtime.ladipage_powered_by_classname +
                                //             " {0% {bottom: -40px;} 10% {bottom: 0;} 90% {bottom: 0;} 100% {bottom: -40px;}}",
                                //         a = document.createElement("style");
                                //     (a.type = "text/css"),
                                //         document.head.insertBefore(a, document.head.childNodes[e.randomInt(0, document.head.childNodes.length)]),
                                //         (a.innerHTML = i),
                                //         e.runTimeout(function () {
                                //             isEmptyLadiPage(t) || t.parentElement.removeChild(t), isEmptyLadiPage(a) || a.parentElement.removeChild(a);
                                //         }, 1e4);
                                // }
                            },
                            a = !1,
                            n = isArrayLadiPage(e.runtime.DOMAIN_FREE) ? e.runtime.DOMAIN_FREE : [],
                            o = window.location.href;
                        ["/", ".", "/"].forEach(function (t) {
                            for (; o.endsWith(t); ) o = o.substr(0, o.length - t.length);
                        });
                        var r = e.getElementAHref(o).host.toLowerCase();
                        n.forEach(function (t) {
                            a || (a = r.endsWith(t.toLowerCase()));
                        }),
                            a && e.runTimeout(i, 3e3),
                            C("PageView", {}, function (t, n) {
                                if ((-1 != t || a || e.runTimeout(i, 3e3), 200 == t)) {
                                    var o = JSON.parse(n),
                                        r = !1,
                                        d = null,
                                        s = null;
                                    isObjectLadiPage(o.data) ? ((r = 1 == o.data.verified_domain), (d = o.data.google_captcha), (s = o.data.places_autocomplete)) : (r = 1 == o.data),
                                        a || r || e.runTimeout(i, 3e3),
                                        isObjectLadiPage(d) &&
                                            (function (t, i, a) {
                                                if (!isEmptyLadiPage(t)) {
                                                    var n = !1;
                                                    a.type == e.const.FORM_CONFIG_TYPE.google_recaptcha_enterprise && (i = !0),
                                                        a.type == e.const.FORM_CONFIG_TYPE.google_recaptcha_checkbox && (n = !0),
                                                        (e.runtime.tmp.google_captcha = { api_key: t, enterprise: i, checkbox: n, type: a.type }),
                                                        (window.onloadRecaptchaCheckboxCallback = function () {
                                                            for (
                                                                var i = function (e) {
                                                                        var i = document.createElement("div");
                                                                        (i.className = "ladi-google-recaptcha-checkbox"), e.insertBefore(i, a[n]);
                                                                        var o = window.grecaptcha.render(i, { sitekey: t });
                                                                        i.setAttribute("data-widget-id", o);
                                                                    },
                                                                    a = document.querySelectorAll(".ladi-form .ladi-button"),
                                                                    n = 0;
                                                                n < a.length;
                                                                n++
                                                            ) {
                                                                var o = e.findAncestor(a[n], "ladi-element"),
                                                                    r = e.findAncestor(o, "ladi-form");
                                                                if (!isEmptyLadiPage(r)) {
                                                                    r = e.findAncestor(r, "ladi-element");
                                                                    var d = e.runtime.eventData[r.id];
                                                                    if (!isEmptyLadiPage(d)) {
                                                                        if (d["option.is_form_login"] || d["option.is_form_otp"] || d["option.is_form_coupon"] || d["option.is_add_to_cart"]) continue;
                                                                        if (isObjectLadiPage(d["option.form_setting"]) && d["option.form_setting"].is_multiple && !d["option.form_setting"].is_multiple_otp) continue;
                                                                    }
                                                                }
                                                                i(o);
                                                            }
                                                            for (var s = document.querySelectorAll("#POPUP_CHECKOUT .ladi-button"), l = 0; l < s.length; l++) {
                                                                var c = e.findAncestor(s[l], "ladi-element"),
                                                                    u = e.runtime.eventData[c.id];
                                                                isEmptyLadiPage(u) || isEmptyLadiPage(u["option.data_submit_form_id"]) || !u["option.is_submit_form"] || i(c);
                                                            }
                                                        }),
                                                        i
                                                            ? e.loadScript("https://www.google.com/recaptcha/enterprise.js?render=" + t + "&hl=" + e.runtime.lang)
                                                            : n
                                                            ? e.loadScript("https://www.google.com/recaptcha/api.js?onload=onloadRecaptchaCheckboxCallback&render=explicit&hl=" + e.runtime.lang)
                                                            : e.loadScript("https://www.google.com/recaptcha/api.js?render=" + t);
                                                }
                                            })(d.site_key, d.enterprise, d),
                                        isObjectLadiPage(s) &&
                                            ((l = s.api_key),
                                            isEmptyLadiPage(l) ||
                                                ((window.onloadGooglePlacesAutocompleteCallback = function () {
                                                    var t = document.querySelectorAll("[data-places-autocomplete-country]"),
                                                        e = null,
                                                        i = 0,
                                                        a = {},
                                                        n = function (n) {
                                                            for (i = 0; i < t.length; i++) (e = t[i].querySelector('input[name="address"]')).removeAttribute("data-focus");
                                                            (e = n.target).setAttribute("data-focus", !0),
                                                                (a = e.getAttribute("data-attrs")),
                                                                isEmptyLadiPage(a) &&
                                                                    (((a = { style: e.getAttribute("style"), placeholder: e.getAttribute("placeholder"), disabled: e.disabled }).style = isEmptyLadiPage(a.style) ? "" : a.style),
                                                                    (a.placeholder = isEmptyLadiPage(a.placeholder) ? "" : a.placeholder),
                                                                    (a.disabled = !isNullLadiPage(a.disabled) && a.disabled),
                                                                    e.setAttribute("data-attrs", encodeURIComponent(JSON.stringify(a))));
                                                        };
                                                    for (i = 0; i < t.length; i++) {
                                                        var o = t[i].getAttribute("data-places-autocomplete-country"),
                                                            r = { types: ["address"] };
                                                        (o = isEmptyLadiPage(o) ? [] : (o = (o = o.split(",")).removeSpace()).unique()).length > 0 && (r.componentRestrictions = { country: o }),
                                                            (e = t[i].querySelector('input[name="address"]')).addEventListener("focus", n),
                                                            new google.maps.places.Autocomplete(e, r);
                                                    }
                                                    t.length > 0 &&
                                                        (window.gm_authFailure = function () {
                                                            for (i = 0; i < t.length; i++)
                                                                (e = t[i].querySelector('input[name="address"]')),
                                                                    (a = e.getAttribute("data-attrs")),
                                                                    (a = isEmptyLadiPage(a) ? { style: "", placeholder: "", disabled: !1 } : JSON.parse(decodeURIComponentLadiPage(a))),
                                                                    e.setAttribute("style", a.style),
                                                                    e.setAttribute("placeholder", a.placeholder),
                                                                    (e.disabled = a.disabled),
                                                                    "true" == e.getAttribute("data-focus") && e.focus();
                                                        });
                                                }),
                                                e.loadScript("https://maps.googleapis.com/maps/api/js?key=" + l + "&libraries=places&callback=onloadGooglePlacesAutocompleteCallback")));
                                }
                                var l;
                            });
                    }
                },
                Y = function (t, i, a, n) {
                    if (isEmptyLadiPage(e.runtime.current_element_mouse_down_gallery_view) && isEmptyLadiPage(e.runtime.current_element_mouse_down_gallery_control)) {
                        var o = t.getAttribute("data-runtime-id");
                        if (isEmptyLadiPage(e.runtime.timeout_gallery[o]) && (!e.runtime.tmp.gallery_playing_video || !i)) {
                            var r = t.getElementsByClassName("ladi-gallery-view-item"),
                                d = t.getElementsByClassName("ladi-gallery-control-item");
                            if (0 != r.length && 0 != r.length) {
                                var s = t.getAttribute("data-is-next") || "true";
                                s = "true" == s.toLowerCase();
                                var l = parseFloatLadiPage(t.getAttribute("data-current")) || 0,
                                    c = parseFloatLadiPage(t.getAttribute("data-max-item")) || 0;
                                i ? (s ? (l >= c - 1 ? ((l = c - 2), (s = !1)) : l++) : l <= 0 ? ((l = 1), (s = !0)) : l--) : s ? l++ : l--,
                                    l < 0 && (l = 0),
                                    l >= c - 1 && (l = c - 1),
                                    isEmptyLadiPage(a) && (a = s ? "next" : "prev"),
                                    isEmptyLadiPage(n) && (n = s ? "left" : "right"),
                                    e.runtime.tmp.gallery_playing_video && !r[l].classList.contains("selected") && e.pauseAllVideo(),
                                    r[l].classList.add(a);
                                var u = t.querySelectorAll(".ladi-gallery-view-item.selected")[0];
                                isEmptyLadiPage(u) || u.classList.add(n);
                                var p = 1e3 * (parseFloatLadiPage(getComputedStyle(r[l]).transitionDuration) || 0);
                                e.runtime.timeout_gallery[o] = e.runTimeout(function () {
                                    r[l].classList.add(n),
                                        (e.runtime.timeout_gallery[o] = e.runTimeout(function () {
                                            for (var t = 0; t < r.length; t++)
                                                t == l ? r[t].classList.add("selected") : r[t].classList.remove("selected"), r[t].style.removeProperty("left"), r[t].classList.remove(a), r[t].classList.remove(n);
                                            delete e.runtime.timeout_gallery[o];
                                        }, p - 5));
                                }, 5);
                                for (var m = 0; m < d.length; m++) (parseFloatLadiPage(d[m].getAttribute("data-index")) || 0) == l ? d[m].classList.add("selected") : d[m].classList.remove("selected");
                                var g = e.getElementBoundingClientRect(t),
                                    _ = e.getElementBoundingClientRect(t.getElementsByClassName("ladi-gallery-control-item")[l]);
                                if (
                                    (t.getElementsByClassName("ladi-gallery-control-arrow-left")[0].classList.remove("opacity-0"),
                                    t.getElementsByClassName("ladi-gallery-control-arrow-right")[0].classList.remove("opacity-0"),
                                    t.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-top") || t.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-bottom"))
                                ) {
                                    var y = parseFloatLadiPage(getComputedStyle(t.getElementsByClassName("ladi-gallery-control")[0]).width) || 0,
                                        f = parseFloatLadiPage(getComputedStyle(t.getElementsByClassName("ladi-gallery-control-item")[l]).width) || 0,
                                        v = _.x - g.x - (y - f) / 2;
                                    v = -(v -= parseFloatLadiPage(t.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("left")) || 0) > 0 ? 0 : -v;
                                    var P = parseFloatLadiPage(getComputedStyle(t.getElementsByClassName("ladi-gallery-control-box")[0]).width) || 0;
                                    v < (P = (P = -(P -= parseFloatLadiPage(getComputedStyle(t.getElementsByClassName("ladi-gallery-control")[0]).width) || 0)) > 0 ? 0 : P) && (v = P),
                                        t.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("left", v + "px"),
                                        v >= 0 && t.getElementsByClassName("ladi-gallery-control-arrow-left")[0].classList.add("opacity-0"),
                                        v <= P && t.getElementsByClassName("ladi-gallery-control-arrow-right")[0].classList.add("opacity-0");
                                } else {
                                    var h = parseFloatLadiPage(getComputedStyle(t.getElementsByClassName("ladi-gallery-control")[0]).height) || 0,
                                        L = parseFloatLadiPage(getComputedStyle(t.getElementsByClassName("ladi-gallery-control-item")[l]).height) || 0,
                                        E = _.y - g.y - (h - L) / 2;
                                    E = -(E -= parseFloatLadiPage(t.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("top")) || 0) > 0 ? 0 : -E;
                                    var b = parseFloatLadiPage(getComputedStyle(t.getElementsByClassName("ladi-gallery-control-box")[0]).height) || 0;
                                    E < (b = (b = -(b -= parseFloatLadiPage(getComputedStyle(t.getElementsByClassName("ladi-gallery-control")[0]).height) || 0)) > 0 ? 0 : b) && (E = b),
                                        t.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("top", E + "px"),
                                        E >= 0 && t.getElementsByClassName("ladi-gallery-control-arrow-left")[0].classList.add("opacity-0"),
                                        E <= b && t.getElementsByClassName("ladi-gallery-control-arrow-right")[0].classList.add("opacity-0");
                                }
                                t.setAttribute("data-is-next", s),
                                    t.setAttribute("data-current", l),
                                    t.getElementsByClassName("ladi-gallery-view-arrow-left")[0].classList.remove("opacity-0"),
                                    t.getElementsByClassName("ladi-gallery-view-arrow-right")[0].classList.remove("opacity-0"),
                                    l <= 0 && t.getElementsByClassName("ladi-gallery-view-arrow-left")[0].classList.add("opacity-0"),
                                    l >= c - 1 && t.getElementsByClassName("ladi-gallery-view-arrow-right")[0].classList.add("opacity-0"),
                                    (t.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-left") || t.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-right")) && e.reloadLazyload(!1),
                                    !i && t.hasAttribute("data-loaded") && t.setAttribute("data-stop", !0);
                            }
                        }
                    }
                },
                V = function (t, i, a) {
                    var n = i.getAttribute("data-video-type"),
                        o = i.getAttribute("data-video-url"),
                        r = i.getAttribute("data-index"),
                        d = t.getAttribute("data-runtime-id") + "_" + r + "_player",
                        s = document.getElementById(d);
                    a || (e.pauseAllVideo(), (e.runtime.tmp.gallery_playing_video = !0)),
                        isEmptyLadiPage(s)
                            ? (n == e.const.VIDEO_TYPE.youtube &&
                                  ((s = document.createElement("iframe")),
                                  i.parentElement.insertBefore(s, i.nextSibling),
                                  (s.outerHTML =
                                      '<iframe id="' +
                                      d +
                                      '" class="iframe-video-preload" data-video-type="' +
                                      n +
                                      '" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'),
                                  e.runEventPlayVideo(d, n, o, !1, !1, !0, a, !1, !0)),
                              n == e.const.VIDEO_TYPE.direct &&
                                  ((s = document.createElement("video")),
                                  i.parentElement.insertBefore(s, i.nextSibling),
                                  (s.outerHTML = '<video id="' + d + '" class="iframe-video-preload" data-video-type="' + n + '" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; object-fit: cover;"></video>'),
                                  e.runEventPlayVideo(d, n, o, !1, !1, !0, a, !1, !0)))
                            : e.runEventReplayVideo(d, n, !0);
                },
                H = function (t, i, a, n) {
                    if ("gallery" == n && (a || (i = document.getElementById(t)), !isEmptyLadiPage(i))) {
                        var o = i.getElementsByClassName("ladi-gallery-control-item").length;
                        i.setAttribute("data-max-item", o), i.setAttribute("data-runtime-id", e.randomString(10));
                        var r = function (t) {
                                t.stopPropagation(), V(i, t.target, !1);
                            },
                            d = i.classList.contains("preload");
                        if (o > 0) {
                            for (var s = 0; s < o; s++) {
                                var l = i.getElementsByClassName("ladi-gallery-view-item")[s];
                                isEmptyLadiPage(l) || (d && V(i, l, d), l.classList.contains("play-video") && l.addEventListener("click", r));
                            }
                            i.setAttribute("data-current", 0), i.setAttribute("data-is-next", !0);
                        }
                        for (var c = i.getElementsByClassName("ladi-gallery-view-arrow"), u = 0; u < c.length; u++) o <= 1 ? c[u].classList.add("ladi-hidden") : c[u].classList.remove("ladi-hidden");
                    }
                },
                j = function (t, i) {
                    t.stopPropagation();
                    var a = e.runtime.eventData[i.id],
                        n = a[e.runtime.device + ".option.gallery_control.autoplay"],
                        o = a[e.runtime.device + ".option.gallery_control.autoplay_time"],
                        r = 0;
                    n && !isEmptyLadiPage(o) && (r = o);
                    var d = parseFloatLadiPage(t.target.getAttribute("data-index")) || 0,
                        s = null,
                        l = null;
                    (parseFloatLadiPage(i.getAttribute("data-current")) || 0) > d ? ((s = "prev"), (l = "right")) : ((s = "next"), (l = "left"));
                    var c = i.getAttribute("data-is-next") || "true";
                    (c = "true" == c.toLowerCase()) ? d-- : d++, i.setAttribute("data-current", d), i.setAttribute("data-next-time", Date.now() + 1e3 * r), Y(i, !1, s, l);
                },
                G = function () {
                    _.forEach(function (t) {
                        var i = e.runtime.eventData[t];
                        if ("gallery" == i.type)
                            for (var a = document.querySelectorAll("#" + t), n = 0; n < a.length; n++) {
                                var o = a[n];
                                if ("true" == o.getAttribute("data-scrolled") && "true" != o.getAttribute("data-stop")) {
                                    var r = i[e.runtime.device + ".option.gallery_control.autoplay"],
                                        d = i[e.runtime.device + ".option.gallery_control.autoplay_time"],
                                        s = 0;
                                    if ((r && !isEmptyLadiPage(d) && (s = d), s > 0)) {
                                        var l = o.getAttribute("data-next-time"),
                                            c = Date.now();
                                        isEmptyLadiPage(l) && ((l = c + 1e3 * (s - 1)), o.setAttribute("data-next-time", l)), c >= l && (Y(o, !0), o.setAttribute("data-next-time", c + 1e3 * s));
                                    }
                                }
                            }
                    });
                },
                U = function (t, i) {
                    var a = e.runtime.eventData[t];
                    if ("gallery" == a.type) {
                        var n = i.getAttribute("data-runtime-id");
                        if (!i.hasAttribute("data-scrolled")) {
                            i.setAttribute("data-scrolled", !1);
                            e.runtime.list_scroll_func[n] = function () {
                                i.setAttribute("data-scrolled", !0);
                            };
                        }
                        var o = a[e.runtime.device + ".option.gallery_control.autoplay"],
                            r = a[e.runtime.device + ".option.gallery_control.autoplay_time"],
                            d = 0;
                        o && !isEmptyLadiPage(r) && (d = r);
                        var s = function (t) {
                                j(t, i);
                            },
                            l = function (t) {
                                if ((t.stopPropagation(), !(t = e.getEventCursorData(t)).target.classList.contains("ladi-gallery-view-arrow"))) {
                                    var a = i.getAttribute("data-runtime-id");
                                    isEmptyLadiPage(e.runtime.timeout_gallery[a]) && ((e.runtime.current_element_mouse_down_gallery_view = a), (e.runtime.current_element_mouse_down_gallery_view_position_x = t.pageX));
                                }
                            },
                            c = function (t) {
                                t.stopPropagation(),
                                    (t = e.getEventCursorData(t)),
                                    (i.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-top") || i.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-bottom")) &&
                                        (t.target.classList.contains("ladi-gallery-control-arrow") ||
                                            ((e.runtime.current_element_mouse_down_gallery_control = n),
                                            (e.runtime.current_element_mouse_down_gallery_control_time = Date.now()),
                                            (e.runtime.current_element_mouse_down_gallery_control_position_x = t.pageX),
                                            i.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("transition-duration", "0ms"),
                                            i.getElementsByClassName("ladi-gallery-control-box")[0].setAttribute("data-left", getComputedStyle(i.getElementsByClassName("ladi-gallery-control-box")[0]).left)));
                            };
                        i.getElementsByClassName("ladi-gallery-view-arrow-left")[0].addEventListener("click", function (t) {
                            t.stopPropagation(), i.setAttribute("data-is-next", !1), i.setAttribute("data-next-time", Date.now() + 1e3 * d), Y(i, !1);
                        }),
                            i.getElementsByClassName("ladi-gallery-view-item").length > 1 && i.getElementsByClassName("ladi-gallery-view-arrow-right")[0].classList.remove("opacity-0"),
                            i.getElementsByClassName("ladi-gallery-view-arrow-right")[0].addEventListener("click", function (t) {
                                t.stopPropagation(), i.setAttribute("data-is-next", !0), i.setAttribute("data-next-time", Date.now() + 1e3 * d), Y(i, !1);
                            }),
                            i.getElementsByClassName("ladi-gallery-control-arrow-left")[0].addEventListener("click", function (t) {
                                t.stopPropagation();
                                var e = i.getElementsByClassName("ladi-gallery-control-item")[0];
                                if (!isEmptyLadiPage(e)) {
                                    var a = getComputedStyle(e);
                                    if (
                                        (i.getElementsByClassName("ladi-gallery-control-arrow-left")[0].classList.remove("opacity-0"),
                                        i.getElementsByClassName("ladi-gallery-control-arrow-right")[0].classList.remove("opacity-0"),
                                        i.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-top") || i.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-bottom"))
                                    ) {
                                        var n = (parseFloatLadiPage(a.width) || 0) + (parseFloatLadiPage(a.marginRight) || 0);
                                        n += parseFloatLadiPage(i.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("left")) || 0;
                                        var o = parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-gallery-control-box")[0]).width) || 0;
                                        (o = (o = -(o -= parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-gallery-control")[0]).width) || 0)) > 0 ? 0 : o),
                                            n > 0 && (n = 0),
                                            i.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("left", n + "px"),
                                            n >= 0 && i.getElementsByClassName("ladi-gallery-control-arrow-left")[0].classList.add("opacity-0"),
                                            n <= o && i.getElementsByClassName("ladi-gallery-control-arrow-right")[0].classList.add("opacity-0");
                                    } else {
                                        var r = (parseFloatLadiPage(a.height) || 0) + (parseFloatLadiPage(a.marginBottom) || 0);
                                        r += parseFloatLadiPage(i.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("top")) || 0;
                                        var s = parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-gallery-control-box")[0]).height) || 0;
                                        (s = (s = -(s -= parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-gallery-control")[0]).height) || 0)) > 0 ? 0 : s),
                                            r > 0 && (r = 0),
                                            i.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("top", r + "px"),
                                            r >= 0 && i.getElementsByClassName("ladi-gallery-control-arrow-left")[0].classList.add("opacity-0"),
                                            r <= s && i.getElementsByClassName("ladi-gallery-control-arrow-right")[0].classList.add("opacity-0");
                                    }
                                    i.setAttribute("data-next-time", Date.now() + 1e3 * d);
                                }
                            }),
                            (parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-gallery-control-box")[0]).width) || 0) >
                                (parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-gallery-control")[0]).width) || 0) && i.getElementsByClassName("ladi-gallery-control-arrow-right")[0].classList.remove("opacity-0"),
                            i.getElementsByClassName("ladi-gallery-control-arrow-right")[0].addEventListener("click", function (t) {
                                t.stopPropagation();
                                var e = i.getElementsByClassName("ladi-gallery-control-item")[0];
                                if (!isEmptyLadiPage(e)) {
                                    var a = getComputedStyle(e);
                                    if (
                                        (i.getElementsByClassName("ladi-gallery-control-arrow-left")[0].classList.remove("opacity-0"),
                                        i.getElementsByClassName("ladi-gallery-control-arrow-right")[0].classList.remove("opacity-0"),
                                        i.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-top") || i.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-bottom"))
                                    ) {
                                        var n = (parseFloatLadiPage(a.width) || 0) + (parseFloatLadiPage(a.marginRight) || 0);
                                        n = -n + (parseFloatLadiPage(i.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("left")) || 0);
                                        var o = parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-gallery-control-box")[0]).width) || 0;
                                        n < (o = (o = -(o -= parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-gallery-control")[0]).width) || 0)) > 0 ? 0 : o) && (n = o),
                                            i.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("left", n + "px"),
                                            n >= 0 && i.getElementsByClassName("ladi-gallery-control-arrow-left")[0].classList.add("opacity-0"),
                                            n <= o && i.getElementsByClassName("ladi-gallery-control-arrow-right")[0].classList.add("opacity-0");
                                    } else {
                                        var r = (parseFloatLadiPage(a.height) || 0) + (parseFloatLadiPage(a.marginBottom) || 0);
                                        r = -r + (parseFloatLadiPage(i.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("top")) || 0);
                                        var s = parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-gallery-control-box")[0]).height) || 0;
                                        r < (s = (s = -(s -= parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-gallery-control")[0]).height) || 0)) > 0 ? 0 : s) && (r = s),
                                            i.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("top", r + "px"),
                                            r >= 0 && i.getElementsByClassName("ladi-gallery-control-arrow-left")[0].classList.add("opacity-0"),
                                            r <= s && i.getElementsByClassName("ladi-gallery-control-arrow-right")[0].classList.add("opacity-0");
                                    }
                                    i.setAttribute("data-next-time", Date.now() + 1e3 * d);
                                }
                            }),
                            i.getElementsByClassName("ladi-gallery-view")[0].addEventListener("mousedown", l),
                            i.getElementsByClassName("ladi-gallery-view")[0].addEventListener("touchstart", l, e.runtime.scrollEventPassive),
                            i.getElementsByClassName("ladi-gallery-control")[0].addEventListener("mousedown", c),
                            i.getElementsByClassName("ladi-gallery-control")[0].addEventListener("touchstart", c, e.runtime.scrollEventPassive);
                        for (var u = i.getElementsByClassName("ladi-gallery-control-item"), p = 0; p < u.length; p++) u[p].addEventListener("click", s);
                        isEmptyLadiPage(a["option.product_mapping_name"]) &&
                            !i.hasAttribute("data-loaded") &&
                            e.runTimeout(function () {
                                i.setAttribute("data-loaded", !0);
                            }, 300);
                    }
                },
                W = function (t, i) {
                    if ((isEmptyLadiPage(e.runtime.timenext_carousel[t]) || !(e.runtime.timenext_carousel[t] > Date.now())) && isEmptyLadiPage(e.runtime.current_element_mouse_down_carousel)) {
                        var a = document.getElementById(t);
                        if (!isEmptyLadiPage(a)) {
                            var n = a.getAttribute("data-is-next") || "true";
                            n = "true" == n.toLowerCase();
                            var o = parseFloatLadiPage(a.getAttribute("data-current")) || 0,
                                r = parseFloatLadiPage(e.runtime.eventData[t][e.runtime.device + ".option.carousel_crop.width"]) || 0,
                                d = parseFloatLadiPage(e.runtime.eventData[t][e.runtime.device + ".option.carousel_crop.width_item"]) || 0;
                            d > a.clientWidth && (d = a.clientWidth);
                            var s = Math.ceil(r / d);
                            i ? (n ? (o >= s - 1 ? ((o = s - 2), (n = !1)) : o++) : o <= 0 ? ((o = 1), (n = !0)) : o--) : n ? o++ : o--, o < 0 && (o = 0), o >= s - 1 && (o = s - 1);
                            var l = 1e3 * (parseFloatLadiPage(getComputedStyle(a.getElementsByClassName("ladi-carousel-content")[0]).transitionDuration) || 0);
                            e.runtime.timenext_carousel[t] = Date.now() + l;
                            var c = e.getElementBoundingClientRect(a),
                                u = c.x + o * d - c.x - (a.clientWidth - d) / 2;
                            u = -u > 0 ? 0 : -u;
                            var p = -(r - a.clientWidth);
                            u < p && (u = p),
                                a.getElementsByClassName("ladi-carousel-content")[0].style.setProperty("left", u + "px"),
                                a.setAttribute("data-is-next", n),
                                a.setAttribute("data-current", o),
                                i || a.setAttribute("data-stop", !0);
                            var m = a.getElementsByClassName("ladi-carousel-arrow-left")[0],
                                g = a.getElementsByClassName("ladi-carousel-arrow-right")[0];
                            isEmptyLadiPage(m) || m.classList.remove("opacity-0"), isEmptyLadiPage(g) || g.classList.remove("opacity-0"), u >= 0 && m.classList.add("opacity-0"), u <= p && g.classList.add("opacity-0");
                        }
                    }
                },
                X = function () {
                    var i,
                        a = document.getElementsByClassName("ladi-form"),
                        n = 0,
                        o = null,
                        r = null,
                        d = null,
                        c = null,
                        u = null,
                        p = null,
                        m = null,
                        _ = null,
                        y = null,
                        f = null,
                        v = null,
                        P = null,
                        L = null,
                        E = null,
                        b = null,
                        w = null,
                        T = null,
                        S = e.runtime.shopping,
                        N = null,
                        k = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"],
                        x = ["name", "email", "phone", "address", "ward", "district", "state", "country"],
                        D = ["email", "phone"],
                        R = e.copy(e.runtime.list_set_value_name_country).reverse(),
                        F = function (t, i) {
                            var a = "_capture_" + t,
                                n = window.ladi(a).get_cookie(),
                                o = !1,
                                r = e.runtime.tmp["cookie_cache_otp_" + t];
                            if ((isEmptyLadiPage(n) && isObjectLadiPage(r) && !isEmptyLadiPage(r[a]) && ((n = r[a]), (o = !0)), isEmptyLadiPage(n))) {
                                n = i + "|" + e.runtime.ladipage_id + "|" + Date.now() + "|" + e.randomId();
                                var d = new Date();
                                d.setTime(d.getTime() + 9e5), o ? ((r[a] = n), (e.runtime.tmp["cookie_cache_otp_" + t] = r)) : window.ladi(a).set_cookie(n, d);
                            }
                            return n;
                        },
                        q = function (t, i, a) {
                            var n = e.runtime.tmp["form_data_ladi_" + y];
                            if (isObjectLadiPage(n)) return !0;
                            if (i && isEmptyLadiPage(r[a])) return !1;
                            var o = [];
                            if (
                                (w.forEach(function (t) {
                                    isEmptyLadiPage(r[t]) && o.push(t);
                                }),
                                i && (o = o.only([a])),
                                o.length > 0)
                            )
                                return (
                                    i ||
                                        e.showMessage(e.const.LANG.FORM_INPUT_REQUIRED_ERROR, null, function () {
                                            var e = t.querySelector('[name="' + o[0] + '"]');
                                            isEmptyLadiPage(e) || e.focus();
                                        }),
                                    !1
                                );
                            var d = !0,
                                s = t.getElementsByClassName("ladi-survey");
                            for (_ = 0; _ < s.length; _++) {
                                var l = e.findAncestor(s[_], "ladi-element");
                                if (!isEmptyLadiPage(l)) {
                                    var c = e.runtime.eventData[l.id];
                                    if (!isEmptyLadiPage(c) && c["option.survey_setting.input_required"] && !isEmptyLadiPage(c["option.survey_setting.input_name"])) {
                                        var u = l.id,
                                            p = t.querySelector('.ladi-element.ladi-form-item-survey[data-name="' + c["option.survey_setting.input_name"] + '"]');
                                        isEmptyLadiPage(p) || (u = p.id);
                                        var m = window.ladi(u).value();
                                        if (isEmptyLadiPage(m)) {
                                            d = !1;
                                            break;
                                        }
                                    }
                                }
                            }
                            if (!d) return i || e.showMessage(e.const.LANG.FORM_INPUT_REQUIRED_ERROR), !1;
                            var g = !0,
                                _ = 0,
                                f = function () {
                                    var e = t.querySelector('[name="' + T[_].name + '"]');
                                    isEmptyLadiPage(e) || e.focus();
                                };
                            for (_ = 0; _ < T.length; _++)
                                if (!i || T[_].name == a) {
                                    var v = r[T[_].name];
                                    if (!isEmptyLadiPage(v))
                                        try {
                                            if (!new RegExp("^" + T[_].pattern + "$", T[_].pattern_flag).test(v)) {
                                                i || e.showMessage(T[_].title, null, f), (g = !1);
                                                break;
                                            }
                                        } catch (t) {}
                                }
                            return g;
                        },
                        B = function (t, i) {
                            (r = {}), (d = {}), (c = {});
                            for (var a = t.querySelectorAll(".ladi-element .ladi-form-item-container [name]"), n = {}, o = null, l = 0; l < a.length; l++)
                                (o = a[l].getAttribute("name")), (n[o] = parseInt(a[l].getAttribute("tabindex")) || 0);
                            var p = Object.keys(n).sort(function (t, e) {
                                return n[t] - n[e];
                            });
                            if (p.only(e.runtime.list_set_value_name_country).length == e.runtime.list_set_value_name_country.length)
                                for (var g = 0; g < p.length; g++) {
                                    var _ = e.runtime.list_set_value_name_country.indexOf(p[g]);
                                    -1 != _ && (p[g] = R[_]);
                                }
                            for (var y = 0; y < p.length; y++) r[p[y]] = "";
                            m = p;
                            for (var f = 0; f < a.length; f++) {
                                (o = a[f].getAttribute("name")), a[f].required && -1 == w.indexOf(o) && w.push(o);
                                var v = null;
                                if ("INPUT" == a[f].tagName) {
                                    v = a[f].getAttribute("type").trim().toLowerCase();
                                    var P = a[f].getAttribute("pattern"),
                                        h = a[f].getAttribute("title");
                                    if (
                                        ("email" == v
                                            ? T.push({
                                                  name: o,
                                                  pattern: '(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))',
                                                  pattern_flag: "gi",
                                                  title: e.const.LANG.FORM_INPUT_EMAIL_REGEX,
                                              })
                                            : isEmptyLadiPage(P) || T.push({ name: o, pattern: P, title: isEmptyLadiPage(h) ? e.const.LANG.FORM_INPUT_TEXT_REGEX : h }),
                                        "checkbox" == v)
                                    ) {
                                        isArrayLadiPage(r[o]) || (r[o] = []), a[f].checked && r[o].push(a[f].value);
                                        continue;
                                    }
                                    if ("radio" == v) {
                                        a[f].checked && (r[o] = a[f].value);
                                        continue;
                                    }
                                }
                                if (
                                    ((r[o] = a[f].value),
                                    a[f].classList.contains("ladi-form-control-file") && ((r[o] = JSON.parse(a[f].getAttribute("data-path-file") || "[]")), (c[o] = !0)),
                                    "coupon" == o && "INPUT" == a[f].tagName && "text" == v && "true" == a[f].getAttribute("data-replace-coupon") && (r[o] = e.runtime.tmp.current_use_coupon || ""),
                                    "INPUT" == a[f].tagName && "date" == v && !isEmptyLadiPage(r[o]))
                                ) {
                                    var L = a[f].getAttribute("date-format") || "dd-mm-yyyy",
                                        E = new Date(r[o]);
                                    (L = (L = (L = (L = L.replaceAll("dd", (E.getDate() < 10 ? "0" : "") + E.getDate())).replaceAll("mm", (E.getMonth() + 1 < 10 ? "0" : "") + (E.getMonth() + 1))).replaceAll(
                                        "yyyy",
                                        E.getFullYear()
                                    )).replaceAll("yy", E.getFullYear() - 2e3)),
                                        (r[o] = L);
                                }
                            }
                            i ||
                                x.forEach(function (t) {
                                    isNullLadiPage(r[t]) ||
                                        (window.ladi("_ladipage_" + t).set_cookie(r[t], 365, "/", window.location.host),
                                        isArrayLadiPage(e.runtime.DOMAIN_SET_COOKIE) &&
                                            e.runtime.DOMAIN_SET_COOKIE.forEach(function (e) {
                                                e != window.location.host && window.ladi("_ladipage_" + t).set_cookie(r[t], 365, "/", e);
                                            }));
                                }),
                                (u = s(r));
                        },
                        M = function (t, i, a, d, s) {
                            var l = { form_config_id: _, ladi_form_id: y, ladipage_id: e.runtime.ladipage_id, tracking_form: [], form_data: [], data_key: d };
                            if (a) l.status_send = e.const.STATUS_SEND.capture;
                            else if (((l.status_send = e.const.STATUS_SEND.sendform), S)) {
                                var u = window.ladi("_checkout_token").get_cookie();
                                isEmptyLadiPage(u) || (l.checkout_token = u);
                            }
                            if (!isEmptyLadiPage(f)) {
                                var p = f.getElementsByClassName("ladiflow-widget")[0];
                                isEmptyLadiPage(p) ||
                                    (isObjectLadiPage(l.options) || (l.options = {}),
                                    (l.options.ladiflow_trigger_id = p.getAttribute("ladiflow-trigger-id")),
                                    (l.options.ladiflow_ref = p.getAttribute("ladiflow-ref")),
                                    (l.options.ladiflow_page_id = p.getAttribute("page_id")),
                                    (l.options.ladiflow_checkbox_user_ref = p.getAttribute("user_ref")),
                                    (l.options.ladiflow_store_id = p.getAttribute("ladiflow-store-id")),
                                    (n = 1e3),
                                    (o = function () {
                                        isObjectLadiPage(window.LadiFlow) && isFunctionLadiPage(window.LadiFlow.resetWidgetCheckbox) && window.LadiFlow.resetWidgetCheckbox(p.id);
                                    }));
                            }
                            isEmptyLadiPage(v) ||
                                ["option.sync_ladisales_form_account_id", "option.sync_ladiflow_form_account_id", "option.sync_ladishare_form_account_id", "option.sync_ladichat_form_account_id"].forEach(function (t) {
                                    isEmptyLadiPage(v[t]) ||
                                        (isObjectLadiPage(l.options) || (l.options = {}), isArrayLadiPage(l.options.external_form_config_ids) || (l.options.external_form_config_ids = []), l.options.external_form_config_ids.push(v[t]));
                                }),
                                isObjectLadiPage(l.options) && (l.options = JSON.stringify(l.options)),
                                isEmptyLadiPage(P) || (l.total_revenue = P),
                                isEmptyLadiPage(e.runtime.time_zone) || (l.time_zone = e.runtime.time_zone);
                            var h = Object.keys(LadiFormApi);
                            if (
                                (m.forEach(function (t) {
                                    var e = r[t];
                                    isArrayLadiPage(e) && 0 == e.length && (e = "");
                                    var i = { name: t, value: (e = -1 != h.indexOf(t) ? LadiFormApi[t] : e) };
                                    c[t] && (i.is_file = !0), l.form_data.push(i);
                                }),
                                (h = h.except(m)).forEach(function (t) {
                                    l.form_data.push({ name: t, value: LadiFormApi[t] });
                                }),
                                S)
                            ) {
                                if (!isNullLadiPage(L)) {
                                    l.form_data.push({ name: "cart_products", value: L, is_ladipage: !0 }),
                                        isEmptyLadiPage(e.runtime.tmp.add_to_cart_shipping_method_id) ||
                                            l.form_data.push({ name: "cart_shipping", value: e.runtime.tmp.add_to_cart_shipping_method_id + "|" + (e.runtime.tmp.add_to_cart_fee_shipping || 0), is_ladipage: !0 });
                                    var w = l.form_data.findIndex(function (t) {
                                        return "coupon" == t.name;
                                    });
                                    -1 != w && (l.form_data[w].is_ladipage = !0);
                                }
                                isEmptyLadiPage(P) || l.form_data.push({ name: "cart_revenue", value: P, is_ladipage: !0 }),
                                    isEmptyLadiPage(e.runtime.tmp.current_use_coupon) || l.form_data.push({ name: "cart_coupon_amount", value: e.runtime.tmp.add_to_cart_discount || 0, is_ladipage: !0 });
                            }
                            l.tracking_form.push({ name: "url_page", value: window.location.href }),
                                e.runtime.has_popupx && l.tracking_form.push({ name: "origin_url_page", value: e.runtime.tmp.popupx_origin_url }),
                                k.forEach(function (t) {
                                    var e = N[t];
                                    (e = isNullLadiPage(e) ? "" : e), l.tracking_form.push({ name: t, value: e });
                                }),
                                l.tracking_form.push({ name: "variant_url", value: A }),
                                l.tracking_form.push({ name: "variant_content", value: e.generateVariantContentString(O, !0) }),
                                isEmptyLadiPage(g) || l.tracking_form.push({ name: e.const.REF_NAME, value: g }),
                                (e.runtime.tmp["form_data_ladi_tmp_" + y] = e.copy(l));
                            var T = e.runtime.tmp["form_data_ladi_" + y];
                            isObjectLadiPage(T) && (l = e.copy(T)), isEmptyLadiPage(E) || ((l.captcha_token = E), (l.captcha_type = b));
                            i.isFormOtp &&
                                (i.isSetOtpId &&
                                    (function () {
                                        var t = "_otp_id_" + y,
                                            a = window.ladi(t).get_cookie(),
                                            n = !1,
                                            o = e.runtime.tmp["cookie_cache_otp_" + y];
                                        isEmptyLadiPage(a) && isObjectLadiPage(o) && !isEmptyLadiPage(o[t]) && ((a = o[t]), (n = !0));
                                        var r = new Date(),
                                            d = [];
                                        isEmptyLadiPage(a) ? (d = [e.randomId(), r.getTime(), 1]) : (((d = a.split("|"))[1] = parseInt(d[1]) || Date.now()), (d[2] = parseInt(d[2]) || 1), i.isSendOtp || (d[2] += 1), d.splice(3)),
                                            d[2] <= 1 ? (l.otp_send = e.const.OTP_TYPE.send) : (l.otp_send = e.const.OTP_TYPE.resend),
                                            r.setTime(d[1] + 9e5),
                                            (a = d.join("|")),
                                            n ? ((o[t] = a), (e.runtime.tmp["cookie_cache_otp_" + y] = o)) : window.ladi(t).set_cookie(a, r),
                                            d.splice(1),
                                            (a = d.join("|")),
                                            (l.otp_id = a);
                                    })(),
                                (l.is_capture = i.isCapture),
                                (l.otp_type = e.const.OTP_TYPE.sms),
                                (l.status_send = e.const.STATUS_SEND.otp)),
                                i.isSendOtp && ((l.otp_code = i.otp_code), (l.status_send = e.const.STATUS_SEND.sendform)),
                                isFunctionLadiPage(s) && s(l);
                        },
                        Y = function (t) {
                            t.reset();
                            var i = t.getElementsByClassName("ladi-survey-option");
                            for (Z = 0; Z < i.length; Z++) i[Z].classList.remove("selected");
                            var a = t.querySelectorAll(".ladi-element .ladi-form-item-container .ladi-form-checkbox-item input");
                            for (Z = 0; Z < a.length; Z++) {
                                var n = e.findAncestor(a[Z], "ladi-form-checkbox-item").querySelector("span");
                                isEmptyLadiPage(n) || n.setAttribute("data-checked", a[Z].checked);
                            }
                            var o = e.findAncestor(t, "ladi-element");
                            if (!isEmptyLadiPage(o)) {
                                for (var r = document.querySelectorAll('.ladi-form [data-submit-form-id="' + o.id + '"]'), d = 0; d < r.length; d++) {
                                    var s = e.findAncestor(r[d], "ladi-form");
                                    if (!isEmptyLadiPage(s) && ((s = e.findAncestor(s, "ladi-element")), !isEmptyLadiPage(s))) {
                                        var l = s.querySelector(".ladi-form-remove-coupon");
                                        if (isEmptyLadiPage(l)) {
                                            var c = s.querySelector('input[name="coupon"]');
                                            isEmptyLadiPage(c) || ((c.value = ""), e.fireEvent(c, "change"));
                                        } else l.click();
                                    }
                                }
                                var u = document.getElementById(o.getAttribute("data-form-id-before"));
                                isEmptyLadiPage(u) || ((u = u.getElementsByClassName("ladi-form")[0]), Y(u));
                            }
                            for (var p = document.querySelectorAll('[data-combobox-type="delivery_method"]'), m = 0; m < p.length; m++)
                                p[m].hasAttribute("data-placeholder") && (p[m].innerHTML = '<option value="">' + p[m].getAttribute("data-placeholder") + "</option>"), p[m].setAttribute("data-selected", "");
                            for (var g = document.querySelectorAll(".ladi-google-recaptcha-checkbox[data-widget-id]"), _ = 0; _ < g.length; _++) {
                                var y = g[_].getAttribute("data-widget-id");
                                isEmptyLadiPage(y) ||
                                    (window.grecaptcha && isObjectLadiPage(e.runtime.tmp.google_captcha) && e.runtime.tmp.google_captcha.checkbox && isFunctionLadiPage(window.grecaptcha.reset) && window.grecaptcha.reset(y));
                            }
                            e.runtime.tmp.add_to_cart_shipping_method_id = null;
                        },
                        V = function (t, i, a, n) {
                            B(a, !1),
                                q(a, !1, null) &&
                                    (M(0, i, !1, n, function (t) {
                                        e.sendRequest("POST", e.const.API_FORM_DATA, JSON.stringify(t), !0, { "Content-Type": "application/json" });
                                    }),
                                    e.showMessage(e.const.LANG.FORM_SEND_DATA_NO_CONFIG),
                                    Y(a));
                        },
                        H = function () {
                            e.showMessage(e.const.LANG.FORM_CAPTCHA_ERROR);
                        },
                        j = function (t, i, a, n, o) {
                            if (((u = {}), (p = {}), (m = []), (w = []), (T = []), B(t, a), q(t, a, n))) {
                                for (var d = t.querySelectorAll(".ladi-element .ladi-form-item-container [name]"), s = {}, l = null, c = 0; c < d.length; c++)
                                    (l = e.findAncestor(d[c], "ladi-element")), (s[d[c].getAttribute("name")] = l.id);
                                var g = i["option.form_setting"],
                                    _ = Object.keys(s);
                                if (
                                    ((g.mapping_form_id || []).forEach(function (i) {
                                        var r = document.getElementById(i);
                                        if (!isEmptyLadiPage(r)) {
                                            r.setAttribute("data-form-id-before", t.id);
                                            var u = e.runtime.eventData[r.id];
                                            if (!a || (!isEmptyLadiPage(u) && u["option.form_auto_capture"])) {
                                                isFunctionLadiPage(o.getOtp) && !isEmptyLadiPage(u) && u["option.is_form_otp"] && (isFunctionLadiPage(o.beforeRunOtp) && o.beforeRunOtp(r), (e.runtime.func_get_code_otp[r.id] = o.getOtp));
                                                var p = [];
                                                if (
                                                    (_.forEach(function (t) {
                                                        var i = window.ladi(s[t]).value();
                                                        d = r.querySelectorAll('.ladi-element .ladi-form-item-container [name="' + t + '"]');
                                                        var a = [];
                                                        for (c = 0; c < d.length; c++) (l = e.findAncestor(d[c], "ladi-element")), a.push(l.id), t == n && p.push(d[c]);
                                                        for (a = a.unique(), c = 0; c < a.length; c++) window.ladi(a[c]).value(i);
                                                    }),
                                                    a)
                                                )
                                                    for (c = 0; c < p.length; c++) e.fireEvent(p[c], "focusout");
                                            }
                                        }
                                    }),
                                    !a)
                                ) {
                                    var y = i["option.data_event"];
                                    if (!isArrayLadiPage(y)) {
                                        var f = e.copy(g);
                                        if (
                                            ((y = []),
                                            isObjectLadiPage(f) &&
                                                ((f.type = f.event_type),
                                                (f.value = f.event_value),
                                                (f.is_hide_parent = f.event_is_hide_parent),
                                                (f.change_index_type = f.event_change_index_type),
                                                (f.change_index_number = f.event_change_index_number),
                                                !isEmptyLadiPage(f.value)))
                                        ) {
                                            if (
                                                ((f.type != e.const.DATA_ACTION_TYPE.section && f.type != e.const.DATA_ACTION_TYPE.popup) || y.push({ action_type: e.const.ACTION_TYPE.complete, type: f.type, action: f.value }),
                                                (f.type == e.const.DATA_ACTION_TYPE.section && f.is_hide_parent) || f.type == e.const.DATA_ACTION_TYPE.popup)
                                            ) {
                                                var v = e.findAncestor(t, "ladi-popup"),
                                                    P = e.findAncestor(t, "ladi-section"),
                                                    h = null;
                                                isEmptyLadiPage(v) ? isEmptyLadiPage(P) || (h = P.id) : (h = (v = e.findAncestor(v, "ladi-element")).id),
                                                    isEmptyLadiPage(h) || y.push({ action_type: e.const.ACTION_TYPE.complete, type: e.const.DATA_ACTION_TYPE.hidden_show, hidden_ids: [h], show_ids: [] });
                                            }
                                            f.type == e.const.DATA_ACTION_TYPE.change_index &&
                                                y.push({ action_type: e.const.ACTION_TYPE.complete, type: f.type, action: f.value, change_index_type: f.change_index_type, change_index_number: f.change_index_number });
                                        }
                                    }
                                    I(t, y);
                                }
                                o.isRunTracking && e.runEventTracking(t.id, { is_form: !0 }, r);
                            }
                        },
                        G = function (i, a, s, l, g, A) {
                            if (
                                ((N = e.getURLSearchParams(null, null, !1)),
                                (n = 0),
                                (o = null),
                                (r = {}),
                                (d = {}),
                                (c = {}),
                                (u = {}),
                                (p = {}),
                                (m = []),
                                (_ = null),
                                (y = null),
                                (f = null),
                                (v = null),
                                (P = null),
                                (L = null),
                                (E = a.captcha_token),
                                isObjectLadiPage(e.runtime.tmp.google_captcha) && ((b = e.runtime.tmp.google_captcha.type), !s && isEmptyLadiPage(E) && a.hasOwnProperty("captcha_token")))
                            )
                                H();
                            else {
                                (w = []), (T = []), (S = e.findAncestor(i, "ladi-popup")), isEmptyLadiPage(S) ? (S = !1) : ((S = e.findAncestor(S, "ladi-element")), (S = !isEmptyLadiPage(S) && "POPUP_CHECKOUT" == S.id));
                                var O = i.getElementsByClassName("ladi-form")[0];
                                if (!isEmptyLadiPage(O)) {
                                    var I = e.runtime.eventData[i.id];
                                    if (!isEmptyLadiPage(I)) {
                                        if (I["option.is_add_to_cart"]) return;
                                        (_ = I["option.form_config_id"]), (y = i.id), (f = i), (v = I), (P = parseFloatLadiPage(I["option.form_purchase_value"]) || 0), S && ((P = e.getCartCheckoutPrice(P)), (L = e.getCartProducts()));
                                    }
                                    var x = null,
                                        D = null,
                                        R = null,
                                        F = null;
                                    if (s) {
                                        if (isEmptyLadiPage(l)) return;
                                        if ((B(O, s), !q(O, s, g))) return;
                                        if (a.captcha && !isEmptyLadiPage(I) && I["option.form_captcha"] && isObjectLadiPage(e.runtime.tmp.google_captcha)) {
                                            if (window.grecaptcha)
                                                if (e.runtime.tmp.google_captcha.enterprise && window.grecaptcha.enterprise)
                                                    window.grecaptcha.enterprise.ready(function () {
                                                        try {
                                                            window.grecaptcha.enterprise.execute(e.runtime.tmp.google_captcha.api_key, { action: "submit" }).then(function (t) {
                                                                G(i, { captcha_token: t }, s, l, g, A);
                                                            });
                                                        } catch (t) {}
                                                    });
                                                else if (e.runtime.tmp.google_captcha.checkbox)
                                                    try {
                                                        (x = i.getElementsByClassName("ladi-google-recaptcha-checkbox")[0]),
                                                            (D = i.getAttribute("data-button-submit-other")),
                                                            isEmptyLadiPage(D) || (x = document.querySelector("#" + D + " .ladi-google-recaptcha-checkbox")),
                                                            (R = x.getAttribute("data-widget-id")),
                                                            (F = window.grecaptcha.getResponse(R)),
                                                            G(i, { captcha_token: F }, s, l, g, A);
                                                    } catch (t) {}
                                                else
                                                    window.grecaptcha.ready(function () {
                                                        try {
                                                            window.grecaptcha.execute(e.runtime.tmp.google_captcha.api_key, { action: "submit" }).then(function (t) {
                                                                G(i, { captcha_token: t }, s, l, g, A);
                                                            });
                                                        } catch (t) {}
                                                    });
                                            return;
                                        }
                                        M(0, A, s, l, function (t) {
                                            var i = t.form_data.findIndex(function (t) {
                                                    return t.name == g;
                                                }),
                                                a = -1 != i ? t.form_data[i].value : null;
                                            (!isEmptyLadiPage(e.runtime.tmp.capture_form_data_last[l + "_" + g]) && equalsLadiPage(e.runtime.tmp.capture_form_data_last[l + "_" + g], a)) ||
                                                ((e.runtime.tmp.capture_form_data_last[l + "_" + g] = a), e.sendRequest("POST", e.const.API_FORM_DATA, JSON.stringify(t), !0, { "Content-Type": "application/json" }));
                                        });
                                    } else if (isEmptyLadiPage(I)) V(0, A, O, l);
                                    else if (
                                        (isNullLadiPage(e.runtime.tmp.form_sending) && (e.runtime.tmp.form_sending = {}),
                                        isNullLadiPage(e.runtime.tmp.form_button_headline) && (e.runtime.tmp.form_button_headline = {}),
                                        !e.runtime.tmp.form_sending[i.id])
                                    ) {
                                        var j = function () {
                                                e.runtime.tmp.form_sending[i.id] = !0;
                                                var t = O.querySelector(".ladi-button .ladi-headline");
                                                isNullLadiPage(e.runtime.tmp.form_button_headline[i.id]) && (e.runtime.tmp.form_button_headline[i.id] = t.innerHTML), A.isFormOtp || (t.innerHTML = "● ● ●");
                                            },
                                            U = function () {
                                                delete e.runtime.tmp.form_sending[i.id], (O.querySelector(".ladi-button .ladi-headline").innerHTML = e.runtime.tmp.form_button_headline[i.id]);
                                            };
                                        if (a.captcha && !isEmptyLadiPage(I) && I["option.form_captcha"] && isObjectLadiPage(e.runtime.tmp.google_captcha))
                                            if (window.grecaptcha)
                                                if ((j(), e.runtime.tmp.google_captcha.enterprise && window.grecaptcha.enterprise))
                                                    window.grecaptcha.enterprise.ready(function () {
                                                        try {
                                                            window.grecaptcha.enterprise
                                                                .execute(e.runtime.tmp.google_captcha.api_key, { action: "submit" })
                                                                .then(function (t) {
                                                                    U(), G(i, { captcha_token: t }, s, l, g, A);
                                                                })
                                                                .catch(function () {
                                                                    H(), U();
                                                                });
                                                        } catch (t) {
                                                            H(), U();
                                                        }
                                                    });
                                                else if (e.runtime.tmp.google_captcha.checkbox)
                                                    try {
                                                        (x = i.getElementsByClassName("ladi-google-recaptcha-checkbox")[0]),
                                                            (D = i.getAttribute("data-button-submit-other")),
                                                            isEmptyLadiPage(D) || (x = document.querySelector("#" + D + " .ladi-google-recaptcha-checkbox")),
                                                            (R = x.getAttribute("data-widget-id")),
                                                            (F = window.grecaptcha.getResponse(R)),
                                                            U(),
                                                            G(i, { captcha_token: F }, s, l, g, A);
                                                    } catch (t) {
                                                        H(), U();
                                                    }
                                                else
                                                    window.grecaptcha.ready(function () {
                                                        try {
                                                            window.grecaptcha
                                                                .execute(e.runtime.tmp.google_captcha.api_key, { action: "submit" })
                                                                .then(function (t) {
                                                                    U(), G(i, { captcha_token: t }, s, l, g, A);
                                                                })
                                                                .catch(function () {
                                                                    H(), U();
                                                                });
                                                        } catch (t) {
                                                            H(), U();
                                                        }
                                                    });
                                            else e.showMessage(e.const.LANG.FORM_CAPTCHA_LOADING);
                                        else {
                                            var W = I["option.form_send_ladipage"],
                                                X = I["option.form_api_data"],
                                                z = I["option.thankyou_type"],
                                                K = I["option.thankyou_value"],
                                                J = I["option.deeplink_value"],
                                                $ = I["option.form_auto_funnel"],
                                                Z = I["option.form_thankyou_funnel"],
                                                Q = function () {
                                                    isObjectLadiPage(A) && isFunctionLadiPage(A.callbackOtpShowThankYouDone) && A.callbackOtpShowThankYouDone(), isFunctionLadiPage(o) && o();
                                                    var a = !1;
                                                    if (e.runtime.has_popupx && e.runtime.tmp.popupx_is_inline) a = !0;
                                                    else if (z != e.const.FORM_THANKYOU_TYPE.url) {
                                                        var n = e.findAncestor(i, "ladi-popup");
                                                        isEmptyLadiPage(n) || ((n = e.findAncestor(n, "ladi-element")), e.runRemovePopup(n.id, t));
                                                    }
                                                    var r = 0;
                                                    if (!e.runtime.isDesktop && !isEmptyLadiPage(J)) {
                                                        r = 1e3;
                                                        var s = e.convertDataReplaceStr(J, !0, null, !1, p);
                                                        window.ladi(s).open_url();
                                                    }
                                                    if (!Z || isEmptyLadiPage(h)) {
                                                        if (
                                                            (z == e.const.FORM_THANKYOU_TYPE.default && (isEmptyLadiPage(K) || e.showMessage(K, p)),
                                                            z == e.const.FORM_THANKYOU_TYPE.popup && ($ && e.setDataReplaceElement(!1, !1, p, K), window.ladi(K).show(!1, { formThankyouPopupXInline: a })),
                                                            z == e.const.FORM_THANKYOU_TYPE.url && !isEmptyLadiPage(K))
                                                        ) {
                                                            var l = window.ladi(K).get_url(d, $, !1);
                                                            e.runTimeout(function () {
                                                                window.ladi(l).open_url();
                                                            }, r);
                                                        }
                                                    } else {
                                                        var c = window.ladi(h).get_url(d, $, !1);
                                                        e.runTimeout(function () {
                                                            window.ladi(c).open_url();
                                                        }, r);
                                                    }
                                                };
                                            if (I["option.only_facebook_widget"]) {
                                                if (isObjectLadiPage(window.LadiFlow) && isFunctionLadiPage(window.LadiFlow.confirmCheckbox))
                                                    for (var tt = i.getElementsByClassName("ladiflow-widget"), et = 0; et < tt.length; et++) window.LadiFlow.confirmCheckbox(tt[et].id);
                                                return e.runEventTracking(i.id, { is_form: !0 }, r), void Q();
                                            }
                                            if (
                                                isEmptyLadiPage(_) &&
                                                isEmptyLadiPage(I["option.sync_ladisales_form_account_id"]) &&
                                                isEmptyLadiPage(I["option.sync_ladiflow_form_account_id"]) &&
                                                isEmptyLadiPage(I["option.sync_ladishare_form_account_id"]) &&
                                                isEmptyLadiPage(I["option.sync_ladichat_form_account_id"])
                                            )
                                                V(0, A, O, l);
                                            else if ((B(O, s), q(O, s, g))) {
                                                var it = 0,
                                                    at = 0,
                                                    nt = null,
                                                    ot = [],
                                                    rt = !1,
                                                    dt = !1,
                                                    st = !0,
                                                    lt = function (t) {
                                                        t && Y(O), U();
                                                    },
                                                    ct = function (t) {
                                                        if (
                                                            -1 !=
                                                                [e.const.FORM_CONFIG_TYPE.sapo, e.const.FORM_CONFIG_TYPE.shopify, e.const.FORM_CONFIG_TYPE.haravan, e.const.FORM_CONFIG_TYPE.wordpress].indexOf(
                                                                    e.runtime.shopping_product_type
                                                                ) &&
                                                            e.runtime.tmp.cart.length > 0
                                                        ) {
                                                            var i = !1;
                                                            -1 != [e.const.FORM_CONFIG_TYPE.haravan, e.const.FORM_CONFIG_TYPE.wordpress].indexOf(e.runtime.shopping_product_type) && (i = !0);
                                                            var a = e.runtime.tmp.cart[0];
                                                            return (
                                                                (a = JSON.stringify(a)),
                                                                (a = encodeURIComponent(a)),
                                                                void e.removeAddToCartProduct(a, !1, i, function (e) {
                                                                    e ? ct(t) : isFunctionLadiPage(t) && t();
                                                                })
                                                            );
                                                        }
                                                        -1 != [e.const.FORM_CONFIG_TYPE.ladisales].indexOf(e.runtime.shopping_product_type) &&
                                                            (window.ladi("_cart_token").delete_cookie(), window.ladi("_checkout_token").delete_cookie(), e.createCartData()),
                                                            isFunctionLadiPage(t) && t();
                                                    },
                                                    ut = function (t, a, n, o) {
                                                        if (n.readyState == XMLHttpRequest.DONE) {
                                                            var s = {};
                                                            try {
                                                                s = JSON.parse(t);
                                                            } catch (t) {}
                                                            (s = isObjectLadiPage(s) ? s : {}),
                                                                o == e.const.API_FORM_DATA
                                                                    ? 200 == s.code
                                                                        ? it++
                                                                        : (1 != s.code || isEmptyLadiPage(s.message) || (nt = s.message), at++, (st = !1))
                                                                    : 200 == a || 201 == a
                                                                    ? it++
                                                                    : e.getElementAHref(o).host == e.const.DOMAIN_GOOGLE_DOCS
                                                                    ? it++
                                                                    : at++,
                                                                it + at == ot.length &&
                                                                    (st && !rt && it >= 1
                                                                        ? ((rt = !0),
                                                                          isFunctionLadiPage(A.callbackOtp) && A.callbackOtp(!0),
                                                                          isObjectLadiPage(A) && isFunctionLadiPage(A.callbackThankyou)
                                                                              ? (U(),
                                                                                A.callbackThankyou(A, function () {
                                                                                    ct(function () {
                                                                                        lt(!0), (e.runtime.tmp.current_use_coupon = null);
                                                                                    });
                                                                                }))
                                                                              : ((d = e.copy(r)),
                                                                                (p = e.copy(u)),
                                                                                Object.keys(e.runtime.replaceStr).forEach(function (t) {
                                                                                    d.hasOwnProperty(t) || (d[t] = e.runtime.replaceStr[t]), p.hasOwnProperty(t) || (p[t] = e.runtime.replaceStr[t]);
                                                                                }),
                                                                                (function (t, i, a) {
                                                                                    var n = null,
                                                                                        o = !1,
                                                                                        r = function (t, i) {
                                                                                            o || (isFunctionLadiPage(a) && a(t, i), e.removeTimeout(n), (o = !0));
                                                                                        };
                                                                                    (n = e.runTimeout(r, 3e3)), C("FormSubmit", { ladi_form_id: t, total_revenue: i }, r);
                                                                                })(i.id, P, function (t, a) {
                                                                                    e.runEventTracking(i.id, { is_form: !0 }, r),
                                                                                        window.ladi("_capture_" + i.id).delete_cookie(),
                                                                                        isObjectLadiPage(A) && isFunctionLadiPage(A.callbackOtpDone) && A.callbackOtpDone(),
                                                                                        ct(function () {
                                                                                            e.runTimeout(function () {
                                                                                                lt(!0), (e.runtime.tmp.current_use_coupon = null), Q();
                                                                                            }, 500);
                                                                                        });
                                                                                })))
                                                                        : !dt && at >= 1 && (isFunctionLadiPage(A.callbackOtp) && A.callbackOtp(!1), (dt = !0), e.showMessage(nt || e.const.LANG.REQUEST_SEND_ERROR), lt(!1)));
                                                        }
                                                    },
                                                    pt = function (t) {
                                                        ot.push({ url: e.const.API_FORM_DATA, data: JSON.stringify(t), async: !0, headers: { "Content-Type": "application/json" }, callback: ut });
                                                    };
                                                W && M(0, A, s, l, pt),
                                                    isArrayLadiPage(X) &&
                                                        X.forEach(function (t) {
                                                            if (!isEmptyLadiPage(t.api_url) && isArrayLadiPage(t.custom_fields)) {
                                                                var i = e.getElementAHref(t.api_url).host == e.const.DOMAIN_GOOGLE_DOCS,
                                                                    a = {},
                                                                    n = null,
                                                                    o = null,
                                                                    r = null,
                                                                    d = null;
                                                                t.custom_fields.forEach(function (t) {
                                                                    if (
                                                                        (S &&
                                                                            ("cart_products" == t.ladi_name && (n = t.name),
                                                                            "cart_revenue" == t.ladi_name && (o = t.name),
                                                                            "cart_shipping" == t.ladi_name && (r = t.name),
                                                                            "cart_coupon_amount" == t.ladi_name && (d = t.name)),
                                                                        !c[t.ladi_name])
                                                                    ) {
                                                                        var e = u[t.ladi_name];
                                                                        isNullLadiPage(e) || (isArrayLadiPage(e) ? (0 == e.length ? (a[t.name] = "") : (a[t.name] = JSON.stringify(e))) : (a[t.name] = e));
                                                                    }
                                                                }),
                                                                    isEmptyLadiPage(n) || isNullLadiPage(L) || (a[n] = JSON.stringify(L)),
                                                                    isEmptyLadiPage(o) || isNullLadiPage(P) || (a[o] = P),
                                                                    isEmptyLadiPage(r) ||
                                                                        isNullLadiPage(e.runtime.tmp.add_to_cart_shipping_method_id) ||
                                                                        (a[r] = e.runtime.tmp.add_to_cart_shipping_method_id + "|" + (e.runtime.tmp.add_to_cart_fee_shipping || 0)),
                                                                    isEmptyLadiPage(d) || isEmptyLadiPage(e.runtime.tmp.current_use_coupon) || (a[d] = e.runtime.tmp.add_to_cart_discount || 0);
                                                                var s = {};
                                                                if (!isEmptyLadiPage(t.api_request_header))
                                                                    try {
                                                                        var l = JSON.parse(t.api_request_header);
                                                                        Object.keys(l).forEach(function (t) {
                                                                            s[t] = l[t];
                                                                        });
                                                                    } catch (t) {}
                                                                if (!i)
                                                                    (a.link = window.location.href),
                                                                        e.runtime.has_popupx && (a.origin_link = e.runtime.tmp.popupx_origin_url),
                                                                        Object.keys(LadiFormApi).forEach(function (t) {
                                                                            a[t] = LadiFormApi[t];
                                                                        }),
                                                                        k.forEach(function (t) {
                                                                            var e = N[t];
                                                                            isNullLadiPage(e) || (a[t] = e);
                                                                        });
                                                                var p = null,
                                                                    m = t.content_type || e.const.CONTENT_TYPE.form_urlencoded;
                                                                if (
                                                                    (m == e.const.CONTENT_TYPE.form_urlencoded &&
                                                                        ((s["Content-Type"] = "application/x-www-form-urlencoded"),
                                                                        (p = Object.keys(a)
                                                                            .reduce(function (t, e) {
                                                                                return t.push(e + "=" + encodeURIComponent(a[e])), t;
                                                                            }, [])
                                                                            .join("&"))),
                                                                    m == e.const.CONTENT_TYPE.json && ((s["Content-Type"] = "application/json"), (p = JSON.stringify(a))),
                                                                    m == e.const.CONTENT_TYPE.form_data)
                                                                )
                                                                    (p = new FormData()),
                                                                        Object.keys(a).forEach(function (t) {
                                                                            p.append(t, a[t]);
                                                                        });
                                                                ot.push({ url: t.api_url, data: p, async: !0, headers: s, callback: ut });
                                                            }
                                                        });
                                                (ot.length > 0 || !W) && j(),
                                                    e.runTimeout(function () {
                                                        0 == ot.length && (W ? V(0, A, O, l) : M(0, A, s, l, pt)),
                                                            ot.forEach(function (t) {
                                                                e.sendRequest("POST", t.url, t.data, t.async, t.headers, t.callback);
                                                            });
                                                    }, n);
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        U = function (t) {
                            var i = e.findAncestor(t.target, "ladi-element");
                            if (!isEmptyLadiPage(i)) for (var a = i.querySelectorAll('[type="checkbox"]'), n = 0; n < a.length; n++) a[n].removeAttribute("required");
                        },
                        W = function (t) {
                            var i = e.findAncestor(t.target, "ladi-element");
                            if (!isEmptyLadiPage(i)) {
                                var a = e.runtime.eventData[i.id];
                                if (!isEmptyLadiPage(a) && a["option.is_form_otp"]) return !1;
                                for (var n = i.querySelectorAll('[ladi-checkbox-required="true"]'), o = -1, d = 0; d < n.length; d++)
                                    if (0 == n[d].querySelectorAll('[type="checkbox"]:checked').length) {
                                        o = d;
                                        break;
                                    }
                                if (-1 == o) {
                                    var s = function (t) {
                                            var e = !1,
                                                n = null;
                                            isEmptyLadiPage(a["option.form_config_id"]) || ((a["option.form_auto_capture"] || t.isFormOtp) && (n = F(i.id, a["option.form_config_id"])), a["option.form_auto_capture"] && (e = !0));
                                            var o = { captcha: !0 };
                                            (t.isResendOtp || t.isSendOtp) && (o.captcha = !1), t.isFormOtp && (t.isCapture = e), G(i, o, !1, n, null, t);
                                        },
                                        l = function (t) {
                                            window.ladi("_capture_" + i.id).delete_cookie(), window.ladi("_otp_id_" + i.id).delete_cookie();
                                            var n = [];
                                            isObjectLadiPage(a["option.form_setting"]) && (n = a["option.form_setting"].mapping_form_id || []),
                                                n.forEach(function (i) {
                                                    window.ladi("_otp_time_" + i).delete_cookie(), t && delete e.runtime.tmp["cookie_cache_otp_" + i];
                                                }),
                                                t && (delete e.runtime.tmp["cookie_cache_otp_" + i.id], delete e.runtime.tmp["form_data_ladi_" + i.id], delete e.runtime.tmp["form_data_ladi_tmp_" + i.id]);
                                        },
                                        c = function (t) {
                                            var i = t.getElementsByClassName("ladi-form")[0],
                                                a = e.findAncestor(t, ["ladi-popup", "ladi-element"]),
                                                n = function () {
                                                    var a = t.getAttribute("data-form-id-before");
                                                    delete e.runtime.func_get_code_otp[t.id],
                                                        delete e.runtime.tmp["cookie_cache_otp_" + t.id],
                                                        delete e.runtime.tmp["cookie_cache_otp_" + a],
                                                        delete e.runtime.tmp["form_data_ladi_" + a],
                                                        delete e.runtime.tmp["form_data_ladi_tmp_" + a],
                                                        window.ladi("_otp_time_" + t.id).delete_cookie(),
                                                        window.ladi("_otp_id_" + a).delete_cookie(),
                                                        t.removeAttribute("data-form-id-before"),
                                                        (i.onsubmit = function () {
                                                            return !1;
                                                        });
                                                },
                                                o = function () {
                                                    isEmptyLadiPage(a) || window.ladi(a.id).hide(), i.reset();
                                                };
                                            i.onsubmit = function () {
                                                var e = t.querySelector('input[name="otp"]');
                                                return isEmptyLadiPage(e) || ((e = e.value.trim()), s({ isFormOtp: !0, isSetOtpId: !0, isSendOtp: !0, otp_code: e, callbackOtpDone: n, callbackOtpShowThankYouDone: o })), !1;
                                            };
                                        },
                                        _ = function (t, e) {
                                            s({ isFormOtp: !0, isSetOtpId: !0, isResendOtp: t, callbackOtp: e, callbackThankyou: y });
                                        },
                                        y = function (t, n) {
                                            t.isFormOtp &&
                                                !t.isResendOtp &&
                                                (function () {
                                                    var t = {};
                                                    (t["_capture_" + i.id] = null), (t["_otp_id_" + i.id] = null);
                                                    var n = Object.keys(t);
                                                    n.forEach(function (e) {
                                                        t[e] = window.ladi(e).get_cookie();
                                                    }),
                                                        (e.runtime.tmp["cookie_cache_otp_" + i.id] = t);
                                                    var o = [];
                                                    isObjectLadiPage(a["option.form_setting"]) && (o = a["option.form_setting"].mapping_form_id || []),
                                                        o.forEach(function (i) {
                                                            ((t = {})["_otp_time_" + i] = null),
                                                                (n = Object.keys(t)).forEach(function (e) {
                                                                    t[e] = window.ladi(e).get_cookie();
                                                                }),
                                                                (e.runtime.tmp["cookie_cache_otp_" + i] = t);
                                                        }),
                                                        (e.runtime.tmp["form_data_ladi_" + i.id] = e.runtime.tmp["form_data_ladi_tmp_" + i.id]);
                                                })(),
                                                l(!1),
                                                j(i, a, !1, null, { isRunTracking: !1, getOtp: _, beforeRunOtp: c }),
                                                isFunctionLadiPage(n) && n();
                                        };
                                    if (!isEmptyLadiPage(a) && a["option.is_form_login"])
                                        !(function (t, i) {
                                            var a = t.querySelector('input[name="access_key"]');
                                            if (!isEmptyLadiPage(a) && !isEmptyLadiPage(a.value)) {
                                                for (var n = [], o = 0, r = 1; r <= 50; r++) {
                                                    var d = window.ladi("_login_token_" + r).get_cookie();
                                                    0 == o && isEmptyLadiPage(d) && (o = r), n.push(d);
                                                }
                                                if (0 == o) {
                                                    for (r = 1; r <= 50; r++) window.ladi("_login_token_" + r).delete_cookie();
                                                    (n = []), (o = 1);
                                                }
                                                e.sendRequest(
                                                    "POST",
                                                    e.const.API_ACCESS_KEY_LOGIN,
                                                    JSON.stringify({ tokens: n.removeSpace(), url: window.location.href, code: a.value.toUpperCase() }),
                                                    !0,
                                                    { "Content-Type": "application/json" },
                                                    function (t, i, a, r) {
                                                        if (a.readyState == XMLHttpRequest.DONE) {
                                                            var d = {},
                                                                s = e.const.LANG.FORM_LOGIN_SEND_ERROR;
                                                            try {
                                                                if (200 == (d = JSON.parse(t)).code) {
                                                                    var l = n.findIndex(function (t) {
                                                                        return t == d.data.token;
                                                                    });
                                                                    -1 != l && (o = l + 1), window.ladi("_login_token_" + o).set_cookie(d.data.token, 7);
                                                                    var c = e.getElementAHref(d.data.url, !0),
                                                                        u = window.location.search;
                                                                    return (
                                                                        (u.startsWith("?") || u.startsWith("&")) && (u = u.substring(1)),
                                                                        isEmptyLadiPage(u) || (c.search = c.search + (isEmptyLadiPage(c.search) ? "?" : "&") + u),
                                                                        void window.ladi(c.href).open_url()
                                                                    );
                                                                }
                                                                s = d.message || s;
                                                            } catch (t) {}
                                                            e.showMessage(s);
                                                        }
                                                    }
                                                );
                                            }
                                        })(i);
                                    else if (!isEmptyLadiPage(a) && isObjectLadiPage(a["option.form_setting"]) && a["option.form_setting"].is_multiple)
                                        a["option.form_setting"].is_multiple_otp
                                            ? (l(!0),
                                              _(!1, function (t) {
                                                  if (t) {
                                                      var e = [];
                                                      isObjectLadiPage(a["option.form_setting"]) && (e = a["option.form_setting"].mapping_form_id || []),
                                                          e.forEach(function (t) {
                                                              var e = document.getElementById(t);
                                                              if (!isEmptyLadiPage(e)) {
                                                                  var i = e.querySelector(".ladi-form-item .button-get-code");
                                                                  isEmptyLadiPage(i) || (e.setAttribute("data-start-countdown-otp", !0), i.click());
                                                              }
                                                          });
                                                  }
                                              }))
                                            : j(i, a, !1, null, { isRunTracking: !0 });
                                    else {
                                        if (e.runtime.shopping_product_type == e.const.FORM_CONFIG_TYPE.ladisales && !isNullLadiPage(e.runtime.shopping_config_checkout_id)) {
                                            var f = e.findAncestor(i, "ladi-popup");
                                            if (!isEmptyLadiPage(f) && ((f = e.findAncestor(f, "ladi-element")), !isEmptyLadiPage(f) && "POPUP_CHECKOUT" == f.id))
                                                return (
                                                    (function (t) {
                                                        var i = window.ladi("_cart_token").get_cookie(),
                                                            a = window.ladi("_checkout_token").get_cookie();
                                                        (u = {}), (p = {}), (m = []), (w = []), (T = []), B(t, !1);
                                                        var n = r.email,
                                                            o = r.phone;
                                                        if (isEmptyLadiPage(i) || isEmptyLadiPage(a)) e.showMessage(e.const.LANG.FORM_INPUT_REQUIRED_ERROR);
                                                        else if (isEmptyLadiPage(n) && isEmptyLadiPage(o)) e.showMessage(e.const.LANG.FORM_INPUT_REQUIRED_ERROR);
                                                        else {
                                                            var d = r.name,
                                                                s = r.address,
                                                                l = r.message,
                                                                c = r.country || "";
                                                            c = c.split(":")[0];
                                                            var _ = r.state || "";
                                                            _ = _.split(":")[0];
                                                            var y = r.district || "";
                                                            y = y.split(":")[0];
                                                            var f = r.ward || "";
                                                            f = f.split(":")[0];
                                                            var v = r.coupon,
                                                                P = e.runtime.tmp.add_to_cart_shipping_method_id,
                                                                h = e.getLadiSaleCheckoutCartProducts(),
                                                                L = {
                                                                    cart_token: i,
                                                                    checkout_token: a,
                                                                    discount_code: v,
                                                                    customer_first_name: d,
                                                                    customer_email: n,
                                                                    customer_phone: o,
                                                                    customer_address: s,
                                                                    customer_note: l,
                                                                    customer_country_code: c,
                                                                    customer_state_id: _,
                                                                    customer_district_id: y,
                                                                    customer_ward_id: f,
                                                                    shipping_method_id: P,
                                                                    shipping_first_name: d,
                                                                    shipping_address: s,
                                                                    shipping_phone: o,
                                                                    shipping_email: n,
                                                                    shipping_country_code: c,
                                                                    shipping_state_id: _,
                                                                    shipping_district_id: y,
                                                                    shipping_ward_id: f,
                                                                    shipping_note: l,
                                                                    checkout_config_id: e.runtime.shopping_config_checkout_id,
                                                                    is_export_invoice: 0,
                                                                    is_generate_url: !0,
                                                                    variants: h,
                                                                    utm: { url_page: window.location.href },
                                                                };
                                                            (N = e.getURLSearchParams(null, null, !1)),
                                                                k.forEach(function (t) {
                                                                    L.utm[t] = isNullLadiPage(N[t]) ? "" : N[t];
                                                                }),
                                                                e.runtime.has_popupx && (L.utm.origin_url_page = e.runtime.tmp.popupx_origin_url),
                                                                isEmptyLadiPage(g) || (L.utm[e.const.REF_NAME] = g),
                                                                (L.custom_fields = {});
                                                            var E = Object.keys(r);
                                                            (E = E.except(["name", "email", "phone", "address", "country", "state", "district", "ward", "message", "coupon"])).forEach(function (t) {
                                                                L.custom_fields[t] = r[t];
                                                            }),
                                                                e.sendRequest("POST", e.const.API_LADISALE_CHECKOUT_CREATE, JSON.stringify(L), !0, { "Content-Type": "application/json" }, function (t, i, a) {
                                                                    if (a.readyState == XMLHttpRequest.DONE) {
                                                                        if (200 == i)
                                                                            try {
                                                                                var n = JSON.parse(t);
                                                                                if (200 == n.code && isObjectLadiPage(n.data) && !isEmptyLadiPage(n.data.url)) return void window.ladi(window.ladi(n.data.url).get_url()).open_url();
                                                                                if (!isEmptyLadiPage(n.message)) return void e.showMessage(n.message);
                                                                            } catch (t) {}
                                                                        e.showMessage(e.const.LANG.REQUEST_SEND_ERROR);
                                                                    }
                                                                });
                                                        }
                                                    })(i),
                                                    !1
                                                );
                                        }
                                        s({ isFormOtp: !1 });
                                    }
                                } else {
                                    var v = n[o].querySelectorAll('[type="checkbox"]');
                                    if (v.length > 0) {
                                        v[0].setAttribute("required", "required");
                                        for (var P = 0; P < v.length; P++) v[P].removeEventListener("change", U), v[P].addEventListener("change", U);
                                        i.querySelector(".ladi-form").reportValidity();
                                    }
                                }
                            }
                            return !1;
                        },
                        X = function (t, i, a, n) {
                            var o = e.findAncestor(t.target, "ladi-form");
                            if (!isEmptyLadiPage(o)) {
                                var r = e.findAncestor(o, "ladi-element");
                                if (
                                    !(
                                        isEmptyLadiPage(r) ||
                                        ((a = i ? a : e.runtime.eventData[r.id]),
                                        isEmptyLadiPage(a) || (!a["option.is_buy_now"] && !a["option.is_add_to_cart"]) || isEmptyLadiPage(a["option.product_type"]) || isEmptyLadiPage(a["option.product_id"]))
                                    )
                                ) {
                                    var d = function () {
                                        var o = e.generateVariantProduct(a, !1, null, null, null, null, !0, !0, d);
                                        if (isEmptyLadiPage(o) || isEmptyLadiPage(o.store_info) || isEmptyLadiPage(o.product))
                                            isEmptyLadiPage(e.runtime.tmp.timeout_product_info[a["option.product_type"]][a["option.product_id"]]) && e.showMessage(e.const.LANG.ADD_TO_CART_NO_PRODUCT, { name: e.getMessageNameProduct() });
                                        else {
                                            var s = -1,
                                                l = null;
                                            if (i) {
                                                var c = r.querySelector('[data-variant="true"]');
                                                (l = e.getProductVariantId(c, o.product)),
                                                    isEmptyLadiPage(l) ||
                                                        (s = o.product.variants.findIndex(function (t) {
                                                            return t.product_variant_id == l;
                                                        }));
                                            } else s = e.getProductVariantIndex(r.id, a);
                                            if (-1 != s) {
                                                var u = o.product.variants[s].product_id;
                                                l = o.product.variants[s].product_variant_id;
                                                var p = o.product.name,
                                                    m = o.product.variants[s].title,
                                                    g = o.product.variants[s].price,
                                                    _ = o.product.variants[s].quantity,
                                                    y = o.product.variants[s].quantity_stock;
                                                _ = isNullLadiPage(y) ? _ : y;
                                                var f = isEmptyLadiPage(o.product.variants[s].src) ? "" : o.product.variants[s].src;
                                                (f = isEmptyLadiPage(f) && isObjectLadiPage(o.product.image) ? o.product.image.src : f),
                                                    isEmptyLadiPage(f) || !isStringLadiPage(f) || f.startsWith("http://") || f.startsWith("https://") || f.startsWith("//") || (f = "https://" + e.const.STATIC_W_DOMAIN + "/" + f);
                                                if (
                                                    0 == o.product.select_many_service &&
                                                    isArrayLadiPage(e.runtime.tmp.cart) &&
                                                    -1 !=
                                                        e.runtime.tmp.cart.findIndex(function (t) {
                                                            return t.product_id == u && t.product_variant_id != l && t.quantity > 0;
                                                        })
                                                )
                                                    e.showMessage(e.const.LANG.ADD_TO_CART_PRODUCT_ONLY_ONE, { name: e.getMessageNameProduct(o.product.variants[s]) });
                                                else {
                                                    var v = e.runtime.tmp.cart.findIndex(function (t) {
                                                            return t.product_variant_id == l;
                                                        }),
                                                        P = !1;
                                                    if (-1 == v) {
                                                        P = !0;
                                                        var h = {
                                                            store_id: o.store_info.id,
                                                            product_id: u,
                                                            product_variant_id: l,
                                                            name: p,
                                                            title: m,
                                                            price: g,
                                                            image: f,
                                                            quantity: 0,
                                                            min_buy: o.product.variants[s].min_buy,
                                                            max_buy: o.product.variants[s].max_buy,
                                                            inventory_checked: o.product.variants[s].inventory_checked,
                                                            available_quantity: _,
                                                            currency: o.store_info.currency,
                                                            product_type: o.product.variants[s].product_type,
                                                            package_quantity: o.product.variants[s].package_quantity,
                                                        };
                                                        isObjectLadiPage(h.currency) && !isEmptyLadiPage(h.currency.code) && (h.currency.symbol = e.formatCurrency(null, h.currency.code, !1, !0)),
                                                            e.runtime.tmp.cart.push(h),
                                                            (v = e.runtime.tmp.cart.length - 1);
                                                    }
                                                    var L = r.querySelector('input[name="quantity"]');
                                                    if (isEmptyLadiPage(L) || isEmptyLadiPage(L.value)) e.showMessage(e.const.LANG.ADD_TO_CART_QUANTITY_REQUIRED);
                                                    else {
                                                        var E = parseInt(L.value) || 0;
                                                        if (E <= 0) return void e.showMessage(e.const.LANG.ADD_TO_CART_QUANTITY_REQUIRED);
                                                        var b = null,
                                                            A = 1;
                                                        A = o.product.variants[s].min_buy || A;
                                                        var w = o.product.variants[s].max_buy;
                                                        A > e.runtime.tmp.cart[v].quantity + E && (E = A - e.runtime.tmp.cart[v].quantity);
                                                        var T = !1;
                                                        if (
                                                            (!isEmptyLadiPage(w) && e.runtime.tmp.cart[v].quantity + E > w && (E = w - e.runtime.tmp.cart[v].quantity) <= 0 && ((T = !0), (b = w)),
                                                            1 == o.product.variants[s].inventory_checked)
                                                        ) {
                                                            if (A > _) return void e.showMessage(e.const.LANG.ADD_TO_CART_NO_QUANTITY, { name: e.getMessageNameProduct(o.product.variants[s], !0) });
                                                            e.runtime.tmp.cart[v].quantity + E > _ && ((E = _ - e.runtime.tmp.cart[v].quantity), _ > 0 && ((T = !0), (isEmptyLadiPage(b) || b > _) && (b = _)));
                                                        }
                                                        if (T || (E <= 0 && _ > 0))
                                                            e.showMessage(e.const.LANG.ADD_TO_CART_MAX_QUANTITY, { max: b, name: e.getMessageNameProduct(o.product.variants[s]) }, function () {
                                                                var i = t.target;
                                                                (i = e.findAncestor(i, "ladi-button")), isEmptyLadiPage(i) || (i = e.findAncestor(i, "ladi-element"));
                                                                var a = e.runtime.eventData[i.id];
                                                                if (!isEmptyLadiPage(a)) {
                                                                    var n = a["option.data_event"];
                                                                    if (!isArrayLadiPage(n) && ((n = []), isObjectLadiPage(a["option.data_action"]))) {
                                                                        var o = e.copy(a["option.data_action"]);
                                                                        (o.action_type = e.const.ACTION_TYPE.action), n.push(o);
                                                                    }
                                                                    n.forEach(function (t) {
                                                                        t.action_type == e.const.ACTION_TYPE.action &&
                                                                            (t.type == e.const.DATA_ACTION_TYPE.popup_cart && window.ladi("POPUP_CART").show(),
                                                                            t.type == e.const.DATA_ACTION_TYPE.popup_checkout && (e.runtime.shopping_third_party ? e.getThirdPartyCheckoutUrl(!0) : window.ladi("POPUP_CHECKOUT").show()));
                                                                    });
                                                                }
                                                            });
                                                        else if (E > 0) {
                                                            var S = !isEmptyLadiPage(o.product.variants[s].start_date) && new Date(o.product.variants[s].start_date).getTime() > Date.now(),
                                                                O = !isEmptyLadiPage(o.product.variants[s].end_date) && new Date(o.product.variants[s].end_date).getTime() < Date.now();
                                                            if (S) e.showMessage(e.const.LANG.ADD_TO_CART_PRODUCT_BEFORE_START_DATE, { name: e.getMessageNameProduct(o.product.variants[s]) });
                                                            else if (O) e.showMessage(e.const.LANG.ADD_TO_CART_PRODUCT_AFTER_END_DATE, { name: e.getMessageNameProduct(o.product.variants[s]) });
                                                            else {
                                                                var C = function () {
                                                                    e.runtime.tmp.cart[v].quantity += E;
                                                                    var t = { product_id: u, product_variant_id: l, quantity: E };
                                                                    (t.product_type = e.runtime.tmp.cart[v].product_type),
                                                                        (t.package_quantity = e.runtime.tmp.cart[v].package_quantity),
                                                                        e.addCartCookie(
                                                                            o.store_info.id,
                                                                            t,
                                                                            function () {
                                                                                isFunctionLadiPage(n) && n();
                                                                                var t = document.getElementsByClassName("ladi-form-remove-coupon")[0];
                                                                                isEmptyLadiPage(t) || t.click(), e.updateCartPromotion();
                                                                            },
                                                                            function (t) {
                                                                                (e.runtime.tmp.cart[v].quantity -= E), P && e.runtime.tmp.cart.splice(v, 1), e.showMessage(t.message);
                                                                            },
                                                                            function () {
                                                                                e.runtime.tmp.generateCart(),
                                                                                    e.changeTotalPriceCart(),
                                                                                    (e.runtime.tmp.is_click_add_to_cart = !1),
                                                                                    0 == e.runtime.tmp.cart.length &&
                                                                                        -1 != [e.const.FORM_CONFIG_TYPE.ladisales].indexOf(e.runtime.shopping_product_type) &&
                                                                                        (window.ladi("_cart_token").delete_cookie(), window.ladi("_checkout_token").delete_cookie()),
                                                                                    e.runResizeAll();
                                                                            }
                                                                        );
                                                                };
                                                                if (isEmptyLadiPage(window.ladi("_cart_token").get_cookie()))
                                                                    if (e.runtime.tmp.is_click_add_to_cart) {
                                                                        var N = function () {
                                                                            e.runTimeout(function () {
                                                                                if (e.runtime.tmp.is_click_add_to_cart) return N();
                                                                                d();
                                                                            }, 100);
                                                                        };
                                                                        N();
                                                                    } else (e.runtime.tmp.is_click_add_to_cart = !0), C();
                                                                else C();
                                                            }
                                                        } else _ <= 0 && e.showMessage(e.const.LANG.ADD_TO_CART_NO_QUANTITY, { name: e.getMessageNameProduct(o.product.variants[s], !0) });
                                                    }
                                                }
                                            } else e.showMessage(e.const.LANG.ADD_TO_CART_PRODUCT_REQUIRED, { name: e.getMessageNameProduct(o.product.variants[s]) });
                                        }
                                    };
                                    d();
                                }
                            }
                        },
                        z = function (t) {
                            X(t, !1, null, function () {
                                var i = e.findAncestor(t.target, "ladi-button");
                                i = e.findAncestor(i || t.target, "ladi-element");
                                var a = e.runtime.eventData[i.id];
                                if (!isEmptyLadiPage(a)) {
                                    var n = a["option.data_event"];
                                    if (!isArrayLadiPage(n) && ((n = []), isObjectLadiPage(a["option.data_action"]))) {
                                        var o = e.copy(a["option.data_action"]);
                                        (o.action_type = e.const.ACTION_TYPE.action), n.push(o);
                                    }
                                    n.forEach(function (t) {
                                        if (t.action_type == e.const.ACTION_TYPE.action) {
                                            var i = null;
                                            t.type == e.const.DATA_ACTION_TYPE.popup_cart && (i = "POPUP_CART"),
                                                t.type == e.const.DATA_ACTION_TYPE.popup_checkout && (i = "POPUP_CHECKOUT"),
                                                t.type == e.const.DATA_ACTION_TYPE.popup_checkout && e.runtime.shopping_third_party ? e.getThirdPartyCheckoutUrl(!0) : isEmptyLadiPage(i) || window.ladi(i).show();
                                        }
                                    }),
                                        e.runEventTracking(i.id, { is_form: !1 });
                                }
                            });
                        },
                        K = function (t) {
                            var i = e.findAncestor(t.target, "ladi-form");
                            isEmptyLadiPage(i) || ((i = e.findAncestor(i, "ladi-element")), isEmptyLadiPage(i) || window.ladi(i.id).submit());
                        },
                        J = function (t) {
                            var i = e.findAncestor(t.target, "ladi-form");
                            if (!isEmptyLadiPage(i)) {
                                var a = e.findAncestor(i, "ladi-element");
                                if (!isEmptyLadiPage(a)) {
                                    var n = e.runtime.eventData[a.id];
                                    if (!isEmptyLadiPage(n)) {
                                        var o = {};
                                        if (isObjectLadiPage(n["option.form_setting"]) && n["option.form_setting"].is_multiple) {
                                            if (!n["option.form_setting"].is_multiple_otp) return void j(a, n, !0, t.target.getAttribute("name"), { isRunTracking: !0 });
                                            (o.isFormOtp = !0), (o.isCapture = !0);
                                        }
                                        if (n["option.form_auto_capture"] && !isEmptyLadiPage(n["option.form_config_id"])) {
                                            var r = F(a.id, n["option.form_config_id"]);
                                            G(a, { captcha: !0 }, !0, r, t.target.getAttribute("name"), o);
                                        }
                                    }
                                }
                            }
                        },
                        $ = {};
                    x.forEach(function (t) {
                        ($[t] = window.ladi("_ladipage_" + t).get_cookie()), isEmptyLadiPage(l[t]) || ($[t] = l[t]);
                    }),
                        (i = s($));
                    var Z = 0,
                        Q = !1,
                        tt = function (t) {
                            for (var n = a[Z].querySelectorAll('.ladi-element .ladi-form-item-container [name="' + t + '"]'), o = null, r = 0; r < n.length; r++) {
                                var d = $[t];
                                if (!isEmptyLadiPage(d) && "none" != getComputedStyle(n[r]).display)
                                    if (("true" != n[r].getAttribute("data-is-select-country") && (d = i[t]), "SELECT" == n[r].tagName))
                                        n[r].querySelectorAll('option[value="' + d + '"]').length > 0 && ((n[r].value = d), Q && e.fireEvent(n[r], "change"));
                                    else {
                                        if ("country" == t && "true" == n[r].getAttribute("data-is-select-country")) continue;
                                        "INPUT" == n[r].tagName && "true" == n[r].getAttribute("data-is-select-country") && 2 == (o = d.split(":")).length && (d = o[1]), (n[r].value = d), Q && e.fireEvent(n[r], "change");
                                    }
                            }
                        },
                        et = function (t) {
                            (t.target.type = "date"), t.target.focus();
                        },
                        it = function (t) {
                            isEmptyLadiPage(t.target.value) && (t.target.type = "text");
                        };
                    for (Z = 0; Z < a.length; Z++) {
                        a[Z].onsubmit = W;
                        for (var at = e.findAncestor(a[Z], "ladi-element"), nt = a[Z].getElementsByClassName("ladi-button"), ot = 0; ot < nt.length; ot++) {
                            var rt = a[Z].getElementsByClassName("ladi-button")[ot];
                            if (!isEmptyLadiPage(rt)) {
                                var dt = e.findAncestor(rt, "ladi-element");
                                isEmptyLadiPage(at) || isEmptyLadiPage(e.runtime.eventData[at.id]) || !e.runtime.eventData[at.id]["option.is_add_to_cart"]
                                    ? dt.addEventListener("click", K)
                                    : (dt.setAttribute("data-click", !1), dt.addEventListener("click", z));
                            }
                        }
                        var st = a[Z].querySelector('[data-is-select-country="true"][name="country"]');
                        if (!isEmptyLadiPage(st) && "true" == st.getAttribute("data-no-ward")) {
                            var lt = a[Z].querySelector('[data-is-select-country="true"][name="ward"]');
                            isEmptyLadiPage(lt) || lt.removeAttribute("required");
                        }
                        for (var ct = a[Z].querySelectorAll('input[data-type="date"]'), ut = 0; ut < ct.length; ut++)
                            isEmptyLadiPage(ct[ut].getAttribute("placeholder")) ||
                                (e.runtime.isDesktop || e.runtime.isBrowserDesktop
                                    ? (ct[ut].setAttribute("type", "text"), ct[ut].addEventListener("focus", et), ct[ut].addEventListener("blur", it))
                                    : (ct[ut].value = new Date().toISOString().substr(0, 10)));
                        var pt = a[Z].querySelectorAll("[tabindex]"),
                            mt = 0,
                            gt = 0;
                        for (ut = 0; ut < pt.length; ut++) (gt = parseInt(pt[ut].getAttribute("tabindex")) || 0) > mt && (mt = gt), pt[ut].setAttribute("tabindex", e.runtime.tabindexForm + gt);
                        for (pt = a[Z].querySelectorAll("[data-tabindex]"), ut = 0; ut < pt.length; ut++)
                            (gt = parseInt(pt[ut].getAttribute("data-tabindex")) || 0) > mt && (mt = gt), pt[ut].setAttribute("data-tabindex", e.runtime.tabindexForm + gt);
                        e.runtime.tabindexForm += mt;
                        for (var _t = 0; _t < D.length; _t++) {
                            var yt = a[Z].querySelector('.ladi-element .ladi-form-item-container input[name="' + D[_t] + '"]');
                            isEmptyLadiPage(yt) || yt.addEventListener("focusout", J);
                        }
                    }
                    var ft = function (t, i) {
                        for (Q = i, Z = 0; Z < a.length; Z++) {
                            var n = e.findAncestor(a[Z], "ladi-element");
                            !isEmptyLadiPage(e.runtime.eventData[n.id]) && e.runtime.eventData[n.id]["option.form_auto_complete"] && t.forEach(tt);
                        }
                    };
                    ft(e.copy(x).except(e.runtime.list_set_value_name_country));
                    e.runtime.tmp.listAfterLocation.push(function () {
                        var t = "",
                            i = "",
                            n = "",
                            o = "",
                            r = null,
                            d = function (t, e) {
                                var i = String(r[t].name),
                                    a = String(r[e].name);
                                try {
                                    return i.localeCompare(a);
                                } catch (t) {}
                                return i == a ? 0 : i > a ? 1 : -1;
                            },
                            s = function (e) {
                                var a = window.LadiLocation[i].data[e];
                                isEmptyLadiPage(a) || (t += '<option value="' + a.id + ":" + a.name + '">' + a.name + "</option>");
                            },
                            l = function (t) {
                                var i = window.LadiLocation[t.target.getAttribute("data-country")].data[t.target.value.split(":")[0]];
                                if (((n = ""), !isEmptyLadiPage(i) && isObjectLadiPage(i.data))) {
                                    var a = Object.keys(i.data);
                                    (r = i.data),
                                        a.sort(d),
                                        a.forEach(function (t) {
                                            var e = i.data[t];
                                            n += '<option value="' + e.id + ":" + e.name + '">' + e.name + "</option>";
                                        });
                                }
                                var o = e.findAncestor(t.target, "ladi-element");
                                if (!isEmptyLadiPage(o)) {
                                    var s = o.querySelector('[name="district"]');
                                    isEmptyLadiPage(s) || ("SELECT" == s.tagName && (s.setAttribute("data-selected", ""), (s.innerHTML = s.querySelector("option").outerHTML + n)));
                                    var l = o.querySelector('[name="ward"]');
                                    isEmptyLadiPage(l) || ("SELECT" == l.tagName && (l.setAttribute("data-selected", ""), (l.innerHTML = l.querySelector("option").outerHTML))), e.reloadFeeShipping({ target: l });
                                }
                            },
                            c = function (t) {
                                var i = e.findAncestor(t.target, "ladi-element");
                                if (!isEmptyLadiPage(i)) {
                                    var a = i.querySelector('[name="ward"]');
                                    if (!isEmptyLadiPage(a)) {
                                        o = "";
                                        var n = i.querySelector('select[name="state"]');
                                        if (!isEmptyLadiPage(n)) {
                                            var s = n.getAttribute("data-selected");
                                            if (!isEmptyLadiPage(s)) {
                                                s = s.split(":")[0];
                                                var l = window.LadiLocation[n.getAttribute("data-country")].data[s];
                                                if (!isEmptyLadiPage(l) && isObjectLadiPage(l.data)) {
                                                    var c = l.data[t.target.value.split(":")[0]];
                                                    if (!isEmptyLadiPage(c)) {
                                                        var u = Object.keys(c.data);
                                                        (r = c.data),
                                                            u.sort(d),
                                                            u.forEach(function (t) {
                                                                var e = c.data[t];
                                                                o += '<option value="' + e.id + ":" + e.name + '">' + e.name + "</option>";
                                                            });
                                                    }
                                                }
                                            }
                                        }
                                        "SELECT" == a.tagName && (a.setAttribute("data-selected", ""), (a.innerHTML = a.querySelector("option").outerHTML + o));
                                        var p = i.querySelector('[name="district"]');
                                        isEmptyLadiPage(p) || "SELECT" != p.tagName || e.reloadFeeShipping({ target: a });
                                    }
                                }
                            },
                            u = function (t) {
                                var i = e.findAncestor(t.target, "ladi-element");
                                if (!isEmptyLadiPage(i)) {
                                    var a = i.querySelector('[name="ward"]');
                                    isEmptyLadiPage(a) || "SELECT" != a.tagName || e.reloadFeeShipping({ target: a });
                                }
                            };
                        for (Z = 0; Z < a.length; Z++) {
                            var p = a[Z].querySelectorAll('.ladi-element .ladi-form-item-container [name="state"]'),
                                m = 0,
                                g = null;
                            for (m = 0; m < p.length; m++)
                                if (
                                    ((g = e.findAncestor(p[m], "ladi-element")),
                                    !isEmptyLadiPage(g) && ((i = e.runtime.eventData[g.id]["option.input_country"]), !isEmptyLadiPage(i) && ((t = ""), (i = i.split(":")[0]), !isEmptyLadiPage(window.LadiLocation[i]))))
                                ) {
                                    var _ = window.LadiLocation[i].data,
                                        y = Object.keys(_);
                                    (r = _),
                                        y.sort(d),
                                        isArrayLadiPage(e.runtime.country_state_sort[i]) && ((y = y.except(e.runtime.country_state_sort[i])), (y = e.runtime.country_state_sort[i].concat(y))),
                                        y.forEach(s),
                                        (p[m].innerHTML = p[m].querySelector("option").outerHTML + t),
                                        p[m].setAttribute("data-country", i),
                                        p[m].addEventListener("change", l);
                                }
                            var f = a[Z].querySelectorAll('.ladi-element .ladi-form-item-container [name="district"]');
                            for (m = 0; m < f.length; m++) f[m].addEventListener("change", c);
                            var v = a[Z].querySelectorAll('.ladi-element .ladi-form-item-container [name="ward"]');
                            for (m = 0; m < v.length; m++) v[m].addEventListener("change", u);
                        }
                    }),
                        e.runtime.tmp.listAfterLocation.push(function () {
                            ft(R, !0);
                        }),
                        (e.runtime.tmp.buttonAddToCartClick = X);
                },
                z = function () {
                    for (
                        var t = document.querySelectorAll(".ladi-form .ladi-element .ladi-form-control-file"),
                            i = function (t) {
                                var i = t.target,
                                    a = i.getAttribute("data-click-id") || e.randomId();
                                i.setAttribute("data-click-id", a);
                                var n = document.getElementById("ladi-input-file");
                                if (isEmptyLadiPage(n)) {
                                    (n = document.createElement("input")).id = "ladi-input-file";
                                    var o = e.findAncestor(i, "ladi-element");
                                    (!isEmptyLadiPage(o) && o.classList.contains("accept-all")) || n.setAttribute("accept", ".jpg, .jpeg, .png, .gif, .svg, .ico, .mp3, .mp4, .ttf, .otf, .woff2, .txt, .doc, .docx, .xls, .xlsx, .pdf"),
                                        n.setAttribute("style", "position: absolute; top: 0; left: 0; visibility: hidden;"),
                                        (n.multiple = !0),
                                        (n.type = "file"),
                                        document.body.appendChild(n);
                                }
                                n.setAttribute("data-file-click-id", a),
                                    "true" != n.getAttribute("data-event") &&
                                        (n.setAttribute("data-event", !0),
                                        n.addEventListener("change", function (t) {
                                            !(function (t, i, a) {
                                                if (i.length > e.const.FORM_UPLOAD_FILE_LENGTH) e.showMessage(e.const.LANG.FORM_UPLOAD_FILE_MAX_LENGTH_ERROR, { max_length: e.const.FORM_UPLOAD_FILE_LENGTH });
                                                else {
                                                    for (var n = new FormData(), o = 0, r = 0; r < i.length; r++) (o += i[r].size), n.append("file[]", i[r]);
                                                    if (o > 1024 * e.const.FORM_UPLOAD_FILE_SIZE * 1024) e.showMessage(e.const.LANG.FORM_UPLOAD_FILE_MAX_SIZE_ERROR, { max_size: e.const.FORM_UPLOAD_FILE_SIZE });
                                                    else {
                                                        var d = { ladipage_id: e.runtime.ladipage_id, lang: e.runtime.lang };
                                                        n.append("json_data", JSON.stringify(d)),
                                                            e.showLoadingBlur(),
                                                            e.sendRequest("POST", e.const.API_FILE_UPLOAD, n, !0, null, function (i, a, n) {
                                                                if (n.readyState == XMLHttpRequest.DONE) {
                                                                    if ((e.hideLoadingBlur(), 200 == a))
                                                                        try {
                                                                            var o = JSON.parse(i);
                                                                            if (200 == o.code) {
                                                                                var r = [],
                                                                                    d = [];
                                                                                return (
                                                                                    o.data.success.forEach(function (t) {
                                                                                        r.push(t.name), d.push({ id: t._id, path: t.path, name: t.name });
                                                                                    }),
                                                                                    (t.value = r.length > 0 ? "[" + r.join(", ") + "]" : ""),
                                                                                    void t.setAttribute("data-path-file", JSON.stringify(d))
                                                                                );
                                                                            }
                                                                            if (!isEmptyLadiPage(o.message)) return void e.showMessage(o.message);
                                                                        } catch (t) {}
                                                                    e.showMessage(e.const.LANG.REQUEST_SEND_ERROR);
                                                                }
                                                            }),
                                                            isFunctionLadiPage(a) && a();
                                                    }
                                                }
                                            })((i = document.querySelector('[data-click-id="' + t.target.getAttribute("data-file-click-id") + '"]')), t.target.files, function () {
                                                t.target.value = null;
                                            });
                                        })),
                                    n.click();
                            },
                            a = 0;
                        a < t.length;
                        a++
                    ) {
                        var n = t[a];
                        (n.readOnly = !0), n.style.setProperty("cursor", "pointer"), n.addEventListener("click", i);
                    }
                },
                K = function (t, i) {
                    var a = function (t) {
                            t.addEventListener("click", function (i) {
                                i.stopPropagation(),
                                    (t.classList.contains("accordion-menu") && e.runtime.time_click_dom[t.id] > Date.now()) ||
                                        ((e.runtime.time_click_dom[t.id] = Date.now() + 250), t.classList.contains("selected") ? t.classList.remove("selected") : t.classList.add("selected"));
                            });
                        },
                        n = [];
                    i ? t.classList.contains("element-click-selected") && n.push(t) : (n = document.getElementsByClassName("element-click-selected"));
                    for (var o = 0; o < n.length; o++) a(n[o]);
                },
                J = function (t) {
                    if (e.runtime.isClient && !e.runtime.isDesktop && !isEmptyLadiPage(e.runtime.bodyFontSize)) {
                        var i = (parseFloatLadiPage(getComputedStyle(document.body).fontSize) || 0) / e.runtime.bodyFontSize;
                        if (1 != i)
                            for (var a = document.querySelectorAll(".ladi-paragraph, .ladi-list-paragraph, .ladi-headline, .ladi-countdown, .ladi-form, .ladi-table, .ladi-spin-lucky"), n = 0; n < a.length; n++) {
                                var o = (parseFloatLadiPage(getComputedStyle(a[n]).fontSize) || 0) / (i * i);
                                a[n].style.setProperty("font-size", o + "px");
                            }
                        else
                            t > Date.now() &&
                                e.runTimeout(function () {
                                    J(t);
                                }, 100);
                    }
                },
                $ = function (t) {
                    var e = null;
                    return isEmptyLadiPage(t) || (e = t.classList.contains("no-value") ? null : t.getAttribute("data-value")), (e = isEmptyLadiPage(e) ? "" : e);
                },
                Z = function (t, e) {
                    var i = t.querySelectorAll(".ladi-form-label-item");
                    e = isEmptyLadiPage(e) ? "" : e;
                    for (var a = 0; a < i.length; a++) {
                        $(i[a]) == e ? i[a].classList.add("selected") : i[a].classList.remove("selected");
                    }
                },
                Q = function (t) {
                    var e = t.querySelector(".ladi-form-label-item.selected");
                    return $(e);
                },
                tt = function (t, i) {
                    var a = t.target;
                    if (a.classList.contains("disabled"))
                        for (var n = e.findAncestor(a, "ladi-element").querySelectorAll(".ladi-form-label-item"), o = 0; o < n.length; o++)
                            n[o].classList.contains("no-value") ? n[o].classList.add("selected") : n[o].classList.remove("selected"), n[o].classList.remove("disabled");
                    var r = $(a);
                    !t.is_fire_event && a.classList.contains("selected") && (r = "");
                    var d = e.findAncestor(a, "ladi-form-label-container");
                    Z(d, r), isFunctionLadiPage(i) && i(d);
                },
                et = function (i, a, n, o) {
                    if ("form" == a) {
                        var r = e.runtime.eventData[i];
                        if (!isEmptyLadiPage(r) && r["option.is_add_to_cart"]) {
                            var d = document.getElementById(i);
                            if (!isEmptyLadiPage(d) && (!n || isEmptyLadiPage(e.findAncestor(d, "ladi-collection-item")))) {
                                var s = d.querySelector('[data-variant="true"]');
                                if (!isEmptyLadiPage(s)) {
                                    var l = e.runtime.eventData[s.id];
                                    if (!isEmptyLadiPage(l)) {
                                        var c = r["option.product_type"],
                                            u = r["option.product_id"];
                                        if (!isEmptyLadiPage(c) && !isEmptyLadiPage(u)) {
                                            var p = e.generateVariantProduct(r, !1, null, null, null, null, !0, !0, function (t) {
                                                et(i, a, n, o);
                                            });
                                            if (!(isEmptyLadiPage(p) || isEmptyLadiPage(p.store_info) || isEmptyLadiPage(p.product))) {
                                                var m = e.generateVariantProduct(r, !0, l["option.product_variant_type"], l["option.product_variant_title"], l["option.product_variant_price"], l["option.input_tabindex"], t, !0, function (
                                                        t
                                                    ) {
                                                        et(i, a, n, o);
                                                    }),
                                                    g = function (t) {
                                                        e.updateProductVariantSelectOption(t, r, l, o, function () {
                                                            if (o) {
                                                                var a = e.generateVariantProduct(r, !1, null, null, null, null, !0, !0),
                                                                    n = e.getProductVariantId(t.target, a.product);
                                                                if (!isArrayLadiPage(a.product.variants)) return;
                                                                var d = a.product.variants.find(function (t) {
                                                                    return t.product_variant_id == n;
                                                                });
                                                                if (isEmptyLadiPage(d)) return;
                                                                for (var s = document.querySelectorAll("#POPUP_PRODUCT .ladi-element"), l = 0; l < s.length; l++) s[l].id != i && e.runtime.tmp.runLadiSaleProductKey(s[l].id, !1, !0, d, a);
                                                            } else e.runtime.tmp.generateLadiSaleProduct(!1, !0, t);
                                                        });
                                                    },
                                                    _ = function (t) {
                                                        tt(t, function (t) {
                                                            g({ target: t });
                                                        });
                                                    };
                                                e.showParentVisibility(s, function () {
                                                    for (var t = s.clientHeight, i = t, a = s.querySelectorAll("select.ladi-form-control"), n = {}, o = 0; o < a.length; o++)
                                                        n[a[o].getAttribute("data-store-id") + "_" + a[o].getAttribute("data-product-id") + "_" + a[o].getAttribute("data-product-option-id")] = a[o].value;
                                                    var c = s.querySelectorAll(".ladi-form-label-container");
                                                    for (o = 0; o < c.length; o++) n[c[o].getAttribute("data-store-id") + "_" + c[o].getAttribute("data-product-id") + "_" + c[o].getAttribute("data-product-option-id")] = Q(c[o]);
                                                    s.innerHTML = m;
                                                    for (var u = null, p = null, y = s.querySelectorAll("select.ladi-form-control"), f = 0; f < y.length; f++)
                                                        y[f].addEventListener("change", g),
                                                            (u = n[y[f].getAttribute("data-store-id") + "_" + y[f].getAttribute("data-product-id") + "_" + y[f].getAttribute("data-product-option-id")]),
                                                            isNullLadiPage(u) && ((p = y[f].querySelector("option")), isEmptyLadiPage(p) || (u = p.getAttribute("value"))),
                                                            (y[f].value = u);
                                                    var v = s.querySelectorAll(".ladi-form-label-container");
                                                    for (f = 0; f < v.length; f++) {
                                                        for (var P = v[f].querySelectorAll(".ladi-form-label-item"), h = 0; h < P.length; h++) e.tapEventListener(P[h], _);
                                                        (u = n[v[f].getAttribute("data-store-id") + "_" + v[f].getAttribute("data-product-id") + "_" + v[f].getAttribute("data-product-option-id")]),
                                                            isNullLadiPage(u) && ((p = P[1]), isEmptyLadiPage(p) || (u = $(p))),
                                                            Z(v[f], u);
                                                    }
                                                    if ((e.updateProductVariantSelectOptionFirst(r, l, s), l["option.product_variant_type"] != e.const.PRODUCT_VARIANT_TYPE.combined))
                                                        s.style.setProperty("height", "auto"),
                                                            (i = s.clientHeight),
                                                            s.style.removeProperty("height"),
                                                            i > 0 && t != i && (s.style.setProperty("height", i + "px"), e.updateHeightElement(!0, s, d, t, i));
                                                    else if (!isEmptyLadiPage(r["option.product_variant_id"]))
                                                        for (var L = 0; L < y.length; L++) {
                                                            var E = y[L].querySelector('option[data-product-variant-id="' + r["option.product_variant_id"] + '"]');
                                                            isEmptyLadiPage(E) || y[L].value == E.getAttribute("value") || ((y[L].value = E.getAttribute("value")), e.fireEvent(y[L], "change"));
                                                        }
                                                });
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                it = function (i, a, n) {
                    if (isObjectLadiPage(a) && isObjectLadiPage(a.variant) && isObjectLadiPage(a.product)) {
                        var o = a.variant.src;
                        if ((isEmptyLadiPage(o) && ((o = a.product.image), isObjectLadiPage(o) && (o = o.src)), !isEmptyLadiPage(o))) {
                            !isStringLadiPage(o) || o.startsWith("http://") || o.startsWith("https://") || o.startsWith("//") || (o = "https://" + e.const.STATIC_W_DOMAIN + "/" + o);
                            var r = e.findAncestor(i, "ladi-collection-item"),
                                d = [],
                                s = 0,
                                l = null;
                            if (isEmptyLadiPage(r)) {
                                var c = document.querySelectorAll("[data-runtime-id]");
                                for (s = 0; s < c.length; s++)
                                    (r = e.findAncestor(c[s], "ladi-collection-item")),
                                        isEmptyLadiPage(r) &&
                                            ((l = e.runtime.eventData[c[s].id]), isEmptyLadiPage(l) || l["option.product_type"] != n["option.product_type"] || l["option.product_id"] != n["option.product_id"] || d.push(c[s]));
                            } else d = r.querySelectorAll("[data-runtime-id]");
                            for (s = 0; s < d.length; s++)
                                if (((l = e.runtime.eventData[d[s].id]), !isEmptyLadiPage(l) && !isEmptyLadiPage(l["option.product_mapping_name"]))) {
                                    var u = d[s].getElementsByClassName("ladi-gallery-view")[0],
                                        p = e.getOptimizeImage(o, u.clientWidth, u.clientHeight, !0, !1, !1, t);
                                    p = 'url("' + p + '")';
                                    var m = e.getOptimizeImage(o, 0, 0, !0, !1, !1, t);
                                    m = 'url("' + m + '")';
                                    for (var g = u.getElementsByClassName("ladi-gallery-view-item"), _ = 0; _ < g.length; _++)
                                        if (p == getComputedStyle(g[_]).backgroundImage || m == getComputedStyle(g[_]).backgroundImage) {
                                            var y = (parseFloatLadiPage(g[_].getAttribute("data-index")) || 0) + 1;
                                            window.ladi(d[s].id, d[s]).index(y);
                                        }
                                }
                        }
                    }
                },
                at = function (i, a, n, o, r, d, s, l) {
                    var c = e.runtime.eventData[i];
                    if (!isEmptyLadiPage(c)) {
                        var u = c["option.product_mapping_name"],
                            p = !isEmptyLadiPage(u),
                            m = c.type,
                            g = JSON.stringify(c),
                            y = null,
                            f = null;
                        if (d) y = r.product[u];
                        else if (isEmptyLadiPage(o)) {
                            if (isEmptyLadiPage(c) || isEmptyLadiPage(c["option.product_type"]) || isEmptyLadiPage(c["option.product_id"]) || isEmptyLadiPage(u)) return;
                            var v = c["option.product_variant_id"],
                                P = !1;
                            if (
                                isEmptyLadiPage(v) &&
                                (a &&
                                    (P = !(function () {
                                        for (var t = !1, i = 0; i < _.length; i++) {
                                            var a = e.runtime.eventData[_[i]];
                                            if ("form" == a.type && a["option.product_type"] == c["option.product_type"] && a["option.product_id"] == c["option.product_id"]) {
                                                t = !0;
                                                break;
                                            }
                                        }
                                        return t;
                                    })()),
                                !isEmptyLadiPage(s))
                            ) {
                                if (c["option.product_id"] != s.target.getAttribute("data-product-id")) return;
                                var h = e.generateVariantProduct(c, !1, null, null, null, null, !0, !0, function (t) {
                                    at(i, a, n, o, r, !1, s);
                                });
                                isObjectLadiPage(h) && (v = e.getProductVariantId(s.target, h.product));
                            }
                            if (
                                g ===
                                (y = (f = e.generateProductKey(!0, g, !0, c, P, v, o, function (t) {
                                    at(i, a, n, o, r, d, s);
                                })).value)
                            )
                                return;
                        } else {
                            if ("form" == m && c["option.is_add_to_cart"]) return (c["option.product_id"] = o.product_id), (c["option.product_variant_id"] = o.product_variant_id), void et(i, m, !1, !0);
                            if (!p) return;
                            y = (y = (f = e.generateProductKey(!0, null, !0, c, !1, o.product_variant_id, o)).value) || "";
                        }
                        var L = null,
                            E = null,
                            b = null;
                        if ("headline" == m || "paragraph" == m) {
                            var A = l ? "ladi-html" : null;
                            window.ladi(i).value(isNullLadiPage(y) ? "" : y, A);
                        }
                        if ("image" == m) {
                            if (((L = document.getElementById(i)), isEmptyLadiPage(L))) return;
                            (b = e.getOptimizeImage(y, L.clientWidth, L.clientHeight, !0, !1, !1, t)), (E = "style_add_to_cart_image_" + i);
                            var w = "";
                            (w = isEmptyLadiPage(b) ? "#" + i + "  > .ladi-image > .ladi-image-background {background-image: none;}" : "#" + i + '  > .ladi-image > .ladi-image-background {background-image: url("' + b + '");}'),
                                e.createStyleElement(E, w);
                        }
                        if ("gallery" == m) {
                            if (!isArrayLadiPage(y)) return;
                            if (((L = document.getElementById(i)), isEmptyLadiPage(L))) return;
                            if (n && "true" == L.getAttribute("data-loaded")) return void it(L, f, c);
                            for (var T = L.getElementsByClassName("ladi-gallery-view")[0], S = L.getElementsByClassName("ladi-gallery-view-item"); S.length < y.length; ) {
                                var O = e.createTmpElement("div", '<div class="ladi-gallery-view-item" data-index="' + S.length + '"></div>', null, !0);
                                L.getElementsByClassName("ladi-gallery-view")[0].appendChild(O);
                            }
                            for (; S.length > y.length; ) S[S.length - 1].parentElement.removeChild(S[S.length - 1]);
                            for (
                                var C = L.getElementsByClassName("ladi-gallery-control-item"),
                                    N = function (t) {
                                        j(t, L);
                                    };
                                C.length < y.length;

                            ) {
                                var I = e.createTmpElement("div", '<div class="ladi-gallery-control-item" data-index="' + C.length + '"></div>', null, !0);
                                I.addEventListener("click", N), L.getElementsByClassName("ladi-gallery-control-box")[0].appendChild(I);
                            }
                            for (; C.length > y.length; ) C[C.length - 1].parentElement.removeChild(C[C.length - 1]);
                            E = "style_add_to_cart_gallery_" + i;
                            var k = "";
                            y.length <= 1 &&
                                ((k += "#" + i + " .ladi-gallery .ladi-gallery-view .ladi-gallery-view-arrow {display: none;}"),
                                (k += "#" + i + " > .ladi-gallery > .ladi-gallery-view {height: 100%;}"),
                                (k += "#" + i + " > .ladi-gallery > .ladi-gallery-control {display: none;}"));
                            var x = L.getElementsByClassName("ladi-gallery-control-item")[0];
                            y.forEach(function (a, n) {
                                (b = e.getOptimizeImage(a.src, T.clientWidth, T.clientHeight, !0, !1, !1, t)),
                                    (k += "#" + i + ' .ladi-gallery .ladi-gallery-view-item[data-index="' + n + '"] {background-image: url("' + b + '");}'),
                                    (b = e.getOptimizeImage(a.src, x.clientWidth, x.clientHeight, !0, !1, !1, t)),
                                    (k += "#" + i + ' .ladi-gallery .ladi-gallery-control-item[data-index="' + n + '"] {background-image: url("' + b + '");}');
                            }),
                                L.setAttribute("data-max-item", y.length),
                                L.setAttribute("data-loaded", !0),
                                e.createStyleElement(E, k);
                        }
                    }
                },
                nt = function (t) {
                    var i = { type: "POPUPX", iframe_id: e.runtime.tmp.popupx_iframe_id };
                    Object.keys(t).forEach(function (e) {
                        i[e] = t[e];
                    }),
                        e.postMessageWindow(window.parent, i, "*");
                },
                ot = function (t) {
                    if (!e.runtime.tmp.popupx_is_desktop && !isEmptyLadiPage(t)) {
                        var i = parseFloatLadiPage(t);
                        (window.innerWidth = i), (window.outerWidth = i), (window.ladi_screen_width = i), isFunctionLadiPage(window.ladi_viewport) && window.ladi_viewport();
                    }
                },
                rt = function (t, i, a, n) {
                    var o = isEmptyLadiPage(e.runtime.tmp.popupx_current_element_id);
                    (e.runtime.tmp.popupx_current_element_id = t), !i || o || a || n || C("PageView", {});
                },
                dt = function (t, i) {
                    for (var a = !1, n = !1, o = document.querySelectorAll("#" + e.runtime.builder_section_popup_id + " .ladi-container > .ladi-element"), r = 0; r < o.length; r++)
                        "none" != getComputedStyle(o[r]).display && (o[r].id == t && (a = !0), e.runRemovePopup(o[r].id, !0, null, !1, !0));
                    for (o = document.querySelectorAll(".ladi-section:not(#" + e.runtime.builder_section_popup_id + ")"), r = 0; r < o.length; r++)
                        "none" != getComputedStyle(o[r]).display && (o[r].id == t && (n = !0), window.ladi(o[r].id).hide(!0));
                    return { isCurrentPopup: a, isCurrentSection: n };
                },
                st = function (t, i, a) {
                    var n = e.runtime.eventData[t],
                        o = document.getElementById(t),
                        r = null,
                        d = null,
                        s = !1,
                        l = !1,
                        c = { width_device: e.runtime.desktop_width },
                        u = document.getElementById("style_container_desktop");
                    if (((isEmptyLadiPage(u) || "print" == u.getAttribute("media")) && (c = { width_device: e.runtime.mobile_width }), !isEmptyLadiPage(n) && !isEmptyLadiPage(o))) {
                        var p = getComputedStyle(o);
                        if ("popup" == n.type) {
                            r = {};
                            var m = n[e.runtime.device + ".option.popup_position"],
                                g = !1;
                            if ((isObjectLadiPage(a) && !isNullLadiPage(a.formThankyouPopupXInline) && (g = a.formThankyouPopupXInline), g))
                                return (
                                    m == e.const.POSITION_TYPE.default
                                        ? nt({
                                              group_id: e.runtime.tmp.popupx_iframe_id,
                                              popupx_url: window.location.origin + window.location.pathname,
                                              ladipage_id: e.runtime.ladipage_id,
                                              action_type: "show_popupx",
                                              action_value: t,
                                              action: { type: "run_action_force" },
                                          })
                                        : lt(t, i),
                                    !0
                                );
                            (s = (d = dt(t)).isCurrentPopup), (l = d.isCurrentSection);
                            ["width", "height", "position", "margin", "top", "left", "bottom", "right", "z-index"].forEach(function (t) {
                                r[t] = p[t];
                            }),
                                ot(r.width),
                                (c.width = r.width);
                            var _ = n[e.runtime.device + ".option.popup_backdrop"];
                            return nt({ id: t, position: m, data_backdrop: _, data_scale: c, is_opacity: !s, set_scroll_popup: !0, dimension: r, action: { type: "set_iframe_dimension" } }), window.ladi(t).show(!0), rt(t, i, s, l), !0;
                        }
                        if ("section" == n.type) {
                            if (((s = (d = dt(t)).isCurrentPopup), (l = d.isCurrentSection), n[e.runtime.device + ".option.sticky"])) {
                                r = { height: p.height };
                                var y = o.getElementsByClassName("ladi-container")[0],
                                    f = getComputedStyle(y);
                                ot(f.width),
                                    (c.width = f.width),
                                    (c.is_sticky_bar = !0),
                                    nt({ id: t, data_scale: c, dimension: r, element: n, device: e.runtime.device, action: { type: "set_iframe_sticky" } }),
                                    window.ladi(t).show(!0),
                                    rt(t, i, s, l);
                            }
                            return !0;
                        }
                    }
                    return !1;
                },
                lt = function (t, i) {
                    var a = e.runtime.eventData[t],
                        n = document.getElementById(t),
                        o = null;
                    if (!isEmptyLadiPage(a) && !isEmptyLadiPage(n)) {
                        var r = getComputedStyle(n),
                            d = dt(t),
                            s = d.isCurrentPopup,
                            l = d.isCurrentSection,
                            c = { width_device: e.runtime.desktop_width },
                            u = document.getElementById("style_container_desktop");
                        if (
                            ((isEmptyLadiPage(u) || "print" == u.getAttribute("media")) && (c = { width_device: e.runtime.mobile_width }),
                            (o = { width: r.width, height: r.height }),
                            "popup" == a.type && (c.width = o.width),
                            "section" == a.type)
                        ) {
                            var p = n.getElementsByClassName("ladi-container")[0],
                                m = getComputedStyle(p);
                            (o.width = m.width), (c.width = m.width), (c.is_sticky_bar = !0);
                        }
                        return ot(o.width), nt({ id: t, data_scale: c, dimension: o, action: { type: "set_iframe_dimension" } }), window.ladi(t).show(!0), rt(t, i, s, l), !0;
                    }
                    return !1;
                },
                ct = function (t) {
                    for (var e = ["style_element_desktop", "style_container_desktop", "style_ladi_media_desktop"], i = ["style_element_mobile", "style_container_mobile", "style_ladi_media_mobile"], a = 0; a < e.length; a++) {
                        var n = document.getElementById(e[a]);
                        isEmptyLadiPage(n) || (t ? n.removeAttribute("media") : n.setAttribute("media", "print"));
                    }
                    for (a = 0; a < i.length; a++) {
                        var o = document.getElementById(i[a]);
                        isEmptyLadiPage(o) || (t ? o.setAttribute("media", "print") : o.removeAttribute("media"));
                    }
                },
                ut = function () {
                    var i;
                    e.changeTotalPriceCart(),
                        e.runtime.tmp.generateLadiSaleProduct(!0),
                        e.runtime.shopping && e.createCartData(),
                        e.loadDataset(null, null, null, null, null, !0, t),
                        _.forEach(function (i) {
                            var a = e.runtime.eventData[i],
                                n = LadiPageApp[a.type + e.const.APP_RUNTIME_PREFIX];
                            isEmptyLadiPage(n)
                                ? ((function (t, i, a, n, o, r) {
                                      var d = document.getElementById(t);
                                      if (!isEmptyLadiPage(d) && (R(t), "section" == i && !isEmptyLadiPage(o) && !isEmptyLadiPage(r))) {
                                          var s = d.getElementsByClassName("ladi-section-background")[0];
                                          isEmptyLadiPage(s) ||
                                              (e.runtime.list_scroll_func[t] = function () {
                                                  if ((!e.runtime.isDesktop || a == e.const.BACKGROUND_STYLE.video) && (e.runtime.isDesktop || n == e.const.BACKGROUND_STYLE.video)) {
                                                      var i = "",
                                                          d = t + "_background_video";
                                                      o == e.const.VIDEO_TYPE.youtube &&
                                                          ((i =
                                                              '<iframe id="' +
                                                              d +
                                                              '" class="ladi-section-background-video" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>'),
                                                          (s.innerHTML += i),
                                                          e.runEventPlayVideo(d, o, r, !0, !0, !1)),
                                                          o == e.const.VIDEO_TYPE.direct &&
                                                              ((i = '<video id="' + d + '" class="ladi-section-background-video" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;"></video>'),
                                                              (s.innerHTML += i),
                                                              e.runEventPlayVideo(d, o, r, !0, !0, !1));
                                                  }
                                              });
                                      }
                                  })(i, a.type, a[e.const.DESKTOP + ".option.background-style"], a[e.const.MOBILE + ".option.background-style"], a["option.background_video.video_type"], a["option.background_video.video_value"]),
                                  x(null, i, a.type, a),
                                  (function (t, i, a) {
                                      e.runtime.list_loaded_func.push(function () {
                                          var n = 0;
                                          if ((-1 != ["headline", "paragraph", "list_paragraph"].indexOf(i) && (n = 1e3), !isArrayLadiPage(a))) {
                                              var o = e.copy(a);
                                              (a = []), isObjectLadiPage(o) && ((o.action_type = e.const.ACTION_TYPE.action), a.push(o));
                                          }
                                          e.runTimeout(function () {
                                              a.forEach(function (i) {
                                                  if (
                                                      i.action_type == e.const.ACTION_TYPE.action &&
                                                      i.type == e.const.DATA_ACTION_TYPE.collapse &&
                                                      !isEmptyLadiPage(i.action) &&
                                                      (isNullLadiPage(i.collapse_start_is_show) || !i.collapse_start_is_show)
                                                  ) {
                                                      window.ladi(i.action).collapse(!1);
                                                      for (var a = document.querySelectorAll("#" + t + " > .ladi-frame > .ladi-element.ladi-accordion-shape"), n = 0; n < a.length; n++) {
                                                          var o = e.getSource2ndClick(a[n].id);
                                                          isEmptyLadiPage(o) || window.ladi(a[n].id, a[n]).set_value_2nd(o);
                                                      }
                                                  }
                                              });
                                          }, n);
                                      });
                                  })(i, a.type, a["option.data_event"] || a["option.data_action"]),
                                  D(null, i, a.type, a["option.data_event"] || a["option.data_hover"]),
                                  (function (t, i, a, n, o, r, d) {
                                      if ("video" == i && !isEmptyLadiPage(a)) {
                                          var s = document.getElementById(t);
                                          if (!isEmptyLadiPage(s)) {
                                              var l = function () {
                                                      var i = e.runtime.eventData[t];
                                                      isEmptyLadiPage(i) || ((n = i["option.video_type"]), (a = i["option.video_value"]), (o = i["option.video_control"]));
                                                  },
                                                  c = (e.runtime.isDesktop && r) || (!e.runtime.isDesktop && d);
                                              if (c) {
                                                  var u = function () {
                                                          l(), e.playVideo(t, n, a, o, c);
                                                      },
                                                      p = e.findAncestor(s, "ladi-popup");
                                                  isEmptyLadiPage(p)
                                                      ? (e.runtime.list_scroll_func[t] = u)
                                                      : ((p = e.findAncestor(p, "ladi-element")),
                                                        isArrayLadiPage(e.runtime.list_show_popup_func[p.id]) || (e.runtime.list_show_popup_func[p.id] = []),
                                                        e.runtime.list_show_popup_func[p.id].push(u));
                                              } else {
                                                  var m = document.querySelectorAll("#" + t + ".preload").length > 0;
                                                  m && e.playVideo(t, n, a, o, !1, m);
                                              }
                                              s.addEventListener("click", function (i) {
                                                  i.stopPropagation(), l(), (n == e.const.VIDEO_TYPE.direct && "VIDEO" == i.target.tagName) || (n == e.const.VIDEO_TYPE.youtube && "IFRAME" == i.target.tagName) || e.playVideo(t, n, a, o);
                                              });
                                          }
                                      }
                                  })(i, a.type, a["option.video_value"], a["option.video_type"], a["option.video_control"], a[e.const.DESKTOP + ".option.video_autoplay"], a[e.const.MOBILE + ".option.video_autoplay"]),
                                  (function (t, i, a, n) {
                                      "popup" == i &&
                                          a &&
                                          ((isEmptyLadiPage(n) || n < 0) && (n = 0),
                                          e.runTimeout(function () {
                                              window.ladi(t).show();
                                          }, 1e3 * n));
                                  })(i, a.type, a["option.show_popup_welcome_page"], a["option.delay_popup_welcome_page"]),
                                  F(i, null, a.type, a["option.countdown_type"], a["option.countdown_minute"], a["option.countdown_daily_start"], a["option.countdown_daily_end"], a["option.countdown_endtime"]),
                                  q(i, null, a.type, a["option.countdown_item_type"]),
                                  (function (t, i, a, n) {
                                      if ("section" == i) {
                                          var o = document.getElementById(t);
                                          if (!isEmptyLadiPage(o)) {
                                              var r = o.getElementsByClassName("ladi-section-arrow-down")[0];
                                              y.push(function () {
                                                  if (isEmptyLadiPage(r)) {
                                                      if (e.runtime.isDesktop) {
                                                          if (isEmptyLadiPage(a)) return void o.removeAttribute("data-opacity");
                                                          var t = (parseFloatLadiPage(a) || 0) + 50;
                                                          if (t > o.clientHeight) return void o.removeAttribute("data-opacity");
                                                          o.setAttribute("data-height", o.clientHeight), o.style.setProperty("height", t + "px"), o.classList.add("overflow-hidden");
                                                      } else {
                                                          if (isEmptyLadiPage(n)) return void o.removeAttribute("data-opacity");
                                                          var i = (parseFloatLadiPage(n) || 0) + 50;
                                                          if (i > o.clientHeight) return void o.removeAttribute("data-opacity");
                                                          o.setAttribute("data-height", o.clientHeight), o.style.setProperty("height", i + "px"), o.classList.add("overflow-hidden");
                                                      }
                                                      ((r = document.createElement("div")).className = "ladi-section-arrow-down"),
                                                          o.appendChild(r),
                                                          o.removeAttribute("data-opacity"),
                                                          r.addEventListener("click", function (t) {
                                                              t.stopPropagation(),
                                                                  o.classList.add("transition-readmore"),
                                                                  o.style.removeProperty("height"),
                                                                  r.parentElement.removeChild(r),
                                                                  e.runTimeout(function () {
                                                                      o.classList.remove("transition-readmore"),
                                                                          o.classList.remove("overflow-hidden"),
                                                                          o.clientHeight != o.getAttribute("data-height") && o.style.setProperty("height", o.getAttribute("data-height") + "px"),
                                                                          o.removeAttribute("data-height"),
                                                                          e.runTimeout(e.removeSticky, 100);
                                                                  }, 1e3 * parseFloatLadiPage(getComputedStyle(o).transitionDuration));
                                                          });
                                                  }
                                              });
                                          }
                                      }
                                  })(i, a.type, a[e.const.DESKTOP + ".option.readmore_range"], a[e.const.MOBILE + ".option.readmore_range"]),
                                  (function (t, i, a) {
                                      if ("form_item" == i) {
                                          var n = null,
                                              o = null;
                                          if ((a == e.const.INPUT_TYPE.select || a == e.const.INPUT_TYPE.select_multiple) && ((n = document.getElementById(t)), !isEmptyLadiPage(n)))
                                              for (var r = n.getElementsByClassName("ladi-form-control"), d = 0; d < r.length; d++)
                                                  r[d].addEventListener("change", function (t) {
                                                      t.target.setAttribute("data-selected", t.target.value);
                                                  });
                                          if (a == e.const.INPUT_TYPE.checkbox) {
                                              n = document.getElementById(t);
                                              var s = function (t) {
                                                      t.stopPropagation();
                                                      var i = e.findAncestor(t.target, "ladi-form-checkbox-item");
                                                      isEmptyLadiPage(i) || i.getElementsByTagName("span")[0].setAttribute("data-checked", t.target.checked);
                                                  },
                                                  l = function (t) {
                                                      t.stopPropagation();
                                                      var i = e.findAncestor(t.target, "ladi-form-checkbox-item");
                                                      isEmptyLadiPage(i) || i.getElementsByTagName("input")[0].click();
                                                  };
                                              if (!isEmptyLadiPage(n)) {
                                                  o = n.getElementsByClassName("ladi-form-checkbox-item");
                                                  for (var c = 0; c < o.length; c++) {
                                                      var u = o[c].getElementsByTagName("input")[0];
                                                      o[c].getElementsByTagName("span")[0].addEventListener("click", l), u.addEventListener("change", s);
                                                  }
                                              }
                                          }
                                          if (a == e.const.INPUT_TYPE.radio) {
                                              n = document.getElementById(t);
                                              var p = function (t) {
                                                      var i = e.findAncestor(t.target, "ladi-form-checkbox-item"),
                                                          a = e.findAncestor(i, "ladi-form-checkbox");
                                                      if (!isEmptyLadiPage(a)) {
                                                          for (var n = a.querySelectorAll(".ladi-form-checkbox-item span"), o = 0; o < n.length; o++) n[o].setAttribute("data-checked", !1);
                                                          isEmptyLadiPage(i) || i.getElementsByTagName("span")[0].setAttribute("data-checked", t.target.checked);
                                                      }
                                                  },
                                                  m = function (t) {
                                                      t.stopPropagation();
                                                      var i = e.findAncestor(t.target, "ladi-form-checkbox-item");
                                                      isEmptyLadiPage(i) || i.getElementsByTagName("input")[0].click();
                                                  };
                                              if (!isEmptyLadiPage(n)) {
                                                  o = n.getElementsByClassName("ladi-form-checkbox-item");
                                                  for (var g = 0; g < o.length; g++) {
                                                      var _ = o[g].getElementsByTagName("input")[0];
                                                      o[g].getElementsByTagName("span")[0].addEventListener("click", m), _.addEventListener("change", p);
                                                  }
                                              }
                                          }
                                      }
                                  })(i, a.type, a["option.input_type"]),
                                  H(i, null, !1, a.type),
                                  e.startAutoScroll(i, a.type, a[e.const.DESKTOP + ".option.auto_scroll"], a[e.const.MOBILE + ".option.auto_scroll"]),
                                  et(i, a.type, !0, !1),
                                  (function (t, i) {
                                      if ("form" == i) {
                                          var a = document.getElementById(t);
                                          if (!isEmptyLadiPage(a)) {
                                              var n = a.querySelector('input[name="quantity"]');
                                              if (!isEmptyLadiPage(n)) {
                                                  var o = function (i) {
                                                      if (!isEmptyLadiPage(i.target.value)) {
                                                          var a = e.runtime.eventData[t];
                                                          if (!isEmptyLadiPage(a) && a["option.is_add_to_cart"]) {
                                                              var n = e.generateVariantProduct(a, !1, null, null, null, null, !0, !0, function () {
                                                                  o(i);
                                                              });
                                                              if (!(isEmptyLadiPage(n) || isEmptyLadiPage(n.store_info) || isEmptyLadiPage(n.product))) {
                                                                  var r = e.getProductVariantIndex(t, a);
                                                                  if (-1 != r) {
                                                                      var d = n.product.variants[r].quantity,
                                                                          s = n.product.variants[r].quantity_stock;
                                                                      d = isNullLadiPage(s) ? d : s;
                                                                      var l = parseInt(i.target.value) || 0,
                                                                          c = 1;
                                                                      c = n.product.variants[r].min_buy || c;
                                                                      var u = n.product.variants[r].max_buy,
                                                                          p = 0,
                                                                          m = e.runtime.tmp.cart.findIndex(function (t) {
                                                                              return t.product_id == n.product.variants[r].product_id && t.product_variant_id == n.product.variants[r].product_variant_id;
                                                                          });
                                                                      -1 != m && (p = e.runtime.tmp.cart[m].quantity),
                                                                          c > l + p && (l = c - p),
                                                                          1 == n.product.variants[r].inventory_checked && l + p > d && (l = d - p),
                                                                          !isEmptyLadiPage(u) && l + p > u && (l = u - p),
                                                                          (l = l < 1 ? 1 : l),
                                                                          i.target.setAttribute("min", c),
                                                                          isEmptyLadiPage(u) || i.target.setAttribute("max", u),
                                                                          (i.target.value = l);
                                                                  }
                                                              }
                                                          }
                                                      }
                                                  };
                                                  n.addEventListener("input", o), e.fireEvent(n, "input");
                                                  var r = a.querySelectorAll(".button")[0],
                                                      d = a.querySelectorAll(".button")[1];
                                                  isEmptyLadiPage(r) ||
                                                      isEmptyLadiPage(d) ||
                                                      (r.addEventListener("click", function (t) {
                                                          (n.value = (parseFloatLadiPage(n.value) || 0) - 1), e.fireEvent(n, "input");
                                                      }),
                                                      d.addEventListener("click", function (t) {
                                                          (n.value = (parseFloatLadiPage(n.value) || 0) + 1), e.fireEvent(n, "input");
                                                      }));
                                              }
                                          }
                                      }
                                  })(i, a.type),
                                  (function (t, i) {
                                      if ("collection" == i) {
                                          var a = document.getElementById(t);
                                          if (!isEmptyLadiPage(a)) {
                                              var n = e.runtime.eventData[t];
                                              if (!isEmptyLadiPage(n)) {
                                                  var o = n["option.collection_setting.type"],
                                                      r = a.getElementsByClassName("ladi-collection")[0];
                                                  if (o == e.const.COLLECTION_TYPE.carousel) {
                                                      r.classList.add("carousel");
                                                      var d = document.createElement("div");
                                                      d.className = "ladi-collection-arrow ladi-collection-arrow-left opacity-0";
                                                      var s = document.createElement("div");
                                                      (s.className = "ladi-collection-arrow ladi-collection-arrow-right opacity-0"),
                                                          r.appendChild(d),
                                                          r.appendChild(s),
                                                          d.addEventListener("click", function (i) {
                                                              i.stopPropagation();
                                                              var o = parseFloatLadiPage(a.getAttribute("data-page")) || 1;
                                                              (o = (o -= 1) < 1 ? 1 : o), e.loadCollectionData(t, n, o, !1);
                                                          }),
                                                          s.addEventListener("click", function (i) {
                                                              i.stopPropagation();
                                                              var o = parseFloatLadiPage(a.getAttribute("data-page")) || 1;
                                                              if (((o += 1), a.hasAttribute("data-max-page"))) {
                                                                  var r = parseFloatLadiPage(a.getAttribute("data-max-page")) || 1;
                                                                  o = o > r ? r : o;
                                                              }
                                                              e.loadCollectionData(t, n, o, !1);
                                                          });
                                                  }
                                                  if (o == e.const.COLLECTION_TYPE.readmore) {
                                                      r.classList.add("readmore");
                                                      var l = document.createElement("div");
                                                      (l.className = "ladi-collection-button-next opacity-0"),
                                                          r.appendChild(l),
                                                          l.addEventListener("click", function (i) {
                                                              i.stopPropagation();
                                                              var o = parseFloatLadiPage(a.getAttribute("data-page")) || 1;
                                                              if (((o += 1), a.hasAttribute("data-max-page"))) {
                                                                  var r = parseFloatLadiPage(a.getAttribute("data-max-page")) || 1;
                                                                  o = o > r ? r : o;
                                                              }
                                                              e.loadCollectionData(t, n, o, !1, !0);
                                                          });
                                                  }
                                                  e.loadCollectionData(t, n, 1, !0);
                                              }
                                          }
                                      }
                                  })(i, a.type),
                                  (function (t, i, a, n) {
                                      if ("survey" == i) {
                                          var o = document.getElementById(t);
                                          if (!isEmptyLadiPage(o)) {
                                              a && o.setAttribute("data-multiple", !0);
                                              for (
                                                  var r,
                                                      d = o.getElementsByClassName("ladi-survey-select-item")[0],
                                                      s = o.getElementsByClassName("ladi-survey-radio-item"),
                                                      l = o.getElementsByClassName("ladi-survey-checkbox-item"),
                                                      c = o.getElementsByClassName("ladi-survey-option"),
                                                      u = o.querySelector(".ladi-survey-button-next button"),
                                                      p = [],
                                                      m = n.mapping_form_name,
                                                      g = n.mapping_form_id,
                                                      _ = n.input_name,
                                                      y = e.findAncestor(o, ["ladi-form", "ladi-element"]),
                                                      f = e.runtime.eventData[t]["option.data_event"],
                                                      v = function () {
                                                          var i = window.ladi(t).value(),
                                                              n = m || "";
                                                          g.forEach(function (t) {
                                                              var o = document.getElementById(t);
                                                              if (!isEmptyLadiPage(o)) {
                                                                  for (var r = null; 0 != (r = o.querySelectorAll('.ladi-form-item-survey[data-name="' + n + '"]')).length; ) r[0].parentElement.removeChild(r[0]);
                                                                  var d = [],
                                                                      s = o.querySelectorAll(".ladi-element .ladi-form-item-container [name]"),
                                                                      l = null,
                                                                      c = 0;
                                                                  for (w = 0; w < s.length; w++) {
                                                                      s[w].getAttribute("name") == n && ((l = e.findAncestor(s[w], "ladi-element")), d.push(l.id));
                                                                      var u = parseFloatLadiPage(s[w].getAttribute("tabindex")) || 0;
                                                                      u > c && (c = u);
                                                                  }
                                                                  if (0 == (d = d.unique()).length) {
                                                                      c++, ((l = document.createElement("div")).className = "ladi-element ladi-hidden ladi-form-item-survey"), (l.id = e.randomString(10)), l.setAttribute("data-name", n);
                                                                      var m = "";
                                                                      if (((m += '<div class="ladi-form-item-container">'), (m += '   <div class="ladi-form-item-background"></div>'), a)) {
                                                                          (m += '   <div class="ladi-form-item ladi-form-checkbox ladi-form-checkbox-vertical">'), (m += '       <div class="ladi-form-checkbox-box-item">');
                                                                          for (var g = 0; g < p.length; g++)
                                                                              m +=
                                                                                  '       <div class="ladi-form-checkbox-item"><input tabindex="' +
                                                                                  c +
                                                                                  '" name="' +
                                                                                  n +
                                                                                  '" type="checkbox" value="' +
                                                                                  p[g] +
                                                                                  '"><span data-checked="false">' +
                                                                                  p[g] +
                                                                                  "</span></div>";
                                                                          (m += "       </div>"), (m += "   </div>");
                                                                      } else
                                                                          (m += '   <div class="ladi-form-item">'),
                                                                              (m += '       <input autocomplete="off" tabindex="' + c + '" name="' + n + '" class="ladi-form-control" type="text">'),
                                                                              (m += "   </div>");
                                                                      (m += "</div>"), (l.innerHTML = m), o.getElementsByClassName("ladi-form")[0].appendChild(l), d.push(l.id);
                                                                  }
                                                                  for (w = 0; w < d.length; w++) window.ladi(d[w]).value(i);
                                                              }
                                                          });
                                                      },
                                                      P = function () {
                                                          for (var t = !1, e = 0; e < c.length; e++)
                                                              if (c[e].classList.contains("selected")) {
                                                                  t = !0;
                                                                  break;
                                                              }
                                                          return t;
                                                      },
                                                      h = function () {
                                                          if (!(!isEmptyLadiPage(d) || s.length > 0 || l.length > 0)) {
                                                              for (var t = [], i = 0; i < c.length; i++) c[i].classList.contains("selected") && t.push(c[i].getAttribute("data-value"));
                                                              for (var n = null; 0 != (n = y.querySelectorAll('.ladi-form-item-survey[data-name="' + _ + '"]')).length; ) n[0].parentElement.removeChild(n[0]);
                                                              var r = document.createElement("div");
                                                              (r.className = "ladi-element ladi-hidden ladi-form-item-survey"), (r.id = e.randomString(10)), r.setAttribute("data-name", _);
                                                              var u = o.getAttribute("data-tabindex"),
                                                                  m = "";
                                                              if (((m += '<div class="ladi-form-item-container">'), (m += '   <div class="ladi-form-item-background"></div>'), a)) {
                                                                  (m += '   <div class="ladi-form-item ladi-form-checkbox ladi-form-checkbox-vertical">'), (m += '       <div class="ladi-form-checkbox-box-item">');
                                                                  for (var g = 0; g < p.length; g++)
                                                                      m +=
                                                                          '       <div class="ladi-form-checkbox-item"><input tabindex="' +
                                                                          u +
                                                                          '" name="' +
                                                                          _ +
                                                                          '" type="checkbox" value="' +
                                                                          p[g] +
                                                                          '"><span data-checked="false">' +
                                                                          p[g] +
                                                                          "</span></div>";
                                                                  (m += "       </div>"), (m += "   </div>");
                                                              } else
                                                                  (m += '   <div class="ladi-form-item">'),
                                                                      (m += '       <input autocomplete="off" tabindex="' + u + '" name="' + _ + '" class="ladi-form-control" type="text">'),
                                                                      (m += "   </div>");
                                                              (m += "</div>"), (r.innerHTML = m), y.getElementsByClassName("ladi-form")[0].appendChild(r), window.ladi(r.id).value(a ? t : t[0]);
                                                          }
                                                      },
                                                      L = function () {
                                                          P() && I(o, f), v();
                                                      },
                                                      E = function (t) {
                                                          e.tapEventListener(t, function (e) {
                                                              if ((e.stopPropagation(), a)) t.classList.contains("selected") ? t.classList.remove("selected") : t.classList.add("selected");
                                                              else
                                                                  for (var i = t.parentElement.getElementsByClassName("ladi-survey-option"), n = 0; n < i.length; n++)
                                                                      i[n] === t ? i[n].classList.add("selected") : i[n].classList.remove("selected");
                                                              isEmptyLadiPage(y) ? (A(), isEmptyLadiPage(u) && L()) : h();
                                                          });
                                                      },
                                                      b = function (t) {
                                                          var e = t.getElementsByTagName("input")[0],
                                                              i = t.getElementsByTagName("span")[0];
                                                          isEmptyLadiPage(e) ||
                                                              e.addEventListener("change", function (t) {
                                                                  isEmptyLadiPage(i) || i.setAttribute("data-checked", t.target.checked);
                                                              }),
                                                              isEmptyLadiPage(i) ||
                                                                  i.addEventListener("click", function (t) {
                                                                      t.stopPropagation(), isEmptyLadiPage(e) || e.click();
                                                                  });
                                                      },
                                                      A = function () {
                                                          isEmptyLadiPage(u) || (P() ? u.parentElement.classList.remove("no-select") : u.parentElement.classList.add("no-select"));
                                                      },
                                                      w = 0;
                                                  w < c.length;
                                                  w++
                                              )
                                                  p.push(c[w].getAttribute("data-value")), E(c[w]);
                                              for (
                                                  isEmptyLadiPage(d) ||
                                                      d.addEventListener("change", function (t) {
                                                          t.target.setAttribute("data-selected", t.target.value);
                                                      }),
                                                      w = 0;
                                                  w < s.length;
                                                  w++
                                              )
                                                  p.push(s[w].getElementsByTagName("input")[0].value), b(s[w]);
                                              for (w = 0; w < l.length; w++) p.push(l[w].getElementsByTagName("input")[0].value), (r = l[w]), b(r);
                                              if (isEmptyLadiPage(y)) {
                                                  if (!isArrayLadiPage(f)) {
                                                      var T = e.copy(n);
                                                      if (((f = []), isObjectLadiPage(T) && !isEmptyLadiPage(T.value))) {
                                                          if (
                                                              ((T.type != e.const.DATA_ACTION_TYPE.section && T.type != e.const.DATA_ACTION_TYPE.popup) || f.push({ action_type: e.const.ACTION_TYPE.complete, type: T.type, action: T.value }),
                                                              (T.type == e.const.DATA_ACTION_TYPE.section && T.is_hide_parent) || T.type == e.const.DATA_ACTION_TYPE.popup)
                                                          ) {
                                                              var S = e.findAncestor(o, "ladi-popup"),
                                                                  O = e.findAncestor(o, "ladi-section"),
                                                                  C = null;
                                                              isEmptyLadiPage(S) ? isEmptyLadiPage(O) || (C = O.id) : (C = (S = e.findAncestor(S, "ladi-element")).id),
                                                                  isEmptyLadiPage(C) || f.push({ action_type: e.const.ACTION_TYPE.complete, type: e.const.DATA_ACTION_TYPE.hidden_show, hidden_ids: [C], show_ids: [] });
                                                          }
                                                          T.type == e.const.DATA_ACTION_TYPE.change_index &&
                                                              f.push({ action_type: e.const.ACTION_TYPE.complete, type: T.type, action: T.value, change_index_type: T.change_index_type, change_index_number: T.change_index_number });
                                                      }
                                                  }
                                                  isEmptyLadiPage(u) ||
                                                      u.addEventListener("click", function (t) {
                                                          t.stopPropagation(), L();
                                                      }),
                                                      A(),
                                                      e.runtime.list_loaded_func.push(v);
                                              } else h();
                                          }
                                      }
                                  })(i, a.type, a["option.survey_setting.is_multiple"], a["option.survey_setting"] || a["option.survey_setting.event"]))
                                : n(a, t).run(i, e.runtime.isDesktop);
                        }),
                        J(Date.now() + 1e3),
                        X(),
                        z(),
                        (function () {
                            for (
                                var t = document.querySelectorAll(".ladi-form .ladi-element .ladi-form-otp"),
                                    i = function (t, a) {
                                        var n = e.findAncestor(a, "ladi-form");
                                        if (!isEmptyLadiPage(n) && ((n = e.findAncestor(n, "ladi-element")), !isEmptyLadiPage(n))) {
                                            var o = "_otp_time_" + n.id,
                                                r = window.ladi(o).get_cookie(),
                                                d = e.runtime.tmp["cookie_cache_otp_" + n.id];
                                            isEmptyLadiPage(r) && isObjectLadiPage(d) && !isEmptyLadiPage(d[o]) && (r = d[o]);
                                            var s = (r = parseFloatLadiPage(r) || 0) + e.runtime.time_otp - Date.now();
                                            (s = s < e.runtime.time_otp ? s : 0),
                                                r <= 0 || s <= 0
                                                    ? (function (t) {
                                                          t.classList.add("otp-resend"), t.classList.remove("otp-countdown"), t.removeAttribute("data-countdown-time");
                                                      })(t)
                                                    : ((s = Math.ceil(s / 1e3)),
                                                      t.classList.remove("otp-resend"),
                                                      t.classList.add("otp-countdown"),
                                                      t.setAttribute("data-countdown-time", s),
                                                      e.runTimeout(function () {
                                                          i(t, a);
                                                      }, 1e3));
                                        }
                                    },
                                    a = function (t) {
                                        var a = e.findAncestor(t.target, "ladi-form");
                                        if (!isEmptyLadiPage(a) && ((a = e.findAncestor(a, "ladi-element")), !isEmptyLadiPage(a))) {
                                            var n = "_otp_time_" + a.id,
                                                o = !1,
                                                r = e.runtime.tmp["cookie_cache_otp_" + a.id],
                                                d = function () {
                                                    a.removeAttribute("data-start-countdown-otp");
                                                    var d = new Date();
                                                    d.setTime(d.getTime() + e.runtime.time_otp), o ? ((r[n] = Date.now()), (e.runtime.tmp["cookie_cache_otp_" + a.id] = r)) : window.ladi(n).set_cookie(Date.now(), d);
                                                    var s = e.findAncestor(t.target, "ladi-form-item");
                                                    e.runTimeout(function () {
                                                        i(s, t.target);
                                                    }, 1);
                                                };
                                            if ("true" != a.getAttribute("data-start-countdown-otp")) {
                                                var s = window.ladi(n).get_cookie();
                                                isEmptyLadiPage(s) && isObjectLadiPage(r) && !isEmptyLadiPage(r[n]) && ((s = r[n]), (o = !0));
                                                var l = (s = parseFloatLadiPage(s) || 0) + e.runtime.time_otp - Date.now();
                                                (l = l < e.runtime.time_otp ? l : 0),
                                                    (s <= 0 || l <= 0) &&
                                                        "true" != t.target.getAttribute("data-click") &&
                                                        isFunctionLadiPage(e.runtime.func_get_code_otp[a.id]) &&
                                                        (e.removeTimeout(e.runtime.tmp.timeout_is_wait_popup_id),
                                                        (e.runtime.tmp.is_wait_popup = !0),
                                                        e.showLoadingBlur(),
                                                        t.target.setAttribute("data-click", !0),
                                                        e.runtime.func_get_code_otp[a.id](!0, function (i) {
                                                            t.target.removeAttribute("data-click"),
                                                                e.hideLoadingBlur(),
                                                                i && d(),
                                                                (e.runtime.tmp.timeout_is_wait_popup_id = e.runTimeout(function () {
                                                                    delete e.runtime.tmp.is_wait_popup;
                                                                }, 200));
                                                        }));
                                            } else d();
                                        }
                                    },
                                    n = 0;
                                n < t.length;
                                n++
                            ) {
                                var o = t[n],
                                    r = e.findAncestor(o, "ladi-form-item");
                                if (!isEmptyLadiPage(r)) {
                                    r.classList.add("overflow-hidden");
                                    var d = r.getElementsByClassName("button-get-code")[0];
                                    isEmptyLadiPage(d) && (((d = document.createElement("div")).className = "button-get-code"), (d.innerHTML = e.const.LANG.GET_CODE_BUTTON_TEXT), d.addEventListener("click", a), r.appendChild(d)),
                                        d.classList.add("hide-visibility"),
                                        o.style.setProperty("padding-right", d.clientWidth + 5 + "px"),
                                        d.classList.remove("hide-visibility"),
                                        i(r, d);
                                }
                            }
                        })(),
                        (i = function () {
                            _.forEach(function (t) {
                                var i = e.runtime.eventData[t];
                                if ("countdown" == i.type)
                                    for (var a = document.querySelectorAll("#" + t), n = 0; n < a.length; n++) {
                                        var o = a[n],
                                            r = o.getAttribute("data-type"),
                                            d = 0,
                                            s = 0,
                                            l = Date.now();
                                        if (o.hasAttribute("data-date-start") || o.hasAttribute("data-date-end"))
                                            (d = parseFloatLadiPage(o.getAttribute("data-date-start")) || 0), (s = parseFloatLadiPage(o.getAttribute("data-date-end")) || 0);
                                        else {
                                            if (r == e.const.COUNTDOWN_TYPE.countdown) {
                                                var c = parseInt(o.getAttribute("data-minute")) || 0;
                                                if (c <= 0) return;
                                                for (s = e.runtime.timenow; s <= l; ) s += 60 * c * 1e3;
                                            }
                                            if ((r == e.const.COUNTDOWN_TYPE.endtime && (s = parseInt(o.getAttribute("data-endtime")) || 0), r == e.const.COUNTDOWN_TYPE.daily)) {
                                                var u = o.getAttribute("data-daily-start"),
                                                    p = o.getAttribute("data-daily-end");
                                                if (!isEmptyLadiPage(u) && !isEmptyLadiPage(p)) {
                                                    var m = new Date().toDateString();
                                                    (d = new Date(m + " " + u).getTime()), (s = new Date(m + " " + p).getTime());
                                                }
                                            }
                                            o.setAttribute("data-date-start", d), o.setAttribute("data-date-end", s);
                                        }
                                        if (d > l) return;
                                        var g = s - l;
                                        if (g < 0) {
                                            if (((g = 0), "true" == o.getAttribute("data-end"))) return;
                                            "true" != o.getAttribute("data-end") && (o.setAttribute("data-end", !0), I(o, i["option.data_event"]), e.runEventTracking(o.id, { is_form: !1 }));
                                        }
                                        for (var _ = e.getCountdownTime(g), y = o.querySelectorAll("[data-item-type]"), f = 0; f < y.length; f++)
                                            y[f].querySelectorAll(".ladi-countdown-text span")[0].textContent = _[y[f].getAttribute("data-item-type")];
                                    }
                            });
                        })(),
                        (e.runtime.interval_countdown = e.runInterval(i, 1e3)),
                        _.forEach(function (t) {
                            var e = document.getElementById(t);
                            isEmptyLadiPage(e) || U(t, e);
                        }),
                        (e.runtime.interval_gallery = e.runInterval(G, 1e3)),
                        _.forEach(function (t) {
                            var i = e.runtime.eventData[t];
                            if ("carousel" == i.type) {
                                var a = document.getElementById(t);
                                if (!isEmptyLadiPage(a)) {
                                    a.hasAttribute("data-scrolled") ||
                                        (a.setAttribute("data-scrolled", !1),
                                        (e.runtime.list_scroll_func[t] = function () {
                                            a.setAttribute("data-scrolled", !0);
                                        }));
                                    var n = i[e.runtime.device + ".option.carousel_setting.autoplay"],
                                        o = i[e.runtime.device + ".option.carousel_setting.autoplay_time"],
                                        r = 0;
                                    n && !isEmptyLadiPage(o) && (r = o);
                                    var d = function (i) {
                                        i.stopPropagation(),
                                            (i = e.getEventCursorData(i)),
                                            (!isEmptyLadiPage(e.runtime.timenext_carousel[t]) && e.runtime.timenext_carousel[t] > Date.now()) ||
                                                i.target.classList.contains("ladi-carousel-arrow") ||
                                                ((e.runtime.timenext_carousel[t] = Date.now() + 864e5),
                                                (e.runtime.current_element_mouse_down_carousel = t),
                                                (e.runtime.current_element_mouse_down_carousel_position_x = i.pageX),
                                                a.getElementsByClassName("ladi-carousel-content")[0].style.setProperty("transition-duration", "0ms"),
                                                a.getElementsByClassName("ladi-carousel-content")[0].setAttribute("data-left", getComputedStyle(a.getElementsByClassName("ladi-carousel-content")[0]).left));
                                    };
                                    a.getElementsByClassName("ladi-carousel-arrow-left")[0].addEventListener("click", function (e) {
                                        e.stopPropagation(),
                                            a.getElementsByClassName("ladi-carousel-content")[0].style.removeProperty("transition-duration"),
                                            a.setAttribute("data-is-next", !1),
                                            a.setAttribute("data-next-time", Date.now() + 1e3 * r),
                                            W(t, !1);
                                    }),
                                        -((parseFloatLadiPage(i[e.runtime.device + ".option.carousel_crop.width"]) || 0) - a.clientWidth) < 0 && a.getElementsByClassName("ladi-carousel-arrow-right")[0].classList.remove("opacity-0"),
                                        a.getElementsByClassName("ladi-carousel-arrow-right")[0].addEventListener("click", function (e) {
                                            e.stopPropagation(),
                                                a.getElementsByClassName("ladi-carousel-content")[0].style.removeProperty("transition-duration"),
                                                a.setAttribute("data-is-next", !0),
                                                a.setAttribute("data-next-time", Date.now() + 1e3 * r),
                                                W(t, !1);
                                        }),
                                        a.getElementsByClassName("ladi-carousel")[0].addEventListener("mousedown", d),
                                        a.getElementsByClassName("ladi-carousel")[0].addEventListener("touchstart", d, e.runtime.scrollEventPassive);
                                }
                            }
                        }),
                        (e.runtime.interval_carousel = e.runInterval(function () {
                            _.forEach(function (t) {
                                var i = e.runtime.eventData[t];
                                if ("carousel" == i.type) {
                                    var a = document.getElementById(t);
                                    if (!isEmptyLadiPage(a) && "true" == a.getAttribute("data-scrolled") && "true" != a.getAttribute("data-stop")) {
                                        var n = i[e.runtime.device + ".option.carousel_setting.autoplay"],
                                            o = i[e.runtime.device + ".option.carousel_setting.autoplay_time"],
                                            r = 0;
                                        if ((n && !isEmptyLadiPage(o) && (r = o), r > 0)) {
                                            var d = a.getAttribute("data-next-time"),
                                                s = Date.now();
                                            isEmptyLadiPage(d) && ((d = s + 1e3 * (r - 1)), a.setAttribute("data-next-time", d)), s >= d && (W(t, !0), a.setAttribute("data-next-time", s + 1e3 * r));
                                        }
                                    }
                                }
                            });
                        }, 1e3)),
                        (function () {
                            var t = ["phone", "email", "coupon"],
                                i = document.querySelectorAll(".ladi-form .ladi-button");
                            e.runtime.tmp.list_form_checkout = [];
                            for (
                                var a = function (t, i) {
                                        var a = e.findAncestor(t.target, "ladi-form");
                                        if (!isEmptyLadiPage(a) && ((a = a.querySelector("[data-submit-form-id]")), !isEmptyLadiPage(a))) {
                                            var n = a.getAttribute("data-submit-form-id");
                                            if (!isEmptyLadiPage(n)) {
                                                var o = document.querySelector("#" + n + ' .ladi-form-item input[name="coupon"]');
                                                isEmptyLadiPage(o) || ((o.value = t.target.value), e.fireEvent(o, i));
                                            }
                                        }
                                    },
                                    n = function (t) {
                                        a(t, "change");
                                    },
                                    o = function (t) {
                                        a(t, "input");
                                    },
                                    r = function (t) {
                                        if (isEmptyLadiPage(e.runtime.tmp.current_use_coupon)) {
                                            var i = e.findAncestor(t.target, "ladi-form"),
                                                a = i.querySelector('input[name="coupon"]');
                                            isEmptyLadiPage(a) || a.setAttribute("required", "required"), i.reportValidity() && e.reloadPriceDiscount(t);
                                        }
                                    },
                                    d = 0;
                                d < i.length;
                                d++
                            ) {
                                var s = e.findAncestor(i[d], "ladi-element");
                                if (!isEmptyLadiPage(s)) {
                                    var l = e.findAncestor(i[d], "ladi-form");
                                    if (!isEmptyLadiPage(l)) {
                                        var c = e.findAncestor(l, "ladi-element");
                                        if (!isEmptyLadiPage(c)) {
                                            var u = e.runtime.eventData[c.id];
                                            if (!isEmptyLadiPage(u)) {
                                                var p = e.runtime.eventData[s.id];
                                                if (isEmptyLadiPage(p) || isEmptyLadiPage(p["option.data_submit_form_id"])) {
                                                    if (!u["option.is_form_login"] && !u["option.is_form_coupon"]) {
                                                        var m = e.findAncestor(c, "ladi-popup");
                                                        isEmptyLadiPage(m) || (m = e.findAncestor(m, "ladi-element")), isEmptyLadiPage(m) || "POPUP_CHECKOUT" != m.id || e.runtime.tmp.list_form_checkout.push(c.id);
                                                    }
                                                } else if (u["option.is_form_coupon"]) {
                                                    s.setAttribute("data-submit-form-id", p["option.data_submit_form_id"]),
                                                        s.addEventListener("click", r),
                                                        (l.onsubmit = function () {
                                                            return !1;
                                                        });
                                                    var g = l.querySelector('.ladi-form-item input[name="coupon"]');
                                                    if (!isEmptyLadiPage(g)) {
                                                        g.addEventListener("change", n), g.addEventListener("input", o);
                                                        var _ = document.querySelector("#" + p["option.data_submit_form_id"] + ' .ladi-form-item input[name="coupon"]');
                                                        isEmptyLadiPage(_) || _.setAttribute("data-replace-coupon", !0);
                                                    }
                                                    e.runtime.tmp.list_form_checkout.push(p["option.data_submit_form_id"]);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            e.runtime.tmp.list_form_checkout = e.runtime.tmp.list_form_checkout.unique();
                            for (
                                var y = function (t) {
                                        -1 == [e.const.FORM_CONFIG_TYPE.sapo, e.const.FORM_CONFIG_TYPE.haravan, e.const.FORM_CONFIG_TYPE.shopify, e.const.FORM_CONFIG_TYPE.wordpress].indexOf(e.runtime.shopping_product_type) &&
                                            e.reloadPriceDiscount();
                                    },
                                    f = 0;
                                f < e.runtime.tmp.list_form_checkout.length;
                                f++
                            )
                                for (var v = document.querySelectorAll("#" + e.runtime.tmp.list_form_checkout[f] + " .ladi-form-item input.ladi-form-control"), P = 0; P < v.length; P++)
                                    -1 != t.indexOf(v[P].getAttribute("name")) && (v[P].addEventListener("change", y), v[P].addEventListener("input", y));
                        })(),
                        B(),
                        t &&
                            (e.runtime.is_popupx ||
                                e.const.TIME_ONPAGE_TRACKING.forEach(function (t) {
                                    e.runTimeout(function () {
                                        isFunctionLadiPage(window.gtag) &&
                                            window.gtag("event", "TimeOnPage_" + t + "_seconds", { event_category: "LadiPageTimeOnPage", event_label: window.location.host + window.location.pathname, non_interaction: !0 }),
                                            isFunctionLadiPage(window.fbq) && window.fbq("trackCustom", "TimeOnPage_" + t + "_seconds");
                                    }, 1e3 * t);
                                })),
                        _.forEach(function (t) {
                            var i = document.getElementById(t);
                            if (!isEmptyLadiPage(i)) {
                                var a = e.runtime.eventData[t],
                                    n = a["option.data_tooltip.text"];
                                if (!isEmptyLadiPage(n)) {
                                    var o = a["option.data_tooltip.type"] || e.const.TOOLTIP_TYPE.default,
                                        r = a["option.data_tooltip.position"] || e.const.TOOLTIP_POSITION.top_middle,
                                        d = a["option.data_tooltip.size"] || e.const.TOOLTIP_SIZE.medium;
                                    i.setAttribute("data-hint", n);
                                    var s = "hint";
                                    r == e.const.TOOLTIP_POSITION.top_middle && (s += "-top-middle"),
                                        r == e.const.TOOLTIP_POSITION.top_left && (s += "-top-left"),
                                        r == e.const.TOOLTIP_POSITION.top_right && (s += "-top-right"),
                                        r == e.const.TOOLTIP_POSITION.bottom_middle && (s += "-bottom-middle"),
                                        r == e.const.TOOLTIP_POSITION.bottom_left && (s += "-bottom-left"),
                                        r == e.const.TOOLTIP_POSITION.bottom_right && (s += "-bottom-right"),
                                        r == e.const.TOOLTIP_POSITION.left_middle && (s += "-left-middle"),
                                        r == e.const.TOOLTIP_POSITION.left_top && (s += "-left-top"),
                                        r == e.const.TOOLTIP_POSITION.left_bottom && (s += "-left-bottom"),
                                        r == e.const.TOOLTIP_POSITION.right_middle && (s += "-right-middle"),
                                        r == e.const.TOOLTIP_POSITION.right_top && (s += "-right-top"),
                                        r == e.const.TOOLTIP_POSITION.right_bottom && (s += "-right-bottom"),
                                        o == e.const.TOOLTIP_TYPE.info && (s += "-t-info"),
                                        o == e.const.TOOLTIP_TYPE.success && (s += "-t-success"),
                                        o == e.const.TOOLTIP_TYPE.error && (s += "-t-error"),
                                        o == e.const.TOOLTIP_TYPE.notice && (s += "-t-notice"),
                                        d == e.const.TOOLTIP_SIZE.small && (s += "-s-small"),
                                        d == e.const.TOOLTIP_SIZE.medium && (s += "-s-med"),
                                        d == e.const.TOOLTIP_SIZE.big && (s += "-s-big"),
                                        (s += "-hint-anim-d-short"),
                                        i.classList.add(s);
                                }
                            }
                        }),
                        (function () {
                            var t = 2500,
                                i = 3800,
                                a = 800,
                                n = 50,
                                o = 150,
                                r = 500,
                                d = 1300,
                                s = 600,
                                l = 1500,
                                c = t,
                                u = function (u) {
                                    var p = !1;
                                    if (
                                        (e.const.ANIMATED_LIST.forEach(function (t) {
                                            u.classList.contains(t) && (p = !0);
                                        }),
                                        p)
                                    ) {
                                        var m = u.getElementsByClassName("ladipage-animated-words-wrapper")[0];
                                        if (!isEmptyLadiPage(m)) {
                                            var g = isEmptyLadiPage(m.getAttribute("data-word")) ? [] : JSON.parse(m.getAttribute("data-word"));
                                            if (0 != g.length) {
                                                var _ = !1,
                                                    y = e.randomId(),
                                                    f = function (i, a, n, o) {
                                                        if (!_) {
                                                            isEmptyLadiPage(i) || (i.classList.remove("in"), i.classList.add("out"));
                                                            var r = isEmptyLadiPage(i) ? null : i.nextSibling;
                                                            if (
                                                                (isEmptyLadiPage(r)
                                                                    ? n &&
                                                                      e.runTimeout(function () {
                                                                          E(P(a));
                                                                      }, t)
                                                                    : e.runTimeout(function () {
                                                                          f(r, a, n, o);
                                                                      }, o),
                                                                isEmptyLadiPage(r) && document.querySelectorAll("html")[0].classList.contains("no-csstransitions"))
                                                            ) {
                                                                var d = P(a);
                                                                h(a, d);
                                                            }
                                                        }
                                                    },
                                                    v = function (i, a, n, o) {
                                                        if (!_) {
                                                            var r = a.parentElement,
                                                                d = r.parentElement;
                                                            d.classList.contains("ladipage-animated-headline") || (d = d.parentElement), isEmptyLadiPage(i) || (i.classList.add("in"), i.classList.remove("out"));
                                                            var s = isEmptyLadiPage(i) ? null : i.nextSibling;
                                                            isEmptyLadiPage(s)
                                                                ? ((d.classList.contains("rotate-2") || d.classList.contains("rotate-3") || d.classList.contains("scale")) && r.style.setProperty("width", a.clientWidth + "px"),
                                                                  isEmptyLadiPage(e.findAncestor(a, "type")) ||
                                                                      e.runTimeout(function () {
                                                                          var t = e.findAncestor(a, "ladipage-animated-words-wrapper");
                                                                          isEmptyLadiPage(t) || t.classList.add("waiting");
                                                                      }, 200),
                                                                  n ||
                                                                      e.runTimeout(function () {
                                                                          E(a);
                                                                      }, t))
                                                                : e.runTimeout(function () {
                                                                      v(s, a, n, o);
                                                                  }, o);
                                                        }
                                                    },
                                                    P = function (t) {
                                                        if (!_) {
                                                            var e = t.nextSibling;
                                                            return isEmptyLadiPage(e) || e.classList.contains("after") ? t.parentElement.firstChild : e;
                                                        }
                                                    },
                                                    h = function (t, e) {
                                                        _ || (t.classList.remove("is-visible"), t.classList.add("is-hidden"), e.classList.remove("is-hidden"), e.classList.add("is-visible"));
                                                    },
                                                    L = function (t, i) {
                                                        _ ||
                                                            (isEmptyLadiPage(e.findAncestor(t, "type"))
                                                                ? isEmptyLadiPage(e.findAncestor(t, "clip")) ||
                                                                  (e.findAncestor(t, "ladipage-animated-words-wrapper").style.setProperty("width", t.clientWidth + 5 + "px"),
                                                                  e.runTimeout(function () {
                                                                      E(t);
                                                                  }, s + l))
                                                                : (v(t.querySelectorAll("i")[0], t, !1, i), t.classList.add("is-visible"), t.classList.remove("is-hidden")));
                                                    },
                                                    E = function (l) {
                                                        if (!_ && !isEmptyLadiPage(l)) {
                                                            var c = P(l);
                                                            if (isEmptyLadiPage(e.findAncestor(l, "type")))
                                                                if (isEmptyLadiPage(e.findAncestor(l, "letters")))
                                                                    isEmptyLadiPage(e.findAncestor(l, "clip"))
                                                                        ? isEmptyLadiPage(e.findAncestor(l, "loading-bar"))
                                                                            ? (h(l, c),
                                                                              e.runTimeout(function () {
                                                                                  E(c);
                                                                              }, t))
                                                                            : (e.findAncestor(l, "ladipage-animated-words-wrapper").classList.remove("is-loading"),
                                                                              h(l, c),
                                                                              e.runTimeout(function () {
                                                                                  E(c);
                                                                              }, i),
                                                                              e.runTimeout(function () {
                                                                                  e.findAncestor(l, "ladipage-animated-words-wrapper").classList.add("is-loading");
                                                                              }, a))
                                                                        : (e.findAncestor(l, "ladipage-animated-words-wrapper").style.setProperty("width", "2px"),
                                                                          e.runTimeout(function () {
                                                                              h(l, c), L(c);
                                                                          }, s));
                                                                else {
                                                                    var u = l.querySelectorAll("i").length >= c.querySelectorAll("i").length;
                                                                    f(l.querySelectorAll("i")[0], l, u, n), v(c.querySelectorAll("i")[0], c, u, n);
                                                                }
                                                            else {
                                                                var p = e.findAncestor(l, "ladipage-animated-words-wrapper");
                                                                p.classList.add("selected"),
                                                                    p.classList.remove("waiting"),
                                                                    e.runTimeout(function () {
                                                                        p.classList.remove("selected"), l.classList.remove("is-visible"), l.classList.add("is-hidden");
                                                                        for (var t = l.querySelectorAll("i"), e = 0; e < t.length; e++) t[e].classList.remove("in"), t[e].classList.add("out");
                                                                    }, r),
                                                                    e.runTimeout(function () {
                                                                        L(c, o);
                                                                    }, d);
                                                            }
                                                        }
                                                    },
                                                    b = document.createElement(u.tagName);
                                                u.parentElement.insertBefore(b, u.nextSibling),
                                                    (b.outerHTML = u.outerHTML),
                                                    (b = u.nextSibling).classList.add("ladipage-animated-headline-duplicate"),
                                                    (e.runtime.list_scrolling_exec[y] = function () {
                                                        u.parentElement.removeChild(u), b.classList.remove("ladipage-animated-headline-duplicate"), (_ = !0), delete e.runtime.list_scrolling_exec[y];
                                                    });
                                                var A = m.textContent.trim();
                                                if (
                                                    ((m.textContent = ""),
                                                    (m.innerHTML = m.innerHTML + '<b class="is-visible">' + A + "</b>"),
                                                    g.forEach(function (t) {
                                                        isEmptyLadiPage(t) ? (m.innerHTML = m.innerHTML + "<b>" + A + "</b>") : (m.innerHTML = m.innerHTML + "<b>" + t.trim() + "</b>");
                                                    }),
                                                    !isEmptyLadiPage(e.findAncestor(m, "type")) || !isEmptyLadiPage(e.findAncestor(m, "loading-bar")) || !isEmptyLadiPage(e.findAncestor(m, "clip")))
                                                ) {
                                                    m.innerHTML = m.innerHTML + '<div class="after"></div>';
                                                    for (var w = getComputedStyle(m).color, T = m.getElementsByClassName("after"), S = 0; S < T.length; S++) T[S].style.setProperty("background-color", w);
                                                }
                                                if (
                                                    (u.classList.contains("type") && m.classList.add("waiting"),
                                                    (u.classList.contains("type") || u.classList.contains("rotate-2") || u.classList.contains("rotate-3") || u.classList.contains("scale")) && u.classList.add("letters"),
                                                    (function (t) {
                                                        if (!_)
                                                            for (var i = 0; i < t.length; i++) {
                                                                var a = t[i],
                                                                    n = a.textContent.trim().split(""),
                                                                    o = a.classList.contains("is-visible");
                                                                for (var r in n) {
                                                                    " " == n[r] && (n[r] = "&nbsp;");
                                                                    var d = e.findAncestor(a, "rotate-2");
                                                                    isEmptyLadiPage(d) || (n[r] = "<em>" + n[r] + "</em>"), (n[r] = o ? '<i class="in">' + n[r] + "</i>" : "<i>" + n[r] + "</i>");
                                                                }
                                                                var s = n.join("");
                                                                (a.innerHTML = s), a.style.setProperty("opacity", 1);
                                                            }
                                                    })(document.querySelectorAll(".letters b")),
                                                    u.classList.contains("loading-bar"))
                                                )
                                                    (c = i),
                                                        e.runTimeout(function () {
                                                            m.classList.add("is-loading");
                                                        }, a);
                                                else if (u.classList.contains("clip")) {
                                                    var O = m.clientWidth + 5;
                                                    m.style.setProperty("width", O + "px");
                                                }
                                                e.runTimeout(function () {
                                                    E(u.getElementsByClassName("is-visible")[0]);
                                                }, c);
                                            }
                                        }
                                    }
                                },
                                p = function () {
                                    for (var t = document.getElementsByClassName("ladipage-animated-headline"), e = [], i = 0; i < t.length; i++) e.push(t[i]);
                                    e.forEach(u);
                                };
                            p();
                            var m = e.randomId();
                            e.runtime.list_scrolled_exec[m] = p;
                        })(),
                        (function () {
                            for (
                                var t = document.querySelectorAll(".ladi-button-group > .ladi-element"),
                                    i = function (t) {
                                        var i = e.findAncestor(t.target, "ladi-button");
                                        (i = isEmptyLadiPage(i) ? t.target : e.findAncestor(i, "ladi-element")).classList.add("selected");
                                        var a = e.findAncestor(t.target, "ladi-button-group");
                                        if (!isEmptyLadiPage(a))
                                            for (var n = (a = e.findAncestor(a, "ladi-element")).querySelectorAll(".ladi-button-group > .ladi-element"), o = 0; o < n.length; o++) n[o].id != i.id && n[o].classList.remove("selected");
                                    },
                                    a = 0;
                                a < t.length;
                                a++
                            )
                                t[a].addEventListener("click", i);
                        })(),
                        (function () {
                            if (0 != document.getElementsByClassName("ladiflow-widget").length) {
                                var t = document.querySelector('script[src^="' + e.const.LADIFLOW_SDK + '"][data-time="' + e.runtime.timenow + '"]');
                                isEmptyLadiPage(t) && e.loadScript(e.const.LADIFLOW_SDK, { "data-time": e.runtime.timenow }, !0);
                            }
                        })(),
                        (function () {
                            var t = document.querySelectorAll('[data-buy-now-ladisales="true"], [data-add-to-cart-ladisales="true"]');
                            if (0 != t.length) {
                                var i = e.runtime.shopping_ladisales_page_checkout_api_key,
                                    a = e.runtime.shopping_ladisales_checkout_config_id;
                                if (!isEmptyLadiPage(i)) {
                                    for (
                                        var n = function (t) {
                                                t.addEventListener("click", function (e) {
                                                    if ((e.stopPropagation(), isObjectLadiPage(window.LadiSales))) {
                                                        var i = { productID: t.getAttribute("data-product-id"), productVariantID: t.getAttribute("data-product-variant-id"), quantity: 1 };
                                                        "true" == t.getAttribute("data-buy-now-ladisales") && isFunctionLadiPage(window.LadiSales.buyNow) && window.LadiSales.buyNow(i),
                                                            "true" == t.getAttribute("data-add-to-cart-ladisales") && isFunctionLadiPage(window.LadiSales.cartAdd) && window.LadiSales.cartAdd(i);
                                                    }
                                                });
                                            },
                                            o = 0;
                                        o < t.length;
                                        o++
                                    )
                                        n(t[o]);
                                    var r = document.querySelector('script[src^="' + e.const.LADISALES_SDK + '"][data-time="' + e.runtime.timenow + '"]');
                                    if (isEmptyLadiPage(r)) {
                                        var d = i;
                                        isEmptyLadiPage(a) || (d += "_" + a), e.loadScript(e.const.LADISALES_SDK, { id: d, "data-time": e.runtime.timenow }, !0);
                                    }
                                }
                            }
                        })(),
                        K(null, !1),
                        (function () {
                            var t = document.getElementById(e.runtime.builder_section_popup_id);
                            if (!isEmptyLadiPage(t)) {
                                var i = document.createElement("div");
                                if (((i.className = "popup-close"), i.style.setProperty("position", "fixed"), i.style.setProperty("opacity", "0"), t.appendChild(i), "none" == getComputedStyle(i).display)) {
                                    var a = document.getElementById("style_fix_css");
                                    if (isEmptyLadiPage(a)) {
                                        ((a = document.createElement("style")).id = "style_fix_css"), (a.type = "text/css"), (a.innerHTML = "#SECTION_POPUP .popup-close {display: initial;}");
                                        var n = document.getElementById("style_ladi");
                                        isEmptyLadiPage(n) ? document.head.appendChild(a) : n.parentNode.insertBefore(a, n.nextElementSibling);
                                    }
                                }
                                i.parentElement.removeChild(i);
                            }
                        })(),
                        (function () {
                            document.addEventListener("mouseleave", e.runEventMouseLeave),
                                document.addEventListener("mousemove", e.runEventMouseMove),
                                document.addEventListener("touchmove", e.runEventMouseMove, e.runtime.scrollEventPassive),
                                document.addEventListener("mouseup", e.runEventMouseUp),
                                document.addEventListener("touchend", e.runEventMouseUp);
                            var t = window;
                            isObjectLadiPage(e.runtime.story_page) && (t = document.getElementsByClassName("ladi-wraper")[0]),
                                t.addEventListener("scroll", e.runEventScroll, e.runtime.scrollEventPassive),
                                window.addEventListener("resize", e.runEventResize),
                                window.addEventListener("orientationchange", e.runEventOrientationChange);
                            var i = document.getElementById(e.runtime.backdrop_popup_id);
                            isEmptyLadiPage(i) || i.addEventListener("click", e.runEventBackdropPopupClick);
                            var a = document.getElementById(e.runtime.backdrop_dropbox_id);
                            isEmptyLadiPage(a) || a.addEventListener("click", e.runEventBackdropDropboxClick);
                        })(),
                        e.reloadLazyload(!0),
                        M(),
                        e.setDataReplaceStart(),
                        e.resetViewport(),
                        e.runConversionApi(),
                        e.runStoryPage(),
                        e.runThankyouPage(),
                        e.runGlobalTrackingScript(),
                        t || e.runAfterLocation(),
                        (e.runtime.list_loaded_func = e.runtime.list_loaded_func.concat(y)),
                        "complete" === document.readyState || ("loading" !== document.readyState && !document.documentElement.doScroll) ? e.documentLoaded() : document.addEventListener("DOMContentLoaded", e.documentLoaded);
                };
            (e.runtime.tmp.generateLadiSaleProduct = function (t, i, a) {
                var n = function () {
                        _.forEach(function (n) {
                            e.runtime.eventData[n], at(n, t, i, null, null, !1, a);
                        });
                    },
                    o = function (t) {
                        if (t && isEmptyLadiPage(a)) n();
                        else {
                            var i = a.target,
                                r = e.findAncestor(i, "ladi-element");
                            if (!isEmptyLadiPage(r)) {
                                var d = e.findAncestor(r, "ladi-form");
                                if (!isEmptyLadiPage(d)) {
                                    var s = e.findAncestor(d, "ladi-element");
                                    if (!isEmptyLadiPage(s)) {
                                        var l = e.runtime.eventData[s.id];
                                        if (!isEmptyLadiPage(l)) {
                                            var c = l["option.product_id"];
                                            if (!isEmptyLadiPage(c)) {
                                                var u = e.generateVariantProduct(l, !1, null, null, null, null, !0, !0, function (t) {
                                                    o(!1);
                                                });
                                                if (isObjectLadiPage(u) && isObjectLadiPage(u.store_info) && isObjectLadiPage(u.product)) {
                                                    var p = e.getProductVariantIndex(s.id, l),
                                                        m = document.querySelectorAll('[data-variant="true"]');
                                                    if (-1 != p)
                                                        for (var g = 0; g < m.length; g++)
                                                            if (m[g].id != r.id && isEmptyLadiPage(e.findAncestor(m[g], "ladi-collection"))) {
                                                                var _ = e.runtime.eventData[m[g].id];
                                                                if (!isEmptyLadiPage(_)) {
                                                                    var y = e.findAncestor(m[g], "ladi-form");
                                                                    if (!isEmptyLadiPage(y)) {
                                                                        var f = e.findAncestor(y, "ladi-element");
                                                                        if (!isEmptyLadiPage(f)) {
                                                                            var v = e.runtime.eventData[f.id];
                                                                            if (!isEmptyLadiPage(v) && !isEmptyLadiPage(v["option.product_variant_id"])) continue;
                                                                        }
                                                                        var P = null,
                                                                            h = null,
                                                                            L = null,
                                                                            E = 0;
                                                                        if (_["option.product_variant_type"] == e.const.PRODUCT_VARIANT_TYPE.combobox) {
                                                                            if (!isArrayLadiPage(u.product.variants)) continue;
                                                                            if (((h = u.product.variants[p]), isStringLadiPage(h.option_ids)))
                                                                                for (L = h.option_ids.split("/"), E = 0; E < L.length; E++)
                                                                                    (P = document.querySelector("#" + m[g].id + ' .ladi-form-item select[data-product-option-id="' + L[E] + '"]')),
                                                                                        isEmptyLadiPage(P) ||
                                                                                            P.getAttribute("data-store-id") != u.store_info.id ||
                                                                                            P.getAttribute("data-product-id") != h.product_id ||
                                                                                            (P.value = h["option" + (E + 1)]);
                                                                        }
                                                                        if (_["option.product_variant_type"] == e.const.PRODUCT_VARIANT_TYPE.label) {
                                                                            if (!isArrayLadiPage(u.product.variants)) continue;
                                                                            if (((h = u.product.variants[p]), isStringLadiPage(h.option_ids)))
                                                                                for (L = h.option_ids.split("/"), E = 0; E < L.length; E++)
                                                                                    (P = document.querySelector("#" + m[g].id + ' .ladi-form-label-container[data-product-option-id="' + L[E] + '"]')),
                                                                                        isEmptyLadiPage(P) ||
                                                                                            P.getAttribute("data-store-id") != u.store_info.id ||
                                                                                            P.getAttribute("data-product-id") != h.product_id ||
                                                                                            e.runtime.tmp.updateLabelValue(P, h["option" + (E + 1)]);
                                                                        }
                                                                        if (_["option.product_variant_type"] == e.const.PRODUCT_VARIANT_TYPE.combined) {
                                                                            if (
                                                                                ((P = m[g].querySelector("select.ladi-form-control")),
                                                                                isEmptyLadiPage(P) || P.getAttribute("data-store-id") != u.store_info.id || P.getAttribute("data-product-id") != u.product.product_id)
                                                                            )
                                                                                continue;
                                                                            var b = e.getProductVariantId(r, u);
                                                                            if (!isEmptyLadiPage(b)) {
                                                                                var A = P.querySelector('option[data-product-variant-id="' + b + '"]');
                                                                                isEmptyLadiPage(A) || (p = A.getAttribute("value"));
                                                                            }
                                                                            P.value = p + "";
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                    for (var w = 0; w < m.length; w++) {
                                                        var T = e.findAncestor(m[w], "ladi-form");
                                                        if (!isEmptyLadiPage(T)) {
                                                            var S = T.querySelector('input[name="quantity"]');
                                                            isEmptyLadiPage(S) || e.fireEvent(S, "input");
                                                        }
                                                    }
                                                    n();
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    };
                o(!0);
            }),
                (e.runtime.tmp.generateCart = function () {
                    _.forEach(function (i) {
                        !(function (i, a) {
                            if ("cart" == a) {
                                var n = e.runtime.eventData[i];
                                if (!isEmptyLadiPage(n)) {
                                    var o = document.getElementById(i);
                                    isEmptyLadiPage(o) ||
                                        e.showParentVisibility(o, function () {
                                            var i = parseFloatLadiPage(getComputedStyle(o).height) || 0,
                                                a = parseFloatLadiPage(o.getAttribute("data-height")) || 0;
                                            o.hasAttribute("data-height") || (o.setAttribute("data-height", i), (a = i));
                                            var r = e.generateHtmlCart(n["option.cart_layout"], n["option.message_no_product"], t);
                                            o.getElementsByClassName("ladi-cart")[0].innerHTML = r;
                                            var d = o.getElementsByClassName("ladi-cart")[0].scrollHeight;
                                            if (i != (d = d < a ? a : d)) {
                                                o.style.setProperty("height", d + "px");
                                                var s = e.findAncestor(o.parentElement, "ladi-element");
                                                isEmptyLadiPage(s) && (s = e.findAncestor(o.parentElement, "ladi-section")), e.updateHeightElement(!0, o, s, i, d);
                                            }
                                        });
                                }
                            }
                        })(i, e.runtime.eventData[i].type);
                    });
                }),
                (e.runtime.tmp.runButtonSectionClose = R),
                (e.runtime.tmp.runOptionAction = x),
                (e.runtime.tmp.runOptionHover = D),
                (e.runtime.tmp.runElementClickSelected = K),
                (e.runtime.tmp.runTrackingAnalytics = C),
                (e.runtime.tmp.runLadiSaleProductKey = at),
                (e.runtime.tmp.eventClickGalleryControlItem = j),
                (e.runtime.tmp.runGallery = H),
                (e.runtime.tmp.setGalleryStart = U),
                (e.runtime.tmp.updateImageGalleryProduct = it),
                (e.runtime.tmp.runOptionCountdown = F),
                (e.runtime.tmp.runOptionCountdownItem = q),
                (e.runtime.tmp.getOptionLabelValue = $),
                (e.runtime.tmp.updateLabelValue = Z),
                (e.runtime.tmp.getLabelValue = Q),
                (e.runtime.tmp.clickLabelProductChangeCallback = tt),
                (e.runtime.tmp.fireEventLabelChange = function (t) {
                    var i = t.querySelector(".ladi-form-label-item.selected");
                    isEmptyLadiPage(i) || e.fireEvent(i, "click", { is_fire_event: !0 });
                }),
                (e.runtime.tmp.showPopupX = st),
                (e.runtime.tmp.runActionPopupX = nt),
                e.runtime.is_popupx
                    ? ((e.runtime.tmp.popupx_iframe_id = e.randomId()),
                      nt({ ladipage_id: e.runtime.ladipage_id, action: { type: "set_iframe_loaded" } }),
                      window.addEventListener("message", function (t) {
                          try {
                              var i = JSON.parse(t.data);
                              if ("POPUPX" != i.type) return;
                              i.iframe_id == e.runtime.tmp.popupx_iframe_id &&
                                  i.action.value.forEach(function (t) {
                                      !(function (t, i) {
                                          var a = null,
                                              n = null;
                                          if (
                                              ("callback_request_with_option" == t &&
                                                  isFunctionLadiPage(e.runtime.tmp["request_callback_id_" + i.callback_id]) &&
                                                  e.runtime.tmp["request_callback_id_" + i.callback_id](i.responseText, i.status, i.httpRequest, i.url),
                                              "set_style_device" == t)
                                          ) {
                                              if ((ct(i.is_desktop), (n = document.getElementById(e.runtime.tmp.popupx_current_element_id)), isEmptyLadiPage(n))) return;
                                              "none" != getComputedStyle(n).display && (e.runtime.tmp.popupx_is_inline ? lt(e.runtime.tmp.popupx_current_element_id, !1) : st(e.runtime.tmp.popupx_current_element_id, !1));
                                          }
                                          if ("set_iframe_info" == t) {
                                              isEmptyLadiPage(f) && ((f = i.ladi_client_id || e.randomId()), window.ladi("LADI_CLIENT_ID").set_cookie(f, 3650)),
                                                  (e.runtime.tmp.popupx_is_desktop = i.is_desktop),
                                                  (e.runtime.isDesktop = i.is_desktop),
                                                  (e.runtime.device = e.runtime.isDesktop ? e.const.DESKTOP : e.const.MOBILE),
                                                  (e.runtime.tmp.popupx_origin_store_id = i.origin_store_id),
                                                  (e.runtime.tmp.popupx_origin_referer = i.origin_referer),
                                                  (e.runtime.tmp.popupx_origin_domain = i.origin_domain),
                                                  (e.runtime.tmp.popupx_origin_url = i.origin_url),
                                                  (e.runtime.tmp.popupx_is_inline = i.is_inline),
                                                  ct(i.is_desktop);
                                              var o = "#" + e.runtime.builder_section_popup_id + " .ladi-container {width: 100% !important;}";
                                              e.runtime.tmp.popupx_is_inline && (o += ".ladi-section > .ladi-section-close {display: none !important;}"), e.createStyleElement("style_popup_container", o), (e.runtime.has_popupx = !0), ut();
                                          }
                                          "hide_popupx" == t && ((a = e.runtime.eventData[i]), (n = document.getElementById(i)), isEmptyLadiPage(a) || isEmptyLadiPage(n) || window.ladi(i).hide()),
                                              "show_popupx" == t && st(i, !0),
                                              "show_popupx_inline_iframe" == t && lt(i, !0),
                                              "show_message_callback" == t &&
                                                  (isFunctionLadiPage(e.runtime.tmp.popupx_show_message_callback) && e.runtime.tmp.popupx_show_message_callback(), delete e.runtime.tmp.popupx_show_message_callback);
                                      })(i.action.type, t);
                                  });
                          } catch (t) {}
                      }))
                    : ut(),
                (e.runtime.isRun = !0);
        } else e.loadHtmlGlobal(t);
    }),
    (LadiPageScriptV2.prototype.getListProductByTagId = function (t, e, i, a, n) {
        var o = this,
            r = t["option.form_account_id"],
            d = t["option.product_type"],
            s = t["option.ladisale_store_id"] || null,
            l = t["option.product_tag_id"],
            c = t["option.data_setting.value"],
            u = t["option.data_setting.type_dataset"],
            p = t["option.collection_setting.type"],
            m = t["option.data_setting.sort_name"],
            g = t["option.data_setting.sort_by"],
            _ = null,
            y = null,
            f = null,
            v = null,
            P = null;
        if (isArrayLadiPage(l) && l.length > 0) {
            if (
                (isEmptyLadiPage(o.runtime.tmp.product_tag_info[d]) && (o.runtime.tmp.product_tag_info[d] = {}),
                isEmptyLadiPage(o.runtime.tmp.timeout_product_tag_info[d]) && (o.runtime.tmp.timeout_product_tag_info[d] = {}),
                l.sort(),
                (f = JSON.stringify(l) + "_page_" + i + "_limit_" + e),
                (v = o.runtime.tmp.product_tag_info[d][f]),
                -1 != [o.const.FORM_CONFIG_TYPE.ladisales, o.const.FORM_CONFIG_TYPE.sapo, o.const.FORM_CONFIG_TYPE.haravan, o.const.FORM_CONFIG_TYPE.shopify, o.const.FORM_CONFIG_TYPE.wordpress].indexOf(d))
            ) {
                y = function () {
                    var t = null;
                    return (
                        isObjectLadiPage(v) &&
                            isArrayLadiPage(v.products) &&
                            ((t = { products: v.products, total_record: v.total_record }),
                            isEmptyLadiPage(o.runtime.tmp.product_info[d]) && (o.runtime.tmp.product_info[d] = {}),
                            t.products.forEach(function (t) {
                                o.runtime.tmp.product_info[d][t.product_id] = { store_info: v.store_info, product: t };
                            })),
                        t
                    );
                };
                var h = null;
                if ((isStringLadiPage(v) && ((h = v), (v = null)), isNullLadiPage(v))) {
                    o.runtime.tmp.product_tag_info[d][f] = !0;
                    var L = function () {
                            (o.runtime.tmp.product_tag_info[d][f] = !1),
                                isEmptyLadiPage(o.runtime.tmp.timeout_product_tag_info[d][f]) || (o.removeTimeout(o.runtime.tmp.timeout_product_tag_info[d][f]), delete o.runtime.tmp.timeout_product_tag_info[d][f]);
                        },
                        E = function (t) {
                            if (((v = t.data), isObjectLadiPage(v))) {
                                if (!isObjectLadiPage(v.store_info)) {
                                    var a = o.runtime.currency;
                                    o.runtime.isClient || (a = window.$rootScope.getStoreCurrency()), (v.store_info = { currency: { code: a, symbol: o.formatCurrency(null, a, !1, !0) } });
                                }
                                if (
                                    (d != o.const.FORM_CONFIG_TYPE.ladisales && (v.store_info.id = -1),
                                    isObjectLadiPage(v.store_info.currency) && !isEmptyLadiPage(v.store_info.currency.code) && (v.store_info.currency.symbol = o.formatCurrency(null, v.store_info.currency.code, !1, !0)),
                                    isArrayLadiPage(v.products))
                                )
                                    for (
                                        var r = null,
                                            s = function (t) {
                                                return t.option1 == r;
                                            },
                                            c = 0;
                                        c < v.products.length;
                                        c++
                                    )
                                        if (isArrayLadiPage(v.products[c].options) && isArrayLadiPage(v.products[c].variants)) {
                                            var u = v.products[c].options.map(function (t) {
                                                return t.product_option_id;
                                            });
                                            u = u.join("/");
                                            for (var p = 0; p < v.products[c].variants.length; p++)
                                                -1 != [o.const.FORM_CONFIG_TYPE.ladisales].indexOf(d) && 1 == v.products[c].variants[p].allow_sold_out && (v.products[c].variants[p].inventory_checked = 0),
                                                    isNullLadiPage(v.products[c].variants[p].compare_price) && (v.products[c].variants[p].compare_price = v.products[c].variants[p].price_compare),
                                                    isNullLadiPage(v.products[c].variants[p].variant_start_date) && (v.products[c].variants[p].variant_start_date = v.products[c].variants[p].start_date),
                                                    isNullLadiPage(v.products[c].variants[p].variant_end_date) && (v.products[c].variants[p].variant_end_date = v.products[c].variants[p].end_date),
                                                    isNullLadiPage(v.products[c].variants[p].variant_timezone) && (v.products[c].variants[p].variant_timezone = v.products[c].variants[p].timezone),
                                                    isEmptyLadiPage(v.products[c].variants[p].option_ids) && (v.products[c].variants[p].option_ids = u),
                                                    -1 != [o.const.FORM_CONFIG_TYPE.sapo, o.const.FORM_CONFIG_TYPE.haravan, o.const.FORM_CONFIG_TYPE.shopify].indexOf(d) &&
                                                        1 == v.products[c].variants.length &&
                                                        "Default Title" == v.products[c].variants[p].title &&
                                                        ((v.products[c].variants[p].title = null), (v.products[c].variants[p].option1 = null), (v.products[c].options = [])),
                                                    -1 != [o.const.FORM_CONFIG_TYPE.wordpress].indexOf(d) &&
                                                        1 == v.products[c].variants.length &&
                                                        v.products[c].variants[p].title == v.products[c].variants[p].product_name &&
                                                        ((v.products[c].variants[p].title = null), (v.products[c].variants[p].option1 = null), (v.products[c].options = [])),
                                                    isEmptyLadiPage(v.products[c].variants[p].package_quantity) ||
                                                        isEmptyLadiPage(v.products[c].variants[p].package_quantity_unit) ||
                                                        (isNullLadiPage(v.products[c].variants[p].title_old) && (v.products[c].variants[p].title_old = v.products[c].variants[p].title),
                                                        (v.products[c].variants[p].title =
                                                            v.products[c].variants[p].title_old + " (" + v.products[c].variants[p].package_quantity + " " + v.products[c].variants[p].package_quantity_unit + ")"));
                                            if (isArrayLadiPage(v.products[c].options) && 1 == v.products[c].options.length && isArrayLadiPage(v.products[c].options[0].values))
                                                for (var m = 0; m < v.products[c].options[0].values.length; m++) {
                                                    r = v.products[c].options[0].values[m].name;
                                                    var g = v.products[c].variants.find(s);
                                                    (v.products[c].options[0].values[m].name_new = v.products[c].options[0].values[m].label || v.products[c].options[0].values[m].name),
                                                        isEmptyLadiPage(g) ||
                                                            isEmptyLadiPage(g.package_quantity) ||
                                                            isEmptyLadiPage(g.package_quantity_unit) ||
                                                            (v.products[c].options[0].values[m].name_new = v.products[c].options[0].values[m].name_new + " (" + g.package_quantity + " " + g.package_quantity_unit + ")");
                                                }
                                        }
                                if (isStringLadiPage(v.page_next)) {
                                    var P = JSON.stringify(l) + "_page_" + (i + 1) + "_limit_" + e;
                                    o.runtime.tmp.product_tag_info[d][P] = v.page_next;
                                }
                                (o.runtime.tmp.product_tag_info[d][f] = v), (_ = y()), isFunctionLadiPage(n) && n(_);
                            } else L();
                        },
                        b = { product_tag_ids: l, limit: e };
                    isEmptyLadiPage(p) ? (b.type = "group") : (b.paged = i), isEmptyLadiPage(m) || isEmptyLadiPage(g) || ((b.sort = {}), (b.sort[m] = g == o.const.SORT_BY_TYPE.desc ? -1 : 1));
                    var A = null,
                        w = "POST";
                    return (
                        o.runLimitRequest(20, function () {
                            if (o.runtime.isClient) {
                                var a = o.const.API_LADISALE_COLLECTION_PRODUCT;
                                d == o.const.FORM_CONFIG_TYPE.ladisales
                                    ? (((A = { "Content-Type": "application/json" })["Store-Id"] = s), (b = JSON.stringify(b)))
                                    : d == o.const.FORM_CONFIG_TYPE.wordpress
                                    ? ((w = "GET"), (a = window.location.origin + "/ladipage/api?action=product_list&category_ids=" + l.join("|") + "&page=" + i + "&limit=" + e), (b = null))
                                    : ((A = { "Content-Type": "application/json" }),
                                      (a = o.const.API_COLLECTION_PRODUCT),
                                      (b = { form_account_id: r, tags: l, limit: e }),
                                      isEmptyLadiPage(h) ? (b.page = i) : (b.page_info = h),
                                      (b = JSON.stringify(b))),
                                    o.sendRequest(w, a, b, !0, A, function (t, e, i) {
                                        if (i.readyState == XMLHttpRequest.DONE)
                                            try {
                                                var a = JSON.parse(t);
                                                E(a);
                                            } catch (t) {
                                                L();
                                            }
                                    });
                            } else {
                                var n = function (t) {
                                        if (isArrayLadiPage(t) && t.length > 1) {
                                            var e = { products: [] };
                                            t.forEach(function (t) {
                                                if (isNullLadiPage(t.product) && !isNullLadiPage(t.store_info) && !isNullLadiPage(t.total_record)) return (e.store_info = t.store_info), void (e.total_record = t.total_record);
                                                isNullLadiPage(t.product) || e.products.push(t.product);
                                            }),
                                                E({ data: e });
                                        }
                                    },
                                    c = LadiPage.mapping_attribute_option_product_id(t.element, "", !1, l, e, i, !0, function (t) {
                                        n(t);
                                    });
                                n(c);
                            }
                        }),
                        _
                    );
                }
            }
        } else
            isEmptyLadiPage(c) ||
                ((y = function () {
                    var t = null;
                    if (isArrayLadiPage(P)) {
                        var a = o.copy(P);
                        (t = { products: (a = a.splice((i - 1) * e, e)), total_record: P.length }),
                            isEmptyLadiPage(o.runtime.tmp.product_info[d]) && (o.runtime.tmp.product_info[d] = {}),
                            P.forEach(function (t) {
                                o.runtime.tmp.product_info[d][t.id] = { store_info: {}, product: t };
                            });
                    }
                    return t;
                }),
                (P = o.loadDataset(c, c, u, m, g, !0, o.runtime.isClient, function (t) {
                    (P = t), (_ = y()), isFunctionLadiPage(n) && n(_);
                })));
        return (
            isFunctionLadiPage(y) &&
                (!0 === v
                    ? (o.runtime.tmp.timeout_product_tag_info[d][f] = o.runTimeout(function () {
                          o.getListProductByTagId(t, e, i, !1, n);
                      }, 100))
                    : ((_ = y()), !a && isFunctionLadiPage(n) && n(_))),
            _
        );
    }),
    (LadiPageScriptV2.prototype.getLadiSaleCheckoutCartProducts = function () {
        var t = [];
        return (
            isArrayLadiPage(this.runtime.tmp.cart) &&
                this.runtime.tmp.cart.forEach(function (e) {
                    e.quantity <= 0 || t.push({ product_id: e.product_id, product_variant_id: e.product_variant_id, quantity: e.quantity });
                }),
            t
        );
    }),
    (LadiPageScriptV2.prototype.getCartProducts = function () {
        var t = this,
            e = function () {
                var e = [];
                return (
                    t.runtime.tmp.cart.forEach(function (t) {
                        if (!(t.quantity <= 0)) {
                            var i = t.name;
                            isEmptyLadiPage(t.title) || i == t.title || (i += " - " + t.title);
                            var a = [[t.product_variant_id, t.quantity, t.price, t.weight, t.weight_unit].join(":"), i];
                            isObjectLadiPage(t.promotion) && a.push([t.promotion.discount.discount_id, t.promotion.discount.note, t.promotion.total].join(":")), (a = a.join("|")), e.push(a);
                        }
                    }),
                    e
                );
            };
        if (-1 != [t.const.FORM_CONFIG_TYPE.sapo, t.const.FORM_CONFIG_TYPE.haravan, t.const.FORM_CONFIG_TYPE.shopify, t.const.FORM_CONFIG_TYPE.wordpress].indexOf(t.runtime.shopping_product_type)) return e();
        var i = window.ladi("_checkout_token").get_cookie();
        return isArrayLadiPage(this.runtime.tmp.cart) && !isEmptyLadiPage(i) ? e() : void 0;
    }),
    (LadiPageScriptV2.prototype.getCartCheckoutPrice = function (t) {
        var e = this.changeTotalPriceCart(!0);
        if (-1 != [this.const.FORM_CONFIG_TYPE.sapo, this.const.FORM_CONFIG_TYPE.haravan, this.const.FORM_CONFIG_TYPE.shopify, this.const.FORM_CONFIG_TYPE.wordpress].indexOf(this.runtime.shopping_product_type)) return e.cart_checkout_price;
        var i = window.ladi("_checkout_token").get_cookie();
        return isArrayLadiPage(this.runtime.tmp.cart) && !isEmptyLadiPage(i) ? e.cart_checkout_price : t;
    }),
    (LadiPageScriptV2.prototype.createCartData = function (t) {
        (this.runtime.tmp.cart = []), (this.runtime.tmp.add_to_cart_discount = 0), (this.runtime.tmp.add_to_cart_fee_shipping = 0);
        var e = this,
            i = function () {
                e.runtime.tmp.generateCart(), e.changeTotalPriceCart(), e.runResizeAll(), isFunctionLadiPage(t) && t();
            };
        if (
            (isEmptyLadiPage(e.runtime.shopping_product_type) ||
                (window.ladi("_shopping_product_type").get_cookie() != e.runtime.shopping_product_type &&
                    (window.ladi("_cart_token").delete_cookie(), window.ladi("_checkout_token").delete_cookie(), window.ladi("_shopping_product_type").set_cookie(e.runtime.shopping_product_type, 30))),
            -1 == [e.const.FORM_CONFIG_TYPE.sapo, e.const.FORM_CONFIG_TYPE.haravan, e.const.FORM_CONFIG_TYPE.wordpress].indexOf(e.runtime.shopping_product_type))
        )
            if (-1 == [e.const.FORM_CONFIG_TYPE.shopify].indexOf(e.runtime.shopping_product_type)) {
                var a = window.ladi("_cart_token").get_cookie(),
                    n = { "Content-Type": "application/json" };
                if (!isEmptyLadiPage(a))
                    return (
                        (n["cart-token"] = a),
                        void this.sendRequest("POST", this.const.API_LADISALE_SHOW, JSON.stringify({ type: "LP" }), !0, n, function (t, a, n) {
                            if (n.readyState == XMLHttpRequest.DONE) {
                                if (200 == a)
                                    try {
                                        var o = JSON.parse(t);
                                        200 == o.code &&
                                            ((e.runtime.tmp.ladisales_checkout_url = o.data.url),
                                            o.data.items.forEach(function (t) {
                                                var i = isEmptyLadiPage(t.src) ? "" : t.src;
                                                isEmptyLadiPage(i) || !isStringLadiPage(i) || i.startsWith("http://") || i.startsWith("https://") || i.startsWith("//") || (i = "https://" + e.const.STATIC_W_DOMAIN + "/" + i);
                                                var a = e.runtime.tmp.cart.findIndex(function (e) {
                                                        return e.store_id == t.store_id && e.product_id == t.product_id && e.product_variant_id == t.product_variant_id;
                                                    }),
                                                    n = t.quantity,
                                                    r = t.option_name,
                                                    d = t.price;
                                                if ((isEmptyLadiPage(t.package_quantity) || isEmptyLadiPage(t.package_quantity_unit) || (r = r + " (" + t.package_quantity + " " + t.package_quantity_unit + ")"), -1 == a)) {
                                                    var s = {
                                                        store_id: t.store_id,
                                                        product_id: t.product_id,
                                                        product_variant_id: t.product_variant_id,
                                                        name: t.product_name,
                                                        title: r,
                                                        price: d,
                                                        image: i,
                                                        quantity: n,
                                                        inventory_checked: t.inventory_checked,
                                                        available_quantity: t.available_quantity,
                                                        min_buy: t.min_buy,
                                                        max_buy: t.max_buy,
                                                        currency: o.data.store_info.currency,
                                                        product_type: t.product_type,
                                                        package_quantity: t.package_quantity,
                                                    };
                                                    isObjectLadiPage(s.currency) && !isEmptyLadiPage(s.currency.code) && (s.currency.symbol = e.formatCurrency(null, s.currency.code, !1, !0)), e.runtime.tmp.cart.push(s);
                                                }
                                            }),
                                            e.updateCartPromotion());
                                    } catch (t) {}
                                i();
                            }
                        })
                    );
                i();
            } else
                e.getCheckoutShopify(
                    null,
                    function (t, a) {
                        e.updateCartPromotion(null, !0, i);
                    },
                    function () {
                        e.updateCartPromotion(null, !0, i);
                    }
                );
        else this.updateCartPromotion(null, !0, i);
    }),
    (LadiPageScriptV2.prototype.changeTotalPriceCart = function (t) {
        var e = 0,
            i = 0;
        this.runtime.tmp.cart.forEach(function (t) {
            (i += t.quantity), isObjectLadiPage(t.promotion) ? (e += t.promotion.total) : (e += t.price * t.quantity);
        }),
            (e = e < 0 ? 0 : e);
        var a = this.runtime.tmp.add_to_cart_fee_shipping || 0,
            n = this.runtime.tmp.add_to_cart_discount || 0,
            o = e + a - n;
        if (((o = o < 0 ? 0 : o), t)) return { cart_price: e, cart_checkout_price: o, cart_fee_shipping: a, cart_discount: n, total_quantity: i };
        var r = this.formatNumber(e, 3),
            d = this.formatNumber(o, 3),
            s = this.formatNumber(a, 3),
            l = this.formatNumber(n, 3);
        if (this.runtime.tmp.cart.length > 0 && !isEmptyLadiPage(this.runtime.tmp.cart[0].currency) && !isEmptyLadiPage(this.runtime.tmp.cart[0].currency.symbol)) {
            var c = this.runtime.tmp.cart[0].currency.symbol;
            (r = this.formatCurrency(e, c, !0)), (d = this.formatCurrency(o, c, !0)), (s = this.formatCurrency(a, c, !0)), (l = this.formatCurrency(n, c, !0));
        }
        this.setDataReplaceStr("cart_price", r),
            this.setDataReplaceStr("cart_checkout_price", d),
            this.setDataReplaceStr("cart_fee_shipping", s),
            this.setDataReplaceStr("cart_discount", l),
            this.setDataReplaceStr("cart_quantity", i),
            this.setDataReplaceElement(!1);
    }),
    (LadiPageScriptV2.prototype.removeAddToCartProduct = function (t, e, i, a) {
        var n = this,
            o = { product_variant_id: t };
        try {
            (t = decodeURIComponentLadiPage(t)), (o = JSON.parse(t));
        } catch (t) {}
        var r = function (t) {
                return isEmptyLadiPage(t.cart_item_key) ? t.product_variant_id == o.product_variant_id : t.cart_item_key == o.cart_item_key;
            },
            d = this.runtime.tmp.cart.findIndex(r);
        -1 != d &&
            (n.showLoadingBlur(),
            n.updateCartCookie(
                { cart_item_key: n.runtime.tmp.cart[d].cart_item_key, product_variant_id: this.runtime.tmp.cart[d].product_variant_id, quantity: 0 },
                i,
                function () {
                    -1 != (d = n.runtime.tmp.cart.findIndex(r)) && n.runtime.tmp.cart.splice(d, 1), i && (n.runtime.tmp.cart = []), n.runtime.tmp.generateCart(), n.changeTotalPriceCart();
                    var t = document.getElementsByClassName("ladi-form-remove-coupon")[0];
                    isEmptyLadiPage(t) || t.click(),
                        n.updateCartPromotion(),
                        0 == n.runtime.tmp.cart.length && -1 != [n.const.FORM_CONFIG_TYPE.ladisales].indexOf(n.runtime.shopping_product_type) && (window.ladi("_cart_token").delete_cookie(), window.ladi("_checkout_token").delete_cookie()),
                        n.runResizeAll(),
                        isFunctionLadiPage(a) && a(!0);
                },
                function (t) {
                    e && n.showMessage(t.message), isFunctionLadiPage(a) && a(!1);
                },
                n.hideLoadingBlur
            ));
    }),
    (LadiPageScriptV2.prototype.buttonAddToCartProductQuantity = function (t, e) {
        if (isArrayLadiPage(this.runtime.tmp.cart) && 0 != this.runtime.tmp.cart.length) {
            var i = this.findAncestor(t, "ladi-cart-quantity");
            if (!isEmptyLadiPage(i)) {
                var a = i.querySelector("input");
                if (!isEmptyLadiPage(a)) {
                    var n = parseInt(a.value) || 0;
                    (a.value = n + e < a.getAttribute("min") ? a.getAttribute("min") : n + e), a.value != n && this.fireEvent(a, "input");
                }
            }
        }
    }),
    (LadiPageScriptV2.prototype.changeAddToCartProductQuantity = function (t, e, i) {
        var a = this,
            n = { product_variant_id: e };
        try {
            (e = decodeURIComponentLadiPage(e)), (n = JSON.parse(e));
        } catch (t) {}
        var o = function (t) {
                return isEmptyLadiPage(t.cart_item_key) ? t.product_variant_id == n.product_variant_id : t.cart_item_key == n.cart_item_key;
            },
            r = this.runtime.tmp.cart.findIndex(o);
        if (-1 != r) {
            var d = !1,
                s = -1,
                l = 1,
                c = null,
                u = null,
                p = this.runtime.tmp.cart[r];
            isEmptyLadiPage(p) || ((l = p.min_buy || l), (c = p.max_buy));
            var m = this.runtime.tmp.cart[r].quantity;
            if (isEmptyLadiPage(t.value)) i && (t.value = l), (this.runtime.tmp.cart[r].quantity = l);
            else {
                var g = parseInt(t.value) || 0;
                1 == this.runtime.tmp.cart[r].inventory_checked && g > (s = this.runtime.tmp.cart[r].available_quantity) && ((g = s), (d = !0), (u = s)),
                    (g = g < l ? l : g),
                    !isEmptyLadiPage(c) && g > c && ((g = c), (d = !0), (isEmptyLadiPage(u) || u > c) && (u = c)),
                    (this.runtime.tmp.cart[r].quantity = g),
                    (t.value = g);
            }
            d && this.showMessage(this.const.LANG.ADD_TO_CART_MAX_QUANTITY, { max: u, name: a.getMessageNameProduct(p) });
            var _ = this.runtime.tmp.cart[r].quantity;
            if (m == _) return void (t.value = m);
            var y = { cart_item_key: this.runtime.tmp.cart[r].cart_item_key, product_variant_id: this.runtime.tmp.cart[r].product_variant_id, quantity: _ };
            (y.product_type = this.runtime.tmp.cart[r].product_type),
                (y.package_quantity = this.runtime.tmp.cart[r].package_quantity),
                this.updateCartCookie(
                    y,
                    !1,
                    function () {
                        var t = document.getElementsByClassName("ladi-form-remove-coupon")[0];
                        isEmptyLadiPage(t) || t.click(), a.updateCartPromotion();
                    },
                    function (t) {
                        (a.runtime.tmp.cart[r].quantity -= _ - m), a.showMessage(t.message);
                    },
                    function () {
                        if ((a.changeTotalPriceCart(), -1 != (r = a.runtime.tmp.cart.findIndex(o)))) {
                            var e = a.runtime.tmp.cart[r].price * a.runtime.tmp.cart[r].quantity,
                                i = a.formatNumber(e, 3);
                            isObjectLadiPage(a.runtime.tmp.cart[r].currency) && !isEmptyLadiPage(a.runtime.tmp.cart[r].currency.symbol) && (i = a.formatCurrency(e, a.runtime.tmp.cart[r].currency.symbol, !0));
                            for (var n = document.querySelectorAll(".ladi-cart-price span[data-product-variant-id]"), d = 0; d < n.length; d++)
                                if (n[d].getAttribute("data-store-id") == a.runtime.tmp.cart[r].store_id && n[d].getAttribute("data-product-id") == a.runtime.tmp.cart[r].product_id) {
                                    if (isEmptyLadiPage(a.runtime.tmp.cart[r].cart_item_key)) {
                                        if (n[d].getAttribute("data-product-variant-id") != a.runtime.tmp.cart[r].product_variant_id) continue;
                                    } else if (n[d].getAttribute("data-cart-item-key") != a.runtime.tmp.cart[r].cart_item_key) continue;
                                    n[d].innerHTML = i;
                                    var s = a.findAncestor(n[d], "ladi-cart-row");
                                    if (!isEmptyLadiPage(s)) {
                                        var l = a.findAncestor(t, "ladi-element"),
                                            c = a.findAncestor(s, "ladi-element");
                                        if (!isEmptyLadiPage(l) && !isEmptyLadiPage(c) && l.id == c.id) continue;
                                        var u = s.querySelector(".ladi-cart-image-quantity");
                                        isEmptyLadiPage(u) || (u.innerHTML = a.runtime.tmp.cart[r].quantity);
                                        var p = s.querySelector(".ladi-cart-quantity input");
                                        isEmptyLadiPage(p) || (p.value = a.runtime.tmp.cart[r].quantity);
                                    }
                                }
                        }
                    }
                );
        }
    }),
    (LadiPageScriptV2.prototype.updateProductVariantSelectOption = function (t, e, i, a, n) {
        var o = this,
            r = t.target,
            d = o.generateVariantProduct(e, !1, null, null, null, null, !0, !0, function (r) {
                o.updateProductVariantSelectOption(t, e, i, a, n);
            });
        if (isObjectLadiPage(d)) {
            var s = o.getProductVariantId(r, d.product),
                l = o.findAncestor(r, "ladi-collection-item"),
                c = [],
                u = 0;
            if (isEmptyLadiPage(l))
                for (var p = document.querySelectorAll('[data-variant="true"]'), m = 0; m < p.length; m++) {
                    var g = o.findAncestor(p[m], "ladi-form");
                    if (!isEmptyLadiPage(g) && ((g = o.findAncestor(g, "ladi-element")), isEmptyLadiPage(o.findAncestor(g, "ladi-collection")))) {
                        var _ = o.runtime.eventData[g.id];
                        isEmptyLadiPage(_) || _["option.product_type"] != e["option.product_type"] || _["option.product_id"] != e["option.product_id"] || c.push(p[m]);
                    }
                }
            else c = l.querySelectorAll('[data-variant="true"]');
            var y = [];
            for (u = 0; u < c.length; u++) {
                if (a) {
                    var f = o.findAncestor(c[u], "ladi-popup");
                    if (isEmptyLadiPage(f)) continue;
                    if ("POPUP_PRODUCT" != (f = o.findAncestor(f, "ladi-element")).id && "POPUP_BLOG" != f.id) continue;
                }
                y.push(c[u]);
            }
            var v = r.getAttribute("data-product-option-id"),
                P = null,
                h = null,
                L = null;
            if (isArrayLadiPage(d.product.variants) && 0 != d.product.variants.length) {
                if (isStringLadiPage(d.product.variants[0].option_ids)) {
                    for (L = d.product.variants[0].option_ids.split("/"), u = 0; u < L.length; u++)
                        if (L[u] == v) {
                            h = u;
                            break;
                        }
                    if (!isEmptyLadiPage(h)) {
                        P = {};
                        var E = r.value;
                        r.classList.contains("ladi-form-label-container") && (E = o.runtime.tmp.getLabelValue(r)),
                            d.product.variants.forEach(function (t) {
                                if (isEmptyLadiPage(E) || E == t["option" + (h + 1)]) for (u = 0; u < L.length; u++) isArrayLadiPage(P[L[u]]) || (P[L[u]] = []), u != h && P[L[u]].push(t["option" + (u + 1)]);
                            });
                    }
                }
                for (var b = P, A = [], w = [], T = null, S = 0; S < y.length; S++) {
                    var O = o.runtime.eventData[y[S].id];
                    if (!isEmptyLadiPage(O)) {
                        P = o.copy(b);
                        var C = 0,
                            N = 0,
                            I = 0,
                            k = 0,
                            x = null,
                            D = null,
                            R = null,
                            F = null;
                        if (O["option.product_variant_type"] == o.const.PRODUCT_VARIANT_TYPE.combobox) {
                            if (((T = y[S].querySelectorAll("select[data-product-option-id]")), isObjectLadiPage(P))) {
                                for (C = 0; C < T.length; C++)
                                    if ((x = T[C].getAttribute("data-product-option-id")) != v)
                                        for ((isArrayLadiPage(P[x]) && -1 != P[x].indexOf(T[C].value)) || (T[C].value = ""), D = T[C].getElementsByTagName("option"), N = 0; N < D.length; N++)
                                            isEmptyLadiPage(D[N].getAttribute("value")) || D[N].removeAttribute("disabled");
                                for (C = 0; C < T.length; C++) {
                                    for (x = T[C].getAttribute("data-product-option-id"), P = {}, I = 0; I < d.product.variants.length; I++)
                                        if (((F = d.product.variants[I]), (L = F.option_ids.split("/")), -1 != (h = L.indexOf(x)) && (isEmptyLadiPage(T[C].value) || T[C].value == F["option" + (h + 1)])))
                                            for (u = 0; u < L.length; u++) isArrayLadiPage(P[L[u]]) || (P[L[u]] = []), u != h && P[L[u]].push(F["option" + (u + 1)]);
                                    for (k = 0; k < T.length; k++)
                                        if ((R = T[k].getAttribute("data-product-option-id")) != x)
                                            for (D = T[k].getElementsByTagName("option"), N = 0; N < D.length; N++)
                                                isEmptyLadiPage(D[N].getAttribute("value")) || (isArrayLadiPage(P[R]) && -1 != P[R].indexOf(D[N].getAttribute("value"))) || D[N].setAttribute("disabled", "");
                                }
                            }
                            if (!isObjectLadiPage(P)) for (C = 0; C < T.length; C++) A.push(T[C]);
                        }
                        if (O["option.product_variant_type"] == o.const.PRODUCT_VARIANT_TYPE.label) {
                            if (((T = y[S].querySelectorAll(".ladi-form-label-container[data-product-option-id]")), isObjectLadiPage(P))) {
                                for (C = 0; C < T.length; C++)
                                    if ((x = T[C].getAttribute("data-product-option-id")) != v) {
                                        var q = o.runtime.tmp.getLabelValue(T[C]);
                                        for ((isArrayLadiPage(P[x]) && -1 != P[x].indexOf(q)) || o.runtime.tmp.updateLabelValue(T[C], null), D = T[C].getElementsByClassName("ladi-form-label-item"), N = 0; N < D.length; N++)
                                            D[N].classList.contains("no-value") || D[N].classList.remove("disabled");
                                    }
                                for (C = 0; C < T.length; C++) {
                                    for (x = T[C].getAttribute("data-product-option-id"), P = {}, I = 0; I < d.product.variants.length; I++)
                                        if (((F = d.product.variants[I]), (L = F.option_ids.split("/")), -1 != (h = L.indexOf(x)))) {
                                            var B = o.runtime.tmp.getLabelValue(T[C]);
                                            if (isEmptyLadiPage(B) || B == F["option" + (h + 1)]) for (u = 0; u < L.length; u++) isArrayLadiPage(P[L[u]]) || (P[L[u]] = []), u != h && P[L[u]].push(F["option" + (u + 1)]);
                                        }
                                    for (k = 0; k < T.length; k++)
                                        if ((R = T[k].getAttribute("data-product-option-id")) != x)
                                            for (D = T[k].getElementsByClassName("ladi-form-label-item"), N = 0; N < D.length; N++)
                                                if (!D[N].classList.contains("no-value")) {
                                                    var M = o.runtime.tmp.getOptionLabelValue(D[N]);
                                                    (isArrayLadiPage(P[R]) && -1 != P[R].indexOf(M)) || D[N].classList.add("disabled");
                                                }
                                }
                            }
                            if (!isObjectLadiPage(P)) for (C = 0; C < T.length; C++) w.push(T[C]);
                        }
                    }
                }
                !isEmptyLadiPage(s) && isFunctionLadiPage(n) && n();
                for (var Y = null; A.length > 0; ) (Y = A.shift()), o.fireEvent(Y, "change");
                for (; w.length > 0; ) (Y = w.shift()), o.runtime.tmp.fireEventLabelChange(Y);
                for (T = document.querySelectorAll(".ladi-form .ladi-form-label-container"), S = 0; S < T.length; S++) {
                    var V = o.runtime.tmp.getLabelValue(T[S]);
                    if (!isEmptyLadiPage(V)) o.findAncestor(T[S], "ladi-element").getAttribute("data-title-type") == o.const.PRODUCT_VARIANT_TITLE.top && (V = ": " + V);
                    var H = o.findAncestor(T[S], "ladi-form-item-box");
                    isEmptyLadiPage(H) || ((H = H.querySelector(".ladi-form-item-title-value")), isEmptyLadiPage(H) || (H.innerHTML = V));
                }
            }
        }
    }),
    (LadiPageScriptV2.prototype.updateProductVariantSelectOptionFirst = function (t, e, i) {
        var a = this,
            n = a.generateVariantProduct(t, !1, null, null, null, null, !0, !0, function () {
                a.updateProductVariantSelectOptionFirst(t, e, i);
            });
        if (isObjectLadiPage(n) && isObjectLadiPage(n.product)) {
            var o = i.querySelectorAll("select.ladi-form-control"),
                r = i.querySelectorAll(".ladi-form-label-container"),
                d = 0;
            if (isArrayLadiPage(n.product.variants) && 0 != n.product.variants.length) {
                var s = null,
                    l = null;
                if (
                    (isEmptyLadiPage(t["option.product_variant_id"]) ||
                        (s = n.product.variants.find(function (e) {
                            return e.product_variant_id == t["option.product_variant_id"];
                        })),
                    isEmptyLadiPage(s) && (s = n.product.variants[0]),
                    e["option.product_variant_type"] == a.const.PRODUCT_VARIANT_TYPE.combined)
                )
                    for (d = 0; d < o.length; d++) (l = o[d].querySelector('option[data-product-variant-id="' + s.product_variant_id + '"]')), isEmptyLadiPage(l) || ((o[d].value = l.getAttribute("value")), a.fireEvent(o[d], "change"));
                e["option.product_variant_type"] == a.const.PRODUCT_VARIANT_TYPE.combobox &&
                    isStringLadiPage(s.option_ids) &&
                    s.option_ids.split("/").forEach(function (t, e) {
                        for (d = 0; d < o.length; d++) o[d].getAttribute("data-product-option-id") == t && ((o[d].value = s["option" + (e + 1)] || ""), a.fireEvent(o[d], "change"));
                    }),
                    e["option.product_variant_type"] == a.const.PRODUCT_VARIANT_TYPE.label &&
                        isStringLadiPage(s.option_ids) &&
                        s.option_ids.split("/").forEach(function (t, e) {
                            for (d = 0; d < r.length; d++) r[d].getAttribute("data-product-option-id") == t && (a.runtime.tmp.updateLabelValue(r[d], s["option" + (e + 1)] || ""), a.runtime.tmp.fireEventLabelChange(r[d]));
                        });
            } else {
                for (d = 0; d < o.length; d++) (o[d].value = ""), a.fireEvent(o[d], "change");
                for (d = 0; d < r.length; d++) a.runtime.tmp.updateLabelValue(r[d], null), a.runtime.tmp.fireEventLabelChange(r[d]);
            }
        }
    }),
    (LadiPageScriptV2.prototype.generateHtmlCart = function (t, e, i) {
        var a = this,
            n = [];
        if (i) n = a.runtime.tmp.cart;
        else {
            var o = window.$rootScope.getStoreCurrency();
            n = [
                {
                    name: "Product Name",
                    title: "Product Variant",
                    price: 9999,
                    image: window.$rootScope.logoUrlColor,
                    quantity: 1,
                    inventory_checked: 0,
                    available_quantity: 999,
                    currency: { code: o, symbol: a.formatCurrency(null, o, !1, !0) },
                },
            ];
        }
        var r = "";
        if (((r += "<tbody>"), 0 == n.length)) r += '<tr><td class="ladi-cart-no-product">' + e + "</td></tr>";
        else {
            n.forEach(function (e, n) {
                if (!(e.quantity <= 0)) {
                    var o = { product_variant_id: e.product_variant_id, cart_item_key: e.cart_item_key };
                    (o = JSON.stringify(o)), (o = encodeURIComponent(o));
                    var d = a.getOptimizeImage(e.image, 60, 60, !0, !1, !0, i);
                    (r += '<tr class="ladi-cart-row' + (isObjectLadiPage(e.promotion) ? " has-promotion" : "") + '"><td class="ladi-cart-image"><img src="' + d + '" />'),
                        t == a.const.CART_LAYOUT.viewonly && (r += '<span class="ladi-cart-image-quantity">' + e.quantity + "</span>"),
                        (r += "</td>"),
                        (r += '<td class="ladi-cart-title"><span class="ladi-cart-title-name">' + e.name + '</span><span class="ladi-cart-title-variant">' + (e.title || "") + "</span>"),
                        isObjectLadiPage(e.promotion) && (r += '<span class="promotion-name">' + e.promotion.discount.note + "</span>"),
                        (r += "</td>"),
                        t == a.const.CART_LAYOUT.editable &&
                            (r +=
                                '<td class="ladi-cart-quantity"><div class="ladi-cart-quantity-content"><div onclick="javascript: LadiPageScript.buttonAddToCartProductQuantity(this, -1);" class="button"><span>-</span></div><input type="number" min="1" value="' +
                                e.quantity +
                                '" oninput="javascript: LadiPageScript.changeAddToCartProductQuantity(this, \'' +
                                o +
                                '\', true);" /><div onclick="javascript: LadiPageScript.buttonAddToCartProductQuantity(this, 1);" class="button"><span>+</span></div></div></td>'),
                        (r +=
                            '<td class="ladi-cart-price"><span' +
                            (isNullLadiPage(e.store_id) ? "" : ' data-store-id="' + e.store_id + '"') +
                            ' data-product-id="' +
                            e.product_id +
                            '" data-product-variant-id="' +
                            e.product_variant_id +
                            '" data-cart-item-key="' +
                            e.cart_item_key +
                            '">');
                    var s = e.price * e.quantity,
                        l = a.formatNumber(s, 3);
                    isObjectLadiPage(e.currency) && !isEmptyLadiPage(e.currency.symbol) && (l = a.formatCurrency(s, e.currency.symbol, !0)),
                        (r += l + "</span>"),
                        isObjectLadiPage(e.promotion) &&
                            ((s = e.promotion.total),
                            (l = a.formatNumber(s, 3)),
                            isObjectLadiPage(e.currency) && !isEmptyLadiPage(e.currency.symbol) && (l = a.formatCurrency(s, e.currency.symbol, !0)),
                            (r += '<span class="price-compare">' + l + "</span>")),
                        (r += "</td>"),
                        t == a.const.CART_LAYOUT.editable &&
                            ((r += '<td class="ladi-cart-action"><div onclick="javascript: LadiPageScript.removeAddToCartProduct(\'' + o + '\', true);" class="button"><span>X</span></div></td>'), (r += "</tr>"));
                }
            });
        }
        return (r += "</tbody>");
    }),
    (LadiPageScriptV2.prototype.getProductVariantId = function (t, e) {
        var i = null,
            a = this.findAncestor(t, "ladi-element");
        if (!isEmptyLadiPage(a)) {
            var n = this.runtime.eventData[a.id];
            if (!isEmptyLadiPage(n) && n["option.product_variant_type"] == this.const.PRODUCT_VARIANT_TYPE.combined) {
                var o = a.querySelector("select.ladi-form-control");
                if (!isEmptyLadiPage(o) && !isEmptyLadiPage(o.value)) {
                    var r = o.querySelector('option[value="' + o.value + '"]');
                    isEmptyLadiPage(r) || (i = r.getAttribute("data-product-variant-id"));
                }
            }
            var d = null,
                s = null;
            if (!isEmptyLadiPage(n) && (n["option.product_variant_type"] == this.const.PRODUCT_VARIANT_TYPE.combobox || n["option.product_variant_type"] == this.const.PRODUCT_VARIANT_TYPE.label)) {
                (s = {}), (d = a.querySelectorAll(".ladi-form-item select[data-product-option-id]"));
                for (var l = 0; l < d.length; l++) s[d[l].getAttribute("data-product-option-id")] = (isEmptyLadiPage(d[l].value) ? "" : d[l].value).trim();
                for (d = a.querySelectorAll(".ladi-form-label-container[data-product-option-id]"), l = 0; l < d.length; l++) s[d[l].getAttribute("data-product-option-id")] = this.runtime.tmp.getLabelValue(d[l]).trim();
                isArrayLadiPage(e.variants) &&
                    e.variants.forEach(function (t) {
                        if (isEmptyLadiPage(i)) {
                            var e = !0;
                            if (isStringLadiPage(t.option_ids))
                                for (var a = t.option_ids.split("/"), n = 0; n < a.length; n++)
                                    if (s[a[n].trim()] != (t["option" + (n + 1)] || "").trim()) {
                                        e = !1;
                                        break;
                                    }
                            e && (i = t.product_variant_id);
                        }
                    });
            }
        }
        return i;
    }),
    (LadiPageScriptV2.prototype.getProductVariantIndex = function (t, e) {
        var i = this,
            a = -1,
            n = e["option.product_type"],
            o = e["option.ladisale_store_id"] || null,
            r = e["option.product_id"],
            d = i.generateVariantProduct(e, !1, null, null, null, null, !0, !0);
        if (!isObjectLadiPage(d) || !isObjectLadiPage(d.store_info) || !isObjectLadiPage(d.product) || !isArrayLadiPage(d.product.variants) || d.product.variants.length <= 0) return a;
        this.runtime.isClient
            ? Object.keys(this.runtime.eventData).forEach(function (e) {
                  if ((isEmptyLadiPage(t) || t == e) && -1 == a) {
                      var s = i.runtime.eventData[e];
                      if ("form" == s.type && s["option.is_add_to_cart"] && s["option.product_type"] == n && s["option.product_id"] == r && s["option.ladisale_store_id"] == o) {
                          var l = document.getElementById(e);
                          if (!isEmptyLadiPage(l)) {
                              var c = l.querySelector('[data-variant="true"]');
                              if (!isEmptyLadiPage(c)) {
                                  var u = i.runtime.eventData[c.id];
                                  if (!isEmptyLadiPage(u)) {
                                      var p = null;
                                      if (
                                          (u["option.product_variant_type"] == i.const.PRODUCT_VARIANT_TYPE.combobox &&
                                              ((p = c.querySelectorAll(".ladi-form-item select[data-product-option-id]")),
                                              (a = d.product.variants.findIndex(function (t) {
                                                  for (
                                                      var e = !0,
                                                          i = null,
                                                          a = function (t) {
                                                              return t == i;
                                                          },
                                                          n = 0;
                                                      n < p.length;
                                                      n++
                                                  )
                                                      if (p[n].getAttribute("data-store-id") == d.store_info.id && p[n].getAttribute("data-product-id") == t.product_id) {
                                                          i = p[n].getAttribute("data-product-option-id");
                                                          var o = p[n].value;
                                                          if (isStringLadiPage(t.option_ids)) {
                                                              var r = t.option_ids.split("/").findIndex(a);
                                                              if (-1 != r && t["option" + (r + 1)] != o) {
                                                                  e = !1;
                                                                  break;
                                                              }
                                                          }
                                                      }
                                                  return e;
                                              }))),
                                          u["option.product_variant_type"] == i.const.PRODUCT_VARIANT_TYPE.label &&
                                              ((p = c.querySelectorAll(".ladi-form-label-container[data-product-option-id]")),
                                              (a = d.product.variants.findIndex(function (t) {
                                                  for (
                                                      var e = !0,
                                                          a = null,
                                                          n = function (t) {
                                                              return t == a;
                                                          },
                                                          o = 0;
                                                      o < p.length;
                                                      o++
                                                  )
                                                      if (p[o].getAttribute("data-store-id") == d.store_info.id && p[o].getAttribute("data-product-id") == t.product_id) {
                                                          a = p[o].getAttribute("data-product-option-id");
                                                          var r = i.runtime.tmp.getLabelValue(p[o]);
                                                          if (isStringLadiPage(t.option_ids)) {
                                                              var s = t.option_ids.split("/").findIndex(n);
                                                              if (-1 != s && t["option" + (s + 1)] != r) {
                                                                  e = !1;
                                                                  break;
                                                              }
                                                          }
                                                      }
                                                  return e;
                                              }))),
                                          u["option.product_variant_type"] == i.const.PRODUCT_VARIANT_TYPE.combined)
                                      ) {
                                          var m = c.querySelector(".ladi-form-control");
                                          if (isEmptyLadiPage(m) || m.getAttribute("data-store-id") != d.store_info.id || m.getAttribute("data-product-id") != d.product.product_id) return;
                                          (a = m.value), (a = isEmptyLadiPage(a) ? -1 : parseInt(a));
                                      }
                                  }
                              }
                          }
                      }
                  }
              })
            : (a = 0);
        return a;
    }),
    (LadiPageScriptV2.prototype.generateProductKey = function (t, e, i, a, n, o, r, d) {
        var s = this;
        isEmptyLadiPage(r) || (a["option.product_id"] = r.product_id);
        var l = a["option.product_type"],
            c = a["option.product_mapping_name"],
            u = s.generateVariantProduct(a, !1, null, null, null, null, !0, !0, function (i) {
                s.generateProductKey(t, e, !1, a, n, o, r, d);
            }),
            p = null;
        function m(t) {
            return (t >= 10 ? "" : "0") + t;
        }
        if (isObjectLadiPage(u) && isObjectLadiPage(u.product)) {
            var g = null,
                _ = null;
            u.product.type == s.const.PRODUCT_TYPE.event && "description" == c && (c = "content");
            var y = function () {
                if (-1 != [s.const.FORM_CONFIG_TYPE.ladisales, s.const.FORM_CONFIG_TYPE.sapo, s.const.FORM_CONFIG_TYPE.haravan, s.const.FORM_CONFIG_TYPE.shopify, s.const.FORM_CONFIG_TYPE.wordpress].indexOf(l)) {
                    var t = !1;
                    if ((-1 != ["name", "description", "content", "location", "timezone", "external_link"].indexOf(c) && ((g = u.product[c]), (e = g), (t = !0)), -1 != ["start_date", "end_date"].indexOf(c))) {
                        g = u.product[c];
                        try {
                            (_ = new Date(g)).toISOString() == g && (g = _.getFullYear() + "-" + m(_.getMonth() + 1) + "-" + m(_.getDate()) + " " + m(_.getHours()) + ":" + m(_.getMinutes()) + ":" + m(_.getSeconds()));
                        } catch (t) {}
                        (e = g), (t = !0);
                    }
                    if (
                        (-1 != ["image"].indexOf(c) &&
                            ((g = u.product[c]),
                            isObjectLadiPage(g) &&
                                ((e = g.src), isEmptyLadiPage(e) || !isStringLadiPage(e) || e.startsWith("http://") || e.startsWith("https://") || e.startsWith("//") || (e = "https://" + s.const.STATIC_W_DOMAIN + "/" + e), (t = !0))),
                        -1 != ["images"].indexOf(c) &&
                            ((g = u.product[c]),
                            isArrayLadiPage(g) &&
                                ((e = []),
                                g.forEach(function (t) {
                                    isEmptyLadiPage(t.src) ||
                                        (!isStringLadiPage(t.src) || t.src.startsWith("http://") || t.src.startsWith("https://") || t.src.startsWith("//")
                                            ? e.push({ src: t.src })
                                            : e.push({ src: "https://" + s.const.STATIC_W_DOMAIN + "/" + t.src }));
                                }),
                                (t = !0))),
                        t && (t = !isEmptyLadiPage(e)),
                        isArrayLadiPage(u.product.variants) && u.product.variants.length > 0)
                    ) {
                        var r = n ? 0 : s.getProductVariantIndex(null, a);
                        isEmptyLadiPage(o) ||
                            (r = u.product.variants.findIndex(function (t) {
                                return t.product_variant_id == o;
                            }));
                        var f = null;
                        if ((-1 != r && ((f = u.product.variants[r]), (p = f)), !t))
                            if (-1 != r)
                                if (-1 != ["variant_start_date", "variant_end_date"].indexOf(c)) {
                                    g = f[c];
                                    try {
                                        (_ = new Date(g)).toISOString() == g && (g = _.getFullYear() + "-" + m(_.getMonth() + 1) + "-" + m(_.getDate()) + " " + m(_.getHours()) + ":" + m(_.getMinutes()) + ":" + m(_.getSeconds()));
                                    } catch (t) {}
                                    e = g;
                                } else if (-1 != ["sku", "variant_timezone"].indexOf(c)) (g = f[c]), (e = g);
                                else if (-1 != ["title"].indexOf(c)) (g = f[c] || f.product_name), (e = g);
                                else if (-1 != ["text_quantity"].indexOf(c)) (g = 1 == f.inventory_checked ? f[c] : ""), (e = g);
                                else if (-1 != ["weight"].indexOf(c)) (g = f[c]), isEmptyLadiPage(f.weight_unit) || (g += f.weight_unit), (e = g);
                                else if (-1 != ["price", "compare_price"].indexOf(c))
                                    isEmptyLadiPage(f[c])
                                        ? (g = "")
                                        : ((g = s.formatNumber(f[c], 3)),
                                          isObjectLadiPage(u.store_info) && isObjectLadiPage(u.store_info.currency) && !isEmptyLadiPage(u.store_info.currency.symbol) && (g = s.formatCurrency(f[c], u.store_info.currency.symbol, !0))),
                                        (e = g);
                                else if (-1 != ["price_sale"].indexOf(c)) {
                                    var v = 0;
                                    isEmptyLadiPage(f.price) || isEmptyLadiPage(f.compare_price) || (v = f.compare_price - f.price),
                                        0 != v
                                            ? ((g = s.formatNumber(v, 3)),
                                              isObjectLadiPage(u.store_info) && isObjectLadiPage(u.store_info.currency) && !isEmptyLadiPage(u.store_info.currency.symbol) && (g = s.formatCurrency(v, u.store_info.currency.symbol, !0)))
                                            : (g = ""),
                                        (e = g);
                                } else if (-1 != ["price_sale_percent"].indexOf(c)) {
                                    var P = 0;
                                    isEmptyLadiPage(f.price) || isEmptyLadiPage(f.compare_price) || (P = Math.floor(((f.compare_price - f.price) / f.compare_price) * 100)), (e = g = 0 != P ? P + "%" : "");
                                } else if (-1 != ["src"].indexOf(c)) {
                                    if (((g = f[c]), isEmptyLadiPage(g))) return (c = "image"), y();
                                    !isStringLadiPage(g) || g.startsWith("http://") || g.startsWith("https://") || g.startsWith("//") || (g = "https://" + s.const.STATIC_W_DOMAIN + "/" + g), (e = g);
                                } else ["description"].indexOf(c), (g = f[c]), isEmptyLadiPage(g) || (e = g);
                            else e = g = "";
                    }
                } else {
                    if (((g = u.product[c]), isBooleanLadiPage(g))) g = g ? s.const.LANG.OPTION_TRUE : s.const.LANG.OPTION_FALSE;
                    else
                        try {
                            (_ = new Date(g)).toISOString() == g && (g = _.getFullYear() + "-" + m(_.getMonth() + 1) + "-" + m(_.getDate()) + " " + m(_.getHours()) + ":" + m(_.getMinutes()) + ":" + m(_.getSeconds()));
                        } catch (t) {}
                    e = g;
                }
                !i && isFunctionLadiPage(d) && d(e);
            };
            y();
        }
        return t ? { product: u, variant: p, value: e } : e;
    }),
    (LadiPageScriptV2.prototype.generateVariantProduct = function (t, e, i, a, n, o, r, d, s) {
        var l = e ? "" : null,
            c = this,
            u = function (t) {
                if (!e) return isObjectLadiPage(t) ? t : null;
                var d = "";
                if (isObjectLadiPage(t)) {
                    if (!isObjectLadiPage(t.product)) return d;
                    i == c.const.PRODUCT_VARIANT_TYPE.combined &&
                        ((d +=
                            '<div class="ladi-form-item-container"><div class="ladi-form-item-background"></div><div class="ladi-form-item"><select' +
                            (isObjectLadiPage(t.store_info) && !isNullLadiPage(t.store_info.id) ? ' data-store-id="' + t.store_info.id + '"' : "") +
                            ' data-product-id="' +
                            t.product.product_id +
                            '" required tabindex="' +
                            o +
                            '" class="ladi-form-control ladi-form-control-select" data-selected=""' +
                            (r ? "" : ' onmousedown="javascript: event.preventDefault();"') +
                            ">"),
                        c.runtime.isClient && (d += '<option value="" data-product-variant-id="">' + c.const.LANG.OPTION_NO_SELECT + "</option>"),
                        isArrayLadiPage(t.product.variants) &&
                            t.product.variants.forEach(function (e, i) {
                                var a = e.title || e.product_name;
                                if (n) {
                                    var o = c.formatNumber(e.price, 3);
                                    isObjectLadiPage(t.store_info) && isObjectLadiPage(t.store_info.currency) && !isEmptyLadiPage(t.store_info.currency.symbol) && (o = c.formatCurrency(e.price, t.store_info.currency.symbol, !0)),
                                        (a += " - " + o);
                                }
                                d += '<option value="' + i + '" data-product-variant-id="' + e.product_variant_id + '">' + a + "</option>";
                            }),
                        (d += "</select></div></div>")),
                        i == c.const.PRODUCT_VARIANT_TYPE.combobox &&
                            isArrayLadiPage(t.product.options) &&
                            t.product.options.forEach(function (e) {
                                if (e.is_tmp) d += '<div class="ladi-form-item-box"></div>';
                                else if (isArrayLadiPage(e.values) && 0 != e.values.length) {
                                    (d += '<div class="ladi-form-item-box">'),
                                        isEmptyLadiPage(a) || (d += '<div class="ladi-form-item-title"><span>' + e.name + "</span></div>"),
                                        (d +=
                                            '<div class="ladi-form-item-container"><div class="ladi-form-item-background"></div><div class="ladi-form-item"><select' +
                                            (isObjectLadiPage(t.store_info) && !isNullLadiPage(t.store_info.id) ? ' data-store-id="' + t.store_info.id + '"' : "") +
                                            ' data-product-id="' +
                                            e.product_id +
                                            '" data-product-option-id="' +
                                            e.product_option_id +
                                            '" required tabindex="' +
                                            o +
                                            '" class="ladi-form-control ladi-form-control-select" data-selected=""' +
                                            (r ? "" : ' onmousedown="javascript: event.preventDefault();"') +
                                            ">"),
                                        c.runtime.isClient && (d += '<option value="">' + c.const.LANG.OPTION_NO_SELECT + "</option>");
                                    var i = null;
                                    isArrayLadiPage(t.product.variants) && (i = t.product.variants[0]);
                                    var n = null;
                                    isEmptyLadiPage(i) || (isStringLadiPage(i.option_ids) && (n = i.option_ids.split("/")));
                                    e.values.forEach(function (t) {
                                        var a = (function (t) {
                                            var a = "";
                                            return (
                                                isArrayLadiPage(n) &&
                                                    n.forEach(function (n, o) {
                                                        e.product_option_id == n && t == i["option" + (o + 1)] && (a = " selected");
                                                    }),
                                                a
                                            );
                                        })(t.name);
                                        d += "<option" + a + ' value="' + t.name + '">' + (t.name_new || t.name) + "</option>";
                                    }),
                                        (d += "</select></div></div></div>");
                                }
                            }),
                        i == c.const.PRODUCT_VARIANT_TYPE.label &&
                            isArrayLadiPage(t.product.options) &&
                            t.product.options.forEach(function (e) {
                                if (isArrayLadiPage(e.values) && 0 != e.values.length) {
                                    (d += '<div class="ladi-form-item-box">'),
                                        isEmptyLadiPage(a) ||
                                            ((d += '<div class="ladi-form-item-title">'), (d += "<span>" + e.name + "</span>"), (d += '<span class="ladi-form-item-title-value">' + (r ? "" : e.values[0].name) + "</span>"), (d += "</div>")),
                                        (d +=
                                            '<div class="ladi-form-label-container"' +
                                            (isObjectLadiPage(t.store_info) && !isNullLadiPage(t.store_info.id) ? ' data-store-id="' + t.store_info.id + '"' : "") +
                                            ' data-product-id="' +
                                            e.product_id +
                                            '" data-product-option-id="' +
                                            e.product_option_id +
                                            '" data-selected="">');
                                    var i = null;
                                    isArrayLadiPage(t.product.variants) && (i = t.product.variants[0]);
                                    var n = null;
                                    isEmptyLadiPage(i) || (isStringLadiPage(i.option_ids) && (n = i.option_ids.split("/")));
                                    e.values.forEach(function (t, a) {
                                        0 == a &&
                                            (t.type == c.const.PRODUCT_VARIANT_OPTION_TYPE.image
                                                ? (d += '<div class="ladi-form-label-item image no-value" data-value=""></div>')
                                                : t.type == c.const.PRODUCT_VARIANT_OPTION_TYPE.color
                                                ? (d += '<div class="ladi-form-label-item color no-value" data-value=""></div>')
                                                : (d += '<div class="ladi-form-label-item text no-value" data-value="">&nbsp;</div>'));
                                        var o = (function (t) {
                                            var a = "";
                                            return (
                                                isArrayLadiPage(n) &&
                                                    n.forEach(function (n, o) {
                                                        e.product_option_id == n && t == i["option" + (o + 1)] && (a = " selected");
                                                    }),
                                                a
                                            );
                                        })(t.name);
                                        if (t.type == c.const.PRODUCT_VARIANT_OPTION_TYPE.image) {
                                            var r = t.value;
                                            isEmptyLadiPage(r) || !isStringLadiPage(r) || r.startsWith("http://") || r.startsWith("https://") || r.startsWith("//") || (r = "https://" + c.const.STATIC_W_DOMAIN + "/" + r),
                                                (r = c.getOptimizeImage(r, 100, 100, !1, !1, !1, !0)),
                                                (d += '<div class="ladi-form-label-item image' + o + '" style=\'background-image: url("' + r + '");\' title="' + (t.name_new || t.name) + '" data-value="' + t.name + '"></div>');
                                        } else t.type == c.const.PRODUCT_VARIANT_OPTION_TYPE.color ? (d += '<div class="ladi-form-label-item color' + o + "\" style='background-color: " + t.value + ";' title=\"" + (t.name_new || t.name) + '" data-value="' + t.name + '"></div>') : (d += '<div class="ladi-form-label-item text' + o + '" data-value="' + t.name + '">' + (t.name_new || t.name) + "</div>");
                                    }),
                                        (d += "</div></div>");
                                }
                            });
                }
                return d;
            };
        if (!isNullLadiPage(t.dataProduct)) return u(t.dataProduct);
        var p = t["option.form_account_id"],
            m = t["option.product_type"],
            g = t["option.ladisale_store_id"] || null,
            _ = t["option.product_id"],
            y = t["option.data_setting.value"],
            f = t["option.data_setting.type_dataset"],
            v = t["option.data_setting.sort_name"],
            P = t["option.data_setting.sort_by"],
            h = null,
            L = null;
        if (-1 != [c.const.FORM_CONFIG_TYPE.ladisales, c.const.FORM_CONFIG_TYPE.sapo, c.const.FORM_CONFIG_TYPE.haravan, c.const.FORM_CONFIG_TYPE.shopify, c.const.FORM_CONFIG_TYPE.wordpress].indexOf(m)) {
            if (!isEmptyLadiPage(_)) {
                if (
                    (isEmptyLadiPage(c.runtime.tmp.product_info[m]) && (c.runtime.tmp.product_info[m] = {}),
                    isEmptyLadiPage(c.runtime.tmp.timeout_product_info[m]) && (c.runtime.tmp.timeout_product_info[m] = {}),
                    (_ = parseInt(_) || _),
                    (h = c.runtime.tmp.product_info[m][_]),
                    (L = function () {
                        return u(h);
                    }),
                    isNullLadiPage(h))
                ) {
                    c.runtime.tmp.product_info[m][_] = !0;
                    var E = function () {
                            (c.runtime.tmp.product_info[m][_] = !1), isEmptyLadiPage(c.runtime.tmp.timeout_product_info[m][_]) || (c.removeTimeout(c.runtime.tmp.timeout_product_info[m][_]), delete c.runtime.tmp.timeout_product_info[m][_]);
                        },
                        b = function (t) {
                            if (((h = isObjectLadiPage(c.runtime.tmp.product_info[m][_]) ? c.runtime.tmp.product_info[m][_] : t.data), isObjectLadiPage(h))) {
                                if (!isObjectLadiPage(h.store_info)) {
                                    var e = c.runtime.currency;
                                    c.runtime.isClient || (e = window.$rootScope.getStoreCurrency()), (h.store_info = { currency: { code: e, symbol: c.formatCurrency(null, e, !1, !0) } });
                                }
                                if (
                                    (m != c.const.FORM_CONFIG_TYPE.ladisales && (h.store_info.id = -1),
                                    isObjectLadiPage(h.store_info.currency) && !isEmptyLadiPage(h.store_info.currency.code) && (h.store_info.currency.symbol = c.formatCurrency(null, h.store_info.currency.code, !1, !0)),
                                    isObjectLadiPage(h.product) && isArrayLadiPage(h.product.options) && isArrayLadiPage(h.product.variants))
                                ) {
                                    var i = h.product.options.map(function (t) {
                                        return t.product_option_id;
                                    });
                                    i = i.join("/");
                                    for (var a = 0; a < h.product.variants.length; a++)
                                        -1 != [c.const.FORM_CONFIG_TYPE.ladisales].indexOf(m) && 1 == h.product.variants[a].allow_sold_out && (h.product.variants[a].inventory_checked = 0),
                                            isNullLadiPage(h.product.variants[a].compare_price) && (h.product.variants[a].compare_price = h.product.variants[a].price_compare),
                                            isNullLadiPage(h.product.variants[a].variant_start_date) && (h.product.variants[a].variant_start_date = h.product.variants[a].start_date),
                                            isNullLadiPage(h.product.variants[a].variant_end_date) && (h.product.variants[a].variant_end_date = h.product.variants[a].end_date),
                                            isNullLadiPage(h.product.variants[a].variant_timezone) && (h.product.variants[a].variant_timezone = h.product.variants[a].timezone),
                                            isEmptyLadiPage(h.product.variants[a].option_ids) && (h.product.variants[a].option_ids = i),
                                            -1 != [c.const.FORM_CONFIG_TYPE.sapo, c.const.FORM_CONFIG_TYPE.haravan, c.const.FORM_CONFIG_TYPE.shopify].indexOf(m) &&
                                                1 == h.product.variants.length &&
                                                "Default Title" == h.product.variants[a].title &&
                                                ((h.product.variants[a].title = null), (h.product.variants[a].option1 = null), (h.product.options = [])),
                                            -1 != [c.const.FORM_CONFIG_TYPE.wordpress].indexOf(m) &&
                                                1 == h.product.variants.length &&
                                                h.product.variants[a].title == h.product.variants[a].product_name &&
                                                ((h.product.variants[a].title = null), (h.product.variants[a].option1 = null), (h.product.options = [])),
                                            isEmptyLadiPage(h.product.variants[a].package_quantity) ||
                                                isEmptyLadiPage(h.product.variants[a].package_quantity_unit) ||
                                                (isNullLadiPage(h.product.variants[a].title_old) && (h.product.variants[a].title_old = h.product.variants[a].title),
                                                (h.product.variants[a].title = h.product.variants[a].title_old + " (" + h.product.variants[a].package_quantity + " " + h.product.variants[a].package_quantity_unit + ")"));
                                    if (isArrayLadiPage(h.product.options) && 1 == h.product.options.length && isArrayLadiPage(h.product.options[0].values))
                                        for (
                                            var n = null,
                                                o = function (t) {
                                                    return t.option1 == n;
                                                },
                                                r = 0;
                                            r < h.product.options[0].values.length;
                                            r++
                                        ) {
                                            n = h.product.options[0].values[r].name;
                                            var d = h.product.variants.find(o);
                                            (h.product.options[0].values[r].name_new = h.product.options[0].values[r].label || h.product.options[0].values[r].name),
                                                isEmptyLadiPage(d) ||
                                                    isEmptyLadiPage(d.package_quantity) ||
                                                    isEmptyLadiPage(d.package_quantity_unit) ||
                                                    (h.product.options[0].values[r].name_new = h.product.options[0].values[r].name_new + " (" + d.package_quantity + " " + d.package_quantity_unit + ")");
                                        }
                                }
                                (c.runtime.tmp.product_info[m][_] = h), (l = L()), isFunctionLadiPage(s) && s(l);
                            } else E();
                        },
                        A = { product_id: _ },
                        w = null,
                        T = "POST";
                    return (
                        c.runLimitRequest(20, function () {
                            if (c.runtime.isClient) {
                                var t = c.const.API_LADISALE_SHOW_PRODUCT;
                                m == c.const.FORM_CONFIG_TYPE.ladisales
                                    ? (((w = { "Content-Type": "application/json" })["Store-Id"] = g), (A = JSON.stringify(A)))
                                    : m == c.const.FORM_CONFIG_TYPE.wordpress
                                    ? ((T = "GET"), (t = window.location.origin + "/ladipage/api?action=product_info&product_id=" + _), (A = null))
                                    : ((w = { "Content-Type": "application/json" }), (t = c.const.API_SHOW_PRODUCT), (A = { form_account_id: p, product_id: _ }), (A = JSON.stringify(A))),
                                    c.sendRequest(T, t, A, !0, w, function (t, e, i) {
                                        if (i.readyState == XMLHttpRequest.DONE)
                                            try {
                                                var a = JSON.parse(t);
                                                b(a);
                                            } catch (t) {
                                                E();
                                            }
                                    });
                            } else {
                                var e = function (t) {
                                        isNullLadiPage(t) || b({ data: t });
                                    },
                                    i = LadiPage.getProductInfo(p, _, function (t) {
                                        e(t);
                                    });
                                e(i);
                            }
                        }),
                        l
                    );
                }
                !0 === h
                    ? (c.runtime.tmp.timeout_product_info[m][_] = c.runTimeout(function () {
                          c.generateVariantProduct(t, e, i, a, n, o, r, !1, s);
                      }, 100))
                    : ((l = L()), !d && isFunctionLadiPage(s) && s(l));
            }
        } else if (!isEmptyLadiPage(_)) {
            if (
                (isEmptyLadiPage(c.runtime.tmp.product_info[m]) && (c.runtime.tmp.product_info[m] = {}),
                isEmptyLadiPage(c.runtime.tmp.timeout_product_info[m]) && (c.runtime.tmp.timeout_product_info[m] = {}),
                (_ = String(_)),
                (h = c.runtime.tmp.product_info[m][_]),
                (L = function () {
                    return e ? "" : isObjectLadiPage(h) ? h : null;
                }),
                isNullLadiPage(h))
            )
                return (
                    (c.runtime.tmp.product_info[m][_] = !0),
                    c.loadDataset(y, y, f, v, P, !0, c.runtime.isClient, function (t) {
                        (l = L()), isFunctionLadiPage(s) && s(l);
                    }),
                    l
                );
            !0 === h
                ? (c.runtime.tmp.timeout_product_info[m][_] = c.runTimeout(function () {
                      c.generateVariantProduct(t, e, i, a, n, o, r, !1, s);
                  }, 100))
                : ((l = L()), !d && isFunctionLadiPage(s) && s(l));
        }
        return l;
    }),
    (LadiPageScriptV2.prototype.generateVariantContentString = function (t, e, i, a) {
        var n = [];
        i = isEmptyLadiPage(i) ? " | " : i;
        try {
            isEmptyLadiPage(t) ||
                (e && (t = Base64.decode(t)),
                (t = JSON.parse(t)),
                isArrayLadiPage(t.dynamic_content.hide) && t.dynamic_content.hide.length > 0 && n.push(this.const.LANG.HIDE_ELEMENT + " " + t.dynamic_content.hide.join(", ")),
                isArrayLadiPage(t.dynamic_content.show) && t.dynamic_content.show.length > 0 && n.push(this.const.LANG.SHOW_ELEMENT + " " + t.dynamic_content.show.join(", ")),
                isArrayLadiPage(t.dynamic_content.top) && t.dynamic_content.top.length > 0 && n.push(this.const.LANG.TOP_ELEMENT + " " + t.dynamic_content.top.join(", ")),
                isArrayLadiPage(t.dynamic_content.scroll) && t.dynamic_content.scroll.length > 0 && n.push(this.const.LANG.SCROLL_ELEMENT + " " + t.dynamic_content.scroll.join(", ")),
                isArrayLadiPage(t.dynamic_content.cookie) && t.dynamic_content.cookie.length > 0 && n.push(this.const.LANG.SET_COOKIE + " " + t.dynamic_content.cookie.join("; ")));
        } catch (t) {}
        return a ? n : n.join(i);
    }),
    (LadiPageScriptV2.prototype.reloadFeeShipping = function (t) {
        var e = this;
        e instanceof LadiPageScriptV2 || (e = LadiPageScript);
        var i = function (t, i) {
            window.ladi("_ladipage_" + t).set_cookie(i, 365, "/", window.location.host),
                isArrayLadiPage(e.runtime.DOMAIN_SET_COOKIE) &&
                    e.runtime.DOMAIN_SET_COOKIE.forEach(function (e) {
                        e != window.location.host && window.ladi("_ladipage_" + t).set_cookie(i, 365, "/", e);
                    });
        };
        isEmptyLadiPage(e.runtime.tmp.timeout_reload_fee_shipping) || e.removeTimeout(e.runtime.tmp.timeout_reload_fee_shipping);
        var a = function (t, i) {
            (e.runtime.tmp.add_to_cart_fee_shipping = t), e.changeTotalPriceCart(), isNullLadiPage(i) && ((e.runtime.tmp.add_to_cart_shipping_method_id = null), (i = []));
            for (
                var a = null,
                    n = e.runtime.tmp.add_to_cart_shipping_method_id,
                    o = function (t) {
                        s.setAttribute("data-selected", t.target.value || ""),
                            (e.runtime.tmp.add_to_cart_shipping_method_id = isEmptyLadiPage(s.getAttribute("data-selected")) ? null : s.getAttribute("data-selected")),
                            (parseFloatLadiPage(e.runtime.tmp.add_to_cart_shipping_method_id) || 0) == e.runtime.tmp.add_to_cart_shipping_method_id &&
                                (e.runtime.tmp.add_to_cart_shipping_method_id = parseFloatLadiPage(e.runtime.tmp.add_to_cart_shipping_method_id) || 0),
                            (a = t.target.querySelector('option[value="' + t.target.value + '"]')),
                            (e.runtime.tmp.add_to_cart_fee_shipping = isEmptyLadiPage(a) ? 0 : parseFloatLadiPage(a.getAttribute("data-fee")) || 0),
                            e.changeTotalPriceCart();
                    },
                    r = document.querySelectorAll('select[data-combobox-type="' + e.const.COMBOBOX_TYPE.delivery_method + '"]'),
                    d = 0;
                d < r.length;
                d++
            ) {
                var s = r[d],
                    l = s.getElementsByTagName("option");
                for (
                    "true" != s.getAttribute("data-event") && (s.setAttribute("data-event", !0), s.addEventListener("change", o)), isNullLadiPage(s.getAttribute("data-placeholder")) && s.setAttribute("data-placeholder", l[0].innerHTML);
                    l.length > 0;

                )
                    l[0].parentElement.removeChild(l[0]);
                i.length <= 0 && (((a = document.createElement("option")).innerHTML = s.getAttribute("data-placeholder")), s.appendChild(a));
                for (var c = 0; c < i.length; c++) {
                    a = document.createElement("option");
                    var u = e.formatNumber(i[c].fee, 3);
                    if (e.runtime.tmp.cart.length > 0 && !isEmptyLadiPage(e.runtime.tmp.cart[0].currency) && !isEmptyLadiPage(e.runtime.tmp.cart[0].currency.symbol)) {
                        var p = e.runtime.tmp.cart[0].currency.symbol;
                        u = e.formatCurrency(i[c].fee, p, !0);
                    }
                    (a.innerHTML = i[c].name + " - " + u), a.setAttribute("data-fee", i[c].fee), a.setAttribute("value", i[c].shipping_method_id), n == i[c].shipping_method_id && a.setAttribute("selected", "selected"), s.appendChild(a);
                }
                s.setAttribute("data-selected", n || "");
            }
        };
        e.runtime.tmp.timeout_reload_fee_shipping = e.runTimeout(function () {
            if (0 != e.runtime.tmp.list_form_checkout.length) {
                var n = null;
                if (((n = isEmptyLadiPage(t) ? document.getElementById(e.runtime.tmp.list_form_checkout[0]) : e.findAncestor(t.target, "ladi-form")), isEmptyLadiPage(n))) a(0);
                else {
                    var o = n.querySelector('.ladi-form-item select[name="state"]'),
                        r = n.querySelector('.ladi-form-item [name="district"]'),
                        d = n.querySelector('.ladi-form-item [name="ward"]');
                    if (isEmptyLadiPage(o) || isEmptyLadiPage(r) || isEmptyLadiPage(d)) a(0);
                    else {
                        var s = o.value,
                            l = r.value,
                            c = d.value;
                        if (isEmptyLadiPage(s) || isEmptyLadiPage(l)) return void a(0);
                        var u = { state_id: s.split(":")[0], district_id: l, ward_id: c };
                        (u.state_id = parseInt(u.state_id) || u.state_id),
                            "SELECT" == r.tagName && ((u.district_id = u.district_id.split(":")[0]), (u.district_id = parseInt(u.district_id) || u.district_id)),
                            "SELECT" == d.tagName && ((u.ward_id = u.ward_id.split(":")[0]), (u.ward_id = parseInt(u.ward_id) || u.ward_id));
                        var p = null,
                            m = null,
                            g = null;
                        if (e.runtime.shopping_product_type == e.const.FORM_CONFIG_TYPE.sapo)
                            return (
                                (m = function (t, n) {
                                    (t = t.querySelector("#checkoutForm")),
                                        (p = new FormData()).append("_method", "patch"),
                                        p.append("billingProvince", u.state_id),
                                        p.append("billingDistrict", u.district_id),
                                        p.append("billingWard", u.ward_id),
                                        e.sendRequest("POST", window.location.origin + t.getAttribute("action"), p, !0, g, function (t, n, o) {
                                            if (o.readyState == XMLHttpRequest.DONE) {
                                                if (200 == n)
                                                    try {
                                                        for (var r = 0, d = [], c = e.createTmpElement("div", t, null, !1).querySelectorAll('[for^="shippingMethod-"]'), u = 0; u < c.length; u++) {
                                                            var p = "",
                                                                m = 0,
                                                                g = "",
                                                                _ = c[u].querySelector("span.radio__label__primary");
                                                            isEmptyLadiPage(_) || (p = _.textContent.trim()),
                                                                (_ = c[u].querySelector("span.content-box__emphasis")),
                                                                isEmptyLadiPage(_) || (m = parseFloatLadiPage(_.textContent.trim().replaceAll(".", "").replaceAll(",", ".")) || 0);
                                                            var y = e.findAncestor(c[u], "content-box__row");
                                                            isEmptyLadiPage(y) || ((y = y.querySelector('input[name="shippingMethod"]')), isEmptyLadiPage(y) || (g = y.value)),
                                                                isEmptyLadiPage(p) || isEmptyLadiPage(g) || d.push({ name: p, fee: m, shipping_method_id: g });
                                                        }
                                                        return (
                                                            -1 ==
                                                                d.findIndex(function (t) {
                                                                    return t.shipping_method_id == e.runtime.tmp.add_to_cart_shipping_method_id;
                                                                }) && (e.runtime.tmp.add_to_cart_shipping_method_id = null),
                                                            d.forEach(function (t) {
                                                                isEmptyLadiPage(e.runtime.tmp.add_to_cart_shipping_method_id) && (e.runtime.tmp.add_to_cart_shipping_method_id = t.shipping_method_id),
                                                                    e.runtime.tmp.add_to_cart_shipping_method_id == t.shipping_method_id && (r = t.fee || 0);
                                                            }),
                                                            i("state", s),
                                                            i("district", l),
                                                            void a(r, d)
                                                        );
                                                    } catch (t) {}
                                                a(0);
                                            }
                                        });
                                }),
                                void e.getCheckoutSapo(null, m, a)
                            );
                        if (e.runtime.shopping_product_type == e.const.FORM_CONFIG_TYPE.haravan)
                            return (
                                (m = function (t) {
                                    g = { "X-Requested-With": "XMLHttpRequest" };
                                    var n = e.createTmpElement("a", "", { href: t });
                                    (n.search = n.search + (isEmptyLadiPage(n.search) ? "?" : "&") + "customer_shipping_province=" + u.state_id + "&customer_shipping_district=" + u.district_id + "&form_name=form_update_location"),
                                        (t = n.href),
                                        e.sendRequest("GET", t, null, !0, g, function (t, n, o) {
                                            if (o.readyState == XMLHttpRequest.DONE) {
                                                if (200 == n)
                                                    try {
                                                        for (var r = 0, d = [], c = e.createTmpElement("div", t, null, !1).querySelectorAll('[for^="shipping_rate_id_"]'), u = 0; u < c.length; u++) {
                                                            var p = "",
                                                                m = 0,
                                                                g = "",
                                                                _ = c[u].querySelector("span.radio-label-primary");
                                                            isEmptyLadiPage(_) || (p = _.textContent.trim()),
                                                                (_ = c[u].querySelector("span.content-box-emphasis")),
                                                                isEmptyLadiPage(_) || (m = parseFloatLadiPage(_.textContent.trim().replaceAll(",", "")) || 0);
                                                            var y = c[u].querySelector("input");
                                                            isEmptyLadiPage(y) || (g = y.value), isEmptyLadiPage(p) || isEmptyLadiPage(g) || d.push({ name: p, fee: m, shipping_method_id: g });
                                                        }
                                                        return (
                                                            -1 ==
                                                                d.findIndex(function (t) {
                                                                    return t.shipping_method_id == e.runtime.tmp.add_to_cart_shipping_method_id;
                                                                }) && (e.runtime.tmp.add_to_cart_shipping_method_id = null),
                                                            d.forEach(function (t) {
                                                                isEmptyLadiPage(e.runtime.tmp.add_to_cart_shipping_method_id) && (e.runtime.tmp.add_to_cart_shipping_method_id = t.shipping_method_id),
                                                                    e.runtime.tmp.add_to_cart_shipping_method_id == t.shipping_method_id && (r = t.fee || 0);
                                                            }),
                                                            i("state", s),
                                                            i("district", l),
                                                            void a(r, d)
                                                        );
                                                    } catch (t) {}
                                                a(0);
                                            }
                                        });
                                }),
                                void e.getThirdPartyCheckoutUrl(!1, m)
                            );
                        if (e.runtime.shopping_product_type == e.const.FORM_CONFIG_TYPE.shopify) return void a(0);
                        if (e.runtime.shopping_product_type == e.const.FORM_CONFIG_TYPE.wordpress) return void a(0);
                        var _ = window.ladi("_cart_token").get_cookie(),
                            y = window.ladi("_checkout_token").get_cookie();
                        if (isEmptyLadiPage(_) || isEmptyLadiPage(y)) return void a(0);
                        (g = { "Content-Type": "application/json", "cart-token": _ }),
                            e.sendRequest("POST", e.const.API_LADISALE_GET_SHIPPING.format(y), JSON.stringify(u), !0, g, function (t, i, n) {
                                if (n.readyState == XMLHttpRequest.DONE) {
                                    if (200 == i)
                                        try {
                                            var o = JSON.parse(t);
                                            if (200 == o.code) {
                                                var r = 0;
                                                if (isArrayLadiPage(o.data.shipping_methods))
                                                    -1 ==
                                                        o.data.shipping_methods.findIndex(function (t) {
                                                            return t.shipping_method_id == e.runtime.tmp.add_to_cart_shipping_method_id;
                                                        }) && (e.runtime.tmp.add_to_cart_shipping_method_id = null),
                                                        o.data.shipping_methods.forEach(function (t) {
                                                            isEmptyLadiPage(e.runtime.tmp.add_to_cart_shipping_method_id) && (e.runtime.tmp.add_to_cart_shipping_method_id = t.shipping_method_id),
                                                                e.runtime.tmp.add_to_cart_shipping_method_id == t.shipping_method_id && (r = t.fee || 0);
                                                        });
                                                return void a(r, o.data.shipping_methods);
                                            }
                                        } catch (t) {}
                                    a(0);
                                }
                            });
                    }
                }
            }
        }, 1e3);
    }),
    (LadiPageScriptV2.prototype.getThirdPartyCheckoutUrl = function (t, e) {
        var i = this,
            a = window.location.origin + "/checkout",
            n = function (n, o, r) {
                t && ((a = i.getLinkUTMRedirect(a, null)), (a = i.convertDataReplaceStr(a, !0)), window.ladi(a).open_url()), isFunctionLadiPage(e) && e(a, n, o, r);
            };
        -1 != [i.const.FORM_CONFIG_TYPE.sapo, i.const.FORM_CONFIG_TYPE.haravan, i.const.FORM_CONFIG_TYPE.shopify].indexOf(i.runtime.shopping_product_type) &&
            i.sendRequest("GET", a, null, !0, null, function (t, e, i) {
                i.readyState == XMLHttpRequest.HEADERS_RECEIVED && (a = i.responseURL), i.readyState == XMLHttpRequest.DONE && 200 == e && n(t, e, i);
            }),
            -1 != [i.const.FORM_CONFIG_TYPE.wordpress].indexOf(i.runtime.shopping_product_type) && n(),
            -1 != [i.const.FORM_CONFIG_TYPE.ladisales].indexOf(i.runtime.shopping_product_type) &&
                (isNullLadiPage(i.runtime.shopping_config_checkout_id) ? ((a = i.runtime.tmp.ladisales_checkout_url), n()) : (t && window.ladi("POPUP_CHECKOUT").show(), isFunctionLadiPage(e) && e()));
    }),
    (LadiPageScriptV2.prototype.getCheckoutAll = function (t, e, i) {
        var a = this;
        a.getThirdPartyCheckoutUrl(!1, function (t, i, n, o) {
            try {
                var r = a.createTmpElement("div", i, null, !1);
                return void (isFunctionLadiPage(e) && e(r, i));
            } catch (t) {}
        });
    }),
    (LadiPageScriptV2.prototype.getCheckoutSapo = function (t, e, i) {
        this.getCheckoutAll(t, e, i);
    }),
    (LadiPageScriptV2.prototype.getCheckoutHaravan = function (t, e, i) {
        this.getCheckoutAll(t, e, i);
    }),
    (LadiPageScriptV2.prototype.getCheckoutWordpress = function (t, e, i) {
        this.getCheckoutAll(t, e, i);
    }),
    (LadiPageScriptV2.prototype.getCheckoutShopify = function (t, e, i) {
        return this.getCheckoutAll(t, e, i);
    }),
    (LadiPageScriptV2.prototype.reloadCheckoutSapo = function () {
        var t = this;
        t.getCheckoutSapo(null, function (e, i) {
            var a = 0,
                n = (e = e.querySelector("#checkoutForm")).querySelector("#discountCode .discount-code span.ui-tag__label");
            if (!isEmptyLadiPage(n)) {
                var o = e.querySelector("#discountCode .discount-code .col-block");
                isEmptyLadiPage(o) || (a = parseFloatLadiPage(o.textContent.trim().replaceAll(".", "").replaceAll(",", ".")) || 0);
                var r = document.querySelector("#POPUP_CHECKOUT .ladi-form .ladi-element[data-submit-form-id]");
                if (!isEmptyLadiPage(r)) {
                    var d = t.findAncestor(r, "ladi-form").querySelector('input[name="coupon"]');
                    isEmptyLadiPage(d) || ((d.value = n.textContent.trim()), t.fireEvent(d, "change"), (t.runtime.tmp.current_use_coupon = d.value), t.reloadPriceDiscount({ target: r, discount_price: a }));
                }
            }
        });
    }),
    (LadiPageScriptV2.prototype.reloadCheckoutHaravan = function () {
        var t = this;
        t.getCheckoutHaravan(null, function (e, i) {
            var a = 0,
                n = e.querySelector(".applied-reduction-code-information");
            if (!isEmptyLadiPage(n)) {
                var o = e.querySelector(".total-line-price span[data-checkout-discount-amount-target]");
                isEmptyLadiPage(o) || (a = (parseFloatLadiPage(o.getAttribute("data-checkout-discount-amount-target")) || 0) / 100);
                var r = document.querySelector("#POPUP_CHECKOUT .ladi-form .ladi-element[data-submit-form-id]");
                if (!isEmptyLadiPage(r)) {
                    var d = t.findAncestor(r, "ladi-form").querySelector('input[name="coupon"]');
                    isEmptyLadiPage(d) || ((d.value = n.textContent.trim()), t.fireEvent(d, "change"), (t.runtime.tmp.current_use_coupon = d.value), t.reloadPriceDiscount({ target: r, discount_price: a, docCrawl: e }));
                }
            }
        });
    }),
    (LadiPageScriptV2.prototype.reloadCheckoutWordpress = function () {
        var t = this;
        this.getCheckoutWordpress(null, function (e, i) {
            var a = 0,
                n = e.querySelector("#order_review .cart-discount");
            if (!isEmptyLadiPage(n)) {
                var o = n.querySelector("a[data-coupon]");
                if (!isEmptyLadiPage(o)) {
                    var r = n.querySelector(".woocommerce-Price-amount");
                    isEmptyLadiPage(r) || (a = parseFloatLadiPage(r.textContent.trim().replaceAll(".", "").replaceAll(",", ".")) || 0);
                    var d = document.querySelector("#POPUP_CHECKOUT .ladi-form .ladi-element[data-submit-form-id]");
                    if (!isEmptyLadiPage(d)) {
                        var s = t.findAncestor(d, "ladi-form").querySelector('input[name="coupon"]');
                        isEmptyLadiPage(s) || ((s.value = o.getAttribute("data-coupon")), t.fireEvent(s, "change"), (t.runtime.tmp.current_use_coupon = s.value), t.reloadPriceDiscount({ target: d, discount_price: a, docCrawl: e }));
                    }
                }
            }
        });
    }),
    (LadiPageScriptV2.prototype.reloadPriceDiscount = function (t) {
        var e = this;
        e instanceof LadiPageScriptV2 || (e = LadiPageScript);
        var i = e.runtime.tmp.current_use_coupon,
            a = function (n, o) {
                (e.runtime.tmp.add_to_cart_discount = n), (e.runtime.tmp.is_click_check_price_discount = !1), e.changeTotalPriceCart();
                var r = null,
                    d = document.getElementsByClassName("ladi-form-remove-coupon")[0];
                isEmptyLadiPage(d) || ((r = e.findAncestor(d, "ladi-form")), d.parentElement.removeChild(d));
                var s = document.querySelector('.ladi-form-item input[name="coupon"].pointer-events-none');
                if ((isEmptyLadiPage(s) || s.classList.remove("pointer-events-none"), !isEmptyLadiPage(e.runtime.tmp.current_use_coupon))) {
                    if ((isEmptyLadiPage(r) && !isEmptyLadiPage(t) && (r = e.findAncestor(t.target, "ladi-form")), isEmptyLadiPage(r))) return;
                    if (((s = r.querySelector('.ladi-form-item input[name="coupon"]')), isEmptyLadiPage(s))) return;
                    ((d = document.createElement("span")).className = "ladi-form-remove-coupon"),
                        (d.innerHTML = "⌫"),
                        d.addEventListener("click", function (t) {
                            t.stopPropagation();
                            var i = e.runtime.tmp.current_use_coupon;
                            if (
                                ((s.value = ""),
                                e.fireEvent(s, "change"),
                                (e.runtime.tmp.current_use_coupon = null),
                                a(0),
                                -1 != [e.const.FORM_CONFIG_TYPE.sapo, e.const.FORM_CONFIG_TYPE.haravan, e.const.FORM_CONFIG_TYPE.shopify, e.const.FORM_CONFIG_TYPE.wordpress].indexOf(e.runtime.shopping_product_type))
                            ) {
                                var n = document.querySelector("#POPUP_CHECKOUT .ladi-form .ladi-element[data-submit-form-id]");
                                isEmptyLadiPage(n) || e.reloadPriceDiscount({ isRemoveCoupon: !0, couponOld: i, target: n });
                            }
                        }),
                        e.findAncestor(s, "ladi-form-item").appendChild(d),
                        s.classList.add("pointer-events-none");
                }
                if ((i != e.runtime.tmp.current_use_coupon || isEmptyLadiPage(t) || !t.isRemoveCoupon || !isEmptyLadiPage(t.docCrawl)) && e.runtime.shopping_product_type == e.const.FORM_CONFIG_TYPE.haravan) {
                    if ((delete e.runtime.tmp.use_cart_line_price_original, !isEmptyLadiPage(e.runtime.tmp.current_use_coupon))) {
                        var l = o.querySelector(".order-summary-emphasis[data-checkout-subtotal-price-target]");
                        if (!isEmptyLadiPage(l)) (l = (parseFloatLadiPage(l.getAttribute("data-checkout-subtotal-price-target")) || 0) / 100), e.changeTotalPriceCart(!0).cart_price != l && (e.runtime.tmp.use_cart_line_price_original = !0);
                    }
                    e.updateCartPromotion();
                }
            };
        isEmptyLadiPage(t) || isEmptyLadiPage(t.discount_price)
            ? e.runtime.tmp.is_click_check_price_discount ||
              (isEmptyLadiPage(t) && isEmptyLadiPage(e.runtime.tmp.current_use_coupon)) ||
              (isEmptyLadiPage(e.runtime.tmp.timeout_reload_price_discount) || e.removeTimeout(e.runtime.tmp.timeout_reload_price_discount),
              (e.runtime.tmp.timeout_reload_price_discount = e.runTimeout(
                  function () {
                      if (0 != e.runtime.tmp.list_form_checkout.length) {
                          var i = null;
                          if (
                              (isEmptyLadiPage(t)
                                  ? (i = document.getElementById(e.runtime.tmp.list_form_checkout[0]))
                                  : ((i = e.findAncestor(t.target, "ladi-form")),
                                    isEmptyLadiPage(i) || ((i = i.querySelector("[data-submit-form-id]")), isEmptyLadiPage(i) || (i = document.getElementById(i.getAttribute("data-submit-form-id"))))),
                              isEmptyLadiPage(i))
                          )
                              a(0);
                          else {
                              var n = null,
                                  o = i.querySelector('.ladi-form-item input[name="email"]'),
                                  r = i.querySelector('.ladi-form-item input[name="phone"]'),
                                  d = i.querySelector('.ladi-form-item input[name="coupon"]');
                              if (isEmptyLadiPage(d)) a(0);
                              else {
                                  var s = e.runtime.tmp.current_use_coupon;
                                  e.runtime.tmp.current_use_coupon = null;
                                  var l = d.value;
                                  if (isEmptyLadiPage(l) && (isEmptyLadiPage(t) || !t.isRemoveCoupon)) return void a(0);
                                  if (isEmptyLadiPage(t) && l != s) return void a(0);
                                  (n = { discount_code: l }), isEmptyLadiPage(o) || (n.email = o.value), isEmptyLadiPage(r) || (n.phone = r.value), (e.runtime.tmp.is_click_check_price_discount = !0);
                                  var c = null,
                                      u = null,
                                      p = null;
                                  if (e.runtime.shopping_product_type == e.const.FORM_CONFIG_TYPE.sapo)
                                      return (
                                          (u = function (i, o) {
                                              (i = i.querySelector("#checkoutForm")),
                                                  (p = new FormData()).append("_method", "patch"),
                                                  p.append("reductionCode", n.discount_code),
                                                  p.append("email", n.email),
                                                  e.sendRequest("POST", window.location.origin + i.getAttribute("action"), p, !0, c, function (i, n, o) {
                                                      if (o.readyState == XMLHttpRequest.DONE) {
                                                          if (200 == n)
                                                              try {
                                                                  var r = 0,
                                                                      d = e.createTmpElement("div", i, null, !1),
                                                                      s = d.querySelector("#discountCode .discount-code span.ui-tag__label");
                                                                  if (isEmptyLadiPage(s)) {
                                                                      var c = d.querySelector("#discountCode .field__message--error");
                                                                      isEmptyLadiPage(c) || isEmptyLadiPage(c.textContent.trim()) || isEmptyLadiPage(t) || e.showMessage(c.textContent.trim());
                                                                  } else {
                                                                      e.runtime.tmp.current_use_coupon = l;
                                                                      var u = d.querySelector("#discountCode .discount-code .col-block");
                                                                      isEmptyLadiPage(u) || (r = parseFloatLadiPage(u.textContent.trim().replaceAll(".", "").replaceAll(",", ".")) || 0);
                                                                  }
                                                                  return void a(r);
                                                              } catch (t) {}
                                                          isEmptyLadiPage(t) || e.showMessage(e.const.LANG.REQUEST_SEND_ERROR), a(0);
                                                      }
                                                  });
                                          }),
                                          void e.getCheckoutSapo(t, u, a)
                                      );
                                  if (e.runtime.shopping_product_type == e.const.FORM_CONFIG_TYPE.haravan)
                                      return (
                                          (u = function (i) {
                                              c = { "X-Requested-With": "XMLHttpRequest" };
                                              var o = e.createTmpElement("a", "", { href: i });
                                              isEmptyLadiPage(n.discount_code)
                                                  ? (o.search = o.search + (isEmptyLadiPage(o.search) ? "?" : "&") + "form_name=form_discount_remove")
                                                  : (o.search = o.search + (isEmptyLadiPage(o.search) ? "?" : "&") + "discount.code=" + n.discount_code + "&form_name=form_discount_add"),
                                                  (i = o.href),
                                                  e.sendRequest("GET", i, null, !0, c, function (i, n, o) {
                                                      if (o.readyState == XMLHttpRequest.DONE) {
                                                          if (200 == n)
                                                              try {
                                                                  var r = 0,
                                                                      d = e.createTmpElement("div", i, null, !1),
                                                                      s = d.querySelector(".applied-reduction-code-information");
                                                                  if (isEmptyLadiPage(s) || s.textContent.trim().toLowerCase() != l.trim().toLowerCase()) {
                                                                      var c = d.querySelector("#form_discount_add .field-message-error");
                                                                      isEmptyLadiPage(c) || isEmptyLadiPage(c.textContent.trim()) || isEmptyLadiPage(t) || e.showMessage(c.textContent.trim());
                                                                  } else {
                                                                      e.runtime.tmp.current_use_coupon = l;
                                                                      var u = d.querySelector(".total-line-price span[data-checkout-discount-amount-target]");
                                                                      isEmptyLadiPage(u) || (r = (parseFloatLadiPage(u.getAttribute("data-checkout-discount-amount-target")) || 0) / 100);
                                                                  }
                                                                  return void a(r, d);
                                                              } catch (t) {}
                                                          isEmptyLadiPage(t) || e.showMessage(e.const.LANG.REQUEST_SEND_ERROR), a(0);
                                                      }
                                                  });
                                          }),
                                          void e.getThirdPartyCheckoutUrl(!1, u)
                                      );
                                  if (e.runtime.shopping_product_type == e.const.FORM_CONFIG_TYPE.shopify) return void a(0);
                                  if (e.runtime.shopping_product_type == e.const.FORM_CONFIG_TYPE.wordpress) {
                                      var m = window.location.origin + "/ladipage/api";
                                      return (
                                          isEmptyLadiPage(n.discount_code) ? (m += "?action=remove_coupon&coupon=" + (isEmptyLadiPage(t) ? "" : t.couponOld)) : (m += "?action=apply_coupon&coupon=" + n.discount_code),
                                          void e.sendRequest("GET", m, null, !0, c, function (i, n, o) {
                                              if (o.readyState == XMLHttpRequest.DONE) {
                                                  if (200 == n)
                                                      try {
                                                          var r = JSON.parse(i);
                                                          if (200 == r.code) return (e.runtime.tmp.current_use_coupon = l), void a(r.data);
                                                          isEmptyLadiPage(r.message) || isEmptyLadiPage(t) || e.showMessage(r.message);
                                                      } catch (t) {}
                                                  a(0);
                                              }
                                          })
                                      );
                                  }
                                  var g = window.ladi("_cart_token").get_cookie(),
                                      _ = window.ladi("_checkout_token").get_cookie();
                                  if (isEmptyLadiPage(g) || isEmptyLadiPage(_)) return void a(0);
                                  (c = { "Content-Type": "application/json", "cart-token": g }),
                                      e.sendRequest("POST", e.const.API_LADISALE_VALIDATE_DISCOUNT.format(_), JSON.stringify(n), !0, c, function (i, n, o) {
                                          if (o.readyState == XMLHttpRequest.DONE) {
                                              if (200 == n)
                                                  try {
                                                      var r = JSON.parse(i);
                                                      if (200 == r.code)
                                                          return isEmptyLadiPage(r.data.discount_error) ? (e.runtime.tmp.current_use_coupon = l) : isEmptyLadiPage(t) || e.showMessage(r.data.discount_error), void a(r.data.discount_price);
                                                  } catch (t) {}
                                              a(0);
                                          }
                                      });
                              }
                          }
                      }
                  },
                  isEmptyLadiPage(t) ? 1e3 : 0
              )))
            : a(t.discount_price, t.docCrawl);
    }),
    (LadiPageScriptV2.prototype.updateCartPromotion = function (t, e, i) {
        var a = this,
            n = function (t) {
                for (var e = 0; e < a.runtime.tmp.cart.length; e++) {
                    var i = a.runtime.tmp.cart[e];
                    if (i.product_id == t.product_id && i.product_variant_id == t.product_variant_id) {
                        a.runtime.tmp.use_cart_line_price_original || t.sub_total == t.total ? delete i.promotion : (i.promotion = t), (a.runtime.tmp.cart[e] = i);
                        for (var n = document.querySelectorAll('.ladi-cart .ladi-cart-row .ladi-cart-price span[data-product-variant-id="' + i.product_variant_id + '"]'), o = 0; o < n.length; o++) {
                            var r = a.findAncestor(n[o], "ladi-cart-row"),
                                d = r.querySelector(".ladi-cart-price"),
                                s = r.querySelector(".ladi-cart-title"),
                                l = d.querySelector("span.price-compare"),
                                c = s.querySelector("span.promotion-name");
                            if (isObjectLadiPage(i.promotion)) {
                                r.classList.add("has-promotion"), isEmptyLadiPage(l) && (((l = document.createElement("span")).className = "price-compare"), d.appendChild(l));
                                var u = a.formatNumber(t.total, 3);
                                isObjectLadiPage(i.currency) && !isEmptyLadiPage(i.currency.symbol) && (u = a.formatCurrency(t.total, i.currency.symbol, !0)),
                                    (l.innerHTML = u),
                                    isEmptyLadiPage(c) && (((c = document.createElement("span")).className = "promotion-name"), s.appendChild(c)),
                                    (c.innerHTML = i.promotion.discount.note);
                            } else r.classList.remove("has-promotion"), isEmptyLadiPage(l) || l.parentElement.removeChild(l), isEmptyLadiPage(c) || c.parentElement.removeChild(c);
                        }
                    }
                }
            },
            o = function () {
                var t = [];
                return (
                    isArrayLadiPage(a.runtime.tmp.cart) &&
                        a.runtime.tmp.cart.forEach(function (e) {
                            var i = e.quantity;
                            t.push({ product_id: e.product_id, product_variant_id: e.product_variant_id, quantity: i });
                        }),
                    { variants: t }
                );
            },
            r = o(),
            d = JSON.stringify(r);
        if ((isObjectLadiPage(a.runtime.tmp.info_update_cart_promotion) || (a.runtime.tmp.info_update_cart_promotion = {}), !isEmptyLadiPage(t))) {
            var s = [],
                l = a.runtime.tmp.cart;
            a.runtime.tmp.cart = [];
            return (
                -1 != [a.const.FORM_CONFIG_TYPE.sapo, a.const.FORM_CONFIG_TYPE.haravan, a.const.FORM_CONFIG_TYPE.shopify].indexOf(a.runtime.shopping_product_type) &&
                    t.items.forEach(function (e) {
                        var i = null;
                        -1 != [a.const.FORM_CONFIG_TYPE.sapo].indexOf(a.runtime.shopping_product_type) && e.name == e.title && "Default Title" == e.variant_title && (e.variant_title = null),
                            -1 != [a.const.FORM_CONFIG_TYPE.haravan, a.const.FORM_CONFIG_TYPE.shopify].indexOf(a.runtime.shopping_product_type) && e.product_title == e.title && "Default Title" == e.variant_title && (e.variant_title = null),
                            -1 != [a.const.FORM_CONFIG_TYPE.sapo, a.const.FORM_CONFIG_TYPE.haravan].indexOf(a.runtime.shopping_product_type) &&
                                (i = {
                                    store_id: -1,
                                    product_id: e.product_id,
                                    product_variant_id: e.variant_id,
                                    name: e.title,
                                    title: e.variant_title,
                                    image: e.image,
                                    quantity: e.quantity,
                                    inventory_checked: 0,
                                    available_quantity: 0,
                                    min_buy: 1,
                                    max_buy: null,
                                }),
                            -1 != [a.const.FORM_CONFIG_TYPE.shopify].indexOf(a.runtime.shopping_product_type) &&
                                (i = {
                                    store_id: -1,
                                    product_id: e.product_id,
                                    product_variant_id: e.variant_id,
                                    name: e.product_title,
                                    title: e.variant_title,
                                    image: e.image,
                                    quantity: e.quantity,
                                    inventory_checked: 0,
                                    available_quantity: 0,
                                    min_buy: 1,
                                    max_buy: null,
                                });
                        var n = a.runtime.currency;
                        a.runtime.isClient || (n = window.$rootScope.getStoreCurrency()),
                            -1 == [a.const.FORM_CONFIG_TYPE.shopify].indexOf(a.runtime.shopping_product_type) || isEmptyLadiPage(t.currency) || (n = t.currency),
                            (i.currency = { code: n, symbol: a.formatCurrency(null, n, !1, !0) });
                        var o = l.findIndex(function (t) {
                            return t.product_id == i.product_id && t.product_variant_id == i.product_variant_id;
                        });
                        -1 != o && (i.title = l[o].title);
                        var r = null,
                            d = null;
                        if (-1 != [a.const.FORM_CONFIG_TYPE.sapo, a.const.FORM_CONFIG_TYPE.haravan].indexOf(a.runtime.shopping_product_type)) {
                            if (((i.price = e.price_original), isObjectLadiPage(e.properties))) {
                                var c = Object.keys(e.properties);
                                c.length > 0 &&
                                    ((r = e.properties[c[0]]),
                                    -1 != [a.const.FORM_CONFIG_TYPE.haravan].indexOf(a.runtime.shopping_product_type) && ((r = r.split("-")).shift(), (r = (r = r.join("-")).trim())),
                                    (d = { product_id: e.product_id, product_variant_id: e.variant_id, sub_total: e.line_price_original, total: e.line_price, discount: { note: r } }),
                                    (i.promotion = d),
                                    s.push(d));
                            }
                            isEmptyLadiPage(i.promotion) && -1 != [a.const.FORM_CONFIG_TYPE.sapo].indexOf(a.runtime.shopping_product_type) && (i.price = e.price);
                        }
                        -1 != [a.const.FORM_CONFIG_TYPE.shopify].indexOf(a.runtime.shopping_product_type) &&
                            ((i.price = e.original_price),
                            e.original_line_price != e.line_price &&
                                isArrayLadiPage(e.discounts) &&
                                e.discounts.length > 0 &&
                                ((r = e.discounts[0].title), (d = { product_id: e.product_id, product_variant_id: e.variant_id, sub_total: e.original_line_price, total: e.line_price, discount: { note: r } }), (i.promotion = d), s.push(d))),
                            -1 != [a.const.FORM_CONFIG_TYPE.haravan, a.const.FORM_CONFIG_TYPE.shopify].indexOf(a.runtime.shopping_product_type) &&
                                ((i.price = i.price / 100), isEmptyLadiPage(i.promotion) || ((i.promotion.total = i.promotion.total / 100), (i.promotion.sub_total = i.promotion.sub_total / 100))),
                            a.runtime.tmp.cart.push(i);
                    }),
                -1 != [a.const.FORM_CONFIG_TYPE.wordpress].indexOf(a.runtime.shopping_product_type) &&
                    t.data.forEach(function (t) {
                        var e = null;
                        isObjectLadiPage(t.variation) && (e = Object.values(t.variation).join(", "));
                        var i = {
                                store_id: -1,
                                product_id: t.product_id,
                                product_variant_id: t.variation_id,
                                name: t.product_name,
                                title: e,
                                min_buy: 1,
                                max_buy: null,
                                price: t.price,
                                image: t.image || "",
                                quantity: t.quantity,
                                inventory_checked: 0,
                                available_quantity: 0,
                            },
                            n = t.currency;
                        isEmptyLadiPage(n) && (n = a.runtime.currency), a.runtime.isClient || (n = window.$rootScope.getStoreCurrency()), (i.currency = { code: n, symbol: a.formatCurrency(null, n, !1, !0) });
                        var o = l.findIndex(function (t) {
                            return t.product_id == i.product_id && t.product_variant_id == i.product_variant_id;
                        });
                        -1 != o && (i.title = l[o].title), (i.cart_item_key = t.key), a.runtime.tmp.cart.push(i);
                    }),
                (r = o()),
                (d = JSON.stringify(r)),
                s.forEach(n),
                void (a.runtime.tmp.info_update_cart_promotion[d] = s)
            );
        }
        if (!0 !== a.runtime.tmp.info_update_cart_promotion[d]) {
            if (isArrayLadiPage(a.runtime.tmp.info_update_cart_promotion[d])) return a.runtime.tmp.info_update_cart_promotion[d].forEach(n), void a.changeTotalPriceCart();
            if (((a.runtime.tmp.info_update_cart_promotion[d] = !0), -1 == [a.const.FORM_CONFIG_TYPE.sapo, a.const.FORM_CONFIG_TYPE.haravan, a.const.FORM_CONFIG_TYPE.shopify].indexOf(a.runtime.shopping_product_type)))
                if (-1 == [a.const.FORM_CONFIG_TYPE.wordpress].indexOf(a.runtime.shopping_product_type)) {
                    var c = window.ladi("_cart_token").get_cookie(),
                        u = { "Content-Type": "application/json" };
                    isEmptyLadiPage(c) || (u["cart-token"] = c),
                        a.sendRequest("POST", a.const.API_LADISALE_PROMOTION, JSON.stringify(r), !0, u, function (t, e, o) {
                            if (o.readyState == XMLHttpRequest.DONE) {
                                if (200 == e)
                                    try {
                                        var r = JSON.parse(t);
                                        if (200 == r.code && isObjectLadiPage(r.data) && isArrayLadiPage(r.data.variants))
                                            return r.data.variants.forEach(n), (a.runtime.tmp.info_update_cart_promotion[d] = r.data.variants), a.changeTotalPriceCart(), void (isFunctionLadiPage(i) && i());
                                    } catch (t) {}
                                delete a.runtime.tmp.info_update_cart_promotion[d], isFunctionLadiPage(i) && i();
                            }
                        });
                } else
                    a.sendRequest("GET", window.location.origin + "/ladipage/api?action=cart_info", null, !0, null, function (t, n, o) {
                        if (o.readyState == XMLHttpRequest.DONE) {
                            if (200 == n)
                                try {
                                    var r = JSON.parse(t);
                                    delete a.runtime.tmp.info_update_cart_promotion[d];
                                    a.updateCartPromotion(r);
                                    return e && a.runtime.tmp.cart.length > 0 && a.reloadCheckoutWordpress(), a.changeTotalPriceCart(), void (isFunctionLadiPage(i) && i());
                                } catch (t) {}
                            delete a.runtime.tmp.info_update_cart_promotion[d], isFunctionLadiPage(i) && i();
                        }
                    });
            else
                a.sendRequest("GET", window.location.origin + "/cart.js", null, !0, null, function (t, n, o) {
                    if (o.readyState == XMLHttpRequest.DONE) {
                        if (200 == n)
                            try {
                                var r = JSON.parse(t);
                                delete a.runtime.tmp.info_update_cart_promotion[d];
                                a.updateCartPromotion(r);
                                return (
                                    e &&
                                        a.runtime.tmp.cart.length > 0 &&
                                        (-1 != [a.const.FORM_CONFIG_TYPE.sapo].indexOf(a.runtime.shopping_product_type) && a.reloadCheckoutSapo(),
                                        -1 != [a.const.FORM_CONFIG_TYPE.haravan].indexOf(a.runtime.shopping_product_type) && a.reloadCheckoutHaravan(),
                                        [a.const.FORM_CONFIG_TYPE.shopify].indexOf(a.runtime.shopping_product_type)),
                                    a.changeTotalPriceCart(),
                                    void (isFunctionLadiPage(i) && i())
                                );
                            } catch (t) {}
                        delete a.runtime.tmp.info_update_cart_promotion[d], isFunctionLadiPage(i) && i();
                    }
                });
        }
    }),
    (LadiPageScriptV2.prototype.addCartCookie = function (t, e, i, a, n) {
        var o = this,
            r = {},
            d = null,
            s = null;
        if (-1 != [o.const.FORM_CONFIG_TYPE.sapo, o.const.FORM_CONFIG_TYPE.haravan, o.const.FORM_CONFIG_TYPE.shopify].indexOf(o.runtime.shopping_product_type))
            return (
                -1 != [o.const.FORM_CONFIG_TYPE.sapo].indexOf(o.runtime.shopping_product_type) &&
                    ((d = { "Content-Type": "application/x-www-form-urlencoded", "X-Requested-With": "XMLHttpRequest" }),
                    (s = { variantId: e.product_variant_id, quantity: e.quantity }),
                    (s = Object.keys(s)
                        .reduce(function (t, e) {
                            return t.push(e + "=" + encodeURIComponent(s[e])), t;
                        }, [])
                        .join("&"))),
                -1 != [o.const.FORM_CONFIG_TYPE.haravan].indexOf(o.runtime.shopping_product_type) &&
                    ((d = { "Content-Type": "application/x-www-form-urlencoded", "X-Requested-With": "XMLHttpRequest" }),
                    (s = { id: e.product_variant_id, quantity: e.quantity }),
                    (s = Object.keys(s)
                        .reduce(function (t, e) {
                            return t.push(e + "=" + encodeURIComponent(s[e])), t;
                        }, [])
                        .join("&"))),
                -1 != [o.const.FORM_CONFIG_TYPE.shopify].indexOf(o.runtime.shopping_product_type) &&
                    ((d = { "Content-Type": "application/x-www-form-urlencoded", "X-Requested-With": "XMLHttpRequest" }),
                    (s = { id: e.product_variant_id, quantity: e.quantity, form_type: "product" }),
                    (s = Object.keys(s)
                        .reduce(function (t, e) {
                            return t.push(e + "=" + encodeURIComponent(s[e])), t;
                        }, [])
                        .join("&"))),
                void this.sendRequest("POST", window.location.origin + "/cart/add.js", s, !0, d, function (t, e, d) {
                    if (d.readyState == XMLHttpRequest.DONE) {
                        if (200 == e)
                            try {
                                if (((r = JSON.parse(t)), !isEmptyLadiPage(r.id))) return isFunctionLadiPage(i) && i(), isFunctionLadiPage(n) && n(), o.reloadPriceDiscount(), void o.reloadFeeShipping();
                            } catch (t) {}
                        isFunctionLadiPage(a) && a(r), isFunctionLadiPage(n) && n();
                    }
                })
            );
        if (-1 == [o.const.FORM_CONFIG_TYPE.wordpress].indexOf(o.runtime.shopping_product_type)) {
            var l = window.ladi("_cart_token").get_cookie();
            ((d = { "Content-Type": "application/json" })["store-id"] = t), isEmptyLadiPage(l) || (d["cart-token"] = l);
            var c = e.quantity;
            (s = JSON.stringify({ type: "LP", product_variant_id: e.product_variant_id, quantity: c })),
                this.sendRequest("POST", this.const.API_LADISALE_ADD, s, !0, d, function (t, e, d) {
                    if (d.readyState == XMLHttpRequest.DONE) {
                        if (200 == e)
                            try {
                                if (200 == (r = JSON.parse(t)).code)
                                    return (
                                        window.ladi("_cart_token").set_cookie(r.data.cart_token, 30),
                                        window.ladi("_checkout_token").set_cookie(r.data.checkout_token, 30),
                                        (o.runtime.tmp.ladisales_checkout_url = r.data.url),
                                        isFunctionLadiPage(i) && i(),
                                        isFunctionLadiPage(n) && n(),
                                        o.reloadPriceDiscount(),
                                        void o.reloadFeeShipping()
                                    );
                            } catch (t) {}
                        isFunctionLadiPage(a) && a(r), isFunctionLadiPage(n) && n();
                    }
                });
        } else
            this.sendRequest("POST", window.location.origin + "/ladipage/api?action=cart_add&product_id=" + e.product_id + "&variant_id=" + e.product_variant_id + "&qty=" + e.quantity, s, !0, d, function (t, e, d) {
                if (d.readyState == XMLHttpRequest.DONE) {
                    if (200 == e)
                        try {
                            if (200 == (r = JSON.parse(t)).code) return o.updateCartPromotion(r), isFunctionLadiPage(i) && i(), isFunctionLadiPage(n) && n(), o.reloadPriceDiscount(), void o.reloadFeeShipping();
                        } catch (t) {}
                    isFunctionLadiPage(a) && a(r), isFunctionLadiPage(n) && n();
                }
            });
    }),
    (LadiPageScriptV2.prototype.updateCartCookie = function (t, e, i, a, n) {
        var o = this,
            r = {},
            d = null,
            s = null,
            l = null;
        if (-1 == [o.const.FORM_CONFIG_TYPE.sapo, o.const.FORM_CONFIG_TYPE.haravan, o.const.FORM_CONFIG_TYPE.shopify].indexOf(o.runtime.shopping_product_type)) {
            if (-1 != [o.const.FORM_CONFIG_TYPE.wordpress].indexOf(o.runtime.shopping_product_type))
                return (
                    (l = window.location.origin + "/ladipage/api?action=cart_update_item_qty&cart_item_key=" + t.cart_item_key + "&qty=" + t.quantity),
                    e && (l = 0 == t.quantity ? window.location.origin + "/ladipage/api?action=cart_empty" : window.location.origin + "/ladipage/api?action=cart_update_item_qty&qty=" + t.quantity),
                    void this.sendRequest("POST", l, d, !0, s, function (t, e, d) {
                        if (d.readyState == XMLHttpRequest.DONE) {
                            if (200 == e)
                                try {
                                    if (200 == (r = JSON.parse(t)).code) return o.updateCartPromotion(r), isFunctionLadiPage(i) && i(), isFunctionLadiPage(n) && n(), o.reloadPriceDiscount(), void o.reloadFeeShipping();
                                } catch (t) {}
                            isFunctionLadiPage(a) && a(r), isFunctionLadiPage(n) && n();
                        }
                    })
                );
            var c = window.ladi("_cart_token").get_cookie();
            (s = { "Content-Type": "application/json" }), isEmptyLadiPage(c) || (s["cart-token"] = c);
            var u = t.quantity;
            (d = JSON.stringify({ product_variant_id: t.product_variant_id, quantity: u })),
                this.sendRequest("POST", this.const.API_LADISALE_UPDATE, d, !0, s, function (t, e, d) {
                    if (d.readyState == XMLHttpRequest.DONE) {
                        if (200 == e)
                            try {
                                if (200 == (r = JSON.parse(t)).code) return isFunctionLadiPage(i) && i(), isFunctionLadiPage(n) && n(), o.reloadPriceDiscount(), void o.reloadFeeShipping();
                            } catch (t) {}
                        isFunctionLadiPage(a) && a(r), isFunctionLadiPage(n) && n();
                    }
                });
        } else {
            if (
                (-1 != [o.const.FORM_CONFIG_TYPE.sapo].indexOf(o.runtime.shopping_product_type) &&
                    ((l = window.location.origin + "/cart/change.js"),
                    (s = { "Content-Type": "application/x-www-form-urlencoded", "X-Requested-With": "XMLHttpRequest" }),
                    (d = { variantId: t.product_variant_id, quantity: t.quantity }),
                    (d = Object.keys(d)
                        .reduce(function (t, e) {
                            return t.push(e + "=" + encodeURIComponent(d[e])), t;
                        }, [])
                        .join("&"))),
                -1 != [o.const.FORM_CONFIG_TYPE.haravan].indexOf(o.runtime.shopping_product_type) &&
                    ((l = window.location.origin + "/cart/update.js"),
                    (s = { "Content-Type": "application/x-www-form-urlencoded", "X-Requested-With": "XMLHttpRequest" }),
                    (d = o.runtime.tmp.cart
                        .reduce(function (i, a) {
                            var n = a.quantity;
                            return (e || a.product_variant_id == t.product_variant_id) && (n = t.quantity), i.push("updates[]=" + encodeURIComponent(n)), i;
                        }, [])
                        .join("&"))),
                -1 != [o.const.FORM_CONFIG_TYPE.shopify].indexOf(o.runtime.shopping_product_type))
            ) {
                (l = window.location.origin + "/cart/change.js"), (s = { "Content-Type": "application/json", "X-Requested-With": "XMLHttpRequest" });
                var p = o.runtime.tmp.cart.findIndex(function (e) {
                    return e.product_variant_id == t.product_variant_id;
                });
                if (-1 == p) return;
                d = JSON.stringify({ line: p + 1, quantity: t.quantity });
            }
            this.sendRequest("POST", l, d, !0, s, function (t, e, d) {
                if (d.readyState == XMLHttpRequest.DONE) {
                    if (200 == e)
                        try {
                            if (((r = JSON.parse(t)), !isEmptyLadiPage(r.token))) return o.updateCartPromotion(r), isFunctionLadiPage(i) && i(), isFunctionLadiPage(n) && n(), o.reloadPriceDiscount(), void o.reloadFeeShipping();
                        } catch (t) {}
                    isFunctionLadiPage(a) && a(r), isFunctionLadiPage(n) && n();
                }
            });
        }
    }),
    (LadiPageScriptV2.prototype.getMessageNameProduct = function (t, e) {
        var i = this.const.LANG.PRODUCT;
        return isObjectLadiPage(t) && (t.product_type == this.const.PRODUCT_TYPE.event ? (i = this.const.LANG.TICKET) : t.product_type == this.const.PRODUCT_TYPE.service && (i = this.const.LANG.SERVICE)), e || (i = i.toLowerCase()), i;
    }),
    (LadiPageScriptV2.prototype.loadCollectionData = function (t, e, i, a, n) {
        var o = this,
            r = e["option.product_type"],
            d = e["option.ladisale_store_id"],
            s = e["option.product_tag_id"],
            l = e["option.collection_setting.type"],
            c = o.runtime.eventData[t];
        if (!isEmptyLadiPage(c) && "collection" == c.type) {
            var u = this.runtime.isDesktop ? this.const.DESKTOP : this.const.MOBILE,
                p = parseFloatLadiPage(c[u + ".option.collection_setting.row"]) || 0,
                m = parseFloatLadiPage(c[u + ".option.collection_setting.column"]) || 0,
                g = parseFloatLadiPage(c[u + ".option.collection_setting.margin"]) || 0,
                _ = function (t, e, i, a, n, r) {
                    if (
                        ((i = o.copy(i)),
                        Object.keys(a).forEach(function (t) {
                            i[t] = a[t];
                        }),
                        a["option.input_type"] == o.const.INPUT_TYPE.product_variant)
                    ) {
                        var d = o.generateVariantProduct(i, !0, a["option.product_variant_type"], a["option.product_variant_title"], a["option.product_variant_price"], a["option.input_tabindex"], o.runtime.isClient, !0, function (o) {
                                _(t, e, i, a, n, r);
                            }),
                            s = function (e) {
                                o.updateProductVariantSelectOption(e, i, a, !1, function () {
                                    var i = o.getProductVariantId(e.target, n),
                                        a = n.variants.findIndex(function (t) {
                                            return t.product_variant_id == i;
                                        }),
                                        d = o.findAncestor(e.target, "ladi-element");
                                    if (!isEmptyLadiPage(d)) {
                                        var s = o.findAncestor(d, "ladi-collection-item");
                                        if (!isEmptyLadiPage(s))
                                            for (var l = s.querySelectorAll('[data-variant="true"]'), c = 0; c < l.length; c++)
                                                if (l[c].id != d.id) {
                                                    var u = o.runtime.eventData[l[c].id],
                                                        p = null,
                                                        m = null,
                                                        g = null,
                                                        _ = 0;
                                                    if (u["option.product_variant_type"] == o.const.PRODUCT_VARIANT_TYPE.combobox && ((m = n.variants[a]), isObjectLadiPage(m) && isStringLadiPage(m.option_ids)))
                                                        for (g = m.option_ids.split("/"), _ = 0; _ < g.length; _++)
                                                            (p = l[c].querySelector('select[data-product-option-id="' + g[_] + '"]')), isEmptyLadiPage(p) || (p.value = m["option" + (_ + 1)]);
                                                    if (u["option.product_variant_type"] == o.const.PRODUCT_VARIANT_TYPE.label && ((m = n.variants[a]), isObjectLadiPage(m) && isStringLadiPage(m.option_ids)))
                                                        for (g = m.option_ids.split("/"), _ = 0; _ < g.length; _++)
                                                            (p = l[c].querySelector('.ladi-form-label-container[data-product-option-id="' + g[_] + '"]')), isEmptyLadiPage(p) || o.runtime.tmp.updateLabelValue(p, m["option" + (_ + 1)]);
                                                    if (u["option.product_variant_type"] == o.const.PRODUCT_VARIANT_TYPE.combined) {
                                                        if (((p = l[c].querySelector("select.ladi-form-control")), !isEmptyLadiPage(i))) {
                                                            var y = p.querySelector('option[data-product-variant-id="' + i + '"]');
                                                            isEmptyLadiPage(y) || (a = y.getAttribute("value"));
                                                        }
                                                        p.value = (-1 == a ? "" : a) + "";
                                                    }
                                                }
                                    }
                                    r(t, n, !1, i, !0, !0);
                                });
                            },
                            l = o.runtime.tmp.getOptionLabelValue,
                            c = o.runtime.tmp.updateLabelValue,
                            u = o.runtime.tmp.getLabelValue,
                            p = function (t) {
                                o.runtime.tmp.clickLabelProductChangeCallback(t, function (t) {
                                    s({ target: t });
                                });
                            };
                        o.showParentVisibility(e, function () {
                            for (var t = e.clientHeight, n = t, r = e.querySelectorAll("select.ladi-form-control"), m = {}, g = 0; g < r.length; g++)
                                m[r[g].getAttribute("data-store-id") + "_" + r[g].getAttribute("data-product-id") + "_" + r[g].getAttribute("data-product-option-id")] = r[g].value;
                            var _ = e.querySelectorAll(".ladi-form-label-container");
                            for (g = 0; g < _.length; g++) m[_[g].getAttribute("data-store-id") + "_" + _[g].getAttribute("data-product-id") + "_" + _[g].getAttribute("data-product-option-id")] = u(_[g]);
                            e.innerHTML = d;
                            for (var y = e.querySelectorAll("select.ladi-form-control"), f = null, v = null, P = 0; P < y.length; P++)
                                y[P].removeEventListener("change", s),
                                    y[P].addEventListener("change", s),
                                    (f = m[y[P].getAttribute("data-store-id") + "_" + y[P].getAttribute("data-product-id") + "_" + y[P].getAttribute("data-product-option-id")]),
                                    isNullLadiPage(f) && ((v = y[P].querySelector("option")), isEmptyLadiPage(v) || (f = v.getAttribute("value"))),
                                    (y[P].value = f);
                            var h = e.querySelectorAll(".ladi-form-label-container");
                            for (P = 0; P < h.length; P++) {
                                for (var L = h[P].querySelectorAll(".ladi-form-label-item"), E = 0; E < L.length; E++) o.tapEventListener(L[E], p);
                                (f = m[h[P].getAttribute("data-store-id") + "_" + h[P].getAttribute("data-product-id") + "_" + h[P].getAttribute("data-product-option-id")]),
                                    isNullLadiPage(f) && ((v = L[1]), isEmptyLadiPage(v) || (f = l(v))),
                                    c(h[P], f);
                            }
                            if (
                                (o.updateProductVariantSelectOptionFirst(i, a, e),
                                a["option.product_variant_type"] != o.const.PRODUCT_VARIANT_TYPE.combined && (e.style.setProperty("height", "auto"), (n = e.clientHeight), e.style.removeProperty("height"), n > 0 && t != n))
                            ) {
                                e.style.setProperty("height", n + "px");
                                var b = o.findAncestor(e, "ladi-form");
                                isEmptyLadiPage(b) || ((b = o.findAncestor(b, "ladi-element")), o.updateHeightElement(!0, e, b, t, n));
                            }
                        });
                    }
                    if (a["option.input_type"] == o.const.INPUT_TYPE.number) {
                        var m = e.querySelector('input[name="quantity"]'),
                            g = function (t) {
                                if (!isEmptyLadiPage(t.target.value)) {
                                    var e = o.generateVariantProduct(i, !1, null, null, null, null, !0, !0, function () {
                                        g(t);
                                    });
                                    if (!(isEmptyLadiPage(e) || isEmptyLadiPage(e.store_info) || isEmptyLadiPage(e.product))) {
                                        var a = t.target;
                                        a = (a = o.findAncestor(a, "ladi-form")).querySelector('[data-variant="true"]');
                                        var n = o.getProductVariantId(a, e.product),
                                            r = e.product.variants.findIndex(function (t) {
                                                return t.product_variant_id == n;
                                            });
                                        if (-1 != r) {
                                            var d = e.product.variants[r].quantity,
                                                s = e.product.variants[r].quantity_stock;
                                            d = isNullLadiPage(s) ? d : s;
                                            var l = parseInt(t.target.value) || 0,
                                                c = 1;
                                            c = e.product.variants[r].min_buy || c;
                                            var u = e.product.variants[r].max_buy,
                                                p = 0,
                                                m = o.runtime.tmp.cart.findIndex(function (t) {
                                                    return t.product_id == e.product.variants[r].product_id && t.product_variant_id == e.product.variants[r].product_variant_id;
                                                });
                                            -1 != m && (p = o.runtime.tmp.cart[m].quantity),
                                                c > l + p && (l = c - p),
                                                1 == e.product.variants[r].inventory_checked && l + p > d && (l = d - p),
                                                !isEmptyLadiPage(u) && l + p > u && (l = u - p),
                                                (l = l < 1 ? 1 : l),
                                                t.target.setAttribute("min", c),
                                                isEmptyLadiPage(u) || t.target.setAttribute("max", u),
                                                (t.target.value = l);
                                        }
                                    }
                                }
                            };
                        m.addEventListener("input", g), o.fireEvent(m, "input");
                        var y = e.querySelectorAll(".button")[0],
                            f = e.querySelectorAll(".button")[1];
                        if (isEmptyLadiPage(y) || isEmptyLadiPage(f)) return;
                        y.addEventListener("click", function (t) {
                            (m.value = (parseFloatLadiPage(m.value) || 0) - 1), o.fireEvent(m, "input");
                        }),
                            f.addEventListener("click", function (t) {
                                (m.value = (parseFloatLadiPage(m.value) || 0) + 1), o.fireEvent(m, "input");
                            });
                    }
                    if ("button" == a.type && (a["option.is_buy_now"] || a["option.is_add_to_cart"])) {
                        var v = function () {
                            var t = i["option.data_event"];
                            if (!isArrayLadiPage(t) && ((t = []), isObjectLadiPage(i["option.data_action"]))) {
                                var a = o.copy(i["option.data_action"]);
                                (a.action_type = o.const.ACTION_TYPE.action), t.push(a);
                            }
                            t.forEach(function (t) {
                                t.action_type == o.const.ACTION_TYPE.action &&
                                    (t.type == o.const.DATA_ACTION_TYPE.popup_cart && (window.ladi("POPUP_CART").show(), o.runEventTracking(e.id, { is_form: !1 })),
                                    t.type == o.const.DATA_ACTION_TYPE.popup_checkout && (o.runtime.shopping_third_party ? o.getThirdPartyCheckoutUrl(!0) : window.ladi("POPUP_CHECKOUT").show(), o.runEventTracking(e.id, { is_form: !1 })));
                            });
                        };
                        e.setAttribute("data-click", !1),
                            e.addEventListener("click", function (t) {
                                o.runtime.tmp.buttonAddToCartClick(t, !0, i, v);
                            });
                    }
                },
                y = function (t, e, i, a, n, r) {
                    var d = !isEmptyLadiPage(e["option.product_mapping_name"]),
                        s = JSON.stringify(e),
                        l = null,
                        c = null;
                    if (d)
                        if (a && isEmptyLadiPage(i)) l = "";
                        else if (
                            !isEmptyLadiPage(e["option.product_id"]) &&
                            s ===
                                (l = (c = o.generateProductKey(!0, s, !0, e, !0, i, null, function (o) {
                                    y(t, e, i, a, n, r);
                                })).value)
                        )
                            return;
                    var u = e.type,
                        p = null,
                        m = null;
                    if (
                        (d && "headline" == u && ((m = t.getElementsByClassName("ladi-headline")[0]), isEmptyLadiPage(m) || (m.innerHTML = isNullLadiPage(l) ? "" : l)),
                        d && "paragraph" == u && ((m = t.getElementsByClassName("ladi-paragraph")[0]), isEmptyLadiPage(m) || (m.innerHTML = isNullLadiPage(l) ? "" : l)),
                        d && "image" == u)
                    ) {
                        p = o.getOptimizeImage(l, t.clientWidth, t.clientHeight, !0, !1, !1, !0);
                        var g = t.getElementsByClassName("ladi-image-background")[0];
                        isEmptyLadiPage(g) || (isEmptyLadiPage(p) ? g.style.setProperty("background-image", "none") : g.style.setProperty("background-image", 'url("' + p + '")'));
                    }
                    if ("gallery" == u) {
                        if (d && !isArrayLadiPage(l)) return;
                        if (r && !n && "true" == t.getAttribute("data-collection")) return void o.runtime.tmp.updateImageGalleryProduct(t, c, e);
                        t.setAttribute("data-collection", !0),
                            t.removeAttribute("data-stop"),
                            t.removeAttribute("data-loaded"),
                            t.removeAttribute("data-scrolled"),
                            t.removeAttribute("data-current"),
                            t.removeAttribute("data-is-next"),
                            t.removeAttribute("data-runtime-id"),
                            t.removeAttribute("data-next-time");
                        var _ = t.querySelector(".ladi-gallery-view-item.selected");
                        isEmptyLadiPage(_) || _.classList.remove("selected");
                        var f = t.querySelector(".ladi-gallery-control-item.selected");
                        isEmptyLadiPage(f) || f.classList.remove("selected");
                        var v = t.getElementsByClassName("ladi-gallery-view")[0];
                        (f = t.getElementsByClassName("ladi-gallery-control-item")[0]),
                            (_ = t.getElementsByClassName("ladi-gallery-view-item")[0]),
                            isEmptyLadiPage(_) || _.classList.add("selected"),
                            isEmptyLadiPage(f) || f.classList.add("selected");
                        var P = t.getElementsByClassName("ladi-gallery-control-box")[0];
                        if ((isEmptyLadiPage(P) || P.style.removeProperty("left"), d)) {
                            for (var h = t.getElementsByClassName("ladi-gallery-view-item"); h.length < l.length; ) {
                                var L = o.createTmpElement("div", '<div class="ladi-gallery-view-item" data-index="' + h.length + '"></div>', null, !0);
                                t.getElementsByClassName("ladi-gallery-view")[0].appendChild(L);
                            }
                            for (; h.length > l.length; ) h[h.length - 1].parentElement.removeChild(h[h.length - 1]);
                            for (
                                var E = t.getElementsByClassName("ladi-gallery-control-item"),
                                    b = function (e) {
                                        o.runtime.tmp.eventClickGalleryControlItem(e, t);
                                    };
                                E.length < l.length;

                            ) {
                                var A = o.createTmpElement("div", '<div class="ladi-gallery-control-item" data-index="' + E.length + '"></div>', null, !0);
                                A.addEventListener("click", b), t.getElementsByClassName("ladi-gallery-control-box")[0].appendChild(A);
                            }
                            for (; E.length > l.length; ) E[E.length - 1].parentElement.removeChild(E[E.length - 1]);
                            for (var w = t.querySelectorAll(".ladi-gallery .ladi-gallery-view .ladi-gallery-view-arrow"), T = 0; T < w.length; T++)
                                l.length <= 1 ? w[T].style.setProperty("display", "none") : w[T].style.removeProperty("display");
                            for (w = t.querySelectorAll(".ladi-gallery > .ladi-gallery-control"), T = 0; T < w.length; T++) l.length <= 1 ? w[T].style.setProperty("display", "none") : w[T].style.removeProperty("display");
                            for (w = t.querySelectorAll(".ladi-gallery > .ladi-gallery-view"), T = 0; T < w.length; T++) l.length <= 1 ? w[T].style.setProperty("height", "100%") : w[T].style.removeProperty("height");
                            l.forEach(function (e, i) {
                                (p = e.src), isEmptyLadiPage(v) || (p = o.getOptimizeImage(e.src, v.clientWidth, v.clientHeight, !0, !1, !1, o.runtime.isClient));
                                var a = t.querySelector('.ladi-gallery .ladi-gallery-view-item[data-index="' + i + '"]');
                                isEmptyLadiPage(a) || a.style.setProperty("background-image", 'url("' + p + '")'),
                                    isEmptyLadiPage(f) || (p = o.getOptimizeImage(e.src, f.clientWidth, f.clientHeight, !0, !1, !1, o.runtime.isClient)),
                                    (a = t.querySelector('.ladi-gallery .ladi-gallery-control-item[data-index="' + i + '"]')),
                                    isEmptyLadiPage(a) || a.style.setProperty("background-image", 'url("' + p + '")');
                            }),
                                o.runTimeout(function () {
                                    t.setAttribute("data-loaded", !0);
                                }, 300);
                        }
                        o.runtime.tmp.runGallery(t.id, t, !0, u), o.runtime.tmp.setGalleryStart(t.id, t);
                    }
                    "countdown_item" == u && o.runtime.tmp.runOptionCountdownItem(t.id, t, u, e["option.countdown_item_type"]),
                        "countdown" == u &&
                            o.runtime.tmp.runOptionCountdown(t.id, t, u, e["option.countdown_type"], e["option.countdown_minute"], e["option.countdown_daily_start"], e["option.countdown_daily_end"], e["option.countdown_endtime"]);
                },
                f = function (t, e) {
                    var c = p * m,
                        u = o.getListProductByTagId(e, c, i, !0, function () {
                            f(t, e);
                        });
                    if (isObjectLadiPage(u) && isArrayLadiPage(u.products)) {
                        var v = document.getElementById(t);
                        if (isEmptyLadiPage(v)) return;
                        if (v.getAttribute("data-page") == i) return;
                        var P = i,
                            h = !1,
                            L = !1;
                        if (!isEmptyLadiPage(u.total_record) && i * c >= u.total_record) {
                            if (l == o.const.COLLECTION_TYPE.readmore) {
                                var E = v.getElementsByClassName("ladi-collection-button-next")[0];
                                isEmptyLadiPage(E) || E.setAttribute("data-opacity", "0");
                            }
                            v.setAttribute("data-max-page", P), (h = !0), i * c > u.total_record && (L = !0);
                        }
                        v.setAttribute("data-page", i > P ? P : i);
                        var b = v.getElementsByClassName("ladi-collection-arrow-left")[0],
                            A = v.getElementsByClassName("ladi-collection-arrow-right")[0],
                            w = v.getElementsByClassName("ladi-collection-button-next")[0];
                        if (
                            (isEmptyLadiPage(b) || b.classList.remove("opacity-0"),
                            isEmptyLadiPage(A) || A.classList.remove("opacity-0"),
                            isEmptyLadiPage(w) || w.classList.remove("opacity-0"),
                            1 == v.getAttribute("data-page") && l == o.const.COLLECTION_TYPE.carousel && (isEmptyLadiPage(b) || b.classList.add("opacity-0")),
                            v.getAttribute("data-page") == v.getAttribute("data-max-page") &&
                                (l == o.const.COLLECTION_TYPE.readmore && (isEmptyLadiPage(w) || w.classList.add("opacity-0")), l == o.const.COLLECTION_TYPE.carousel && (isEmptyLadiPage(A) || A.classList.add("opacity-0"))),
                            P < i)
                        )
                            return;
                        var T = v.getElementsByClassName("ladi-collection-item");
                        if (0 == T.length) return;
                        var S = 0,
                            O = 0;
                        if (v.hasAttribute("data-max-option-length")) S = parseFloatLadiPage(v.getAttribute("data-max-option-length"));
                        else {
                            var C = v.querySelectorAll('.ladi-form [data-variant="true"]');
                            for (O = 0; O < C.length; O++) {
                                var N = C[O].getElementsByClassName("ladi-form-item-box");
                                N.length > S && (S = N.length);
                            }
                        }
                        var I = v.getElementsByClassName("ladi-collection-content")[0],
                            k = { className: T[0].className, innerHTML: T[0].innerHTML };
                        a && T[0].parentElement.removeChild(T[0]);
                        for (var x = I.getElementsByClassName("ladi-collection-page"); x.length < i; ) {
                            var D = document.createElement("div");
                            (D.className = "ladi-collection-page"), I.appendChild(D);
                        }
                        var R = x[i - 1],
                            F = R.getElementsByClassName("ladi-collection-item");
                        if (F.length != u.products.length) for (; F.length > 0; ) F[0].parentElement.removeChild(F[0]);
                        var q = function (t, i, a, n, l, c) {
                            isEmptyLadiPage(i.id) && !isEmptyLadiPage(i.product_id) && (i.id = i.product_id);
                            for (
                                var u = function (t, e) {
                                        if (t.classList.contains("ladi-animation-hidden")) {
                                            var i = parseFloatLadiPage(e[o.runtime.device + ".style.animation-delay"]) || 0;
                                            t.classList.add("ladi-animation"),
                                                o.runTimeout(function () {
                                                    t.classList.remove("ladi-animation-hidden");
                                                }, 1e3 * i);
                                        }
                                    },
                                    p = 0;
                                p < t.length;
                                p++
                            ) {
                                a && isFunctionLadiPage(o.runtime.tmp.runElementClickSelected) && o.runtime.tmp.runElementClickSelected(t[p], !0);
                                var m = o.copy(o.runtime.eventData[t[p].id]);
                                isEmptyLadiPage(m) ||
                                    (u(t[p], m),
                                    (m["option.product_type"] = r),
                                    (m["option.ladisale_store_id"] = d),
                                    (m["option.product_tag_id"] = s),
                                    (m["option.product_id"] = i.id),
                                    a &&
                                        (isFunctionLadiPage(o.runtime.tmp.runOptionAction) && o.runtime.tmp.runOptionAction(t[p], t[p].id, m.type, m),
                                        isFunctionLadiPage(o.runtime.tmp.runOptionHover) && o.runtime.tmp.runOptionHover(t[p], t[p].id, m.type, m["option.data_event"] || m["option.data_hover"]),
                                        _(t, t[p], e, m, i, q)),
                                    y(t[p], m, n, l, a, c));
                            }
                        };
                        for (O = 0; O < u.products.length; O++) isArrayLadiPage(u.products[O].options) && u.products[O].options.length > S && (S = u.products[O].options.length);
                        for (v.setAttribute("data-max-option-length", S), O = 0; O < u.products.length; O++)
                            if (!(F.length > O)) {
                                var B = document.createElement("div");
                                (B.className = k.className), R.appendChild(B), (B.innerHTML = k.innerHTML);
                                for (var M = B.getElementsByClassName("ladi-element"); isArrayLadiPage(u.products[O].options) && u.products[O].options.length < S; ) u.products[O].options.push({ is_tmp: !0 });
                                q(M, u.products[O], !0, null, !1, !1);
                            }
                        h && (R.classList.add("last"), L && R.classList.add("not-full")),
                            l == o.const.COLLECTION_TYPE.carousel &&
                                (function (t) {
                                    var e = document.getElementById(t);
                                    if (!isEmptyLadiPage(e) && e.hasAttribute("data-page")) {
                                        var i = "0",
                                            a = getComputedStyle(e).width,
                                            n = a,
                                            r = parseFloatLadiPage(e.getAttribute("data-page")) || 1,
                                            d = e.getElementsByClassName("ladi-collection-content")[0].getElementsByClassName("ladi-collection-page"),
                                            s = d[d.length - 1].getElementsByClassName("ladi-collection-item"),
                                            l = m - s.length,
                                            c = "",
                                            u = "";
                                        l > 0
                                            ? ((n = "calc(" + a + " * " + d.length + " - (" + a + " / " + m + " * " + l + ") + calc(" + g + "px / " + m + " * " + s.length + "))"),
                                              r > 1 &&
                                                  (r != d.length
                                                      ? (i = "calc(-" + a + " * " + (r - 1) + ")")
                                                      : ((i = "calc(-" + a + " * " + (r - 1) + " + (" + a + " / " + m + " * " + l + "))"), (u = "margin-left: calc(-" + g + "px / " + m + " * " + s.length + ");"))),
                                              (c += "#" + t + " .ladi-collection .ladi-collection-content .ladi-collection-page.last.not-full .ladi-collection-item:first-child {"),
                                              (c += "margin-left: " + g + "px;"),
                                              (c += "}"),
                                              (c += "#" + t + " .ladi-collection-content .ladi-collection-page.last {"),
                                              (c += "width: calc(" + getComputedStyle(e).width + " / " + m + " * " + s.length + " + calc(" + g + "px / " + m + " * " + s.length + "));"),
                                              (c += "}"))
                                            : (r > 1 && (i = "calc(-" + a + " * " + (r - 1) + ")"), (n = "calc(" + a + " * " + d.length + ")"));
                                        var p = "style_collection_" + t,
                                            _ = document.getElementById(p);
                                        isEmptyLadiPage(_) || _.parentElement.removeChild(_);
                                        var y = "#" + t + " .ladi-collection-content {";
                                        (y += "width: " + n + ";"), (y += "left: " + i + ";"), (y += u), (y += "}"), (y += c), o.createStyleElement(p, y);
                                    }
                                })(t),
                            n &&
                                l == o.const.COLLECTION_TYPE.readmore &&
                                (function (t) {
                                    var e = document.getElementById(t);
                                    if (!isEmptyLadiPage(e)) {
                                        var i = e.getElementsByClassName("ladi-collection-content")[0];
                                        if (e.hasAttribute("data-max-page")) {
                                            var a = i.querySelector(".ladi-collection-page.last"),
                                                n = a.getElementsByClassName("ladi-collection-item"),
                                                r = Math.ceil(n.length / m);
                                            if (p == r) a.style.removeProperty("height");
                                            else {
                                                var d = parseFloatLadiPage(((parseFloatLadiPage(getComputedStyle(a).height) || 0) * r) / p) || 0;
                                                (d -= parseFloatLadiPage((g * (p - r)) / p) || 0), a.style.setProperty("height", d + "px");
                                            }
                                        }
                                        var s = parseFloatLadiPage(getComputedStyle(e).height) || 0,
                                            l = i.scrollHeight;
                                        if (s != l) {
                                            e.style.setProperty("height", l + "px");
                                            var c = o.findAncestor(e.parentElement, "ladi-element");
                                            isEmptyLadiPage(c) && (c = o.findAncestor(e.parentElement, "ladi-section")), o.updateHeightElement(!0, e, c, s, l);
                                        }
                                    }
                                })(t),
                            o.runEventScroll(),
                            o.runResizeAll();
                    }
                },
                v = c["option.product_tag_id"],
                P = c["option.data_setting.value"];
            (!isArrayLadiPage(v) && isEmptyLadiPage(P)) || f(t, c);
        }
    }),
    (LadiPageScript.const.API_FORM_DATA = "https://api.ldpform.com/sendform"),
    (LadiPageScript.const.API_ANALYTICS_EVENT = "https://a.ladipage.com/event"),
    (LadiPageScript.const.API_ACCESS_KEY_LOGIN = "https://api.ladipage.com/2.0/access-key-login"),
    (LadiPageScript.const.API_COLLECTION_PRODUCT = "https://api.checkout.ladisales.com/1.0/product-list"),
    (LadiPageScript.const.API_SHOW_PRODUCT = "https://api.checkout.ladisales.com/1.0/product-detail"),
    (LadiPageScript.const.API_LADISALE_COLLECTION_PRODUCT = "https://api.sales.ldpform.net/2.0/public/collections/products"),
    (LadiPageScript.const.API_LADISALE_SHOW_PRODUCT = "https://api.sales.ldpform.net/2.0/public/product/show"),
    (LadiPageScript.const.API_LADISALE_ADD = "https://api.sales.ldpform.net/2.0/cart/add"),
    (LadiPageScript.const.API_LADISALE_UPDATE = "https://api.sales.ldpform.net/2.0/cart/update"),
    (LadiPageScript.const.API_LADISALE_SHOW = "https://api.sales.ldpform.net/2.0/cart/show"),
    (LadiPageScript.const.API_LADISALE_GET_SHIPPING = "https://api.sales.ldpform.net/2.0/checkout/{0}/get-shipping"),
    (LadiPageScript.const.API_LADISALE_VALIDATE_DISCOUNT = "https://api.sales.ldpform.net/2.0/checkout/{0}/validate-discount"),
    (LadiPageScript.const.API_LADISALE_PROMOTION = "https://api.checkout.ladisales.com/1.0/checkout/get-promotion"),
    (LadiPageScript.const.API_LADISALE_CHECKOUT_CREATE = "https://api.checkout.ladisales.com/1.0/checkout/create"),
    (LadiPageScript.const.API_FILE_UPLOAD = "https://api.files.ladicdn.com/2.0/ladipage-upload-file"),
    (LadiPageScript.const.API_DATASET_DATA = "https://g.ladicdn.com/dataset/{0}.json?id={1}"),
    (LadiPageScript.const.API_DATASET_BLOG = "https://g.ladicdn.com/blog-"),
    (LadiPageScript.const.API_SECTION_GLOBAL_HTML = "https://g.ladicdn.com/section/{0}-{1}.html"),
    (LadiPageScript.const.LADIFLOW_SDK = "https://w.ladicdn.com/ladiflow/sdk.js"),
    (LadiPageScript.const.LADISALES_SDK = "https://w.ladicdn.com/ladisales/sdk/sdk.js"),
    (LadiPageScript.const.CDN_LIBRARY_JS_URL = "https://w.ladicdn.com/v2/source/"),
    (LadiPageScript.const.CDN_LIBRARY_CSS_URL = "https://w.ladicdn.com/v2/source/");
var lightbox_run = function (t, e, i, a, n, o, r, d) {
        var s = document.getElementById(LadiPageScript.runtime.lightbox_screen_id);
        if (!isEmptyLadiPage(s)) {
            var l = function () {
                isEmptyLadiPage(window.$rootScope) || !isFunctionLadiPage(window.$rootScope.hideBuilderLoadingBlur) ? LadiPageScript.hideLoadingBlur() : window.$rootScope.hideBuilderLoadingBlur();
            };
            d || (isEmptyLadiPage(window.$rootScope) || !isFunctionLadiPage(window.$rootScope.showBuilderLoadingBlur) ? LadiPageScript.showLoadingBlur() : window.$rootScope.showBuilderLoadingBlur());
            var c = JSON.stringify({ html: t, url: e, is_video: i, video_type: o, video_value: r }),
                u = Object.keys(LadiPageScript.runtime.list_lightbox_id);
            -1 == u.indexOf(c) && (LadiPageScript.runtime.list_lightbox_id[c] = u.length + 1);
            var p = LadiPageScript.runtime.list_lightbox_id[c];
            n = n + "_" + p;
            var m = document.getElementById(n),
                g = !1;
            isEmptyLadiPage(m) ? ((m = document.createElement("div")), s.appendChild(m), (m.outerHTML = t), (m = s.lastChild), (g = !0)) : i && LadiPageScript.runEventReplayVideo(n, o, !0);
            var _ = document.createElement("div");
            (_.className = "lightbox-close"), _.setAttribute("data-opacity", 0), s.appendChild(_), m.setAttribute("id", n), m.setAttribute("data-opacity", 0), m.classList.remove("lightbox-hidden");
            var y = function () {
                    if (((m = document.getElementById(n)), !isEmptyLadiPage(m))) {
                        if ("IFRAME" == m.tagName) {
                            var t = parseFloatLadiPage(getComputedStyle(m).width) || 0,
                                e = parseFloatLadiPage(getComputedStyle(m).height) || 0;
                            if (t > 0 || e > 0) {
                                var i = 0.8 * document.body.clientWidth,
                                    a = 0.8 * LadiPageScript.getHeightDevice(),
                                    o = i,
                                    r = (e / t) * o;
                                r > a && (o = (r = a) * (t / e)), m.style.setProperty("width", (parseFloatLadiPage(o) || 0) + "px"), m.style.setProperty("height", (parseFloatLadiPage(r) || 0) + "px");
                            }
                        }
                        if (((_ = s.getElementsByClassName("lightbox-close")[0]), !isEmptyLadiPage(_))) {
                            var d = LadiPageScript.getElementBoundingClientRect(m),
                                l = 10,
                                c = 10;
                            d.x - 5 - _.clientWidth > c && (c = d.x - 5 - _.clientWidth),
                                d.y - 5 - _.clientHeight > l && (l = d.y - 5 - _.clientHeight),
                                (c += LadiPageScript.runtime.widthScrollBar),
                                (l -= 6),
                                (c -= 6),
                                _.style.setProperty("right", c + "px"),
                                _.style.setProperty("top", l + "px");
                        }
                        var u = document.getElementById(m.id + "_button_unmute");
                        isEmptyLadiPage(u) || (u.style.setProperty("width", getComputedStyle(m).width), u.style.setProperty("height", getComputedStyle(m).height));
                    }
                },
                f = function () {
                    LadiPageScript.runTimeout(function () {
                        l(), (m = document.getElementById(n)), (_ = s.getElementsByClassName("lightbox-close")[0]), y(), isEmptyLadiPage(m) || m.removeAttribute("data-opacity"), isEmptyLadiPage(_) || _.removeAttribute("data-opacity");
                    }, 100);
                };
            _.style.setProperty("top", "-100px"), _.style.setProperty("right", "-100px");
            var v = "load";
            if ((i && o == LadiPageScript.const.VIDEO_TYPE.direct && (v = "loadedmetadata"), g && (m.addEventListener(v, f), m.addEventListener("error", f)), i)) {
                var P = e;
                o == LadiPageScript.const.VIDEO_TYPE.youtube && ((e = null), (P = r)),
                    g
                        ? LadiPageScript.runEventPlayVideo(n, o, P, !1, !1, !0, !1, d, !1, function (t) {
                              isEmptyLadiPage(t) ? f() : (t.addEventListener(v, f), t.addEventListener("error", f));
                          })
                        : f();
            }
            d || s.style.setProperty("display", "block"), isEmptyLadiPage(e) || (g ? (m.src = e) : f());
            var h = function () {
                    var t = document.getElementById(LadiPageScript.runtime.backdrop_popup_id);
                    return isEmptyLadiPage(t) || "none" == getComputedStyle(t).display;
                },
                L = 0;
            h() ? ((L = window.scrollY), (LadiPageScript.runtime.tmp.bodyScrollY = L)) : (L = LadiPageScript.runtime.tmp.bodyScrollY);
            var E = function () {
                l(),
                    s.style.removeProperty("display"),
                    (m = document.getElementById(n)),
                    isEmptyLadiPage(m) || (a && !i ? m.parentElement.removeChild(m) : (m.classList.add("lightbox-hidden"), i && LadiPageScript.runEventReplayVideo(n, o, !1))),
                    (_ = s.getElementsByClassName("lightbox-close")[0]),
                    isEmptyLadiPage(_) || _.parentElement.removeChild(_);
                var t = document.getElementById("style_lightbox");
                isEmptyLadiPage(t) || t.parentElement.removeChild(t);
                var e = h();
                e && !isEmptyLadiPage(LadiPageScript.runtime.tmp.bodyScrollY) && window.scrollTo(0, LadiPageScript.runtime.tmp.bodyScrollY), e && (LadiPageScript.runtime.tmp.bodyScrollY = null);
            };
            if (
                (_.addEventListener("click", function (t) {
                    t.stopPropagation(), E();
                }),
                !d)
            ) {
                var b = "body {";
                (b += "position: fixed !important;"), (b += "width: 100% !important;"), (b += "top: -" + L + "px !important;"), (b += "}"), LadiPageScript.createStyleElement("style_lightbox", b);
            }
            isEmptyLadiPage(s.getAttribute("data-load-event")) &&
                (s.setAttribute("data-load-event", !0),
                s.addEventListener("click", function (t) {
                    t.stopPropagation(), t.target.id == s.id && ((_ = s.getElementsByClassName("lightbox-close")[0]), isEmptyLadiPage(_) || _.click());
                }),
                window.addEventListener("resize", y)),
                d && E();
        }
    },
    lightbox_iframe = function (t, e, i, a, n, o) {
        if (!isEmptyLadiPage(t)) {
            var r = "margin: auto; position: absolute; top: 0; left: 0; bottom: 0; right: 0; max-width: 80%; max-height: 80%;",
                d = '<iframe id="' + (i = i || "lightbox_iframe") + '" class="lightbox-item" style="' + r + '" frameborder="0" allowfullscreen></iframe>',
                s = t,
                l = LadiPageScript.createTmpElement("iframe", s, null, !0);
            isEmptyLadiPage(l) || "IFRAME" != l.tagName || ((s = l.src), (i = l.id || i), l.removeAttribute("src"), l.setAttribute("style", r), l.classList.add("lightbox-item"), (d = l.outerHTML)), lightbox_run(d, s, e, !0, i, a, n, o);
        }
    },
    lightbox_image = function (t) {
        if (!isEmptyLadiPage(t)) {
            lightbox_run('<img class="lightbox-item" style="margin: auto; position: absolute; top: 0; left: 0; bottom: 0; right: 0; object-fit: scale-down; max-width: 80%; max-height: 80%;" />', t, !1, !1, "lightbox_image");
        }
    },
    lightbox_video = function (t, e, i) {
        if (!isEmptyLadiPage(t) && !isEmptyLadiPage(e)) {
            LadiPageScript.pauseAllVideo();
            var a = "lightbox_player";
            if (
                (e == LadiPageScript.const.VIDEO_TYPE.youtube &&
                    lightbox_iframe('<iframe id="' + a + '" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>', !0, a, e, t, i),
                e == LadiPageScript.const.VIDEO_TYPE.direct)
            ) {
                lightbox_run(
                    '<video class="lightbox-item" id="lightbox_player" style="margin: auto; position: absolute; top: 0; left: 0; bottom: 0; right: 0; max-width: 80%; max-height: 80%; object-fit: cover;"></video>',
                    t,
                    !0,
                    !1,
                    a,
                    e,
                    null,
                    i
                );
            }
        }
    },
    LadiPageLibraryV2 = LadiPageLibraryV2 || function () {};
(LadiPageLibraryV2.prototype.get_url = function (t, e, i) {
    if (!isEmptyLadiPage(this.id)) {
        var a = this.id,
            n = "";
        if (e && isObjectLadiPage(t))
            Object.keys(t).forEach(function (e) {
                isEmptyLadiPage(n) || (n += "&");
                var a = t[e];
                i && -1 != ["email", "phone"].indexOf(e) && (a = Base64.encode(a)), isArrayLadiPage(a) && a.length > 1 && (a = JSON.stringify(a)), (a = encodeURIComponent(a)), (n += e + "=" + a);
            });
        if (!isEmptyLadiPage(n)) {
            var o = LadiPageScript.createTmpElement("a", "", { href: a });
            (o.search = o.search + (isEmptyLadiPage(o.search) ? "?" : "&") + n), (a = o.href);
        }
        return (a = LadiPageScript.getLinkUTMRedirect(a, null)), (a = LadiPageScript.convertDataReplaceStr(a, !0, null, !1, t));
    }
}),
    (LadiPageLibraryV2.prototype.open_url = function (t, e) {
        if (!isEmptyLadiPage(this.id))
            if (LadiPageScript.runtime.has_popupx) LadiPageScript.runtime.tmp.runActionPopupX({ url: this.id, target: t, nofollow: e, action: { type: "open_url" } });
            else {
                var i = this.id,
                    a = null;
                e && ((a = LadiPageScript.getElementAHref(i, !1)).setAttribute("rel", "nofollow"), document.body.appendChild(a)),
                    isEmptyLadiPage(t) || "_self" == t.toLowerCase() ? (e ? a.click() : (window.location.href = i)) : e ? (a.setAttribute("target", t), a.click()) : window.open(i, t),
                    e && a.parentElement.removeChild(a);
            }
    }),
    (LadiPageLibraryV2.prototype.get_cookie = function () {
        if (!isEmptyLadiPage(this.id)) {
            for (var t = this.id + "=", e = document.cookie.split(";"), i = "", a = 0; a < e.length; a++) {
                for (var n = e[a]; " " == n.charAt(0); ) n = n.substring(1);
                if (0 == n.indexOf(t)) {
                    i = n.substring(t.length, n.length);
                    break;
                }
            }
            return decodeURIComponentLadiPage(i);
        }
    }),
    (LadiPageLibraryV2.prototype.delete_cookie = function (t, e) {
        this.set_cookie(null, -3650, t, e, !1);
    }),
    (LadiPageLibraryV2.prototype.set_cookie = function (t, e, i, a, n) {
        if (!isEmptyLadiPage(this.id)) {
            var o = "";
            if (n) o = "expires = 0";
            else {
                var r = new Date();
                !isNullLadiPage(e) && e instanceof Date ? (r = e) : ((e = isEmptyLadiPage(e) ? 365 : e), r.setTime(r.getTime() + 24 * e * 60 * 60 * 1e3)), (o = "expires = " + r.toUTCString());
            }
            t = isEmptyLadiPage(t) ? "" : t;
            var d = this.id + " = " + t;
            isEmptyLadiPage(o) || (d += "; " + o),
                isEmptyLadiPage(a) || (d += "; domain = " + a),
                (i = i || window.location.pathname),
                LadiPageScript.runtime.isIE || (d += "; path = " + i),
                "https:" == window.location.protocol && (d += "; SameSite = None; secure"),
                (document.cookie = d);
        }
    }),
    (LadiPageLibraryV2.prototype.submit = function () {
        var t = this.doc || document.getElementById(this.id);
        if (!isEmptyLadiPage(t)) {
            var e = t.querySelector('.ladi-form button[type="submit"]');
            isEmptyLadiPage(e) || e.click();
        }
    }),
    (LadiPageLibraryV2.prototype.scroll = function (t, e) {
        var i = this.doc || document.getElementById(this.id);
        if (!isEmptyLadiPage(i))
            if (LadiPageScript.runtime.has_popupx) this.show();
            else {
                t && "none" == getComputedStyle(i).display && this.show();
                for (var a = document.querySelectorAll("#" + LadiPageScript.runtime.builder_section_popup_id + " .ladi-container > .ladi-element"), n = 0; n < a.length; n++)
                    if (a[n].id != this.id && a[n].hasAttribute("data-popup-backdrop") && "none" != getComputedStyle(a[n]).display) {
                        var o = LadiPageScript.findAncestor(i, "ladi-popup");
                        isEmptyLadiPage(o) || (o = LadiPageScript.findAncestor(o, "ladi-element")), (isEmptyLadiPage(o) || o.id != a[n].id) && (LadiPageScript.runRemovePopup(a[n].id, !0), 100);
                    }
                var r = isObjectLadiPage(LadiPageScript.runtime.story_page),
                    d = function (t, e, i) {
                        LadiPageScript.removeTimeout(LadiPageScript.runtime.tmp.scroll_timeout_id);
                        var a = function (t, e, i, a) {
                                return (t /= a / 2) < 1 ? (i / 2) * t * t + e : (-i / 2) * (--t * (t - 2) - 1) + e;
                            },
                            n = 0;
                        n = r ? ("left" == t ? e.scrollLeft : e.scrollTop) : "left" == t ? e.scrollX : e.scrollY;
                        var o = "left" == t ? window.innerWidth : window.innerHeight,
                            d = i - n;
                        if (0 != d) {
                            var s = d < 0 ? -1 * d : d,
                                l = 0,
                                c = 1e3;
                            (c = s <= 4 * o ? 750 : c), (c = s <= 2 * o ? 525 : c), (c = s <= o ? 300 : c), (c = r ? 300 : c);
                            var u = "left" == t ? "scrollLeft" : "scrollTop",
                                p = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame,
                                m = null,
                                g = null,
                                _ = function (i) {
                                    r ? (e[u] = i) : "left" == t ? e.scrollTo(i, e.scrollY) : e.scrollTo(e.scrollX, i);
                                };
                            if (p) {
                                var y = Date.now() + c;
                                p(
                                    (m = function () {
                                        (l = c - (y - Date.now())), (g = a(l, n, d, c)), _(g), l < c ? p(m) : _(i);
                                    })
                                );
                            } else
                                (m = function () {
                                    (g = a((l += 20), n, d, c)), _(g), l < c ? (LadiPageScript.runtime.tmp.scroll_timeout_id = LadiPageScript.runTimeout(m, 20)) : _(i);
                                })();
                        }
                    },
                    s = function (t) {
                        var e = document.getElementsByClassName("ladi-wraper")[0],
                            a = LadiPageScript.getElementBoundingClientRect(i).top + (r ? t.scrollTop : t.scrollY);
                        return { scrollTop: (a -= parseFloatLadiPage(e.getAttribute("data-scroll-padding-top") || 0) || 0) };
                    },
                    l = null,
                    c = null,
                    u = null;
                e
                    ? r
                        ? i.scrollIntoView()
                        : ((l = s(window)), window.scrollTo({ top: l.scrollTop }))
                    : LadiPageScript.runTimeout(function () {
                          var t;
                          r
                              ? LadiPageScript.runtime.isDesktop || LadiPageScript.runtime.isBrowserDesktop
                                  ? i.scrollIntoView({ behavior: "smooth" })
                                  : ((u = document.getElementsByClassName("ladi-wraper")[0]),
                                    LadiPageScript.runtime.story_page.type == LadiPageScript.const.STORY_PAGE.horizontal &&
                                        ((t = u), (c = { scrollLeft: LadiPageScript.getElementBoundingClientRect(i).left + (r ? t.scrollLeft : t.scrollX) }), d("left", u, c.scrollLeft)),
                                    LadiPageScript.runtime.story_page.type == LadiPageScript.const.STORY_PAGE.vertical && ((l = s(u)), d("top", u, l.scrollTop)))
                              : ((u = window), (l = s(u)), LadiPageScript.runtime.isDesktop || LadiPageScript.runtime.isBrowserDesktop ? window.scrollTo({ top: l.scrollTop, behavior: "smooth" }) : d("top", u, l.scrollTop));
                      }, 100);
            }
    }),
    (LadiPageLibraryV2.prototype.value = function (t, e, i) {
        var a = this.doc || document.getElementById(this.id);
        if (!isEmptyLadiPage(a)) {
            var n = [],
                o = !1,
                r = 0,
                d = isArrayLadiPage(t) ? t : [t],
                s = a.querySelectorAll('.ladi-form-item > [data-is-select-country="true"]');
            if (4 == s.length)
                if (isNullLadiPage(t)) {
                    for (r = 0; r < s.length; r++) n.push(s[r].value);
                    o = !0;
                } else
                    d.forEach(function (t, e) {
                        isEmptyLadiPage(s[e]) || ((s[e].value = t), LadiPageScript.fireEvent(s[e], "change"));
                    });
            else {
                var l = document.querySelectorAll("#" + this.id + " > ." + ["ladi-button .ladi-headline", "ladi-headline", "ladi-paragraph", "ladi-list-paragraph"].join(", #" + this.id + " > .")),
                    c = document.querySelectorAll(
                        "#" + this.id + " > ." + ["ladi-form-item-container .ladi-form-item > input", "ladi-form-item-container .ladi-form-item > textarea", "ladi-form-item-container .ladi-form-item > select"].join(", #" + this.id + " > .")
                    ),
                    u = document.querySelectorAll("#" + this.id + " > ." + ["ladi-form-item-container .ladi-form-checkbox-item > input"].join(", #" + this.id + " > .")),
                    p = document.querySelectorAll("#" + this.id + " > .ladi-image .ladi-image-background"),
                    m = document.querySelectorAll("#" + this.id + " > .ladi-shape"),
                    g = document.querySelectorAll("#" + this.id + " > .ladi-video"),
                    _ = document.querySelectorAll("#" + this.id + " > .ladi-survey > .ladi-survey-option"),
                    y = function (t) {
                        var e = [];
                        return (
                            isArrayLadiPage(t) &&
                                t.forEach(function (t) {
                                    e.push(t.name);
                                }),
                            (e = e.length > 0 ? "[" + e.join(", ") + "]" : "")
                        );
                    };
                for (r = 0; r < l.length; r++)
                    if (isNullLadiPage(t)) isObjectLadiPage(i) && i.only_text ? n.push(l[r].innerText) : n.push(l[r].innerHTML);
                    else if (((l[r].innerHTML = t), !isEmptyLadiPage(e))) {
                        var f = LadiPageScript.findAncestor(l[r], "ladi-element");
                        isEmptyLadiPage(f) || f.classList.add(e);
                    }
                for (r = 0; r < c.length; r++)
                    if (isNullLadiPage(t))
                        if (c[r].classList.contains("ladi-form-control-file")) {
                            var v = c[r].getAttribute("data-path-file") || "[]";
                            (v = JSON.parse(v)), n.push(v);
                        } else n.push(c[r].value);
                    else
                        c[r].classList.contains("ladi-form-control-file")
                            ? (c[r].setAttribute("data-path-file", JSON.stringify(t)), (c[r].value = y(t)))
                            : ((c[r].value = t), "date" == c[r].getAttribute("data-type") && (isEmptyLadiPage(t) ? c[r].setAttribute("type", "text") : c[r].setAttribute("type", "date")));
                var P = !1;
                for (r = 0; r < u.length; r++)
                    isNullLadiPage(t)
                        ? (u[r].checked && n.push(u[r].value), "checkbox" == u[r].getAttribute("type").toLowerCase() && (o = !0))
                        : ((P = !1),
                          "checkbox" == u[r].getAttribute("type").toLowerCase() && -1 != d.indexOf(u[r].value) && (P = !0),
                          "radio" == u[r].getAttribute("type").toLowerCase() && d.length > 0 && d[0] == u[r].value && (P = !0),
                          P ? u[r].checked || u[r].click() : u[r].checked && u[r].click());
                for (r = 0; r < p.length; r++)
                    if (isNullLadiPage(t)) {
                        var h = getComputedStyle(p[r]).backgroundImage;
                        (h = h || "").startsWith('url("') && (h = h.substring('url("'.length)), h.endsWith('")') && (h = h.substring(0, h.length - '")'.length)), n.push(h);
                    } else if (isEmptyLadiPage(t)) p[r].style.setProperty("background-image", "none");
                    else {
                        var L = LadiPageScript.findAncestor(p[r], "ladi-element"),
                            E = LadiPageScript.getOptimizeImage(t, L.clientWidth, L.clientHeight, !0, !1, !1, !0);
                        p[r].style.setProperty("background-image", 'url("' + E + '")');
                    }
                for (r = 0; r < m.length; r++)
                    if (isNullLadiPage(t)) n.push(m[r].innerHTML);
                    else
                        try {
                            "svg" == LadiPageScript.createTmpElement("svg", t, null, !0).tagName && (m[r].innerHTML = t);
                        } catch (t) {}
                for (r = 0; r < g.length; r++) {
                    var b = LadiPageScript.runtime.eventData[this.id];
                    if (isNullLadiPage(t)) isEmptyLadiPage(b) || n.push({ type: b["option.video_type"], value: b["option.video_value"] });
                    else {
                        b["option.video_value"] = t;
                        var A = g[r].getElementsByClassName("iframe-video-preload")[0],
                            w = null;
                        if (b["option.video_type"] == LadiPageScript.const.VIDEO_TYPE.youtube) {
                            var T = "https://img.youtube.com/vi/" + (w = LadiPageScript.getVideoId(b["option.video_type"], t)) + "/hqdefault.jpg",
                                S = g[r].getElementsByClassName("ladi-video-background")[0];
                            isEmptyLadiPage(S) || S.style.setProperty("background-image", 'url("' + T + '")');
                        }
                        if (isEmptyLadiPage(A)) LadiPageScript.playVideo(this.id, b["option.video_type"], b["option.video_value"], b["option.video_control"]);
                        else {
                            LadiPageScript.pauseAllVideo();
                            var O = !1;
                            if (b["option.video_type"] == LadiPageScript.const.VIDEO_TYPE.youtube) {
                                var C = window.YT.get(A.id);
                                !isEmptyLadiPage(C) && isFunctionLadiPage(C.loadVideoById) && (C.loadVideoById(w, 0), C.seekTo(0), (O = !0));
                            }
                            b["option.video_type"] == LadiPageScript.const.VIDEO_TYPE.direct && isFunctionLadiPage(A.play) && ((A.src = t), (A.currentTime = 0), (O = !0)),
                                O && LadiPageScript.runEventReplayVideo(A.id, b["option.video_type"], !0);
                        }
                    }
                }
                for (r = 0; r < _.length; r++)
                    isNullLadiPage(t)
                        ? (_[r].classList.contains("selected") && n.push(_[r].getAttribute("data-value")), "true" == a.getAttribute("data-multiple") && (o = !0))
                        : ((P = !1), -1 != d.indexOf(_[r].getAttribute("data-value")) && (P = !0), P ? _[r].classList.contains("selected") || _[r].click() : _[r].classList.contains("selected") && _[r].click());
            }
            return o ? n : n.length > 0 ? n[0] : null;
        }
    }),
    (LadiPageLibraryV2.prototype.set_value_2nd = function (t) {
        var e = this.doc || document.getElementById(this.id);
        if (!isEmptyLadiPage(e)) {
            isObjectLadiPage(LadiPageScript.runtime.tmp.value_2nd_source) || (LadiPageScript.runtime.tmp.value_2nd_source = {}),
                isObjectLadiPage(LadiPageScript.runtime.tmp.value_2nd_click_time) || (LadiPageScript.runtime.tmp.value_2nd_click_time = {});
            var i = e.getAttribute("data-source-id");
            if ((isEmptyLadiPage(i) && ((i = LadiPageScript.randomString(10)), e.setAttribute("data-source-id", i)), e.classList.contains("ladi-accordion-shape"))) {
                if ((LadiPageScript.runtime.tmp.value_2nd_click_time[i] || 0) + 250 > Date.now()) return;
                LadiPageScript.runtime.tmp.value_2nd_click_time[i] = Date.now();
            }
            var a = LadiPageScript.runtime.tmp.value_2nd_source[i] || this.value(),
                n = parseFloatLadiPage(e.getAttribute("data-count-click")) || 0;
            n++, (LadiPageScript.runtime.tmp.value_2nd_source[i] = a), e.setAttribute("data-count-click", n), n % 2 == 0 ? this.value(a) : this.value(t);
        }
    }),
    (LadiPageLibraryV2.prototype.top = function () {
        var t = this.doc || document.getElementById(this.id);
        if (!isEmptyLadiPage(t) && t.classList.contains("ladi-section"))
            try {
                var e = t.parentElement.firstChild;
                isEmptyLadiPage(e) || e.id != LadiPageScript.runtime.builder_section_background_id || (e = e.nextElementSibling), t.parentElement.insertBefore(t, e), LadiPageScript.reloadLazyload(!1);
            } catch (t) {}
    }),
    (LadiPageLibraryV2.prototype.pause = function () {
        var t = this.doc || document.getElementById(this.id);
        if (!isEmptyLadiPage(t)) {
            var e = LadiPageScript.runtime.eventData[this.id];
            if (!isEmptyLadiPage(e) && "video" == e.type) {
                var i = t.querySelector(".iframe-video-preload:not(.no-pause)");
                isEmptyLadiPage(i) || LadiPageScript.runEventReplayVideo(i.id, i.getAttribute("data-video-type"), !1);
            }
        }
    }),
    (LadiPageLibraryV2.prototype.play = function () {
        var t = this.doc || document.getElementById(this.id);
        if (!isEmptyLadiPage(t)) {
            var e = LadiPageScript.runtime.eventData[this.id];
            if (!isEmptyLadiPage(e) && "video" == e.type) {
                var i = e["option.video_type"],
                    a = e["option.video_value"],
                    n = e["option.video_control"];
                LadiPageScript.playVideo(this.id, i, a, n);
            }
        }
    }),
    (LadiPageLibraryV2.prototype.prevSectionTabs = function () {
        var t = document.querySelectorAll('.ladi-section[data-tab-id="' + this.id + '"]');
        if (0 != t.length)
            for (var e = 0; e < t.length; e++)
                if (t[e].classList.contains("selected")) {
                    var i = e - 1;
                    (i = i < 0 ? 0 : i), (this.doc = t[i]), this.show();
                    break;
                }
    }),
    (LadiPageLibraryV2.prototype.nextSectionTabs = function () {
        var t = document.querySelectorAll('.ladi-section[data-tab-id="' + this.id + '"]');
        if (0 != t.length)
            for (var e = 0; e < t.length; e++)
                if (t[e].classList.contains("selected")) {
                    var i = e + 1;
                    (i = i >= t.length ? t.length - 1 : i), (this.doc = t[i]), this.show();
                    break;
                }
    }),
    (LadiPageLibraryV2.prototype.indexSectionTabs = function (t) {
        var e = document.querySelectorAll('.ladi-section[data-tab-id="' + this.id + '"]');
        e.length < t || ((this.doc = e[t - 1]), this.show());
    }),
    (LadiPageLibraryV2.prototype.prev = function () {
        var t = this.doc || document.getElementById(this.id);
        if (isEmptyLadiPage(t)) this.prevSectionTabs();
        else {
            var e = LadiPageScript.runtime.eventData[this.id];
            if (!isEmptyLadiPage(e)) {
                var i = null;
                if (
                    ("gallery" == e.type && (i = t.querySelector(".ladi-gallery-view-arrow.ladi-gallery-view-arrow-left")),
                    "carousel" == e.type && (i = t.querySelector(".ladi-carousel-arrow.ladi-carousel-arrow-left")),
                    "collection" == e.type && (i = t.querySelector(".ladi-collection-arrow.ladi-collection-arrow-left")),
                    "tabs" == e.type)
                ) {
                    var a = t.querySelector(".ladi-tabs > .ladi-element.selected[data-index]");
                    return (
                        isEmptyLadiPage(a) && (a = t.querySelector(".ladi-tabs > .ladi-element")),
                        void (isEmptyLadiPage(a) || isEmptyLadiPage(a.previousElementSibling) || (a.previousElementSibling.classList.add("selected"), a.classList.remove("selected"), LadiPageScript.reloadLazyload(!1)))
                    );
                }
                isEmptyLadiPage(i) || i.click();
            }
        }
    }),
    (LadiPageLibraryV2.prototype.next = function () {
        var t = this.doc || document.getElementById(this.id);
        if (isEmptyLadiPage(t)) this.nextSectionTabs();
        else {
            var e = LadiPageScript.runtime.eventData[this.id];
            if (!isEmptyLadiPage(e)) {
                var i = null;
                if (
                    ("gallery" == e.type && (i = t.querySelector(".ladi-gallery-view-arrow.ladi-gallery-view-arrow-right")),
                    "carousel" == e.type && (i = t.querySelector(".ladi-carousel-arrow.ladi-carousel-arrow-right")),
                    "collection" == e.type && (i = t.querySelector(".ladi-collection-arrow.ladi-collection-arrow-right, .ladi-collection-button-next")),
                    "survey" == e.type && (i = t.querySelector(".ladi-survey-button-next button")),
                    "tabs" == e.type)
                ) {
                    var a = t.querySelector(".ladi-tabs > .ladi-element.selected[data-index]");
                    return (
                        isEmptyLadiPage(a) && (a = t.querySelector(".ladi-tabs > .ladi-element")),
                        void (isEmptyLadiPage(a) || isEmptyLadiPage(a.nextElementSibling) || (a.nextElementSibling.classList.add("selected"), a.classList.remove("selected"), LadiPageScript.reloadLazyload(!1)))
                    );
                }
                isEmptyLadiPage(i) || i.click();
            }
        }
    }),
    (LadiPageLibraryV2.prototype.index = function (t) {
        var e = this.doc || document.getElementById(this.id);
        if (isEmptyLadiPage(e)) this.indexSectionTabs(t);
        else {
            var i = LadiPageScript.runtime.eventData[this.id];
            if (!isEmptyLadiPage(i)) {
                var a = 0;
                ("gallery" != i.type && "carousel" != i.type) || ((a = parseFloatLadiPage(e.getAttribute("data-current")) || 0), (a += 1)), "collection" == i.type && (a = parseFloatLadiPage(e.getAttribute("data-page")) || 1);
                var n = null;
                if (
                    ("tabs" == i.type &&
                        ((n = e.querySelector(".ladi-tabs > .ladi-element.selected[data-index]")),
                        isEmptyLadiPage(n) && (n = e.querySelector(".ladi-tabs > .ladi-element")),
                        isEmptyLadiPage(n) || (a = parseFloatLadiPage(n.getAttribute("data-index")) || 1)),
                    isEmptyLadiPage(t))
                )
                    return a;
                if ("tabs" != i.type) {
                    if ((("gallery" != i.type && "carousel" != i.type) || ((t -= 1), (a -= 1)), t == a))
                        return "carousel" == i.type && e.setAttribute("data-stop", !0), void ("gallery" == i.type && e.hasAttribute("data-loaded") && e.setAttribute("data-stop", !0));
                    t > a
                        ? (("gallery" != i.type && "carousel" != i.type) || e.setAttribute("data-current", t - 1), "collection" == i.type && e.setAttribute("data-page", t - 1), this.next())
                        : (("gallery" != i.type && "carousel" != i.type) || e.setAttribute("data-current", t + 1), "collection" == i.type && e.setAttribute("data-page", t + 1), this.prev());
                } else {
                    var o = e.querySelector('.ladi-tabs > .ladi-element[data-index="' + t + '"]');
                    isEmptyLadiPage(o) || (isEmptyLadiPage(n) || n.classList.remove("selected"), o.classList.add("selected"), LadiPageScript.reloadLazyload(!1));
                }
            }
        }
    }),
    (LadiPageLibraryV2.prototype.readmore = function (t) {
        var e = this,
            i = this.doc || document.getElementById(this.id);
        if (!isEmptyLadiPage(i)) {
            var a = null;
            if (i.classList.contains("ladi-section")) (a = i.getElementsByClassName("ladi-section-arrow-down")[0]), isEmptyLadiPage(a) || a.click();
            else {
                var n = i.parentElement.querySelector("#" + i.id + " > .ladi-collection.readmore");
                if (!isEmptyLadiPage(n)) {
                    var o = i.querySelector(".ladi-collection .ladi-collection-page.last");
                    if (!isEmptyLadiPage(o)) return;
                    (a = i.querySelector(".ladi-collection .ladi-collection-button-next")),
                        isEmptyLadiPage(a) || 0 == getComputedStyle(a).opacity || a.click(),
                        t &&
                            i.classList.contains("dataset") &&
                            LadiPageScript.runTimeout(function () {
                                e.readmore(t);
                            }, 1);
                }
            }
        }
    }),
    (LadiPageLibraryV2.prototype.collapse = function (t) {
        var e = this.doc || document.getElementById(this.id);
        if (!isEmptyLadiPage(e) && !e.classList.contains("ladi-section")) {
            var i = e.getElementsByClassName("ladi-popup")[0];
            if (isEmptyLadiPage(i)) {
                var a = isNullLadiPage(t),
                    n = document.querySelector(["#" + this.id + " > .ladi-headline", "#" + this.id + " > .ladi-paragraph", "#" + this.id + " > .ladi-list-paragraph"].join(", ")),
                    o = isEmptyLadiPage(n),
                    r = 0,
                    d = 0,
                    s = null,
                    l = this,
                    c = function (t) {
                        var i = LadiPageScript.findAncestor(e.parentElement, "ladi-element");
                        isEmptyLadiPage(i) && (i = LadiPageScript.findAncestor(e.parentElement, "ladi-section")), o || (t = !1), LadiPageScript.updateHeightElement(!0, e, i, r, d, t);
                    };
                if ("none" == getComputedStyle(e).display) {
                    if (a || t)
                        if (a && o) {
                            if (((s = parseFloatLadiPage(e.getAttribute("data-timeout-id")) || null), !isEmptyLadiPage(s))) return;
                            e.classList.remove("height-0"),
                                e.classList.remove("overflow-hidden"),
                                e.classList.remove("transition-collapse"),
                                l.show(),
                                (d = parseFloatLadiPage(getComputedStyle(e).height) || 0),
                                e.classList.add("overflow-hidden"),
                                e.classList.add("height-0"),
                                (s = LadiPageScript.runTimeout(function () {
                                    e.classList.add("transition-collapse"),
                                        e.classList.remove("height-0"),
                                        (s = LadiPageScript.runTimeout(function () {
                                            e.classList.remove("overflow-hidden"), e.classList.remove("transition-collapse"), e.removeAttribute("data-timeout-id");
                                        }, 1e3 * parseFloatLadiPage(getComputedStyle(e).transitionDuration))),
                                        e.setAttribute("data-timeout-id", s),
                                        c(!0);
                                }, 100)),
                                e.setAttribute("data-timeout-id", s);
                        } else l.show(), (d = parseFloatLadiPage(getComputedStyle(e).height) || 0), c();
                } else if (a || !t)
                    if (a && o) {
                        if (((s = parseFloatLadiPage(e.getAttribute("data-timeout-id")) || null), !isEmptyLadiPage(s))) return;
                        e.classList.remove("height-0"),
                            e.classList.remove("overflow-hidden"),
                            e.classList.remove("transition-collapse"),
                            (r = parseFloatLadiPage(getComputedStyle(e).height) || 0),
                            e.classList.add("overflow-hidden"),
                            (s = LadiPageScript.runTimeout(function () {
                                e.classList.add("transition-collapse"),
                                    e.classList.add("height-0"),
                                    (s = LadiPageScript.runTimeout(function () {
                                        e.classList.remove("overflow-hidden"), e.classList.remove("transition-collapse"), e.classList.remove("height-0"), e.removeAttribute("data-timeout-id"), l.hide();
                                    }, 1e3 * parseFloatLadiPage(getComputedStyle(e).transitionDuration))),
                                    e.setAttribute("data-timeout-id", s),
                                    c(!0);
                            }, 100)),
                            e.setAttribute("data-timeout-id", s);
                    } else (r = parseFloatLadiPage(getComputedStyle(e).height) || 0), l.hide(), c();
            }
        }
    }),
    (LadiPageLibraryV2.prototype.hide = function (t) {
        var e = this,
            i = this.doc || document.getElementById(this.id);
        if (!isEmptyLadiPage(i)) {
            var a = !1;
            if (0 == i.getElementsByClassName("ladi-popup").length) {
                if (
                    (LadiPageScript.runtime.has_popupx && i.classList.contains("ladi-section") && "none" != getComputedStyle(i).display && (a = !0),
                    i.style.setProperty("display", "none", "important"),
                    LadiPageScript.reloadLazyload(!1),
                    !t && a)
                ) {
                    LadiPageScript.runtime.tmp.runActionPopupX({ id: this.id, dimension: { display: "none" }, action: { type: "set_iframe_dimension" } });
                }
            } else
                LadiPageScript.runRemovePopup(this.id, !0, function () {
                    for (var t = document.querySelectorAll("#" + LadiPageScript.runtime.builder_section_popup_id + " .ladi-container > .ladi-element"), i = 0; i < t.length; i++)
                        t[i].id != e.id && t[i].hasAttribute("data-popup-backdrop") && "none" != getComputedStyle(t[i]).display && LadiPageScript.runRemovePopup(t[i].id, !0);
                });
            e.hideDropbox();
        }
    }),
    (LadiPageLibraryV2.prototype.show = function (t, e) {
        var i = this.doc || document.getElementById(this.id);
        if (!isEmptyLadiPage(i)) {
            var a = 0;
            if (i.classList.contains("ladi-section")) {
                var n = i.getAttribute("data-tab-id");
                if (!isEmptyLadiPage(n)) {
                    var o = document.querySelectorAll('.ladi-section[data-tab-id="' + n + '"]');
                    for (a = 0; a < o.length; a++) o[a].id == i.id ? o[a].classList.add("selected") : (o[a].classList.remove("selected"), window.ladi(o[a].id).hide());
                }
            }
            var r = this,
                d = function () {
                    if (isObjectLadiPage(LadiPageScript.runtime.eventData)) {
                        var t = LadiPageScript.runtime.eventData[r.id];
                        isEmptyLadiPage(t) || LadiPageScript.startAutoScroll(r.id, t.type, t[LadiPageScript.const.DESKTOP + ".option.auto_scroll"], t[LadiPageScript.const.MOBILE + ".option.auto_scroll"]);
                        for (var e = i.getElementsByClassName("ladi-element"), a = 0; a < e.length; a++) {
                            var n = LadiPageScript.runtime.eventData[e[a].id];
                            isEmptyLadiPage(n) || LadiPageScript.startAutoScroll(e[a].id, n.type, n[LadiPageScript.const.DESKTOP + ".option.auto_scroll"], n[LadiPageScript.const.MOBILE + ".option.auto_scroll"]);
                        }
                    }
                },
                s = function () {
                    for (var t = i.getElementsByClassName("ladi-element"), e = -1; e < t.length; e++) {
                        var a = -1 == e ? i : t[e];
                        "true" == a.getAttribute("data-sticky") &&
                            (a.removeAttribute("data-top"),
                            a.removeAttribute("data-left"),
                            a.removeAttribute("data-sticky"),
                            a.style.removeProperty("top"),
                            a.style.removeProperty("left"),
                            a.style.removeProperty("width"),
                            a.style.removeProperty("position"),
                            a.style.removeProperty("z-index"));
                    }
                    LadiPageScript.runEventScroll();
                };
            if (t) {
                if (i.getElementsByClassName("ladi-popup").length > 0) {
                    var l = !0;
                    if ((isObjectLadiPage(e) && !isNullLadiPage(e.checkHidePopupOther) && (l = e.checkHidePopupOther), l)) {
                        var c = document.querySelectorAll("#" + LadiPageScript.runtime.builder_section_popup_id + " .ladi-container > .ladi-element");
                        for (a = 0; a < c.length; a++) c[a].id != r.id && c[a].hasAttribute("data-popup-backdrop") && "none" != getComputedStyle(c[a]).display && LadiPageScript.runRemovePopup(c[a].id, !0);
                    }
                    LadiPageScript.runShowPopup(!1, this.id, null, null, !0), LadiPageScript.removeLazyloadPopup(this.id), d(), s(), LadiPageScript.runResizeSectionBackground();
                } else i.style.setProperty("display", "block", "important"), d(), s(), LadiPageScript.runResizeSectionBackground(), LadiPageScript.reloadLazyload(!1);
            } else {
                if (LadiPageScript.runtime.has_popupx && LadiPageScript.runtime.tmp.showPopupX(i.id, !0, e)) return;
                r.show(!0);
            }
        }
    }),
    (LadiPageLibraryV2.prototype.showDropbox = function (t, e, i) {
        var a = this.doc || document.getElementById(this.id);
        if (!(isEmptyLadiPage(a) || "true" != a.getAttribute("data-dropbox") || (i && a.getAttribute("data-from-doc-id") == t.id && "true" != a.getAttribute("data-dropbox-backdrop") && "block" == getComputedStyle(a).display))) {
            a.classList.add("opacity-0"),
                this.show(),
                a.style.removeProperty("display"),
                a.style.removeProperty("top"),
                a.style.removeProperty("left"),
                a.style.removeProperty("bottom"),
                a.style.removeProperty("right"),
                isObjectLadiPage(e) || (e = {}),
                (e.padding = parseFloatLadiPage(e.padding) || 0),
                (e.animation_duration = parseFloatLadiPage(e.animation_duration) || 0),
                t.insertBefore(a, t.firstChild),
                a.setAttribute("data-from-doc-id", t.id),
                a.setAttribute("data-style", a.getAttribute("style") || ""),
                isEmptyLadiPage(a.getAttribute("data-style")) && a.removeAttribute("data-style"),
                t.setAttribute("data-style", t.getAttribute("style") || ""),
                isEmptyLadiPage(t.getAttribute("data-style")) && t.removeAttribute("data-style");
            var n = a.getElementsByClassName("ladi-popup")[0];
            isEmptyLadiPage(n) || (n.setAttribute("data-style", n.getAttribute("style") || ""), isEmptyLadiPage(n.getAttribute("data-style")) && n.removeAttribute("data-style"));
            var o = LadiPageScript.getElementBoundingClientRect(t),
                r = LadiPageScript.getElementBoundingClientRect(a),
                d = "";
            (e.position != LadiPageScript.const.TOOLTIP_POSITION.top_left && e.position != LadiPageScript.const.TOOLTIP_POSITION.top_middle && e.position != LadiPageScript.const.TOOLTIP_POSITION.top_right) ||
                (a.style.setProperty("top", "auto"),
                a.style.setProperty("bottom", o.height + e.padding + "px"),
                e.padding > 0 && (d += 'content: ""; position: absolute; width: 100%; height: ' + e.padding + "px; bottom: " + -e.padding + "px; left: 0;")),
                e.position == LadiPageScript.const.TOOLTIP_POSITION.top_middle && a.style.setProperty("left", (o.width - r.width) / 2 + "px"),
                e.position == LadiPageScript.const.TOOLTIP_POSITION.top_right && (a.style.setProperty("left", "auto"), a.style.setProperty("right", "0")),
                (e.position != LadiPageScript.const.TOOLTIP_POSITION.bottom_left && e.position != LadiPageScript.const.TOOLTIP_POSITION.bottom_middle && e.position != LadiPageScript.const.TOOLTIP_POSITION.bottom_right) ||
                    (a.style.setProperty("bottom", "auto"),
                    a.style.setProperty("top", o.height + e.padding + "px"),
                    e.padding > 0 && (d += 'content: ""; position: absolute; width: 100%; height: ' + e.padding + "px; top: " + -e.padding + "px; left: 0;")),
                e.position == LadiPageScript.const.TOOLTIP_POSITION.bottom_middle && a.style.setProperty("left", (o.width - r.width) / 2 + "px"),
                e.position == LadiPageScript.const.TOOLTIP_POSITION.bottom_right && (a.style.setProperty("left", "auto"), a.style.setProperty("right", "0")),
                (e.position != LadiPageScript.const.TOOLTIP_POSITION.left_top && e.position != LadiPageScript.const.TOOLTIP_POSITION.left_middle && e.position != LadiPageScript.const.TOOLTIP_POSITION.left_bottom) ||
                    (a.style.setProperty("left", "auto"),
                    a.style.setProperty("right", o.width + e.padding + "px"),
                    e.padding > 0 && (d += 'content: ""; position: absolute; width: ' + e.padding + "px; height: 100%; top: 0; right: " + -e.padding + "px;")),
                e.position == LadiPageScript.const.TOOLTIP_POSITION.left_top && a.style.setProperty("bottom", "auto"),
                e.position == LadiPageScript.const.TOOLTIP_POSITION.left_bottom && a.style.setProperty("top", "auto"),
                (e.position != LadiPageScript.const.TOOLTIP_POSITION.right_top && e.position != LadiPageScript.const.TOOLTIP_POSITION.right_middle && e.position != LadiPageScript.const.TOOLTIP_POSITION.right_bottom) ||
                    (a.style.setProperty("right", "auto"),
                    a.style.setProperty("left", o.width + e.padding + "px"),
                    e.padding > 0 && (d += 'content: ""; position: absolute; width: ' + e.padding + "px; height: 100%; top: 0; left: " + -e.padding + "px;")),
                e.position == LadiPageScript.const.TOOLTIP_POSITION.right_top && a.style.setProperty("bottom", "auto"),
                e.position == LadiPageScript.const.TOOLTIP_POSITION.right_bottom && a.style.setProperty("top", "auto"),
                a.style.setProperty("z-index", "90000090"),
                "fixed" == getComputedStyle(t).position && t.style.setProperty("z-index", "90000090");
            var s = "dropbox-" + a.id;
            if (i && !isEmptyLadiPage(d)) (d = "#" + a.id + ":before {" + d + "}"), LadiPageScript.createStyleElement(s, d);
            else {
                var l = document.getElementById(s);
                isEmptyLadiPage(l) || l.parentElement.removeChild(l);
            }
            if (i) a.removeAttribute("data-dropbox-backdrop");
            else a.setAttribute("data-dropbox-backdrop", !0), document.getElementById(LadiPageScript.runtime.backdrop_dropbox_id).style.setProperty("display", "block");
            isEmptyLadiPage(e.animation_name) ||
                isEmptyLadiPage(n) ||
                (n.style.setProperty("animation-name", e.animation_name),
                n.style.setProperty("-webkit-animation-name", e.animation_name),
                n.style.setProperty("animation-duration", e.animation_duration + "s"),
                n.style.setProperty("-webkit-animation-duration", e.animation_duration + "s")),
                a.classList.remove("opacity-0");
        }
    }),
    (LadiPageLibraryV2.prototype.hideDropbox = function () {
        var t = this.doc || document.getElementById(this.id);
        if (!isEmptyLadiPage(t) && "true" == t.getAttribute("data-dropbox")) {
            t.setAttribute("style", t.getAttribute("data-style") || ""), t.removeAttribute("data-style");
            var e = document.getElementById(t.getAttribute("data-from-doc-id"));
            isEmptyLadiPage(e) || (e.setAttribute("style", e.getAttribute("data-style") || ""), e.removeAttribute("data-style"));
            var i = t.getElementsByClassName("ladi-popup")[0];
            isEmptyLadiPage(i) || i.setAttribute("style", i.getAttribute("data-style") || "");
            var a = "dropbox-" + t.id,
                n = document.getElementById(a);
            isEmptyLadiPage(n) || n.parentElement.removeChild(n);
            for (var o = t.querySelectorAll('[data-dropbox-backdrop="true"]'), r = 0; r < o.length; r++) window.ladi(o[r].id).hide();
            if ((t.removeAttribute("data-dropbox-backdrop"), 0 == (o = document.querySelectorAll('[data-dropbox-backdrop="true"]')).length))
                document.getElementById(LadiPageScript.runtime.backdrop_dropbox_id).style.removeProperty("display");
            document.querySelector("#" + LadiPageScript.runtime.builder_section_popup_id + " > .ladi-container").appendChild(t);
        }
    }),
    (LadiPageLibraryV2.prototype.toggle = function (t) {
        var e = this.doc || document.getElementById(this.id);
        isEmptyLadiPage(e) || ("none" == getComputedStyle(e).display ? this.show(t) : this.hide(t));
    }),
    (LadiPageLibraryV2.prototype.set_style = function (t, e, i) {
        var a = this.doc || document.getElementById(this.id);
        if (!isEmptyLadiPage(a)) {
            var n = e.action_type,
                o = "set-style-" + t.id + "-" + a.id + "-" + n,
                r = "set-style-" + t.id + "-" + a.id + "-" + n + "-transition",
                d = document.getElementById(i ? r : o);
            isEmptyLadiPage(d) || d.parentElement.removeChild(d), a.classList.remove(o);
            var s = {};
            isEmptyLadiPage(e.color) || (s.color = e.color),
                isEmptyLadiPage(e.background_color) || ((s.background = "none"), (s["background-color"] = e.background_color)),
                isEmptyLadiPage(e.border_color) || (s["border-color"] = e.border_color),
                isEmptyLadiPage(e.opacity) || (s.opacity = e.opacity / 100),
                isEmptyLadiPage(e.transform_scale) || (s.transform = "scale(" + e.transform_scale / 100 + ")"),
                e.ontop && (s["z-index"] = "9000000090 !important"),
                isObjectLadiPage(e.custom_css) &&
                    Object.keys(e.custom_css).forEach(function (t) {
                        s[t] = e.custom_css[t];
                    });
            var l = [],
                c = "",
                u = "",
                p = "",
                m = "",
                g = "",
                _ = "",
                y = !1;
            Object.keys(s).forEach(function (t) {
                "z-index" != t.toLowerCase()
                    ? "background" == t.toLowerCase() || t.toLowerCase().startsWith("background-")
                        ? (p += t + ": " + s[t] + ";")
                        : "color" == t.toLowerCase() || "font" == t.toLowerCase() || t.toLowerCase().startsWith("font-") || t.toLowerCase().startsWith("text-") || t.toLowerCase().startsWith("line-")
                        ? (m += t + ": " + s[t] + ";")
                        : (u += t + ": " + s[t] + ";")
                    : (_ += t + ": " + s[t] + ";");
            });
            var f = function (t) {
                for (var e = !1, n = 0; n < l.length; n++) {
                    var r = l[n];
                    if (isEmptyLadiPage(r)) {
                        i && (y || (g += "#" + a.id + " {transition: all 150ms linear 0s;}")), (c += "#" + a.id + "." + o + " {" + t + "}"), (e = !0);
                        break;
                    }
                    if (document.querySelectorAll("#" + a.id + " > " + r).length > 0) {
                        i && (g += "#" + a.id + " > " + r + " {transition: all 150ms linear 0s;}"), (c += "#" + a.id + "." + o + " > " + r + " {" + t + "}"), (e = !0);
                        break;
                    }
                }
                return e;
            };
            if (!isEmptyLadiPage(m)) {
                var v = function (t) {
                    t = isEmptyLadiPage(t) ? "" : "." + t;
                    var e = "";
                    return (e += "#" + a.id + t + ", "), (e += "#" + a.id + t + " .ladi-headline, "), (e += "#" + a.id + t + " .ladi-paragraph, "), (e += "#" + a.id + t + " .ladi-list-paragraph");
                };
                document.querySelectorAll(v()).length > 0 && (i && ((y = !0), (g += v() + " {transition: all 150ms linear 0s;}")), (c += v(o) + " {" + m + "}"));
            }
            isEmptyLadiPage(p) ||
                ((l = [
                    ".ladi-section-background",
                    ".ladi-popup .ladi-popup-background",
                    ".ladi-button .ladi-button-background",
                    ".ladi-box",
                    ".ladi-video .ladi-video-background",
                    ".ladi-form .ladi-form-item-background",
                    ".ladi-frame .ladi-frame-background",
                    ".ladi-survey .ladi-survey-option-background",
                    ".ladi-combobox .ladi-combobox-item-background",
                    ".ladi-countdown .ladi-countdown-background",
                    ".ladi-notify",
                ]),
                f(p) || (u += p)),
                isEmptyLadiPage(u) ||
                    ((l = [
                        ".ladi-group",
                        ".ladi-accordion",
                        ".ladi-popup",
                        ".ladi-image",
                        ".ladi-gallery",
                        ".ladi-button",
                        ".ladi-button-group",
                        ".ladi-headline",
                        ".ladi-paragraph",
                        ".ladi-list-paragraph",
                        ".ladi-line",
                        ".ladi-box",
                        ".ladi-collection",
                        ".ladi-tabs",
                        ".ladi-shape",
                        ".ladi-video",
                        ".ladi-form",
                        ".ladi-carousel",
                        ".ladi-html-code",
                        ".ladi-frame",
                        ".ladi-table",
                        ".ladi-survey",
                        ".ladi-combobox",
                        ".ladi-countdown",
                        ".ladi-notify",
                        ".ladi-spin-lucky",
                    ]),
                    f(u) || (_ += u)),
                isEmptyLadiPage(_) || ((l = [""]), f(_)),
                i ? LadiPageScript.createStyleElement(r, g) : LadiPageScript.createStyleElement(o, c),
                i || a.classList.add(o);
        }
    }),
    (LadiPageLibraryV2.prototype.remove_style = function (t, e) {
        var i = this.doc || document.getElementById(this.id);
        if (!isEmptyLadiPage(i)) {
            var a = e.action_type,
                n = "set-style-" + t.id + "-" + i.id + "-" + a;
            i.classList.remove(n);
            var o = document.getElementById(n);
            isEmptyLadiPage(o) || o.parentElement.removeChild(o);
        }
    }),
    (LadiPageLibraryV2.prototype.element = function () {
        return this.doc || document.getElementById(this.id);
    }),
    ["start", "add_turn"].forEach(function (t) {
        LadiPageLibraryV2.prototype[t] = function () {
            var e = LadiPageScript.runtime.eventData[this.id];
            if (!isEmptyLadiPage(e)) {
                var i = LadiPageApp[e.type + LadiPageScript.const.APP_RUNTIME_PREFIX];
                if (!isEmptyLadiPage(i)) {
                    var a = i(e, !0);
                    isFunctionLadiPage(a[t]) && a[t](this.id);
                }
            }
        };
    });
var LadiPageAppV2,
    ladi =
        ladi ||
        function (t, e) {
            if (!isEmptyLadiPage(t)) {
                var i = new LadiPageLibraryV2();
                return (i.id = t), (i.doc = e), i;
            }
        },
    ladi_fbq = function (t, e, i, a) {
        if (isFunctionLadiPage(window.fbq)) {
            if (isObjectLadiPage(window.ladi_conversion_api) && isObjectLadiPage(window.ladi_conversion_api.facebook) && isArrayLadiPage(window.ladi_conversion_api.facebook.pixels)) {
                isObjectLadiPage(a) || (a = {});
                a.eventID = "ladi." + Date.now() + "." + (Math.floor(9e10 * Math.random()) + 1e10);
            }
            window.fbq(t, e, i, a), LadiPageScript.runConversionApi("facebook", "events", [{ key: t, name: e, custom_data: i, data: a }]);
        }
    };
isArrayLadiPage(window.ladi_fbq_data) &&
    (window.ladi_fbq_data.forEach(function (t) {
        ladi_fbq(t[0], t[1], t[2], t[3]);
    }),
    delete window.ladi_fbq_data),
    ((LadiPageAppV2 = LadiPageAppV2 || function () {}).prototype.notify_runtime = function (t, e) {
        var i = function () {},
            a = "top_left",
            n = "top_center",
            o = "top_right",
            r = "bottom_left",
            d = "bottom_center",
            s = "bottom_right";
        return (
            (i.prototype.run = function (e, i) {
                isObjectLadiPage(LadiPageScript.runtime.tmp.timeout_notify) || (LadiPageScript.runtime.tmp.timeout_notify = {});
                var l = t["option.sheet_id"],
                    c = t.dataset_value,
                    u = document.getElementById(e);
                if ((u.classList.add("ladi-hidden"), !isEmptyLadiPage(l) || !isEmptyLadiPage(c))) {
                    var p = i ? LadiPageScript.const.DESKTOP : LadiPageScript.const.MOBILE,
                        m = t[p + ".option.position"],
                        g = 1e3 * (parseFloatLadiPage(t["option.time_show"]) || 5),
                        _ = 1e3 * (parseFloatLadiPage(t["option.time_delay"]) || 10);
                    _ = _ < 501 ? 501 : _;
                    var y = "https://w.ladicdn.com/source/notify.svg",
                        f = [
                            { key: "gsx$title", className: ".ladi-notify-title" },
                            { key: "gsx$content", className: ".ladi-notify-content" },
                            { key: "gsx$time", className: ".ladi-notify-time" },
                            { key: "gsx$image", className: ".ladi-notify-image img" },
                        ];
                    u.classList.remove("ladi-hidden");
                    var v = function () {
                        u.style.setProperty("opacity", 0),
                            (m != a && m != n && m != o) || u.style.setProperty("top", -u.clientHeight - 100 + "px"),
                            (m != r && m != d && m != s) || u.style.setProperty("bottom", -u.clientHeight - 100 + "px");
                    };
                    v(),
                        f.forEach(function (t) {
                            "gsx$image" == t.key ? (u.querySelectorAll(t.className)[0].src = y) : (u.querySelectorAll(t.className)[0].textContent = "");
                        });
                    var P = function (t) {
                            t = t.sort(function () {
                                return 0.5 - Math.random();
                            });
                            var i = -1,
                                l = function () {
                                    if (i + 1 < t.length) {
                                        var c = t[++i],
                                            p = Object.keys(c);
                                        u.style.removeProperty("opacity"),
                                            (m != a && m != n && m != o) || u.style.removeProperty("top"),
                                            (m != r && m != d && m != s) || u.style.removeProperty("bottom"),
                                            f.forEach(function (t) {
                                                -1 != p.indexOf(t.key) &&
                                                    ("gsx$image" == t.key ? (u.querySelectorAll(t.className)[0].src = isEmptyLadiPage(c[t.key].$t) ? y : c[t.key].$t) : (u.querySelectorAll(t.className)[0].textContent = c[t.key].$t));
                                            });
                                        var h = function () {
                                            var a = f.findIndex(function (t) {
                                                return "gsx$image" == t.key;
                                            });
                                            if (-1 != a) {
                                                var n = t[i + 1 >= t.length ? 0 : i + 1];
                                                n.hasOwnProperty(f[a].key) && (u.querySelectorAll(f[a].className)[0].src = isEmptyLadiPage(n[f[a].key].$t) ? y : n[f[a].key].$t);
                                            }
                                            LadiPageScript.runtime.tmp.timeout_notify[e] = LadiPageScript.runTimeout(l, _ - 500);
                                        };
                                        LadiPageScript.runtime.tmp.timeout_notify[e] = LadiPageScript.runTimeout(function () {
                                            v(), (LadiPageScript.runtime.tmp.timeout_notify[e] = LadiPageScript.runTimeout(h, 500));
                                        }, g);
                                    } else P(t);
                                };
                            LadiPageScript.runtime.tmp.timeout_notify[e] = LadiPageScript.runTimeout(l, _);
                        },
                        h = function (t) {
                            u.querySelector(".ladi-notify").classList.remove("ladi-hidden"), u.classList.add("ladi-notify-transition"), P(t);
                        };
                    isEmptyLadiPage(c) || h(c),
                        isEmptyLadiPage(l) ||
                            LadiPageScript.sendRequest("GET", "https://docs.google.com/spreadsheets/d/" + l + "/gviz/tq?tqx=out:json", null, !0, null, function (t, e, i) {
                                if (i.readyState == XMLHttpRequest.DONE && 200 == e) {
                                    t = (t = t.substr(t.indexOf('"table":{') + '"table":'.length)).substr(0, t.indexOf("});"));
                                    var a = JSON.parse(t),
                                        n = [],
                                        o = a.cols;
                                    isObjectLadiPage(a) &&
                                        0 == a.parsedNumHeaders &&
                                        isArrayLadiPage(a.rows) &&
                                        a.rows.length > 0 &&
                                        isObjectLadiPage(a.rows[0]) &&
                                        isArrayLadiPage(a.rows[0].c) &&
                                        a.rows[0].c.length > 0 &&
                                        ((o = []),
                                        a.rows[0].c.forEach(function (t) {
                                            o.push({ label: isObjectLadiPage(t) ? t.v : "" });
                                        }),
                                        a.rows.shift()),
                                        isObjectLadiPage(a) &&
                                            isArrayLadiPage(a.rows) &&
                                            isArrayLadiPage(o) &&
                                            a.rows.forEach(function (t) {
                                                if (isObjectLadiPage(t)) {
                                                    var e = {};
                                                    o.forEach(function (i, a) {
                                                        if (isArrayLadiPage(t.c)) {
                                                            var n = t.c[a];
                                                            isObjectLadiPage(i) && !isEmptyLadiPage(i.label) && isObjectLadiPage(n) && (e["gsx$" + i.label.trim().toLowerCase()] = { $t: n.v });
                                                        }
                                                    }),
                                                        n.push(e);
                                                }
                                            }),
                                        h(n);
                                }
                            });
                }
            }),
            new i()
        );
    }),
    ((LadiPageAppV2 = LadiPageAppV2 || function () {}).prototype.spinlucky_runtime = function (t, e) {
        var i = function () {},
            a = function (t) {
                return parseFloatLadiPage(window.ladi("_total_turn_" + t).get_cookie()) || 0;
            };
        return (
            (i.prototype.getEventTrackingCategory = function () {
                return "LadiPageFinish";
            }),
            (i.prototype.run = function (e, i) {
                var n = t["option.spinlucky_setting.list_value"],
                    o = t.dataset_value,
                    r = t["option.spinlucky_setting.result_popup_id"],
                    d = t["option.spinlucky_setting.result_message"],
                    s = t["option.spinlucky_setting.max_turn"],
                    l = a(e);
                if (!isEmptyLadiPage(n) || !isEmptyLadiPage(o)) {
                    (n = n || o), LadiPageScript.setDataReplaceStr("spin_turn_left", s - l);
                    var c = document.getElementById(e),
                        u = c.getElementsByClassName("ladi-spin-lucky-start")[0],
                        p = c.getElementsByClassName("ladi-spin-lucky-screen")[0],
                        m = "";
                    n.forEach(function (t, e) {
                        var i = Base64.decode(t).split("|");
                        if (3 == i.length) {
                            var a = (360 / n.length) * e + 180 / n.length,
                                o = "rotate(" + (a *= -1) + "deg) translateY(-50%)";
                            m += '<div class="ladi-spin-lucky-label" style="transform: ' + o + "; -webkit-transform: " + o + ';">' + decodeURIComponentLadiPage(i[1].trim()) + "</div>";
                        }
                    }),
                        (p.innerHTML = m);
                    var g = !1;
                    u.addEventListener("click", function (t) {
                        if ((t.stopPropagation(), !g))
                            if ((l = a(e)) >= s) LadiPageScript.showMessage(LadiPageScript.const.LANG.GAME_MAX_TURN_MESSAGE.format(s));
                            else {
                                g = !0;
                                var i = [],
                                    o = 0,
                                    c = 1;
                                n.forEach(function (t, e) {
                                    var a = Base64.decode(t).split("|"),
                                        n = decodeURIComponentLadiPage(a[0].trim()),
                                        r = decodeURIComponentLadiPage(a[1].trim()),
                                        d = parseFloatLadiPage(decodeURIComponentLadiPage(a[2].trim())) || 0;
                                    i.push({ min: c, max: c + d - 1, value: n, text: r, percent: d, index: e }), (c += d), (o += d);
                                });
                                for (var u = LadiPageScript.randomInt(1, o), m = null, _ = 0; _ < i.length; _++)
                                    if (i[_].min <= u && i[_].max >= u) {
                                        m = i[_];
                                        break;
                                    }
                                if (isEmptyLadiPage(m)) g = !1;
                                else {
                                    var y = parseFloatLadiPage(p.getAttribute("data-rotate")) || 0,
                                        f = m.index * (360 / i.length) + 360 * (4 + Math.ceil(y / 360)) + 180 / i.length,
                                        v = "rotate(" + f + "deg)";
                                    p.setAttribute("data-rotate", f),
                                        p.style.setProperty("transform", v),
                                        p.style.setProperty("-webkit-transform", v),
                                        "NEXT_TURN" != m.value.toUpperCase() && (l++, window.ladi("_total_turn_" + e).set_cookie(l, 1));
                                    LadiPageScript.runTimeout(function () {
                                        "NEXT_TURN" == m.value.toUpperCase()
                                            ? isEmptyLadiPage(m.text) || LadiPageScript.showMessage(m.text)
                                            : (LadiPageScript.setDataReplaceStr("coupon", m.value),
                                              LadiPageScript.setDataReplaceStr("coupon_code", m.value),
                                              LadiPageScript.setDataReplaceStr("coupon_text", m.text),
                                              LadiPageScript.setDataReplaceStr("spin_turn_left", s - l),
                                              LadiPageScript.setDataReplaceElement(!0, !1, null, null, ["coupon", "coupon_code", "coupon_text", "spin_turn_left"]),
                                              r == LadiPageScript.const.GAME_RESULT_TYPE.default ? isEmptyLadiPage(d) || LadiPageScript.showMessage(d) : window.ladi(r).show(),
                                              LadiPageScript.runEventTracking(e, { is_form: !1 })),
                                            (g = !1);
                                    }, 1e3 * parseFloatLadiPage(getComputedStyle(p).transitionDuration) + 1e3);
                                }
                            }
                    });
                }
            }),
            (i.prototype.start = function (t) {
                var e = document.getElementById(t);
                if (!isEmptyLadiPage(e) && e.getElementsByClassName("ladi-spin-lucky").length > 0) {
                    var i = e.getElementsByClassName("ladi-spin-lucky-start")[0];
                    isEmptyLadiPage(i) || i.click();
                }
            }),
            (i.prototype.add_turn = function (e) {
                var i = t["option.spinlucky_setting.max_turn"],
                    n = a(e);
                n > 0 && n--, window.ladi("_total_turn_" + e).set_cookie(n, 1), LadiPageScript.setDataReplaceStr("spin_turn_left", i - n), LadiPageScript.setDataReplaceElement(!1);
            }),
            new i()
        );
    });
(LadiPageScript.runtime.lang = "vi"),
    (LadiPageScript.const.LANG = {
        ALERT_TITLE: "Alert",
        ALERT_BUTTON_TEXT: "OK",
        GET_CODE_BUTTON_TEXT: "Gửi lại",
        COPIED: "Copied!",
        PASTED: "Pasted!",
        FAILED: "Failed!",
        OPTION_NO_SELECT: "Không chọn",
        OPTION_TRUE: "Có",
        OPTION_FALSE: "Không",
        REQUEST_SEND_ERROR: "Đã xảy ra lỗi, vui lòng thử lại!",
        FORM_LOGIN_SEND_ERROR: "Mã của bạn không đúng hoặc đã hết hạn!",
        FORM_SEND_DATA_NO_CONFIG: "Cảm ơn bạn!",
        FORM_UPLOAD_FILE_MAX_SIZE_ERROR: "Bạn chỉ được upload file tổng dung lượng tối đa {{max_size}}MB.",
        FORM_UPLOAD_FILE_MAX_LENGTH_ERROR: "Bạn chỉ được upload tối đa {{max_length}} file.",
        FORM_CAPTCHA_ERROR: "Vui lòng xác minh rằng bạn không phải người máy!",
        FORM_CAPTCHA_LOADING: "Vui lòng chờ xác minh rằng bạn không phải người máy!",
        FORM_THANKYOU_MESSAGE_DEFAULT: "Cảm ơn bạn đã quan tâm!",
        FORM_INPUT_REQUIRED_ERROR: "Vui lòng nhập đầy đủ các trường thông tin!",
        FORM_INPUT_EMAIL_REGEX: "Vui lòng nhập đúng định dạng email!",
        FORM_INPUT_TEXT_REGEX: "Vui lòng nhập đúng định dạng!",
        PRODUCT: "Sản phẩm",
        SERVICE: "Dịch vụ",
        TICKET: "Vé",
        ADD_TO_CART_QUANTITY_REQUIRED: "Vui lòng nhập số lượng!",
        ADD_TO_CART_NO_PRODUCT: "Không tìm thấy thông tin {{name}}, vui lòng thử lại sau!",
        ADD_TO_CART_PRODUCT_REQUIRED: "Vui lòng chọn {{name}}!",
        ADD_TO_CART_NO_QUANTITY: "{{name}} đã hết số lượng!",
        ADD_TO_CART_MAX_QUANTITY: "Bạn chỉ được mua tối đa {{max}} {{name}}.",
        ADD_TO_CART_PRODUCT_BEFORE_START_DATE: "Chưa đến thời gian mở bán {{name}}!",
        ADD_TO_CART_PRODUCT_AFTER_END_DATE: "Thời gian mua {{name}} đã hết!",
        ADD_TO_CART_PRODUCT_ONLY_ONE: "Bạn chỉ được mua 1 {{name}} cùng lúc.",
        GAME_RESULT_MESSAGE: "Chúc mừng bạn nhận được {{coupon_text}}. Nhập mã: {{coupon_code}} để sử dụng. Bạn còn {{spin_turn_left}} lượt quay.",
        GAME_MAX_TURN_MESSAGE: "Bạn đã hết lượt quay.",
        HIDE_ELEMENT: "Ẩn phần tử",
        SHOW_ELEMENT: "Hiện phần tử",
        TOP_ELEMENT: "Kéo Section lên đầu",
        SCROLL_ELEMENT: "Kéo tới Section",
        SET_COOKIE: "Thiết lập Cookie",
    });
