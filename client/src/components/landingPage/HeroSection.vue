<template>
    <v-container>
        <v-row class="hero-section-row">
            <v-col lg="4" md="4" sm="12" align-self="center">
                <div class="text-container">
                    <h1 class="big">
                        من میخوام انجامش بدم!
                    </h1>
                    <h1>سرویس آنلاین برنامه ریزی روزانه</h1>
                    <p>دیگه هیچ کاری رو فراموش نمی کنی، به اولویت هات می رسی، پروژه های شخصی تو با برنامه جلو می بری، هر وقت بخوای می تونی پیشرفت و موفقیتتو اندازه گیری کنی و کلی شاد تر زندگی میکنی.</p>
                    <v-btn to="/signup" rounded color="primary" class="begin-button">همین حالا شروع کن</v-btn>
                </div>
            </v-col>
            <v-col lg="1" md="1" class="hidden-sm-and-down"></v-col>
            <v-col lg="7" md="7" sm="12">
                <div class="hero-section-image">
                    <img class="hero-section-img" src="~@/assets/images/hero-section-v2.png" alt="">
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped lang="scss">
    .text-container {
        display: flex;
        flex-direction: column;
        h1 {
            margin-bottom: 15px;
        }
        .begin-button {
            align-self: flex-end;
        }
    }
    .hero-section-image {
        img {
            width: 100%;
        }
    }

    @media (max-width: 959px) {
        .hero-section-row {
            flex-direction: column-reverse;
        }
        .text-container {
            width: 80%;
            margin: 0 auto;
            text-align: center;
            .begin-button {
                align-self: center;
            }
        }
        .hero-section-image {
            img {
                width: 70%;
                display: block;
                margin: 0 auto;
            }
        }
    }

    @media (max-width: 600px) {
        .hero-section-image {
            img {
                width: 100%;
            }
        }
    }
</style>
