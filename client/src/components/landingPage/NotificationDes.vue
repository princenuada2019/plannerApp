<template>
    <v-container>
        <v-row class="notification-section-row">
            <v-col lg="4" md="4" sm="12" align-self="center">
                <div class="text-container">
                    <h1>
                        سیستم اعلان
                    </h1>
                    <p>بعضی وقت ها هم برنامه ریزی میکنیم برای رسیدن به هدفی ولی تا به خودمون میایم دیگه دیر شده و وقت گذشته. برنامه میریزیم از ساعت 10 صبح درس بخونیم ولی ساعت 12 به خودمون میایم میبینیم داریم توی استوری های اینستاگرام الکی و بی هدف میچرخیم و دیگه برای درس خوندن دیر شده. ما برای هر برنامه ای که خودت بخوای بهت یادآوری میکنیم تا کاری که برات ارزشمند و مفیده رو فراموش نکنی و
 حتما انجامش بدی.</p>
                </div>
            </v-col>
            <v-col lg="1" md="1" class="hidden-sm-and-down"></v-col>
            <v-col lg="7" md="7" sm="12">
                <div class="notification-section-image">
                    <img src="~@/assets/images/notification-section-big-image.png" alt="">
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped lang="scss">
    .text-container {
        display: flex;
        flex-direction: column;
        text-align: justify;
        h1 {
            margin-bottom: 15px;
        }
        .begin-button {
            align-self: flex-end;
        }
    }
    .notification-section-image {
        img {
            width: 100%;
        }
    }

    @media (max-width: 959px) {
        .notification-section-row {
            flex-direction: column-reverse;
        }
        .text-container {
            width: 80%;
            margin: 0 auto;
        }
        .notification-section-image {
            img {
                width: 70%;
                display: block;
                margin: 0 auto;
            }
        }
    }
</style>
