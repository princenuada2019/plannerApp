<template>
    <v-container>
        <v-row class="planning-section-row">
            <v-col lg="7" md="7" sm="12">
                <div class="planning-section-image">
                    <img src="~@/assets/images/planning-section-big-image.png" alt="">
                </div>
            </v-col>
            <v-col lg="1" md="1" class="hidden-sm-and-down"></v-col>
            <v-col lg="4" md="4" sm="12" align-self="center">
                <div class="text-container">
                    <h1>
                        سیستم برنامه ریزی
                    </h1>
                    <p>یکی از دلایل اصلی محقق نشدن اهداف، نداشتن برنامه ریزیه. یک روز 10 ساعت برای انجام کاری و رسیدن به هدفی تلاش میکنیم ولی بعد یه هفته ولش میکنیم و دیگه نمیریم سراغش و آخر هم فراموش میشه و ازش نا امید میشیم. توی سیستم ما برای انجام هر کاری بصورت روزانه، هفتگی و ماهانه برنامه ریزی کنید. برای هر برنامه تون میتونید توضیحات، تصاویر و بازه زمانی انجامش رو مشخص کنید و بهش اولویت مناسب خودش رو بدید. توی سیستم ما برای زندگی
 رو به رشد، شاد و موفقیت های بلند مدت برنامه ریزی کنید.</p>
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
    .planning-section-image {
        img {
            width: 100%;
        }
    }

    @media (max-width: 959px) {
        .planning-section-row {
            flex-direction: column;
        }
        .text-container {
            width: 80%;
            margin: 0 auto;
        }
        .planning-section-image {
            img {
                width: 70%;
                display: block;
                margin: 0 auto;
            }
        }
    }
</style>
