<template>
    <div>
        <div v-for="text in data" :key="text.km" class="C">
            <v-col cols="12" sm="6" md="3">
                <div class="Text-col">
                    <h1>{{ text.Contact.title }}</h1>
                </div>
                <div class="description">{{ text.Contact.description }}</div>
                <div class="Form">
                    <v-text-field label="MAIL"></v-text-field>
                    <v-btn rounded x-large color="#fb4275" dark class="Button">
                        {{ text.Contact.Button.content }}
                    </v-btn>
                </div>
            </v-col>
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
    margin: 0 0 0 365px;
}

h1 {
    font-size: 40px;
}

.Form {
    display: flex;
    flex-direction: row;
}

.HightlightedWord {
    color: #fb4275;
}

.Button {
    margin: 0 0 0 20px;
}
</style>
