<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Painter | HUD+</title>
    <!-- FAVICON -->
    <link rel="apple-touch-icon" sizes="57x57" href="assets/icon/perf.png">
    <link rel="apple-touch-icon" sizes="60x60" href="assets/icon/perf.png">
    <link rel="apple-touch-icon" sizes="72x72" href="assets/icon/perf.png">
    <link rel="apple-touch-icon" sizes="76x76" href="assets/icon/perf.png">
    <link rel="apple-touch-icon" sizes="114x114" href="assets/icon/perf.png">
    <link rel="apple-touch-icon" sizes="120x120" href="assets/icon/perf.png">
    <link rel="apple-touch-icon" sizes="144x144" href="assets/icon/perf.png">
    <link rel="apple-touch-icon" sizes="152x152" href="assets/icon/perf.png">
    <link rel="apple-touch-icon" sizes="180x180" href="assets/icon/perf.png">
    <link rel="icon" type="image/png" sizes="192x192" href="assets/icon/perf.png">
    <link rel="icon" type="image/png" sizes="32x32" href="assets/icon/perf.png">
    <link rel="icon" type="image/png" sizes="96x96" href="assets/icon/perf.png">
    <link rel="icon" type="image/png" sizes="16x16" href="assets/icon/perf.png">
    <link rel="manifest" href="assets/images/favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="assets/icon/perf.png">
    <meta name="theme-color" content="#ffffff">

    <!-- CUSTOM CSS-->
    <link rel="stylesheet" href="assets/css/style.css">

    <!-- Angular Material style sheet -->
    <link rel="stylesheet" href="assets/css/material.css">

    <!-- GLYPHICONS -->
    <link rel="stylesheet" href="assets/css/glyphicon.css">
    <link rel="stylesheet" href="assets/css/font-awesome.min.css">

    <!-- Jquery -->
    <script src="assets/plugins/jquery/jquery-2.2.1.js"></script>
    <script src="assets/plugins/jquery/jquery.min.js"></script>
    <script src="assets/plugins/jquery/jquery-ui.js"></script>

    <!-- Angular Material requires Angular.js Libraries -->
    <script src="assets/js/angular.min.js"></script>
    <script src="assets/js/angular-animate.min.js"></script>
    <script src="assets/js/angular-aria.min.js"></script>
    <script src="assets/js/angular-messages.min.js"></script>

    <!-- Color Picker -->
    <link rel="stylesheet" href="assets/css/md-color-picker.css">
    <script type="text/javascript" src="assets/js/tinycolor.js"></script>
    <script type="text/javascript" src="assets/js/md-color-picker.js"></script>

    <!-- Color Gradient Picker -->
    <!-- Dependency: Colorpicker -->
    <link rel="stylesheet" href="assets/plugins/gradient-picker/color-picker/css/colorpicker.css">
    <script type="text/javascript" src="assets/plugins/gradient-picker/color-picker/js/colorpicker.js"></script>
    <script type="text/javascript" src="assets/plugins/gradient-picker/color-picker/js/eye.js"></script>
    <script type="text/javascript" src="assets/plugins/gradient-picker/color-picker/js/utils.js"></script>
    <!-- Main -->
    <link rel="stylesheet" href="assets/plugins/gradient-picker/jquery.gradientPicker.css">
    <script type="text/javascript" src="assets/plugins/gradient-picker/jquery.gradientPicker.js"></script>

    <!-- Scrollbar -->
    <link rel="stylesheet" href="assets/css/jquery.scrollbar.css">
    <script src="assets/js/jquery.scrollbar.min.js"></script>

    <!-- Angular Material Library -->
    <script src="assets/js/angular-material.min.js"></script>

    <!-- Highcharts JS -->
    <script src="assets/js/highchart-custom.js"></script>
    <script src="assets/plugins/highchart/highcharts-ng.js"></script>

    <!-- LOADASH -->
    <script src="assets/plugins/loadash/loadash.js"></script>

    <!-- Components -->
    <!--<link rel="stylesheet" href="assets/css/style.css">
    <script src="/assets/js/script.js"></script>-->
    <!-- --------------------------------------- Shared Modules --------------------------------------- -->
    <!-- Content Manager / Configs and Providers -->
    <script type="text/javascript" src="angular/Shared/hudContentManager.js"></script>
    <!-- Directives -->
    <script type="text/javascript" src="angular/Shared/hudDirectives.js"></script>
    <!-- Factories -->
    <script type="text/javascript" src="angular/Shared/hudFactory.js"></script>
    <!-- Main Application -->
    <script type="text/javascript" src="angular/main.js"></script>
    <!-- --------------------------------------- Chart Widget Modules --------------------------------------- -->
    <!-- Line Family -->
    <script type="text/javascript" src="angular/Dialogs/Charts/LineFamily/lineFamily.js"></script>
    <!-- Bar Family -->
    <script type="text/javascript" src="angular/Dialogs/Charts/BarFamily/barFamily.js"></script>
    <!-- Pie Family -->
    <script type="text/javascript" src="angular/Dialogs/Charts/PieFamily/pieFamily.js"></script>
    <!-- Multiform Family -->
    <script type="text/javascript" src="angular/Dialogs/Charts/MultiformFamily/multiformFamily.js"></script>
    <script type="text/javascript" src="angular/Dialogs/Charts/MultiformFamily/multiformUpdate.js"></script>
    <!-- Bubble Family -->
    <script type="text/javascript" src="angular/Dialogs/Charts/BubbleFamily/bubbleFamily.js"></script>
    <script type="text/javascript" src="angular/Dialogs/Charts/BubbleFamily/bubbleUpdate.js"></script>
    <!-- --------------------------------------- Chart Widget Modules --------------------------------------- -->
    <!-- Map Family -->
    <script type="text/javascript" src="angular/Dialogs/Maps/mapFamily.js"></script>
    <!-- --------------------------------------- HUD Play Modules --------------------------------------- -->
    <!-- Highcharts Play -->
    <script type="text/javascript" src="angular/Dialogs/HighchartsPlay/highchartsPlay.js"></script>
    <!-- KYLE'S CODE START -->
    <!-- Heatmap -->
    <script type="text/javascript" src="angular/Dialogs/Charts/Heatmap/heatmap.js"></script>
    <script type="text/javascript" src="angular/Dialogs/Charts/Heatmap/heatmapUpdate.js"></script>
    <!-- Text Family -->
    <script type="text/javascript" src="angular/Dialogs/Text/textFamilyUpdate.js"></script>
    <!-- KYLE'S CODE END -->
    <!-- BERV CODE START -->
    <!-- Table Family -->
    <script type="text/javascript" src="angular/Dialogs/Table/tableFamily.js"></script>
    <script type="text/javascript" src="angular/Dialogs/Table/tableUpdate.js"></script>
    <!-- BERV CODE END -->
    <!-- ACEE CODE START -->
    <!-- Summernote Dependencies -->
    <!-- Bootstrap -->
    <link rel="stylesheet" href="assets/plugins/bootstrap/bootstrap.min.css">
    <script src="assets/plugins/bootstrap/bootstrap.min.js"></script>

    <!-- Summernote -->
    <link rel="stylesheet" href="assets/plugins/summernote/summernote.css">
    <script src="assets/plugins/summernote/summernote.min.js"></script>
    <script src="assets/plugins/summernote/angular-summernote.min.js"></script>

    <!-- Text Family -->
    <script type="text/javascript" src="angular/Dialogs/Text/textFamily.js"></script>
    <!-- ACEE CODE END -->
    <!-- --------------------------------------- Dashboard Modules --------------------------------------- -->
    <!-- Highcharts Play -->
    <script type="text/javascript" src="angular/Dialogs/SaveDashboard/saveDashboard.js"></script>

    <!-- GRIDSTACK -->
    <script src="assets/plugins/gridstack/gridstack.min.js"></script>
    <link rel="stylesheet" href="assets/plugins/gridstack/gridstack.min.css">
    <link rel="stylesheet" href="assets/plugins/gridstack/gridstack-extra.min.css">
    <script src="assets/plugins/gridstack/gridstack.angular.js"></script>

