<template>
        <div class="flex-container">
            <v-sheet class="featuer feather-1">
                <img src="~@/assets/images/feature1.png" alt="feature1">
                <h2>برنامه ریزی روزانه</h2>
            </v-sheet>
            <v-sheet class="featuer feather-1">
                <img src="~@/assets/images/feature2.png" alt="feature1">
                <h2>سیستم اعلان</h2>
            </v-sheet>
            <v-sheet class="featuer feather-1">
                <img src="~@/assets/images/feature3.png" alt="feature1">
                <h2>برنامه پسشنهادی</h2>
            </v-sheet>
            <v-sheet class="featuer feather-1">
                <img src="~@/assets/images/feature4.png" alt="feature1">
                <h2>تحلیل عملکرد</h2>
            </v-sheet>
        </div>
</template>

<style scoped lang="scss">
    .flex-container {
        width: 60%;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        .featuer {
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0px 8px 16px 1px rgba(0,0,0,0.1);
            margin-bottom: 25px;
            img {
                margin-bottom: 10px;
            }
            h2 {
                text-align: center;
            }
        }
    }

    @media (max-width: 960px) {
        .flex-container {
            width: 75%;
            .featuer {
                padding: 10px 5px;
                img {
                    width: 70%;
                    display: block;
                    margin: 0 auto;
                }
            }
        }
    }

    @media (max-width: 370px) {
        .flex-container {
            width: 85%;
            justify-content: center;
            .featuer {
                margin: 10px;
            }
        }
    }
</style>
