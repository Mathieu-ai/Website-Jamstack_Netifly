<template>
    <div class="UP">
        <div>
            <div v-for="text in slogan" :key="text.km" class="C">
                <div class="Text-col">
                    <h1>{{ text.Services.title }}</h1>
                    <p class="description">
                        {{ text.Services.description }}
                    </p>
                </div>
            </div>
        </div>

        <v-container class="my-5">
            <v-layout row wrap class="layout">
                <v-flex
                    xs12
                    sm6
                    md4
                    lg3
                    v-for="subject in data"
                    :key="subject.name"
                >
                    <v-card
                        flat
                        class="text-center"
                        max-width="260px"
                        max-height="250px"
                        outlined
                        elevation="10"
                    >
                        <v-responsive class="ma-5 pt-4">
                            <v-avatar size="80" class="grey lighten-2">
                                <img :src="subject.newImg" />
                            </v-avatar>
                        </v-responsive>
                        <v-card-text>
                            <div class="subheading mt-n6 mb-4">
                                {{ subject.name }}
                            </div>
                            <div class="grey--text">{{ subject.desc }}</div>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import image1 from '../../assets/images/seo.svg';
import image2 from '../../assets/images/technology.svg';
import image3 from '../../assets/images/cloud.svg';
import image4 from '../../assets/images/support.svg';
import json from '../../assets/data/message.json';

export default {
    data() {
        return {
            data: json.eng.Services.Card,
            slogan: json,
        };
    },
    beforeMount() {
        json.eng.Services.Card[0].newImg = image1;
        json.eng.Services.Card[1].newImg = image2;
        json.eng.Services.Card[2].newImg = image3;
        json.eng.Services.Card[3].newImg = image4;
    },
};
</script>

<style scoped>
.C {
    display: flex;
    align-items: center;
    justify-content: center;
}

h1 {
    margin: 0 0 0 -390px;
    font-size: 40px;
}

.layout {
    margin: 0px 250px 0px 320px;
}
.Button {
    margin: 15px 0 0 400px;
}

.description {
    margin: 0 0 0 -390px;
    font-size: 15px;
}

.HightlightedWord {
    color: #fb4275;
}
</style>