</head>
<body ng-app="MainApplication" ng-cloak ng-controller="MainController" layout layout-align="start stretch">
    <!-- Initialize Directive for Configurable Items' CSS -->
    <hud-styles></hud-styles>

    <!-- Sidebar -->
    <md-sidenav ng-class="{
                'hud-sidenav-sm span-height':sideToggle=='collapsed',
                'hud-sidenav-lg span-height':sideToggle=='expanded',
                'hud-sidenav-xl span-height':sideToggle=='painter'
                }"
                md-component-id="left"
                md-is-locked-open="$mdMedia('gt-md')"
                md-whiteframe="5"
                layout="column"
                layout-align="start stretch">
        <div flex layout="column" layout-align="start stretch" class="span-height">
            <!-- Main Sidenav -->
            <div flex ng-if="sideToggle!='painter'" layout="column" layout-align="start stretch">
                <!-- Sidebar Header -->
                <div flex="5" layout layout-align="center stretch">
                    <div flex="20" ng-if="sideToggle=='collapsed'"></div>
                    <div flex layout layout-align="center center" ng-if="sideToggle=='collapsed'">
                        <img src="assets/images/painter-logo.png" height="70%" width="70%" />
                    </div>
                    <div flex layout layout-align="center center" ng-if="sideToggle=='expanded'">
                        <img src="assets/images/HUD_logo_white.png" height="70%" width="70%" />
                    </div>
                    <div flex="50" ng-if="sideToggle=='expanded'" class="hud-painter-title">
                        <span>Painter</span>
                    </div>
                    <div flex="20" ng-if="sideToggle=='collapsed'"></div>
                </div>
                <!-- End of Sidebar Header -->
                <!-- MAIN MENU -->
                <div flex="none" class="hud-submenu" layout="column" layout-align="start stretch" ng-if="sideState=='main'">
                    <div flex="none" class="hud-sidebar-header" ng-if="sideToggle=='expanded'">
                        <span>Widget Tools</span>
                    </div>
                    <md-divider class="no-margin no-padding"></md-divider>
                    <div flex="5" layout layout-align="center center">
                        <md-tooltip md-direction="right" ng-if="sideToggle=='collapsed'" class="hud-menu-tip">
                            Create Chart Widget
                        </md-tooltip>
                        <md-button aria-label="HUD Button" class="hud-menu-button" layout layout-align="start center" ng-click="ChangeSideState('create widget')">
                            <md-icon md-svg-icon="@{{SVG.painterChart}}"></md-icon>
                            <span ng-if="sideToggle=='expanded'" layout layout-align="start center">Create Chart Widget</span>
                            <div flex ng-if="sideToggle=='expanded'"></div>
                        </md-button>
                    </div>
                    <md-divider class="no-margin no-padding"></md-divider>
                    <div flex="5" layout layout-align="center center">
                        <md-tooltip md-direction="right" ng-if="sideToggle=='collapsed'" class="hud-menu-tip">
                            Create Table Widget
                        </md-tooltip>
                        <md-button aria-label="HUD Button" class="hud-menu-button" layout layout-align="start center" ng-click="ToggleCreateModal('table','create',$event)">
                            <md-icon md-svg-icon="@{{SVG.grid}}"></md-icon>
                            <span ng-if="sideToggle=='expanded'" layout layout-align="start center">Create Table Widget</span>
                            <div flex ng-if="sideToggle=='expanded'"></div>
                        </md-button>
                    </div>
                    <md-divider class="no-margin no-padding"></md-divider>
                    <div flex="5" layout layout-align="center center">
                        <md-tooltip md-direction="right" ng-if="sideToggle=='collapsed'" class="hud-menu-tip">
                            Create Text Widget
                        </md-tooltip>
                        <md-button aria-label="HUD Button" class="hud-menu-button" layout layout-align="start center" ng-click="ToggleCreateModal('text','create',$event)">
                            <md-icon md-svg-icon="@{{SVG.text}}"></md-icon>
                            <span ng-if="sideToggle=='expanded'" layout layout-align="start center">Create Text Widget</span>
                            <div flex ng-if="sideToggle=='expanded'"></div>
                        </md-button>
                    </div>
                    <md-divider class="no-margin no-padding"></md-divider>
                    <div flex="5" layout layout-align="center center">
                        <md-tooltip md-direction="right" ng-if="sideToggle=='collapsed'" class="hud-menu-tip">
                            Create Map Widget
                        </md-tooltip>
                        <md-button aria-label="HUD Button" class="hud-menu-button" layout layout-align="start center" ng-click="ToggleCreateModal('map','create',$event)">
                            <md-icon class="hud-stoplight" md-svg-icon="@{{SVG.globe}}"></md-icon>
                            <span ng-if="sideToggle=='expanded'" layout layout-align="start center">Create Map Widget</span>
                            <div flex ng-if="sideToggle=='expanded'"></div>
                        </md-button>
                    </div>
                    <md-divider class="no-margin no-padding"></md-divider>
                    <div flex="none" class="hud-sidebar-header" ng-if="sideToggle=='expanded'">
                        <span>Dashboard Tools</span>
                    </div>
                    <md-divider class="no-margin no-padding"></md-divider>
                    <div flex="5" layout layout-align="center center">
                        <md-tooltip md-direction="right" ng-if="sideToggle=='collapsed'" class="hud-menu-tip">
                            Paint Dashboard
                        </md-tooltip>
                        <md-button aria-label="HUD Button" class="hud-menu-button" layout layout-align="start center" ng-click="ToggleSideBar('painter')">
                            <md-icon md-svg-icon="@{{SVG.paint}}"></md-icon>
                            <span ng-if="sideToggle=='expanded'" layout layout-align="start center">Paint Dashboard</span>
                            <div flex ng-if="sideToggle=='expanded'"></div>
                        </md-button>
                    </div>
                    <md-divider class="no-margin no-padding"></md-divider>
                    <div flex="5" layout layout-align="center center">
                        <md-tooltip md-direction="right" ng-if="sideToggle=='collapsed'" class="hud-menu-tip">
                            Save Dashboard
                        </md-tooltip>
                        <md-button aria-label="HUD Button" class="hud-menu-button" layout layout-align="start center" ng-click="SaveDashboard($event)">
                            <md-icon md-svg-icon="@{{SVG.save}}"></md-icon>
                            <span ng-if="sideToggle=='expanded'" layout layout-align="start center">Save Dashboard</span>
                            <div flex ng-if="sideToggle=='expanded'"></div>
                        </md-button>
                    </div>
                    <md-divider class="no-margin no-padding"></md-divider>
                    <div flex="5" layout layout-align="center center">
                        <md-tooltip md-direction="right" ng-if="sideToggle=='collapsed'" class="hud-menu-tip">
                            Load Dashboard
                        </md-tooltip>
                        <md-button aria-label="HUD Button" class="hud-menu-button" layout layout-align="start center" ng-click="ChangeSideState('load dashboard')">
                            <md-icon md-svg-icon="@{{SVG.folderopen}}"></md-icon>
                            <span ng-if="sideToggle=='expanded'" layout layout-align="start center">Load Dashboard</span>
                            <div flex ng-if="sideToggle=='expanded'"></div>
                        </md-button>
                    </div>
                    <md-divider class="no-margin no-padding"></md-divider>
                    <div flex="none" class="hud-sidebar-header" ng-if="sideToggle=='expanded'">
                        <span>HUD Play</span>
                    </div>
                    <md-divider class="no-margin no-padding"></md-divider>
                    <div flex="5" layout layout-align="center center">
                        <md-tooltip md-direction="right" ng-if="sideToggle=='collapsed'" class="hud-menu-tip">
                            Highcharts Play
                        </md-tooltip>
                        <md-button aria-label="HUD Button" class="hud-menu-button" layout layout-align="start center" ng-click="ToggleCreateModal('highchartsplay','create',$event)">
                            <md-icon md-svg-icon="@{{SVG.deploy}}"></md-icon>
                            <span ng-if="sideToggle=='expanded'" layout layout-align="start center">Highcharts Play</span>
                            <div flex ng-if="sideToggle=='expanded'"></div>
                        </md-button>
                        <md-divider class="no-margin no-padding"></md-divider>
                    </div>
                </div>
                <!-- End of MAIN MENU -->
                <!-- Create Widget -->
                <div flex="none" class="hud-submenu" layout="column" layout-align="start stretch" ng-if="sideState=='create widget'">
                    <div flex="none" class="hud-sidebar-header" ng-if="sideToggle=='expanded'" layout layout-align="start stretch">
                        <span>Widget Creator</span>
                        <span flex></span>
                        <div flex="10">
                            <md-button aria-label="HUD Button" class="md-icon-button" aria-label="More" ng-click="ChangeSideState('main')">
                                <md-icon md-svg-icon="@{{SVG.close}}"></md-icon>
                            </md-button>
                        </div>
                    </div>
                    <md-divider class="no-margin no-padding"></md-divider>
                    <div flex="5" layout layout-align="center center">
                        <md-button aria-label="HUD Button" class="hud-menu-button" layout layout-align="start center" ng-click="ToggleCreateModal('line','create',$event)">
                            <md-icon md-svg-icon="@{{SVG.software}}"></md-icon>
                            <span ng-if="sideToggle=='expanded'" layout layout-align="start center">Line Family</span>
                            <div flex ng-if="sideToggle=='expanded'"></div>
                        </md-button>
                    </div>
                    <md-divider class="no-margin no-padding"></md-divider>
                    <div flex="5" layout layout-align="center center">
                        <md-button aria-label="HUD Button" class="hud-menu-button" layout layout-align="start center" ng-click="ToggleCreateModal('bar','create',$event)">
                            <md-icon md-svg-icon="@{{SVG.software}}"></md-icon>
                            <span ng-if="sideToggle=='expanded'" layout layout-align="start center">Bar Family</span>
                            <div flex ng-if="sideToggle=='expanded'"></div>
                        </md-button>
                    </div>
                    <md-divider class="no-margin no-padding"></md-divider>
                    <div flex="5" layout layout-align="center center">
                        <md-button aria-label="HUD Button" class="hud-menu-button" layout layout-align="start center" ng-click="ToggleCreateModal('multiform','create',$event)">
                            <md-icon md-svg-icon="@{{SVG.software}}"></md-icon>
                            <span ng-if="sideToggle=='expanded'" layout layout-align="start center">Multiform</span>
                            <div flex ng-if="sideToggle=='expanded'"></div>
                        </md-button>
                    </div>
                    <md-divider class="no-margin no-padding"></md-divider>
                    <div flex="5" layout layout-align="center center">
                        <md-button aria-label="HUD Button" class="hud-menu-button" layout layout-align="start center" ng-click="ToggleCreateModal('bubble','create',$event)">
                            <md-icon md-svg-icon="@{{SVG.software}}"></md-icon>
                            <span ng-if="sideToggle=='expanded'" layout layout-align="start center">Bubble Family</span>
                            <div flex ng-if="sideToggle=='expanded'"></div>
                        </md-button>
                    </div>
                    <!-- KYLE'S CODE START -->
                    <md-divider class="no-margin no-padding"></md-divider>
                    <div flex="5" layout layout-align="center center">
                        <md-button aria-label="HUD Button" class="hud-menu-button" layout layout-align="start center" ng-click="ToggleCreateModal('heatmap','create',$event)">
                            <md-icon md-svg-icon="@{{SVG.software}}"></md-icon>
                            <span ng-if="sideToggle=='expanded'" layout layout-align="start center">Heatmap</span>
                            <div flex ng-if="sideToggle=='expanded'"></div>
                        </md-button>
                    </div>
                    <!-- KYLE'S CODE END -->
                    <!-- Arvin'S CODE START -->
                    <md-divider class="no-margin no-padding"></md-divider>
                    <div flex="5" layout layout-align="center center">
                        <md-button aria-label="HUD Button" class="hud-menu-button" layout layout-align="start center" ng-click="ToggleCreateModal('pie','create',$event)">
                            <md-icon md-svg-icon="@{{SVG.software}}"></md-icon>
                            <span ng-if="sideToggle=='expanded'" layout layout-align="start center">Pie Family</span>
                            <div flex ng-if="sideToggle=='expanded'"></div>
                        </md-button>
                    </div>
                    <!-- Arvin'S CODE END -->
                </div>
                <!-- End of Create Widget -->
                <!-- Load Dashboard -->
                <div flex class="hud-submenu" layout="column" layout-align="start stretch" ng-if="sideState=='load dashboard'">
                    <div flex="none" class="hud-sidebar-header" ng-if="sideToggle=='expanded'" layout layout-align="start stretch">
                        <span>Saved Dashboards</span>
                        <span flex></span>
                        <div flex="10">
                            <md-button aria-label="HUD Button" class="md-icon-button" aria-label="More" ng-click="ChangeSideState('main')">
                                <md-icon md-svg-icon="@{{SVG.close}}"></md-icon>
                            </md-button>
                        </div>
                    </div>
                    <md-divider class="no-margin no-padding"></md-divider>
                    <div flex="100" layout="column" layout-align="start stretch" class="scrollbar-macosx" data-jquery-scrollbar>
                        <md-button aria-label="HUD Button" class=" hud-menu-button" layout layout-align="start center" ng-click="LoadDashboard()" ng-repeat="i in [0,1,2,3,4,5,6,7,8,9,10,11,12,]">
                            <md-icon md-svg-icon="@{{SVG.perf}}"></md-icon>
                            <span ng-if="sideToggle=='expanded'" layout layout-align="start center">Dashboard @{{i}}</span>
                            <div flex ng-if="sideToggle=='expanded'"></div>
                        </md-button>
                    </div>
                    <md-divider class="no-margin no-padding"></md-divider>
                </div>
                <!-- End of Load Dashboard -->
                <!-- HPE LOGO -->
                <div flex ng-if="sideState=='main' || sideState=='create widget'"></div>
                <md-divider class="no-margin no-padding"></md-divider>
                <div flex="5" class="hud-sidebar-header" ng-if="sideToggle=='expanded'" layout layout-align="start stretch">
                    <div flex class="hpe-logo-image" style="background-image: url('assets/images/hpe_logo_white_green.png')"></div>
                </div>
            </div>

            <!-- Painter Sidenav -->
            <div flex ng-if="sideToggle=='painter'" layout="column" layout-align="start stretch">
                <div flex="5" layout="" layout-align="center stretch">
                    <div flex="85" layout layout-align="center center">
                        <span>Dashboard Painter</span>
                    </div>
                    <md-button flex class="md-icon-button" ng-click="ResetThemes()">
                        <md-icon md-svg-icon="@{{SVG.refresh}}"></md-icon>
                    </md-button>
                </div>
                <md-divider class="no-margin no-padding"></md-divider>
                <!--PRESET THEME-->
                <div flex="none" hud-setter height="7px" layout="column" layout-align="center stretch">
                    <md-input-container>
                        <label>Preset Themes</label>
                        <md-select ng-model="">
                          <md-option value="">
                              Default
                          </md-option>
                          <md-option value="">
                              Option 1
                          </md-option>
                          <md-option value="">
                              Option 2
                          </md-option>
                        </md-select>
                    </md-input-container>
                </div>
                <div flex layout="row" layout-align="center stretch span-width" class="scrollbar-macosx" data-jquery-scrollbar>
                    <div flex layout="row" layout-align="start stretch">
                        <div flex layout="column" layout-align="start stretch">
                            <div flex="none" layout layout-align="center center" class="hud-sidebar-header" layout-padding><span>Widget</span></div>
                            <br>
                            <div md-color-picker
                                 ng-model="ColorTheme.container.background"
                                 label="Container Color"
                                 icon=""
                                 default="#f00"
                                 md-color-generic-palette="false"
                                 md-color-history="false"></div>
                            <div md-color-picker
                                 ng-model="ColorTheme.container.border.color"
                                 label="Border Color"
                                 icon=""
                                 default="#f00"
                                 md-color-generic-palette="false"
                                 md-color-history="false"></div>
                            <div flex="none">
                                <md-input-container class="md-block" flex-gt-sm>
                                    <label>Border Style</label>
                                    <md-select ng-model="ColorTheme.container.border.style">
                                        <md-option ng-repeat="o in ::borderStyles track by $index" value="@{{::o}}">
                                            @{{::o}}
                                        </md-option>
                                    </md-select>
                                </md-input-container>
                            </div>
                            <div flex="none" layout layout-align="center stretch">
                                <div flex>
                                    <md-input-container>
                                        <label>Border Thickness</label>
                                        <input ng-model="ColorTheme.container.border.thickness" type="number">
                                    </md-input-container>
                                </div>
                                <div flex>
                                    <md-input-container>
                                        <label>Border Radius</label>
                                        <input ng-model="ColorTheme.container.border.radius" type="number">
                                    </md-input-container>
                                </div>
                            </div>
                            <div flex="none" layout layout-align="center center" class="hud-sidebar-header" layout-padding><span>Header</span></div>
                            <div md-color-picker
                                 ng-model="ColorTheme.header.background"
                                 label="Background Color"
                                 icon=""
                                 default="#617c91"
                                 md-color-generic-palette="false"
                                 md-color-history="false"></div>
                            <div md-color-picker
                                 ng-model="ColorTheme.header.fontColor"
                                 label="Font Color"
                                 icon=""
                                 default="#white"
                                 md-color-generic-palette="false"
                                 md-color-history="false"></div>
                            <div flex="none" layout layout-align="center center" class="hud-sidebar-header" layout-padding><span>Footer</span></div>
                            <br>
                            <div md-color-picker
                                 ng-model="ColorTheme.footer.background"
                                 label="Background Color"
                                 icon=""
                                 default="#617c91"
                                 md-color-generic-palette="false"
                                 md-color-history="false"></div>
                            <div md-color-picker
                                 ng-model="ColorTheme.footer.fontColor"
                                 label="Font Color"
                                 icon=""
                                 default="#white"
                                 md-color-generic-palette="false"
                                 md-color-history="false"></div>
                        </div>
                        <md-divider class="no-margin no-padding"></md-divider>
                        <div flex layout="column" layout-align="start stretch">
                            <div flex="none" layout layout-align="center center" class="hud-sidebar-header" layout-padding><span>Dashboard</span></div>
                            <br>
                            <div md-color-picker
                                 ng-model="ColorTheme.workspace.background"
                                 label="Workspace Color"
                                 icon=""
                                 default="#425563"
                                 md-color-generic-palette="false"
                                 md-color-history="false">
                            </div>
                            <div md-color-picker
                                 ng-model="ColorTheme.functional.primary"
                                 label="Primary"
                                 icon=""
                                 default="#425563"
                                 md-color-generic-palette="false"
                                 md-color-history="false">
                            </div>
                            <div md-color-picker
                                 ng-model="ColorTheme.functional.secondary"
                                 label="Secondary"
                                 icon=""
                                 default="#614767"
                                 md-color-generic-palette="false"
                                 md-color-history="false">
                            </div>
                            <div md-color-picker
                                 ng-model="ColorTheme.functional.danger"
                                 label="Danger"
                                 icon=""
                                 default="#f04953"
                                 md-color-generic-palette="false"
                                 md-color-history="false">
                            </div>
                            <div md-color-picker
                                 ng-model="ColorTheme.functional.warning"
                                 label="Warning"
                                 icon=""
                                 default="#ffd144"
                                 md-color-generic-palette="false"
                                 md-color-history="false">
                            </div>
                            <div md-color-picker
                                 ng-model="ColorTheme.functional.help"
                                 label="Help"
                                 icon=""
                                 default="#94aba8"
                                 md-color-generic-palette="false"
                                 md-color-history="false">
                            </div>
                            <div flex="none" layout layout-align="center center" class="hud-sidebar-header" layout-padding><span>Sidebar</span></div>
                            <br>
                            <div md-color-picker
                                 ng-model="ColorTheme.sidebar.background"
                                 label="Background Color"
                                 icon=""
                                 default="#617c91"
                                 md-color-generic-palette="false"
                                 md-color-history="false">
                            </div>
                            <div flex layout layout-align="center stretch">
                                <div flex>
                                    <div md-color-picker
                                         ng-model="ColorTheme.sidebar.header.background"
                                         label="Header Background"
                                         icon=""
                                         default="#425563"
                                         md-color-generic-palette="false"
                                         md-color-history="false">
                                    </div>
                                </div>
                                <div flex>
                                    <div md-color-picker
                                         ng-model="ColorTheme.sidebar.header.fontColor"
                                         label="Font Color"
                                         icon=""
                                         default="rgba(255, 255, 255, 0.7)"
                                         md-color-generic-palette="false"
                                         md-color-history="false">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </md-sidenav>

    <!-- Main Content -->
    <div flex layout="column" layout-align="center stretch">
        <div flex="none" style="height:5%" class="hud-header-container" md-whiteframe="5" layout layout-align="start stretch">
            <div flex="5" layout layout-align="center center" ng-if="sideToggle=='expanded'">
                <md-button aria-label="HUD Button" class="md-icon-button" aria-label="More" ng-click="ToggleSideBar('collapsed')">
                    <md-icon md-svg-icon="@{{SVG.app}}"></md-icon>
                </md-button>
            </div>
            <div flex="5" layout layout-align="center center" ng-if="sideToggle=='collapsed'">
                <md-button aria-label="HUD Button" class="md-icon-button" aria-label="More" ng-click="ToggleSideBar('expanded')">
                    <md-icon md-svg-icon="@{{SVG.app}}"></md-icon>
                </md-button>
            </div>
            <div flex="5" layout layout-align="center center" ng-if="sideToggle=='painter'">
                <md-button aria-label="HUD Button" class="md-icon-button" aria-label="More" ng-click="ToggleSideBar('expanded')">
                    <md-icon md-svg-icon="@{{SVG.close}}"></md-icon>
                </md-button>
            </div>
            <!--<div flex="5" layout layout-align="center center" ng-if="sideToggle!='painter'">
                <md-button aria-label="HUD Button" class="md-icon-button" aria-label="More" ng-click="ToggleSideBar('painter')">
                    <md-icon md-svg-icon="@{{SVG.paint}}"></md-icon>
                </md-button>
            </div>-->
            <div flex></div>
            <div flex="5" layout layout-align="center center">
                <md-button aria-label="HUD Button" ng-if="GlobalWidgetArray.length==0" class="md-icon-button" aria-label="More" ng-click="showComponent = !showComponent">
                    <md-icon md-svg-icon="@{{SVG.help}}"></md-icon>
                </md-button>
            </div>
        </div>
        <div flex style="height: 95%;" class="scrollbar-macosx span-height" data-jquery-scrollbar layout layout-align="start stretch" layout-padding>

            <!--trixias start-->

            <div flex layout="row" layout-align="center" id="empty-dashboard" ng-if="GlobalWidgetArray.length==0">
                <div flex></div>
                <div style="position:absolute;top:40%;z-index:0;" class="dashbox" layout="column" layout-align="center center">

                    <img src="assets/images/widget_icon.png">
                    <h2 class="dashboard-text-emphasis">Your dashboard is empty</h2>
                    <div class="dashboard-text subtle">You haven't added any widgets to your dashboard</div>
                    <div class="dashboard-text subtle">Click on the dashboard menu to get started</div>

                </div>
                <div class="component-wrapper graceful-leave" ng-if="showComponent">

                    <ul class="tabs">
                        <li class="labels">
                            <label for="tab1" id="label1" class="tab-btn active-tab">Getting Started</label>
                            <label for="tab2" id="label2" class="tab-btn">Guide</label>
                            <label for="tab3" id="label3" class="tab-btn">FAQs</label>
                        </li>
                        <li>
                            <input type="radio" checked name="tabs" id="tab1">
                            <div id="tab-content1" class="tab-content">
                                <!-- Your Content Here -->
                                <!--table of contents-->
                                <div class="component-wrapper-title">
                                    <div id="nav-wrap">
                                        <div id="scroller-anchor"></div>
                                        <div id="nav">
                                            <h3>Getting Started </h3>
                                            <ul class="clearfix">
                                                <a class="nav-btn active" href="#gs-01"><li class="nav-list active">Overview</li></a>
                                                <a class="nav-btn" href="#gs-02"><li class="nav-list">Features</li></a>
                                                <a class="nav-btn" href="#gs-03"><li class="nav-list">Users</li></a>
                                                <div id="nav-indicator"></div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <!--contents-->
                                <div class="component-wrapper-content scrollbar-macosx" data-jquery-scrollbar>

                                    <div id="content-wrap">
                                        <div class="nav-content" id="gs-01">
                                            <h2>Overview</h2>
                                            <md-divider class="no-margin no-padding"></md-divider>
                                            <br>

                                            HUD Painter is a tool that allows various types of data visualization and presentation

                                        </div>
                                        <div class="nav-content" id="gs-02">
                                            <h2>Features</h2>
                                            <md-divider class="no-margin no-padding"></md-divider>
                                            <br>
                                            Custom Data Visualization
                                            Automated Data Update
                                            Save and Load your Dashboards

                                        </div>
                                        <div class="nav-content" id="gs-03">
                                            <h2>Users</h2>
                                            <md-divider class="no-margin no-padding"></md-divider>
                                            <br>

                                            users? who?

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </li>
                        <li>
                            <input type="radio" name="tabs" id="tab2">
                            <div id="tab-content2" class="tab-content">
                                <!-- Your Content Here -->
                                <!--table of contents-->
                                <div class="component-wrapper-title">
                                    <div id="nav-wrap">
                                        <div id="scroller-anchor"></div>
                                        <div id="nav">
                                            <h3>Guide</h3>
                                            <ul class="clearfix">
                                                <a class="nav-btn active" href="#gd-01"><li class="nav-list active">Tools</li></a>
                                                <a class="nav-btn" href="#gd-02"><li class="nav-list">Create Widget</li></a>
                                                <a class="nav-btn" href="#gd-03"><li class="nav-list">Organize Dashboard</li></a>
                                                <!--<a class="nav-btn" href="#gd-04"><li class="nav-list">HUD Play</li></a>-->
                                                <div id="nav-indicator"></div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <!--contents-->
                                <div class="component-wrapper-content scrollbar-macosx" data-jquery-scrollbar layout="row" flex layout-align="center center">
                                    Soon.
                                </div>
                            </div>
                        </li>
                        <li>
                            <input type="radio" name="tabs" id="tab3">
                            <div id="tab-content3" class="tab-content">
                                <!-- Your Content Here -->
                                <!--table of contents-->
                                <div class="component-wrapper-title">
                                    <div id="nav-wrap">
                                        <div id="scroller-anchor"></div>
                                        <div id="nav">
                                            <h3>FAQs</h3>
                                            <ul class="clearfix">
                                                <a class="nav-btn active" href="#fq-01"><li class="nav-list active">General</li></a>
                                                <a class="nav-btn" href="#fq-02"><li class="nav-list">Dashboard</li></a>
                                                <a class="nav-btn" href="#fq-03"><li class="nav-list">Widgets</li></a>
                                                <a class="nav-btn" href="#fq-04"><li class="nav-list">Account</li></a>
                                                <a class="nav-btn" href="#fq-05"><li class="nav-list">Contact Us</li></a>
                                                <div id="nav-indicator"></div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <!--contents-->
                                <div class="component-wrapper-content scrollbar-macosx" data-jquery-scrollbar>

                                    <div id="content-wrap">
                                        <div class="nav-content" id="fq-01">
                                            <h2>General</h2>
                                            Some answers to questions we think you might have..
                                            <md-divider class="no-margin no-padding"></md-divider>
                                            <br>
                                            <div class="dl">
                                                <div class="dt" ng-click="q1 = !q1">How to create a widget?</div>
                                                <div class="dd graceful-leave" ng-show="!q1">

                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam incidunt itaque mollitia eligendi, doloribus commodi a culpa ratione aspernatur!</p>

                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae rerum molestiae laboriosam nobis odit.</p>

                                                </div>

                                                <div class="dt" ng-click="q2 = !q2">How to modify a widget?</div>
                                                <div class="dd graceful-leave" ng-show="q2">

                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam incidunt itaque mollitia eligendi, doloribus commodi a culpa ratione aspernatur!</p>

                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae rerum molestiae laboriosam nobis odit.</p>

                                                </div>

                                                <div class="dt" ng-click="q3 = !q3">How to load existing dashboard?</div>
                                                <div class="dd graceful-leave" ng-show="q3">

                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam incidunt itaque mollitia eligendi, doloribus commodi a culpa ratione aspernatur!</p>

                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae rerum molestiae laboriosam nobis odit.</p>

                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>

            <!-- trixias end-->

            <div flex class="span-width" style="width:100% !important;" id="pt-packery" ng-if="GlobalWidgetArray.length!=0">
                <div gridstack class="grid-stack grid1" options="options"
                     on-change="onChange(event,items)"
                     on-drag-start="onDragStart(event,ui)"
                     on-drag-stop="onDragStop(event,ui)"
                     on-resize-start="onResizeStart(event,ui)"
                     on-resize-stop="onResizeStop(event, ui)"
                     options="gridstackOptions">
                    <div gridstack-item ng-repeat="w in GlobalWidgetArray"
                         class="grid-stack-item"
                         gs-item-x="w.modalData.widgetInfo.x"
                         gs-item-y="w.modalData.widgetInfo.y"
                         gs-item-width="w.modalData.widgetInfo.width"
                         gs-item-height="w.modalData.widgetInfo.height"
                         gs-item-autopos="1"
                         on-item-added="onItemAdded(item)"
                         on-item-removed="onItemRemoved(item)">
                        <!--on-item-resize="onItemResize(item)">-->
                        <!-- CHART WIDGET START -->
                        <div ng-if="w.type=='chart'" class="grid-stack-item-content graceful-leave" layout="column" layout-align="center stretch">
                            <div flex="none" ng-class="{
                                 'widget-header':w.rawData.widgetInfo.header,
                                 'widget-header-no':!w.rawData.widgetInfo.header
                                 }" layout layout-align="center stretch">
                                <span flex class="widget-title" ng-if="w.rawData.widgetInfo.header">@{{w.rawData.widgetInfo.name}}</span>
                                <div flex layout layout-align="center center">
                                    <!--<span class="subtle" ng-if="!w.active">
                                        LOST CONNECTION
                                    </span>-->
                                </div>
                                <div flex="5">
                                    <md-button ng-click="UpdateWidget(w,$event)" class="md-icon-button hud-tool-button"><md-icon hud-setter height-in-percent="50" width-in-percent="50" md-svg-src="@{{SVG.edit}}"></md-icon></md-button>
                                </div>
                                <div flex="5">
                                    <md-button ng-click="RefreshWidget(w)" class="md-icon-button hud-tool-button"><md-icon hud-setter height-in-percent="50" width-in-percent="50" md-svg-src="@{{SVG.refresh}}"></md-icon></md-button>
                                </div>
                                <div flex="5">
                                    <md-button ng-click="RemoveWidget(w)" class="md-icon-button hud-tool-button"><md-icon hud-setter height-in-percent="50" width-in-percent="50" md-svg-src="@{{SVG.close}}"></md-icon></md-button>
                                </div>
                            </div>
                            <div flex="5" class="alert" layout layout-align="center center" ng-if="!w.active">
                                <span>LOST CONNECTION</span>
                            </div>
                            <div flex class="widget-body" layout layout-align="center stretch">
                                <div flex id="@{{w.id}}" class="span-width"></div>
                                <hud-highchart graph-data="w.chartData"></hud-highchart>
                                <!--<pre flex ng-bind="w|json"></pre>-->
                            </div>
                        </div><!-- CHART WIDGET END -->
                        <!--TABLE WIDGET START-->
                        <div ng-if="w.type=='table'" class="grid-stack-item-content graceful-leave" layout="column" layout-align="center stretch">
                            <div flex="none" ng-class="{
                                 'widget-header':w.rawData.widgetInfo.header,
                                 'widget-header-no':!w.rawData.widgetInfo.header
                                 }" layout layout-align="center stretch">
                                <span flex class="widget-title" ng-if="w.rawData.widgetInfo.header">@{{w.rawData.widgetInfo.name}}</span>
                                <div flex layout layout-align="center center">
                                    <!--<span class="subtle" ng-if="!w.active">
                                        LOST CONNECTION
                                    </span>-->
                                </div>
                                <div flex="5">
                                    <md-button ng-click="UpdateWidget(w,$event)" class="md-icon-button hud-tool-button"><md-icon hud-setter height-in-percent="50" width-in-percent="50" md-svg-src="@{{SVG.edit}}"></md-icon></md-button>
                                </div>
                                <div flex="5">
                                    <md-button ng-click="RefreshWidget(w)" class="md-icon-button hud-tool-button"><md-icon hud-setter height-in-percent="50" width-in-percent="50" md-svg-src="@{{SVG.refresh}}"></md-icon></md-button>
                                </div>
                                <div flex="5">
                                    <md-button ng-click="RemoveWidget(w)" class="md-icon-button hud-tool-button"><md-icon hud-setter height-in-percent="50" width-in-percent="50" md-svg-src="@{{SVG.close}}"></md-icon></md-button>
                                </div>
                            </div>
                            <div flex="5" class="alert" layout layout-align="center center" ng-if="!w.active">
                                <span>LOST CONNECTION</span>
                            </div>
                            <div flex class="scrollbar-macosx span-height" data-jquery-scrollbar>
                                <table flex ng-if="w.modalData.tabularInfo.stoplightInfo.columns.length == 0">
                                    <thead>
                                        <tr>
                                            <th class="padding" align="center" ng-repeat="o in w.modalData.tabularInfo.columns">
                                                <span>@{{o}}</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr ng-repeat="o in w.modalData.tabularInfo.rows">
                                            <td class="padding" align="center" ng-repeat="key in w.modalData.tabularInfo.columns">@{{w.rawData[o][key]}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table flex ng-if="w.modalData.tabularInfo.stoplightInfo.columns.length > 0">
                                    <thead>
                                        <tr>
                                            <th class="padding" align="center" ng-repeat="o in w.modalData.tabularInfo.columns">
                                                <md-tooltip class="hud-menu-tip-sm" md-direction=" top">@{{o}}</md-tooltip>
                                                <span>@{{o}}</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr ng-repeat="o in w.modalData.tabularInfo.rows">
                                            <td class="padding" align="center" ng-repeat="key in w.modalData.tabularInfo.columns">
                                                <span ng-if="(GetStoplightIndexOf(key,w.modalData.tabularInfo.stoplightInfo) == -1)">
                                                    @{{w.rawData[o][key]}}
                                                </span>
                                                <span ng-if="(GetStoplightIndexOf(key,w.modalData.tabularInfo.stoplightInfo) > -1)">
                                                    <i class="fa fa-circle" ng-style="CheckStoplight(o[key], GetStoplightIndexOf(key,w.modalData.tabularInfo.stoplightInfo), w.modalData.tabularInfo.stoplightInfo)" style="color: @{{w.modalData.tabularInfo.stoplightInfo.default[key]}}"></i>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div><!--TABLE WIDGET END-->
                        <!--TEXT WIDGET START-->
                        <div ng-if="w.type=='text'" class="grid-stack-item-content graceful-leave" layout="column" layout-align="center stretch">
                            <div flex="none" ng-class="{
                                 'widget-header':w.rawData.widgetInfo.header,
                                 'widget-header-no':!w.rawData.widgetInfo.header
                                 }" layout layout-align="center stretch">
                                <span flex class="widget-title" ng-if="w.rawData.widgetInfo.header">@{{w.rawData.widgetInfo.name}}</span>
                                <div flex layout layout-align="center center">
                                    <!--<span class="subtle" ng-if="!w.active">
                                        LOST CONNECTION
                                    </span>-->
                                </div>
                                <div flex="5">
                                    <md-button ng-click="UpdateWidget(w,$event)" class="md-icon-button hud-tool-button"><md-icon hud-setter height-in-percent="50" width-in-percent="50" md-svg-src="@{{SVG.edit}}"></md-icon></md-button>
                                </div>
                                <div flex="5">
                                    <md-button ng-click="RefreshWidget(w)" class="md-icon-button hud-tool-button"><md-icon hud-setter height-in-percent="50" width-in-percent="50" md-svg-src="@{{SVG.refresh}}"></md-icon></md-button>
                                </div>
                                <div flex="5">
                                    <md-button ng-click="RemoveWidget(w)" class="md-icon-button hud-tool-button"><md-icon hud-setter height-in-percent="50" width-in-percent="50" md-svg-src="@{{SVG.close}}"></md-icon></md-button>
                                </div>
                            </div>
                            <div flex="5" class="alert" layout layout-align="center center" ng-if="!w.active">
                                <span>LOST CONNECTION</span>
                            </div>
                            <div flex class="widget-body" layout layout-align="center stretch">
                                <div flex id="@{{w.id}}" class="span-width"></div>
                            </div>
                        </div><!--TEXT WIDGET END-->


                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="assets/js/script.js"></script>
