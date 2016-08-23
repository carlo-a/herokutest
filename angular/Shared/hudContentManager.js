/* Content Manager */
var aoContentManager = angular.module('HUD-ContentManager', []);
aoContentManager.provider('ConfigurableItems', function ConfigurableItemsProvider() {
    var ColorTheme = {
        labels: {
            subtle: "gray",
            main: "white",
            active: "whitesmoke",
            title: "#425563"
        },
        functional: {
            primary: "#01a982",//"#425563",
            secondary: "#614767",
            danger: "#f04953",
            warning: "#ffd144",
            'default': "#CCCCCC",
            help:"#94aba8"
        },
        workspace: {
            background: "#425563",
        },
        container: {
            background: "#617c91",
            border: {
                color: "transparent",//"#94aba8",
                radius: 5,
                style: "solid",
                thickness: 1
            },
            header: {
                fontColor: "white",
            }
        },
        header: {
            background: "#617c91",
            fontColor: "white"
        },
        footer: {
            background: "#617c91",
            fontColor: "white"
        },
        sidebar: {
            background: "#617c91",
            header: {
                background: "#425563",
                fontColor: "rgba(255, 255, 255, 0.7)"
            },
        },
        stoplight: {
            green: "green",
            red: "red",
            yellow: "yellow",
            nodata: "transparent",
            border: "black",
        }
    }
    var Typography = {
        familyName: "Metric",
        genericFamily: "Arial",
    }
    var SVG = {
        edit: "assets/icons/edit.svg",
        refresh: "assets/icons/refresh.svg",
        setting: "assets/icons/setting.svg",
        addmd: "assets/icons/addmd.svg",
        minusmd: "assets/icons/minusmd.svg",
        burger: "assets/icons/burger.svg",
        helpcircle: "assets/icons/helpcircle.svg",
        closecircle: "assets/icons/closecircle.svg",
        noeye: "assets/icons/noeye.svg",
        eye: "assets/icons/eye.svg",
        info: "assets/icons/info.svg",
        gear: "assets/icons/gear.svg",
        laststep: "assets/icons/laststep.svg",
        s1: "assets/icons/s1.svg",
        s2: "assets/icons/s2.svg",
        s3: "assets/icons/s3.svg",
        s4: "assets/icons/s4.svg",
        s5: "assets/icons/s5.svg",
        doneall: "assets/icons/doneall.svg",
        link: "assets/icons/link.svg",
        previous: "assets/icons/previous.svg",
        globe: "assets/icons/globe.svg",
        up: "assets/icons/up.svg",
        down: "assets/icons/down.svg",
        domain: "assets/icons/domain.svg",
        painterChart: "assets/icons/painter-chart-black.svg",
        stoplight: "assets/icons/stoplight.svg",
        stoplight: "assets/icons/stoplight.svg",
        perf: "assets/icons/perf.svg",
        next: "assets/icons/next.svg",
        loader: "assets/icons/loader.svg",
        text: "assets/icons/text.svg",
        grid: "assets/icons/grid.svg",
        software: "assets/icons/software.svg",
        close: "assets/icons/close.svg",
        bottomcorner: "assets/icons/bottomcorner.svg",
        menu: "assets/icons/menu.svg",
        profile: "assets/icons/profile.svg",
        paint: "assets/icons/paint.svg",
        search: "assets/icons/search.svg",
        support: "assets/icons/support.svg",
        contract: "assets/icons/contract.svg",
        dashboard: "assets/icons/dashboard.svg",
        expand: "assets/icons/expand.svg",
        filter: "assets/icons/filter.svg",
        filterFill: "assets/icons/filter-fill.svg",
        help: "assets/icons/help.svg",
        wrench: "assets/icons/wrench.svg",
        home: "assets/icons/home.svg",
        homeFill: "assets/icons/home-fill.svg",
        deploy: "assets/icons/deploy.svg",
        descend: "assets/icons/descend.svg",
        ascend: "assets/icons/ascend.svg",
        download: "assets/icons/download.svg",
        excel: "assets/icons/excel.svg",
        add: "assets/icons/add.svg",
        calendar: "assets/icons/calendar.svg",
        check: "assets/icons/check.svg",
        drag: "assets/icons/drag.svg",
        app: "assets/icons/app.svg",
        save: "assets/icons/save.svg",
        folderopen: "assets/icons/folderopen.svg",
        error: "assets/icons/error.svg",
        checkbox: "assets/icons/checkbox.svg",
        uncheckbox: "assets/icons/uncheckbox.svg",
    }
    var Widget = {
        header: {
            size:25
        }
    }
    var DarkContrast = true;
    this.GetColorTheme = function () { return ColorTheme; }
    this.GetDarkContrast = function () { return DarkContrast; }

    //Getter from DB
    this.GetColorThemeFromDB = function () {
        $.ajax({
            dataType: "json",
            url: "api.php?action=getColorTheme",
            type: "GET",
            async: false,
            success: function (data) {
                ColorTheme = data;
                console.log(data)
            }
        });
        return ColorTheme;
    };

    this.$get = function () {
        return {
            Widget:Widget,
            DarkContrast: DarkContrast,
            ColorTheme: ColorTheme,
            Typography: Typography,
            SVG: SVG
        }
    }

});
aoContentManager.config(function (ConfigurableItemsProvider, $mdThemingProvider, $mdIconProvider) {
    var functional = ConfigurableItemsProvider.GetColorTheme().functional;
    var darkContrast = ConfigurableItemsProvider.GetDarkContrast();

    $mdThemingProvider.definePalette('defaultTheme', {
        '50': functional.secondary,
        '100': functional.secondary,
        '200': functional.secondary,
        '300': functional.secondary,
        '400': functional.secondary,
        '500': functional.secondary,
        '600': functional.secondary,
        '700': functional.secondary,
        '800': functional.secondary,
        '900': functional.secondary,
        'A100': functional.secondary,
        'A200': functional.secondary,
        'A400': functional.secondary,
        'A700': functional.secondary,
        'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
        // on this palette should be dark or light
        'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
         '200', '300', '400', 'A100'],
        'contrastLightColors': undefined    // could also specify this if default was 'dark'
    });
    $mdThemingProvider.definePalette('primaryTheme', {
        '50': functional.primary,
        '100': functional.primary,
        '200': functional.primary,
        '300': functional.primary,
        '400': functional.primary,
        '500': functional.primary,
        '600': functional.primary,
        '700': functional.primary,
        '800': functional.primary,
        '900': functional.primary,
        'A100': functional.primary,
        'A200': functional.primary,
        'A400': functional.primary,
        'A700': functional.primary,
        'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
        // on this palette should be dark or light
        'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
         '200', '300', '400', 'A100'],
        'contrastLightColors': undefined    // could also specify this if default was 'dark'
    });
    $mdThemingProvider.definePalette('warnTheme', {
        '50': functional.danger,
        '100': functional.danger,
        '200': functional.danger,
        '300': functional.danger,
        '400': functional.danger,
        '500': functional.danger,
        '600': functional.danger,
        '700': functional.danger,
        '800': functional.danger,
        '900': functional.danger,
        'A100': functional.danger,
        'A200': functional.danger,
        'A400': functional.danger,
        'A700': functional.danger,
        'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
        // on this palette should be dark or light
        'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
         '200', '300', '400', 'A100'],
        'contrastLightColors': undefined    // could also specify this if default was 'dark'
    });
    if (darkContrast) {
        $mdThemingProvider.theme('default')
            .accentPalette('defaultTheme')
            .primaryPalette('primaryTheme')
            .warnPalette('warnTheme').dark();
    } else {
        $mdThemingProvider.theme('default')
            .accentPalette('defaultTheme')
            .primaryPalette('primaryTheme')
            .warnPalette('warnTheme');
    }
});