<template>
    <div>
        <div v-for="text in data" :key="text.km" class="C">
            <div class="Text-col">
                <h1>{{ text.Header.title }}</h1>
                <div class="description">{{ text.Header.description }}</div>

                <v-btn large color="#fb4275" dark class="Button">
                    {{ text.Header.Button.content }}
                </v-btn>
            </div>
            <div class="Img-col">
                <v-img
                    alt="banner"
                    class="Img"
                    src="../../assets/images/banner.png"
                />
            </div>
        </div>
    </div>
</template>

<script>
import json from '../../assets/data/message.json';

export default {
    data() {
        return {
            data: json,
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
    margin: 0 0 0 400px;
    font-size: 3.2em;
}

.Button {
    margin: 15px 0 0 400px;
}
.description {
    margin: 0 0 0 400px;
}
.Img {
    margin: 20px 350px 0 20px;
    max-width: 80%;
}

.HightlightedWord {
    color: #fb4275;
}
</style>
