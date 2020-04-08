<template>
    <v-container>
        <v-row>
            <v-col class="ml-auto" cols="12" sm="4" md="3">
                <h1 class="footer-h1">من میخوام انجامش بدم!</h1>
                <v-divider dark></v-divider>
                <v-list color="transparent" dark>
                    <v-list-item-group>
                        <v-list-item color="primary">
                            <v-list-item-content>
                                <v-list-item-title>
                                    درباره ما
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item color="primary">
                            <v-list-item-content>
                                <v-list-item-title>
                                    تماس با ما
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item color="primary">
                            <v-list-item-content>
                                <v-list-item-title>
                                    همکاری
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item color="primary">
                            <v-list-item-content>
                                <v-list-item-title>
                                    آموزش های رایگان
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        </v-list-item-group>
                </v-list>
            </v-col>
            <v-col cols="12" sm="3" md="2" class="social-container">
                <!-- <v-list color="transparent">
                    <v-list-item-group class="social">
                        <v-list-item>
                            <v-btn fab small>
                                <v-icon color="#324047">mdi-twitter</v-icon>
                            </v-btn>
                        </v-list-item>
                        <v-list-item>
                            <v-btn fab small>
                                <v-icon color="#324047">mdi-instagram</v-icon>
                            </v-btn>
                        </v-list-item>
                        <v-list-item>
                            <v-btn fab small>
                                <v-icon color="#324047">mdi-youtube</v-icon>
                            </v-btn>
                        </v-list-item>
                    </v-list-item-group>
                </v-list> -->
                <ul class="social">
                    <li>
                        <v-btn fab small>
                            <v-icon color="#324047">mdi-twitter</v-icon>
                        </v-btn>
                    </li>
                    <li>
                        <v-btn fab small>
                            <v-icon color="#324047">mdi-instagram</v-icon>
                        </v-btn>
                    </li>
                    <li>
                        <v-btn fab small>
                            <v-icon color="#324047">mdi-youtube</v-icon>
                        </v-btn>
                    </li>
                </ul>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped lang="scss">
    .footer-h1 {
        margin-bottom: 15px;
        color: white !important;
    }
    .social-container {
        direction: ltr;
        .social {
            list-style-type: none;
            padding: 0;
            display: flex;
            justify-content: space-between;
        }
    }

    @media (max-width: 600px) {
        .social-container {
            .social {
                justify-content: center;
                li {
                    margin: 0 10px;
                }
            }
        }
    }
</style>