</body>
</html>

<!--

    <div class="pt-widget-container" id="pt-widget-1"><div class="pt-widget-header"><span>Widget Title</span></div><div class="pt-widget-body"></div></div>

     -->
<!--

            <div flex="5" layout-align="center center" layout ng-if="sideToggle!='large'">
            <div flex layout layout-align="center center">

            </div>
        </div>
        <div flex="5" layout layout-align="center center" class="hud-sidebar-header" class="test-v">
            <span>Head 1</span>
        </div>
        <div flex="10" layout layout-align="center stretch">
            <div flex layout layout-align="center center">
                <md-button aria-label="HUD Button" class="md-icon-button" aria-label="More" ng-if="sideToggle!='large'" ng-click="ToggleSideBar('large')">
                    <md-icon md-svg-icon="@{{SVG.paint}}"></md-icon>
                </md-button aria-label="HUD Button">
                <md-button aria-label="HUD Button" class="md-icon-button" aria-label="More" ng-if="sideToggle=='large'" ng-click="ToggleSideBar('medium')">
                    <md-icon md-svg-icon="@{{SVG.add}}" class="hud-svg-remove"></md-icon>
                </md-button aria-label="HUD Button">
            </div>
            <div flex="75" layout layout-align="start center" ng-if="sideToggle=='medium'">
                <span flex>@{{sideToggle}}</span>
            </div>
        </div>

     -->
