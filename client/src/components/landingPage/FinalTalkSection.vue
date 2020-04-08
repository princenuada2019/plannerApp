<template>
    <v-container>
        <v-row class="text-container-row" justify="center">
            <v-col class="column" cols="10" sm="8">
                <h1>با ما به هدفت میرسی</h1>
                <p>با توجه به توضیحات بالا رسالت ما ارائه ابزار کاملی برای رسیدن به خواسته ها و اهدافتونه. توی سیستم ما میتونید برای رسیدن به اهدافتون برنامه ریزی کنید، منظم انجامشون بدین و میزان پیشرفتتون رو اندازه گیری کنین. در ادامه رسالتمون آموزش های رایگان برنامه ریزی صحیح و سیستم پیشنهاد دهی برای هر چه شادتر و سرزنده تر زندگی کردن رو ارائه میدیم و به زودی در اختیارتون قرار میگیره. امیدواریم توی مسیر رسیدن به اهدافتون بتونیم بازی از دوشتون
 برداشته باشیم. از همین الان میتونی حساب جدیدتو بسازی و مسیر رسیدن به زندگی بهتر و شادتر رو شروع کنی.</p>
                <v-btn to="/signup" rounded color="primary" class="begin-button">همین حالا شروع کن</v-btn>
            </v-col>
        </v-row>
        <v-row class="image-container-row" justify="center">
            <v-col sm="10">
                <img src="~@/assets/images/final-talks-section-big-image.png" alt="">
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped lang="scss">
    .text-container-row {
        .column {
            display: flex;
            flex-direction: column;
            align-items: center;
            h1,p {
                text-align: center;
                margin-bottom: 15px;
            }
            button {
                margin-bottom: 35px;
            }
        }
    }
    .image-container-row {
        img {
            width: 100%;
        }
    }
</style>
