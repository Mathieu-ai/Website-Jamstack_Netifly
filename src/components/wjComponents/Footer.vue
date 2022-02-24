<template>
    <div>
        <div>
            <v-divider class="w-50 mb-5 test inset" />
            <div v-for="text in data" :key="text.km" class="FooterText">
                {{ text.Copyright.split(' ').slice(0, -1).join(' ') }}
                <div class="ml-1 HightlightedWord">
                    {{ text.Copyright.split(' ').pop() }}
                </div>
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
    beforeMount() {
        this.data.eng.Copyright;
        return <p class="HightlightedWord">res</p>;
    },
};
</script>

<style scoped>
.FooterText {
    color: #999;
    display: flex;
    justify-content: center;
}

.HightlightedWord {
    color: #fb4275;
}
</style>
