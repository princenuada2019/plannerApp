<template>
    <v-container>
        <v-row class="analyze-section-row">
            <v-col lg="7" md="7" sm="12">
                <div class="analyze-section-image">
                    <img src="~@/assets/images/analyze-section-big-image.png" alt="">
                </div>
            </v-col>
            <v-col lg="1" md="1" class="hidden-sm-and-down"></v-col>
            <v-col lg="4" md="4" sm="12" align-self="center">
                <div class="text-container">
                    <h1>
                        سیستم تحلیل عملکرد
                    </h1>
                    <p>یک ماه شده که داری کاری رو انجام میدی ولی نمیدونی چقدر از راه رو رفتی ؟ فکر میکنی هیچ کاری نکردی و دیگه کم کم داری نا امید میشی و فکر میکنی نمیشه ؟ احساس میکنی کند پیش میری ولی نمیدونی باید چطوری برنامه تو تغییر بدی تا عملکردت بهتر بشه ؟ ما تمام برنامه ریزی که انجام میدی رو برات ذخیره میکنیم و کارایی که موفق شدی انجامشون بدی و کارایی که بهشون نرسیدی هم مشخصه و ذخیره میشه. برای هر روزت هم میتونی جداگانه یادداشت بنویسی و تحلیلت از عملکردتو ذخیره کنی تا بعدا بتونی تحلیل کنی عملکردتو و پیشرفتتو اندازه گیری کنی.<br><br>ولی یک کم دیگه که بگذره یک سیستم کامل تحلیل عملکرد هم در اختیارت میذاریم تا هرطور که دلت میخواد تنظیمش کنی و روزانه یا هفتگی یا ماهانه برای همه برنامه هات از عملکرد و میزان پیشرفتت
 گزارش و تحلیل آماری بهت بده. </p>
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
    .analyze-section-image {
        img {
            width: 100%;
        }
    }

    @media (max-width: 959px) {
        .analyze-section-row {
            flex-direction: column;
        }
        .text-container {
            width: 80%;
            margin: 0 auto;
        }
        .analyze-section-image {
            img {
                width: 70%;
                display: block;
                margin: 0 auto;
            }
        }
    }
</style>
