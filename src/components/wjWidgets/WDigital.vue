<template>
    <div>
        <v-card elevation="0" v-for="text in data" :key="text.km" class="C">
            <div class="Text-col">
                <h1>{{ text.title }}</h1>
                <div class="description">{{ text.description }}</div>
            </div>
            <div class="Img-col">
                <v-img
                    alt="banner"
                    class="Img"
                    src="../../assets/images/marketing-img.svg"
                />
            </div>
        </v-card>
        <v-container class="my-5">
            <div row wrap class="listTextC">
                <v-flex v-for="text in data" :key="text.name">
                    <div class="listText">{{ text.content[0] }}</div>
                    <div class="listText">{{ text.content[1] }}</div>
                    <div class="listText">{{ text.content[2] }}</div>
                </v-flex>
            </div>
        </v-container>
    </div>
</template>
<script>
import json from '../../assets/data/message.json';

export default {
    data() {
        return {
            data: json.eng.Slogan,
        };
    },
    beforeMount() {},
};
</script>

<style scoped>
.C {
    display: flex;
    align-items: center;
    justify-content: center;
}

h1 {
    margin: 0 0 0 385px;
    font-size: 40px;
}

.Button {
    margin: 15px 0 0 400px;
}
.description {
    margin: 0 0 0 385px;
}
.Img {
    margin-left: 100px;
    background-color: aquamarine;
    width: 600px;
    background-color: #fff7f9;
    padding: 50px 400px 50px 40px;
    border-radius: 300px 0 0 300px;
}

.listTextC {
    margin: -35px 0px 0px 310px;
}
.HightlightedWord {
    color: #fb4275;
}
</style>
