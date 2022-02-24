<template>
    <div>
        <Main />
        <Cards />
        <Digital />
        <Contact />
        <Footer />
    </div>
</template>

<script>
import Footer from '../wjComponents/Footer.vue';
import Main from '../wjComponents/Main.vue';
import Cards from '../wjWidgets/WCard.vue';
import Digital from '../wjWidgets/WDigital.vue';
import Contact from '../wjWidgets/WContact.vue';

export default {
    name: 'Home',
    components: {
        Footer,
        Main,
        Cards,
        Digital,
        Contact,
    },
};
</script>

<style scoped>
* {
    font-family: 'Rubik', sans-serif;
}
</style>
>
